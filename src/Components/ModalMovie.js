import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ModalMovie(props) {
  
  
  const [comment, setComment] = useState('');




  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTrend = {
      ...props.trendData,
      userComment: comment,
    };
    props.commentHandler(newTrend, newTrend.id);
  };




  const handleAddToFav = async (event) => {
    event.preventDefault();
    const data = {
      title: props.trendData.title,
      release_date: props.trendData.release_date,
      poster_path: props.trendData.poster_path,
      comments: props.trendData.comments,
    };
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/addMovie`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const receivedData = await response.json();
    console.log(1111, receivedData);
    if (response.status === 201) {
      alert('successfully added to database');
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.trendData.title}</Modal.Title>
      
      </Modal.Header>
      <img src={`https://image.tmdb.org/t/p/w500${props.trendData.poster_path}`} alt={props.trendData.title} />
      <Modal.Body>
        {props.trendData.comments ? props.trendData.comments : 'No comment added'}
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Add a comment</Form.Label>
            <Form.Control type="text" placeholder="Enter your comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            <Form.Text className="text-muted">Enter the   comment!!</Form.Text>
          </Form.Group>
          <Button variant="secondary" type="submit">  Submit </Button>
          <pre></pre>
          <Button variant="secondary" type="submit" onClick={handleAddToFav}>  Add ? </Button>
       
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMovie;
