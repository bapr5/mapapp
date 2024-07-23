import React from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps';
export default function MapPage() {
  return (
    
     <YMaps >
      <Map  defaultState={{ center: [55.75, 37.57], zoom: 9 }} width='100%' height="600px"/>
  </YMaps>
  )
}
