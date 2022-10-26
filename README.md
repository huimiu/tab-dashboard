# Introduction

This is a Teams tab dashboard app that uses the [Fluent UI Northstar](https://fluentsite.z22.web.core.windows.net/0.64.0/) and the [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/use-the-api) to display a user's profile information and recent Teams activity.

![Default theme](images/dashboard.png)

This app also supported teams different themes, including dark theme and high contrast theme.

|           Dark theme           |     High contrast theme      |
| :----------------------------: | :--------------------------: |
| ![](images/dashboard-dark.png) | ![](images/dashboard-hc.png) |

# Prerequisites

- [NodeJS](https://nodejs.org/en/), fully tested on NodeJS 14, 16
- A Microsoft 365 account. If you do not have Microsoft 365 account, apply one from [Microsoft 365 developer program](https://developer.microsoft.com/en-us/microsoft-365/dev-program)
- [Teams Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) or [TeamsFx CLI](https://aka.ms/teamsfx-cli)

# Getting Started

Run your app with local debugging by pressing `F5` in VSCode. Select `Debug (Edge)` or `Debug (Chrome)`.

**Congratulations**! You are running an application that can now show a dashboard in Teams.

# Understanding the code

This section walks through the generated code. The project folder contains the following:

| Folder      | Contents                                                                          |
| ----------- | --------------------------------------------------------------------------------- |
| `.fx`       | Project level settings, configurations, and environment information               |
| `.vscode`   | VSCode files for local debug                                                      |
| `tabs`      | The source code for the dashboard tab Teams application                           |
| `templates` | Templates for the Teams application manifest and for provisioning Azure resources |

The core dashboard implementation is in `tabs` folder.

The following files provide the business logic for the dashboard tab. These files can be updated to fit your business logic requirements. The default implementation provides a starting point to help you get started.

| File                                       | Contents                                                                                                       |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `src/views/lib/Dashboard.styles.ts`        | The dashbaord style file                                                                                       |
| `src/views/lib/Dashboard.tsx`              | A Dashboard implementation base class, you can inherit this class to customize and create your own dashboards  |
| `src/views/dashboards/SampleDashboard.tsx` | A sample dashboard layout implementation                                                                       |
| `src/views/lib/Widget.tsx`                 | An abstract class that defines the widget, you can inherit this class to customize and create your own widgets |
| `src/views/widgets/SampleWidget.tsx`       | A sample widget implementation                                                                                 |
| `src/views/widgets/ListWidget.tsx`         | A List widget implementation                                                                                   |
| `src/models/sampleWidgetModel.tsx`         | Data model for the sample widget                                                                               |
| `src/services/sampleRequest.tsx`           | A sample data retrive implementation                                                                           |

The following files are project-related files. You generally will not need to customize these files.

| File                               | Contents                                         |
| ---------------------------------- | ------------------------------------------------ |
| `src/index.tsx`                    | Application entry point                          |
| `src/App.tsx`                      | Application route                                |
| `src/internal/addNewScopes.ts`     | Implementation of new scopes add                 |
| `src/internal/context.ts`          | TeamsFx Context                                  |
| `src/internal/login.ts`            | Implementation of login                          |
| `src/internal/singletonContext.ts` | Implementation of the TeamsFx instance singleton |

# How to add a new dashboard

You can use the following steps to add a new dashboard layout:

1. [Step 1: Create a dashboard class](#step-1-define-the-widget-model)
2. [Step 2: Override methods to customize dashboard layout](#step-2-override-methods-to-customize-dashboard-layout)
3. [Step 3: Add a route for the new dashboard](#step-3-add-a-route-for-the-new-dashboard)
4. [Step 4: Modify manifest to add a new dashboard tab](#step-4-modify-manifest-to-add-a-new-dashboard-tab)

## Step 1: Create a dashboard class

Create a file with the extension `.tsx` for your dashboard in the `tabs/src/views/dashboards` directory. For example, `YourDashboard.tsx`. Then, create a class that extends the `Dashboard` class.

```tsx
export default class YourDashboard extends Dashboard {}
```

## Step 2: Override methods to customize dashboard layout

Dashboard class provides some methods that you can override to customize the dashboard layout. The following table lists the methods that you can override.

| Methods             | Function                                                                          |
| ------------------- | --------------------------------------------------------------------------------- |
| `rowHeights()`      | Customize the height of each row of the dashboard                                 |
| `columnWidths()`    | Customize how many columns the dashboard has at most and the width of each column |
| `dashboardLayout()` | Define widgets layout                                                             |

Here is an example to customize the dashboard layout.

```tsx
export default class YourDashboard extends Dashboard {
  protected rowHeights(): string | undefined {
    return "500px";
  }

  protected columnWidths(): string | undefined {
    return "4fr 6fr";
  }

  protected dashboardLayout(): void | JSX.Element {
    return (
      <>
        <SampleWidget />
        <div style={oneColumn("6fr 4fr")}>
          <SampleWidget />
          <SampleWidget />
        </div>
      </>
    );
  }
}
```

> Note: All methods are optional. If you do not override any method, the default dashboard layout will be used.

## Step 3: Add a route for the new dashboard

Open the `tabs/src/App.tsx` file, and add a route for the new dashboard. Here is an example:

```tsx
import YourDashboard from "./views/dashboards/YourDashboard";

export default function App() {
  ...
  <Route exact path="/yourdashboard" component={YourDashboard} />
  ...
}
```

## Step 4: Modify manifest to add a new dashboard tab

Open the `templates/appPackage/manifest.template.json` file, and add a new dashboard tab under the `staticTabs`. Here is an example:

```json
{
  "name": "Your Dashboard",
  "entityId": "yourdashboard",
  "contentUrl": "{{state.fx-resource-frontend-hosting.endpoint}}{{state.fx-resource-frontend-hosting.indexPath}}/yourdashboard",
  "websiteUrl": "{{state.fx-resource-frontend-hosting.endpoint}}{{state.fx-resource-frontend-hosting.indexPath}}/yourdashboard",
  "scopes": ["personal"]
}
```

# How to add a new widget

You can use the following steps to add a new widget to the dashboard:

1. [Step 1: Define the widget model](#step-1-define-the-widget-model)
2. [Step 2: Create a widget file](#step-2-create-a-widget-file)
3. [Step 3: Add the widget to the dashboard](#step-3-add-the-widget-to-the-dashboard)

## Step 1: Define the widget model

Define a data model based on the business scenario, and put it in `tabs/src/models`.The widget model defined according to the data you want to display in the widget. Here's a sample data model:

```typescript
export interface ModelItem {
  id: string;
  name: string;
}

export interface YourWidgetModel {
  items: ModelItem[];
}
```

## Step 2: Create a widget file

Create a widget file in `tabs/src/views/widgets`. Extend the `Widget` class and implement all the abstract methods. Here's a sample widget implementation:

```tsx
export class YourWidget extends Widget<YourWidgetModel> {
  getData(): YourWidgetModel | void {
    return getYourWidgetData();
  }

  headerContent(): JSX.Element | void {
    return <Text weight="semibold" size="large" content="Your Widget" />;
  }

  bodyContent(): JSX.Element | void {
    return <div>Hello World!</div>;
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
```

> Please note:
>
> - The `getData()` method is used to get the data for the widget. You can implement it to get data from the backend service or from the Microsoft Graph API.
>
> - The `headerContent()`, `bodyContent()`, and `footerContent()` methods are used to define the content of the widget header, body, and footer. You can customize the content based on your business scenario.
>
> - All the methods are optional. You can implement the methods you need. If you don't implement a method, the default implementation will be used.

## Step 3: Add the widget to the dashboard

To add the widget to the dashboard.

1. Go to `tabs/src/views/dashboards/YourDashboard.tsx`
2. update your `dashboardLayout()` method to add the widget to the dashboard:

```tsx
protected dashboardLayout(): void | JSX.Element {
  return (
    <>
      <SampleWidget />
      <YourWidget />
    </>
  );
}
```

> Note: If you want put your widget in a column, you can use the `oneColumn()` method to define the column layout. Here is an example:

```tsx
protected dashboardLayout(): void | JSX.Element {
  return (
    <>
      <SampleWidget />
      <div style={oneColumn("6fr 4fr")}>
        <SampleWidget />
        <YourWidget />
      </div>
    </>
  );
}
```

# How to add a new Graph API call

There are two types of Graph APIs, one will be called from the front-end(most of APIs, use delegated permissions), the other will be called from the back-end(sendActivityNotification, e.g., use application permissions). You can refer to [this tutorial](https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-beta) to check permission types of the Graph APIs you want to call.

## From the front-end(use delegated permissions)

If you want to call a Graph API from the front-end tab, you can refer to the following steps.

1. [Step 1: Consent delegated permissions first](#step-1-consent-delegated-permissions-first)
2. [Step 2: Create a graph client by adding the scope related to the Graph API you want to call](#step-2-create-a-graph-client-by-adding-the-scope-related-to-the-graph-api-you-want-to-call)
3. [Step 3: Call the Graph API, and parse the response into a certain model, which will be used by front-end](#step-3-call-the-graph-api-and-parse-the-response-into-a-certain-model-which-will-be-used-by-front-end)

### Step 1: Consent delegated permissions first

You can call [`addNewScope(scopes: string[])`](/tabs/src/internal/addNewScopes.ts) to consent the scopes of permissions you want to add. And the consented status will be preserved in a global context [`FxContext`](/tabs/src/internal/singletonContext.ts).

You can refer to [the Graph API V1.0](https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0) to get the `scope name of the permission` related to the Graph API you want to call.

### Step 2: Create a graph client by adding the scope related to the Graph API you want to call

You can refer to the following code snippet:

```ts
let teamsfx: TeamsFx;
teamsfx = FxContext.getInstance().getTeamsFx();
const graphClient: Client = createMicrosoftGraphClient(teamsfx, scope);
```

### Step 3: Call the Graph API, and parse the response into a certain model, which will be used by front-end

You can refer to the following code snippet:

```ts
try {
  const graphApiResult = await graphClient.api("<GRAPH_API_PATH>").get();
  // Parse the graphApiResult into a Model you defined, used by the front-end.
} catch (e) {}
```

## From the back-end(use application permissions)

If you want to call a Graph API from the back-end, you can refer to the following steps. In this tutorial, we use `sendActivityNotification` API for example.

1. [Step 1: Consent application permissions first](#step-1-consent-application-permissions-first)
2. [Step 2: Add an Azure Function](#step-2-add-an-azure-function)
3. [Step 3: Get the `installation id` of your Dashboard app](#step-3-get-the-installation-id-of-your-dashboard-app)
4. [Step 4: Add your logic in Azure Function](#step-4-add-your-logic-in-azure-function)
5. [Step 5: Edit manifest file](#step-5-edit-manifest-file)
6. [Step 6: Call the Azure Function from the front-end](#step-5-call-the-azure-function-from-the-front-end)

### Step 1: Consent application permissions first

Go to [Azure portal](https://portal.azure.com/) > Click `Azure Active Directory` > Click `App registrations` in the side bar > Click your Dashboard app > Click `API permissions` in the side bar > Click `+Add a permission` > Choose `Microsoft Graph` > Choose `Application permissions` > Find the permissions you need > Click `Add permissions` button in the bottom > Click `✔Grant admin consent for XXX` and then click `Yes` button to finish the admin consent

### Step 2: Add an Azure Function

In the VS Code side bar, click `Add features` in `Teams Toolkit` > Choose `Azure functions` > Enter the function name

   <img src="images\add_azFunction.png" style="zoom: 42%">

### Step 3: Get the `installation id` of your Dashboard app

Go [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer), and use the following api path to get a response.

```
https://graph.microsoft.com/v1.0/users/{user-id | user-principal-name}/teamwork/installedApps?$expand=teamsAppDefinition
```

In the response, you should find the information of your Dashboard app, and then record the `id` of it as `installationId`, which will be used in step 4.

   <img src="images\graph_explorer.png" style="zoom: 40%" />

### Step 4: Add your logic in Azure Function

In the `index.ts` under the folder named in step 2, you can add the following code snippet to call `sendActivityNotification`

```ts
try {
  // do sth here, to call activity notification api
  //
  const graphClient_userId: Client = await createMicrosoftGraphClient(teamsfx, [
    "User.Read",
  ]);
  const userIdRes = await graphClient_userId.api("/me").get();
  const userId = userIdRes["id"];
  // get installationId
  const installationId =
    "ZmYxMGY2MjgtYjJjMC00MzRmLTgzZmItNmY3MGZmZWEzNmFkIyMyM2NhNWVlMy1iYWVlLTRiMjItYTA0OC03YjkzZjk0MDRkMTE=";
  let postbody = {
    topic: {
      source: "entityUrl",
      value:
        "https://graph.microsoft.com/v1.0/users/" +
        userId +
        "/teamwork/installedApps/" +
        installationId,
    },
    activityType: "taskCreated",
    previewText: {
      content: "New Task Created",
    },
    templateParameters: [
      {
        name: "taskId",
        value: "12322",
      },
    ],
  };

  let teamsfx_app: TeamsFx;
  teamsfx_app = new TeamsFx(IdentityType.App);
  const graphClient: Client = createMicrosoftGraphClient(teamsfx_app, [
    ".default",
  ]);
  await graphClient
    .api("users/" + userId + "/teamwork/sendActivityNotification")
    .post(postbody);
} catch (e) {
  console.log(e);
}
```

### Step 5: Edit manifest file

In the [templates\appPackage\manifest.template.json](templates\appPackage\manifest.template.json), you should add the following properties, which are align with properties in `postbody` in Step 4.

```json
"activities": {
  "activityTypes": [
    {
      "type": "taskCreated",
      "description": "Task Created",
      "templateText": "{actor} created task {taskId}"
    }
  ]
}
```

### Step 6: Call the Azure Function from the front-end

Call the Azure Function from the front-end. You can refer to the following code snippet to call the Azure Function.

```ts
const functionName = process.env.REACT_APP_FUNC_NAME || "myFunc";
async function callFunction(teamsfx?: TeamsFx) {
  if (!teamsfx) {
    throw new Error("TeamsFx SDK is not initialized.");
  }
  try {
    const credential = teamsfx.getCredential();
    const apiBaseUrl = teamsfx.getConfig("apiEndpoint") + "/api/";
    // createApiClient(...) creates an Axios instance which uses BearerTokenAuthProvider to inject token to request header
    const apiClient = createApiClient(
      apiBaseUrl,
      new BearerTokenAuthProvider(
        async () => (await credential.getToken(""))!.token
      )
    );
    const response = await apiClient.get(functionName);
    return response.data;
  } catch (e) {}
}
```

Refer to [this sample](https://github.com/OfficeDev/TeamsFx-Samples/blob/dev/hello-world-tab-with-backend/tabs/src/components/sample/AzureFunctions.tsx) for some helps. And you can read [this doc](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference?tabs=blob) for more details.

# Additional resources

- [Fluent UI Northstar](https://fluentsite.z22.web.core.windows.net/0.64.0/)
- [Fluent UI React Charting Example](https://fluentuipr.z22.web.core.windows.net/heads/master/react-charting/demo/index.html#/)
- [Flex Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [Button component definition](https://fluentsite.z22.web.core.windows.net/0.64.0/components/button/definition).
- [Dashboard sample](https://github.com/huimiu/DashboardDemo)
