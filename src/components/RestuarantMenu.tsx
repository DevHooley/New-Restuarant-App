import { useState } from "react"
import menuItems from "./menuItems"

type AddToCartFunction = (item: MenuItem) => void
type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const MenuItem = ({ item, addToCart }: { item: MenuItem; addToCart: AddToCartFunction }) => {
  return (
    <div className="container text-center">
      <div className="w-full p-4 mx-auto transition duration-300 bg-white rounded-lg shadow-md hover:shadow-lg sm:w-48">
        <img src={item.image} alt={item.name} className="object-contain w-full h-32 mb-2 object-" />
        <h2 className="mb-2 text-xl font-semibold">{item.name}</h2>
        <p className="mb-2 text-gray-600">{item.description}</p>
        <p className="font-semibold text-gray-800">${item.price.toFixed(2)}</p>
        <button
          className="px-4 py-2 mt-4 font-semibold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

const RestaurantMenu = () => {
  const [total, setTotal] = useState(0)

  const addToCart = (item: MenuItem) => {
    setTotal(total + item.price)
  }

  const clearCart = () => {
    setTotal(0)
  }

  const renderMenuItems = () => {
    return menuItems.map((item: MenuItem) => (
      <MenuItem key={item.id} item={item} addToCart={addToCart} />
    ))
  }

  return (
    <div className="container p-10 mx-auto">
      <h1 className="w-64 p-2 mx-auto mb-4 text-2xl font-semibold text-center bg-yellow-400 rounded-md shadow-md">
        Menu
      </h1>
      <div className="flex flex-wrap justify-center gap-4 sm:justify-between sm:gap-8">
        {renderMenuItems()}
      </div>
      <div className="mt-8 text-center">
        <h1 className="text-2xl text-slate-950">Cart</h1>
        <p className="text-slate-800">Total: ${total.toFixed(2)}</p>
        {total > 0 && (
          <button
            className="px-4 py-2 mt-4 font-semibold text-white transition duration-300 bg-red-500 rounded hover:bg-red-600"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  )
}

export default RestaurantMenu
