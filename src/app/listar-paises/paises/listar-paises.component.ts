import { Component, OnInit } from '@angular/core';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-listar-paises',
  templateUrl: './listar-paises.component.html',
  styleUrls: ['./listar-paises.component.css']
})
export class ListarPaisesComponent implements OnInit {

  listapaises : any;
  constructor(
    private paisesServices : PaisService
  ) { }

  ngOnInit(): void {
    this.ListarPaises();
  }

  ListarPaises(){
    this.paisesServices.getPaisesAll().subscribe((resp) =>{  
      this.listapaises = resp;  
      console.log(this.listapaises);
    })
  }

}
