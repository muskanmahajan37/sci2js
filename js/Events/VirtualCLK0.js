/* autogenerated from "macros/Events/VirtualCLK0.sci" */
function VirtualCLK0() {
    VirtualCLK0.prototype.define = function VirtualCLK0() {
        this.model = scicos_model();
        this.model.sim = new ScilabString(["vrtclk0"]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.opar = list();
        this.model.ipar = new ScilabDouble([]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = new ScilabDouble([-1]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        var exprs = [];
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(exprs)," ");
        return new BasicBlock(this.x);
    }
    VirtualCLK0.prototype.details = function VirtualCLK0() {
        return this.x;
    }
    VirtualCLK0.prototype.get = function VirtualCLK0() {
        alert("parameters cannot be modified");
    }
    VirtualCLK0.prototype.set = function VirtualCLK0() {
        return new BasicBlock(this.x);
    }
    VirtualCLK0.prototype.get_popup_title = function VirtualCLK0() {
        return;
    }
}
