import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from "react-rating-stars-component";
import { Card } from 'react-bootstrap'


export default function MovieCard(props) {
 
    return (
        <Card style={{ width: '18rem',display:'flex', justifyContent: 'space-around'}}>
        <Card.Img variant="top" src={props.posterURL}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <ReactStars
    count={5}
    editing={false}
    value={props.rating}
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
        </Card.Body>
      </Card>
      );
}
MovieCard.defaultProps = {
  title: "Vous avez oublié d'entrer le titre",
  posterURL: "Vous avez oublié d'ajouter le poster du film",
  description: "Vous avez oublié d'entrer la description",
  rating:"Vous avez oublié d'entrer le rating"
 };
 MovieCard.propTypes={
  title:PropTypes.string,
  posterURL:PropTypes.string,
  rating:PropTypes.number
 }
 