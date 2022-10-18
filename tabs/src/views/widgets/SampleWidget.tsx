import React from "react";

import { Flex, Text } from "@fluentui/react-northstar";

import { Widget } from "../../internal/Widget";
import {
  SampleModelItem,
  SampleWidgetModel,
} from "../../models/sampleWidgetModel";
import { getSampleData } from "../../services/sampleRequest";

/**
 * Extends the widget class to implement a sample widget.
 */
export class SampleWidget extends Widget<SampleWidgetModel> {
  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file.
   * @returns The data required by the widget to render.
   */
  getData(): SampleWidgetModel {
    return getSampleData();
  }

  /**
   * Define the widget header.
   * @returns The header content, all ReactNode types are supported.
   */
  headerContent(): React.ReactNode {
    return "Sample Widget";
  }

  /**
   * Define the widget body.
   * @returns The body content, all JSX.Element types are supported.
   */
  bodyContent(): JSX.Element {
    return (
      <Flex fill column gap="gap.small" vAlign="stretch" space="between">
        {this.state.data &&
          this.state.data.items.map((t: SampleModelItem) => {
            return (
              <Flex gap="gap.medium" vAlign="center">
                <Text content={t.content} />
              </Flex>
            );
          })}
      </Flex>
    );
  }

  /**
   * Define the widget footer.
   * @returns The footer content, all ReactNode types are supported.
   */
  footerContent(): React.ReactNode {
    return "View details";
  }
}
