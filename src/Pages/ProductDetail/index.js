import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";
import { StarIcon, ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";

import styles from "./styles.module.css";

const ProductDetail = () => {
  const { product_id } = useParams();
  const { product, setProductId, loading } = useProduct();

  useEffect(() => {
    setProductId(product_id);
  }, [product_id]);
  return (
    <>
      {!loading && product?.id ? (
        <div className="flex flex-wrap max-7-xl mx-auto my-4">
          <div className="w-full p-4 sm:w-2/2 md:w-2/2 xl:w-5/5 flex flex-wrap">
            <img src={product.image} className={styles.image}></img>
            <div className="w-full my-auto lg:py-6 lg:pl-10 lg:w-2/3">
              <h2 className="text-gray-900 text-sm mt-4 mb-2 hover:text-red-500 tracking-widest">
                Brand
              </h2>
              <h1 className="text-2xl font-bold mb-5 mt-1 hover:text-green-500 ">
                {product.title}
              </h1>
              <div className={styles.rating}>
                {[...Array(Math.round(product.rating.rate))].map((e, i) => (
                  <StarIcon
                    key={`star-${i}`}
                    className={styles.starIcon}
                    aria-hidden="true"
                  />
                ))}
                {[...Array(5 - Math.round(product.rating.rate))].map((e, i) => (
                  <StarIcon
                    key={`star-${i}`}
                    className={styles.emptyStarIcon}
                    aria-hidden="true"
                  />
                ))}
                <p className="text-xs ml-1 font-light mt-0.5">
                  {product.rating.count}
                </p>
              </div>
              
                <p className="border-b-2 mb-2 border-zinc-900/10 pb-6 capitalize">
                  {product.description}
                </p>
                <div className="flex">
                  <div className="my-auto">
                    <span>${product.price}</span>
                  </div>
                  <div className="block mt-0 ml-auto my-auto">
                    <div className={styles.addToCart}>
                      <button className={styles.addToCartButton}>
                        <ShoppingCartIcon
                          className={styles.shoppingCartIcon}
                        ></ShoppingCartIcon>
                        <span className={styles.buttonText}>Add to cart!</span>
                      </button>
                    </div>
                  </div>
                  <div className="block my-auto">
                    <button className={styles.favButton}>
                      <HeartIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
};

export default ProductDetail;
