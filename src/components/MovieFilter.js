import React from "react";
import MovieCard from './MovieCard';

const MovieFilter = (props) => {

return (
        <div className="d-flex flex-row ">
    {props.list.filter((val)=>
        val.title.toLowerCase().includes(props.filter.toLowerCase())&&(val.rating>=props.filterStar)
         
     
      ).map(el=>(
        <MovieCard title={el.title} description={el.description} rating={el.rating} posterURL={el.posterURL}></MovieCard>      
     ))}</div>
)
}
export default MovieFilter