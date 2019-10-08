import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { GithubService } from '../github.service';
 
import { Integration } from '../integration.service'; 
import { ActivatedRoute } from '@angular/router';
import { GithubformComponent } from '../githubform/githubform.component';

@Component({
  selector: 'app-powerupcard',
  templateUrl: './powerupcard.component.html',
  styleUrls: ['./powerupcard.component.css']
})
export class PowerupcardComponent implements OnInit {
 gitHUb: Integration[];
  name: string;
 
  constructor(public dialog:MatDialog, private githubService:GithubService, private route: ActivatedRoute,) { }
  //constructor(private githubService:GithubService, private route: ActivatedRoute,) { }
  ngOnInit() {
    //window.open("https://github.com/login/oauth/authorize?client_id=72922e71df7b8c170119", "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
   
    // this.route.queryParamMap.subscribe(queryParams => {
    //   this.name = queryParams.get("code")
    //   console.log(queryParams.get("code"));
    // })
    }
  
 
  gitHubDialog(): void{
   // window.open("https://github.com/login/oauth/authorize?client_id=72922e71df7b8c170119", "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
   
   // window.open("https://github.com/login/oauth/authorize?client_id=72922e71df7b8c170119", "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    //const dialogRef=this.dialog.open(window.location.href("https://github.com/login/oauth/authorize?client_id=72922e71df7b8c170119"));
    const dialogRef=this.dialog.open(GithubformComponent);
    {
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      })
    } 
  }
}
