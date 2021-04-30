import { io } from "socket.io-client";
import { store } from '../app/store'
import { setInRoom, setIsHost } from '../app/slices/roomSlice';

const URL = "localhost:5000";
const socket = io(URL, { autoConnect: false });

socket.io.on('open', () => {
    console.log('connected')
})

socket.on('create-room-success', (id) => {
    console.log(`room ${id} created successfully`)
    store.dispatch(setInRoom(id));
    store.dispatch(setIsHost(true));
})

export const createRoom = async (username: string) => {
    socket.auth = { username };
    socket.connect();
    socket.io.on('open', () => {
        console.log(`connected to server as ${username}`);
        const generatedId = [...Array(4)].map(i => (~~(Math.random() * 36)).toString(36)).join('');
        socket.emit('create-room', generatedId);
    })
}

export default socket;