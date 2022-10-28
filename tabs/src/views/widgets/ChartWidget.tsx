import * as d3 from "d3-format";

import { AreaChart } from "@fluentui/react-charting";
import { DataPieRegular, ArrowRight24Filled } from "@fluentui/react-icons";
import { Button, MoreIcon, Text } from "@fluentui/react-northstar";

import { chart1Points, chart2Points } from "../../services/sampleRequest";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";

export default class ChartWidget extends Widget<void> {
  headerContent(): JSX.Element | void {
    return (
      <div style={headerContentStyle()}>
        <DataPieRegular style={{ height: "1.5rem", width: "1.5rem" }} />
        <Text style={headerTextStyle()} content="Your chart" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }

  bodyContent(): JSX.Element | void {
    const chartPoints = [
      {
        legend: "Line 1",
        data: chart1Points,
        color: "#6264A7",
      },
      {
        legend: "Line 2",
        data: chart2Points,
        color: "#D9DBDB",
      },
    ];
    const chartData = {
      chartTitle: "Area chart multiple example",
      lineChartData: chartPoints,
    };
    return (
      <div style={{position: "relative", height: "30vh"}}>
        <AreaChart
          data={chartData}
          legendsOverflowText={"Overflow Items"}
          yAxisTickFormat={d3.format("~s")}
          legendProps={{
            allowFocusOnLegends: true,
          }}
        />
      </div>
    );
  }

  footerContent(): JSX.Element | void {
    return (
      <Button
        primary
        text
        icon={<ArrowRight24Filled />}
        iconPosition="after"
        content="View details"
        size="small"
        style={{ width: "fit-content" }}
        onClick={() => {}} // navigate to detailed page
      />
    );
  }
}
