import React, { Component } from "react";
import PropTypes from "prop-types";
import HTMLDecode from "../utils/HTMLDecode";
import "./calculator.css";

// 只支持10以内加减乘除
class CalculatorComp extends Component {
  constructor(props) {
    super(props);
    console.log("props: ", props);
    this.state = { b: 1 };
    this.onNumClick = this.onNumClick.bind(this);
    this.onOprClick = this.onOprClick.bind(this);
    this.onEqualsClick = this.onEqualsClick.bind(this);
    this.onClsClick = this.onClsClick.bind(this);
  }
  onNumClick(e) {
    e.preventDefault();
    let num = e.target.id.substr(3);
    if (this.state.b) {
      this.props.onNumClick(
        num,
        this.props.n2,
        this.props.opr,
        this.props.eq,
        this.props.result
      );
      this.setState({ b: 0 });
    } else {
      this.props.onNumClick(
        this.props.n1,
        num,
        this.props.opr,
        this.props.eq,
        this.props.result
      );
      this.setState({ b: 1 });
    }
  }
  onOprClick(e) {
    e.preventDefault();
    let opr = e.target.id.toString();
    console.log("opr: " + opr);
    this.props.onOprClick(
      this.props.n1,
      this.props.n2,
      opr,
      this.props.eq,
      this.props.result
    );
  }
  onEqualsClick(e) {
    e.preventDefault();
    let eq = "=";
    console.log("eq: " + eq);
    console.log("props: ", this.props);
    this.props.onEqualsClick(
      this.props.n1,
      this.props.n2,
      this.props.opr,
      eq,
      this.props.result
    );
  }
  onClsClick(e) {
    e.preventDefault();
    this.props.onClsClick(
      this.props.n1,
      this.props.n2,
      this.props.opr,
      this.props.eq,
      this.props.result
    );
  }
  render() {
    const { n1, n2, opr, eq, result } = this.props;
    let lOpr;
    switch (opr) {
      case "add":
        lOpr = "+";
        break;
      case "minus":
        lOpr = "-";
        break;
      case "multiple":
        lOpr = HTMLDecode("&#215;");
        break;
      case "divide":
        lOpr = HTMLDecode("&#247;");
        break;
      default:
        lOpr = "";
        break;
    }
    let expression = n1 + lOpr + n2 + eq + result;
    return (
      <span>
        <h3>计算器</h3>
        <p>计算结果: {expression}</p>
        <p className="button-box">
          <button id="num1" onClick={this.onNumClick}>
            1
          </button>
          <br />
          <button id="num2" onClick={this.onNumClick}>
            2
          </button>
          <br />
          <button id="num3" onClick={this.onNumClick}>
            3
          </button>
          <br />
          <button id="add" onClick={this.onOprClick}>
            +
          </button>
          <br />
          <button id="num4" onClick={this.onNumClick}>
            4
          </button>
          <br />
          <button id="num5" onClick={this.onNumClick}>
            5
          </button>
          <br />
          <button id="num6" onClick={this.onNumClick}>
            6
          </button>
          <br />
          <button id="minus" onClick={this.onOprClick}>
            -
          </button>
          <br />
          <button id="num7" onClick={this.onNumClick}>
            7
          </button>
          <br />
          <button id="num8" onClick={this.onNumClick}>
            8
          </button>
          <br />
          <button id="num9" onClick={this.onNumClick}>
            9
          </button>
          <br />
          <button id="multiple" onClick={this.onOprClick}>
            &#215;
          </button>
          <br />
          <button id="num0" onClick={this.onNumClick}>
            0
          </button>
          <br />
          <button id="cls" onClick={this.onClsClick}>
            C
          </button>
          <br />
          <button id="equal" onClick={this.onEqualsClick}>
            =
          </button>
          <br />
          <button id="divide" onClick={this.onOprClick}>
            &#247;
          </button>
          <br />
        </p>
      </span>
    );
  }
}

CalculatorComp.propTypes = {
  result: PropTypes.number.isRequired,
  store: PropTypes.object,
};

export default CalculatorComp;
