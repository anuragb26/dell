import React from 'react'
import eatEasy from '../../assets/img/eateasy.png'
import './Card.scss'

const card = (props) => {

  const cuisineStyle = 'Cuisine Style'
  const numberOfReviews = 'Number of Reviews'
  const {City:city='',[numberOfReviews]:reviewCount='',[cuisineStyle]:cuisines='',Ranking='',Rating='',Name=''} = props.restaurant
  const cuisineVals = cuisines.substring(1,cuisines.length-1).replace(/'/g,'')
  return (
    <div className='d-flex flex-column card-wrapper mb-4 '>
                        <div className='d-flex card-content'>
                            <div className='card-img'>
                              <img src={eatEasy} />
                            </div>
                            <div className='d-flex card-detail-wrapper ml-1 justify-content-between'>
                              <div className='card-detail d-flex flex-column'>
                                <p className='my-1 lead'>{Name}</p>
                                <span className='my-1'>{cuisineVals}</span>
                                <span className='my-1'>{city}</span>
                              </div>
                              <div className='card-rating d-flex'>
                              <span class="oi oi-star"></span>
                                <span className='rating'>{Rating}</span>
                              </div>
                            </div>
                        </div>
        
                      <div className='card-review'>
                        {reviewCount} reviews
                      </div>
                    </div>
  )
}

export default card