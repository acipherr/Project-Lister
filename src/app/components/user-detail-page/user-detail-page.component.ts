import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss']
})
export class UserDetailPageComponent implements OnInit {
  username! : string;
  userDetail : any;
  html_url! : string;
  imgurl! : string;
  name! : string;
  bio! : string;
  followers! : number;
  company! : string;
  location! : string;

  constructor(private route : ActivatedRoute , private apiService :ApiService , private router : Router ) { }

  ngOnInit(): void {
      this.route.params.subscribe(params =>{
           this.username = params['id'];
           console.log("username",this.username);
       })

       this.apiService.getUser(this.username).subscribe({
        
         complete : () => {console.log("success!")},
         error:() => {
        
            alert("error ! search again");
           
            this.router.navigate(['searchuser']);
            
         },
         next : (data : any = []) => {
           this.userDetail = data;
           console.log(this.userDetail);
           this.bio = this.userDetail.bio;
           this.html_url = this.userDetail.html_url;
           this.company = this.userDetail.company;
           this.followers = this.userDetail.followers;
           this.imgurl = this.userDetail.avatar_url;
           this.location = this.userDetail.location;
           this.name = this.userDetail.name;


           
          }

       })

      

  }

}
