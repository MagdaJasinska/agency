import React from 'react';
import './team.css';

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
        console.log(this.state.items)

        this.state.items.forEach((item) => {
            console.log(item.name.first, item.name.last, item.email)
        })

        return (

            <div className="team_section">
                <div className="team_container">
                    <div className="team_introduction">
                        <p className="team_tittle">our amazing team</p>
                        <p className="team_subtittle">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="team_members_section">
                        <div className="team_member">
                            <img className="team_member_image" src="./images/about_images/1.jpg" alt="team member" />
                            <p className="team_member_name">kay garland</p>
                            <p className="team_member_position">Lead Designer</p>
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
                        </div>
                        <div className="team_member">
                            <img className="team_member_image" src="./images/about_images/1.jpg" alt="team member" />
                            <p className="team_member_name">kay garland</p>
                            <p className="team_member_position">Lead Designer</p>
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
                        </div>
                        <div className="team_member">
                            <img className="team_member_image" src="./images/about_images/1.jpg" alt="team member" />
                            <p className="team_member_name">kay garland</p>
                            <p className="team_member_position">Lead Designer</p>
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
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Team;