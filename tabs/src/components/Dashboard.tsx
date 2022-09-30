import "./Dashboard.css";

import React from "react";

import { Flex } from "@fluentui/react-northstar";

import { Task } from "./sample/Task";
import { Chart } from "./sample/Chart";

interface IDashboardProp {}

export default class Dashboard extends React.Component<{}, IDashboardProp> {
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return (
      <>
        <Flex column padding="padding.medium" gap="gap.medium">
          <Flex gap="gap.medium">
            <Flex styles={{ flex: "1" }}>
              <Task />
            </Flex>
            <Flex styles={{ flex: "1" }}>
              <Chart />
            </Flex>
          </Flex>
        </Flex>
      </>
    );
  }
}
