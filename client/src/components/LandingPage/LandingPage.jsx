import React, { Component } from "react";
import perro from "./perro.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
    render() {
        return(
        <section>
            <div className='circle'></div>
            <div className="content">
                <div className="textBox">
                    <div><h2>No son animales <br /> Son <span>Perros</span>.</h2></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam aut similique molestiae pariatur?Temporibus repellendus modi consequatur.</p>
                    <Link to="/home" className="Link">Learn More</Link>
                </div>
          <div className='imgBox'>
            <img src={perro} alt="gh" />
          </div>
        </div>
        <ul className='thumb'>
          <li><img src='https://pngimg.com/uploads/dog/dog_PNG50318.png' alt="" /></li>
          <li><img src='https://pngimg.com/uploads/dog/dog_PNG50317.png' alt=""/></li>
          <li><img src='https://www.pngplay.com/wp-content/uploads/12/Dog-PNG-HD-Photos.png' alt=""/></li>
        </ul>
        </section>
         )
    }
};