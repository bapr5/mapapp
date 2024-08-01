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

function ChangeRoom(targetroom){
  
  console.log("changing room to :",targetroom)
  // selectRoom(2)
  socket.emit('joinroom',targetroom)
}

export default function About() {
  const [room,selectRoom]= useState(1);
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

    socket.on("global hi", ()=>{
      console.log("global event recieved.")
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

        <button onClick={() => {  onButton(); }}>click me</button>
        <button onClick={() => {  socket.emit("global"); console.log("global event button pressed") }}>global event</button>
        <i>{connections}</i>
        <b>{socketStatus}</b>
        </div>
        <div>
        Комнаты
        <button onClick={()=>{ChangeRoom(1);
          selectRoom(1)
        }
        }>1</button>
        <button onClick={()=>{ChangeRoom(2);
          selectRoom(2)}
        }>2</button>
        
      </div>
      <i>{room}</i>
    </>
  )
}
