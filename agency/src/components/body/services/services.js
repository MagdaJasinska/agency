import React from 'react';
import './services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLaptop, faLock, faCircle } from '@fortawesome/free-solid-svg-icons';


class Services extends React.Component {
    render() {
        return (
            <div className="section_container">
                <p className="section_title">services</p>
                <p className="section_subtitle">Lorem ipsum dolor sit amet consectetur</p>

                <div className="services_content">
                    <div className="service_item">
                        <span className="service_item_icon_container">
                            <FontAwesomeIcon className="service_item_icon cart" icon={faShoppingCart} />
                            <FontAwesomeIcon className="service_item_circle" icon={faCircle} />
                        </span>
                        <p className="item_title">E-Commerce</p>
                        <p className="item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>


                    <div className="service_item">
                        <span className="service_item_icon_container">
                            <FontAwesomeIcon className="service_item_icon laptop" icon={faLaptop} />
                            <FontAwesomeIcon className="service_item_circle" icon={faCircle} />
                        </span>
                        <p className="item_title">Responsive Design</p>
                        <p className="item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>

                    <div className="service_item">
                        <span className="service_item_icon_container ">
                            <FontAwesomeIcon className="service_item_icon lock" icon={faLock} />
                            <FontAwesomeIcon className="service_item_circle" icon={faCircle} />
                        </span>
                        <p className="item_title">Web Security</p>
                        <p className="item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Services;