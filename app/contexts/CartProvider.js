import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)
function CartProvider({ children }) {
  const [itemsCount, setItemsCount] = useState(0)

  function handleAddProduct() {
    setItemsCount(itemsCount + 1)
  }

  return (
    <CartContext.Provider
      value={{
        itemsCount,
        handleAddProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider