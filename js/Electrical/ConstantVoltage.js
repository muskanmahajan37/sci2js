/* autogenerated from "macros/Electrical/ConstantVoltage.sci" */
function ConstantVoltage() {
    ConstantVoltage.prototype.define = function ConstantVoltage() {
        V = 0.01;
        model = scicos_model();
        model.rpar = V;
        model.in1 = 1;
        model.out = 1;
        model.sim = "ConstantVoltage";
        model.blocktype = "c";
        model.dep_ut = [false,false];
        mo = modelica();
        mo.model = "ConstantVoltage";
        mo.inputs = "p";
        mo.outputs = "n";
        mo.parameters = list("V",list(V));
        model.equations = mo;
        exprs = string(V);
        gr_i = [];
        this.x = standard_define([1.5,1.1],model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
    }
    ConstantVoltage.prototype.details = function ConstantVoltage() {
        return this.x;
    }
    ConstantVoltage.prototype.get = function ConstantVoltage() {
    }
    ConstantVoltage.prototype.set = function ConstantVoltage() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,V,exprs] = scicos_getvalue("Set ConstantVoltage block parameter","V (volt)",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            model.rpar = V;
            model.equations.parameters[2-1] = list(V);
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
    }
}
