import React, { Component } from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import {Link} from 'react-router-dom';
import './index.css';

class Detail extends Component {
	render() {
        const {item} = this.props.location.state;
        // console.log(item);
		return (
            <div className="detailsContainer">
                <Header/>
                <Link className="backButton" to={{pathname:'/'}}>Back to home</Link>
                <div className="detailContent">
                    <div className="detailBox">
                        <p>{item.name}</p>
                        <img alt="product" src={item.url}></img>
                        <h4>Price: {item.price}</h4>
                    </div>
                </div>
                <Footer/>
            </div>
		);
	}
}

export default Detail;