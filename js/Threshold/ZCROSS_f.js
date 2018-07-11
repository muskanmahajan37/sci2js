/* autogenerated from "macros/Threshold/ZCROSS_f.sci" */
function ZCROSS_f() {
    ZCROSS_f.prototype.define = function ZCROSS_f() {
        var rpar = [[-1],[-1],[0],[0]];
        this.in1 = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["zcross"]), new ScilabDouble([1]));
        this.model.in1 = new ScilabDouble([this.in1]);
        this.model.nzcross = new ScilabDouble([this.in1]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([-1],[-1],[0],[0]);
        this.model.blocktype = new ScilabString(["z"]);
        this.model.firing = new ScilabDouble([-1]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var exprs = strcat(sci2exp(this.in1));
        var gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    ZCROSS_f.prototype.details = function ZCROSS_f() {
        return this.x;
    }
    ZCROSS_f.prototype.get = function ZCROSS_f() {
        var options = {
        }
        return options;
    }
    ZCROSS_f.prototype.set = function ZCROSS_f() {
        this.in1 = parseFloat(arguments[0]["in1"])
        this.x = arg1;
        var graphics = arg1.graphics;
        var exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.in1,exprs] = scicos_getvalue([["Set Zero-Crossing parameters"],["All surfaces must cross together"]],"Input size",list("vec",1),exprs);
            if (!ok) {
                break;
            }
            this.in1 = int(this.in1);
            if (this.in1<=0) {
                message("Block must have at least one input");
            } else {
                var kk = 0;
                for (jj=1;jj<=this.in1;jj+=1) {
                    var kk = kk+2^(this.in1+jj-1);
                }
                this.model.rpar = new ScilabDouble([-ones(kk,1)],[zeros(2^(2*this.in1)-kk,1)]);
                graphics.exprs = exprs;
                this.model.in1 = new ScilabDouble([this.in1]);
                this.model.nzcross = new ScilabDouble([this.in1]);
                this.model.firing = new ScilabDouble([-1]);
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
