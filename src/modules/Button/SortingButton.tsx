
import { FC, PropsWithChildren, ButtonHTMLAttributes } from "react"
import cn from "classnames";
import { Sorting } from "src/utils/enums";
import "./style.css"


interface IButtonProps extends PropsWithChildren, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  onClick?: (value:string, type?: Common.Sorting) => void;
  active?: boolean;
  value: string;
  sorting?: Common.Sorting;
}

export const SortingButton: FC<IButtonProps> = ({ active, sorting, value, onClick, children }) => {

  const getNewSortingValue = () => {
    if(!active) return Sorting.Asc;
    if(typeof sorting === "undefined") return Sorting.Asc;
    if(sorting === Sorting.Asc) return Sorting.Desc;
    return undefined;
  }

  const handleClick = () => {
    onClick && onClick(value, getNewSortingValue());
  }

  const getArrows = () => {
    if(active && sorting) {
      return sorting === Sorting.Asc ? <span>&#8593;</span> : <span>&#8595;</span>;
    }

    return <span style={{ color: "#b2aeae" }}>&#8593;&#8595;</span>
  }

  return <div className={cn("sorting-button", { "active": active })} onClick={handleClick}>
      <div className="sorting-field">{children}</div>
      <div className="sorting-arrows" onClick={handleClick}>{getArrows()}</div>
  </div>

}