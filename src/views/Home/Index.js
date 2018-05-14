import React, {Component} from 'react';

import Banner from './Banner/'

import Area from './Area/'

import Popular from './Popular/'

import How from './How/'

import Partner from './Partner/'

import Paralax from './Paralax/'


class Home extends Component {


  render() {
   
   
    return (
      
  
     <div>
      
      <Banner />
       <Partner />
      <Area />
      <Popular />
      <How />
      <Paralax />
      <Partner />


     </div>

    )
  }
}




export default Home;
