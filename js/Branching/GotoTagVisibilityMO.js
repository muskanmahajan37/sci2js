/* autogenerated from "macros/Branching/GotoTagVisibilityMO.sci" */
function GotoTagVisibilityMO() {
    GotoTagVisibilityMO.prototype.define = function GotoTagVisibilityMO() {
        this.model = scicos_model();
        this.model.sim = new ScilabString("gototagvisibilitymo");
        this.model.in1 = [];
        this.model.in2 = [];
        this.model.out = [];
        this.model.out2 = [];
        this.model.evtin = [];
        this.model.intyp = new ScilabDouble(1);
        this.model.outtyp = new ScilabDouble(1);
        this.model.opar = list("A");
        this.model.blocktype = new ScilabString("c");
        this.model.firing = new ScilabBoolean(false);
        this.model.dep_ut = [false,false];
        exprs = "A";
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    GotoTagVisibilityMO.prototype.details = function GotoTagVisibilityMO() {
        return this.x;
    }
    GotoTagVisibilityMO.prototype.get = function GotoTagVisibilityMO() {
        var options = {
            tag:["GotoTag",this.tag],
        }
        return options;
    }
    GotoTagVisibilityMO.prototype.set = function GotoTagVisibilityMO() {
        this.tag = arguments[0]["tag"]
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.tag,exprs] = scicos_getvalue("Set parameters",["GotoTag"],list("str",-1),exprs);
            if (!ok) {
                break;
            }
            if (ok) {
                if (this.model.opar!=list(this.tag)) {
                    needcompile = 4;
                    y = needcompile;
                }
                graphics.exprs = exprs;
                this.model.opar = list(this.tag);
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
