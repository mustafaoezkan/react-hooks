import React from "react";
class ClassComponentEffect extends React.Component {
  state = {
    counter: 0,
    counter2: 0,
    timer: 0,
  };

  componentDidMount() {
    console.log("componentDidMount çalıştı");
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  // prevState bir önceki durumu tutuyor ve koşullu durumlar için kullanılıyor
  componentDidUpdate(prevProps: any, prevState: { counter: number }) {
    console.log("Timer: ", this.state.timer);
    if (prevState.counter !== this.state.counter) {
      console.log("componentDidUpdate çalıştı");
    } else {
      console.log("componentDidUpdate çalışmadı");
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("Class Component UseEffect", this.state.counter);
    return (
      <div className="box">
        <h2>Class Component UseEffect</h2>
        <p>Counter: {this.state.counter}</p>
        <p>Counter2: {this.state.counter2}</p>
        <button onClick={() => this.increase()}>Increase</button>
        <button
          onClick={() => this.setState({ counter2: this.state.counter2 + 1 })}
        >
          Increase2
        </button>
      </div>
    );
  }
}

export default ClassComponentEffect;
