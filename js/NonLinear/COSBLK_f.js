/* autogenerated from "macros/NonLinear/COSBLK_f.sci" */
function COSBLK_f() {
    COSBLK_f.prototype.define = function COSBLK_f() {
        var in1 = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["cosblk"]);
        this.model.in1 = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"COSBLK_f\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model,[],gr_i);
        return new BasicBlock(this.x);
    }
    COSBLK_f.prototype.details = function COSBLK_f() {
        return this.x;
    }
    COSBLK_f.prototype.get = function COSBLK_f() {
        var options = {
        }
        return options;
    }
    COSBLK_f.prototype.set = function COSBLK_f() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
