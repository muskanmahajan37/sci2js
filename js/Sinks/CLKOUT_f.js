/* autogenerated from "macros/Sinks/CLKOUT_f.sci" */
function CLKOUT_f() {
    CLKOUT_f.prototype.define = function CLKOUT_f() {
        prt = 1;
        model = scicos_model();
        model.sim = "output";
        model.evtin = 1;
        model.ipar = prt;
        model.blocktype = "d";
        model.firing = [];
        model.dep_ut = [false,false];
        exprs = string(prt);
        this.x = standard_define([1,1],model,exprs," ");
    }
    CLKOUT_f.prototype.details = function CLKOUT_f() {
        return this.x;
    }
    CLKOUT_f.prototype.get = function CLKOUT_f() {
    }
    CLKOUT_f.prototype.set = function CLKOUT_f() {
        this.x = arg1;
        graphics = arg1.graphics;
        model = arg1.model;
        exprs = graphics.exprs;
        exprs = exprs[1-1];
        while (true) {
            [ok,prt,exprs] = scicos_getvalue("Set Event Output block parameters","Port number",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            prt = int(prt);
            if (prt<=0) {
                message("Port number must be a positive integer");
            } else {
                model.ipar = prt;
                model.evtin = 1;
                model.firing = [];
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
    }
}
