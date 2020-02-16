import React from 'react';
import './portfolio.scss';
import data from './data.json';
import Popup from './popup';



class Portfolio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            items: data,
            currentItem: data[0],
        };
    }

    showPopup(currentItem) {

        this.setState({
            currentItem: currentItem
        })

        let popup = document.querySelector('.popup_wrapper');
        let body = document.querySelector('body');

        popup.classList.add('active');
        body.classList.add('popup_open');
    }

    render() {

        let itemsHtml = [];
        let i = 0;


        this.state.items.forEach((item) => {

            itemsHtml.push(
                <div className="portfolio_item" key={i}>
                    <div className="portfolio_container" onClick={() => this.showPopup(item)}>
                        <div className="img_overlay"> </div>
                        <img className="portfolio_img" src={item.url_thumbnail} alt={item.category} />
                        <span className="item_icon_plus">+</span>
                    </div>
                    <div className="img_text">
                        <p className="img_title">{item.client}</p>
                        <p className="img_description">{item.category}</p>
                    </div>
                </div>);

            i++;
        });

        return (
            <div className="section_bgc">
              <div className = "section_container" id="portfolio">
                <div className="section_introduction">
                    <p className="section_title">portfolio</p>
                    <p className="section_subtitle">Lorem ipsum dolor sit amet consectetur</p>
                    <div className="portfolio_content">
                        {itemsHtml}
                    </div>
                 </div>
              </div>
              <Popup activeItem={this.state.currentItem} />
            </div>

        )
    }
}



export default Portfolio;