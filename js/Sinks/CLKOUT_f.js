/* autogenerated from "macros/Sinks/CLKOUT_f.sci" */
function CLKOUT_f() {
    CLKOUT_f.prototype.define = function CLKOUT_f() {
        this.prt = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["output"]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.ipar = new ScilabDouble([this.prt]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = string(this.prt);
        this.x = new standard_define(new ScilabDouble([1,1]),this.model,new ScilabString([this.exprs])," ");
        return new BasicBlock(this.x);
    }
    CLKOUT_f.prototype.details = function CLKOUT_f() {
        return this.x;
    }
    CLKOUT_f.prototype.get = function CLKOUT_f() {
        alert("parameters cannot be modified");
    }
    CLKOUT_f.prototype.set = function CLKOUT_f() {
        this.exprs = this.graphics.exprs;
        this.exprs = this.exprs[1-1];
        while (true) {
            var ok = true;
            this.prt = parseFloat(arguments[0]["prt"]);
            if (!ok) {
                break;
            }
            this.prt = int(this.prt);
            if (this.prt<=0) {
                message("Port number must be a positive integer");
            } else {
                this.model.ipar = new ScilabDouble([this.prt]);
                this.model.evtin = new ScilabDouble([1]);
                this.model.firing = new ScilabDouble([]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
