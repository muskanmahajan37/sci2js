/* autogenerated from "macros/Linear/SAMPHOLD.sci" */
function SAMPHOLD() {
    SAMPHOLD.prototype.define = function SAMPHOLD() {
        in1 = -1;
        model = scicos_model();
        model.sim = list("samphold4",4);
        model.in1 = -1;
        model.out = -1;
        model.evtin = 1;
        model.blocktype = "d";
        model.dep_ut = [true,false];
        gr_i = [];
        this.x = standard_define([2,2],model," ",gr_i);
    }
    SAMPHOLD.prototype.details = function SAMPHOLD() {
        return this.x;
    }
    SAMPHOLD.prototype.get = function SAMPHOLD() {
    }
    SAMPHOLD.prototype.set = function SAMPHOLD() {
        this.x = arg1;
        this.x.model.firing = [];
    }
}
