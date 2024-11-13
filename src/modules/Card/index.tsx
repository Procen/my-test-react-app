import { FC, ReactElement, PropsWithChildren } from "react";
import "./style.css";

interface ICardProps extends PropsWithChildren {
  title: ReactElement | string;
  extra?: ReactElement;
  footer?: ReactElement;
  className?: string;
}

const Card: FC<ICardProps> = ({ title, extra, footer, children }) => {

  return <div className="card">
    <div className="card-header">
      <div className="card-title">{title}</div>
      <div className="card-extra">{extra}</div>
    </div>
    <div className="card-body">{children}</div>
    <div className="card-footer">{footer}</div>
  </div>
}

export default Card