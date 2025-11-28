import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello Word",
    };
  }

  componentDidMount() {
    console.log("Executa quando é acessado pela primeira vez!");
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default Test;
