export class PrcSeletivo {
    prcSltCodigo: number;
    prcSltDescricao: string;
    prcSltNmrConvenio: string;
    prcSltNmrCnvEletronico: string;
    prcSltBltDtEmissao: String;//Date
    prcSltBltDtVencimento: String; //Date
    prcSltDtHrTrmReimpressao: String;//Date
    prcSltDtHrTrmInscricao: String;//Date
    mncCdgSede: number;

    //constructor(private datePipe: DatePipe) {}
    public initJSON(json: any): PrcSeletivo {
        this.prcSltCodigo = json.prcSltCodigo;
        this.prcSltDescricao = json.prcSltDescricao;
        this.prcSltNmrConvenio = json.prcSltNmrConvenio;
        this.prcSltNmrCnvEletronico = json.prcSltNmrCnvEletronico;
        this.prcSltBltDtEmissao = this.toDate(json.prcSltBltDtEmissao);
        this.prcSltBltDtVencimento = this.toDate(json.prcSltBltDtVencimento);
        this.prcSltDtHrTrmReimpressao = this.toDate(json.prcSltDtHrTrmReimpressao);
        this.prcSltDtHrTrmInscricao = this.toDate(json.prcSltDtHrTrmInscricao);
        this.mncCdgSede = json.mncCdgSede;
        return this;
    }

    public toJSON() {
        return {
            'prcSeletivo.prcSltCodigo': this.prcSltCodigo,
            'prcSeletivo.prcSltDescricao': this.prcSltDescricao,
            'prcSeletivo.prcSltNmrConvenio': this.prcSltNmrConvenio,
            'prcSeletivo.prcSltNmrCnvEletronico': this.prcSltNmrCnvEletronico,
            'prcSeletivo.prcSltBltDtEmissao': this.prcSltBltDtEmissao['formatted'],
            'prcSeletivo.prcSltBltDtVencimento': this.prcSltBltDtVencimento['formatted'],
            'prcSeletivo.prcSltDtHrTrmReimpressao': this.prcSltDtHrTrmReimpressao['formatted'],
            'prcSeletivo.prcSltDtHrTrmInscricao': this.prcSltDtHrTrmInscricao['formatted'],
            'prcSeletivo.mncCdgSede': this.mncCdgSede
        }
    }

    public toDate(data) {
        let ret;//: Object = {};
        if (data) {
            let novaData = new Date(data);
            ret = {
                date: {
                    year: novaData.getFullYear(),
                    month: novaData.getMonth() + 1,
                    day: novaData.getDate()
                },
                formatted: novaData.getDate()+"/"+novaData.getMonth()+"/"+novaData.getFullYear()
            };
        }
        return ret;
    }
}