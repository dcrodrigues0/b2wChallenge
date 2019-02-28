import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api';

export default class WorkExperience extends Component{

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

    // createExperience = (profile) =>{
    //     if(profile.experience){
    //         for(var i = 0; i < profile.experience.length; i++){
    //             console.log(profile.experience.length);
    //             return(
    //                 <div>
    //                     <h1>work experience</h1>
    //                     <hr/>
    //                     <h1>{profile.experience[i].name}</h1>
    //                     <p>{profile.experience[i].date}</p>
    //                     <br/>
    //                     <p>{profile.experience[i].description}</p>
    //                     <br/>
    //                 </div>
    //             );
    //         }
    //     }else{
    //         return '';
    //     }
    // }

    render(){

        const {profile} = this.state;

        return(
            <div className="rightBar">
                
                {/* {this.createExperience(profile)} */}

                {profile.experience? (
                    <div>
                        <h1>work experience</h1>
                        <hr/>
                        <h1>{profile.experience[0].name}</h1>
                        <p>{profile.experience[0].date}</p>
                        <br/>
                        <p>{profile.experience[0].description}</p>
                        <br/>

                        <h1>{profile.experience[1].name}</h1>
                        <p>{profile.experience[1].date}</p>
                        <br/>
                        <p>{profile.experience[1].description}</p>
                        <br/>

                        <h1>{profile.experience[2].name}</h1>
                        <p>{profile.experience[2].date}</p>
                        <br/>
                        <p>{profile.experience[2].description}</p>
                        <br/>
                    </div>
                ):''}


                {profile.experience? (
                    <div>
                        <h1>education</h1>
                        <hr/>
                        <br/>
                        <h1>{profile.education[0].name}</h1>
                        <p>{profile.education[0].date}</p>
                        <br/>
                        <p>{profile.education[0].description}</p>
                        <br/>
                        <h1>{profile.education[1].name}</h1>
                        <p>{profile.education[1].date}</p>
                        <br/>
                        <p>{profile.education[1].description}</p>
                    </div>
                ):''}
            </div>
            );
        }
    }