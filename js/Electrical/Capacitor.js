/* autogenerated from "macros/Electrical/Capacitor.sci" */
function Capacitor() {
    Capacitor.prototype.define = function Capacitor() {
        this.model = scicos_model();
        this.C = 0.01;
        this.v = 0;
        this.model.rpar = [[this.C],[this.v]];
        this.model.sim = new ScilabString("Capacitor");
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "Capacitor";
        mo.inputs = "p";
        mo.outputs = "n";
        mo.parameters = list(["C","v"],list(this.C,this.v),[0,1]);
        this.model.equations = new ScilabDouble(mo);
        this.model.in1 = new ScilabDouble(ones(size(mo.inputs,"*"),1));
        this.model.out = new ScilabDouble(ones(size(mo.outputs,"*"),1));
        exprs = string([[this.C],[this.v]]);
        gr_i = [];
        this.x = standard_define([2,1.1],this.model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    Capacitor.prototype.details = function Capacitor() {
        return this.x;
    }
    Capacitor.prototype.get = function Capacitor() {
        var options = {
            C:["C (F)",this.C],
            v:["Initial Voltage",this.v],
        }
        return options;
    }
    Capacitor.prototype.set = function Capacitor() {
        this.C = parseFloat(arguments[0]["C"])
        this.v = parseFloat(arguments[0]["v"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.C,this.v,exprs] = scicos_getvalue("Set Capacitor block parameter",["C (F)","Initial Voltage"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            this.model.rpar = new ScilabDouble(this.C);
            this.model.equations.parameters[('2', 'double')] = list(this.C,this.v);
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
