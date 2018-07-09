/* autogenerated from "macros/Electrical/Switch.sci" */
function Switch() {
    Switch.prototype.define = function Switch() {
        this.model = scicos_model();
        this.Ron = 0.01;
        this.Roff = 1e5;
        S = [["Ron"],["Roff"]];
        Z = eval(S);
        this.model.sim = new ScilabString("Switch");
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        mo = modelica();
        mo.model = this.model.sim;
        mo.inputs = [["p"],["inp"]];
        mo.outputs = "n";
        mo.parameters = list(S,Z);
        this.model.equations = new ScilabDouble(mo);
        this.model.in1 = new ScilabDouble(ones(size(mo.inputs,"*"),1));
        this.model.out = new ScilabDouble(ones(size(mo.outputs,"*"),1));
        this.model.rpar = new ScilabDouble(Z);
        exprs = string(Z);
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = [["I"],["E"]];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    Switch.prototype.details = function Switch() {
        return this.x;
    }
    Switch.prototype.get = function Switch() {
        var options = {
            Ron:["Resistance in On state (Ohm)",this.Ron],
            Roff:["Resistance in Off state (Ohm)",this.Roff],
        }
        return options;
    }
    Switch.prototype.set = function Switch() {
        this.Ron = parseFloat(arguments[0]["Ron"])
        this.Roff = parseFloat(arguments[0]["Roff"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.Ron,this.Roff,exprs] = scicos_getvalue("Set non-ideal electrical switch parameters",["Resistance in On state (Ohm)","Resistance in Off state (Ohm)"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            this.model.equations.parameters[('2', 'double')] = list(this.Ron,this.Roff);
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
