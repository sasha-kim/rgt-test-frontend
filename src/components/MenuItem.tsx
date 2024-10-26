import {ComponentProps} from "react";
import {Dish} from "../services/types";
import {useDispatch} from "react-redux";
import {addItem} from "../reducers/cartSlice";

export default function MenuItem(props: ComponentProps<'div'> & { key: number, item: Dish, }) {
  const {item, className, ...otherProps} = props;
  const dispatch = useDispatch();
  const onAddItem = (item: Dish) => {
    console.log(item);
    dispatch(addItem(item));
  }
  return (<div className={`${className}`}>
    <div {...otherProps}
         className={` grid grid-flow-row w-[300px] h-[300px] p-1 justify-center border-2 rounded shadow-gray-200 border-gray-300`}>
      <img src="/dish.png"/>
      <p>{item.name}</p>
      <p>{item.price}₩</p>
      <button
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => { onAddItem(item) }}
      >Add
      </button>
    </div>
  </div>)
}