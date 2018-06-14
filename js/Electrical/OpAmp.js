/* autogenerated from "macros/Electrical/OpAmp.sci" */
function OpAmp() {
OpAmp.prototype.get = function OpAmp() {
}
OpAmp.prototype.set = function OpAmp() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (None) {
[ok,OLGain,SatH,SatL,exprs]=scicos_getvalue("Set the Operational Amplifier parameters",["Open Loop Gain","Positive saturation voltage","Negative saturation voltage"],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
model.equations.parameters[2]=list(OLGain,SatH,SatL);
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
OpAmp.prototype.define = function OpAmp() {
S=[];
Z=[];
model=scicos_model();
model.sim="OpAmp";
model.blocktype="c";
model.dep_ut=[true,None];
mo=modelica();
mo.model=model.sim;
mo.inputs=["in_p","in_n"];
mo.outputs=["out"];
mo.parameters=list(S,Z);
model.equations=mo;
model.in=ones(size(mo.inputs,"*"),1);
model.out=ones(size(mo.outputs,"*"),1);
model.rpar=Z;
exprs=string(Z);
gr_i=[];
x=standard_define([3,5],model,exprs,gr_i);
x.graphics.in_implicit=["I","I"];
x.graphics.out_implicit=["I"];
}
OpAmp.prototype.details = function OpAmp() {
}
}
