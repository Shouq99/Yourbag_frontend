
// import { Product } from "@/types";
// import React from "react";
// import { Link } from "react-router-dom";

//  const SingleProduct = (props:{product: Product}) => {
//     const {product} = props;
//   //  console.log(product);
//     return (
 
//       <div className="product-card" key={product.productId} >
//         <img src={product.image} alt="product.name" className="product-img"/>
//         <div className="product-body">
//             <h3 className="Product_Name">{product.name}</h3>
//            <p>
//             {" "}
//             Price:
//              {product.price}
//            { /*.toLocaleString("ar-SA",{
//               style: "currency",
//               currency: "ksa"
//             } */}

//             </p> 

//            </div>
//             <Link to={`/products/${product.slug}`}>
//            <button className="product-btn">
//            Show Details <li className="fa fa-eye"></li>
//            </button> 
//            </Link>
//            <button className="product-btn">
//            Add to cart <li className="fa fa-shopping"></li>
//            </button>
//         </div>

//     )
// }

// export default SingleProduct