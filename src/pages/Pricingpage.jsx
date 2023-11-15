import React from 'react'
import PricingBox from '../components/PricingBox'
import PricingTable from '../components/PricingTable'
import PageTitle from '../components/PageTitle'

const Pricingpage = () => {
  return (
    <div className='container'>
        {/* <PricingBox title="Our Services" /> */}
        <PageTitle title="Pricing" desc="Compare Plans and find out whats right for you." />
        <PricingTable />
    </div>
  )
}

export default Pricingpage