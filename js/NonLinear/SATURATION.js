/* autogenerated from "macros/NonLinear/SATURATION.sci" */
function SATURATION() {
    SATURATION.prototype.define = function SATURATION() {
        minp = -1;
        maxp = 1;
        rpar = [[maxp],[minp]];
        model = scicos_model();
        model.sim = list("satur",4);
        model.in1 = 1;
        model.nzcross = 2;
        model.nmode = 1;
        model.out = 1;
        model.rpar = rpar;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[string(maxp)],[string(minp)],[string(model.nmode)]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
    }
    SATURATION.prototype.details = function SATURATION() {
        return this.x;
    }
    SATURATION.prototype.get = function SATURATION() {
    }
    SATURATION.prototype.set = function SATURATION() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,maxp,minp,zeroc,exprs] = scicos_getvalue("Set Saturation parameters",[["Upper limit"],["Lower limit"],["zero crossing (0:no, 1:yes)"]],list("vec",1,"vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if (maxp<=minp) {
                message("Upper limit must be > Lower limit");
            } else {
                rpar = [[maxp],[minp]];
                model.rpar = rpar;
                if (zeroc!=0) {
                    model.nzcross = 2;
                    model.nmode = 1;
                } else {
                    model.nzcross = 0;
                    model.nmode = 0;
                }
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
    }
}
