import React from 'react';
import { Alert } from 'react-bootstrap';

function Ipv4Match(props) {
  var match = props.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (match) {
    for (var i = 1; i <= 4; i++) {
      if (match[i] > 255) {
        return <Alert variant="danger">Invalid IP address</Alert>;
      }
    }
    return true;
  }
  return <Alert variant="danger">Invalid IP address</Alert>;
}

export default Ipv4Match