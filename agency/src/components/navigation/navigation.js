import React from 'react';
import './navigation.css';

class Navigation extends React.Component {
    render () {
        return (
            <nav>
               
                <ul>
                <li className="logo">Company logo</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
                </ul>
               
            </nav>
        )
        ;
    }
}

export default Navigation;