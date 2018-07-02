/* autogenerated from "macros/Branching/GotoTagVisibilityMO.sci" */
function GotoTagVisibilityMO() {
    GotoTagVisibilityMO.prototype.define = function GotoTagVisibilityMO() {
        model = scicos_model();
        model.sim = "gototagvisibilitymo";
        model.in1 = [];
        model.in2 = [];
        model.out = [];
        model.out2 = [];
        model.evtin = [];
        model.intyp = 1;
        model.outtyp = 1;
        model.opar = list("A");
        model.blocktype = "c";
        model.firing = false;
        model.dep_ut = [false,false];
        exprs = "A";
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
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
        this.tag = parseFloat((arguments[0]["tag"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.tag,exprs] = scicos_getvalue("Set parameters",["GotoTag"],list("str",-1),exprs);
            if (!ok) {
                break;
            }
            if (ok) {
                if (model.opar!=list(this.tag)) {
                    needcompile = 4;
                    y = needcompile;
                }
                graphics.exprs = exprs;
                model.opar = list(this.tag);
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
