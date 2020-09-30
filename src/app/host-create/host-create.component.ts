import { Component, OnInit } from '@angular/core';
import { Host } from '../host';
import { HostService } from '../service/host-service/host.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-create',
  templateUrl: './host-create.component.html',
  styleUrls: ['./host-create.component.css']
})
export class HostCreateComponent implements OnInit {

  host: Host = new Host();
  submitted = false;

  constructor(private hostService: HostService, private router: Router) { }

  ngOnInit(): void {
  }

  newHost(): void {
    this.submitted = false;
    this.host = new Host();
  }

  save(): void {
    this.hostService.createHost(this.host).subscribe(data => {
      console.log(data);
      this.host = new Host();
      this.gotoList();
    },
    err => console.log(err));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/hosts']);
  }

}
