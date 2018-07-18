/* autogenerated from "macros/Branching/CLKGotoTagVisibility.sci" */
function CLKGotoTagVisibility() {
    CLKGotoTagVisibility.prototype.define = function CLKGotoTagVisibility() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["clkgototagvisibility"]);
        this.model.in = new ScilabDouble([]);
        this.model.in2 = new ScilabDouble([]);
        this.model.out = new ScilabDouble([]);
        this.model.out2 = new ScilabDouble([]);
        this.model.evtin = new ScilabDouble([]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.opar = list(new ScilabString(["A"]));
        this.model.blocktype = new ScilabString(["c"]);
        this.model.firing = new ScilabBoolean([false]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = "A";
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CLKGotoTagVisibility\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    CLKGotoTagVisibility.prototype.details = function CLKGotoTagVisibility() {
        return this.x;
    }
    CLKGotoTagVisibility.prototype.get = function CLKGotoTagVisibility() {
        var options = {
            tag:["GotoTag",this.tag],
        }
        return options;
    }
    CLKGotoTagVisibility.prototype.set = function CLKGotoTagVisibility() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.tag = arguments[0]["tag"];
            if (!ok) {
                break;
            }
            if (ok) {
                if (this.model.opar!=list(this.tag)) {
                    var needcompile = 4;
                    var y = needcompile;
                }
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.opar = list(new ScilabDouble([this.tag]));
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
