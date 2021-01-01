import { Component } from "react"


class NavLink extends Component() {
 render(){
 return (
  <li className='nav-item'>
   <a className='nav-Link'href=
   {this.probs.LinkUrl}>
   {this.probs.LinkName}
   </a>
   </li>
 )
}}

export default NavLink
