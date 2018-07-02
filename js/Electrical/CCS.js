/* autogenerated from "macros/Electrical/CCS.sci" */
function CCS() {
    CCS.prototype.define = function CCS() {
        ModelName = "CCS";
        PrametersValue = [];
        ParametersName = [];
        model = scicos_model();
        Typein = [];
        Typeout = [];
        MI = [];
        MO = [];
        P = [[2,50,1,0],[70,98,2,0],[70,2,-2,0]];
        PortName = [["Iin"],["p"],["n"]];
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
        exprs = [];
        gr_i = [];
        model.blocktype = "c";
        model.dep_ut = [false,true];
        mo.model = ModelName;
        model.equations = mo;
        model.in1 = ones(size(MI,"*"),1);
        model.out = ones(size(MO,"*"),1);
        this.x = standard_define([2.1,3],model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = Typein;
        this.x.graphics.out_implicit = Typeout;
        return new BasicBlock(this.x);
    }
    CCS.prototype.details = function CCS() {
        return this.x;
    }
    CCS.prototype.get = function CCS() {
        var options = {
        }
        return options;
    }
    CCS.prototype.set = function CCS() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
