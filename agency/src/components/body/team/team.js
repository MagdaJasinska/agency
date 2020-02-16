import React from 'react';
import './team.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class Team extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=3")
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                this.setState({
                    items: result.results
                })
            },
                (error) => {
                    this.setState({
                        error
                    })
                }
            )

    }

    render() {

        let itemsHtml = [];


        this.state.items.forEach((item, i) => {

            itemsHtml.push(
                <div className="team_member" key={"member" + i} >
                    <img className="team_member_image" src={item.picture.large} alt="team member" />
                    <p className="team_member_name">{item.name.first} {item.name.last}</p>
                    <p className="team_member_email">{item.email}</p>
                    <div className="socialsIcons_container">
                        <span className="item_icon_container">
                            <FontAwesomeIcon className="item_icon social" icon={faTwitter} />
                        </span>
                        <span className="item_icon_container">
                            <FontAwesomeIcon className="item_icon social" icon={faFacebookF} />
                        </span>
                        <span className="item_icon_container">
                            <FontAwesomeIcon className="item_icon social" icon={faLinkedinIn} />
                        </span>
                    </div>
                </div>);

        })

        return (

            <div className="section_bgc">
                <div className="section_container" id="team">
                    <div className="section_introduction">
                        <p className="section_title">our amazing team</p>
                        <p className="section_subtitle">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="team_members_section">
                        {itemsHtml}
                    </div>
                </div>
            </div>

        )
    }
}

export default Team;