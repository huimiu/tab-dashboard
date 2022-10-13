import "../Dashboard.css";

import React from "react";

import {
  ArrowRightIcon,
  CircleIcon,
  StarIcon,
} from "@fluentui/react-icons-northstar";
import { Button, Card, Flex, Text } from "@fluentui/react-northstar";

import SampleWidgetModel from "../../models/sampleWidgetModel";
import { getSampleData } from "../../services/sampleRequest";

interface IWidgetState {
  data?: SampleWidgetModel[];
}

/**
 * Defined a widget, it's also a react component.
 * For more information about react component, please refer to https://reactjs.org/docs/react-component.html
 */
export class SampleWidget extends React.Component<{}, IWidgetState> {
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
    this.setState({ data: this.getData() });
  }

  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file. Modify this method according to your needs.
   * @returns data for the widget
   */
  private getData(): SampleWidgetModel[] {
    return getSampleData();
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
            <Flex column gap="gap.small">
              {this.state.data?.map((t: SampleWidgetModel) => {
                return (
                  <Flex gap="gap.medium" vAlign="center">
                    <Text content={t.content} />
                  </Flex>
                );
              })}
            </Flex>
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
            style={{ width: "fit-content"}}
            onClick={() => {}} // navigate to detailed page
          />
        </Card.Footer>
      </Card>
    );
  }
}
