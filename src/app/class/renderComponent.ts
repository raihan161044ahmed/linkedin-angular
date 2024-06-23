import { Type, ViewContainerRef } from '@angular/core';

import { CardComponent } from '../components/card/card.component';
import { Configurations } from '../interfaces/configurations.interface';
import { DropDownComponent } from '../components/drop-down/drop-down.component';
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { TableComponent } from '../components/table/table.component';
import { PaginationComponent } from '../components/pagination/pagination.component';

export class RenderComponents {
  viewContainer!: ViewContainerRef;

  constructor(viewContainer: ViewContainerRef) {
    this.viewContainer = viewContainer;
  }

  public renderComponents(componentsToRender: Configurations[]) {
    componentsToRender.forEach((comp) => {
      let componentName: Type<any>;
      switch (comp.componentName) {
        case 'card':
          componentName = CardComponent;
          break;
        case 'dropDown':
          componentName = DropDownComponent;
          break;
        case 'searchBox':
          componentName = SearchBoxComponent;
          break;
        case 'pagination':
          componentName = PaginationComponent;
          break;
        case 'table':
          componentName = TableComponent;
          break;
        default:
          componentName = TableComponent;
      }
      this.viewContainer.createComponent(componentName);
    });
  }
}
