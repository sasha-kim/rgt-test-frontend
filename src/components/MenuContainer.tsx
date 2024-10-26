import {ComponentProps} from "react";
import {useGetMenuListQuery} from "../services/menu";
import MenuItem from "./MenuItem";
import {Dish} from "../services/types";

export default function MenuContainer(props: ComponentProps<any>) {
  const { data, error, isLoading } = useGetMenuListQuery('test')
  const {className, ...otheprops} = props;
  console.log(data);
  return (<div {...otheprops} className={`${className} float-left`}>
    <p className="text-3xl font-extrabold uppercase">Menu</p>
    {data && data.map((item: Dish, index: number) => (<MenuItem key={index} item={item} className="inline-block m-3" />))}
  </div>)
}