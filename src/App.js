import React, { Component } from 'react';

import './reset.css';

import NameBar from './components/NameBar';
import Profile from './components/Profile';
import WorkExperience from './components/WorkExperience';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NameBar/>
                <WorkExperience/>
                <Profile/>
            </div>
            );
        }
    }
    
    export default App;
    