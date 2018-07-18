/* autogenerated from "macros/Linear/SAMPHOLD_m.sci" */
function SAMPHOLD_m() {
    SAMPHOLD_m.prototype.define = function SAMPHOLD_m() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["samphold4_m"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([-1]);
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.out2 = new ScilabDouble([-2]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var label = [sci2exp(1)];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SAMPHOLD_m\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString(label),this.gr_i);
        return new BasicBlock(this.x);
    }
    SAMPHOLD_m.prototype.details = function SAMPHOLD_m() {
        return this.x;
    }
    SAMPHOLD_m.prototype.get = function SAMPHOLD_m() {
        var options = {
            it:["Datatype(1=real double 2=Complex 3=int32 ...)",this.it],
        }
        return options;
    }
    SAMPHOLD_m.prototype.set = function SAMPHOLD_m() {
        this.x.model.firing = [];
        var label = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.it = arguments[0]["it"];
            if (!ok) {
                break;
            }
            if (((this.it<1)||(this.it>8))) {
                message("Datatype is not supported");
                var ok = false;
            }
            if (ok) {
                var in1 = [this.model.in,this.model.in2];
                var tmpvar0 = set_io(this.model,this.graphics,list(in1,this.it),list(in1,this.it),1,[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                if (ok) {
                    this.graphics.exprs = new ScilabDouble([this.exprs]);
                    break;
                }
            }
        }
        return new BasicBlock(this.x);
    }
}
