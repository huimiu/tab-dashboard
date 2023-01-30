import { Dashboard } from "../lib/Dashboard";
import { oneColumn } from "../lib/Dashboard.styles";
import { Calendar } from "../widgets/Calendar";
import ChartWidget from "../widgets/ChartWidget";
import { ListWidget } from "../widgets/ListWidget";

export default class SampleDashboard extends Dashboard {

  protected columnWidths(): string | undefined {
    return "6fr 4fr";
  }

  protected dashboardLayout(): undefined | JSX.Element {
    return (
      <>
        <ListWidget />
        <div style={oneColumn()}>
          <Calendar />
          <ChartWidget />
        </div>
      </>
    );
  }
}
