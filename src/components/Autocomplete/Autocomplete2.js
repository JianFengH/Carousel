import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const REBOUNCE_DELAY = 500;
const ITMES_API_URL = 'https://api.npoint.io/d73da5ce01ec05ac8f3d';

Autocomplete2.propTypes = {
  focus: PropTypes.bool,
  onSelectItem: PropTypes.func,
};

Autocomplete2.defaultProps = {
  focus: false,
};

export default function Autocomplete2(props) {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!query) {
      setItems([]);
      return;
    }

    let igore = false;
    const timer = setTimeout(async () => {
      setLoading(true);
      const res = await fetch(`${ITMES_API_URL}?q=${query}`);
      if (!igore) {
        setLoading(false);
        if (res.status === 200) {
          const d = await res.json();
          setItems(d);
        } else {
          setItems([]);
        }
      }
    }, REBOUNCE_DELAY);

    return () => {
      clearTimeout(timer);
      igore = true;
    };
  }, [query]);

  useEffect(() => {
    if (props.focus) {
      inputRef.current.focus();
    }
  }, [props.focus]);

  return (<>
    <div className='wrapper'>
      <div className={cx({
        'control': true,
        'is-loading': loading,
      })}>
        <input ref={inputRef} onChange={(e) => {
          setQuery(e.target.value.trim());
        }} />
      </div>

      {!loading && <div className='list'>
        {items.map((item, index) => {
          return <div className='list-item' key={index} onClick={() => props.onSelectItem && props.onSelectItem(item)}>{item}</div>
        })}
      </div>}
    </div>

    <style>{`
      .wrapper {
        max-width: 300px;
      }
      .control input {
        box-sizing: border-box;
        width: 100%;
      }
      .list {
        background-color: #eee;
      }
      .list-item {
        display: block;
        padding: 0.8rem 1rem;
        text-decoration: none;
        cursor: point;
        color: blue;
      }
      
      .is-loading {
        position: relative;
      }
      .is-loading:after {
        content: " ";
        display: block;
        position: absolute;
        right: 4px;
        top: 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 2px solid blue;
        border-color: blue transparent blue transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </>);
}