/* autogenerated from "macros/Hydraulics/SourceP.sci" */
function SourceP() {
    SourceP.prototype.define = function SourceP() {
        model = scicos_model();
        this.P0 = 300000;
        this.T0 = 290;
        this.H0 = 100000;
        this.option_temperature = 1;
        model.rpar = [[this.P0],[this.T0],[this.H0],[this.option_temperature]];
        model.sim = "Source";
        model.blocktype = "c";
        model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "Source";
        mo.inputs = [];
        mo.outputs = ["C"];
        mo.parameters = list([["P0"],["T0"],["H0"],["option_temperature"]],[[this.P0],[this.T0],[this.H0],[this.option_temperature]]);
        model.equations = mo;
        model.in1 = ones(size(mo.inputs,"*"),1);
        model.out = ones(size(mo.outputs,"*"),1);
        exprs = [[string(this.P0)],[string(this.T0)],[string(this.H0)],[string(this.option_temperature)]];
        gr_i = [];
        this.x = standard_define([2.5,2],model,exprs,list(gr_i,0));
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
        this.P0 = parseFloat((arguments[0]["P0"]))
        this.T0 = parseFloat((arguments[0]["T0"]))
        this.H0 = parseFloat((arguments[0]["H0"]))
        this.option_temperature = parseFloat((arguments[0]["option_temperature"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.P0,this.T0,this.H0,this.option_temperature,exprs] = scicos_getvalue("Paramètres du puits",["Pression de la source : P0 (Pa)","Temperature de la source : T0 (K)","Enthalpie spécifique de la source : H0 (J/kg)","1:température fixée - 2:enthalpie fixée : option_temperature"],list("vec",-1,"vec",-1,"vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            model.rpar = [[this.P0],[this.T0],[this.H0],[this.option_temperature]];
            model.equations.parameters[2-1] = list(this.P0,this.T0,this.H0,this.option_temperature);
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
