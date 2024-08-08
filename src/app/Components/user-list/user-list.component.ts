import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

total_pages: number=0;
Pages:number[]=[];
term:string="";  
users:User[]=[]; 

  constructor(private _user:UserService) { 

  }

  ngOnInit(): void {
    this.getUsers(1);
  
  }


  
getUsers(pageCount:number){
this._user.getUsers(pageCount).subscribe((x)=>{

console.log(x, x.total_pages);
this.users=x.data;
this.total_pages=x.total_pages;
this.Pages=this.createArray(this.total_pages);

})
}

createArray(length:number) {
  let array = [];
  for (let i = 1; i <= length; i++) {
      array.push(i);
  }
  return array;
}

getUserId(id:number){
console.log("this is search data ="+id);

}
}
