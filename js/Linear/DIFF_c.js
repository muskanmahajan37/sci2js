/* autogenerated from "macros/Linear/DIFF_c.sci" */
function DIFF_c() {
    DIFF_c.prototype.define = function DIFF_c() {
        x0 = [[0],[0]];
        model = scicos_model();
        model.sim = list("diffblk_c",10004);
        model.in1 = 1;
        model.out = 1;
        model.state = x0;
        model.blocktype = "c";
        model.dep_ut = [false,true];
        exprs = [[strcat(sci2exp(x0[1-1]))],[strcat(sci2exp(x0[2-1]))]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
    }
    DIFF_c.prototype.details = function DIFF_c() {
        return this.x;
    }
    DIFF_c.prototype.get = function DIFF_c() {
    }
    DIFF_c.prototype.set = function DIFF_c() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            ask_again = false;
            [ok,x0,xd0,exprs] = scicos_getvalue("Set continuous linear system parameters",[["Initial state"],["Initial Derivative"]],list("vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            x0 = x0.slice();
            N = size(x0,"*");
            xd0 = xd0.slice();
            Nxd = size(xd0,"*");
            if ((N!=Nxd)) {
                message("Incompatible sizes: states and their derivatives should have the same size ");
                ask_again = true;
            }
            if ((N<=0&&!ask_again)) {
                x_message("number of states must be > 0 ");
                ask_again = true;
            }
            if (!ask_again) {
                graphics.exprs = exprs;
                model.state = [[x0],[xd0]];
                model.out = [N];
                model.in1 = N;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        this.x.model.firing = [];
    }
}
