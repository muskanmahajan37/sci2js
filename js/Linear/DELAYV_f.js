/* autogenerated from "macros/Linear/DELAYV_f.sci" */
function DELAYV_f() {
    DELAYV_f.prototype.define = function DELAYV_f() {
        this.nin = 1;
        var z0 = zeros(11,1);
        this.zz0 = z0.slice(1-1,$-1);
        this.T = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["delayv"]), new ScilabDouble([1]));
        this.model.in = new ScilabDouble([this.nin],[1]);
        this.model.out = new ScilabDouble([this.nin]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1],[1]);
        this.model.dstate = new ScilabDouble([z0]);
        this.model.rpar = new ScilabDouble([this.T/(size(this.zz0,"*"))]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([0,-1]);
        this.model.dep_ut = new ScilabBoolean([true,false]);
        this.exprs = [[string(this.nin)],[strcat(string(z0.slice(1-1,$-1)),";")],[string(this.T)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"DELAYV_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    DELAYV_f.prototype.details = function DELAYV_f() {
        return this.x;
    }
    DELAYV_f.prototype.get = function DELAYV_f() {
        var options = {
            nin:["Number of inputs",this.nin],
            zz0:["Register initial condition",this.zz0],
            T:["Max delay",this.T],
        }
        return options;
    }
    DELAYV_f.prototype.set = function DELAYV_f() {
        this.exprs = this.graphics.exprs;
        this.nin = this.model.in[1-1];
        var z0 = this.model.dstate;
        this.zz0 = z0.slice(1-1,$-1);
        var told = z0[$-1];
        while (true) {
            var ok = true;
            this.nin = parseFloat(arguments[0]["nin"]);
            this.zz0 = inverse(arguments[0]["zz0"]);
            this.T = parseFloat(arguments[0]["T"]);
            if (!ok) {
                break;
            }
            if (size(this.zz0,"*")<2) {
                message("Register length must be at least 2");
                var ok = false;
            }
            if (this.T<=0) {
                message("Delay must be positive");
                var ok = false;
            }
            if (ok) {
                var tmpvar0 = check_io(this.model,this.graphics,[[this.nin],[1]],this.nin,1,[[1],[1]]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.dstate = new ScilabDouble([this.zz0.slice()],[told]);
                this.model.rpar = new ScilabDouble([this.T/(size(this.zz0,"*"))]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
