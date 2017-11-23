import { InsSituacao } from './ins-situacao.models';
export class Inscricao {
    insCodigo: number;
    insPssNome: String;
    insPssEmail: String;
    insPssDtNascimento: String;//Date
    insPssSexo: String;
    ncnCodigo: number;
    estCvlCodigo: number;
    insPssCPF: String;
    orgExpPssDcmIdnCodigo: number;
    tpEscCodigo: number;
    insIncDtHora: String;//Date e ver como gravar hora junto
    insAltDtHora: String;//Date gravar hora junto
    mncCdgNaturalidade: number;
    insPssPNEObservacoes: String;
    tblGrlCorRaca: String;
    tblGrlItmCorRaca: String;
    tblGrlPNE: String;
    tblGrlItmPNE: String;
    insPssNmMae: String;
    insPssNmPai: String;
    insPssNIS: String;
    insNumero: number;
    insRzIndeferimento: String;
    insDtPagamento: String;//Date
    insVlrTarifa: number;
    insVlrPago: number;
    insPssEmlAlternativo: String;
    insPssDcmIdentificacao: String;
    tblGrlCdgTpDcmIdentificacao: String;
    tblGrlItmCdgTpDcmIdentificacao: String;
    insPssNmSocial: String;
    insEndLogradouro: String;
    insEndNumero: String;
    insEndBairro: String;
    insEndComplemento: String;
    insEndCEP: String;
    tpEndCodigo: number;
    mncCdgEndereco: number;
    insTlfFxoArea: String;
    insTlfFxoTelefone: String;
    insTlfMvlArea: String;
    insTlfMvlTelefone: String;
    psCdgTlfFixo: number;
    psCdgTlfMovel: number;
    pssFscCodigo: number;
    insSituacao: InsSituacao;

    public initJSON(json: any): Inscricao {
        this.insCodigo = json.insCodigo;
        this.insPssNome = json.insPssNome;
        this.insPssEmail = json.insPssEmail;
        this.insPssDtNascimento = json.insPssDtNascimento;
        this.insPssSexo = json.insPssSexo;
        this.ncnCodigo = json.ncnCodigo;
        this.estCvlCodigo = json.estCvlCodigo;
        this.insPssCPF = json.insPssCPF;
        this.orgExpPssDcmIdnCodigo = json.orgExpPssDcmIdnCodigo;
        this.tpEscCodigo = json.tpEscCodigo;
        this.insIncDtHora = json.insIncDtHora;
        this.insAltDtHora = json.insAltDtHora;
        this.mncCdgNaturalidade = json.mncCdgNaturalidade;
        this.insPssPNEObservacoes = json.insPssPNEObservacoes;
        this.tblGrlCorRaca = json.tblGrlCorRaca;
        this.tblGrlItmCorRaca = json.tblGrlItmCorRaca;
        this.tblGrlPNE = json.tblGrlPNE;
        this.tblGrlItmPNE = json.tblGrlItmPNE,
        this.insPssNmMae = json.insPssNmMae;
        this.insPssNmPai = json.insPssNmPai;
        this.insPssNIS = json.insPssNIS;
        this.insNumero = json.insNumero;
        this.insRzIndeferimento = json.insRzIndeferimento;
        this.insDtPagamento = json.insDtPagamento;
        this.insVlrTarifa = json.insVlrTarifa;
        this.insVlrPago = json.insVlrPago;
        this.insPssEmlAlternativo = json.insPssEmlAlternativo;
        this.insPssDcmIdentificacao = json.insPssDcmIdentificacao;
        this.tblGrlCdgTpDcmIdentificacao = json.tblGrlCdgTpDcmIdentificacao;
        this.tblGrlItmCdgTpDcmIdentificacao = json.tblGrlItmCdgTpDcmIdentificacao;
        this.insPssNmSocial = json.insPssNmSocial;
        this.insEndLogradouro = json.insEndLogradouro;
        this.insEndNumero = json.insEndNumero;
        this.insEndBairro = json.insEndBairro;
        this.insEndComplemento = json.insEndComplemento;
        this.insEndCEP = json.insEndCEP;
        this.tpEndCodigo = json.tpEndCodigo;
        this.mncCdgEndereco = json.mncCdgEndereco;
        this.insTlfFxoArea = json.insTlfFxoArea;
        this.insTlfFxoTelefone = json.insTlfFxoTelefone;
        this.insTlfMvlArea = json.insTlfMvlArea;
        this.insTlfMvlTelefone = json.insTlfMvlTelefone;
        this.psCdgTlfFixo = json.psCdgTlfFixo;
        this.psCdgTlfMovel = json.psCdgTlfFixo;
        this.pssFscCodigo = json.pssFscCodigo;
        this.insSituacao = json.InsSituacao;
        return this;
    }

