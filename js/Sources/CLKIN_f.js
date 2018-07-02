/* autogenerated from "macros/Sources/CLKIN_f.sci" */
function CLKIN_f() {
    CLKIN_f.prototype.define = function CLKIN_f() {
        this.prt = 1;
        model = scicos_model();
        model.sim = "input";
        model.evtout = 1;
        model.ipar = this.prt;
        model.blocktype = "d";
        model.firing = -1;
        model.dep_ut = [false,false];
        exprs = string(this.prt);
        this.x = standard_define([1,1],model,exprs," ");
        return new BasicBlock(this.x);
    }
    CLKIN_f.prototype.details = function CLKIN_f() {
        return this.x;
    }
    CLKIN_f.prototype.get = function CLKIN_f() {
        var options = {
        }
        return options;
    }
    CLKIN_f.prototype.set = function CLKIN_f() {
        this.prt = parseFloat((arguments[0]["prt"]))
        this.x = arg1;
        graphics = arg1.graphics;
        model = arg1.model;
        exprs = graphics.exprs;
        exprs = exprs[1-1];
        while (true) {
            [ok,this.prt,exprs] = scicos_getvalue("Set Event Input block parameters","Port number",list("vec",1),exprs);
            this.prt = int(this.prt);
            if (!ok) {
                break;
            }
            if (this.prt<=0) {
                message("Port number must be a positive integer");
            } else {
                model.ipar = this.prt;
                model.evtout = 1;
                model.firing = -1;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
