import { Widget } from "../lib/Widget";

interface IRefreshWidgetState {
  data: string;
}

export class RefreshWidget extends Widget<IRefreshWidgetState> {
  bodyContent(): JSX.Element | undefined {
    return <>{this.state.data}</>;
  }

  async componentDidMount() {
    setInterval(() => {
      this.setState({ data: new Date().toLocaleTimeString() });
    }, 1000);
  }
}
