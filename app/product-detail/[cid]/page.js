'use client';
import { useParams } from 'next/navigation';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addName, removeName, setValue, updateName } from '@/store/userReducer';

export default function Page(){

  let some = useParams();
  let [product, setProduct] = useState({});

  // agar store m data send krna to  useDispatch();
let dispatch = useDispatch();

  // store se data mngwaana to useSelector
  let some1 = useSelector(function(store){
    return store.userData.names;
  })

  useEffect(function(){

    axios.get('https://dummyjson.com/products/'+some.cid).then(function(resp){
      debugger
      console.log(resp.data);
      setProduct(resp.data)

    });

  }, [])

    function changeImage(event, src) {
            document.getElementById('mainImage').src = src;
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            event.target.classList.add('active');
        }

    return <div className="container mt-5">


        {/* <button onClick={function(){

          let nName =  prompt("Enter new name");

         dispatch( addName(nName) );


        }}>Add name</button>

      <h1>{some.cid}</h1> */}

  <div className="row">
    {/* Product Images */}
    <div className="col-md-6 mb-4">
      <img
        src={product?.images?.[0]}
        alt="Product"
        className="img-fluid rounded mb-3 product-image"
        id="mainImage"
      />
      <div className="d-flex justify-content-between">
        {
          product.images?.map(function(imge){
        return <img
          src={imge}
          alt="Thumbnail 1"
          className="thumbnail rounded active"
          onClick={function(){
            changeImage(event, event.target.src)
          }}
        />
        })
      }
      </div>
    </div>
    {/* Product Details */}
    <div className="col-md-6">
      <h2 className="mb-3">{product.title}</h2>
      <p className="text-muted mb-4">SKU: WH1000XM4</p>
      <div className="mb-3">
        <span className="h4 me-2">${product.price}</span>
        <span className="text-muted">
          <s>${product.price}</s>
        </span>
      </div>
      <div className="mb-3">
        <i className="bi bi-star-fill text-warning" />
        <i className="bi bi-star-fill text-warning" />
        <i className="bi bi-star-fill text-warning" />
        <i className="bi bi-star-fill text-warning" />
        <i className="bi bi-star-half text-warning" />
        <span className="ms-2">{product.rating} ({product.reviews?.length} reviews)</span>
      </div>
      <p className="mb-4">
        {product.description}
      </p>
      <div className="mb-4">
        <h5>Color:</h5>
        <div className="btn-group" role="group" aria-label="Color selection">
          <input
            type="radio"
            className="btn-check"
            name="color"
            id="black"
            autoComplete="off"
            defaultChecked=""
          />
          <label className="btn btn-outline-dark" htmlFor="black">
            Black
          </label>
          <input
            type="radio"
            className="btn-check"
            name="color"
            id="silver"
            autoComplete="off"
          />
          <label className="btn btn-outline-secondary" htmlFor="silver">
            Silver
          </label>
          <input
            type="radio"
            className="btn-check"
            name="color"
            id="blue"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="blue">
            Blue
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="form-label">
          Quantity:
        </label>
        <input
         onChange={function(evt){
          dispatch(  setValue({
            id:product.id,
            qty:evt.target.value
          }) )
         }}
          type="number"
          className="form-control"
          id="quantity"
          defaultValue={1}
          min={1}
          style={{ width: 80 }}
        />
      </div>
      <button onClick={function(){

        dispatch( addName(product) );
        
      }} className="btn btn-primary btn-lg mb-3 me-2">
        <i className="bi bi-cart-plus" /> Add to Cart
      </button>
      <button className="btn btn-outline-secondary btn-lg mb-3">
        <i className="bi bi-heart" /> Add to Wishlist
      </button>
      <div className="mt-4">
        <h5>Key Features:</h5>
        <ul>
          <li>Industry-leading noise cancellation</li>
          <li>30-hour battery life</li>
          <li>Touch sensor controls</li>
          <li>Speak-to-chat technology</li>
        </ul>
      </div>
    </div>
  </div>
</div>


}