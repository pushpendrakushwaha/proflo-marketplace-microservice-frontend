import { Component, OnInit, Inject } from '@angular/core';
import { GithubService } from '../github.service';
import { Integration } from '../integration.service';
import { ActivatedRoute } from '@angular/router';
import{ pluck } from 'rxjs/operators';
  import { from } from 'rxjs';
@Component({
  selector: 'app-githubform',
  templateUrl: './githubform.component.html',
  styleUrls: ['./githubform.component.css']
})
export class GithubformComponent implements OnInit {
  UToken: string;
  name:string
  [x: string]: any;
  //TeamId: any = '';
  UName: any ='';
   
  Urepository: any = '';
  public arr1: any;
  public gitform : Integration[];
  constructor(private git: GithubService, private activatedRoute: ActivatedRoute) {  }

  ngOnInit() { 

    this.activatedRoute.queryParams.pipe(pluck('UToken')).subscribe((UToken: string)=> {
      this.UToken = UToken;
    })
    
  
    this.route.queryParamMap.subscribe(queryParams => {
      this.name = queryParams.get("code")
      console.log(queryParams.get("code"));
    
    this.git.getBearerToken(this.name).subscribe( (data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    })
    })

  }

  githubRegister()
  {
    this.git.githubRegister(this.UName,this.Urepository, this.UToken).subscribe(response => console.log(response));
      this.UName = '';
      //this.UToken = '';
      this.Urepository = '';
      
      //this.TeamId = '';
      //window.location.href='http://marketplace.api.proflo.cgi-wave7.stackroute.io/api/issue';
      //this.git.githubRegister().subscribe(data => this.'http://core.proflo.cgi-wave7.stackroute.io' = data);  
       
    }
     

}
