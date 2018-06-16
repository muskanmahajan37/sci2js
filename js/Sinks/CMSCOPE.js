/* autogenerated from "macros/Sinks/CMSCOPE.sci" */
function CMSCOPE() {
CMSCOPE.prototype.get = function CMSCOPE() {
}
CMSCOPE.prototype.set = function CMSCOPE() {
x=arg1;
graphics=arg1.graphics;
exprs=graphics.exprs;
model=arg1.model;
while (true) {
[ok,in1,clrs,win,wpos,wdim,ymin,ymax,per,N,heritance,nom,exprs]=scicos_getvalue("Set Scope parameters",["Input ports sizes","Drawing colors (>0) or mark (<0)","Output window number (-1 for automatic)","Output window position","Output window sizes","Ymin vector","Ymax vector","Refresh period","Buffer size","Accept herited events 0/1","Name of Scope (label&Id)"],list("vec",-1,"vec",-1,"vec",1,"vec",-1,"vec",-1,"vec","size(%1,\'*\')","vec","size(%1,\'*\')","vec","size(%1,\'*\')","vec",1,"vec",1,"str",1),exprs);
if (!ok) {
break
}
mess=[];
if (size(in1,"*")<=0) {
mess=[mess,"Block must have at least one input port"," "];
ok=None;
}
if (min(in1)<=0) {
mess=[mess,"Port sizes must be positive"," "];
ok=None;
}
if (size(clrs,"*")<sum(in1)) {
mess=[mess,"Not enough colors defined (at least "+string(sum(in1))+")"," "];
ok=None;
}
if (size(wpos,"*")!=0&&size(wpos,"*")!=2) {
mess=[mess,"Window position must be [] or a 2 vector"," "];
ok=None;
}
if (size(wdim,"*")!=0&&size(wdim,"*")!=2) {
mess=[mess,"Window dim must be [] or a 2 vector"," "];
ok=None;
}
if (win<-1) {
mess=[mess,"Window number can\'t be  < -1"," "];
ok=None;
}
if (size(per,"*")!=size(ymin,"*")) {
mess=[mess,"Size of Refresh Period must equal size of Ymin/Ymax vector"," "];
ok=None;
}
for (i=1;i<=size(per,"*");i+=1) {
if ((per(i)<=0)) {
mess=[mess,"Refresh Period must be positive"," "];
ok=None;
}
}
if (N<2) {
mess=[mess,"Buffer size must be at least 2"," "];
ok=None;
}
if (or(ymin>=ymax)) {
mess=[mess,"Ymax must be greater than Ymin"," "];
ok=None;
}
if (!or(heritance==[0,1])) {
mess=[mess,"Accept herited events must be 0 or 1"," "];
ok=None;
}
if (!ok) {
message(["Some specified values are inconsistent:"," ",mess]);
}
if (ok) {
in1=in1.slice();
a=size(in1,1);
in2=ones(a,1);
[model,graphics,ok]=set_io(model,graphics,list([in1,in2],ones(a,1)),list(),ones(1-heritance,1),[]);
}
if (ok) {
if (wpos==[]) {
wpos=[-1,-1];
}
if (wdim==[]) {
wdim=[-1,-1];
}
if (ok) {
period=transpose(per.slice());
yy=[transpose(ymin.slice()),transpose(ymax.slice())];
rpar=[0,period.slice(),yy.slice()];
clrs=clrs.slice(1-1,sum(in1));
ipar=[win,size(in1,"*"),N,wpos.slice(),wdim.slice(),in1.slice(),clrs.slice(),heritance];
model.evtin=ones(1-heritance,1);
model.dstate=[];
model.rpar=rpar;
model.ipar=ipar;
model.label=nom;
graphics.id=nom;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
}
CMSCOPE.prototype.define = function CMSCOPE() {
win=-1;
in1=[1,1];
wdim=[-1,-1];
wpos=[-1,-1];
clrs=[1,3,5,7,9,11,13,15];
N=20;
ymin=[-1,-5];
ymax=[1,5];
per=[30,30];
yy=[transpose(ymin.slice()),transpose(ymax.slice())];
period=transpose(per.slice());
model=scicos_model();
model.sim=list("cmscope",4);
model.in1=in1;
model.in2=[1,1];
model.intyp=[1,1];
model.evtin=1;
model.rpar=[0,period.slice(),yy.slice()];
model.ipar=[win,size(in1,"*"),N,wpos.slice(),wdim.slice(),in1.slice(),clrs.slice(1-1,sum(in1))];
model.blocktype="c";
model.dep_ut=[true,None];
exprs=[strcat(string(in1)," "),strcat(string(clrs)," "),string(win),sci2exp([]),sci2exp([]),strcat(string(ymin)," "),strcat(string(ymax)," "),strcat(string(per)," "),string(N),string(0),emptystr()];
gr_i=[];
x=standard_define([2,2],model,exprs,gr_i);
}
CMSCOPE.prototype.details = function CMSCOPE() {
}
}
