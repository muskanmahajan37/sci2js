/* autogenerated from "macros/Sinks/CMATVIEW.sci" */
function CMATVIEW() {
CMATVIEW.prototype.get = function CMATVIEW() {
}
CMATVIEW.prototype.set = function CMATVIEW() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,colormap,cmin,cmax,exprs]=scicos_getvalue("Set Scope parameters",["ColorMap","Minimum level range","Maximum level range"],list("vec",-1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
mess=[];
if (cmax<=cmin) {
mess=[mess,"Error with minimum and maximum value"," "];
ok=None;
}
if (!ok) {
message(["Some specified values are inconsistent:"," ",mess]);
}
if (ok) {
size_c=size(colormap.slice(),1);
sol=inv([cmin,1,cmax,1])*[1,size_c/3];
alpha_c=sol(1);
beta_c=sol(2);
ipar=[cmin,cmax,size_c];
rpar=[alpha_c,beta_c,colormap.slice()];
model.ipar=ipar;
model.rpar=rpar;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
CMATVIEW.prototype.define = function CMATVIEW() {
cmin=0;
cmax=100;
size_c=25;
colormap=jetcolormap(size_c);
alpha_c=0.24;
beta_c=1;
model=scicos_model();
model.sim=list("cmatview",4);
model.in=-1;
model.in2=-2;
model.intyp=1;
model.evtin=1;
model.ipar=[cmin,cmax,size_c];
model.rpar=[alpha_c,beta_c,colormap.slice()];
model.blocktype="c";
model.dep_ut=[true,None];
exprs=[string("jetcolormap(25)"),string(cmin),string(cmax)];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
CMATVIEW.prototype.details = function CMATVIEW() {
}
}
