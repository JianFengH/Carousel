import React, { useState } from "react";
import PropTypes from 'prop-types';
import cx from 'classnames';
import './CarouselCollection.css';

CarouselColletionItem.propTypes = {
  newClass: PropTypes.string,
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
};
export function CarouselColletionItem({ children, newClass, style }) {
  return <div className={cx({
    'cc-item': true,
    [newClass]: true,
  })} style={style}>
    {children}
  </div>
}

CarouselColletion.propTypes = {
  defaultActiveIndex: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
CarouselColletion.defaultProps = {
  defaultActiveIndex: 0,
};
export default function CarouselColletion({ children, defaultActiveIndex }) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const childrenLength = React.Children.count(children);
  let beforeIndex = activeIndex - 1;
  let nextIndex = activeIndex + 1;
  if (beforeIndex < 0) {
    beforeIndex = childrenLength - 1;
  }
  if (nextIndex >= childrenLength) {
    nextIndex = 0;
  }

  return (<>
    <div className="cc-wrapper">
      <div className="cc-list">
        {React.Children.map(children, (child, index) => {
          let newClass = '';
          if (index === activeIndex) {
            newClass = 'ani-active';
          } else if (index === beforeIndex) {
            newClass = 'ani-before'
          } else if (index === nextIndex) {
            newClass = 'ani-next'
          }
          return React.cloneElement(child, { newClass });
        })}
      </div>

      <div className="cc-control">
        <button onClick={() => {
          let newActiveIndex = activeIndex - 1;
          if (newActiveIndex < 0) {
            newActiveIndex = childrenLength - 1;
          }
          setActiveIndex(newActiveIndex);
        }}>Before</button>
        <button onClick={() => {
          let newActiveIndex = activeIndex + 1;
          if (newActiveIndex >= childrenLength) {
            newActiveIndex = 0;
          }
          setActiveIndex(newActiveIndex);
        }}>Next</button>
      </div>
    </div>
  </>);
}