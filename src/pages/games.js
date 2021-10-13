import React from "react";
import 'semantic-ui-css/semantic.css';
import { Container, Header, Card, Rating, Icon, Grid } from 'semantic-ui-react';

import Navbar from '../components/Navbar';

const GamesPage = () => {
  return (
    <React.Fragment>
      <Navbar />

      <Container>
          <Header as='h1'>Games</Header>
          <Grid>
            <Card>
                <Header as='h2'>Tic-Tac-Toe</Header>
                <p>3 in a row</p>
                <Rating icon='star' defaultRating={2} maxRating={5} />
                <Icon circular inverted name='exclamation'/>
            </Card>

            <Card>
                <Header as='h2'>Checkers</Header>
                <p>Jumping race</p>
                <Rating icon='star' defaultRating={3} maxRating={5} />
                <Icon circular inverted name='exclamation'/>
            </Card>

            <Card>
                <Header as='h2'>Snakes & Ladders</Header>
                <p>Snake!</p>
                <Rating icon='star' defaultRating={4} maxRating={5} />
                <Icon circular inverted name='exclamation'/>
            </Card>

            <Card>
                <Header as='h2'>Yahtzee</Header>
                <p>Feeling lucky?</p>
                <Rating icon='star' defaultRating={5} maxRating={5} />
                <Icon circular inverted name='exclamation'/>
            </Card>
          </Grid>
      </Container>

    </React.Fragment>
  );
}

export default GamesPage;