import React from 'react';
import PropTypes from 'prop-types';
import utility from './utility';
import Button from './Button';

export default class GooglePlusButton extends React.Component {

  static displayName = "GooglePlusButton"

  static propTypes = {
    url: PropTypes.string.isRequired
  }

  constructUrl = () => {
    const params = { url: this.props.url };
    return utility.buildURI("https://plus.google.com/share", params);
  };

  render() {
    return <Button {...this.props} constructUrl={this.constructUrl} />
  }

}