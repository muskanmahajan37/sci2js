/* autogenerated from "macros/Linear/BIGSOM_f.sci" */
function BIGSOM_f() {
    BIGSOM_f.prototype.define = function BIGSOM_f() {
        this.sgn = [[1],[1]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["sum"]), new ScilabDouble([2]));
        this.model.in1 = new ScilabDouble([-1],[-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.rpar = new ScilabDouble(this.sgn);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var exprs = sci2exp(this.sgn);
        var gr_i = [];
        this.x = standard_define([2,3],this.model,exprs,gr_i);
        return new BigSom(this.x);
    }
    BIGSOM_f.prototype.details = function BIGSOM_f() {
        return this.x;
    }
    BIGSOM_f.prototype.get = function BIGSOM_f() {
        var options = {
        }
        return options;
    }
    BIGSOM_f.prototype.set = function BIGSOM_f() {
        this.sgn = inverse(arguments[0]["sgn"])
        this.x = arg1;
        var graphics = arg1.graphics;
        this.model = arg1.model;
        var exprs = graphics.exprs;
        while (true) {
            [ok,this.sgn,exprs] = scicos_getvalue("Set sum block parameters","Inputs ports signs/gain",list("vec",-1),exprs);
            if (!ok) {
                break;
            }
            var in1 = -ones(size(this.sgn,"*"),1);
            var tmpvar0 = check_io(this.model,graphics,in1,-1,[],[])
            this.model = tmpvar0[0]
            var graphics = tmpvar0[1]
            var ok = tmpvar0[2];
            if (ok) {
                this.model.rpar = new ScilabDouble(this.sgn.slice());
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BigSom(this.x);
    }
}
