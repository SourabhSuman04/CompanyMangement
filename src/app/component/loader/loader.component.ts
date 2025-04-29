import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  isLoading: false;

  constructor(private loader: LoaderService) {
    this.loader.isLoading.subscribe((res: any) => {
      this.isLoading = res;
    })
  }
}
