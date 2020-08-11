import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import "./../css/Chat.css";
import {Link} from "react-router-dom";
export default class Chat extends Component{
    state = {

    }
    render() {
        return(
            <Link to={`/chat/${this.props.name}`}>
            <div className="chat">
                <Avatar className="chat_image" alt={this.props.name} src={this.props.profilePic} />
                <div className="chat_details">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.message}</p>
                </div>
                <p className="chat_timestamp">{this.props.timestamp}</p>
            </div>
            </Link>
        )
    }
}