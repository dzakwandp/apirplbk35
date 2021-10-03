import React, { Component } from 'react';

import styled from 'styled-components';


const Name = styled.h1`
 color:white;
 font-size: 20px;
 text-align: center;
`

class A extends Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "TUGAS AKHIR PRAKTIKUM RPLBK",
         isi: "KELOMPOK 35"
      }
   }
   componentDidMount() {
      alert(`Tugas Akhir Kelompok 35`)
   }
   render() {
      return (
         <div>
            <header>
               <div>
               <Name>{this.state.header}</Name>
               <Name>{this.state.isi}</Name>
               </div>
            </header>

         </div>
      );
   }
}

export default A;