import { Providers, ProviderState, Todo } from "@microsoft/mgt-react";
import { TeamsFxProvider } from "@microsoft/mgt-teamsfx-provider";

import { loginAction } from "../../internal/login";
import { TeamsUserCredentialContext } from "../../internal/singletonContext";
import { Widget } from "../lib/Widget";

interface IGraphWidgetState {
  needLogin: boolean;
}

export class GraphWiget extends Widget<IGraphWidgetState> {
  protected bodyContent(): JSX.Element | undefined {
    return <div>{this.state.needLogin === false && <Todo />}</div>;
  }

  async componentDidMount() {
    super.componentDidMount();

    // Initialize TeamsFx provider
    const provider = new TeamsFxProvider(TeamsUserCredentialContext.getInstance().getCredential(), [
      "Tasks.ReadWrite",
    ]);
    Providers.globalProvider = provider;

    // Check if user is signed in
    if (await this.checkIsConsentNeeded()) {
      await loginAction(["Tasks.ReadWrite"]);
    }

    // Update signed in state
    Providers.globalProvider.setState(ProviderState.SignedIn);
    this.setState({ needLogin: false });
  }

  /**
   * Check if user needs to consent
   * @returns true if user needs to consent
   */
  async checkIsConsentNeeded() {
    let needConsent = false;
    try {
      await TeamsUserCredentialContext.getInstance().getCredential().getToken(["Tasks.ReadWrite"]);
    } catch (error) {
      needConsent = true;
    }
    return needConsent;
  }
}
