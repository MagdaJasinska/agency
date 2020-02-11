import React from 'react';
import './popup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


class Popup extends React.Component {

    hidePopup() {
        let iconClose = document.querySelector('.popup_wrapper');
        let btnClose = document.querySelector('.popup_wrapper');
        let body = document.querySelector('body');

        iconClose.classList.remove('active');
        btnClose.classList.remove('active');
        body.classList.remove('popup_open');
    }

    render() {


        return (
            <div className="popup_wrapper">
                <div className="popup_container">
                    <FontAwesomeIcon className="icon_close" onClick={this.hidePopup} icon={faTimes} />
                    <div className="popup_content">
                        <p className="section_title popup_title">{this.props.activeItem.title}</p>
                        <p className="section_subtitle">{this.props.activeItem.subtitle}</p>
                        <img className="popup_img" src={this.props.activeItem.url_full} alt={this.props.activeItem.category} />
                        <p className="popup_description">{this.props.activeItem.description}</p>
                        <div className="popup_details">
                            <p className="popup_date">Date: {this.props.activeItem.date}</p>
                            <p className="popup_client">Client: {this.props.activeItem.client}</p>
                            <p className="popup_category">Category: {this.props.activeItem.category}</p>
                        </div>
                        <button className="popup_close" onClick={this.hidePopup}>x close project</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup