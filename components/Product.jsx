import React from 'react'
import Link from 'next/link';  //to link product detai;s
import { urlFor } from '../lib/client';  //to get image from sanity dashboard


// const Product = () => {
//   return (
//     <div>Product</div>
//   )
// }

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"   //hover effect
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Rs{price}</p>
        </div>
      </Link>
    </div>
  )
}

  export default Product
