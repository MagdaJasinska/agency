import React from 'react';
import './footer.css';

class Footer extends React.Component {

  handleSubmit = (e) => {
     e.preventDefault()
  }

    render () {
    return (
 <div className="footer_container">
     <div className="footer_bgc">
       <div className="footer_bgc_map">
            <div className="footer_contact">
               <div className="footer_contact_title">contact us</div>
               <div className="footer_contact_subtitle">Lorem ipsum dolor sit amet consectetur.</div>
             </div>
            <form onSubmit={this.handleSubmit} className="footer_form">
                 <div className="footer_form_left">
                    <div className="form_group">
                      <input className="form_field" type="text" id="name" name="name" placeholder="Your Name"/>
                    </div>
                    <div className="form_group">
                       <input className="form_field" type="email" id="email" name="email" placeholder="Your Email"/>
                    </div>
                    <div className="form_group">
                        <input className="form_field" type="tel" id="tel" name="tel" placeholder="Your Phone"/> 
                    </div>
                  </div>
                 <div className="footer_form_right">
                    <div className="form_group textarea">
                        <textarea className="form_field textarea" id="message" name="message" placeholder="Your Message"></textarea>
                    </div>
                 </div>
                
                 <div className="footer_send_message">
                 <button className="footer_btn">send message</button>
                </div>

             </form>
       </div>

     </div>

 </div>
    )
    }
}

export default Footer;