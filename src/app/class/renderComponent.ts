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
      let compName: Type<any>;
      switch (comp.componentName) {
        case 'card':
          compName = CardComponent;
          break;
        case 'dropDown':
          compName = DropDownComponent;
          break;
        case 'searchBox':
          compName = SearchBoxComponent;
          break;
        case 'pagination':
          compName = PaginationComponent;
          break;
        case 'table':
          compName = TableComponent;
          break;
        default:
          compName = TableComponent;
      }
      this.viewContainer.createComponent(compName);
    });
  }
}
