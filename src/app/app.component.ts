import { Component } from '@angular/core';
import { RealTimeService } from './shared/services/real-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private _realTimeService: RealTimeService) { }
  
  carregar() {
    this._realTimeService.solicitarAlteracaoLista();
  }
}
