import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [nav_up, setNav_up] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function scrollto_div(id){
    var p = document.getElementById(id).offsetTop - 80;
    window.scrollTo({
      top: p,
      behavior: 'smooth',
    });

    setClick(false);
  }

  function MenuItem(props){
    return (
      <li className='nav-item'>
        <button className='nav-links'onClick={()=>scrollto_div(props.section)}>
          {props.name}
        </button>
      </li>
    );
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  window.addEventListener('scroll', function(){
    if (window.scrollY > 0){
      setNav_up(false);
    } else {
      setNav_up(true);
    }
  })

  return (
    <div className={ !click & nav_up ? 'navbar' : 'navbar-up'}>
      <span className='logo'><Link to='/' className='navbar-logo' onClick={closeMobileMenu}>GrowSocial</Link></span>
      <span className='menu-icon' onClick={handleClick}>
        <img src={ !click & nav_up ? './assets/menu_icon_whiet.png' : './assets/menu_icon.png' } alt="menu" />
      </span>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <MenuItem name = 'home' section='home' />
        <MenuItem name = 'Get Free Likes' section='likesAndfolliwers' />
        <MenuItem name = 'Get Free Followers' section='likesAndfolliwers' />
        <MenuItem name = 'Download App' section='downloadApp' />
        <MenuItem name = 'Contact US' section='contactUs' />
      </ul>
    </div>
  );

  // return (
  //     <div className={ !click & nav_up ? 'navbar' : 'navbar-up'}>
  //       <div className='navbar-container'>
  //         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
  //           GrowSocial
  //         </Link>
  //         <div className='menu-icon' onClick={handleClick}>
  //           <img src={nav_up ? './assets/menu_icon_whiet.png' : './assets/menu_icon.png' } alt="menu" />
  //         </div>
  //         <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
  //           <li className='nav-item'>
  //             <a className='nav-links' 
  //               onClick={()=>scrollto_div('home')}>
  //               Home
  //             </a>
  //           </li>
//             <li className='nav-item'>
//               <a
//                 className='nav-links'
//                 onClick={()=>scrollto_div('likesAndfolliwers')}
//               >
//                 Get Free Likes
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a
//                 className='nav-links'
//                 onClick={()=>scrollto_div('likesAndfolliwers')}
//               >
//                 Get Free Followers
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-links' onClick={()=>scrollto_div('downloadApp')}>
//                 Download App
//               </a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-links' onClick={()=>scrollto_div('contactUs')}>
//                 Contact US
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//   );
}

export default Navbar;