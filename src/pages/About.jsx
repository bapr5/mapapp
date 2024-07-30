import { React, useState, useEffect } from 'react'
// import { io } from 'socket.io-client'

// const socket = io()

export default function About() {
  const [socketStatus, setSocketStatus] = useState('');
  const [isConnected, setIsConnected] = useState('ocket.connected');
  

  return (
    <div>
      <h3>{socketStatus}</h3>
    </div>
  )
}
