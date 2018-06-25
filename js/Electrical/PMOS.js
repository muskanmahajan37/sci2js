/* autogenerated from "macros/Electrical/PMOS.sci" */
function PMOS() {
    PMOS.prototype.define = function PMOS() {
        model = scicos_model();
        W = 50.0e-6;
        L = 6.0e-6;
        Beta = 0.0105e-3;
        Vt = -1;
        K2 = 0.41;
        K5 = 0.839;
        dW = -2.5e-6;
        dL = -2.1e-6;
        RDS = 1.e+7;
        model.sim = "PMOS";
        model.blocktype = "c";
        model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "PMOS";
        mo.outputs = [["D"],["B"],["S"]];
        mo.inputs = "G";
        mo.parameters = list([["W"],["L"],["Beta"],["Vt"],["K2"],["K5"],["dW"],["dL"],["RDS"]],[[W],[L],[Beta],[Vt],[K2],[K5],[dW],[dL],[RDS]]);
        model.equations = mo;
        model.in1 = ones(size(mo.inputs,"*"),1);
        model.out = ones(size(mo.outputs,"*"),1);
        exprs = [[string(W)],[string(L)],[string(Beta)],[string(Vt)],[string(K2)],[string(K5)],[string(dW)],[string(dL)],[string(RDS)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = [["I"],["I"],["I"]];
    }
    PMOS.prototype.details = function PMOS() {
        return this.x;
    }
    PMOS.prototype.get = function PMOS() {
    }
    PMOS.prototype.set = function PMOS() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,W,L,Beta,Vt,K2,K5,dW,dL,RDS,exprs] = scicos_getvalue("Set PMOS Transistor parameters",[["Width [m]"],["Length [m]"],["Transconductance parameter [A/(V*V)]"],["Zero bias threshold voltage [V]"],["Bulk threshold parameter"],["Reduction of pinch-off region"],["Narrowing of channel [m]"],["Shortening of channel [m]"],["Drain-Source-Resistance [Ohm]"]],list("vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            model.equations.parameters[2-1] = list(W,L,Beta,Vt,K2,K5,dW,dL,RDS);
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
    }
}
