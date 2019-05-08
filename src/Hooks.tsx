import React, { useState, useEffect } from "react";
import styled from "styled-components";

const GreenParagraph = styled.p`
  color: green;
`;

const BoldAndGreenParagraph = styled(GreenParagraph)`
  font-weight: bold;
`;

const CONSTANT = 0;

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted OR count changed");
  }, [count, CONSTANT]);

  useEffect(() => {
    console.log("Mounted OR count changed");
    // subscribe();
    return () => {
      console.log("UNSUBSCRIBE!");
    };
  }, [count]);

  const sayHello = () => {
    console.log("Hello!");
  };

  return (
    <GreenParagraph
      onClick={() => {
        setCount(count + 1);
        sayHello();
      }}
    >
      Hooks! {count}
    </GreenParagraph>
  );
};

export class ClassComponent extends React.Component<any, { count: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <BoldAndGreenParagraph
        onClick={() => this.setState({ count: this.state.count + 1 })}
      >
        ClassComponent {this.state.count}
      </BoldAndGreenParagraph>
    );
  }
}

export default Hooks;
