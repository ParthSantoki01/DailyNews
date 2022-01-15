import React from 'react';
import ind from '../Photos/India.jpg';
import usa from '../Photos/USA.jpg';
import fra from '../Photos/France.jpg';
import aus from '../Photos/Australia.jpg';
import rus from '../Photos/Russia.jpg';
import uk from '../Photos/UK.jpg';
import { Link } from 'react-router-dom';
function Country() {
    return (
        <div className='container'>
            <h2 className='mt-3 text-center'>Country</h2>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-1'>
                <div className='col'>
                    <div className='card mb-3 w-100 shadow bg-body rounded-3'>
                        <img
                            src={ind}
                            className='card-img-top hovereffecs'
                            alt='India'
                            style={{ height: '30vh' }}
                        />
                        <div className='card-footer d-grid gap-2 p-1 bg-dark mt dropdown'>
                            <button
                                className='btn btn-dark dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton1'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                <strong>India</strong>
                            </button>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuButton1'
                            >
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/in/general'
                                    >
                                        General
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/in/business'
                                    >
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/in/entertainment'
                                    >
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/in/health'
                                    >
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/in/science'
                                    >
                                        Science
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/in/sports'
                                    >
                                        Sports
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/in/technology'
                                    >
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-3 w-100 shadow bg-body  rounded-3'>
                        <img
                            src={usa}
                            className='card-img-top hovereffecs'
                            alt='usa'
                            style={{ height: '30vh' }}
                        />
                        <div className='card-footer d-grid gap-2 p-1 bg-dark mt dropdown'>
                            <button
                                className='btn btn-dark dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton1'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                <strong>USA</strong>
                            </button>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuButton1'
                            >
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/us/general'
                                    >
                                        General
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/us/business'
                                    >
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/us/entertainment'
                                    >
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/us/health'
                                    >
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/us/science'
                                    >
                                        Science
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/us/sports'
                                    >
                                        Sports
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/us/technology'
                                    >
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-3 w-100 shadow bg-body rounded-3'>
                        <img
                            src={fra}
                            className='card-img-top hovereffecs'
                            alt='fra'
                            style={{ height: '30vh' }}
                        />
                        <div className='card-footer d-grid gap-2 p-1 bg-dark mt dropdown'>
                            <button
                                className='btn btn-dark dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton1'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                <strong>France</strong>
                            </button>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuButton1'
                            >
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/fr/general'
                                    >
                                        General
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/fr/business'
                                    >
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/fr/entertainment'
                                    >
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/fr/health'
                                    >
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/fr/science'
                                    >
                                        Science
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/fr/sports'
                                    >
                                        Sports
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/fr/technology'
                                    >
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-3 w-100 shadow bg-body rounded-3'>
                        <img
                            src={rus}
                            className='card-img-top hovereffecs'
                            alt='rus'
                            style={{ height: '30vh' }}
                        />
                        <div className='card-footer d-grid gap-2 p-1 bg-dark mt dropdown'>
                            <button
                                className='btn btn-dark dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton1'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                <strong>Russia</strong>
                            </button>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuButton1'
                            >
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/ru/general'
                                    >
                                        General
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/ru/business'
                                    >
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/ru/entertainment'
                                    >
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/ru/health'
                                    >
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/ru/science'
                                    >
                                        Science
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/ru/sports'
                                    >
                                        Sports
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/ru/technology'
                                    >
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-3 w-100 shadow bg-body rounded-3'>
                        <img
                            src={aus}
                            className='card-img-top hovereffecs'
                            alt='aus'
                            style={{ height: '30vh' }}
                        />
                        <div className='card-footer d-grid gap-2 p-1 bg-dark mt dropdown'>
                            <button
                                className='btn btn-dark dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton1'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                <strong>Australia</strong>
                            </button>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuButton1'
                            >
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/au/general'
                                    >
                                        General
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/au/business'
                                    >
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/au/entertainment'
                                    >
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/au/health'
                                    >
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/au/science'
                                    >
                                        Science
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/au/sports'
                                    >
                                        Sports
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/au/technology'
                                    >
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card mb-3 w-100 shadow bg-body rounded-3'>
                        <img
                            src={uk}
                            className='card-img-top hovereffecs'
                            alt='UK'
                            style={{ height: '30vh' }}
                        />
                        <div className='card-footer d-grid gap-2 p-1 bg-dark mt dropdown'>
                            <button
                                className='btn btn-dark dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton1'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                <strong>United Kindom</strong>
                            </button>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuButton1'
                            >
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/uk/general'
                                    >
                                        General
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/uk/business'
                                    >
                                        Business
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/uk/entertainment'
                                    >
                                        Entertainment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/uk/health'
                                    >
                                        Health
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/uk/science'
                                    >
                                        Science
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/uk/sports'
                                    >
                                        Sports
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className='dropdown-item'
                                        to='/country/uk/technology'
                                    >
                                        Technology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Country;
