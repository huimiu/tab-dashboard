import React, { Component, CSSProperties } from "react";

import { headerStyles, widgetStyles } from "./Widget.styles";

/**
 * Defined a widget, it's also a react component.
 * For more information about react component, please refer to https://reactjs.org/docs/react-component.html
 * T is the model type of the widget.
 */
export abstract class Widget<T> extends Component<{}, T> {
  constructor(props: any) {
    super(props);
    this.state = {} as T;
  }

  /**
   * This method is invoked immediately after a component is mounted.
   * It's a good place to fetch data from server.
   * For more information about react lifecycle, please refer to https://reactjs.org/docs/react-component.html#componentdidmount
   */
  async componentDidMount() {
    this.setState(await this.getData());
  }

  /**
   * Define your widget layout, you can edit the code here to customize your widget.
   */
  render() {
    return (
      <div style={{ ...widgetStyles(), ...this.customiseWidgetStyle() }}>
        {this.headerContent() && <div style={headerStyles}>{this.headerContent()}</div>}
        {this.bodyContent() !== undefined && this.bodyContent()}
        {this.bodyContent() !== undefined && this.footerContent()}
      </div>
    );
  }

  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file. Override this method according to your needs.
   * @returns data for the widget
   */
  protected async getData<K extends keyof T>(): Promise<Pick<T, K>> {
    return {} as Pick<T, K>;
  }

  /**
   * Override this method to customize the widget header.
   * @returns JSX component for the widget body
   */
  protected headerContent(): JSX.Element | undefined {
    return undefined;
  }

  /**
   * Override this method to customize the widget body.
   * @returns JSX component for the widget body
   */
  protected bodyContent(): JSX.Element | undefined {
    return undefined;
  }

  /**
   * Override this method to customize the widget footer.
   * @returns react node for the widget footer
   */
  protected footerContent(): JSX.Element | undefined {
    return undefined;
  }

  /**
   * Override this method to customize the widget style.
   * @returns custom style for the widget
   */
  protected customiseWidgetStyle(): CSSProperties | undefined {
    return undefined;
  }
}
