import React from "react";

interface ViewportContextObj {
  width: number;
  height: number;
}

const defaultState = {
  width: 0,
  height: 0,
}

export const ViewportContext = React.createContext<ViewportContextObj>(defaultState);

const ViewportProvider: React.FC = (props) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{width, height}}>
      {props.children}
    </ViewportContext.Provider>
  )
}

export default ViewportProvider;