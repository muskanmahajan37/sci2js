/* autogenerated from "macros/Events/EVTGEN_f.sci" */
function EVTGEN_f() {
    EVTGEN_f.prototype.define = function EVTGEN_f() {
        this.tt = 0;
        this.model = scicos_model();
        this.model.sim = new ScilabString("trash");
        this.model.evtout = new ScilabDouble(1);
        this.model.blocktype = new ScilabString("d");
        this.model.firing = new ScilabDouble(this.tt);
        this.model.dep_ut = [false,false];
        exprs = string(this.tt);
        gr_i = [];
        this.x = standard_define([3,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    EVTGEN_f.prototype.details = function EVTGEN_f() {
        return this.x;
    }
    EVTGEN_f.prototype.get = function EVTGEN_f() {
        var options = {
            tt:["Event Time",this.tt],
        }
        return options;
    }
    EVTGEN_f.prototype.set = function EVTGEN_f() {
        this.tt = parseFloat(arguments[0]["tt"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.tt,exprs] = scicos_getvalue("Set Event time",["Event Time"],list("vec",1),exprs);
            if (!ok) {
                break;
            }
            graphics.exprs = exprs;
            if (this.model.firing!=this.tt) {
                this.model.firing = new ScilabDouble(this.tt);
            }
            this.x.graphics = graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
