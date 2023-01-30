import { Button, Spinner, Text } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";

import { ListModel } from "../../models/listModel";
import { getListData } from "../../services/listService";
import { Widget } from "../lib/Widget";
import { footerBtnStyle, headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import {
  bodyContentStyle,
  dividerStyle,
  itemLayoutStyle,
  itemSubtitleStyle,
  itemTitleStyle,
} from "../styles/ListWidget.styles";

interface ListWidgetState {
  data: ListModel[];
  loading?: boolean;
}

/**
 * Extends the Widget class to implement a list widget.
 */
export class ListWidget extends Widget<ListWidgetState> {
  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file.
   * @returns The data required by the widget to render.
   */
  async getData(): Promise<ListWidgetState> {
    return { data: await getListData(), loading: false };
  }

  /**
   * Define the widget header.
   * @returns The header content, all ReactNode types are supported.
   */
  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <List28Filled />
        <Text style={headerTextStyle()}>Your List</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  /**
   * Define the widget body.
   * @returns The body content, all JSX.Element types are supported.
   */
  bodyContent(): JSX.Element | undefined {
    return (
      <>
        {this.state.loading !== false ? (
          <div style={{ display: "grid", justifyContent: "center", height: "100%" }}>
            <Spinner label="Loading..." labelPosition="below" />
          </div>
        ) : (
          <div style={bodyContentStyle()}>
            {this.state.data &&
              this.state.data.map((t: ListModel) => {
                return (
                  <div key={`${t.id}-div`} style={itemLayoutStyle()}>
                    <div key={`${t.id}-divider`} style={dividerStyle()} />
                    <Text key={`${t.id}-title`} style={itemTitleStyle()}>
                      {t.title}
                    </Text>
                    <Text key={`${t.id}-content`} style={itemSubtitleStyle()}>
                      {t.content}
                    </Text>
                  </div>
                );
              })}
          </div>
        )}
      </>
    );
  }

  /**
   * Define the widget footer.
   * @returns The footer content, all ReactNode types are supported.
   */
  footerContent(): JSX.Element | undefined {
    if (this.state.loading === false) {
      return (
        <Button
          appearance="primary"
          size="medium"
          style={{ width: "fit-content" }}
          onClick={() => {}} // navigate to detailed page
        >
          View Details
        </Button>
      );
    }
  }
}
