/* autogenerated from "macros/Sources/CONST.sci" */
function CONST() {
    CONST.prototype.define = function CONST() {
        this.C = 1;
        this.model = scicos_model();
        this.model.sim = list("cstblk4",4);
        this.model.in1 = [];
        this.model.out = new ScilabDouble(1);
        this.model.rpar = new ScilabDouble(this.C);
        this.model.blocktype = new ScilabString("d");
        this.model.dep_ut = [false,false];
        exprs = strcat(sci2exp(this.C));
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CONST.prototype.details = function CONST() {
        return this.x;
    }
    CONST.prototype.get = function CONST() {
        var options = {
        }
        return options;
    }
    CONST.prototype.set = function CONST() {
        this.C = parseFloat(arguments[0]["C"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.C,exprs] = scicos_getvalue(["Set Contant Block"],"Constant",list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            sz = size(this.C);
            nout = size(this.C,"*");
            if (nout==0) {
                message("C must have at least one element");
            } else if (and(sz>1)) {
                message("C matrix is not supported, use CONST_m instead");
            } else {
                this.model.rpar = this.C.slice();
                this.model.out = new ScilabDouble(nout);
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
