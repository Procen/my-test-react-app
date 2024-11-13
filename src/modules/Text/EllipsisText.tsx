
import { FC } from "react"
import cn from "classnames";
import "./style.css"


interface ITagProps {
  className?: string;
  children: string;
}

export const EllipsisText: FC<ITagProps> = ({ className, children }) => {

  return <div className={cn("ellipsis-text", className)}>
    {children}
  </div>
}