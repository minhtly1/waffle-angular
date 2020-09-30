import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HostService } from '../service/host-service/host.service';
import { Host } from '../host';

@Component({
  selector: 'app-host-update',
  templateUrl: './host-update.component.html',
  styleUrls: ['./host-update.component.css']
})
export class HostUpdateComponent implements OnInit {

  id: number;
  host: Host;

  constructor(private route: ActivatedRoute, private router: Router, private hostService: HostService) { }

  ngOnInit(): void {
    this.host = new Host();

    this.id = this.route.snapshot.params['id'];

    this.hostService.getHostById(this.id).subscribe(data => {
      console.log(data);
      this.host = data;
    },
    error => console.log(error));
  }

  updateHost() {
    this.hostService.updateHost(this.id, this.host).subscribe(data => {
      console.log(data);
      this.host = new Host();
      this.goToList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.updateHost();
  }

  goToList() {
    this.router.navigate(['/hosts'])
  }

}
