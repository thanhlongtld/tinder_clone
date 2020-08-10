import React from "react";
import "./../css/Header.css"
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

export default function Header() {
    return (
        // BEM
        <div className="header">
            <PersonIcon/>
            <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder-logo"/>
            <QuestionAnswerIcon/>
        </div>
    )
}

