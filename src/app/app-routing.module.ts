import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubformComponent } from './githubform/githubform.component';
​import { PowerupcardComponent} from './powerupcard/powerupcard.component';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'githubform', component: GithubformComponent },
  // {path:'display',component: TableComponent}
  { path: 'powerupcard', component: PowerupcardComponent }
    ];
​
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }