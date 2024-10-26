import PropTypes from "prop-types";
import {ComponentProps} from "react"
import DishQuantity from "./DishQuantity";
import {decrementItem, incrementItem, removeItem} from "../reducers/cartSlice";
import {useDispatch} from "react-redux";

export default function CartItem(props: (ComponentProps<any> & { item: any })) {
  const {className, item, ...others} = props;
  const dispatch = useDispatch();

  return (<div className="grid grid-cols-3">
    <div className="col-span-1">
      <img src="/dish.png" alt={item.name}/>
    </div>
    <div className="col-span-2">
      <p>{item.name}</p>
      <p className="text-sm text-gray-500">{item.description}</p>
      <DishQuantity quantity={item.quantity} onIncrement={() => {
        dispatch(incrementItem(item.id))
      }} onDecrement={() => {
        dispatch(decrementItem(item.id))
      }}/>
      <p className="mt-1 justify-items-center">
        <button
          type="button"
          className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          onClick={() => {
            dispatch(removeItem(item.id))
          }}
        >
          remove
        </button>
      </p>
    </div>
  </div>)
}

CartItem.propTypes = {}