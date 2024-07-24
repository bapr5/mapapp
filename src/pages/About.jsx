import {React, useState} from 'react'

export default function About() {
  const [socketStatus, setSocketStatus] = useState('');

  
  return (
    <div>
          <h3>{socketStatus}</h3>
          
    </div>
  )
}
