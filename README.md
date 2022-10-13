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

| File                                 | Contents                             |
| ------------------------------------ | ------------------------------------ |
| `src/views/Dashboard.css`            | The dashbaord style file             |
| `src/views/Dashboard.tsx`            | The implementation of dashboard      |
| `src/views/widgets/sampleWidget.tsx` | A sample widget implementation       |
| `src/models/sampleWidgetModel.tsx`   | Data model for the sample widget     |
| `src/services/sampleRequest.tsx`     | A sample data retrive implementation |

The following files are project-related files. You generally will not need to customize these files.

| File                                  | Contents                |
| ------------------------------------- | ----------------------- |
| `src/index.tsx`                       | Application entry point |
| `src/App.tsx`                         | Application route       |
| `src/middlewares/addNewScopes.ts`     |                         |
| `src/middlewares/context.ts`          |                         |
| `src/middlewares/login.ts`            |                         |
| `src/middlewares/singletonContext.ts` |                         |

# How to add a new widget

You can use the following steps to add a new widget to the dashboard:

1. [Step 1: Create a widget file](#step-1-create-a-widget-file)
2. [Step 2: Define the widget model](#step-2-define-the-widget-model)
3. [Step 3: Populate the widget model with data](#step-3-populate-the-widget-model-with-data)
4. [Step 4: Customize the widget view](#step-4-customize-the-widget-view)
5. [Step 5: Add the widget to the dashboard](#step-5-add-the-widget-to-the-dashboard)

## Step 1: Create a widget file

Copy a new JSX file from the `List.tsx` file, and modify the file name and the class name.

## Step 2: Define the widget model

Define a data model based on the business scenario, and replace the `ListModel` in the your JSX file with the new data model just created.

## Step 3: Populate the widget model with data

Modify the `componentDidMount()` method in the widget JSX file to get data the widget needs. For example, you can call Graph API or something else.

## Step 4: Customize the widget view

Modify the `render()` method in the widget JSX file to render the widget.

- Modify the `Card.Header` component to customize your widget header. For example, you can modify the `content` property to update the title of your widget. See [Card Header Props](https://fluentsite.z22.web.core.windows.net/0.64.0/components/card/props#card-header) and [Text Props](https://fluentsite.z22.web.core.windows.net/0.64.0/components/text/props) for more details.

- Modify the `Card.Body` component to customize your widget body. See [Card Body Props](https://fluentsite.z22.web.core.windows.net/0.64.0/components/card/props#card-body) for more details. For more information about `Flex` layout, please refer to [Flex](https://fluentsite.z22.web.core.windows.net/0.64.0/components/flex/definition).

- Modify the `Card.Footer` component to customize your widget footer. For example, you can align the footer to the right side by setting the `hAlign` property to `end`. For more information about `Button` style customization, please refer to [Button component definition](https://fluentsite.z22.web.core.windows.net/0.64.0/components/button/definition).
  ```tsx
  <Card.Footer fitted>
    <Flex hAlign="end">
      <Button
         text
         primary
         icon={<ArrowRightIcon" size="small" />}
         content="View all"
         iconPosition="after"
         size="small"
         style={{ width: "fit-content"}}
         onClick={() => {}}
     />
    </Flex>
  </Card.Footer>
  ```

## Step 5: Add the widget to the dashboard

Add the widget to the dashboard.

# How to add a new Graph API call

1. Consent scope first.

   You can call [`addNewScope(scopes: string[])`](/tabs/src/service/AddNewScopes.ts) to consent the scopes of permissions you want to add. And the consented status will be preserved in a global context [`FxContext`](/tabs/src/components/singletonContext.ts).

   You can refer to [the Graph API V1.0](https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0) to get the `scope name of the permission` related to the graph api you want to call.

2. Create a graph client by adding the scope related to the Graph API you want to call.

   You can refer to the following code snippet:

   ```ts
   let teamsfx: TeamsFx;
   teamsfx = FxContext.getInstance().getTeamsFx();
   const graphClient: Client = createMicrosoftGraphClient(teamsfx, scope);
   ```

3. Call the Graph API, and parse the response into a certain model, which will be used by front-end.

   You can refer to the following code snippet:

   ```ts
   try {
     const graphApiResult = await graphClient.api("<GRAPH_API_PATH>").get();
     // Parse the graphApiResult into a Model you defined, used by the front-end.
   } catch (e) {}
   ```

# Additional resources

- [Fluent UI Northstar](https://fluentsite.z22.web.core.windows.net/0.64.0/)
- [Fluent UI React Charting Example](https://fluentuipr.z22.web.core.windows.net/heads/master/react-charting/demo/index.html#/)
- [Flex Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [Dashboard sample](https://github.com/huimiu/DashboardDemo)
