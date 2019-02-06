import React, { Component } from 'react';
import '../common/css/bootstrap.css';
import '../common/css/reset.min.css';
import './navbar.less';
import {NavLink as Link,BrowserRouter as Router} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to={'/'}>
                            <img src="https://s.vipkidstatic.com/fe-static/parent/panda/web/plugs/header/img/vipkidHeader_52ec2f20.png" width="114" height="56" alt=""/>
                    </Link>
                    <button className="navbar-toggler navbar-left" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar NavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>首页 <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>北美师资</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/classNamelist'}>公开课</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={'/'} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            课程体系
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to={'/'}>vipkid mc</Link>
                            <Link className="dropdown-item" to={'/'}>vipkid 全项</Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
            </Router>
        );
    }
}

export default Navbar;