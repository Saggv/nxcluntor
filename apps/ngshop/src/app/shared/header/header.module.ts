import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';

import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';

const primengModules = [InputTextModule];

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, FormsModule, ...primengModules, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
