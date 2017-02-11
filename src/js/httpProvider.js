import React, { PropTypes, Component, Children } from 'react';
import axios from "axios";
import querystring from 'querystring';

axios.interceptors.response.use(undefined, err => {
  console.log(1);
    if (err.status === 500) {
      window.location.href = '500';
    }
    return Promise.reject(err);
  }
);

class HttpProvider extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
    token: PropTypes.any
  };

  static childContextTypes = {
    http: PropTypes.func.isRequired,
  };

  getChildContext() {

    const auth = this.props.token ? { 'Authorization': `Token ${this.props.token}` } : null;

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...auth
    };

    return {
      http: axios.create({
        baseURL: 'https://api.legionanalytics.com/',
        headers: headers,
        transformRequest: [function (data) {
          return querystring.stringify(data);
        }],
      })
    }
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default HttpProvider;
