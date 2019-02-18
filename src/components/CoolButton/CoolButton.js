import React, { Component } from 'react';
import classNames from 'classnames';



class CoolButton extends Component {
  render() {

    let className = classNames(
      'button',
      this.props.className,
      {
        'is-small': this.props.isSmall,
        'is-danger': this.props.isDanger,
        'is-success': this.props.isSuccess,
        'is-primary': this.props.isPrimary,
        'is-info':this.props.isInfo,
      });

    return <button className={className}>{this.props.children}</button>;
  }
}

export default CoolButton;
