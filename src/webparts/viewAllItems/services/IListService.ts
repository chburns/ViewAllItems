import { IList } from './IList';
import { IListColumn } from './IListColumn'
export interface IListService {
  getLists: () => Promise<IList[]>;
  getColumns: (listName: any) => Promise<IListColumn[]>;
}