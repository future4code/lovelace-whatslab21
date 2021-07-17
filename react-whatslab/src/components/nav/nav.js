import React, { Component } from 'react'
import logo from "./../../img/iconeLabenu.gif"
import { NavBar } from './nav.style';


export default class nav extends Component {
    render() {
        return (
            <NavBar className="nav">
                <div className="nav__blocks">
                    <img src={logo}/>
                </div>
                <div className="nav__blocks"></div>
                <div className="nav__blocks"></div>                
            </NavBar>
        )
    }
}
