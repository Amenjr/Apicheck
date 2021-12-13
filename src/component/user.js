import React from 'react'
import image from './api_1200__w630.jpg'
import{Card,Button,ListGroupItem,ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function User({user}) {
    return (
        <div>
    <Card style={{ width: '18rem',marginTop:'30px' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
      {user.username}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{user.phone}</ListGroupItem>
    <ListGroupItem>{user.website}</ListGroupItem>
    <ListGroupItem>{user.company.name}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Link to={`/details/${user.id}`}>
  <Button variant="primary">More Detailes</Button>
  </Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default User;
