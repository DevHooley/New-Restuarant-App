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
    <div className="text-center">
      <div className="mx-auto w-full rounded-lg bg-white p-4 shadow-md transition duration-300 hover:shadow-lg sm:w-48">
        <img src={item.image} alt={item.name} className="object- mb-2 h-32 w-full object-contain" />
        <h2 className="mb-2 text-xl font-semibold">{item.name}</h2>
        <p className="mb-2 text-gray-600">{item.description}</p>
        <p className="font-semibold text-gray-800">${item.price.toFixed(2)}</p>
        <button
          className="mt-4 rounded bg-blue-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600"
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
    <div className="container mx-auto p-10">
      <h1 className="mx-auto mb-4 w-64 rounded-md bg-yellow-400 p-2 text-center text-2xl font-semibold shadow-md">
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
            className="mt-4 rounded bg-red-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-red-600"
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
