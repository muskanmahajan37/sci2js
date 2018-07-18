/* autogenerated from "macros/NonLinear/SIGNUM.sci" */
function SIGNUM() {
    SIGNUM.prototype.define = function SIGNUM() {
        var nu = -1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["signum"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([nu]);
        this.model.out = new ScilabDouble([nu]);
        this.model.nzcross = new ScilabDouble([nu]);
        this.model.nmode = new ScilabDouble([nu]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [string([1])];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SIGNUM\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString(this.exprs),this.gr_i);
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
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.zcr = arguments[0]["zcr"];
            if (!ok) {
                break;
            }
            this.graphics.exprs = new ScilabDouble([this.exprs]);
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
