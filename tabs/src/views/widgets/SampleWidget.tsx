import { Widget } from "../Widget";
import { Text } from "@fluentui/react-northstar";

export default class SampleWidget extends Widget<void> {
  headerContent(): JSX.Element | void {
    return <Text weight="semibold" size="large" content="Sample Widget" />;
  }

  bodyContent(): JSX.Element | void {
    return <div>Hello World!</div>;
  }
}