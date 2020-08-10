import React from "react";
import TinderCard from "react-tinder-card";
import './../css/TinderCards.css';
import {Component} from "react";
import database from "./../firebase";

export default class TinderCards extends Component {
    state = {
        people: []
    }
    componentDidMount() {

        const unsubscribe = database.collection('people').onSnapshot(snapshot => {
            const people = [];
            snapshot.docs.forEach(doc => people.push(doc.data()));
            this.setState({people});
        });
        return () => {
            unsubscribe();
        }
    }


    render() {
        return (
            <div>
                <div className="cards_container">
                    {this.state.people.map(person => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={['up', 'down']}
                        >
                            <div style={{backgroundImage: `url(${person.url})`}} className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))}
                </div>
            </div>
        )
    }


}