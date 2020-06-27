import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TimelineWebPartStrings';
import Timeline from './components/Timeline';
import { ITimelineProps } from './components/ITimelineProps';
import TimelineService from '../../services/TimelineService';

export interface ITimelineWebPartProps {
  description: string;
}

export default class TimelineWebPart extends BaseClientSideWebPart <ITimelineWebPartProps> {

  protected onInit(): Promise<void> {
    return super.onInit().then(() => {
      TimelineService.setup(this.context);
    });
  }

  public render(): void {
    const element: React.ReactElement<ITimelineProps> = React.createElement(
      Timeline,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
