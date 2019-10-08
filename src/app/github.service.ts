import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
//import { Issue } from './issue';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  [x: string]: any;
  public arr2:[];

  constructor(private http:HttpClient) { this.http = http; }
  public request:any = {

  };
//github method
githubRegister(uname:string,urepository:string,utoken: string) {
  
  //console.log(teamId);
  return this.http.post('http://marketplace.api.proflo.cgi-wave7.stackroute.io/api/issue', {
  //return this.http.post('http://localhost:5005/api/issue',{
    UName:uname,
    Urepository:urepository,
    UToken:utoken
     
  });

// githubRegister(uname:string,urepository:string){ 
//   console.log(uname);
//   console.log(urepository);
//   return this.http.post('https://github.com/login/oauth/access_token?client_id=72922e71df7b8c170119&client_secret=324cb1736f292ddeecda394bc9f048be893359ba&code=' + 'this.code', {
//     uname:uname,
//     urepository:urepository, 
// })
// }


  //this
  //this.value.getregister().subscribe(data => this.integrations = data)
  

  }

  getBearerToken(name) {
    return this.http.post(`https://github.com/login/oauth/access_token?client_id=72922e71df7b8c170119&client_secret=324cb1736f292ddeecda394bc9f048be893359ba&code=${name}`, {});
   }
}

