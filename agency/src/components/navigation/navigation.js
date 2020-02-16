import React from 'react';
import './navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';



class Navigation extends React.Component {

    state = {
        scrollAction: false,
        scrollServices: false,
        scrollPorfolio: false,
        scrollAbout: false,
        scrollTeam: false,
        scrollContact: false,
        menu: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.colorScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.addEventListener('scroll', this.colorScroll);
    }

    toggleMenu = () => {
        let menuList = document.querySelector('.menu');

        menuList.classList.toggle("menu_vissible")
    }

    handleScroll = () => {
        const lastScrollY = window.scrollY
        if (lastScrollY >= 120 && window.innerWidth > 767 ) {
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

    colorScroll = () => {
        const lastScrollY = window.scrollY
        if (lastScrollY >= 600 && lastScrollY <= 1200) {
            this.setState({
                scrollServices: true
            });
        }
        else {
            this.setState({
                scrollServices: false
            });
        }
        if (lastScrollY >= 1201 && lastScrollY <= 2130) {
            this.setState({
                scrollPorfolio: true
            });
        } else {
            this.setState({
                scrollPorfolio: false
            });
        }
        if (lastScrollY >= 2131 && lastScrollY <= 3720) {
            this.setState({
                scrollAbout: true
            });
        } else {
            this.setState({
                scrollAbout: false
            });
        }

        if (lastScrollY >= 3721 && lastScrollY <= 4225) {
            this.setState({
                scrollTeam: true
            });
        } else {
            this.setState({
                scrollTeam: false
            });
        }

        if (lastScrollY >= 4226 ) {
            this.setState({
                scrollContact: true
            });
        } else {
            this.setState({
                scrollContact: false
            });
        }
    }

    render() {
        return (
            < nav className={
                this.state.scrollAction ? 'nav_container scroll_action' : 'nav_container'
            }>
            <div className={
                        this.state.scrollAction ? 'logo scroll_action_logo' : 'logo'
                    }> Company logo </div>
                <ul className="menu">
                    <li className={
                        this.state.scrollServices ? 'active' : ''
                    }>
                        <a className="nav_link" href="#services">Services</a>
                    </li>
                    <li className={
                        this.state.scrollPorfolio ? 'active' : ''
                    }>
                        <a className="nav_link"  href="#portfolio">Portfolio</a>
                    </li>
                    <li className={
                        this.state.scrollAbout ? 'active' : ''
                    }>
                        <a className="nav_link" href="#about">About</a>
                    </li>
                    <li className={
                        this.state.scrollTeam ? 'active' : ''
                    }>
                        <a className="nav_link" href="#team">Team</a>
                    </li>
                    <li className={
                        this.state.scrollContact ? 'active' : ''
                    }>
                        <a className="nav_link" href="#contact">Contact</a>
                    </li>
                </ul>
                <div className="hamburger_container">
                    <FontAwesomeIcon className="hamburger_icon" icon={faBars} onClick={() => this.toggleMenu()} />
                </div>
            </nav>
        );
    }
}

export default Navigation;