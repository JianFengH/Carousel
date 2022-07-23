import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      count: 100,
    };
  }

  render() {
    const btnClass = cx({
      'like-button': true,
      'liked': this.state.liked,
    });
    
    return (
      <>
        <button
          className={btnClass}
          onClick={() => {
            this.setState({
              liked: !this.state.liked,
              count: this.state.liked ? this.state.count - 1 : this.state.count + 1,
            });
          }}
        >
          Like | <span className='likes-counter'>{this.state.count}</span>
        </button>

        <style>{`
            .like-button {
                font-size: 1rem;
                padding: 5px 10px;
                color:  #585858;
            }
            .liked {
                font-weight: bold;
                color: #1565c0;
            }
        `}</style>
      </>
    );
  }
}
