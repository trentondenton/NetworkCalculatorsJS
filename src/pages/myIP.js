import React, { Component } from "react";
import axios from 'axios';
import { Container, Spinner, Row, Button } from 'react-bootstrap';
import { ArrowRepeat } from "react-bootstrap-icons";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const MyMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyClqSQRl_LF0_XDk1LOr1hs6DEO-b5DV5U",
    loadingElement: <div style={{ height: `100%`, width: `50%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: props.lat, lng: props.long }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.long }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class MyIp extends Component {
  constructor() {
    super();
    this.state = {
      isMarkerShown: false,
      ip: '',
      long: 0,
      lat: 0,
      provider: '',
      gotIp: false,
      isLoading: true
    }

    this.delayedShowMarker = this.delayedShowMarker.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.getData = this.getData.bind(this);
    this.getIP = this.getIP.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }


  componentDidMount() {
    this.getData()
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  refreshPage() {
    window.location.reload();
  }

  getData() {
    axios.get('https://ip.nf/me.json')
      .then(response => {
        this.setState({
          ip: response.data.ip.ip,
          long: parseFloat(response.data.ip.longitude),
          lat: parseFloat(response.data.ip.latitude),
          provider: response.data.ip.asn.replace(/[0-9]/g, ''),
          isLoading: false
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  getIP() {
    this.setState({
      gotIp: true
    })
  }

  render() {
    const { lat, long, ip, provider } = this.state;
    return (
      this.state.isLoading ?
        <Container className="myflex">
          <br />
          <Spinner animation="border" variant="primary" />
        </Container>
        :
        <Container className="myflex">
          <br />
          <br />
          {this.state.gotIp ?
            <React.Fragment>
              <Row className="myflex">
                <h2>Your IP: {ip}</h2>
                <Button type="button" onClick={this.refreshPage} className="ml-2" variant="primary"><ArrowRepeat /></Button>
              </Row>
              <Row className="myflex">
                <h6>Internet Provider: {provider}</h6>
              </Row>
              <MyMap
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick}
                className="p-10"
                lat={lat}
                long={long}
              />
            </React.Fragment>
            :
            <Button type="button" onClick={this.getIP} variant="primary">Get Your IP</Button>
          }
        </Container>
    )
  }
}