import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RendererModel } from '../../shared/models/renderer.model';
import { RendererEditModel } from '../../shared/models/renderer-edit.model';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendererService {

  constructor(private _http: HttpClient) { }

  getDados() : Observable<RendererModel[]> {
    return this._http.get<RendererModel[]>('assets/json/renderer-data.json')
  }

  getDadosEdit() {
    return this._http.get<RendererEditModel[]>('assets/json/renderer-edit.json')
  }
}
