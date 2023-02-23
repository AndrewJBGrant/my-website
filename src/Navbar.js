import React from 'react'
import { links } from './data'
const Navbar = () => {
  const handleClick = (event) => {
    event.preventDefault()
    const target = event.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 64,
    })
  }
  return (
    <nav className='navbar sticky'>
      <div className='nav-center'>
              <h4>AndrewJBGrant</h4>
        <div>

          {links.map((link) => {
            return (
              <a href={link.url} key={link.id} onClick={handleClick}>
                {link.text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
