import React from 'react'

function Location(props){
    return(
        <div className='location'>
        <div className='location--image'>
        <img src=".src/japan.jfif"/>
        </div>
        <div className="location--details">
        <h5>{props.location}
       <a href={props.googleMapsUrl} target="_blank" >View on Google Maps</a> 
        </h5>
        <h3>{props.title}</h3>
        <h6>{props.startDate}-{props.endDate}</h6>
        <p>{props.description}</p>
        </div>
        </div>
        
    )
    
}

export {Location}

/*
    {
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://unsplash.com/photos/WLxQvbMyfas"
    }
    
    */