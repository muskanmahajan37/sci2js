/* autogenerated from "macros/Sources/RAMP.sci" */
function RAMP() {
    RAMP.prototype.define = function RAMP() {
        this.slope = 0;
        this.iout = 0;
        this.stt = 0;
        var rpar = [[this.slope],[this.stt],[this.iout]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["ramp"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble(rpar);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.nmode = new ScilabDouble([1]);
        this.model.nzcross = new ScilabDouble([1]);
        this.model.dep_ut = new ScilabBoolean([false,true]);
        this.exprs = [string(rpar)];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RAMP\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    RAMP.prototype.details = function RAMP() {
        return this.x;
    }
    RAMP.prototype.get = function RAMP() {
        var options = {
            slope:["Slope",this.slope],
            stt:["Start Time",this.stt],
            iout:["Initial Value",this.iout],
        }
        return options;
    }
    RAMP.prototype.set = function RAMP() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.slope = parseFloat(arguments[0]["slope"]);
            this.stt = parseFloat(arguments[0]["stt"]);
            this.iout = parseFloat(arguments[0]["iout"]);
            if (!ok) {
                break;
            }
            if (this.stt<0) {
                block_parameter_error(msprintf("Wrong value for \'Start Time\' parameter: %e.",this.stt),"Null or positive integer expected.");
            } else {
                this.model.rpar = new ScilabDouble([this.slope],[this.stt],[this.iout]);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
