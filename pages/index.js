import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({products,bannerData}) => {
  return (
    // <div>Welcome Home !!</div>
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />

    <div className='products-heading'>
    <h2>Best Seller Products in Marketing</h2>
    <p>speaker There are many variations passages</p>
    </div>
  
    <div className="products-container">
      {products?.map((product)=> <Product key={product._id} product={product} />)}
    </div>
    
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
  )
}
// //no static site generation

  export const getServerSideProps = async()=>{
    const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
  export default Home;
// const Home = ({ products, bannerData }) => {
//     return (
//   <div>
//     <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
//     <div className="products-heading">
//       <h2>Best Seller Products</h2>
//       <p>speaker There are many variations passages</p>
//     </div>

//     <div className="products-container">
//       {products?.map((product) => <Product key={product._id} product={product} />)}
//     </div>

//     <FooterBanner footerBanner={bannerData && bannerData[0]} />
//   </div>
// )
//     }

// // export default index

// export const getServerSideProps = async () => 
// {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return 
//   {
//     props: { products, bannerData }   //props: {}, // will be passed to the page component as props
//   }
// }





// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.querySelector("#root"));