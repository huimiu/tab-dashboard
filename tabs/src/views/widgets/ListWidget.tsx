import {
  Button,
  Divider,
  ListIcon,
  MoreIcon,
  Text,
} from "@fluentui/react-northstar";

import { ListModel } from "../../models/listModel";
import { getListData } from "../../services/listService";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import { itemSubtitleStyle, itemTitleStyle } from "../styles/ListWidget.styles";

/**
 * Extends the Widget class to implement a list widget.
 */
export class ListWidget extends Widget<ListModel[]> {
  /**
   * Get data required by the widget, you can get data from a api call or static data stored in a file.
   * @returns The data required by the widget to render.
   */
  getData(): ListModel[] | undefined {
    return getListData();
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
          this.state.data.map((t: ListModel) => {
            return (
              <div style={{ display: "grid" }}>
                <Divider
                  style={{
                    marginBottom: "0.5rem",
                    marginLeft: "-2.25rem",
                    marginRight: "-2.25rem",
                  }}
                />
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
