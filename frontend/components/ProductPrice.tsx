'use client';

import React, {useState} from 'react'
import { faExchange } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductPrice = ({product, showIcon}) => {
  const [currency, setCurrency] = useState('eur')

  const price = () => {
    const priceItems = product.variants[0].prices.filter((price) =>
      price.currency_code === currency
    );

    return `${currency === 'eur' ? '€' : '$'}${(parseFloat(priceItems[0].amount) / 100).toFixed(2)}`
  }

  const switchCurrency = () => {
    if(currency === 'eur')
      setCurrency('usd')
    else setCurrency('eur')
  }

  return(
    <div>
      <span>
        {price()}
      </span>
      { showIcon ? 
        <span>
          <FontAwesomeIcon
            icon={faExchange}
            className="h-4 w-4 mr-1 pl-3 cursor-pointer"
            onClick={switchCurrency}
          />
        </span> : ''
      }
    </div>
  )
}

export default ProductPrice