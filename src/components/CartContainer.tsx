import {ComponentProps} from "react";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {useMakeOrderMutation} from "../services/menu";
import {addItem, clearCart, setHasOrdered} from "../reducers/cartSlice";

export default function CartContainer(props: ComponentProps<any>) {
  const {className, ...others} = props;
  const {items} = useSelector((state: any) => { console.log(state.cart); return state.cart; });
  const dispatch = useDispatch();
  const [makeOrder, {isLoading, isSuccess, isError, error, data}] = useMakeOrderMutation()
  const runMakeOrder = async () => {
    const result = await makeOrder({
      client: "testclient",
      // @ts-ignore
      items: items.map(item=>({dish_id: item.id, quantity: item.quantity}))
    }).unwrap();
    console.log(result)
    dispatch(clearCart(null))
    dispatch(setHasOrdered(true))
  }
  return (<div className={`${className} flex flex-col`} {...others}>
    <p className=" text-3xl font-extrabold uppercase mb-5 h-3">cart</p>
    <div className="flex-1 overflow-y-scroll mt-3">
      {/*// @ts-ignore*/}
      {items.map((item: any, index: number) => (<CartItem item={item} key={index}/>))}
    </div>
    <div className="h-20 border-t-2 flex items-center justify-items-center">
      <button
        type="button"
        className="w-full blo
        ck text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => { runMakeOrder() }}
      >
        Order
      </button>
    </div>
  </div>)
}