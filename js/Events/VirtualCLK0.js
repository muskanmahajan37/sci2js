/* autogenerated from "macros/Events/VirtualCLK0.sci" */
function VirtualCLK0() {
    VirtualCLK0.prototype.define = function VirtualCLK0() {
        model = scicos_model();
        model.sim = "vrtclk0";
        model.evtin = 1;
        model.opar = list();
        model.ipar = [];
        model.blocktype = "d";
        model.firing = -1;
        model.dep_ut = [false,false];
        exprs = [];
        this.x = standard_define([2,2],model,exprs," ");
        return new BasicBlock(this.x);
    }
    VirtualCLK0.prototype.details = function VirtualCLK0() {
        return this.x;
    }
    VirtualCLK0.prototype.get = function VirtualCLK0() {
        var options = {
        }
        return options;
    }
    VirtualCLK0.prototype.set = function VirtualCLK0() {
        this.x = arg1;
        return new BasicBlock(this.x);
    }
}
