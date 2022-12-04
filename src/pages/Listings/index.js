import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Navbar from '../../components/Navbar'

import { getListings } from '../../state/enlistment/actions'

import "./Listings.css"

const Listings = () => {
  const dispatch = useDispatch()

  const getProperties = async () => {
    const listings = dispatch(getListings())
    console.log(await listings?.getEnlistments())
  }

  useEffect(() => {
    getProperties()
  }, [])
  return (
    <div className="listings">
      <Navbar />
      <h3>All Listings</h3>
    </div>
  )
}

export default Listings