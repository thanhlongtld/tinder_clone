import React from "react";
import "./../css/Header.css"
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link, useHistory} from "react-router-dom";

export default function Header({backButton}) {
    const history = useHistory();
    return (
        // BEM
        <div className="header">

            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIcon fontSize="large"/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header_icon" fontSize="large"/>
                </IconButton>
            )}
            <Link to="/">
                <img className="header_logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                     alt="tinder-logo"/>
            </Link>
            <Link to="/chats">

                <IconButton>
                    <QuestionAnswerIcon className="header_icon" fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

