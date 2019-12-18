
import React, { useEffect, useState, } from "react";
import axios from "axios";
import { Card, Divider, Image, } from "semantic-ui-react";

const MyFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect( () => {
    axios.get("/api/liked_friends")
      .then( res => setFriends(res.data))
  }, []);

  return (
    <Card.Group itemsPerRow={4}>
      { friends.map( friend => (
        <Card key={friend.id}>
          <Image src={friend.avatar} />
          <Card.Content>
            <Divider />
            <Card.Header>
              { friend.name }
            </Card.Header>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default MyFriends;