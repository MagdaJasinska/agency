import React from 'react';
import './about.scss';

class About extends React.Component {
    render() {
        return (
            <div className="section_container" id="about">
                <div className="section_introduction">
                    <p className="section_title">about</p>
                    <p className = "section_subtitle" > Lorem ipsum, Lorem ipsum </p>
                </div>

                <div className="timeline">
                    <div className="timeline_container">
                        <div className="timeline_image">
                            <img className="timeline_image_circle" src="/images/about_images/1.jpg" alt="Our Humble Beginnings" />
                        </div>
                        <div className="timeline_description">
                            <div className="timeline_title">
                                <p>2009-2011</p>
                                <p>Our Humble Beginnings</p>
                            </div>
                            <div className="timeline_more">
                                <p className="timeline_more_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline_container">
                        <div className="timeline_image">
                            <img className="timeline_image_circle" src="/images/about_images/2.jpg" alt="An Agency is Born" />
                        </div>
                        <div className="timeline_description_inverted">
                            <div className="timeline_title">
                                <p>March 2011</p>
                                <p>An Agency is Born</p>
                            </div>
                            <div className="timeline_more">
                                <p className="timeline_more_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline_container">
                        <div className="timeline_image">
                            <img className="timeline_image_circle" src="/images/about_images/3.jpg" alt="Transition to Full Service" />
                        </div>
                        <div className="timeline_description">
                            <div className="timeline_title">
                                <p>December 2012</p>
                                <p>Transition to Full Service</p>
                            </div>
                            <div className="timeline_more">
                                <p className="timeline_more_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline_container">
                        <div className="timeline_image">
                            <img className="timeline_image_circle" src="/images/about_images/4.jpg" alt="Phase Two Expansion" />
                        </div>
                        <div className="timeline_description_inverted">
                            <div className="timeline_title">
                                <p>July 2014</p>
                                <p>Phase Two Expansion</p>
                            </div>
                            <div className="timeline_more">
                                <p className="timeline_more_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                            </div>
                        </div>
                    </div>

                    <div className="timeline_container">
                        <div className="timeline_image">
                            <p className="timeline_image_circle timeline_image_final">be part<br />of our<br />story!</p>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default About;