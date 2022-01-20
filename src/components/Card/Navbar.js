import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    News Padho
                </Link>

                <button
                    className='btn btn-dark'
                    type='button'
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasWithBothOptions'
                    aria-controls='offcanvasWithBothOptions'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className='offcanvas offcanvas-top'
                    data-bs-scroll='true'
                    tabIndex='-1'
                    id='offcanvasWithBothOptions'
                    aria-labelledby='offcanvasWithBothOptionsLabel'
                    style={{
                        width: '100%',
                        bgColor: 'black',
                        textAlign: 'center',
                    }}
                >
                    <ul
                        className='list-group list-group-flush'
                        // style={{
                        //     height: '100vh',
                        //     backgroundColor: 'black',
                        // }}
                    >
                        <li className='list-group-item listitem'>
                            <Link
                                className='nav-link itemlink'
                                aria-current='page'
                                to='/business'
                            >
                                Business
                            </Link>
                        </li>
                        <li className='list-group-item listitem '>
                            <Link
                                className='nav-link itemlink'
                                aria-current='page'
                                to='/entertainment'
                            >
                                Entertainment
                            </Link>
                        </li>
                        <li className='list-group-item listitem '>
                            <Link
                                className='nav-link itemlink'
                                aria-current='page'
                                to='/general'
                            >
                                General
                            </Link>
                        </li>
                        <li className='list-group-item listitem '>
                            <Link
                                className='nav-link itemlink'
                                aria-current='page'
                                to='/health'
                            >
                                Health
                            </Link>
                        </li>
                        <li className='list-group-item listitem '>
                            <Link
                                className='nav-link itemlink'
                                aria-current='page'
                                to='/science'
                            >
                                Science
                            </Link>
                        </li>
                        <li className='list-group-item listitem '>
                            <Link
                                className='nav-link itemlink'
                                aria-current='page'
                                to='/sports'
                            >
                                Sports
                            </Link>
                        </li>
                        <li className='list-group-item listitem '>
                            <Link
                                className='nav-link itemlink'
                                aria-current='page'
                                to='/technology'
                            >
                                Technology
                            </Link>
                        </li>
                        <li className='list-group-item listitem '>
                            <Link
                                className='nav-link itemlink'
                                aria-current='page'
                                to='/country'
                            >
                                Country
                            </Link>
                        </li>
                        <li className='list-group-item listitem '>
                            <Link
                                className='nav-link itemlink'
                                aria-current='page'
                                to='/sources'
                            >
                                Sources
                            </Link>
                        </li>
                        <li className='list-group-item listitem  dropdown'>
                            <Link
                                className='nav-link itemlink dropdown-toggle'
                                to='/'
                                id='navbarDropdown'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                News Portals
                            </Link>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='navbarDropdown'
                            >
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/newsportal/bbc'
                                    >
                                        BBC News
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/newsportal/cnn'
                                    >
                                        CNN
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/newsportal/fox'
                                    >
                                        Fox News
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/newsportal/google'
                                    >
                                        Google News
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
