import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';

const User = (props) => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <EditUserForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose}/> 
        </Modal.Body>
      </Modal>

      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ backgroundColor: "purple", color: "white" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Codetrain User</Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              <p>Email: {props.userInfo.email}</p>
              <p>Gen: {props.userInfo.gen}</p>
            </Card.Text>
            <Card.Link href="#">
              <Button style={{ width: "75px" }} href="#" variant="primary" onClick={handleShow}>Edit</Button>
            </Card.Link>
            <Card.Link href="#">
              <Button style={{ marginLeft: "10px" }} href="#" variant="danger" onClick={handleDelete}>Delete</Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default User;