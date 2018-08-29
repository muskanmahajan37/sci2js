/* autogenerated from "macros/Sources/RAND_f.sci" */
function RAND_f() {
    RAND_f.prototype.define = function RAND_f() {
        this.a = 0;
        this.b = 1;
        var dt = 0;
        var out = 1;
        this.flag = 0;
        this.model = scicos_model();
        this.model.sim = new ScilabString(["rndblk"]);
        this.model.out = new ScilabDouble([out]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.dstate = new ScilabDouble([int(rand()*(10^7-1))],[0*this.a.slice()]);
        this.model.rpar = new ScilabDouble([this.a.slice()],[this.b.slice()]);
        this.model.ipar = new ScilabDouble([this.flag]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        var exprs = [[string(this.flag)],[sci2exp(this.a.slice())],[sci2exp(this.b.slice())],[string(this.model.dstate[1-1])]];
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"RAND_f\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3,2]),this.model,new ScilabDouble(exprs),gr_i);
        return new BasicBlock(this.x);
    }
    RAND_f.prototype.details = function RAND_f() {
        return this.x;
    }
    RAND_f.prototype.get = function RAND_f() {
        var exprs = this.graphics.exprs;
        if (size(exprs,"*")==5) {
            var exprs = exprs.slice(1-1,3);
        }
        if (size(exprs,"*")==3) {
            var exprs = [[exprs],[string(this.model.dstate[1-1])]];
        }
        this.set_param_popup_title = "Set Random generator block parameters";
        var options = {
            flag:["flag",this.flag],
            a:["A",this.a],
            b:["B",this.b],
            seed_c:["seed",this.seed_c],
        }
        return options;
    }
    RAND_f.prototype.set = function RAND_f() {
        var exprs = this.graphics.exprs;
        if (size(exprs,"*")==5) {
            var exprs = exprs.slice(1-1,3);
        }
        if (size(exprs,"*")==3) {
            var exprs = [[exprs],[string(this.model.dstate[1-1])]];
        }
        while (true) {
            var ok = true;
            this.flag = parseFloat(arguments[0]["flag"]);
            this.a = parseFloat(arguments[0]["a"]);
            this.b = parseFloat(arguments[0]["b"]);
            this.seed_c = arguments[0]["seed_c"];
            var exprs = [arguments[0]["flag"], arguments[0]["a"], arguments[0]["b"], arguments[0]["seed_c"]];
            if (!ok) {
                break;
            }
            if (this.flag!=0&&this.flag!=1) {
                message("flag must be equal to 1 or 0");
                throw "user error";
            } else {
                var nout = size(this.a,"*");
                this.graphics.exprs = new ScilabDouble(exprs);
                this.model.out = new ScilabDouble([nout]);
                this.model.ipar = new ScilabDouble([this.flag]);
                this.model.rpar = new ScilabDouble([this.a.slice()],[this.b.slice()]);
                this.model.dstate = new ScilabDouble([this.seed_c],[0*this.a.slice()]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
    RAND_f.prototype.get_popup_title = function RAND_f() {
        return this.set_param_popup_title;
    }
}
