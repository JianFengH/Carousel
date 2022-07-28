import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import './FullPage.css';

const THRESHOLD = 10;

export function FullPageItem({ children, style }) {
  return <div className="full-item" style={style}>
    {children}
  </div>
}

FullPage.propTypes = {
  defaultActiveIndex: PropTypes.number,
};
FullPage.defaultProps = {
  defaultActiveIndex: 0,
};
/**
 * requirements:
 * 1. each child occupy whole window.
 * 2. switch child page by wheel.
 */
export default function FullPage({ children, defaultActiveIndex }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const childrenCount = React.Children.count(children);
  const windowHeight = window.innerHeight;

  useEffect(() => {
    let timer = null;

    function onwheel(e) {
      // console.log('onwheel:', e);
      e.preventDefault();
      const { deltaX, deltaY } = e;
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > THRESHOLD) {
        console.log('deltaY:', deltaY);
        if (deltaY > 0) {
          if (activeIndex < childrenCount - 1) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              setActiveIndex(activeIndex + 1);
            }, 500);
          }
        } else if (deltaY < 0) {
          if (activeIndex > 0) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              setActiveIndex(activeIndex - 1);
            }, 500);
          }
        }
      }
    }
    window.addEventListener('wheel', onwheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onwheel);
      clearTimeout(timer);
    }
  }, [activeIndex, childrenCount]);

  return <div className="full-wrapper">
    <div className="full-body" style={{ transform: `translateY(-${activeIndex * windowHeight}px)` }}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child);
      })}
    </div>
  </div>
}