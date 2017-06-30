import React from 'react';
import PropTypes from 'prop-types';
import utility from './utility';
import Button from './Button';

export default class FacebookButton extends React.Component {

  static displayName = "FacebookButton"

  static propTypes = {
    appId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    message: PropTypes.string.isRequired,
    url: PropTypes.string,
    media: PropTypes.string
  }

  constructUrl = () => {
    const params = {
      app_id: this.props.appId,
      display: "popup",
      caption: this.props.message,
      link: this.props.url,
      redirect_uri: "https://www.facebook.com"
    }

    if(this.props.media) {
      params.picture = this.props.media
    }

    return utility.buildURI("https://www.facebook.com/dialog/feed", params);
  };

  render() {
    /* eslint-disable no-unused-vars */
    const { appId, message, media, ...passProps } = this.props
    /* eslint-enable no-unused-vars */
    return <Button {...passProps} constructUrl={this.constructUrl} />
  }

}