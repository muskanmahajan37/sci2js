/* autogenerated from "macros/Misc/DIFF_f.sci" */
function DIFF_f() {
    DIFF_f.prototype.define = function DIFF_f() {
        this.x0 = [[0],[0]];
        model = scicos_model();
        model.sim = list("diffblk",10001);
        model.in1 = 1;
        model.out = 1;
        model.state = this.x0;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        exprs = [[strcat(sci2exp(this.x0[1-1]))],[strcat(sci2exp(this.x0[2-1]))]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    DIFF_f.prototype.details = function DIFF_f() {
        return this.x;
    }
    DIFF_f.prototype.get = function DIFF_f() {
        var options = {
            x0:["Initial state",this.x0],
            xd0:["Initial Derivative",this.xd0],
        }
        return options;
    }
    DIFF_f.prototype.set = function DIFF_f() {
        this.x0 = parseFloat((arguments[0]["x0"]))
        this.xd0 = parseFloat((arguments[0]["xd0"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.x0,this.xd0,exprs] = scicos_getvalue("Set continuous linear system parameters",["Initial state","Initial Derivative"],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            graphics.exprs = exprs;
            model.state = [[this.x0.slice()],[this.xd0.slice()]];
            this.x.graphics = graphics;
            this.x.model = model;
            break;
        }
        this.x.model.firing = [];
        return new BasicBlock(this.x);
    }
}
