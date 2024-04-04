import React from 'react'
import logo1 from "../../nba-images/logo1.png"
import "./header.css"

export default function Header() {
  return (
    <div id="header">
      <img id="header-logo" src={logo1} alt="logo" />
    </div>
  )
}
