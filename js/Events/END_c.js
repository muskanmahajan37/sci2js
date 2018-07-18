/* autogenerated from "macros/Events/END_c.sci" */
function END_c() {
    END_c.prototype.define = function END_c() {
        this.tf = 100000000;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["scicosexit"]), new ScilabDouble([4]));
        this.model.evtin = new ScilabDouble([1]);
        this.model.evtout = new ScilabDouble([1]);
        this.model.firing = new ScilabDouble([this.tf]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = string(this.tf);
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"END_c\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabString([this.exprs]),this.gr_i);
        return new BasicBlock(this.x);
    }
    END_c.prototype.details = function END_c() {
        return this.x;
    }
    END_c.prototype.get = function END_c() {
        var options = {
            tf:["Final simulation time",this.tf],
        }
        return options;
    }
    END_c.prototype.set = function END_c() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.tf = parseFloat(arguments[0]["tf"]);
            if (!ok) {
                break;
            }
            if (ok) {
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.model.firing = new ScilabDouble([this.tf]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
