import { io } from 'socket.io-client';

let SOCK_URL='127.0.0.1:3005'

export const socket = io(SOCK_URL)