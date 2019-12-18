import React, { useState, useEffect, } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Header, Card, Image, Button, } from "semantic-ui-react";

const Home = () => {
  const [friends, setFriends] = useState([]);

  useEffect( () => {
    axios.get("/api/friends")
      .then( res => setFriends(res.data) )
  }, []);

  const sample = () => {
    if (friends.length) {
       const index = Math.floor(Math.random() * friends.length);
       return friends[index];
    } else {
      return null;
    }
  };

  const downVote = (id) => {
    const newFriends = friends.filter( friend => friend.id !== id);
    setFriends(newFriends);
  };

  const upVote = (id) => {
    axios.put(`/api/friends/${id}`)
      .then( res => setFriends(friends.filter( friend => friend.id !== id)) )
  };

  const friend = sample();
  if (friend) {
    return (
      <div>
        <br />
        <Header as="h1">MySpace</Header>
        <br />
        <Card>
          <Image src={friend.avatar} />
          <Card.Content>
            <Card.Header>
              { friend.name }
            </Card.Header>
            <Card.Description>
              { friend.location}
            </Card.Description>
            <Card.Meta>
              { friend.quote }
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button inverted color="red" icon onClick={() => downVote(friend.id)}>
              Remove
            </Button>
            <Button  inverted color="green" icon onClick={() => upVote(friend.id)}>
              Add Friend
            </Button>
          </Card.Content>
        </Card>
        <Button as={Link} to="/my_friends" color="blue">
          My friends
        </Button>
      </div>
    )
  } else {
    return <Header as="h1" textAlign="center">No More Friends</Header>
  }
};

export default Home;