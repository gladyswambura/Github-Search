import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';
import { GitdataService} from '../../services/gitdata.service'

@Component({
  selector: 'app-githubuserresults',
  templateUrl: './githubuserresults.component.html',
  styleUrls: ['./githubuserresults.component.css']
})
export class GithubuserresultsComponent implements OnInit {
  // user: User = new User(' ', ' ', ' ', 0, 0, ' ', ' ', ' ', 0, new Date());
  // repository: Repository = new Repository(' ', ' ', ' ', ' ');
 
  
myusername!:string
repository:any = []
user:any = []


  constructor(private gitdataService: GitdataService) {
    this.gitdataService.findUser().subscribe(user=>{
      this.user = user
    })
     this.gitdataService.findRepository().subscribe(repository=>{
      this.repository = repository
    })
   }
    onSubmit() {
      this.gitdataService.newuser(this.myusername)
      this.gitdataService.findUser().subscribe(user=>{
      this.user = user
    })
     this.gitdataService.findRepository().subscribe(repository=>{
      this.repository = repository
      console.log(this.repository)
    })
    }


    ngOnInit():void {}

//  onSubmit(login:NgForm) {
// let username = login.value.search
// let submitted = false
// this.gitdataService.findUser(username).subscribe((response)=>{

//  this.user.login =response.login
//     this.user.avatar_url =response.avatar_url
//     this.user.html_url = response.html_url;
//     this.user.followers = response.followers;
//     this.user.following =response.following;
//     this.user.name = response.login;
//     this.user.location = response.location;
//     this.user.userbio = response.bio;
//     this.user.numberofRepositories = response.public_repos;
//     this.user.update_time = response.created_at;

//   console.log(this.user)
// })
// let repos

// }

//   ngOnInit():void {
// let username = "gladyswambura"
// let submitted = false
// this.gitdataService.findUser(username).subscribe((res)=>{

//  this.user.login =res.login
//     this.user.avatar_url =res.avatar_url
//     this.user.html_url = res.html_url;
//     this.user.followers = res.followers;
//     this.user.following =res.following;
//     this.user.name = res.login;
//     this.user.location = res.location;
//     this.user.userbio = res.bio;
//     this.user.numberofRepositories = res.public_repos;
//     this.user.update_time = res.created_at;

//   console.log(this.user)
// })
// }

  }


