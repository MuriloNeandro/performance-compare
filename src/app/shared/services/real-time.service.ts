import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RendererModel } from '../models/renderer.model';

@Injectable({
    providedIn: 'root'
})
export class RealTimeService {

    alterarLista: EventEmitter<RendererModel[]>;

    private dados: RendererModel[] = null;

    constructor(private _http: HttpClient) { 
        this.alterarLista = new EventEmitter<RendererModel[]>();
    }

    solicitarAlteracaoLista() {
        if (this.dados == null || this.dados.length == 0) {
            this.getDados().toPromise()
                .then(lista => {
                    this.dados = lista;
                    this.processarAlteracao();
                })
        }
        else
            this.processarAlteracao();
    }

    private processarAlteracao() {
        this.dados.splice(0, (this.dados.length >= 3 ? 3 : this.dados.length));
        this.alterarLista.emit(this.dados);
    }

    private getDados() {
        return this._http.get<RendererModel[]>('assets/json/renderer-data.json')
    }

}
