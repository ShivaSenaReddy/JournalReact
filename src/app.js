import React from 'react'
import {Location} from './location.js'
import {Header} from './header.js'
import  data from "./data.js"
export default function App(){
    const array1=data.map(x=>{
    return(
       <Location 
       title={x.title}
       location={x.location}
       startDate={x.startDate}
       endDate={x.endDate}
       description={x.description}
       googleMapsUrl={x.googleMapsUrl}
        
        />
        
    );}
    
    )
    return(
    <div>
   <Header/>

   {array1}
    </div>)
}


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