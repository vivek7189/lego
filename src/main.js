import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './code.js';
import './code2.js';
import Landing from './components/landing/landing';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                </Switch>
            </Router>
        )
    }
}

export default Main
