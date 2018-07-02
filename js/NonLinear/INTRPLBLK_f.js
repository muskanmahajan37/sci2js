/* autogenerated from "macros/NonLinear/INTRPLBLK_f.sci" */
function INTRPLBLK_f() {
    INTRPLBLK_f.prototype.define = function INTRPLBLK_f() {
        this.a = [[0],[1]];
        this.b = [[0],[1]];
        model = scicos_model();
        model.sim = "intrpl";
        model.in1 = 1;
        model.out = 1;
        model.rpar = [[this.a],[this.b]];
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[strcat(sci2exp(this.a))],[strcat(sci2exp(this.b))]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    INTRPLBLK_f.prototype.details = function INTRPLBLK_f() {
        return this.x;
    }
    INTRPLBLK_f.prototype.get = function INTRPLBLK_f() {
        var options = {
            a:["X coord.",this.a],
            b:["Y coord.",this.b],
        }
        return options;
    }
    INTRPLBLK_f.prototype.set = function INTRPLBLK_f() {
        this.a = parseFloat((arguments[0]["a"]))
        this.b = parseFloat((arguments[0]["b"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.a,this.b,exprs] = scicos_getvalue("Set Interpolation block parameters",["X coord.","Y coord."],list("vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            if (size(this.a,"*")!=size(this.b,"*")) {
                message("X and Y must have the same size");
            } else if (min(this.a.slice(2-1,$)-this.a.slice(1-1,$-1))<=0) {
                message("X must be strictly increasing");
            } else {
                if (ok) {
                    graphics.exprs = exprs;
                    model.rpar = [[this.a.slice()],[this.b.slice()]];
                    this.x.graphics = graphics;
                    this.x.model = model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