    public toJSON() {
        return {
            'inscricao.insCodigo': this.insCodigo,
            'inscricao.insPssNome': this.insPssNome,
            'inscricao.insPssEmail': this.insPssEmail,
            'inscricao.insPssDtNascimento': this.insPssDtNascimento,
            'inscricao.insPssSexo': this.insPssSexo,
            'inscricao.ncnCodigo': this.ncnCodigo,
            'inscricao.estCvlCodigo': this.estCvlCodigo,
            'inscricao.insPssCPF': this.insPssCPF,
            'inscricao.orgExpPssDcmIdnCodigo': this.orgExpPssDcmIdnCodigo,
            'inscricao.tpEscCodigo': this.tpEscCodigo,
            'inscricao.insIncDtHora': this.insIncDtHora,
            'inscricao.insAltDtHora': this.insAltDtHora,
            'inscricao.mncCdgNaturalidade': this.mncCdgNaturalidade,
            'inscricao.insPssPNEObservacoes': this.insPssPNEObservacoes,
            'inscricao.tblGrlCorRaca': this.tblGrlCorRaca,
            'inscricao.tblGrlItmCorRaca': this.tblGrlItmCorRaca,
            'inscricao.tblGrlPNE': this.tblGrlPNE,
            'inscricao.tblGrlItmPNE': this.tblGrlItmPNE,
            'inscricao.insPssNmMae': this.insPssNmMae,
            'inscricao.insPssNmPai': this.insPssNmPai,
            'inscricao.insPssNIS': this.insPssNIS,
            'inscricao.insNumero': this.insNumero,
            'inscricao.insRzIndeferimento': this.insRzIndeferimento,
            'inscricao.insDtPagamento': this.insDtPagamento,
            'inscricao.insVlrTarifa': this.insVlrTarifa,
            'inscricao.insVlrPago': this.insVlrPago,
            'inscricao.insPssEmlAlternativo': this.insPssEmlAlternativo,
            'inscricao.insPssDcmIdentificacao': this.insPssDcmIdentificacao,
            'inscricao.tblGrlCdgTpDcmIdentificacao': this.tblGrlCdgTpDcmIdentificacao,
            'inscricao.tblGrlItmCdgTpDcmIdentificacao': this.tblGrlItmCdgTpDcmIdentificacao,
            'inscricao.insPssNmSocial': this.insPssNmSocial,
            'inscricao.insEndLogradouro': this.insEndLogradouro,
            'inscricao.insEndNumero': this.insEndNumero,
            'inscricao.insEndBairro': this.insEndBairro,
            'inscricao.insEndComplemento': this.insEndComplemento,
            'inscricao.insEndCEP': this.insEndCEP,
            'inscricao.tpEndCodigo': this.tpEndCodigo,
            'inscricao.mncCdgEndereco': this.mncCdgEndereco,
            'inscricao.insTlfFxoArea': this.insTlfFxoArea,
            'inscricao.insTlfFxoTelefone': this.insTlfFxoTelefone,
            'inscricao.insTlfMvlArea': this.insTlfMvlArea,
            'inscricao.insTlfMvlTelefone': this.insTlfMvlTelefone,
            'inscricao.psCdgTlfFixo': this.psCdgTlfFixo,
            'inscricao.psCdgTlfMovel': this.psCdgTlfMovel,
            'inscricao.pssFscCodigo': this.pssFscCodigo,
            'inscricao.insSituacao': this.insSituacao
        }
    }
}