import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostListComponent } from './host-list/host-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'host', pathMatch: 'full' },
  { path: 'hosts', component: HostListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }