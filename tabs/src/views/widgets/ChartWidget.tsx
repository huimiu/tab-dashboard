import * as d3 from 'd3-format';

import { AreaChart } from '@fluentui/react-charting';
import { DataPieRegular } from '@fluentui/react-icons';
import { Button, MoreIcon, Text } from '@fluentui/react-northstar';

import { chart1Points, chart2Points } from '../../services/sampleRequest';
import { Widget } from '../lib/Widget';
import { headerContentStyle, headerTextStyle } from '../lib/Widget.styles';

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
        color: "#D9DBDB",
      },
      {
        legend: "Line 2",
        data: chart2Points,
        color: "#6264A7",
      },
    ];
    const chartData = {
      chartTitle: "Area chart multiple example",
      lineChartData: chartPoints,
    };
    return (
      <AreaChart
        data={chartData}
        legendsOverflowText={"Overflow Items"}        
        yAxisTickFormat={d3.format("~s")}
        legendProps={{
          allowFocusOnLegends: true,
        }}
      />
    );
  }

  footerContent(): JSX.Element | void {
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
