import { Component, OnInit, OnDestroy } from '@angular/core';
import { RendererService } from '../../renderer/renderer.service';
import { RendererModel } from '../../../shared/models/renderer.model';
import { Subject, Subscription } from 'rxjs';
import { RealTimeService } from '../../../shared/services/real-time.service';
// import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-observable-error',
  templateUrl: './observable-error.component.html',
  styleUrls: ['./observable-error.component.scss']
})
export class ObservableErrorComponent implements OnInit, OnDestroy {

  dados: RendererModel[] = [];

  constructor(private _realTimeService: RealTimeService) { }

  ngOnInit() {
    this._realTimeService.alterarLista
        .subscribe(ret => {
          console.log('ObservableErrorComponent -> Memory Leak -> Carregou');
          console.log(ret);
          this.dados = ret;
        });
  }

  ngOnDestroy() {
    console.log('ObservableErrorComponent -> Memory Leak -> ngOnDestroy');
  }

}
