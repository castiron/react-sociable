import React from 'react';
import PropTypes from 'prop-types';
import utility from './utility';
import Button from './Button';

export default class EmailButton extends React.Component {

  static displayName = "EmailButton"

  static propTypes = {
    message: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }

  constructUrl = () => {
    const params = {
      subject: this.props.message,
      body: this.props.url
    };
    return utility.buildURI("mailto:", params);
  };

  render() {
    /* eslint-disable no-unused-vars */
    const { message, ...passProps } = this.props
    /* eslint-enable no-unused-vars */
    return <Button {...passProps} constructUrl={this.constructUrl} />
  }

}