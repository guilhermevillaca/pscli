import { DatePipe } from '@angular/common';
export class PrcSeletivo {
    prcSltCodigo: number;
    prcSltDescricao: string;
    prcSltNmrConvenio: string;
    prcSltNmrCnvEletronico: string;
    prcSltBltDtEmissao: string;//Date
    prcSltBltDtVencimento: string; //Date
    prcSltDtHrTrmReimpressao: string;//Date
    prcSltDtHrTrmInscricao: string;//Date
    mncCdgSede: number;
    
    //constructor(private datePipe: DatePipe) {}
    public initJSON(json: any): PrcSeletivo {
        this.prcSltCodigo             = json.prcSltCodigo;
        this.prcSltDescricao          = json.prcSltDescricao;
        this.prcSltNmrConvenio        = json.prcSltNmrConvenio;
        this.prcSltNmrCnvEletronico   = json.prcSltNmrCnvEletronico;
        this.prcSltBltDtEmissao       = this.toDate(json.prcSltBltDtEmissao);
        this.prcSltBltDtVencimento    = this.toDate(json.prcSltBltDtVencimento);
        this.prcSltDtHrTrmReimpressao = this.toDate(json.prcSltDtHrTrmReimpressao);
        this.prcSltDtHrTrmInscricao   = this.toDate(json.prcSltDtHrTrmInscricao);
        this.mncCdgSede               = json.mncCdgSede;
        return this;
    }

    public toJSON(){
        return {
            'prcSeletivo.prcSltCodigo'             : this.prcSltCodigo,
            'prcSeletivo.prcSltDescricao'          : this.prcSltDescricao,
            'prcSeletivo.prcSltNmrConvenio'        : this.prcSltNmrConvenio,
            'prcSeletivo.prcSltNmrCnvEletronico'   : this.prcSltNmrCnvEletronico,
            'prcSeletivo.prcSltBltDtEmissao'       : this.prcSltBltDtEmissao['formatted'],
            'prcSeletivo.prcSltBltDtVencimento'    : this.prcSltBltDtVencimento['formatted'],
            'prcSeletivo.prcSltDtHrTrmReimpressao' : this.prcSltDtHrTrmReimpressao['formatted'],
            'prcSeletivo.prcSltDtHrTrmInscricao'   : this.prcSltDtHrTrmInscricao['formatted'],
            'prcSeletivo.mncCdgSede'               : this.mncCdgSede
        }
    }

    public toDate(date){
        let datePipe: DatePipe = new DatePipe('pt-PT');        
        let d = datePipe.transform(date, 'dd/MM/yyyy');  
        let dt = new Date(d);         
        return date;    
    }
}