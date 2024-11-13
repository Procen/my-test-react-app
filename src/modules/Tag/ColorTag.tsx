
import { FC, PropsWithChildren, CSSProperties } from "react"
import cn from "classnames";
import "./style.css"


interface ITagProps extends PropsWithChildren {
  borderColor: CSSProperties["color"];
  textColor?: CSSProperties["color"];
  className?: string;
}

export const ColorTag: FC<ITagProps> = ({ borderColor, className, textColor ="white", children }) => {

  return <div className={cn("tag", className)} style={{ border: `1px solid ${borderColor}`, backgroundColor: `${borderColor}80`, color: textColor}}>
    {children}
  </div>

}