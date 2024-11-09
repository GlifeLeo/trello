"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getListFood } from "@/backend_fake/foods"
import Food from "@/app/components/products/Food"
function ProductsPage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadedProducts = getListFood()
    setProducts(loadedProducts)
  }, [])

  return (
    <div className='w-4/5 mx-auto'>
      {/* <Link href="/products/3">
        Product 3
      </Link> */}
      <h2 className='py-10'>Products</h2>
      <div className='grid grid-cols-3 gap-5'>
        {!!products.length && products.map((pro, index) => {
          return <div key={index} className='rounded-lg overflow-hidden border shadow'>
            <Food id={pro.id} imageUrl={pro.imageUrl} name={pro.name} price={pro.price} />
          </div>
        })}
      </div>
    </div>
  )
}

export default ProductsPage