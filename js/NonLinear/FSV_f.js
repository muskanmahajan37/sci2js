/* autogenerated from "macros/NonLinear/FSV_f.sci" */
function FSV_f() {
    FSV_f.prototype.define = function FSV_f() {
        var in1 = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["fsv"]), new ScilabDouble([1]));
        this.model.in1 = new ScilabDouble([in1]);
        this.model.out = new ScilabDouble([in1]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var exprs = " ";
        var gr_i = [];
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    FSV_f.prototype.details = function FSV_f() {
        return this.x;
    }
    FSV_f.prototype.get = function FSV_f() {
        var options = {
        }
        return options;
    }
    FSV_f.prototype.set = function FSV_f() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
