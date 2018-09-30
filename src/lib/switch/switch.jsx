import React from 'react';
// import './styles.css';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  onSwitchClick = () => {
    debugger;
    const { selected } = this.state;
    this.setState({
      selected: !selected
    });
  }

  render() {
    const { width = 40, height = 20, color = 'green' } = this.props;
    const { selected } = this.state;
    const style = {
      width,
      height,
      borderWidth: height / 10,
      borderColor: selected ? color : 'lightGrey',
      borderStyle: 'solid',
      borderRadius: height,
      backgroundColor: selected ? color : 'lightGrey',
      cursor: 'pointer'
    };
    const switchColor = {
      width: height,
      height,
      float: selected ? 'right' : 'left',
      backgroundColor: 'white',
      borderRadius: '100%'
    };
    return (
      <div
        className="switch-wrapper"
        style={style}
        role="presentation"
        onClick={() => this.onSwitchClick()}
      >
        <div
          className="switch"
          style={switchColor}
        />
      </div >
    );
  }
}

export default Switch;
