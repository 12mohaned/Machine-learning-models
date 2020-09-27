import React from 'react';
import './Navbar.css';
class Navbar extends React.Component{
  render(){
  return (
    <div className = 'Navbar'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul>
      <li><a class="active" href="#Home">Home</a></li>
      <li><a href="#Facts">Facts</a></li>
      <li><a href="#Advice">Advice</a></li>
      <li><a href="#Visuals">Visual Data</a></li>
    </ul>
</nav>
    </div>
  )
}
}
export default Navbar;
