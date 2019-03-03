import React from 'react'
import { Navbar } from 'reactstrap'
import eatEasy from '../../assets/img/eateasy.png'

const nav = () => (
  <Navbar color="light" light expand="md">
    <img src={eatEasy} width={50} alt="logo" />
    European Restaurants
  </Navbar>
)

export default nav
