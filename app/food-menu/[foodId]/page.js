"use client"

import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { getFoodById } from "@/backend_fake/foods"
function ProductDetailPage() {

  const params = useParams()
  const productId = params.foodId
  const [product, setProduct] = useState(null)
  const [showDescriptions, setShowDescriptions] = useState(false)
  // const [showDescriptions, setShowDescriptions] = useState({
  //   name,
  //   email,
  //   ...
  // })
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

      {showDescriptions ? <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        <br />
        <br />
        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        <div onClick={() => setShowDescriptions(false)}>
          Show less
        </div>
      </div> : <div onClick={() => setShowDescriptions(true)}>
        Show more</div>}
      <div className='px-10 py-3 border rounded-2xl w-40 mx-auto text-center'>
        Add
      </div>
    </div>
  )
}

export default ProductDetailPage