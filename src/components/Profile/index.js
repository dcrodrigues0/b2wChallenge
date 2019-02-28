import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class Profile extends Component{

    state = {
        profile: {},
        skills: {},
    }


    componentDidMount(){
        this.loadData();
    }

    loadData = async () =>{
        const response = await api.get(`/5a5e38f3330000b0261923a5`); 
        this.setState({profile: response.data.profile})
    };

    // createSkillBars = () =>{
    //     let {profile} = this.state;

    //     if(profile.skills){
    //         for(var i=0; i < profile.skills.length; i++){
    //             return(
    //                 <div>
    //                     <h6 className="title-progress">{profile.skills[i].name}</h6>
    //                     <div className="progressBar">
    //                         <div id="progress" className="progress"></div>
    //                     </div>
    //                 </div>
    //             );
    //         }
    //     }else{
    //         return '';
    //     }
        
    // }

    render(){

        let {profile} = this.state;
        
        return(
            <div className="profileBar">
                <h6>profile</h6>
                <hr/>
                <br/>
                <p>{profile.description}</p>
                <h6>CONTACT</h6>
                <hr/>
                <br/>
                
                {profile.contact? (
                    <div>
                        <p>{profile.contact.tel}</p>
                        <p>{profile.contact.cel}</p>
                        <p>{profile.contact.address}</p>
                        <br/>
                        <p>{profile.contact.website}</p>
                        <p>{profile.contact.mail}</p>
                        <br/>
                    </div>
                ):''}
                
                <h6>skills</h6>
                <hr/>

                {profile.skills? (
                    <div>
                        <h6 className="title-progress">{profile.skills[0].name}</h6>
                        <div className="progressBar">
                            <div id="progress"  className="progress p1"></div>
                        </div>

                        <style dangerouslySetInnerHTML={{__html: `
                            .p1{
                                width:${profile.skills[0].value}!important;
                            }
                        `}}>
                        </style>
                        
                        <h6 className="title-progress">{profile.skills[1].name}</h6>
                        <div className="progressBar">
                            <div id="progress" className="progress p2"></div>
                        </div>

                        <style dangerouslySetInnerHTML={{__html: `
                            .p2{
                                width:${profile.skills[1].value}!important;
                            }
                        `}}>
                        </style>

                        <h6 className="title-progress">{profile.skills[2].name}</h6>
                        <div className="progressBar">
                            <div id="progress" className="progress p3"></div>
                        </div>

                        <style dangerouslySetInnerHTML={{__html: `
                            .p3{
                                width:${profile.skills[2].value}!important;
                            }
                        `}}>
                        </style>
                    </div>
                ):''}

            </div>
            );
        }
    }
