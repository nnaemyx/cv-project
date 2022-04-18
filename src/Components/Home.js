import React from "react";
import Education from "./Education";
import Practical from './Practical';
import Skills from "./Skills"
import './General.css';

function Home(){
    return(
        <>
            <div className="column">
                <div className="row">
                    <div className="heading">
                        <h1>Edeh johnpaul</h1>
                        <p>Email: edehjohnpaul@gmail.com</p>
                        <p>PhoneNo: (234) 8098240363</p>
                        <hr style={{width: '40%'}}/>
                        <Education/>
                        <hr style={{width: '80%'}}/>
                        <Practical/>
                    </div>
                    <div className="skills">
                       <Skills />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
