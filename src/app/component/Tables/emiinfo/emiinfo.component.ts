import { Component, OnInit } from '@angular/core';
import { EmiInfoService } from '../../../services/emi-info.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../loader/loader.component';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-emiinfo',
  imports: [CommonModule],
  templateUrl: './emiinfo.component.html',
  styleUrl: './emiinfo.component.css'
})
export class EmiinfoComponent implements OnInit {
  emidata: any
  constructor(private emi: EmiInfoService,private loader:LoaderService) {
  }
  ngOnInit(): void {
this.getEmiDetails();
  }

  getEmiDetails() {
    this.loader.startLoader()
    this.emi.getEmiDetails().subscribe((res: any) => {
      this.loader.stopLoader();
      this.emidata = res.data;
    })
  }
  
  deleteEmi(id:number)
  {
    this.emi.DeleteEmi(id).subscribe((res:any)=>{
      this.emidata=res;
    })
  }
}
