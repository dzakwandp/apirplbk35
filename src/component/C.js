import React, { Component } from 'react';
import styled from 'styled-components';

const Name = styled.h1`
 color:white;
 font-size: 20px;
 text-align: center;
`

export default class C extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tgl: new Date().toLocaleString()
        };
      }
    
      getDate() {
        var date = { currentTime: new Date().toLocaleString() };
    
        this.setState({
          date: date
        });
      }
      componentDidMount() {         
        alert(`Get a Game, Get a Life!`)     
      } 
    
      render() {
        return (
          <div>
          <center>
            <Name> Waktu Server : {this.state.tgl}</Name>
          </center>
          </div>
        );
      }
}