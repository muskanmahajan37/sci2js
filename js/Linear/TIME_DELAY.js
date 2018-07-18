/* autogenerated from "macros/Linear/TIME_DELAY.sci" */
function TIME_DELAY() {
    TIME_DELAY.prototype.define = function TIME_DELAY() {
        var nin = 1;
        this.T = 1;
        this.init = 0;
        this.N = 1024;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["time_delay"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([nin]);
        this.model.out = new ScilabDouble([nin]);
        this.model.rpar = new ScilabDouble([this.T,this.init]);
        this.model.ipar = new ScilabDouble([this.N]);
        this.model.blocktype = new ScilabString(["x"]);
        this.model.dep_ut = new ScilabBoolean([false,true]);
        this.exprs = [[string(this.T)],[string(this.init)],[string(this.N)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"TIME_DELAY\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([3.5,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    TIME_DELAY.prototype.details = function TIME_DELAY() {
        return this.x;
    }
    TIME_DELAY.prototype.get = function TIME_DELAY() {
        var options = {
            T:["Delay",this.T],
            init:["initial input",this.init],
            N:["Buffer size",this.N],
        }
        return options;
    }
    TIME_DELAY.prototype.set = function TIME_DELAY() {
        this.exprs = this.graphics.exprs;
        var nin = this.model.in[1-1];
        while (true) {
            var ok = true;
            this.T = parseFloat(arguments[0]["T"]);
            this.init = parseFloat(arguments[0]["init"]);
            this.N = parseFloat(arguments[0]["N"]);
            if (!ok) {
                break;
            }
            if (this.N<2) {
                message("Buffer must be larger than 2");
                var ok = false;
            }
            if (this.T<=0) {
                message("Delay must be positive");
                var ok = false;
            }
            if (ok) {
                var tmpvar0 = check_io(this.model,this.graphics,[-1],-1,[],[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.rpar = new ScilabDouble([this.T],[this.init]);
                this.model.ipar = new ScilabDouble([this.N]);
                this.model.dep_ut = new ScilabBoolean([false,true]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
