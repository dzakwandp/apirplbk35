import React, { Component } from 'react';

import styled from 'styled-components';


const Name = styled.h2`
 color:white;
 font-size: 35px;
 text-align: center;
`

export default class B extends Component {
    constructor(props){
        super(props)
        this.state = {
          program: "null"
        }
      }

      componentDidMount() {         
          alert(`Game is Life`)     
      } 
      render() {
        return (
          <div>

            <Name>Semoga Game ini Nanti Bisa Terbeli</Name>

          </div>
        );
      }
}