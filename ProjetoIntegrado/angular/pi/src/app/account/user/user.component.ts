import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../subheader/subheader.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private subheaderService: SubheaderService) { }

  ngOnInit() {
    this.subheaderService.setTitle('Meus dados');
  }

}
