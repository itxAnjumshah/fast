import React from 'react'
import css from './header.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <h1>Header part</h1>
      <nav>
        <ul>
            <li> <Link to={'/'}>HOME</Link></li>
            <li> <Link to={'/about-us'}>ABOUT</Link></li>
            <li> <Link to={'/contact'}>CONTACT</Link></li>
            <li> <Link to={'/course'}>COURSE</Link> </li>
            <li> <Link to={'/blog'}>Blog</Link> </li>
        </ul>
      </nav>
    </div>
  )
}
