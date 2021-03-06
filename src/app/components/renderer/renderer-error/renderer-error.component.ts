import { Component, OnInit } from '@angular/core';

import { RendererService } from '../renderer.service';
import { RendererModel } from '../../../shared/models/renderer.model';

@Component({
  selector: 'app-renderer-error',
  templateUrl: './renderer-error.component.html',
  styleUrls: ['./renderer-error.component.scss']
})
export class RendererErrorComponent implements OnInit {

  visible: boolean = true;
  dados: RendererModel[] = [];

  constructor(private _rendererService: RendererService) { }

  ngOnInit() {
    this._rendererService.getDados()
      .toPromise()
      .then(res => this.dados = res)
      .catch(error => console.error(error));
  }

}
