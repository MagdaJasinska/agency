import React from 'react';
import './portfolio.css';
import ReactHtmlParser from 'react-html-parser';
import data from './data.json'


class Portfolio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            items: data
        };
    }

    render () {
        
        let itemsHtml = "";

        

        this.state.items.forEach( (item) => {
          
          
            itemsHtml += `<div class="portfolio_item"> 
                        <div class="portfolio_container">
                            <div class="img_overlay"> </div>
                            <img class="portfolio_img" src="${item.url_thumbnail}" alt="portfolio image"/>
                            <span class=item_icon_plus>+</span>
                        </div>
                        <div class="img_text">
                            <p class="img_title">${item.client}</p>
                            <p class="img_description">${item.category}</p>
                        </div>
                    </div>`
        })

        return (
            <div className="section">
               <div className="portfolio">
                <p className="portfolio_title">portfolio</p>
                <p className="portfolio_subtitle">Lorem ipsum dolor sit amet consectetur</p>
                
                <div className="portfolio_content">
                  {
                    ReactHtmlParser(itemsHtml)
                  }
                </div>
              </div>
            </div>
        )
    }
}

export default Portfolio;