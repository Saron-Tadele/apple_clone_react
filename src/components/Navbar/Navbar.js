import React from 'react'
import './Navbar.css'
import logo from './logo-sm.png'
import cart from './cart-sm.png'
import search from './search-icon-sm.png'
// import NavLink from './NavLink'


function Navbar() {
 return (
  <div className="nav-wrapper fixed-top ">
    <div className="container">
      <header className="navbar navbar-toggleable-sm navbar-expand-md">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
          data-target=".navbar-collapse">
          ☰
        </button>
        <a className="icon nav-link logo-link navbar-brand mx-auto" href="/Home/"><img src={logo}/></a>
        <div className="navbar-collapse collapse ">
         
          <ul className="navbar-nav nav-justified w-100 nav-fill ">
          {/* <NavLink LinkName='mac'LinkUrl='/mac/'/>
          <NavLink LinkName='ipad'LinkUrl='/ipad/'/>
          <NavLink LinkName='iphone'LinkUrl='/iphone/'/>
          <NavLink LinkName='Watch'LinkUrl='/Watch/'/>
          <NavLink LinkName='tv'LinkUrl='/tv/'/>
          <NavLink LinkName='Music'LinkUrl='/Music/'/>
          <NavLink LinkName='support'LinkUrl='/support/'/> */}
            <li className="nav-item"><a className=" nav-link " href="/mac/">Mac</a> </li>
            <li className="nav-item"><a className=" nav-link " href="/ipad/">iPad</a></li>
            <li className="nav-item"><a className=" nav-link " href="/iphone/">iPhone</a></li>
            <li className="nav-item"><a className=" nav-link " href="/watch/">Watch</a></li>
            <li className="nav-item"><a className=" nav-link " href=" /tv/">TV</a></li>
            <li className="nav-item"><a className=" nav-link " href="/music/">Music</a></li>
            <li className="nav-item"><a className=" nav-link " href="support">Support</a></li>
            <li className="search-box search-link nav-item"><a className=" nav-link " href="/search/"> 
            <img
                  src={search}/>
                   </a></li>
            <li className="ocon cart-link  nav-item"><a className=" nav-link " href="/Home/">
            <img src={cart}/> 

                   </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  </div>
 )
}

export default Navbar



