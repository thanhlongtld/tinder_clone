import React from 'react';
import './App.css';
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import TinderCards from "./components/TinderCards";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/chat/:person">
                        <Header backButton="/chats"/>
                        <ChatScreen />
                    </Route>
                    <Route path="/chats">
                        <Header backButton="/"/>
                        <Chats/>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <TinderCards/>
                        <SwipeButtons/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
