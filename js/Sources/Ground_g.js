/* autogenerated from "macros/Sources/Ground_g.sci" */
function Ground_g() {
    Ground_g.prototype.define = function Ground_g() {
        C = [0];
        model = scicos_model();
        model.sim = list("cstblk4_m",4);
        model.in1 = [];
        model.out = 1;
        model.in2 = [];
        model.out2 = 1;
        model.outtyp = -1;
        model.rpar = [];
        model.opar = list(C);
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = [];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    Ground_g.prototype.details = function Ground_g() {
        return this.x;
    }
    Ground_g.prototype.get = function Ground_g() {
        var options = {
        }
        return options;
    }
    Ground_g.prototype.set = function Ground_g() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
