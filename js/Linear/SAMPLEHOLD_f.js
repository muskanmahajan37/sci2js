/* autogenerated from "macros/Linear/SAMPLEHOLD_f.sci" */
function SAMPLEHOLD_f() {
    SAMPLEHOLD_f.prototype.define = function SAMPLEHOLD_f() {
        var in1 = -1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["samphold"]);
        this.model.in1 = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var gr_i = [];
        this.x = standard_define([2,2],this.model," ",gr_i);
        return new BasicBlock(this.x);
    }
    SAMPLEHOLD_f.prototype.details = function SAMPLEHOLD_f() {
        return this.x;
    }
    SAMPLEHOLD_f.prototype.get = function SAMPLEHOLD_f() {
        var options = {
        }
        return options;
    }
    SAMPLEHOLD_f.prototype.set = function SAMPLEHOLD_f() {
        this.x = arg1;
        this.x.model.firing = [];
        return new BasicBlock(this.x);
    }
}
