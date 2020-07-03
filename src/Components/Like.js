import React, { useState } from 'react';
import './liked.css';

const Like = () => {
    const [liked, setLiked] = useState(false);


    return (
        <button onClick={() => setLiked(!liked)} className="like">
            <div className={liked ? "like-full" : "like-empty"}>
                <i className={liked ? "fas fa-heart" : "far fa-heart"}></i>
            </div>
        </button>
    );
}

export default Like;