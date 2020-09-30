import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostListComponent } from './host-list/host-list.component';
import { HostCreateComponent } from './host-create/host-create.component';
import { HostDetailsComponent } from './host-details/host-details.component';
import { HostUpdateComponent } from './host-update/host-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'hosts', pathMatch: 'full' },
  { path: 'hosts', component: HostListComponent },
  { path: 'add', component: HostCreateComponent },
  { path: 'details/:id', component: HostDetailsComponent},
  { path: 'update/:id', component: HostUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }