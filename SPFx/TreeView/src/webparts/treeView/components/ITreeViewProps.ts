import { ITreeItem } from './ITreeItem';

export interface ITreeViewProps {
  /**
   * The items to render.
   */
  items: ITreeItem[];

  /**
   * Default collapsed behavior
   */
  defaultCollapsed: boolean;
  
  /**
   * Specify the item selection mode.
   * By default this is set to none.
   */
  selectionMode: SelectionMode;
}

export enum SelectionMode {
  None = 0,
  Single = 1,
  Multiple = 2
}
