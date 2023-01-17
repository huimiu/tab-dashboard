import { Dashboard } from "../lib/Dashboard";
import { GraphWiget } from "../widgets/GraphWidget";

export default class SampleDashboard extends Dashboard {
  protected rowHeights(): string | undefined {
    return "1fr";
  }

  protected columnWidths(): string | undefined {
    return "4fr 6fr";
  }

  protected dashboardLayout(): undefined | JSX.Element {
    return (
      <>        
        <GraphWiget />
      </>
    );
  }
}
