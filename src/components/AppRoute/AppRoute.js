import React from 'react'
import { BrowserRouter as Router,
    Route,} from "react-router-dom";
import CardList from '../CardList/CardList';
import Form from '../Form/Form';
import LogIn from '../LogIn/LogIn';
import Menu from '../Menu/Menu';
import Register from '../Register/Register';

function AppRoute() {
    return (
        <div>
            <Router>
             <Menu />
             <Route path="/" exact component={CardList}  />
             <Route path="/form" component={Form}   />
             <Route path="/login" component={LogIn}   />
             <Route path="/register" component={Register}   />

             

            </Router>
        </div>
    )
}

export default AppRoute
