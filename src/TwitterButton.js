import React from 'react';
import PropTypes from 'prop-types';
import utility from './utility';
import Button from './Button';

export default class TwitterButton extends React.Component {

  static displayName = "TwitterButton"

  static propTypes = {
    url: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
   }

  msg() {
    const { message, url } = this.props;
    if (!message || message === "") return url;
    return `${message} ${url}`;
  }

  constructUrl = () => {
    const params = { text: this.msg() };
    return utility.buildURI("https://twitter.com/intent/tweet", params);
  };

  render() {
    /* eslint-disable no-unused-vars */
    const { message, ...passProps } = this.props;
    /* eslint-enable no-unused-vars */
    return <Button {...passProps} constructUrl={this.constructUrl} />
  }

}