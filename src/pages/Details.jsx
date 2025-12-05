import React from 'react'
import DetailBanner from '../components/Details/DetailBanner'
import DetailsInfo from '../components/Details/DetailsInfo'
import { useLocation } from 'react-router'

const Details = () => {
  const location = useLocation()
  const item = location.state
  console.log(item)
  return (
    <>
      <DetailBanner label={item.label} name={item.title} location={item.description} price={item.price} pricePerSq={item.totalArea} image={item.image} smallImg={item.image} />
      <DetailsInfo totalArea={item.totalArea} elevator={item.elevator} bedrooms={item.bedrooms} bathrooms={item.bathrooms} floor={item.floor} year={item.constructionYear} />
    </>
  )
}

export default Details