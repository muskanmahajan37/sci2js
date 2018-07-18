/* autogenerated from "macros/Sources/GENSQR_f.sci" */
function GENSQR_f() {
    GENSQR_f.prototype.define = function GENSQR_f() {
        this.Amplitude = 1;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["gensqr"]);
        this.model.out = new ScilabDouble([1]);
        this.model.out2 = new ScilabDouble([1]);
        this.model.outtyp = new ScilabDouble([1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([this.Amplitude]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = string(this.Amplitude);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"GENSQR_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabString([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    GENSQR_f.prototype.details = function GENSQR_f() {
        return this.x;
    }
    GENSQR_f.prototype.get = function GENSQR_f() {
        var options = {
            Amplitude:["Amplitude",this.Amplitude],
        }
        return options;
    }
    GENSQR_f.prototype.set = function GENSQR_f() {
        this.exprs = this.graphics.exprs;
        if (size(this.exprs,"*")==2) {
            this.exprs = this.exprs[2-1];
        }
        while (true) {
            var ok = true;
            this.Amplitude = parseFloat(arguments[0]["Amplitude"]);
            if (!ok) {
                break;
            }
            this.graphics.exprs = new ScilabDouble([this.exprs]);
            this.model.dstate = new ScilabDouble([this.Amplitude]);
            this.model.out2 = new ScilabDouble([1]);
            this.model.outtyp = new ScilabDouble([1]);
            this.x.graphics = this.graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
