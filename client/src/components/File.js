import React from 'react';


const File = ( {text} ) => {
    // todo link read more
    return (
        <div className="file">
            <h3>{text}</h3>
            <a href="/" className="link">Read more...</a>
        </div>
    );
};

export default File;