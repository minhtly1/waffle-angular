import { Component, OnInit } from '@angular/core';
import { Host } from '../host';
import { ActivatedRoute, Router } from '@angular/router';
import { HostService } from '../service/host-service/host.service';

@Component({
  selector: 'app-host-details',
  templateUrl: './host-details.component.html',
  styleUrls: ['./host-details.component.css']
})
export class HostDetailsComponent implements OnInit {

  id: number;
  host: Host;

  constructor(private route: ActivatedRoute, private router: Router, private hostService: HostService) { }

  ngOnInit(): void {
    this.host = new Host();
    this.id = this.route.snapshot.params['id'];

    this.hostService.getHostById(this.id).subscribe(data => {
      console.log(data);
      this.host = data;
    }, error => console.log(error));
  }

  list(): void {
    this.router.navigate(['hosts']);
  }

}
