import React from 'react';
import PropTypes from 'prop-types';
import utility from './utility';

export default class Button extends React.Component {

  static propTypes = {
    element: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func
    ]),
    url: PropTypes.string,
    onClick: PropTypes.func,
    target: PropTypes.string,
    windowOptions: PropTypes.array,
    constructUrl: PropTypes.func,
    _open: PropTypes.bool
  }

  static defaultProps = {
    element: "button",
    url: utility.isBrowser() ? window.location.href : "",
    target: "_blank",
    windowOptions: [],
    _open: true,
    onClick: () => {},
    constructUrl: () => {}
  }

  click = (event) => {
    const url = this.props.constructUrl();
    const target = this.props.target;
    const options = this.props.windowOptions.join(',');
    this.props.onClick(event, url, target);
    if (utility.isBrowser() && this.props._open) {
      window.open(url, target, options);
    }
  };

  render() {
    /* eslint-disable no-unused-vars */
    const { onClick, element, url, _open, windowOptions, constructUrl, ...other } = this.props;
    /* eslint-enable no-unused-vars */
    const Component = element;
    return (
      <Component
        onClick={this.click}
        {...other} 
      />
    )
  }
}
