import { Component, OnInit } from '@angular/core';
import { RendererModel } from '../../../shared/models/renderer.model';
import { RendererService } from '../renderer.service';

@Component({
  selector: 'app-list-trackby',
  templateUrl: './list-trackby.component.html',
  styleUrls: ['./list-trackby.component.scss']
})
export class ListTrackbyComponent implements OnInit {

  dados: RendererModel[] = [];

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
    this._rendererService.getDados()
      .toPromise()
      .then(res => this.dados = res)
      .catch(error => console.error(error));
  }
}
