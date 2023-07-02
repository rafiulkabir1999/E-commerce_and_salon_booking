import React from 'react'
import Hero from '../hero/hero'
import Newproduct from  '../newproduct/newproduct'
import BlockProduct from '../BlockProduct/BlockProduct';
import Offer from '../offer/offer';

export default function Homepage() {
  return (
    <div>
    <Hero></Hero>
     <Newproduct></Newproduct>
     <Offer></Offer>
     <BlockProduct></BlockProduct>
    </div>
  )
}
