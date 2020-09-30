import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { HostListComponent } from './host-list/host-list.component';
import { HostCreateComponent } from './host-create/host-create.component';
import { HostDetailsComponent } from './host-details/host-details.component';
import { HostUpdateComponent } from './host-update/host-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HostListComponent,
    HostCreateComponent,
    HostDetailsComponent,
    HostUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
