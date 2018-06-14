/* autogenerated from "macros/Misc/BACKLASH.sci" */
function BACKLASH() {
BACKLASH.prototype.get = function BACKLASH() {
}
BACKLASH.prototype.set = function BACKLASH() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
rpar=model.rpar;
while (true) {
[ok,ini,gap,zcr,exprs]=scicos_getvalue("Set backlash parameters",["initial output","gap","use zero-crossing (0:no, 1:yes)"],list("vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
if (ok) {
graphics.exprs=exprs;
rpar[1]=ini;
rpar[2]=gap;
if (zcr!=0) {
model.nzcross=2;
} else {
model.nzcross=0;
}
model.rpar=rpar;
x.graphics=graphics;
x.model=model;
break
}
}
}
BACKLASH.prototype.define = function BACKLASH() {
exprs=["0","1","1"];
model=scicos_model();
model.sim=list("backlash",4);
model.in=1;
model.out=1;
model.rpar=[0,1];
model.nzcross=2;
model.blocktype="c";
model.dep_ut=[true,None];
gr_i=[];
x=standard_define([3,2],model,exprs,gr_i);
}
BACKLASH.prototype.details = function BACKLASH() {
}
}
