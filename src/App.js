import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Ajouter from './components/Ajouter'
import data from './components/data';
import React, { useState } from "react";
import MovieFilter from './components/MovieFilter'
import ReactStars from "react-rating-stars-component";


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [filter,setFilter] = useState("");
  const [list,setList]=useState([...data.cardData]);
  const [filterStar,setFilterStar] = useState(1);
  const ratingChanged = (newRating) => {
    setFilterStar(newRating);
    console.log(newRating);
  };
  return (
    <div className="App">
      <div className="mb-3 col-4 mx-auto">
                <label className="form-lable h3">Search</label>
                <input
                type="text"
                className="form-control"
                value={filter}
                onChange={(event)=>{
                  setFilter(event.target.value)}}
                />
                <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                value={filterStar}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            <Button variant="primary" onClick={handleShow} >
        Ajouter un film
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Ajouter list={list} setList={setList} handleClose={handleClose}/>
        </Modal.Body>
       
      </Modal>
            </div>
     <MovieFilter list={list} filter={filter} filterStar={filterStar}></MovieFilter>
     
    </div>
  );
}

export default App;
