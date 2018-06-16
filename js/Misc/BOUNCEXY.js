/* autogenerated from "macros/Misc/BOUNCEXY.sci" */
function BOUNCEXY() {
BOUNCEXY.prototype.get = function BOUNCEXY() {
}
BOUNCEXY.prototype.set = function BOUNCEXY() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
dstate=model.dstate;
while (true) {
[ok,clrs,siz,win,imode,xmin,xmax,ymin,ymax,exprs]=scicos_getvalue("Set Scope parameters",["colors","radii","window number (-1 for automatic)","animation mode (0,1)","Xmin","Xmax","Ymin","Ymax"],list("vec",-1,"vec",-1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
mess=[];
if (size(clrs,"*")!=size(siz,"*")) {
mess=[mess,"colors and radii must have equal size (number of balls)"," "];
ok=None;
}
if (win<-1) {
mess=[mess,"Window number cannot be inferior than -1"," "];
ok=None;
}
if (ymin>=ymax) {
mess=[mess,"Ymax must be greater than Ymin"," "];
ok=None;
}
if (xmin>=xmax) {
mess=[mess,"Xmax must be greater than Xmin"," "];
ok=None;
}
if (!ok) {
message(mess);
} else {
rpar=[xmin,xmax,ymin,ymax];
ipar=[win,imode,clrs.slice()];
z=[];
for (i=1;i<=size(clrs,"*");i+=1) {
z[6*(i-1)+1-1]=0;
z[6*(i-1)+2-1]=0;
z[6*(i-1)+3-1]=2*siz(i);
z[6*(i-1)+4-1]=2*siz(i);
z[6*(i-1)+5-1]=0.000;
z[6*(i-1)+6-1]=64.0*360.000;
}
model.dstate=z;
model.rpar=rpar;
model.ipar=ipar;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
BOUNCEXY.prototype.define = function BOUNCEXY() {
win=-1;
imode=1;
clrs=[1,2];
siz=[1,1];
xmin=-5;
xmax=5;
ymin=0;
ymax=15;
model=scicos_model();
model.sim=list("bouncexy",4);
model.in1=[-1,-1];
model.in2=[1,1];
model.intyp=[1,1];
model.evtin=1;
z=[];
for (i=1;i<=size(clrs,"*");i+=1) {
z[6*(i-1)+1-1]=0;
z[6*(i-1)+2-1]=0;
z[6*(i-1)+3-1]=2*siz(i);
z[6*(i-1)+4-1]=2*siz(i);
z[6*(i-1)+5-1]=0.000;
z[6*(i-1)+6-1]=64.0*360.000;
}
model.dstate=z;
model.rpar=[xmin,xmax,ymin,ymax];
model.ipar=[win,imode,clrs.slice()];
model.blocktype="d";
model.firing=[];
model.dep_ut=[None,None];
exprs=[strcat(sci2exp(clrs)),strcat(sci2exp(siz)),strcat(sci2exp(win)),strcat(sci2exp(1)),strcat(sci2exp(xmin)),strcat(sci2exp(xmax)),strcat(sci2exp(ymin)),strcat(sci2exp(ymax))];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
BOUNCEXY.prototype.details = function BOUNCEXY() {
}
}
