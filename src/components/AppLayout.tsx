import { CSSProperties, FC, PropsWithChildren } from "react";

export const MAX_WIDTH = 1500;
export const SIDEBAR_WIDTH = 250;

const CENTER_CONTENT_STYLE: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

interface AppLayoutProps extends PropsWithChildren {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
}

const AppLayout: FC<AppLayoutProps> = ({
  sidebar,
  children,
}) => {
  return (
    <div className="container">
      <header className="header">
        <h1>My Test React App</h1>
      </header>
      {sidebar &&
        <aside
          className="sidebar"
          style={{  width: SIDEBAR_WIDTH  }}
        >
            {sidebar}
        </aside>
      }
      <main style={CENTER_CONTENT_STYLE}>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
