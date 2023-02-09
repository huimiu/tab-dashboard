import "../styles/ListWidget.css";

import { Button, Spinner, Text } from "@fluentui/react-components";
import { List28Filled, MoreHorizontal32Regular } from "@fluentui/react-icons";

import { ListModel } from "../../models/listModel";
import { getListData } from "../../services/listService";
import { BaseWidget } from "../lib/BaseWidget";
import { headerContentStyle, headerTextStyle } from "../lib/BaseWidget.styles";
import { CSSProperties } from "react";

interface ListWidgetState {
  data: ListModel[];
}

export class ListWidget extends BaseWidget<ListWidgetState> {
  
  async getData(): Promise<ListWidgetState> {
    return { data: await getListData() };
  }

  protected header(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <List28Filled />
        <Text style={headerTextStyle()}>Your List</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  protected body(): JSX.Element | undefined {
    return (
      <div className="body-content">
        ...
      </div>
    );
  }

  protected footer(): JSX.Element | undefined {
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

  protected stylingWidget(): string | CSSProperties {
    return "lw-widget";
  }

  protected loading(): JSX.Element | undefined {
    return (
      <div style={{ display: "grid" }}>
        <Spinner label="Loading..." labelPosition="below" />
      </div>
    );
  }
}
