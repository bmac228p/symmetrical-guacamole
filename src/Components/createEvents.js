import React from 'react';
import firebase from '../lib/firebase';
import {Redirect} from 'react-router-dom';

class createEvents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            location:"",
            time:"",
            date:"",
            price:"",
            description:"",
            toContact: false

        };
    }
    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }
    handleLocationChange = e => {
        this.setState({ location: e.target.value });
    }
    handleTimeChange = e => {
        this.setState({ time: e.target.value });
    }
    handleDateChange = e => {
        this.setState({date: e.target.value});
    }
    handlePriceChange = e => {
        this.setState({ price: e.target.value });
    }
    handleDescriptionChange = e => {
        this.setState({ description: e.target.value });
    }

    submitForm = () => {
        let db = firebase.firestore();
        console.log("Calling collection");
        console.log(this.state);
        console.log(typeof(this.state))
        db.collection("events").add(this.state)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
          this.setState({toContact: true});
    }

    render(){
        //add linking statement here once megan pushes

        return(
            <div>
            <h3 className="createEvents">Event Name:</h3>
            <input 
                type="text"
                value={this.state.name} 
                onChange={this.handleNameChange}
            />
            <h3 className="createEvents">Location:</h3>
            <input 
                type="text"
                value={this.state.location} 
                onChange={this.handleLocationChange}
            />
            
            <h3 className="createEvents">Time:</h3>
            <input
              type="text"
              value={this.state.time}
              onChange={this.handleTimeChange}
            />
            <h3 className="createEvents">Date:</h3>
            <input
              type="text"
              value={this.state.date}
              onChange={this.handleDateChange}
            />
            <h3 className="createEvents">Price:</h3>
            <input
                type="text"
                value={this.state.price}
                onChange={this.handlePriceChange}
            />
            <h3 className="createEvents">Description:</h3>
            <input
                type="text"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
            />
            <br></br>
            <br></br>
            <button 
            onClick={this.submitForm}
            >
                Submit
            </button>
            </div>
        );
    }
}

export default createEvents;

    
    
