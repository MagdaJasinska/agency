import React from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLaptop, faLock } from '@fortawesome/free-solid-svg-icons';


class Services extends React.Component {
        render() {
            return (
            <div className="services">
                <p className="services_title">services</p>
                <p className="services_subtitle">Lorem ipsum dolor sit amet consectetur</p>
                
                <div className="services_content">
                    <div className="service_item"> 
                     <FontAwesomeIcon icon={faShoppingCart} />
                    <p className="item_title">E-Commerce</p>
                    <p className="item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>

                    <div className="service_item">
                    <FontAwesomeIcon icon={faLaptop} /> 
                    <p className="item_title">Responsive Design</p>
                    <p className="item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>

                    <div className="service_item">
                    <FontAwesomeIcon icon={faLock} />
                    <p className="item_title">Web Security</p>
                    <p className="item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>        
                
                </div>
            </div>
            );
    }
}

export default Services;