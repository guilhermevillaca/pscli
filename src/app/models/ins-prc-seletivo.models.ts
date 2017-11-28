import { Inscricao } from "./inscricao.models";
import { PrcSeletivo } from "./prc-seletivo.models";

export class InsPrcSeletivo {
    insCodigo: number;
    insPrcNmSocial: String;
    insPrcCrtCanhota: String;
    insPrcAfrodescendente: String;
    insPrcDeficiente: String;
    insPrcCotista: String;
    insPrcNmrEnem: String;
    insPrcAprSurdez: String;
    insPrcNIS: String;
    insPrcArmado: String;
    insPrcTreineiro: String;
    insPrcNcsTmpAdicional: String;
    insPrcVlrRenda: number;
    inscricao: Inscricao;
    prcSltCodigo: PrcSeletivo;
    //private PrcSltLngEstrangeira prcSltLngEstCodigo;
    //private PrcSltMncProva prcSltMncPrvCodigo;
    //private PrcSltTpDivulgacao prcSltTpDvlCodigo

    public initJSON(json: any): InsPrcSeletivo {
        this.insCodigo = json.insCodigo;
        this.insPrcNmSocial = json.insPrcNmSocial;
        this.insPrcCrtCanhota = json.insPrcCrtCanhota;
        this.insPrcAfrodescendente = json.insPrcAfrodescendente;
        this.insPrcDeficiente = json.insPrcDeficiente;
        this.insPrcCotista = json.insPrcCotista;
        this.insPrcNmrEnem = json.insPrcNmrEnem;
        this.insPrcAprSurdez = json.insPrcAprSurdez;
        this.insPrcNIS = json.insPrcNIS;
        this.insPrcArmado = json.insPrcArmado;
        this.insPrcTreineiro = json.insPrcTreineiro;
        this.insPrcNcsTmpAdicional = json.insPrcNcsTmpAdicional;
        this.insPrcVlrRenda = json.insPrcVlrRenda;
        this.inscricao = json.inscricao;
        this.prcSltCodigo = json.prcSltCodigo;
        return this;
    }

    public toJson() {
        return {
            'insPrcSeletivo.insCodigo': this.insCodigo,
            'insPrcSeletivo.insPrcNmSocial': this.insPrcNmSocial,
            'insPrcSeletivo.insPrcCrtCanhota': this.insPrcCrtCanhota,
            'insPrcSeletivo.insPrcAfrodescendente': this.insPrcAfrodescendente,
            'insPrcSeletivo.insPrcDeficiente': this.insPrcDeficiente,
            'insPrcSeletivo.insPrcCotista': this.insPrcCotista,
            'insPrcSeletivo.insPrcNmrEnem': this.insPrcNmrEnem,
            'insPrcSeletivo.insPrcAprSurdez': this.insPrcAprSurdez,
            'insPrcSeletivo.insPrcNIS': this.insPrcNIS,
            'insPrcSeletivo.insPrcArmado': this.insPrcArmado,
            'insPrcSeletivo.insPrcTreineiro': this.insPrcTreineiro,
            'insPrcSeletivo.insPrcNcsTmpAdicional': this.insPrcNcsTmpAdicional,
            'insPrcSeletivo.insPrcVlrRenda': this.insPrcVlrRenda,
            'insPrcSeletivo.inscricao': this.inscricao,
            'insPrcSeletivo.prcSltCodigo': this.prcSltCodigo
        }
    }
}