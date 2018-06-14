/* autogenerated from "macros/NonLinear/EXPBLK_f.sci" */
function EXPBLK_f() {
EXPBLK_f.prototype.get = function EXPBLK_f() {
}
EXPBLK_f.prototype.set = function EXPBLK_f() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
if (size(exprs,"*")==2) {
exprs=exprs(2);
}
while (true) {
[ok,a,exprs]=scicos_getvalue("Set a^u  block parameters","a (>0)",list("vec",1),exprs);
if (!ok) {
break
}
if (or(a<=0)) {
message("a^u : a must be positive");
} else {
graphics.exprs=exprs;
model.rpar=a;
x.graphics=graphics;
x.model=model;
break
}
}
}
EXPBLK_f.prototype.define = function EXPBLK_f() {
in1=1;
a=%e;
model=scicos_model();
model.sim="expblk";
model.in=-1;
model.out=-1;
model.rpar=a;
model.blocktype="c";
model.dep_ut=[true,None];
exprs=["%e"];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
EXPBLK_f.prototype.details = function EXPBLK_f() {
}
}
