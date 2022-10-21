import React, { useRef, useLayoutEffect } from "react";

import { dashboardStyles } from "./Dashboard.styles";
import { ListWidget } from "./widgets/ListWidget";

export class Dashboard extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: undefined,
    };
  }

  protected dashboardLayout(): JSX.Element | void {}

  render() {
    const ref = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
      this.setState({
        isMobile: ref.current && ref.current.offsetWidth < 512,
      });
    });

    return (
      <div ref={ref} style={dashboardStyles()}>
        <ListWidget />
        <ListWidget />
      </div>
    );
  }
}
