/* autogenerated from "macros/Linear/BIGSOM_f.sci" */
function BIGSOM_f() {
BIGSOM_f.prototype.get = function BIGSOM_f() {
}
BIGSOM_f.prototype.set = function BIGSOM_f() {
x=arg1;
graphics=arg1.graphics;
model=arg1.model;
exprs=graphics.exprs;
while (true) {
[ok,sgn,exprs]=scicos_getvalue("Set sum block parameters","Inputs ports signs/gain",list("vec",-1),exprs);
if (!ok) {
break
}
in1=-ones(size(sgn,"*"),1);
[model,graphics,ok]=check_io(model,graphics,in1,-1,[],[]);
if (ok) {
model.rpar=sgn.slice();
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
BIGSOM_f.prototype.define = function BIGSOM_f() {
sgn=[1,1];
model=scicos_model();
model.sim=list("sum",2);
model.in=[-1,-1];
model.out=-1;
model.rpar=sgn;
model.blocktype="c";
model.dep_ut=[true,None];
exprs=sci2exp(sgn);
gr_i=[];
x=standard_define([2,3],model,exprs,gr_i);
}
BIGSOM_f.prototype.details = function BIGSOM_f() {
}
}
