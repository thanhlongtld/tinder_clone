import React, {Component} from "react";
import "./../css/ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

export default class ChatScreen extends Component {
    state = {
        messages: [
            {
                name: "Sarah",
                image: "https://images.pexels.com/photos/4956618/pexels-photo-4956618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                message: "Whats up"
            },
            {
                name: "Sarah",
                image: "https://images.pexels.com/photos/4956618/pexels-photo-4956618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                message: "Hows it going"
            },
            {
                message: "Hi! How are you"
            }
        ],
        messageInput: ""
    }
    handleChange = e =>{
        this.setState({messageInput: e.target.value});
        console.log(this.state.messageInput)
    }
    handleSend = e => {
        e.preventDefault();
        let messages=[...this.state.messages];
        messages.push({message: this.state.messageInput});
        this.setState({messages})

    }
    render() {
        return (
            <div className="ChatScreen">
                <p className="ChatScreen_timestamp">You match with Sarah on 10/08/20</p>
                {
                    this.state.messages.map(message => (
                        message.name ? (
                            <div className="ChatScreen_message">
                                <Avatar className="ChatScreen_image" alt={message.name} src={message.image}/>
                                <p className="ChatScreen_text">{message.message}</p>
                            </div>
                        ) : (
                            <div className="ChatScreen_message">
                                <p className="ChatScreen_textUser">{message.message}</p>
                            </div>
                        )

                    ))
                }
                <form className="ChatScreen_input">
                    <input value={this.state.messageInput} onChange={(e)=> this.handleChange(e)} className="ChatScreen_inputField" placeholder="Type a message" type="text"/>
                    <button onClick={(e)=> this.handleSend(e)} className="ChatScreen_inputButton">SEND</button>
                </form>
            </div>
        )
    }
}