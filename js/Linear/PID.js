/* autogenerated from "macros/Linear/PID.sci" */
function PID() {
PID.prototype.get = function PID() {
}
PID.prototype.set = function PID() {
ppath=list(0,0,0);
for (i=1;i<=length(arg1.model.rpar.objs);i+=1) {
o=arg1.model.rpar.objs(i);
if (typeof(o)=="Link") {
from=arg1.model.rpar.objs(o.from(1));
to=arg1.model.rpar.objs(o.to(1));
if (from.gui=="GAINBLK") {
switch (to.gui) {
case "SUMMATION":
ppath[1-1]=o.from(1);
case "INTEGRAL_m":
ppath[2-1]=o.from(1);
case "DERIV":
ppath[3-1]=o.from(1);
}
} else if (to.gui=="GAINBLK") {
switch (from.gui) {
case "SUMMATION":
ppath[1-1]=o.to(1);
case "INTEGRAL_m":
ppath[2-1]=o.to(1);
case "DERIV":
ppath[3-1]=o.to(1);
}
}
if (and(ppath!=list(0,0,0))) {
break
}
}
}
newpar=list();
xx1=arg1.model.rpar.objs(ppath[1-1]);
exprs[1-1]=xx1.graphics.exprs(1);
p_old=xx1.model.rpar;
xx2=arg1.model.rpar.objs(ppath[2-1]);
exprs[2-1]=xx2.graphics.exprs(1);
i_old=xx2.model.rpar;
xx3=arg1.model.rpar.objs(ppath[3-1]);
exprs[3-1]=xx3.graphics.exprs(1);
d_old=xx3.model.rpar;
y=0;
while (true) {
[ok,p,i,d,exprs0]=scicos_getvalue("Set PID parameters",["Proportional","Integral","Derivation"],list("vec",-1,"vec",-1,"vec",-1),exprs);
if (!ok) {
break
}
if (ok) {
xx1.graphics.exprs=exprs0(1);
xx1.model.rpar=p;
xx2.graphics.exprs=exprs0(2);
xx2.model.rpar=i;
xx3.graphics.exprs=exprs0(3);
xx3.model.rpar=d;
arg1.model.rpar.objs[ppath[1-1]-1]=xx1;
arg1.model.rpar.objs[ppath[2-1]-1]=xx2;
arg1.model.rpar.objs[ppath[3-1]-1]=xx3;
break
}
}
needcompile=0;
if (!(p_old==p&&i_old==i&&d_old==d)) {
newpar[size(newpar)+1-1]=ppath[1-1];
newpar[size(newpar)+1-1]=ppath[2-1];
newpar[size(newpar)+1-1]=ppath[3-1];
needcompile=2;
}
x=arg1;
y=max(y,needcompile);
typ=newpar;
}
PID.prototype.define = function PID() {
scs_m=scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[600,450,0,0,600,450],Title=["PID"],tol=[0.0001,0.000001,1.000e-10,100001,0,0],tf=100000,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(true,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
scs_m.objs[1-1]=scicos_block(gui="INTEGRAL_m",graphics=scicos_graphics(orig=[318.304,183.11733],sz=[40,40],flip=true,theta=0,exprs=["0","0","0","1","-1"],pin=7,pout=9,pein=[],peout=[],gr_i=[],id="1/s",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("integral_func",4),in1=1,in2=1,intyp=1,out=1,out2=1,outtyp=1,evtin=[],evtout=[],state=0,dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[None,true],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[2-1]=scicos_block(gui="SUMMATION",graphics=scicos_graphics(orig=[387.97067,172.85067],sz=[40,60],flip=true,theta=0,exprs=["1","[1;1;1]"],pin=[10,9,11],pout=19,pein=[],peout=[],gr_i=[],id="",in_implicit=["E","E","E"],out_implicit="E"),model=scicos_model(sim=list("summation",4),in1=[-1,-1,-1],in2=[-2,-2,-2],intyp=[1,1,1],out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[1,1,1],opar=list(),blocktype="c",firing=[],dep_ut=[true,None],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[3-1]=scicos_block(gui="GAINBLK",graphics=scicos_graphics(orig=[321.23733,235.91733],sz=[40,40],flip=true,theta=0,exprs="1",pin=17,pout=10,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("gainblk",4),in1=-1,in2=-2,intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=1,ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[true,None],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[4-1]=scicos_block(gui="DERIV",graphics=scicos_graphics(orig=[319.03733,135.45067],sz=[40,40],flip=true,theta=0,exprs=[],pin=8,pout=11,pein=[],peout=[],gr_i=[],id="s",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("deriv",4),in1=-1,in2=-2,intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="x",firing=[],dep_ut=[true,None],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[5-1]=scicos_block(gui="GAINBLK",graphics=scicos_graphics(orig=[255.23733,183.11733],sz=[40,40],flip=true,theta=0,exprs="1",pin=13,pout=7,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("gainblk",4),in1=-1,in2=-2,intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=1,ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[true,None],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[6-1]=scicos_block(gui="GAINBLK",graphics=scicos_graphics(orig=[255.23733,135.45067],sz=[40,40],flip=true,theta=0,exprs="1",pin=14,pout=8,pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit="E"),model=scicos_model(sim=list("gainblk",4),in1=-1,in2=-2,intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=1,ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[true,None],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[7-1]=scicos_link(xx=[303.80876,309.73257],yy=[203.11733,203.11733],id="drawlink",thick=[0,0],ct=[1,1],from=[5,1,0],to=[1,1,1]);
scs_m.objs[8-1]=scicos_link(xx=[303.80876,310.4659],yy=[155.45067,155.45067],id="drawlink",thick=[0,0],ct=[1,1],from=[6,1,0],to=[4,1,1]);
scs_m.objs[9-1]=scicos_link(xx=[366.87543,379.39924],yy=[203.11733,202.85067],id="drawlink",thick=[0,0],ct=[1,1],from=[1,1,0],to=[2,2,1]);
scs_m.objs[10-1]=scicos_link(xx=[369.80876,379.39924,379.39924],yy=[255.91733,255.91733,217.85067],id="drawlink",thick=[0,0],ct=[1,1],from=[3,1,0],to=[2,1,1]);
scs_m.objs[11-1]=scicos_link(xx=[367.60876,379.39924,379.39924],yy=[155.45067,155.45067,187.85067],id="drawlink",thick=[0,0],ct=[1,1],from=[4,1,0],to=[2,3,1]);
scs_m.objs[12-1]=scicos_block(gui="SPLIT_f",graphics=scicos_graphics(orig=[234.704,203.11733],sz=[0.3333333,0.3333333],flip=true,theta=0,exprs=[],pin=16,pout=[13,14],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=["E","E","E"]),model=scicos_model(sim="lsplit",in1=-1,in2=[],intyp=1,out=[-1,-1,-1],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[true,None],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[13-1]=scicos_link(xx=[234.704,246.6659],yy=[203.11733,203.11733],id="drawlink",thick=[0,0],ct=[1,1],from=[12,1,0],to=[5,1,1]);
scs_m.objs[14-1]=scicos_link(xx=[234.704,234.704,246.6659],yy=[203.11733,155.45067,155.45067],id="drawlink",thick=[0,0],ct=[1,1],from=[12,2,0],to=[6,1,1]);
scs_m.objs[15-1]=scicos_block(gui="SPLIT_f",graphics=scicos_graphics(orig=[233.97067,203.11733],sz=[0.3333333,0.3333333],flip=true,theta=0,exprs=[],pin=21,pout=[16,17],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=["E","E","E"]),model=scicos_model(sim="lsplit",in1=-1,in2=[],intyp=1,out=[-1,-1,-1],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=[],opar=list(),blocktype="c",firing=[],dep_ut=[true,None],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[16-1]=scicos_link(xx=[233.97067,234.704],yy=[203.11733,203.11733],id="drawlink",thick=[0,0],ct=[1,1],from=[15,1,0],to=[12,1,1]);
scs_m.objs[17-1]=scicos_link(xx=[233.97067,233.97067,312.6659],yy=[203.11733,255.91733,255.91733],id="drawlink",thick=[0,0],ct=[1,1],from=[15,2,0],to=[3,1,1]);
scs_m.objs[18-1]=scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[456.5421,192.85067],sz=[20,20],flip=true,theta=0,exprs="1",pin=19,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=[],intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[None,None],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[19-1]=scicos_link(xx=[436.5421,456.5421],yy=[202.85067,202.85067],id="drawlink",thick=[0,0],ct=[1,1],from=[2,1,0],to=[18,1,1]);
scs_m.objs[20-1]=scicos_block(gui="IN_f",graphics=scicos_graphics(orig=[193.97067,193.11733],sz=[20,20],flip=true,theta=0,exprs="1",pin=[],pout=21,pein=[],peout=[],gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim="input",in1=[],in2=[],intyp=1,out=-1,out2=[],outtyp=-1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[None,None],label="",nzcross=0,nmode=0,equations=list()),doc=list());
scs_m.objs[21-1]=scicos_link(xx=[213.97067,233.97067],yy=[203.11733,203.11733],id="drawlink",thick=[0,0],ct=[1,1],from=[20,1,0],to=[15,1,1]);
model=scicos_model();
model.sim="csuper";
model.in1=-1;
model.in2=-2;
model.out=-1;
model.out2=-2;
model.intyp=1;
model.outtyp=1;
model.blocktype="h";
model.firing=None;
model.dep_ut=[None,None];
model.rpar=scs_m;
gr_i=[];
x=standard_define([2,2],model,[],gr_i);
}
PID.prototype.details = function PID() {
}
}
