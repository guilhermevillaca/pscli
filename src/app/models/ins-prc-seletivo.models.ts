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
        return this;
    }

    public toJson() {
        return {

        }
    }
}