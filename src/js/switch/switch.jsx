import React from 'react';
import './styles.css';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }

  handleClick = () => {
    const { isOn } = this.state;
    this.setState({
      isOn: !isOn
    });
  }

  render() {
    // const { width = 40, height = 20, color = 'green' } = this.props;
    const { isOn } = this.state;
    const position = isOn ? '18px' : '0px';
    const bgColor = isOn ? '#70E7EE' : '';
    const style = {
      transform: `translateX(${position})`,
      backgroundColor: isOn ? '#07C8D4' : ''
    };
    return (
      <div
        className="toggle"
        onClick={() => this.handleClick()}
        role="presentation"
      >
        <div
          className="toggle-wrapper"
          style={{ backgroundColor: bgColor }}
        />
        <div
          className="toggle-btn"
          style={style}
        />
      </div>
    );
  }
}

export default Switch;
