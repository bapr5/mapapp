import React from 'react'


export default function Button({children, onClick, isActive}) {

  return (
    <button className={isActive ? "btn btn-primary":"btn btn-secondary"} onClick={onClick}>{children}</button>
  )
}
