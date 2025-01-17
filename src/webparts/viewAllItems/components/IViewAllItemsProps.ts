import { SPHttpClient } from '@microsoft/sp-http';
import { DisplayMode } from '@microsoft/sp-core-library';
import { IItemProp } from '../CustomPropertyPane/PropertyPaneMultiSelect';

export interface IViewAllItemsProps {
  spHttpClient: SPHttpClient;
  siteUrl: string;
  listName: string;
  selectedColumns: IItemProp[];
  needsConfiguration: boolean;
  configureWebPart: () => void;
  displayMode: DisplayMode;
  pageSize: number;
}
