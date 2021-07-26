import { Component } from "react"

class MyContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidCatch(error) {
    console.log('componentDidCatch: ', error)
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError: ', error)
 }

 render() {
   return this.props.children || <div>no render</div>
 }
}

export default MyContainer