import React from "react";
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import profileimage from '../../components/ProfilePicture/profile-picture.png';
import Blurb from '../../components/Blurb/Blurb';
import Navigation from '../../components/Navigation/Navigation';
import './Help.css'

function Help() {
    return (<div>
        <main>
            <div className='top'>
                <Navigation />
                <ProfilePicture image={profileimage} className="topItem" />
            </div>
            <div className="page">
                <div className="content">
                    <h4>This page is under construction. Please check back later.</h4>
                </div>
            </div>
        </main>
    </div>)
}

export default Help;