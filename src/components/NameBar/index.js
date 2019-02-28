import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class NameBar extends Component{

    state = {
        profile: [],
    }


    componentDidMount(){
        this.loadData();
    }

    loadData = async () =>{
        const response = await api.get(`/5a5e38f3330000b0261923a5`); 

        this.setState({profile: response.data.profile})
    };


    render(){

        const {profile} = this.state;

        return(
            <div className="leftBar">
                <div className="img-profile">
                <img src={profile.image}     alt="avatar"></img>
                </div>
                <p className="name">{profile.name}</p>
                <p className="profession">{profile.profession}</p>
            </div>
            );
        }
    }