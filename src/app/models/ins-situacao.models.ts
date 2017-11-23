export class InsSituacao {
    insStcCodigo: number;
    insStcDescricao: String;

    public initJSON(json: any): InsSituacao {
        this.insStcCodigo = json.insStcCodigo;
        this.insStcDescricao = json.insStcDescricao;
        return this;
    }

    public toJSON() {
        return {
            'insSituacao.insStcCodigo': this.insStcCodigo,
            'insSituacao.insStcDescricao': this.insStcDescricao
        }
    }
}