import React from 'react';
import Typical from 'react-typical';
import "./Title.css";

const Title = () => {
    return (
        <div className="row">
            <div className="col-lg-6">
                {/* <h1 className="title-line">Scalable extended business office services Staff Augmentation
                    Innovative and intelligent technology solutions and services
                </h1> */}
                <Typical className="title-line" 
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        "Scalable extended business office, Services Staff Augmentation, Innovative and intelligent technology solutions and services.",
                        1000
                    ]}
                />
            </div>
            <div className="col-lg-6">
                <img className="title-image" src="https://i.ibb.co/02F5MTN/image1.gif" alt="iphone-mockup" />
            </div>
        </div>
    )
}

export default Title;
