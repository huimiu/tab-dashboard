import "./Dashboard.css";

import React from "react";

import { Chart } from "./sample/Chart";
import { Task } from "./sample/Task";
import { dashboardStyle, rowStyle } from "./Dashboard.styles";

interface IDashboardProp {}

export default class Dashboard extends React.Component<{}, IDashboardProp> {
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return (
      <>
        <div className="dashboard">
          <div className="row">
            <div className="widget">
              <Task />
            </div>
            <div className="widget">
              <Chart />
            </div>
          </div>          
        </div>
      </>
    );
  }
}

