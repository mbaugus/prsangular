import { Component, OnInit, Input } from '@angular/core';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-specialbtn',
  templateUrl: './specialbtn.component.html',
  styleUrls: ['./specialbtn.component.css']
})
export class SpecialbtnComponent implements OnInit {
  @Input() info = {
    permission: [],
    url: '',
    display: '',
    type: ''
  };
  role = '';
  @Input() url = '';
  constructor(private SysSvc: SystemService) { }

  ngOnInit() {
    this.role = this.SysSvc.GetUserRole();
    if (this.url !== '') {
      this.info.url = this.url;
    }
    console.log(this.role);
  }
}
