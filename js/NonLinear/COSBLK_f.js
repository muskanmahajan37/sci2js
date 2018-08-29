/* autogenerated from "macros/NonLinear/COSBLK_f.sci" */
function COSBLK_f() {
    COSBLK_f.prototype.define = function COSBLK_f() {
        var in1 = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["cosblk"]);
        this.model.in = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"COSBLK_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble([]),gr_i);
        return new BasicBlock(this.x);
    }
    COSBLK_f.prototype.details = function COSBLK_f() {
        return this.x;
    }
    COSBLK_f.prototype.get = function COSBLK_f() {
        alert("parameters cannot be modified");
    }
    COSBLK_f.prototype.set = function COSBLK_f() {
        return new BasicBlock(this.x);
    }
    COSBLK_f.prototype.get_popup_title = function COSBLK_f() {
        return;
    }
}
