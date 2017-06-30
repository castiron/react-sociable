import React from 'react';
import PropTypes from 'prop-types';
import utility from './utility';
import Button from './Button';

export default class PinterestButton extends React.Component {

  static displayName = "PinterestButton"

  static propTypes = {
    media: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
   }

  constructUrl = () => {
    const params = {
      url: this.props.url,
      media: this.props.media,
      description: this.props.message
    };
    return utility.buildURI("https://pinterest.com/pin/create/button/", params);
  };

  render() {
    /* eslint-disable no-unused-vars */
    const { media,  message, ...passProps } = this.props;
    /* eslint-enable no-unused-vars */
    return <Button {...passProps} constructUrl={this.constructUrl} />
  }

}