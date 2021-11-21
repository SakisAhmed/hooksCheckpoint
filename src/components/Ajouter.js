import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import data from './data';

const Ajouter=(props)=>{
    
        const [title,settitle]=useState("");
        const [description,setDescription]=useState("");
        const [posterURL,setPosterURL]=useState("");
        const [rating,setRating]=useState("");
        
  function handleSubmit(event) {
     let nv={title:title,
         rating:rating,
         description:description,
         posterURL: posterURL}
     props.setList([...data.cardData,nv]);
     props.handleClose();
     event.preventDefault();
  };
    return(
    <>
    <Row>
          <Form.Label column lg={2}>
          Title
          </Form.Label>
          <Col>
          <Form.Control type="text" placeholder="Normal text" value={title} onChange={event=>settitle(event.target.value)} />
          </Col>
          </Row>
            <br/>
          <Row>
          <Form.Label column lg={2}>
          Poster Url
          </Form.Label>
          <Col>
          <Form.Control type="text" placeholder="Normal text" value={posterURL} onChange={event=>setPosterURL(event.target.value)} />
          </Col>
          </Row>

          <Row>
          <Form.Label column lg={2}>
          Rating
          </Form.Label>
          <Col>
          <Form.Control type="text" placeholder="Normal text" value={rating} onChange={event=>setRating(event.target.value)} />
          </Col>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
           <Form.Control as="textarea" rows={3} value={description} onChange={event=>setDescription(event.target.value)}/>
         </Form.Group>
         <Button variant="primary" onClick={handleSubmit}>enregistrer</Button>

         
    </>
    )}
export default Ajouter