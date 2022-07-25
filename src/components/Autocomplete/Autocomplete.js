import React from 'react';
import classnames from 'classnames';
import axios from 'axios';

const ITEMS_API_URL = 'https://example.com/api/items';
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: [],
      loading: false,
    };
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
    clearTimeout(this.timer);
  }

  fetchItems(query) {
    if (!query) {
      return;
    }

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ loading: true });
      axios.get(ITEMS_API_URL, { params: { q: query } })
        .then(response => {
          if (this._mounted) {
            this.setState({
              items: response.data,
              loading: false,
            });
          }
        })
        .catch(error => {
          if (this._mounted) {
            console.log(error);
            this.setState({
              items: [],
              loading: false,
            });
          }
        });
    }, DEBOUNCE_DELAY);
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className={classnames({
            'control': true,
            'is-loading': this.state.loading,
          })}>
            <input type="text" className="input" onChange={(e) => {
              this.setState({ query: e.target.value });
              this.fetchItems(e.target.value.trim());
            }} />
          </div>

          {!this.state.loading && <div className="list is-hoverable">
            {this.state.items.map((item, index) => (
              <a className="list-item" key={index} onClick={() => {
                this.props.onSelectItem && this.props.onSelectItem(item);
              }}>{item}</a>
            ))}
          </div>}
        </div>

        <style>{`
          .list-item {
            display: block;
            padding: 0.5rem 1rem;
            text-decoration: none;
            cursor: pointer;
          }
      `}</style>
      </>
    );
  }
}
