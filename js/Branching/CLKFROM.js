/* autogenerated from "macros/Branching/CLKFROM.sci" */
function CLKFROM() {
    CLKFROM.prototype.define = function CLKFROM() {
        model = scicos_model();
        model.sim = "clkfrom";
        model.evtout = 1;
        model.opar = list("A");
        model.blocktype = "d";
        model.firing = -1;
        model.dep_ut = [false,false];
        exprs = "A";
        this.x = standard_define([2,1],model,exprs," ");
        this.x.graphics.id = "From";
        return new BasicBlock(this.x);
    }
    CLKFROM.prototype.details = function CLKFROM() {
        return this.x;
    }
    CLKFROM.prototype.get = function CLKFROM() {
        var options = {
        }
        return options;
    }
    CLKFROM.prototype.set = function CLKFROM() {
        this.tag = parseFloat((arguments[0]["tag"]))
        this.x = arg1;
        graphics = arg1.graphics;
        model = arg1.model;
        exprs = graphics.exprs;
        while (true) {
            [ok,this.tag,exprs] = scicos_getvalue("Set block parameters","Tag",list("str",-1),exprs);
            if (!ok) {
                break;
            }
            if (model.opar!=list(this.tag)) {
                needcompile = 4;
                y = needcompile;
            }
            model.opar = list(this.tag);
            model.evtout = 1;
            model.firing = -1;
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
