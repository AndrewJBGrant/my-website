import { useState } from 'react'
import { links } from './data'

// const Tab = styled.button`
//   padding: 10px 30px;
//   cursor: pointer;
//   opacity: 0.6;
//   background: white;
//   border: 0;
//   outline: 0;
//   border-bottom: 2px solid transparent;
//   transition: ease border-bottom 250ms;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 2px solid black;
//     opacity: 1;
//   `}
// `;


 export function TabGroup() {
  const [active, setActive] = useState(links[0]);
  return (
    <>
      <div>
        {links.map((link) => (
          <a className='new-style'
            href={link.url}
            key={link}
            active={active === link}
            onClick={() => setActive(link)}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}


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



    <nav className='navbar'>


          {links.map((link) => {
            return (
              <a href={link.url} key={link.id} onClick={handleClick}>
                {link.text}
              </a>
            )
          })}


    </nav>
  )
}

export default Navbar
