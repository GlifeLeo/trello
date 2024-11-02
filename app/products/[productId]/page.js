"use client"

import { useParams } from 'next/navigation'
import React, { useState, useEffect, useContext } from 'react'
import { getFoodById } from "@/backend_fake/foods"
import { CartContext } from "@/app/contexts/CartProvider"

function ProductDetailPage() {

  const params = useParams()
  const productId = params.productId

  const [product, setProduct] = useState(null)

  const { handleAddProduct } = useContext(CartContext)


  useEffect(() => {
    const loadedProduct = getFoodById(productId)
    setProduct(loadedProduct)
  }, [])

  if (!product) {
    return null
  }

  return (
    <div className='w-4/5 mx-auto'>
      <img src={product.imageUrl} className='w-full h-60 object-cover' />
      <div className='p-4'>
        {product.name}<br />
        <span className='text-red-700'>
          {product.price}
        </span>
      </div>
      <div onClick={handleAddProduct} className='px-10 py-3 border rounded-2xl w-40 mx-auto text-center'>
        Add
      </div>
    </div>
  )
}

export default ProductDetailPage