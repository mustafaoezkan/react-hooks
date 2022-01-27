import React from "react";

// Eski düzen
// type MyProps = {};
// type MyState = { counter: number };
// class ClassComponent extends React.Component<MyProps, MyState>
class ClassComponent extends React.Component {
  // Eski düzen
  //   constructor(props: MyProps) {
  //     super(props);
  //     this.increase = this.increase.bind(this);
  //     this.state = {
  //       counter: 0,
  //     };
  //   }

  state = {
    counter: 0,
  };
  // Eski düzen
  //   increase() {
  //     this.setState({ counter: this.state.counter + 1 });
  //   }
  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("Class Component UseState", this.state.counter);
    return (
      <div className="box">
        <h2>Class Component UseState</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.increase()}>Increase</button>
      </div>
    );
  }
}

export default ClassComponent;
