import {ComponentProps} from "react";

export default function DishQuantity(props: ComponentProps<any> & {
  quantity: number,
  onIncrement: (quantity: number) => void,
  onDecrement: (quantity: number) => void
}) {
  const {quantity, onIncrement, onDecrement} = props;
  return (<div className="inline-flex rounded-md shadow-sm" role="group">
    <button
      type="button"
      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      onClick={() => {
        onDecrement(quantity)
      }}
    >
      -
    </button>
    <span
      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      {quantity}
    </span>
    <button
      type="button"
      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
      onClick={() => {
        onIncrement(quantity)
      }}
    >
      +
    </button>
  </div>)
}