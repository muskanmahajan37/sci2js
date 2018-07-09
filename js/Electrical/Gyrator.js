/* autogenerated from "macros/Electrical/Gyrator.sci" */
function Gyrator() {
    Gyrator.prototype.define = function Gyrator() {
        ModelName = "Gyrator";
        PrametersValue = [[1],[1]];
        ParametersName = [["G1"],["G2"]];
        this.model = scicos_model();
        Typein = [];
        Typeout = [];
        MI = [];
        MO = [];
        P = [[2.5,90,2,0],[2.5,10,2,0],[97.5,90,-2,0],[97.5,10,-2,0]];
        PortName = [["p1"],["n1"],["p2"],["n2"]];
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
        this.model = scicos_model();
        mo = modelica();
        this.model.sim = new ScilabString(ModelName);
        mo.inputs = MI;
        mo.outputs = MO;
        this.model.rpar = PrametersValue;
        mo.parameters = list(ParametersName,PrametersValue,zeros(ParametersName));
        exprs = [["1"],["1"]];
        gr_i = [];
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [false,true];
        mo.model = ModelName;
        this.model.equations = new ScilabDouble(mo);
        this.model.in1 = new ScilabDouble(ones(size(MI,"*"),1));
        this.model.out = new ScilabDouble(ones(size(MO,"*"),1));
        this.x = standard_define([2,2],this.model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = Typein;
        this.x.graphics.out_implicit = Typeout;
        return new BasicBlock(this.x);
    }
    Gyrator.prototype.details = function Gyrator() {
        return this.x;
    }
    Gyrator.prototype.get = function Gyrator() {
        var options = {
            G1:["G1",this.G1],
            G2:["G2",this.G2],
        }
        return options;
    }
    Gyrator.prototype.set = function Gyrator() {
        this.G1 = arguments[0]["G1"]
        this.G2 = arguments[0]["G2"]
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        this.x = arg1;
        exprs = this.x.graphics.exprs;
        while (true) {
            [ok,this.G1,this.G2,exprs] = scicos_getvalue([["Set Gyrator block parameters:"],[""],["G1: Gyration conductance"],["G2: Gyration conductance"]],["G1","G2"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            this.x.model.equations.parameters[2-1] = list(this.G1,this.G2);
            this.x.graphics.exprs = exprs;
            break;
        }
        return new BasicBlock(this.x);
    }
}
