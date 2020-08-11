import React, {Component} from "react";
import "./../css/Chats.css";
import Chat from "./Chat";

export default class Chats extends Component {
    state = {}

    render() {
        return (
            <div className="chats">
                <Chat key="1" name="Sarah" message="Hey! How are You" timestamp="35 minutes ago"
                      profilePic="https://images.pexels.com/photos/4956618/pexels-photo-4956618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
                <Chat key="2" name="Join" message="Hey! How are You" timestamp="35 minutes ago"
                      profilePic="https://images.pexels.com/photos/4956618/pexels-photo-4956618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
            </div>
        );
    }
}