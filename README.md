# Introduction

This is a Teams tab dashboard app that uses the [Fluent UI Northstar](https://fluentsite.z22.web.core.windows.net/0.64.0/) and the [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/use-the-api) to display a user's profile information and recent Teams activity.

# Getting Started

Run your app with local debugging by pressing `F5` in VSCode. Select `Debug (Edge)` or `Debug (Chrome)`.

**Congratulations**! You are running an application that can now show a dashboard in Teams.

> **Prerequisites**
>
> To run locally, you will need:
>
> - `Node.js` installed locally (recommended version: 14)
> - An [M365 account for development](https://docs.microsoft.com/microsoftteams/platform/toolkit/accounts)
>
> **Note**
>
> Your app can be installed into a team, or a group chat, or as personal app. See [Installation and Uninstallation](https://aka.ms/teamsfx-command-response#customize-installation).

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

| File                               | Contents                           |
| ---------------------------------- | ---------------------------------- |
| `src/index.ts`                     | Application entry point            |
| `src/components/sample/Widget.tsx` | A sample widget implementation     |
| `src/components/Dashboard.css`     | The dashbaord style file           |
| `src/components/Dashboard.tsx`     | The implementation of dashboard    |
| `src/model/widgetModel.ts`         | A model for the data in the widget |

# How to add a new widget

To make it easier for you to add a widget, we provide a sample widget implementation in `src/sample/Widget.tsx`. You can copy this file and rename it to add a new widget. Then you can update the `src/components/Dashboard.tsx` to add the new widget to the dashboard.

For details, please refer to the following steps.

1. Copy a new JSX file from the widget.tsx file, and modify the file name and the class name.

2. Define a data model based on the business scenario, and replace the `WidgetDataModel` in the your JSX file with the new data model just created.

3. Modify the `getData()` method in the widget JSX file to get data the widget needs. For example, you can call Graph API or something else.

4. Modify the `render()` method in the widget JSX file to render the widget.

   - Modify the `Card.Header` component to customize your widget header. For example, you can modify the `content` property to update the title of your widget. See [Card Header Props](https://fluentsite.z22.web.core.windows.net/0.64.0/components/card/props#card-header) [Text Props](https://fluentsite.z22.web.core.windows.net/0.64.0/components/text/props) for more details.

   - Modify the `Card.Body` component to customize your widget body. See [Card Body Props](https://fluentsite.z22.web.core.windows.net/0.64.0/components/card/props#card-body) for more details. For more information about `Flex` layout, please refer to [Flex](https://fluentsite.z22.web.core.windows.net/0.64.0/components/flex/definition).

   - Modify the `Card.Footer` component to customize your widget footer. For example, you can align the footer to the right side by setting the `hAlign` property to `end`.
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

5. Add the widget to the Dashboard.

   - If you want to add the newly created widget to the same line as the sample widget, you can refer to the following code snippet.

     ```html
     <Flex column padding="padding.medium" gap="gap.medium">
       <Flex fill gap="gap.small">
         <Flex styles={{ flex: "1" }}>
           <Widget />
         </Flex>
         <Flex styles={{ flex: "1" }}>
           <Widget2 />
         </Flex>
       </Flex>
     </Flex>
     ```

     `Widget` and `Widget2` are in the same line, they each occupy half width of the line. Forthermore, you can modify the `styles` property to change the width of the widget. For example, if you want to make `Widget` occupy 2/3 width of the line, you can modify the `styles` property to `styles={{ flex: "2" }}`.

   - If you want to add the newly created widget to a new line, you can refer to the following code snippet.

     ```html
     <Flex column padding="padding.medium" gap="gap.medium">
       <Flex fill gap="gap.small">
         <Flex styles={{ flex: "1" }}>
           <Widget />
         </Flex>
       </Flex>
       <Flex fill gap="gap.small">
         <Flex styles={{ flex: "1" }}>
           <Widget2 />
         </Flex>
       </Flex>
     </Flex>
     ```
