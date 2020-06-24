import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import pickerStyle from "./pickerStyle";

// class ColorPicker extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       displayColorPicker: false,
//       color: this.props.color || {
//         r: "0",
//         g: "0",
//         b: "0",
//         a: "1",
//       },
//     };
//   }
//   componentWillMount() {
//     this.pickerStyle = pickerStyle(this.props.size || "medium");
//   }
//   componentWillReceiveProps(nextProps) {
//     // to be improved...
//     if (nextProps.size === "small") {
//       this.setState({
//         color: nextProps.color,
//       });
//     }
//   }
//   onChange = (color) => {
//     this.setState({ color: color.rgb });
//   };
//   handleClick = () => {
//     this.setState({ displayColorPicker: !this.state.displayColorPicker });
//   };
//   handleClose = () => {
//     this.setState({ displayColorPicker: false });
//     this.props.handleClose(this.state.color);
//   };
//   render() {
//     const state = this.state;
//     const styles = reactCSS(this.pickerStyle(state));

//     return (
//       <div style={{ fontSize: "0" }}>
//         <div style={styles.swatch} onClick={this.handleClick}>
//           <div style={styles.color} />
//         </div>
//         {this.state.displayColorPicker ? (
//           <div style={styles.popover}>
//             <div style={styles.cover} onClick={this.handleClose} />
//             <SketchPicker color={this.state.color} onChange={this.onChange} />
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: this.props.color || {
        r: "0",
        g: "0",
        b: "0",
        a: "1",
      },
    };
  }
  componentWillMount() {
    this.pickerStyle = pickerStyle(this.props.size || "medium");
  }
  componentWillReceiveProps(nextProps) {
    // to be improved...
    // if (nextProps.size === "small") {
    this.setState({
      color: nextProps.color,
    });
    // }
  }
  onChange = (color) => {
    // console.log(this.props);
    this.props.changeColor(color.rgb);
    // this.setState({ color: color.rgb });
  };
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };
  handleClose = () => {
    this.setState({ displayColorPicker: false });
    this.props.handleClose(this.state.color);
  };
  render() {
    const state = this.state;
    const styles = reactCSS(this.pickerStyle(state));

    return (
      <div style={{ fontSize: "0" }}>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={this.state.color} onChange={this.onChange} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
