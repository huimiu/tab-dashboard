import "../Dashboard.css";

import React from "react";

import {
  ArrowRightIcon,
  CircleIcon,
  StarIcon,
} from "@fluentui/react-icons-northstar";
import { Button, Card, Flex, Text } from "@fluentui/react-northstar";

import ListModel from "../../model/listModel";

interface IWidgetState {
  data?: ListModel[];
}

// dummy data
const data: ListModel[] = [
  {
    id: "t1",
    content: "Duis dignissim elit",
  },
  {
    id: "t2",
    content: "Maecenas dapibus velit",
  },
  {
    id: "t3",
    content: "Aliquam non justo",
  },
  {
    id: "t4",
    content: "Mauris venenatis nibh",
  },
  {
    id: "t5",
    content: "Duis nec scelerisque",
  },
  {
    id: "t6",
    content: "Ut nibh nisi",
  },
];

/**
 * Defined a widget to show a list, it's also a react component.
 * For more information about react component, please refer to https://reactjs.org/docs/react-component.html
 */
export class List extends React.Component<{}, IWidgetState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  /**
   * This method is invoked immediately after a component is mounted.
   * It's a good place to fetch data from server.
   * For more information about react lifecycle, please refer to https://reactjs.org/docs/react-component.html#componentdidmount
   */
  async componentDidMount() {
    this.setState({ data: data });
  }

  /**
   * Define your widget layout, you can edit the code here to customize your widget.
   */
  render() {
    return (
      <Card fluid elevated styles={{ ":hover": "backgroud-color: #FFFFFF" }}>
        {/** Card header */}
        <Card.Header>
          <Text weight="semibold" size="large" content="List Widget" />
        </Card.Header>

        {/** Card content layout */}
        <Flex
          fill
          column
          gap="gap.small"
          vAlign="stretch"
          space="between"
          style={{ overflow: "hidden" }}
        >
          {/** List Content */}
          <Card.Body>
            <div>
              {this.state.data?.map((t: ListModel) => {
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

        {/** Card footer */}
        <Card.Footer fitted>
          <Button
            text
            primary
            icon={<ArrowRightIcon size="small" />}
            content="View all"
            iconPosition="after"
            size="small"
            style={{ width: "fit-content", marginLeft: "-8px" }}
            onClick={() => {}} // navigate to detailed page
          />
        </Card.Footer>
      </Card>
    );
  }
}
