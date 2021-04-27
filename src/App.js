import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            < Navbar state={props.state.dialogsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogIthem'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/profile'
                       render={() => <Profile  store={props.store}/>}/>

                <Route path='/news' render={() => <News state={props.state.newsPage}
                                                        newsPost={props.state.newsPage.newsPost}/>}/>

                <Route path='/music' render={() => <Music state={props.state.musicPage}
                                                          newPostMusic={props.state.musicPage.newPostMusic}/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    )
}
export default App;
