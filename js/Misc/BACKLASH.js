/* autogenerated from "macros/Misc/BACKLASH.sci" */
function BACKLASH() {
    BACKLASH.prototype.define = function BACKLASH() {
        var exprs = [["0"],["1"],["1"]];
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["backlash"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([1]);
        this.model.out = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([0],[1]);
        this.model.nzcross = new ScilabDouble([2]);
        this.model.blocktype = new ScilabString(["c"]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"BACKLASH\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble(exprs),gr_i);
        return new BasicBlock(this.x);
    }
    BACKLASH.prototype.details = function BACKLASH() {
        return this.x;
    }
    BACKLASH.prototype.get = function BACKLASH() {
        var exprs = this.graphics.exprs;
        var rpar = this.model.rpar;
        this.set_param_popup_title = "Set backlash parameters";
        var options = {
            ini:["initial output",this.ini],
            gap:["gap",this.gap],
            zcr:["use zero-crossing (0:no, 1:yes)",this.zcr],
        }
        return options;
    }
    BACKLASH.prototype.set = function BACKLASH() {
        var exprs = this.graphics.exprs;
        var rpar = this.model.rpar;
        while (true) {
            var ok = true;
            this.ini = arguments[0]["ini"];
            this.gap = arguments[0]["gap"];
            this.zcr = arguments[0]["zcr"];
            var exprs = [arguments[0]["ini"], arguments[0]["gap"], arguments[0]["zcr"]];
            if (!ok) {
                break;
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble([exprs]);
                rpar[1-1] = this.ini;
                rpar[2-1] = this.gap;
                if (this.zcr!=0) {
                    this.model.nzcross = new ScilabDouble([2]);
                } else {
                    this.model.nzcross = new ScilabDouble([0]);
                }
                this.model.rpar = new ScilabDouble(rpar);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
    BACKLASH.prototype.get_popup_title = function BACKLASH() {
        return this.set_param_popup_title;
    }
}
