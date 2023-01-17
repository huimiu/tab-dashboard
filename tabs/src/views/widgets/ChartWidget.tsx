import * as d3 from "d3-format";

import { AreaChart, IChartProps } from "@fluentui/react-charting";
import { Button, Text, ToggleButton } from "@fluentui/react-components";
import {
  ArrowRight16Filled,
  DataPie24Regular,
  MoreHorizontal32Regular,
} from "@fluentui/react-icons";

import {
  chart1Points_30D,
  chart1Points_60D,
  chart1Points_7D,
  chart2Points_30D,
  chart2Points_60D,
  chart2Points_7D,
} from "../../services/chartServices";
import { Widget } from "../lib/Widget";
import { headerContentStyle, headerTextStyle } from "../lib/Widget.styles";
import {
  areaChartStyle,
  footerButtonStyle,
  pieIconStyle,
  timeSpanStyle,
} from "../styles/ChartWidget.style";

enum DayRange {
  Seven,
  Thirty,
  Sixty,
}

interface IChartWidgetState {
  dayRange: DayRange;
  chartProps: IChartProps;
}

export default class ChartWidget extends Widget<IChartWidgetState> {
  async getData(): Promise<IChartWidgetState> {
    const chartPoints = [
      {
        legend: "Line 1",
        data: chart1Points_7D,
        color: "#6264A7",
      },
      {
        legend: "Line 2",
        data: chart2Points_7D,
        color: "#D9DBDB",
      },
    ];
    const chartData = {
      chartTitle: "Area chart multiple example",
      lineChartData: chartPoints,
    };
    return { dayRange: DayRange.Seven, chartProps: chartData };
  }

  headerContent(): JSX.Element | undefined {
    return (
      <div style={headerContentStyle()}>
        <DataPie24Regular style={pieIconStyle()} />
        <Text style={headerTextStyle()}>Your chart</Text>
        <Button icon={<MoreHorizontal32Regular />} appearance="transparent" />
      </div>
    );
  }

  bodyContent(): JSX.Element | undefined {
    return (
      <>
        <div>
          <ToggleButton
            appearance="transparent"
            checked={this.state.dayRange === DayRange.Seven}
            style={timeSpanStyle()}
            onClick={() =>
              this.setState({
                chartProps: this.retriveChartsData(DayRange.Seven),
                dayRange: DayRange.Seven,
              })
            }
          >
            7 Days
          </ToggleButton>
          <ToggleButton
            appearance="transparent"
            checked={this.state.dayRange === DayRange.Thirty}
            style={timeSpanStyle()}
            onClick={() =>
              this.setState({
                chartProps: this.retriveChartsData(DayRange.Thirty),
                dayRange: DayRange.Thirty,
              })
            }
          >
            30 Days
          </ToggleButton>
          <ToggleButton
            appearance="transparent"
            checked={this.state.dayRange === DayRange.Sixty}
            style={timeSpanStyle()}
            onClick={() =>
              this.setState({
                chartProps: this.retriveChartsData(DayRange.Sixty),
                dayRange: DayRange.Sixty,
              })
            }
          >
            60 Days
          </ToggleButton>
        </div>

        <div style={areaChartStyle()}>
          {this.state.chartProps && (
            <AreaChart
              data={this.state.chartProps}
              legendsOverflowText={"Overflow Items"}
              yAxisTickFormat={d3.format(".1s")}
              wrapXAxisLables={false}
              legendProps={{
                allowFocusOnLegends: true,
              }}
            />
          )}
        </div>
      </>
    );
  }

  footerContent(): JSX.Element | undefined {
    return (
      <Button
        appearance="transparent"
        icon={<ArrowRight16Filled />}
        iconPosition="after"
        size="small"
        style={footerButtonStyle()}
        onClick={() => {}} // navigate to detailed page
      >
        View details
      </Button>
    );
  }

  private retriveChartsData(r: DayRange): IChartProps {
    const chartPoints = [
      {
        legend: "Line 1",
        data:
          r === DayRange.Seven
            ? chart1Points_7D
            : r === DayRange.Thirty
            ? chart1Points_30D
            : chart1Points_60D,
        color: "#6264A7",
      },
      {
        legend: "Line 2",
        data:
          r === DayRange.Seven
            ? chart2Points_7D
            : r === DayRange.Thirty
            ? chart2Points_30D
            : chart2Points_60D,
        color: "#D9DBDB",
      },
    ];
    const chartData = {
      chartTitle: "Area chart multiple example",
      lineChartData: chartPoints,
    };
    return chartData;
  }
}
