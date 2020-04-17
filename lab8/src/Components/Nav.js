import React from 'react'
import imageOne from '../images/book.png'

function Nav() {
    return(
        <div className="nav">
            <img className="logo" src={imageOne} alt="book"/>
            <ul className="menu">
                <li><a className="links" href="#">Home</a></li>
                <li><a className="links" href="#">Books</a></li>
                <li><a className="links" href="#">Authors</a></li>
            </ul>
            <a className="logout" href="#"><button>Log Out</button></a>
        </div>
    )
}

export default Nav