import { React, useState, useEffect } from 'react'
import { ConnectionState } from '../components/ConnectionState';


// import { io } from 'socket.io-client'
// const socket = io()

import {socket} from '../socket'

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

    socket.on("connection",(socket)=>{
      setConnections(socketStatus+socket)
      onConnect()
    })
    // socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  // const [isConnected, setIsConnected] = useState('ocket.connected');
  
  // const io = require('socket.io')
  // const socket = io('http://localhost'); 
  return (
<>
<div>
        <ConnectionState isConnected={ ConnectionState } />

    </div>
    <div>
      <i>{connections}</i>
    </div>
</>
  )
}
