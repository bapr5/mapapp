import { React, useState, useEffect, useCallback } from 'react'
import { ConnectionState } from '../components/ConnectionState';
import LogBox from '../components/LogBox'
// import { socket } from '../socket'
import { io } from 'socket.io-client';
let SOCK_URL = '127.0.0.1:3005'
const socket = io(SOCK_URL)

function onButton() {
  socket.emit("hi");
  console.log("hi");
}
export default function About() {
  const [connections, setConnections] = useState([])
  const [socketStatus, setSocketStatus] = useState(socket.connected);
  useEffect(() => {



    function onConnect() {
      setSocketStatus(true);
    }

    function onDisconnect() {
      setSocketStatus(false);
    }
    socket.on("connect", () => {
      console.log(socket.id)
      onConnect()
    })
    socket.on('disconnect', onDisconnect);
    socket.on('number', (number) => {
      console.log(number)
    })
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);
  return (
    <>
      <div>
        <ConnectionState isConnected={ConnectionState} />
      </div>
      <div>
        <button onClick={() => {  onButton(); }}>Нажми меня</button>
        <i>{connections}</i>
      </div>
    </>
  )
}
