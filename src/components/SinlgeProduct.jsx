import React, { useState, useEffect } from "react"
import ProductReviewList from '../components/ProductReviewList';
import ProductReviewStats from '../components/ProductReviewStats';
import ReviewForm from '../components/ReviewForm';
import { v4 as uuidv4 } from 'uuid';
import ProductData from '../Data/ProductData';
import data from "../db.json"
import { Link, useParams } from "react-router-dom"
import '../styles/Products.css'


export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const findProduct = () => {
      const newProduct = data.products.find((product) => product.name === name)
      setSingleProduct(newProduct)
      console.log(newProduct)
    }

    findProduct()
  }, [name])

  const [review, setReview] = useState(ProductData);
  const addReview = newReview => {
    newReview.id = uuidv4();
    setReview([newReview, ...review]);
  };
  const deleteFeedback = id => {
   if (window.confirm('Are you sure you want to delete?')) {
    setReview(review.filter(item => item.id !== id));
    }
 };

  return (
    <>
      <section className="xl:max-w-6xl xl:mx-auto py-10 lg:py-20 p-5">
        <img src={singleProduct.large} alt="" />
        <h1 className="text-4xl my-5 lg:mb-10 text-white font-bold md:text-5xl lg:text-6xl">
          {name}
        </h1>
        <p className="text-white font-bold">{singleProduct.amt}</p>
        <p className="text-slate-300">{singleProduct.desc}</p>

        <ReviewForm handleAdd={addReview} />
            <ProductReviewStats review={review} />
            <ProductReviewList 
            review={review} 
            handleDelete={deleteFeedback} 
          />

        <ul className="flex items-center mt-10">
          <li className="mr-5">
            <button
              className="bg-white text-slate-800 py-2 px-4"
            >
              Add to cart
            </button>
          </li>
          <li>
            <Link to="/" className="back-btn">
              &larr; Back
            </Link>
          </li>
        </ul>
      </section>

    </>
  )
}
