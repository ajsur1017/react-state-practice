import React from "react";

const CityGrid = (props) => {

    return (
        <div className="wrapper">
            <div id="thumbnails">
                <img
                    className="thumb"
                    src={props.img}
                    alt={props.city}
                    
                />
            </div>
            
        </div>
    );
};

export default CityGrid;