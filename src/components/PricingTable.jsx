import React, { useState } from 'react'
import "./pricingtablestyles.css"
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'



const PricingTable = () => {
    const params = [
        {
            key: "web",
            tag: "Functional Website",
            price: 2000,
        },
        {
            key: "seo",
            tag: "SEO Optimization",
            price: 3000,
        },
        {
            key: "maintainance",
            tag: "One Year Maintainance",
            price: 4000,
        },
        {
            key: "security",
            tag: "Cyber Security",
            price: 5000,
        },
        {
            key: "domain",
            tag: "Domain",
            price: 6000,
        },
    ]
    const plans = [
        {
            title: "Basic",
            keys: [
                "web"
            ]
        },
        {
            title: "Standard",
            keys: [
                "web",
                "seo",
                "maintainance",
            ]
        },
        {
            title: "Premium",
            keys: [
                "web",
                "seo",
                "maintainance",
                "security",
                "domain",
            ]
        },
    ]

    const [prices, setPrice] = useState(plans.map((plan) => {
        const newP = plan.keys.map((keys) => {
            const money = params.map((param) => {
                if(param.key === keys){
                    console.log(param.key)
                    return param.price
                } else{
                    return 0
                }
            })
            if (money){
                return money
            }else{
                return
            }
        })
        const finalP = newP.reduce((acc, cur) => {
            return acc + cur.reduce((accumulator, current) => {
                return accumulator + current
            }, 0)
        }, 0)
        return finalP
    }))
    console.log(prices)

  return (
    <div className='pricingTable'>
        <table >
            <tr>
                <th>Services</th>
                {/* <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th> */}
                {
                    plans.map((plan, index) => {
                        return(
                            <th>{plan.title}</th>
                            
                        )
                    })
                }
            </tr>
            {
                params.map((param, index) => {
                    return(
                        <tr>
                            <td>{param.tag}</td>
                            {
                                plans.map((plan, index) => {
                                    if(plan.keys.includes(param.key)){
                                        
                                        return <td><CheckIcon className='checkMark' /></td>
                                    }else{
                                        return <td><XMarkIcon className='xMark' /></td>
                                    }
                                })
                            }
                        </tr>
                    )
                })
            }
            <tr>
                <td>Total</td>
                {
                    prices.map((price) => {
                        return(
                            <td className='lastRow'>{price}</td>
                        )
                    })
                }
            </tr>
        </table>
    </div>
  )
}

export default PricingTable