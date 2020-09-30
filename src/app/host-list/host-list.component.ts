import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Host } from '../host';
import { HostService } from '../service/host-service/host.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  hosts: Observable<Host[]>

  constructor(private hostService: HostService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  // tslint:disable-next-line: typedef
  reloadData() {
    this.hosts = this.hostService.getHostsList();
  }

  addHost(): void {
    this.router.navigate(['add']);
  }

  deleteHost(id: number) {
    this.hostService.deleteHost(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));
  }

  hostDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateHost(id: number) {
    this.router.navigate(['update', id]);
  }
}
