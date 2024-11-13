
import React, { FC, PropsWithChildren } from "react"
import cn from "classnames";
import "./style.css";


interface ISpaceProps extends PropsWithChildren {
  size?: number;
  direction?: "horizontal" | "vertical";
  className?: string;
}

export const Space: FC<ISpaceProps> = ({ className, size = 8, direction = "horizontal", children }) => {

  if(!(React.Children.count(children) > 1)) return <>{children}</>;

  return <div className={cn("space-container", `space-direction-${direction}`, className)} style={{ gap: size }}>
    {children}
  </div>
}

export default Space;