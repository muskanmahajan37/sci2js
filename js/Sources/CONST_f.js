/* autogenerated from "macros/Sources/CONST_f.sci" */
function CONST_f() {
    CONST_f.prototype.define = function CONST_f() {
        this.C = 1;
        model = scicos_model();
        model.sim = list("cstblk",1);
        model.in1 = [];
        model.out = 1;
        model.rpar = this.C;
        model.blocktype = "d";
        model.dep_ut = [false,false];
        exprs = strcat(sci2exp(this.C));
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CONST_f.prototype.details = function CONST_f() {
        return this.x;
    }
    CONST_f.prototype.get = function CONST_f() {
        var options = {
        }
        return options;
    }
    CONST_f.prototype.set = function CONST_f() {
        this.C = parseFloat((arguments[0]["C"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.C,exprs] = scicos_getvalue(["Set Contant Block"],"Constant",list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            nout = size(this.C,"*");
            if (nout==0) {
                message("C must have at least one element");
            } else {
                model.rpar = this.C.slice();
                model.out = nout;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
