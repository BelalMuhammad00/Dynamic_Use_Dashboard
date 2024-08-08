import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

UserId:number=0;
userDetails:User={} as User;

  constructor(private _user:UserService , private _activateRoute:ActivatedRoute) { 

    this._activateRoute.paramMap.subscribe((res:any)=>{
console.log(res.params.id);
this.UserId = res.params.id

    })


    this._user.getUserDetails(this.UserId).subscribe((res)=>{
console.log(res);
this.userDetails=res.data
    })
  }

  ngOnInit(): void {
  }


  // getUserDetails(){

  // }
}
 

