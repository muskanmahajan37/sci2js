/* autogenerated from "macros/NonLinear/EXPBLK_f.sci" */
function EXPBLK_f() {
    EXPBLK_f.prototype.define = function EXPBLK_f() {
        in1 = 1;
        this.a = math.E;
        this.model = scicos_model();
        this.model.sim = new ScilabString("expblk");
        this.model.in1 = new ScilabDouble(-1);
        this.model.out = new ScilabDouble(-1);
        this.model.rpar = new ScilabDouble(this.a);
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        exprs = ["%e"];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    EXPBLK_f.prototype.details = function EXPBLK_f() {
        return this.x;
    }
    EXPBLK_f.prototype.get = function EXPBLK_f() {
        var options = {
        }
        return options;
    }
    EXPBLK_f.prototype.set = function EXPBLK_f() {
        this.a = parseFloat(arguments[0]["a"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        if (size(exprs,"*")==2) {
            exprs = exprs[2-1];
        }
        while (true) {
            [ok,this.a,exprs] = scicos_getvalue("Set a^u  block parameters","a (>0)",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            if (or(this.a<=0)) {
                message("a^u : a must be positive");
            } else {
                graphics.exprs = exprs;
                this.model.rpar = new ScilabDouble(this.a);
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
