import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';

import Ipv4Match from '../components/ipv4match';
import Ipv4Calculator from '../components/ipv4calculator';
export default class Ipv4 extends Component {
  state = {
    ipaddress: '10.0.0.0',
    bitMask: '24',
    wildcardMask: '0.0.0.255',
    maxSubnets: '256',
    maxHosts: '254',
    networkRange: '10.0.0.1 - 10.0.0.254',
    network: '10.0.0.0',
  };

  onChangeIP = (event) => {
    const { bitMask } = this.state;
    if (event.target instanceof HTMLInputElement) {
      const ipaddress = event.target.value;
      if (Ipv4Match(ipaddress)) {
        this.setState({ ipaddress });
        this.handleSubnetCalc(ipaddress, bitMask);
      } else {
        this.setState({ ipaddress: '10.0.0.0' });
        this.handleSubnetCalc('10.0.0.0', bitMask);
      }
    }
  };

  onChangeMask = (event: Event) => {
    const { ipaddress } = this.state;
    if (event.target instanceof HTMLSelectElement) {
      const bitMask = event.target.value;
      this.setState({ bitMask });
      this.handleSubnetCalc(ipaddress, bitMask);
    }
  };

  handleSubnetCalc = (ipAddress: string, bitMask: string) => {
    const bitMaskNumber = parseInt(bitMask, 10);
    const calc = new Ipv4Calculator(ipAddress, bitMaskNumber);
    this.setState({
      ipaddress: calc.result.ipAddress,
      bitMask: calc.result.bitMask.toString(10),
      wildcardMask: calc.result.wildcardMask,
      maxSubnets: calc.result.maxSubnets,
      maxHosts: calc.result.maxHosts,
      networkRange: calc.result.networkAddressRange,
      network: calc.result.network,
    });
  };

  render() {
    const { ipaddress, bitMask, wildcardMask, maxSubnets, maxHosts, networkRange, network, } = this.state;
    return (
      <Container className="myflex">
        <br />
        <Form>
          <Form.Group>
            <Form.Label>IPv4 Address</Form.Label>
            <Form.Control as={"input"}
              type="text"
              value={ipaddress || ''}
              onChange={this.onChangeIP}
              maxLength="15"
              className="form-control"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Subnet Mask</Form.Label>
            <Form.Control as="select"
              value={bitMask || ''}
              onChange={this.onChangeMask}
              className="form-control"
            >
              <option value="1">128.0.0.0 /1</option>
              <option value="2">192.0.0.0 /2</option>
              <option value="3">224.0.0.0 /3</option>
              <option value="4">240.0.0.0 /4</option>
              <option value="5">248.0.0.0 /5</option>
              <option value="6">252.0.0.0 /6</option>
              <option value="7">254.0.0.0 /7</option>
              <option value="8">255.0.0.0 /8</option>
              <option value="9">255.128.0.0 /9</option>
              <option value="10">255.192.0.0 /10</option>
              <option value="11">255.224.0.0 /11</option>
              <option value="12">255.240.0.0 /12</option>
              <option value="13">255.248.0.0 /13</option>
              <option value="14">255.252.0.0 /14</option>
              <option value="15">255.254.0.0 /15</option>
              <option value="16">255.255.0.0 /16</option>
              <option value="17">255.255.128.0 /17</option>
              <option value="18">255.255.192.0 /18</option>
              <option value="19">255.255.224.0 /19</option>
              <option value="20">255.255.240.0 /20</option>
              <option value="21">255.255.248.0 /21</option>
              <option value="22">255.255.252.0 /22</option>
              <option value="23">255.255.254.0 /23</option>
              <option value="24">255.255.255.0 /24</option>
              <option value="25">255.255.255.128 /25</option>
              <option value="26">255.255.255.192 /26</option>
              <option value="27">255.255.255.224 /27</option>
              <option value="28">255.255.255.240 /28</option>
              <option value="29">255.255.255.248 /29</option>
              <option value="30">255.255.255.252 /30</option>
              <option value="31">255.255.255.254 /31</option>
              <option value="32">255.255.255.255 /32</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Network Address</Form.Label>
            <Form.Control as="input"
              type="text"
              value={network || ''}
              size="30"
              readOnly
              className="form-control"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Total Hosts</Form.Label>
            <Form.Control as="input"
              type="text"
              value={maxHosts}
              size="20"
              readOnly
              className="form-control"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Wildcard Mask</Form.Label>
            <Form.Control as="input"
              type="text"
              value={wildcardMask || ''}
              size="20"
              readOnly
              className="form-control"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Possible Subnets</Form.Label>
            <Form.Control as="input"
              type="text"
              value={maxSubnets || ''}
              className="form-control"
              readOnly
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Usable Range</Form.Label>
            <Form.Control as="input"
              type="text"
              value={networkRange || ''}
              size="30"
              readOnly
              className="form-control"
            />
          </Form.Group>
        </Form >
      </Container>
    );
  }
}
