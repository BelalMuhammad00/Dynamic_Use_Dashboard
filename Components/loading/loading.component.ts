import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoading: any;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.isLoading.subscribe(X=>{
      this.isLoading = X
    })
  }

}
