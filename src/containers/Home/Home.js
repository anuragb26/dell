import React, { Component, Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import {PER_PAGE,TOTAL_COUNT,getRestaurantsUrl} from '../../constants'
import Pagination from '../../components/Pagination/Pagination'
import Card from '../../components/Card/Card'
import queryStringUtils from '../../utils/queryStringUtils'
import axios from 'axios'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Loader from '../../components/Loader/Loader'
import './Home.scss'

class Home extends Component {
  state = {
    loading: true,
    restaurants: [],
    searchVal:'',
    offset:0
  }
  fetchData = (offset) => {
    axios
      .get(
        getRestaurantsUrl(queryStringUtils.createQueryString({
          _start:offset,
          _end: offset+PER_PAGE
        }))
      )
      .then(res => {
        this.setState({
          loading: false,
          restaurants: res.data
        })
      })
  }
  handleSearchVal = (event) => {
    this.setState({searchVal:event.target.value})
  }

  clearSearchVal = () => {
    this.setState({
      searchVal:''
    })
  }
  handlePageClick = (data) => {
    const {selected} = data
    const updatedOffset = selected * PER_PAGE
    console.log('selected',selected)
    this.setState({
      loading:false
    },() => {
      this.fetchData(updatedOffset)
    })
    
  }

  componentDidMount() {
    this.setState(
      {
        loading: true
      },
      () => {
        this.fetchData(this.state.offset)
      }
    )
  }
  render() {
    const {
      state: {  loading, restaurants,searchVal }
    } = this
    console.log('products', restaurants)
    console.log('loading', loading)
    const row1 = restaurants.slice(0,3)
    const row2 = restaurants.slice(3,6)
    const row3 = restaurants.slice(6,9)
    return (
      <Fragment>
        <Row>
          <Col sm="12">
            <Jumbotron searchVal={searchVal} onChange={this.handleSearchVal} clearSearch={this.clearSearchVal} />
          </Col>
        </Row>
       
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              {
                [row1,row2,row3].map((row,index) => {
                  return (
                    <Row className = 'mx-3' key = {index}>
                      {row.map(data => {
                          return (
                            <Col sm="4" key = {data.Name}>
                              <Card restaurant={data} />
                            </Col>
                          )
                      })}
                    </Row>
                  )
                })
              }
    
              <Row className='mt-4'>
                <Col sm={{size:10,offset:2}} className = 'paginate-wrapper'>
                  <Pagination handlePageClick = {this.handlePageClick}/>
                </Col>
              </Row>
              
            </Fragment>
          )}
  
      </Fragment>
    )
  }
}

export default Home
