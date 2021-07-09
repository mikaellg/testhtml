import { MenuItem } from './MenuItem';

export class SortedMenuItem extends MenuItem {
    constructor(parentItem: MenuItem) {
        super();
        this.Id = parentItem.Id;
        this.Name = parentItem.Name;
        this.Icon = parentItem.Icon;
        this.Controller = parentItem.Controller;
        this.ParentId = parentItem.ParentId;
        this.Area = parentItem.Area;
    }

    Children: MenuItem[];
}
