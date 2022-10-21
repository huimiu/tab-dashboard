import React from "react";

import { Card, Flex } from "@fluentui/react-northstar";

/**
 * Defined a widget, it's also a react component.
 * For more information about react component, please refer to https://reactjs.org/docs/react-component.html
 * T is the model type of the widget.
 */
export abstract class Widget<T> extends React.Component<
  {},
  { data?: T | void }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: undefined,
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
   * Get data required by the widget, you can get data from a api call or static data stored in a file. Override this method according to your needs.
   * @returns data for the widget
   */
  protected getData(): T | void {}

  /**
   * Override this method to customize the widget header.
   * @returns JSX component for the widget body
   */
  protected headerContent(): JSX.Element | void {}

  /**
   * Override this method to customize the widget body.
   * @returns JSX component for the widget body
   */
  protected bodyContent(): JSX.Element | void {}

  /**
   * Override this method to customize the widget footer.
   * @returns react node for the widget footer
   */
  protected footerContent(): JSX.Element | void {}

  /**
   * Define your widget layout, you can edit the code here to customize your widget.
   */
  render() {
    return (
      <Card fluid elevated styles={{ ":hover": "backgroud-color: #FFFFFF" }}>
        {/** Card header */}
        <Card.Header>{this.headerContent()}</Card.Header>

        {/** Card content */}
        <Flex fill column gap="gap.medium" vAlign="stretch">
          <Card.Body>{this.bodyContent()}</Card.Body>
        </Flex>

        {/** Card footer */}
        <Card.Footer fitted>{this.footerContent()}</Card.Footer>
      </Card>
    );
  }
}
