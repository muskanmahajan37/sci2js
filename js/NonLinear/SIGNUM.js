/* autogenerated from "macros/NonLinear/SIGNUM.sci" */
function SIGNUM() {
    SIGNUM.prototype.define = function SIGNUM() {
        var nu = -1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["signum"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([nu]);
        this.model.out = new ScilabDouble([nu]);
        this.model.nzcross = new ScilabDouble([nu]);
        this.model.nmode = new ScilabDouble([nu]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var exprs = [string([1])];
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SIGNUM\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    SIGNUM.prototype.details = function SIGNUM() {
        return this.x;
    }
    SIGNUM.prototype.get = function SIGNUM() {
        var options = {
            zcr:["use zero_crossing (1: yes) (0:no)",this.zcr],
        }
        return options;
    }
    SIGNUM.prototype.set = function SIGNUM() {
        this.zcr = arguments[0]["zcr"]
        this.x = arg1;
        this.graphics = arg1.graphics;
        var exprs = this.graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.zcr,exprs] = scicos_getvalue("Set block parameters",["use zero_crossing (1: yes) (0:no)"],list("vec",1),exprs);
            if (!ok) {
                break;
            }
            this.graphics.exprs = new ScilabDouble([exprs]);
            if (ok) {
                if (this.zcr!=0) {
                    this.model.nmode = new ScilabDouble([-1]);
                    this.model.nzcross = new ScilabDouble([-1]);
                } else {
                    this.model.nmode = new ScilabDouble([0]);
                    this.model.nzcross = new ScilabDouble([0]);
                }
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
