/* autogenerated from "macros/Electrical/PotentialSensor.sci" */
function PotentialSensor() {
PotentialSensor.prototype.get = function PotentialSensor() {
}
PotentialSensor.prototype.set = function PotentialSensor() {
x=arg1;
}
PotentialSensor.prototype.define = function PotentialSensor() {
model=scicos_model();
model.in=[1];
model.out=[1];
model.rpar=[];
model.sim="PotentialSensor";
model.blocktype="c";
model.dep_ut=[true,None];
mo=modelica();
mo.model="PotentialSensor";
mo.inputs="p";
mo.outputs=["v"];
model.equations=mo;
gr_i=[];
x=standard_define([2,2],model,"",list(gr_i,0));
x.graphics.in_implicit=["I"];
x.graphics.out_implicit=["E"];
}
PotentialSensor.prototype.details = function PotentialSensor() {
}
}
