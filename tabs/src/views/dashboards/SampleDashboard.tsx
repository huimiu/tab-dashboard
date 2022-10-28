import { Dashboard } from '../lib/Dashboard';
import { oneColumn } from '../lib/Dashboard.styles';
import ChartWidget from '../widgets/ChartWidget';
import { ListWidget } from '../widgets/ListWidget';

export default class SampleDashboard extends Dashboard {

  protected rowHeights(): string | undefined {
    return "1fr";
  }

  protected columnWidths(): string | undefined {
    return "4fr 6fr";
  }

  protected dashboardLayout(): void | JSX.Element {
    return (
      <>
        <ListWidget />
        <div style={oneColumn("1fr min-content")}>
          <ChartWidget />
          <ListWidget />
        </div>
      </>
    );
  }
}
