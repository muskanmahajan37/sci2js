/* autogenerated from "macros/Linear/SOM_f.sci" */
function SOM_f() {
    SOM_f.prototype.define = function SOM_f() {
        var sgn = [[1],[1],[1]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["sum"]), new ScilabDouble([2]));
        this.model.in1 = new ScilabDouble([-1],[-1],[-1]);
        this.model.out = new ScilabDouble([-1]);
        this.model.rpar = new ScilabDouble(sgn);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabDouble([true,false]);
        var exprs = [[sci2exp(1)],[sci2exp(sgn)]];
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"SOM_f\",sz(1),sz(2));"]);
        this.x = standard_define([2,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    SOM_f.prototype.details = function SOM_f() {
        return this.x;
    }
    SOM_f.prototype.get = function SOM_f() {
        var options = {
        }
        return options;
    }
    SOM_f.prototype.set = function SOM_f() {
        this.x = arg1;
        this.graphics = arg1.graphics;
        this.model = arg1.model;
        var exprs = this.graphics.exprs;
        if (size(exprs,"*")==2) {
            var exprs = exprs[2-1];
        }
        if (size(exprs,"*")!=3) {
            var exprs = string(this.model.rpar);
        }
        if (this.graphics.flip) {
            var labs = ["down","left","up"];
        } else {
            var labs = ["down","right","up"];
        }
        var str = [["This sum block is obsolete","parameters cannot be modified. Please replace it with new sum block"],["and gain blocks in the linear palette"," ","Input ports are located at up, side and  down positions.","Current gains are:"]];
        var str = [[str],[(part(labs.slice(),1,7)+exprs.slice())]];
        message(str);
        return new BasicBlock(this.x);
    }
}
