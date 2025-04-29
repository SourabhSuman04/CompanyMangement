import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';

import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
@Component({
  selector: 'app-master-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, CommonModule, LoaderComponent],
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.css'
})
export class MasterLayoutComponent {
  loading = false;

  constructor() {
    
  }
}
