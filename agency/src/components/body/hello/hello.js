import React from 'react';
import './hello.css';


class Hello extends React.Component {

constructor(props) {
    super(props);
    this.state= {
        isVisible: false
    }
}

componentDidMount() {
    this.hideSaveCover ();
}

componentWillUnmount () {
    clearTimeout(this.timer);
}

  hideSaveCover() {
    
    this.timer = setTimeout(() => {
      this.setState({
        isVisible: false
      });
    }, 2300);
  }
  

  render() {
    return (
      <div className="hello" style={{ display: this.state.isVisible ? "flex" : "none"}}>
       <p className="hello_txt"> Hello </p>
      </div>
    );
  }

}

export default Hello;