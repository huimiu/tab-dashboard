import * as d3 from "d3-format";
import * as React from "react";

import { AreaChart, IChartProps } from "@fluentui/react-charting";
import { ArrowRightIcon } from "@fluentui/react-icons-northstar";
import { Button, Card, Flex, Text } from "@fluentui/react-northstar";

interface IChartState {
  data?: IChartProps;
}

const chart1Points = [
  {
    x: 20,
    y: 9,
  },
  {
    x: 25,
    y: 14,
  },
  {
    x: 30,
    y: 14,
  },
  {
    x: 35,
    y: 23,
  },
  {
    x: 40,
    y: 20,
  },
  {
    x: 45,
    y: 31,
  },
  {
    x: 50,
    y: 29,
  },
  {
    x: 55,
    y: 27,
  },
  {
    x: 60,
    y: 37,
  },
  {
    x: 65,
    y: 51,
  },
];

const chart2Points = [
  {
    x: 20,
    y: 21,
  },
  {
    x: 25,
    y: 25,
  },
  {
    x: 30,
    y: 10,
  },
  {
    x: 35,
    y: 10,
  },
  {
    x: 40,
    y: 14,
  },
  {
    x: 45,
    y: 18,
  },
  {
    x: 50,
    y: 9,
  },
  {
    x: 55,
    y: 23,
  },
  {
    x: 60,
    y: 7,
  },
  {
    x: 65,
    y: 55,
  },
];

const chartPoints = [
  {
    legend: "legend1",
    data: chart1Points,
    color: "#6264A7",
  },
  {
    legend: "legend2",
    data: chart2Points,
    color: "#D9DBDB",
  },
];

const chartData = {
  chartTitle: "Area chart example",
  lineChartData: chartPoints,
};

export class Chart extends React.Component<{}, IChartState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: undefined,
    };
  }

  async componentDidMount() {
    this.setState({ data: chartData });
  }

  public render(): JSX.Element {
    return (
      <Card fluid elevated styles={{ ":hover": "backgroud-color: #FFFFFF" }}>
        <Card.Header>
          <Text weight="semibold" size="large" content="Power BI" />
        </Card.Header>
        <Flex
          fill
          column
          gap="gap.small"
          vAlign="stretch"
          space="between"
          style={{ overflow: "hidden" }}
        >
          <Card.Body>
            <div>
              {this.state.data && (
                <AreaChart
                  data={this.state.data}
                  legendsOverflowText={"Overflow Items"}
                  yAxisTickFormat={d3.format("$,")}
                  legendProps={{
                    allowFocusOnLegends: true,
                  }}
                />
              )}
            </div>
          </Card.Body>
        </Flex>
        <Card.Footer fitted>
          <Button
            text
            primary
            icon={<ArrowRightIcon size="small" />}
            content="View all"
            iconPosition="after"
            size="small"
            style={{ width: "fit-content", marginLeft: "-8px" }}
            onClick={() => {}} // navigate to task page
          />
        </Card.Footer>
      </Card>
    );
  }
}
