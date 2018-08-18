import { Component, OnInit } from '@angular/core';

import { RendererService } from './renderer.service';
import { RendererModel } from '../../shared/models/renderer.model';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit {

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
