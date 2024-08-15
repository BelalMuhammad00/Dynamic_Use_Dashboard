import { jsDocComment } from '@angular/compiler';
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
userDetails:User={} as User;

  constructor(private _user:UserService) { 

  }

  ngOnInit(): void {
    if(!sessionStorage.getItem("UsersData")){
      this.getUsers(1);
      
    }else{
      this.users = JSON.parse(sessionStorage.getItem("UsersData")!).data;
      this.total_pages=JSON.parse(sessionStorage.getItem("UsersData")!).total_pages;
this.Pages=this.createArray(this.total_pages);

    }

  }


  
getUsers(pageCount:number){
this._user.getUsers(pageCount).subscribe((x)=>{
  sessionStorage.setItem("UsersData",JSON.stringify(x));
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

getUserbyId(id:any){
this._user.getUserDetails(id).subscribe((res)=>{
  console.log(res);
this.userDetails=res.data
})
}

SearchVal(event:any){
console.log("this the event ===",event.target.value);
this.term=event.target.value;
this.getUserbyId(this.term)
}
}
