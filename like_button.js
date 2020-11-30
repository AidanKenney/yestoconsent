'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import axios from '../node_modules/axios/dist/axios.js';

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      axios({
        url: "https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/CH29f74rGeO/?utm_source=ig_web_copy_link/&access_token=395899871462736%7Cd2a5101e4de7d2f7a459f3ca204a7b03",
        method: 'GET'
        // headers: {
        //   'Authorization': `Token token=${this.props.user.token}`
        // }
      }).then(function (res) {
        return console.log(res);
      });
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
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return 'You liked this.';
      }

      return React.createElement(
        'button',
        { onClick: function onClick() {
            return _this2.setState({ liked: true });
          } },
        'Like'
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton, null), domContainer);