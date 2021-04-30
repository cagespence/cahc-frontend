import { io } from "socket.io-client";
import { store } from '../app/store'
import { setInRoom, setIsHost } from '../app/slices/roomSlice';
import { setIsConnected } from '../app/slices/socketSlice';

const URL = "localhost:5000";
const socket = io(URL, { autoConnect: false });
const isConnected = (): boolean => {
    return store.getState().socket.isConnected;
}
const generateId = (length: number): string => {
    return [...Array(length)].map(i => (~~(Math.random() * 36)).toString(36)).join('')
}

socket.io.on('open', () => {
    console.log('connected')
})

socket.io.on('close', () => {
    console.log('disconnected');
    store.dispatch(setIsConnected(false));
})

socket.on('create-room-success', (id) => {
    console.log(`room ${id} created successfully`)
    store.dispatch(setInRoom(id));
    store.dispatch(setIsHost(true));
})

socket.on('join-room-success', (id) => {
    console.log(`room ${id} joined successfully`)
    store.dispatch(setInRoom(id));
})

export const connect = (username: string, callback: (args?: any) => any, args?: any) => {
    socket.auth = { username };
    socket.connect();
    socket.io.on('open', () => {
        console.log(`connected to server as ${username}`);
        store.dispatch(setIsConnected(true));
        if (args) {
            callback(args);
        }
        if (!args) {
            callback();
        }
    })
}

export const createRoom = () => {
    if (isConnected()) {
        const id = generateId(4);
        socket.emit('create-room', id);
    }
}

export const joinRoom = (id: string) => {
    if (isConnected()) {
        socket.emit('join-room', id);
    }
}

export default socket;