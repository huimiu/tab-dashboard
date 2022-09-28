import "./Dashboard.css";

import React from "react";

import { Flex } from "@fluentui/react-northstar";

import { Widget } from "./sample/Widget";

interface IDashboardProp {
  showLogin?: boolean;
}

export default class Dashboard extends React.Component<{}, IDashboardProp> {
  constructor(props: any) {
    super(props);
    this.state = {
      showLogin: undefined,
    };
  }

  async componentDidMount() {
    this.setState({
      showLogin: false,
    });
  }

  render() {
    return (
      <>
        {this.state.showLogin === false && (
          <Flex column padding="padding.medium" gap="gap.medium">
            <Flex fill gap="gap.small">
              <Flex styles={{ flex: "1" }}>
                <Widget />
              </Flex>
            </Flex>
          </Flex>
        )}
      </>
    );
  }
}
