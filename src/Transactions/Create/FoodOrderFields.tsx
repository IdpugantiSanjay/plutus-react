import { Rating } from '../../components/Rating'

export type FoodOrderFieldsType = {
  restaurant: string
  dishes: { name: string; rating: number }[]
}

export type DishType = {
  name: string
  rating: number
}

export type DishProps = {
  dish: DishType
  setDish: (state: DishType) => void
}

export type DishListProps = {
  dishes: DishType[]
  onChange: (dish: DishType, index: number) => void
}

export function DishList({ dishes, onChange }: DishListProps) {
  return (
    <>
      {dishes.map((d, i) => (
        <Dish dish={d} key={i} setDish={(di) => onChange(di, i)} />
      ))}
    </>
  )
}

export function Dish({ dish, setDish }: DishProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <label htmlFor="dish"> Dish </label>
          <Rating count={5} starSize={24} onRated={(rating) => setDish({ ...dish, rating })} />
        </div>
        <div className="mt-1 flex gap-4">
          <input
            id="dish"
            name="dish"
            type="text"
            required
            onChange={(event) => setDish({ ...dish, name: event.target.value })}
          />
        </div>
      </div>
      <div className="self-center justify-self-center text-pink-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
    </div>
  )
}

export type FoodOrderFieldsProps = {
  foodOrder: {
    dishes: DishType[]
    restaurant: string
  }
  setFoodOrder: (fields: FoodOrderFieldsType) => void
}

export function FoodOrderFields({ foodOrder, setFoodOrder }: FoodOrderFieldsProps) {
  return (
    <fieldset className={'space-y-6'}>
      <div>
        <label htmlFor="restaurant">
          Restaurant
          <div className="mt-1 flex gap-4">
            <div className="flex-1">
              <input
                id="restaurant"
                name="restaurant"
                type="text"
                required
                min="0"
                autoFocus
                onChange={(event) => setFoodOrder({ ...foodOrder, restaurant: event.target.value })}
                value={foodOrder.restaurant}
              />
            </div>
          </div>
        </label>
      </div>

      <DishList
        dishes={foodOrder.dishes}
        onChange={(dish, dishIndex) => {
          const dishesCopy = [...foodOrder.dishes]
          dishesCopy[dishIndex] = dish

          setFoodOrder({
            ...foodOrder,
            dishes: dishesCopy,
          })
        }}
      />

      <div className="flex justify-center">
        <button
          className="disabled:opacity-40 disabled:cursor-not-allowed flex text-amber-800 items-center gap-2 background-transparent font-bold uppercase px-3 py-1 text-xs focus:ring-amber-500 mr-1 mb-1"
          type="button"
          onClick={() => setFoodOrder({ ...foodOrder, dishes: [...foodOrder.dishes, { name: '', rating: 0 }] })}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <title>Add Dish</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span> Add Dish </span>
        </button>
      </div>
    </fieldset>
  )
}
