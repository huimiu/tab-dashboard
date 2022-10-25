import React from 'react';

import { Button, Flex, Text } from '@fluentui/react-northstar';

import { SampleModelItem, SampleWidgetModel } from '../../models/sampleWidgetModel';
import { getSampleData } from '../../services/sampleRequest';
import { Widget } from '../Widget';

/**
 * Extends the Widget class to implement a list widget.
 */
export class ListWidget extends Widget<SampleWidgetModel> {
  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file.
   * @returns The data required by the widget to render.
   */
  getData(): SampleWidgetModel | undefined {
    return getSampleData();
  }

  /**
   * Define the widget header.
   * @returns The header content, all ReactNode types are supported.
   */
  headerContent(): JSX.Element | undefined {
    return <Text weight="semibold" size="large" content="List Widget" />;
  }

  /**
   * Define the widget body.
   * @returns The body content, all JSX.Element types are supported.
   */
  bodyContent(): JSX.Element | undefined {
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
  footerContent(): JSX.Element | undefined {
    return (
      <Button
        primary
        content="View Details"
        size="medium"
        style={{ width: "fit-content" }}
        onClick={() => {}} // navigate to detailed page
      />
    );
  }
}
