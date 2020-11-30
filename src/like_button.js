'use strict';

import axios from '../node_modules/axios/dist/axios.js'

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  componentDidMount () {
    axios({
      url: "https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/CH29f74rGeO/?utm_source=ig_web_copy_link/&access_token=395899871462736%7Cd2a5101e4de7d2f7a459f3ca204a7b03",
      method: 'GET'
      // headers: {
      //   'Authorization': `Token token=${this.props.user.token}`
      // }
    })
      .then(res => console.log(res))
      // .then(res => this.setState({ item: res.data.item }))
      // .then(() => this.props.msgAlert({
      //   heading: 'Success',
      //   variant: 'success',
      //   message: 'Success to view your item!'
      // }))
      // .catch(() => (
      //   this.props.msgAlert({
      //     heading: 'Failure',
      //     variant: 'danger',
      //     message: 'Error 404!!!!!!'
      //   })
      // ))
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);
