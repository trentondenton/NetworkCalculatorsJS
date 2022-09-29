import React, { Component } from 'react';
import { Spinner, Container, Form, Row, Col as Column, Button, Toast, Carousel, Image } from 'react-bootstrap';

import Tired from '../assets/images/sleeping_laptop.png'
import Coffee from '../assets/images/sitting_coffee_laptop.png'
import Thinking from '../assets/images/sitting_thinking.png'
export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      popToast: false,
      email: '',
    }

    this.handleToastClick = this.handleToastClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: !this.state.isLoading })
  }

  handleToastClick() {
    this.setState({ popToast: !this.state.popToast })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  render() {
    return (
      this.state.isLoading ?
        <Container className="myflex">
          <br />
          <Spinner animation="border" variant="primary" />
        </Container>
        :
        <Container>
          {this.state.popToast ?
            this.state.email === '' ?
              <Toast bg="danger" role="alert" style={{ position: "absolute", top: "1rem", right: "1rem" }} delay={3000} aria-hidden="true" onClose={this.handleToastClick} autohide>
                <Toast.Header>
                  <strong className="mr-auto">NTWK Dev</strong>
                  <small>📧</small>
                </Toast.Header>
                <Toast.Body>Please enter an email address.</Toast.Body>
              </Toast>
              :
              <Toast bg="light" role="alert" style={{ position: "absolute", top: "1rem", right: "1rem" }} delay={3000} aria-hidden="true" onClose={this.handleToastClick} autohide>
                <Toast.Header>
                  <strong className="mr-auto">NTWK Dev</strong>
                  <small>📧</small>
                </Toast.Header>
                <Toast.Body>Thank you for subscribing to our newsletter!</Toast.Body>
              </Toast>
            : null
          }
          <br />
          <Row className="myflex">
            <h1>Welcome to NTWK Dev!</h1>
            <p>We will continue to add other networking resources as we further develop the platform. Sign up for our newsletter to stay up to date with new features, blog posts, and website changes!</p>
            <Form fluid>
              <Form.Control role="email" type="email" name="email" placeholder="Email Address" onChange={this.handleChange} />
              <br />
              <Button variant="primary" onClick={this.handleToastClick}>Sign up!</Button>
            </Form>
          </Row>
          <hr className="hr" />
          <Row className="myflex">
            <Column>
              <br />
              <h2>Tired of Calculating Subnets?</h2>
              <p>Whether you're a seasoned professional or are just trying to survive your IT degree, manually calculating subnets can be a hassle. Try our new IPv4 subnet calculator!</p>
              <Button href="/ipv4" variant="primary">Try It!</Button>
            </Column>

            <Column>
              <br />
              <Carousel controls={false} indicators={false} variant="dark" fade="true">
                <Carousel.Item interval={4000}>
                  <Image className="mh450" src={Tired} />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <Image className="mh450" src={Coffee} />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <Image className="mh450" src={Thinking} />
                </Carousel.Item>
              </Carousel>
            </Column>
          </Row>
        </Container >
    )
  }
}