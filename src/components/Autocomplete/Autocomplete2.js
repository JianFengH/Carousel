import { useState, useEffect } from 'react';
import cx from 'classnames';

const REBOUNCE_DELAY = 500;
const ITMES_API_URL = 'https://example.com/api/items';

export default function Autocomplete2(props) {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let igore = false;
    const timer = setTimeout(async () => {
      setLoading(true);
      const res = await fetch(`${ITMES_API_URL}?q=${query}`);
      if (!igore) {
        setLoading(false);
        if (res.status === 'ok') {
          const d = await res.json();
          setItems(d);
          setQuery('');
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

  return (<>
    <div className={cx({
      'control': true,
      'is-loading': loading,
    })}>
      <input onChange={(e) => {
        setQuery(e.target.value.trim());
      }} />
    </div>

    {!loading && <div className='list'>
      {items.map((item, index) => {
        return <a className='item-link' key={index} onClick={() => props.onItemSelected && props.onItemSelected(item)}>{item}</a>
      })}
    </div>}

    <style>{`
      .item-link {
        display: block;
        padding: 0.8rem 1rem;
        text-decoration: none;
        cursor: point;
      }
    `}</style>
  </>);
}