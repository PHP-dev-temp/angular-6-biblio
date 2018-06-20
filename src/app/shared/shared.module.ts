import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { FilterNamePipe } from './filter-name.pipe';

@NgModule({
  declarations: [
    DropdownDirective,
    FilterNamePipe
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    FilterNamePipe
  ]
})
export class SharedModule {}
