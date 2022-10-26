import { Dashboard } from '../lib/Dashboard';
import { oneColumn } from '../lib/Dashboard.styles';
import { ListWidget } from '../widgets/ListWidget';
import SampleWidget from '../widgets/SampleWidget';

export default class SampleDashboard extends Dashboard {
  
  protected rowHeights(): string | undefined {
    return "500px";
  }

  protected columnWidths(): string | undefined {
    return "4fr 6fr";
  }

  protected dashboardLayout(): void | JSX.Element {
    return (
      <>
        <ListWidget />
        <div style={oneColumn("6fr 4fr")}>
          <SampleWidget />
          <SampleWidget />
        </div>
      </>
    );
  }
}
