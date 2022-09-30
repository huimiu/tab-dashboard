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
        <Flex padding="padding.medium" wrap column>
          <Flex wrap gap="gap.medium">
            <Flex styles={{ flex: "1", margin: "0 0 1rem 0" }}>
              <Task />
            </Flex>
            <Flex styles={{ flex: "1", margin: "0 0 1rem 0" }}>
              <Chart />
            </Flex>
          </Flex>         
        </Flex>
      </>
    );
  }
}
