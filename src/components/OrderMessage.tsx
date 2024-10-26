import {useDispatch, useSelector} from "react-redux";
import {setHasOrdered} from "../reducers/cartSlice";

export default function OrderMessage() {
  const dispatch = useDispatch();
  // @ts-ignore
  const {hasOrdered} = useSelector(state => state.cart)
  return (<div>
    { /* @ts-ignore */}
    <div id="popup-modal" tabIndex="-1"
         className={`${!hasOrdered && 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center justify-items-center  items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white mt-auto mb-auto rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5 text-center">
            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Your order has been placed.</h3>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => {dispatch(setHasOrdered(false))}}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>)
}