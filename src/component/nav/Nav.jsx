import React from 'react';

const Nav = ({nav}) => {
    return (
        <li>
            <a className='btn btn-ghost' href={nav.path}>{nav.data}</a>
        </li>
            
    );
};

export default Nav;