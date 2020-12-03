'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      html: ''
     };
  }

  componentDidMount () {
    const apiUrl = "https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/CH29f74rGeO/?utm_source=ig_web_copy_link/&access_token=395899871462736%7Cd2a5101e4de7d2f7a459f3ca204a7b03"
    fetch(apiUrl, {
    method: 'get'
    })
    .then(response => response.json())
    .then(data => {
      // this.setState({ html: data.html })
      const insta = document.createElement('div')
      insta.innerHTML = data.html
      document.getElementById("like_button_container").appendChild(insta)
      window.instgrm.Embeds.process()
    })
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <div>
        <button onClick={() => this.setState({ liked: true }) }>
          Like
        </button>
      </div>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);
