import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div><h1>Arjun Komath</h1></div>
                    <div className="buttons">
                        <Link to='/' className="nav-button">Home</Link>
                        <Link to='/projects' className="nav-button">Projects</Link>
                        <a href="https://github.com/arjunkomath" className="nav-button">Github</a>
                        <a href="https://stackoverflow.com/users/1954422/arjun" className="nav-button">Stack Overflow</a>
                        <a href="https://www.linkedin.com/in/arjunkomath/" className="nav-button">LinkedIn</a>
                        <a href="mailto:arjunkomath@gmail.com" className="nav-button">Mail</a>
                    </div>
                    <div className="content">
                        <Route exact path='/' component={Home} />
                        <Route exact path='/projects' component={Projects} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
