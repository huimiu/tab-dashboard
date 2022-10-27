import { Button, Divider, ListIcon, MoreIcon, Text } from '@fluentui/react-northstar';

import { SampleModelItem, SampleWidgetModel } from '../../models/sampleWidgetModel';
import { getSampleData } from '../../services/sampleRequest';
import { Widget } from '../lib/Widget';
import { headerContentStyle, headerTextStyle } from '../lib/Widget.styles';
import { itemSubtitleStyle, itemTitleStyle } from '../styles/ListWidget.styles';

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
    return (
      <div style={headerContentStyle()}>
        <ListIcon size="large" />
        <Text style={headerTextStyle()} content="Your List" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }

  /**
   * Define the widget body.
   * @returns The body content, all JSX.Element types are supported.
   */
  bodyContent(): JSX.Element | undefined {
    return (
      <div style={{ display: "grid", gap: "0.5rem" }}>
        {this.state.data &&
          this.state.data.items.map((t: SampleModelItem) => {
            return (
              <div style={{ display: "grid" }}>
                <Divider style={{ marginBottom: "0.5rem" }} />
                <Text content={t.title} style={itemTitleStyle()} />
                <Text content={t.content} style={itemSubtitleStyle()} />
              </div>
            );
          })}
      </div>
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
