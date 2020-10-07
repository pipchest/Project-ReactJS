
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

export default function Cards() {
    return (
        <div className="cards">
        <h1>Check out this EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/img-22.jpg"
                    text="Explore the hidden waterfall deep inside the Martvili Canyon"
                    label="Adventure"
                    path="/services"

                     />
                      <CardItem
                    src="images/svaneti.jpg"
                    text="Travel through the Islands of Svaneti by horse"
                    label="Luxury"
                    path="/services"

                     />
                     
                </ul>
                <ul className="cards__items">
                    <CardItem
                    src="images/batumi.jpg"
                    text="Enjoy Amazing city, Star of Georgia - Batumi!"
                    label="Adventure"
                    path="/services"

                     />
                      <CardItem
                    src="images/kakheti.jpg"
                    text="Kakheti, Motherland of Wine, You must try!"
                    label="Relax"
                    path="/services"

                    

                     />
                      <CardItem
                    src="images/ratcha.jpg"
                    text="Mysterious trip in Racha, Amazing mountains view"
                    label="Luxury"
                    path="/services"

                    

                     />
                     
                     
                </ul>
            </div>
        </div>
        </div>
    )
}

