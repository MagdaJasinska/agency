import React from 'react';
import './portfolio.css';
import ReactHtmlParser from 'react-html-parser';

class Portfolio extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            items: []
        };
    }

    componentDidMount () {
        fetch("https://randomuser.me/api/?results=6")
        .then(res => res.json())
        .then( 
            (result) => {

                console.log(result)

              this.setState({
                items: result.results
              })
            },
           (error) => {
              this.setState({
                error: error
              })
            }
           
        )
        
    }

    render () {
        
        let items = ""

       
        this.state.items.forEach( (item) => {
            console.log(item.url)
            items += `<div class="portfolio_item"> 
                        <img class="portfolio_img" src="${item.picture.large}" alt="portfolio image"/>
                        <div class="img_text">
                            <p class="img_title">Threads</p>
                            <p class="img_description">Ilustration</p>
                        </div>
                    </div>`
        })

        return (
            <div className="section">
               <div className="portfolio">
                <p className="portfolio_title">portfolio</p>
                <p className="portfolio_subtitle">Lorem ipsum dolor sit amet consectetur</p>
                
                <div className="portfolio_content">
                  { ReactHtmlParser (items) }
                </div>
              </div>
            </div>
        )
    }
}

export default Portfolio;