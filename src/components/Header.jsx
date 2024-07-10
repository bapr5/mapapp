import React from 'react'

export default function Header({children}) {
  return (
    <header>
    <nav className="navbar-dark bg-dark">
  <span className="navbar-text">
    Map app
  </span>
  <span>{children}</span>
</nav>
    </header>
  )
}
