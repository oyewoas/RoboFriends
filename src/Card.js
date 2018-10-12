import React from 'react';


// instead of props i can just use ({name, email, id}) called distructuring and put id, name, email in the tags;


const Card = (props) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robotphoto"/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );

}

export default Card;