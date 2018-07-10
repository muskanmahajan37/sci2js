/* autogenerated from "macros/Linear/GAIN_f.sci" */
function GAIN_f() {
    GAIN_f.prototype.define = function GAIN_f() {
        this.gain = 1;
        in1 = 1;
        out = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["gain"]);
        this.model.in1 = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.gain]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = [true,false];
        exprs = [[strcat(sci2exp(this.gain))],[strcat(sci2exp(in1))],[strcat(sci2exp(out))]];
        gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    GAIN_f.prototype.details = function GAIN_f() {
        return this.x;
    }
    GAIN_f.prototype.get = function GAIN_f() {
        var options = {
            gain:["Gain",this.gain],
        }
        return options;
    }
    GAIN_f.prototype.set = function GAIN_f() {
        this.gain = parseFloat(arguments[0]["gain"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.gain,exprs] = scicos_getvalue("Set gain block parameters",["Gain"],list("mat",[-1,-1]),exprs[1-1]);
            if (!ok) {
                break;
            }
            if (this.gain==[]) {
                message("Gain must have at least one element");
            } else {
                [out,in1] = size(this.gain);
                [this.model,graphics,ok] = check_io(this.model,graphics,in1,out,[],[]);
                if (ok) {
                    graphics.exprs = exprs;
                    this.model.rpar = this.gain.slice();
                    this.x.graphics = graphics;
                    this.x.model = this.model;
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
