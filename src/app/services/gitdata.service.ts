import { Injectable } from '@angular/core';
import { environment} from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

import { User } from '../user';
import { Repository } from '../repository';
import { map } from 'rxjs/operators';
// import { request } from 'https';

@Injectable({
  providedIn: 'root'
})
export class GitdataService {
 
  myusername!:string
  constructor(public http: HttpClient) {
    this.myusername = "gladyswambura"
  }
  
    // interface that displays data after username input
    findUser(){
      return this.http.get(`https://api.github.com/users/`+ this.myusername).pipe(map(response => response))
    }

    findRepository(){
       return this.http.get(`https://api.github.com/users/`+ this.myusername + '/repos').pipe(map(response => response))
    }

    newuser(myusername:string) {
        this.myusername = myusername
    }
    // }

    // let headers= new HttpHeaders({'Authorization': 'token' + environment.githubtoken});
    // let request = environment.baseUrl + whatToSearch;
  //   let promise = new Promise((resolve, reject) => {

  // }


    // interface that displays data after repository input
  //   showRepositories(user:any){
  //   interface GithubApi{
  //     html_url:string,
  //     description:string,
  //     language:string,
  //     homepage:string
  //   }
  //  }


     }
