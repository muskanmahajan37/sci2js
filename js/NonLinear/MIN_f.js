/* autogenerated from "macros/NonLinear/MIN_f.sci" */
function MIN_f() {
    MIN_f.prototype.define = function MIN_f() {
        var in1 = -1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["minblk"]);
        this.model.in = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([0],[0]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var exprs = sci2exp(in1);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"MIN_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString([exprs]),gr_i);
        return new BasicBlock(this.x);
    }
    MIN_f.prototype.details = function MIN_f() {
        return this.x;
    }
    MIN_f.prototype.get = function MIN_f() {
        alert("parameters cannot be modified");
    }
    MIN_f.prototype.set = function MIN_f() {
        return new BasicBlock(this.x);
    }
    MIN_f.prototype.get_popup_title = function MIN_f() {
        return;
    }
    MIN_f.prototype.getContainer = function MIN_f() { return new BasicBlock(this.x); }
}
