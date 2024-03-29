import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}
  cargada = false

  constructor( private htttp: HttpClient) { 

    //console.log("servicio de infoPagina listo");
    
    //Leer el archivo JSON
    this.htttp.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true
        this.info = resp        
        console.log(resp)
        
      })

  }
}
