import "../Dashboard.css";

import React from "react";

import {
  ArrowRightIcon,
  CircleIcon,
  StarIcon,
} from "@fluentui/react-icons-northstar";
import { Button, Card, Flex, Text } from "@fluentui/react-northstar";

import WidgetModel from "../../model/widgetModel";

interface IWidgetState {
  data?: WidgetModel[];
}

const taskData: WidgetModel[] = [
  {
    id: "t1",
    content: "task1",
  },
  {
    id: "t2",
    content: "task2",
  },
  {
    id: "t3",
    content: "task3",
  },
  {
    id: "t4",
    content: "task4",
  },
  {
    id: "t5",
    content: "task5",
  },
  {
    id: "t6",
    content: "task6",
  },
];

export class Widget extends React.Component<{}, IWidgetState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    this.setState({ data: taskData });
  }

  render() {
    return (
      <Card fluid elevated styles={{ ":hover": "backgroud-color: #FFFFFF" }}>
        <Card.Header>
          <Text weight="semibold" size="large" content="Your tasks" />
        </Card.Header>
        <Flex
          fill
          column
          gap="gap.small"
          vAlign="stretch"
          space="between"
          style={{ overflow: "hidden" }}
        >
          <Card.Body>
            <div>
              {this.state.data?.map((t: WidgetModel) => {
                return (
                  <Flex space="between" vAlign="center">
                    <Flex gap="gap.medium" vAlign="center">
                      <CircleIcon outline />
                      <Text content={t.content} />
                    </Flex>
                    <Button
                      icon={<StarIcon />}
                      text
                      iconOnly
                      title="Favorite"
                    />
                  </Flex>
                );
              })}
            </div>
          </Card.Body>
        </Flex>
        <Card.Footer fitted>
          <Button
            text
            primary
            icon={<ArrowRightIcon size="small" />}
            content="View all"
            iconPosition="after"
            size="small"
            style={{ width: "fit-content", marginLeft: "-8px" }}
            onClick={() => {}} // navigate to task page
          />
        </Card.Footer>
      </Card>
    );
  }
}
