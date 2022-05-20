import React from 'react';
import { useEffect, useState, cloneElement, Children } from 'react';

const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);

  const PAGE_WIDTH = 321;

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            // minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`
          }
        });
      })
    );
  }, []);
  return <div className="slides__wrapper">{pages}</div>;
};

export default Carousel;
