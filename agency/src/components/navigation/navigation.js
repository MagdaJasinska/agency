import React from 'react';
import './navigation.css';

let lastScrollY = 0;


class Navigation extends React.Component {

    state = {
        scrollAction: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        lastScrollY = window.scrollY
        if (lastScrollY >= 120) {
            this.setState({
                scrollAction: true
            });
        }
        else {
            this.setState({
                scrollAction: false
            });
        }
    }
    render() {
        return (
            < nav className={
                this.state.scrollAction ? 'scroll_action' : null
            }
            >

                <ul>
                    <li className={
                        this.state.scrollAction ? 'logo scroll_action_logo' : 'logo'
                    }
                    >
                        Company logo
                </li>
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