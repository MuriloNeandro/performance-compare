import { Component, OnInit } from '@angular/core';
import { RendererModel } from '../../../shared/models/renderer.model';
import { RealTimeService } from '../../../shared/services/real-time.service';
import { RendererService } from '../../renderer/renderer.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  dados: RendererModel[] = [];

  constructor(private _rendererService: RendererService) { }

  ngOnInit() {
      this._rendererService.getDados()
        .toPromise()
        .then(ret => {
          console.log('PromiseComponent -> Carregou');
          console.log(ret);
          this.dados = ret;
        });
  }

  ngOnDestroy() {
    console.log('PromiseComponent -> ngOnDestroy');
  }

}
