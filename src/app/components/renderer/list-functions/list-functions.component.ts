import { Component, OnInit } from '@angular/core';

import { RendererModel } from '../../../shared/models/renderer.model';
import { RendererService } from '../renderer.service';
import { RendererEditModel } from '../../../shared/models/renderer-edit.model';

@Component({
  selector: 'app-list-functions',
  templateUrl: './list-functions.component.html',
  styleUrls: ['./list-functions.component.scss']
})
export class ListFunctionsComponent implements OnInit {

  dados: RendererEditModel[] = [];
  codigoSelecionado: number = null;
  // get cliente() {
  //   if (this.codigoSelecionado != null) {
  //     return this.dados.find(x => x.codigo == this.codigoSelecionado);
  //   }
  //   return null;
  // }
  constructor(private _rendererService: RendererService) { }

  ngOnInit() {
    this.carregar();
  }

  trackByFn(index, item) {
    return index;
  }

  remover(i: number) {
    this.dados.splice(i, 1);
  }

  carregar() {
    this._rendererService.getDadosEdit()
      .toPromise()
      .then(res => this.dados = res)
      .catch(error => console.error(error));
  }

}
