import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cria-produto',
  templateUrl: './cria-produto.component.html',
  styleUrls: ['./cria-produto.component.css']
})
export class CriaProdutoComponent implements OnInit {

  constructor(private router : Router){ }

  ngOnInit(): void {
    
  }

  navigateToProductCreate() : void {
    this.router.navigate(['/produtos'])
  }
  
}
