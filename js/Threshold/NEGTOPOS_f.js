/* autogenerated from "macros/Threshold/NEGTOPOS_f.sci" */
function NEGTOPOS_f() {
    NEGTOPOS_f.prototype.define = function NEGTOPOS_f() {
        model = scicos_model();
        model.sim = list("zcross",1);
        model.nzcross = 1;
        model.in1 = 1;
        model.evtout = 1;
        model.rpar = [[-1],[-1],[0],[-1]];
        model.blocktype = "z";
        model.firing = -1;
        model.dep_ut = [true,false];
        gr_i = [];
        this.x = standard_define([2,2],model,[],gr_i);
    }
    NEGTOPOS_f.prototype.details = function NEGTOPOS_f() {
        return this.x;
    }
    NEGTOPOS_f.prototype.get = function NEGTOPOS_f() {
    }
    NEGTOPOS_f.prototype.set = function NEGTOPOS_f() {
        this.x = arg1;
        this.x.model.firing = -1;
    }
}
