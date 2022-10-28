import { Button, ListIcon, MoreIcon, Text } from '@fluentui/react-northstar';

import { NewsWidgetModel } from '../../models/newsModel';
import { Widget } from '../lib/Widget';
import { ArrowRight24Filled } from "@fluentui/react-icons";
import { headerContentStyle, headerTextStyle } from '../lib/Widget.styles';

export default class NewsWidget extends Widget<NewsWidgetModel> {
  protected headerContent(): JSX.Element | void {
    return (
      <div style={headerContentStyle()}>
        <ListIcon size="large" />
        <Text style={headerTextStyle()} content="Your News" />
        <Button icon={<MoreIcon size="large" />} iconOnly text title="more" />
      </div>
    );
  }

  protected bodyContent(): JSX.Element | void {
    return <div>Hello World!</div>;
  }

  protected footerContent(): JSX.Element | void {
    return (
      <Button
        primary
        text
        icon={<ArrowRight24Filled />}
        iconPosition="after"
        content="View details"
        size="small"
        style={{ width: "fit-content" }}
        onClick={() => {}} // navigate to detailed page
      />
    );
  }
}
