/* autogenerated from "macros/Linear/DERIV.sci" */
function DERIV() {
    DERIV.prototype.define = function DERIV() {
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["deriv"]), new ScilabDouble([4]));
        this.model.in1 = new ScilabDouble([-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.blocktype = new ScilabString(["x"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var exprs = [];
        var gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    DERIV.prototype.details = function DERIV() {
        return this.x;
    }
    DERIV.prototype.get = function DERIV() {
        var options = {
        }
        return options;
    }
    DERIV.prototype.set = function DERIV() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
