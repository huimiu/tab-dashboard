import "../styles/ListWidget.css";

import { Button, Spinner, Text, tokens } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";

import { ListModel } from "../../models/listModel";
import { getListData } from "../../services/listService";
import { AbstractWidget } from "../lib/AbstractWidget";
import { headerContentStyle, headerTextStyle } from "../lib/AbstractWidget.styles";

interface ListWidgetState {
  data: ListModel[];
}

/**
 * Extends the Widget class to implement a list widget.
 */
export class ListWidget extends AbstractWidget<ListWidgetState> {
  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file.
   * @returns The data required by the widget to render.
   */
  async getData(): Promise<ListWidgetState> {
    return { data: await getListData() };
  }

  /**
   * Define the widget header.
   * @returns The header content, all ReactNode types are supported.
   */
  protected headerContent(): JSX.Element | undefined {
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
  protected bodyContent(): JSX.Element | undefined {
    return (
      <div className="body-content">
        {this.state.data &&
          this.state.data.map((t: ListModel) => {
            return (
              <div key={`${t.id}-div`} className="item-layout">
                <div key={`${t.id}-divider`} className="divider" />
                <Text key={`${t.id}-title`} className="item-title">
                  {t.title}
                </Text>
                <Text key={`${t.id}-content`} className="item-subtitle">
                  {t.content}
                </Text>
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
  protected footerContent(): JSX.Element | undefined {
    return (
      <Button
        appearance="primary"
        size="medium"
        className="lw-footer-btn"
        onClick={() => {}} // navigate to detailed page
      >
        View Details
      </Button>
    );
  }

  protected loadingContent(): JSX.Element | undefined {
    return (
      <div style={{ display: "grid" }}>
        <Spinner label="Loading..." labelPosition="below" />
      </div>
    );
  }
}
