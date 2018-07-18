/* autogenerated from "macros/Hydraulics/SourceP.sci" */
function SourceP() {
    SourceP.prototype.define = function SourceP() {
        this.model = scicos_model();
        this.P0 = 300000;
        this.T0 = 290;
        this.H0 = 100000;
        this.option_temperature = 1;
        this.model.rpar = new ScilabDouble([this.P0],[this.T0],[this.H0],[this.option_temperature]);
        this.model.sim = new ScilabString(["Source"]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var mo = modelica();
        mo.model = "Source";
        mo.inputs = [];
        mo.outputs = ["C"];
        mo.parameters = list([["P0"],["T0"],["H0"],["option_temperature"]],[[this.P0],[this.T0],[this.H0],[this.option_temperature]]);
        this.model.equations = new ScilabDouble([mo]);
        this.model.in = new ScilabDouble([ones(size(mo.inputs,"*"),1)]);
        this.model.out = new ScilabDouble([ones(size(mo.outputs,"*"),1)]);
        this.exprs = [[string(this.P0)],[string(this.T0)],[string(this.H0)],[string(this.option_temperature)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SourceP\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2.5,2]),this.model,new ScilabDouble(this.exprs),list(this.gr_i,0));
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    SourceP.prototype.details = function SourceP() {
        return this.x;
    }
    SourceP.prototype.get = function SourceP() {
        var options = {
            P0:["Pression de la source : P0 (Pa)",this.P0],
            T0:["Temperature de la source : T0 (K)",this.T0],
            H0:["Enthalpie spécifique de la source : H0 (J/kg)",this.H0],
            option_temperature:["1:température fixée - 2:enthalpie fixée : option_temperature",this.option_temperature],
        }
        return options;
    }
    SourceP.prototype.set = function SourceP() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.P0 = parseFloat(arguments[0]["P0"]);
            this.T0 = parseFloat(arguments[0]["T0"]);
            this.H0 = parseFloat(arguments[0]["H0"]);
            this.option_temperature = parseFloat(arguments[0]["option_temperature"]);
            if (!ok) {
                break;
            }
            this.model.rpar = new ScilabDouble([this.P0],[this.T0],[this.H0],[this.option_temperature]);
            this.model.equations.parameters[2-1] = list(new ScilabDouble([this.P0]), new ScilabDouble([this.T0]), new ScilabDouble([this.H0]), new ScilabDouble([this.option_temperature]));
            this.graphics.exprs = new ScilabDouble([this.exprs]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
