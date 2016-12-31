import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  constructor(props) {
    super(props);

    this.node = null;

    this.openPortal = this.openPortal.bind(this);
    this.closePortal = this.closePortal.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.openPortal();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen) {
      this.openPortal();
    } else {
      this.closePortal();
    }
  }

  openPortal() {
    if (!this.node) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);

      ReactDOM.unstable_renderSubtreeIntoContainer(
        this,
        this.props.children,
        this.node,
      );
    }
  }

  closePortal() {
    if (this.node) {
      document.body.removeChild(this.node);
      this.node = null;
    }
  }

  render() {
    return null;
  }
}

Portal.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

Portal.defaultProps = {
  isOpen: false,
};

export default Portal;
