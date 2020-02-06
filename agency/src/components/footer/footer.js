import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


class Footer extends React.Component {

   state = {
      username: '',
      email: '',
      tel: '',
      message: '',
      form_alert: '',

      errors: {
         username: false,
         email: false,
         tel: false,
         message: false,
      }
   }
   messages = {
      username_incorrect: 'Please enter your name.',
      email_incorrect: 'Please enter your email with @.',
      tel_incorrect: 'Please enter your phone number.',
      message_incorrect: 'Please enter a message.',
   }

   handleChange = (e) => {
      const name = e.target.name;
      const type = e.target.type;
      if (type === "text" || type === "email" || type === "tel" || type === "textarea") {
         const value = e.target.value;
         this.setState({
            [name]: value
         })
      }
   }

   handleSubmit = (e) => {
      e.preventDefault()

      const validation = this.formValidation()


      if (validation.correct) {
         this.setState({
            username: '',
            email: '',
            tel: '',
            message: '',
            form_alert: 'Formularz został wysłany',

            errors: {
               username: false,
               email: false,
               tel: false,
               message: false,
            }
         })
      } else {
         this.setState({
            errors: {
               username: !validation.username,
               email: !validation.email,
               tel: !validation.tel,
               message: !validation.message,
            }
         })
      }
   }

   formValidation() {
      let username = false;
      let email = false;
      let tel = false;
      let message = false;
      let correct = false;

      if (this.state.username.length > 1) {
         username = true;
      }

      if (this.state.email.indexOf('@') !== -1) {
         email = true;
      }

      if (this.state.tel.length > 1) {
         tel = true;
      }

      if (this.state.message.length > 1) {
         message = true;
      }

      if (username && email && tel && message) {
         correct = true;
      }
      return ({
         correct,
         username,
         email,
         tel,
         message,
      })

   }


   render() {
      return (
         <div className="footer_container">
            <div className="footer_bgc">
               <div className="footer_bgc_map">
                  <div className="footer_contact">
                     <div className="footer_contact_title">contact us</div>
                     <div className="footer_contact_subtitle">Lorem ipsum dolor sit amet consectetur.</div>
                  </div>
                  <form onSubmit={this.handleSubmit} noValidate className="footer_form">
                     <div className="footer_form_left">
                        <div className="form_group">
                           <input className="form_field" type="text" id="name" name="username" placeholder="Your Name" value={this.state.username} onChange={this.handleChange} />
                           {this.state.errors.username && <span className="validation_message">{this.messages.username_incorrect}</span>}
                        </div>
                        <div className="form_group">
                           <input className="form_field" type="email" id="email" name="email" placeholder="Your Email" value={this.state.email} onChange={this.handleChange} />
                           {this.state.errors.email && <span className="validation_message">{this.messages.email_incorrect}</span>}
                        </div>
                        <div className="form_group">
                           <input className="form_field"
                              type="tel"
                              id="tel"
                              name="tel"
                              placeholder="Your Phone"
                              value={this.state.tel}
                              onChange={this.handleChange} />
                           {this.state.errors.tel && <span className="validation_message">{this.messages.tel_incorrect}</span>}
                        </div>
                     </div>
                     <div className="footer_form_right">
                        <div className="form_group textarea">
                           <textarea className="form_field textarea" id="message" name="message" placeholder="Your Message" value={this.state.message} onChange={this.handleChange}></textarea>
                           {this.state.errors.message && <span className="validation_message">{this.messages.message_incorrect}</span>}
                        </div>
                     </div>

                     <div className="footer_send_message">
                        <button className="footer_btn">send message</button>
                     </div>

                  </form>
               </div>

            </div>

            <div className="footer_inf">
               <div className="footer_inf_container">
                  <div className="footer_copyright"><p className="footer_copyright_txt">Copyright © Your Website 2020</p></div>
                  <div className="footer_socialsIcons_container">
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
                  <div className="footer_quicklinks">
                     <p className="footer_link">Privacy Policy</p>
                     <p className="footer_link">Terms of Use</p>
                  </div>

               </div>
            </div>

         </div>
      )
   }
}

export default Footer;