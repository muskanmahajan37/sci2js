/* autogenerated from "macros/Sources/IN_f.sci" */
function IN_f() {
IN_f.prototype.get = function IN_f() {
}
IN_f.prototype.set = function IN_f() {
x=arg1;
graphics=arg1.graphics;
model=arg1.model;
exprs=graphics.exprs;
if (size(exprs,"*")==2) {
exprs=exprs[1-1];
}
if (size(exprs,"*")==1) {
exprs=[exprs[1-1],"[-1 -2]","-1"];
}
while (true) {
[ok,prt,otsz,ot,exprs]=getvalue(_("Set Input block parameters"),[_("Port number"),_("Outport size ([-1 -2] for inherit)"),_("Outport Type (-1 for inherit)")],list("vec",1,"vec",-1,"vec",1),exprs);
if (!ok) {
break
}
prt=int(prt);
if (prt<=0) {
message(_("Port number must be a positive integer"));
} else if (!isequal(size(otsz,"*"),2)) {
message(_("Outport Size must be a 2 elements vector"));
} else if (((ot<1||ot>9)&&(ot!=-1))) {
message(_("Outport type must be a number between 1 and 9, or -1 for inheritance."));
} else {
if (model.ipar!=prt) {
needcompile=4;
y=needcompile;
}
model.ipar=prt;
model.firing=[];
model.out=otsz(1);
model.out2=otsz(2);
model.outtyp=ot;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
IN_f.prototype.define = function IN_f() {
prt=1;
model=scicos_model();
model.sim="input";
model.out=-1;
model.out2=-2;
model.outtyp=-1;
model.ipar=prt;
model.blocktype="c";
model.dep_ut=[None,None];
exprs=sci2exp(prt);
gr_i=[];
x=standard_define([1,1],model,exprs,gr_i);
}
IN_f.prototype.details = function IN_f() {
}
}
