import { Component, OnInit } from '@angular/core';
import { RendererModel } from '../../../shared/models/renderer.model';
import { Subject, Subscription } from 'rxjs';

import { RealTimeService } from '../../../shared/services/real-time.service';

@Component({
  selector: 'app-observable-unsubscribe',
  templateUrl: './observable-unsubscribe.component.html',
  styleUrls: ['./observable-unsubscribe.component.scss']
})
export class ObservableUnsubscribeComponent implements OnInit {

  dados: RendererModel[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private _realTimeService: RealTimeService) { }

  ngOnInit() {
    this.subscriptions.add(
      this._realTimeService.alterarLista
        .subscribe(ret => {
          console.log('ObservableUnsubscribeComponent -> Unsubscribe -> Carregou');
          console.log(ret);
          this.dados = ret;
        }));
  }

  ngOnDestroy() {
    console.log('ObservableUnsubscribeComponent -> Unsubscribe -> ngOnDestroy');
    this.subscriptions.unsubscribe();
  }


}
