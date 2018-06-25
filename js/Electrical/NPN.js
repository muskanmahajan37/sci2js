/* autogenerated from "macros/Electrical/NPN.sci" */
function NPN() {
    NPN.prototype.define = function NPN() {
        ModelName = "NPN";
        PrametersValue = [[50],[0.1],[0],[0.02],[1.200e-10],[5.000e-09],[1.000e-12],[4.000e-13],[5.000e-13],[0.8],[0.4],[0.8],[0.333],[1.000e-15],[1.000e-15],[0.02585],[40]];
        ParametersName = [["Bf"],["Br"],["Is"],["Vak"],["Tauf"],["Taur"],["Ccs"],["Cje"],["Cjc"],["Phie"],["Me"],["Phic"],["Mc"],["Gbc"],["Gbe"],["Vt"],["EMinMax"]];
        model = scicos_model();
        Typein = [];
        Typeout = [];
        MI = [];
        MO = [];
        P = [[100,90,-2,0],[0,50,2,0],[100,10,-2,0]];
        PortName = [["C"],["B"],["E"]];
        for (i=1;i<=size(P,"r");i+=1) {
            if (P[i-1][3-1]==1) {
                Typein = [[Typein],["E"]];
                MI = [[MI],[PortName[i-1]]];
            }
            if (P[i-1][3-1]==2) {
                Typein = [[Typein],["I"]];
                MI = [[MI],[PortName[i-1]]];
            }
            if (P[i-1][3-1]==-1) {
                Typeout = [[Typeout],["E"]];
                MO = [[MO],[PortName[i-1]]];
            }
            if (P[i-1][3-1]==-2) {
                Typeout = [[Typeout],["I"]];
                MO = [[MO],[PortName[i-1]]];
            }
        }
        model = scicos_model();
        mo = modelica();
        model.sim = ModelName;
        mo.inputs = MI;
        mo.outputs = MO;
        model.rpar = PrametersValue;
        mo.parameters = list(ParametersName,PrametersValue,zeros(ParametersName));
        exprs = [["50"],["0.1"],["1.e-16"],["0.02"],["0.12e-9"],["5e-9"],["1e-12"],["0.4e-12"],["0.5e-12"],["0.8"],["0.4"],["0.8"],["0.333"],["1e-15"],["1e-15"],["0.02585"],["40"]];
        gr_i = [];
        model.blocktype = "c";
        model.dep_ut = [false,true];
        mo.model = ModelName;
        model.equations = mo;
        model.in1 = ones(size(MI,"*"),1);
        model.out = ones(size(MO,"*"),1);
        this.x = standard_define([2,2],model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = Typein;
        this.x.graphics.out_implicit = Typeout;
    }
    NPN.prototype.details = function NPN() {
        return this.x;
    }
    NPN.prototype.get = function NPN() {
    }
    NPN.prototype.set = function NPN() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        this.x = arg1;
        exprs = this.x.graphics.exprs;
        while (true) {
            [ok,Bf,Br,Is,Vak,Tauf,Taur,Ccs,Cje,Cjc,Phie,Me,Phic,Mc,Gbc,Gbe,Vt,EMinMax,exprs] = scicos_getvalue([["Set NPN block parameters:"],[""]],[["Bf  : Forward beta"],["Br  : Reverse beta"],["Is  : Transport saturation current"],["Vak : Early voltage (inverse), 1/Volt"],["Tauf: Ideal forward transit time"],["Taur: Ideal reverse transit time"],["Ccs : Collector-substrat(ground) cap."],["Cje : Base-emitter zero bias depletion cap."],["Cjc : Base-coll. zero bias depletion cap."],["Phie: Base-emitter diffusion voltage"],["Me  : Base-emitter gradation exponent"],["Phic: Base-collector diffusion voltage"],["Mc  : Base-collector gradation exponent"],["Gbc : Base-collector conductance"],["Gbe : Base-emitter conductance"],["Vt  : Voltage equivalent of temperature"],["EMinmax: if x > EMinMax, the exp(x) is linearized"]],list("vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            this.x.model.equations.parameters[2-1] = list(Bf,Br,Is,Vak,Tauf,Taur,Ccs,Cje,Cjc,Phie,Me,Phic,Mc,Gbc,Gbe,Vt,EMinMax);
            this.x.graphics.exprs = exprs;
            break;
        }
    }
}
