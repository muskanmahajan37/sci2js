/* autogenerated from "macros/NonLinear/ABSBLK_f.sci" */
function ABSBLK_f() {
    ABSBLK_f.prototype.define = function ABSBLK_f() {
        model = scicos_model();
        model.sim = list("absblk",1);
        model.in1 = -1;
        model.out = -1;
        model.blocktype = "c";
        model.dep_ut = [true,false];
        gr_i = [];
        this.x = standard_define([2,2],model,[],gr_i);
    }
    ABSBLK_f.prototype.details = function ABSBLK_f() {
        return this.x;
    }
    ABSBLK_f.prototype.get = function ABSBLK_f() {
    }
    ABSBLK_f.prototype.set = function ABSBLK_f() {
        this.x = arg1;
    }
}
