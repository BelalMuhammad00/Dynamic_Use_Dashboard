import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  
  constructor() { }

  ngOnInit(): void {
  }
@Output() SearchValue:EventEmitter<string> =new EventEmitter<string>();

onSearch(event:any){
this.SearchValue.emit(event);
}

}
