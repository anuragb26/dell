import React from 'react'
import { Jumbotron} from 'reactstrap'
import SearchBar from '../SearchBar/SearchBar'
import eatEasy from '../../assets/img/eateasy.png'
import './Jumbotron.scss'

const JumbotronSection = (props) => {

  return (
    <Jumbotron>
      <img src={eatEasy} width={100} alt="logo" />
      <p className="lead">
       European Restaurants offering delightful cuisines
      </p>
      <hr className="my-2" />
      <SearchBar placeholder='Search restaurants by name' {...props}/>
    </Jumbotron>
  )
}

export default JumbotronSection
