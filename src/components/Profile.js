import React, { useState } from 'react';

const Profile = (props) => {
    const [showProfile, setShowProfile] = useState(true);

    return (
        <>
            {showProfile ? (
                <section>
                    <h1> Name: {props.name}</h1 >
                    <h3>Age: {props.age}</h3>
                    <h3>Favorite Color: {props.favColor}</h3>
                    <button onClick={() => setShowProfile(!showProfile)}>Hide {props.name}</button>
                </section>
            ) :
                <section>
                    <button onClick={() => setShowProfile(!showProfile)}>Show {props.name}</button>
                </section>
            }
        </>
    );
};

export default Profile