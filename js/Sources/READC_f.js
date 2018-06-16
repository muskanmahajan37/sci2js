/* autogenerated from "macros/Sources/READC_f.sci" */
function READC_f() {
READC_f.prototype.get = function READC_f() {
}
READC_f.prototype.set = function READC_f() {
x=arg1;
model=x.model;
graphics=arg1.graphics;
exprs=graphics.exprs;
out=model.out;
dstate=model.dstate;
ipar=model.ipar;
imask=9+ipar(1);
tmask=ipar(imask);
lunit=dstate(3);
fname=exprs[3-1];
frmt=exprs[4-1];
while (true) {
[ok,tmask1,outmask,fname1,frmt1,M,N,offset,swap,exprs]=scicos_getvalue([msprintf(gettext("Set %s block parameters"),"READC_f")," ",gettext("Read from C binary file")],[gettext("Time Record Selection"),gettext("Outputs Record Selection"),gettext("Input File Name"),gettext("Input Format"),gettext("Record Size"),gettext("Buffer Size"),gettext("Initial Record Index"),gettext("Swap Mode (0:No, 1:Yes)")],list("vec",-1,"vec",-1,"str",1,"str",1,"vec",1,"vec",1,"vec",1,"vec",1),exprs);
if (!ok) {
break
}
fname1=pathconvert(stripblanks(fname1),None,true);
frmt1=stripblanks(frmt1);
fmts=["s","l","d","f","c","us","ul","uc","ull","uls","ubl","ubs","dl","fl","ll","sl","db","fb","lb","sb"];
nout=size(outmask,"*");
if (prod(size(tmask1))>1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter."),gettext("Time Record Selection")),gettext("Must be a scalar or an empty matrix."));
} else if (and(frmt1!=fmts)) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %s."),gettext("Input Format"),frmt1),gettext("Valid formats are: "+strcat(fmts,", ")));
} else if (alreadyran&&fname1!=fname) {
block_parameter_error(msprintf(gettext("You cannot modify \'%s\' when running"),gettext("Input File Name")),gettext("End current simulation first."));
} else if (N!=ipar(6)&&alreadyran) {
block_parameter_error(msprintf(gettext("You cannot modify \'%s\' when running."),gettext("Buffer Size")),gettext("End current simulation first"));
} else if (alreadyran&&size(tmask1)!=size(tmask)) {
block_parameter_error(msprintf(gettext("You cannot modify \'%s\' when running."),gettext("Time Record Selection")),gettext("End current simulation first."));
} else if (fname1=="") {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter."),gettext("Input File Name")),gettext("You must provide a file name."));
} else if (M<1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Record Size"),M),gettext("Strictly positive integer expected."));
} else if (tmask1!=[]&&(tmask1<1||tmask1>M)) {
block_parameter_error(msprintf(gettext("Wrong value for  \'%s\' parameter: %d."),gettext("Time Record Selection"),tmask1),msprintf(gettext("Must be in the interval %s."),gettext("[1, Record Size = ")+string(M)+"]"));
} else if (nout==0) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Outputs Record Selection"),nout),gettext("Strictly positive integer expected."));
} else if (nout>M) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Outputs Record Selection"),nout),msprintf(gettext("Must be in the interval %s."),gettext("[1, Record Size = ")+string(M)+"]"));
} else if (max(outmask)>M||min(outmask)<1) {
block_parameter_error(msprintf(gettext("Wrong value for indexes in \'%s\' parameter: %s."),gettext("Outputs Record Selection"),strcat(string(outmask.slice())," ")),msprintf(gettext("Must be in the interval %s."),gettext("[1, Record Size = ")+string(M)+"]"));
} else if (N<1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Buffer Size"),N),gettext("Strictly positive integer expected."));
} else if (swap!=0&&swap!=1) {
block_parameter_error(msprintf(gettext("Wrong value for  \'%s\' parameter: %d."),gettext("Swap Mode"),swap),msprintf(gettext("Must be in the interval %s."),"[0, 1]"));
} else if (offset<1) {
block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Initial Record Index"),offset),gettext("Strictly positive integer expected."));
} else {
if (tmask1==[]) {
ievt=0;
tmask1=0;
outpt=[];
} else {
ievt=1;
outpt=1;
}
out=size(outmask,"*");
[model,graphics,ok]=check_io(model,graphics,[],out,1,outpt);
frmt1=part(frmt1,1,3);
if (ok) {
if (ievt==0) {
model.firing=-1;
} else {
model.firing=0;
}
ipar=[length(fname1),_str2code(frmt1),ievt,N,M,swap,offset,_str2code(fname1),tmask1,outmask.slice()];
if (prod(size(dstate))!=(N*M)+3) {
dstate=[-1,-1,lunit,zeros(N*M,1)];
}
model.dstate=dstate;
model.ipar=ipar;
graphics.exprs=exprs;
x.graphics=graphics;
x.model=model;
break
}
}
}
}
READC_f.prototype.define = function READC_f() {
frmt="d  ";
fname="foo";
lunit=0;
N=20;
M=1;
rpar=[];
tmask=0;
swap=0;
offset=1;
outmask=1;
ievt=0;
nout=size(outmask,"*");
ipar=[length(fname),_str2code(frmt),ievt,N,M,swap,offset,_str2code(fname),tmask,outmask];
model=scicos_model();
model.sim=list("readc",2);
model.out=nout;
model.evtin=1;
model.evtout=[];
model.dstate=[1,1,lunit,zeros(N*M,1)];
model.ipar=[length(fname),_str2code(frmt),ievt,N,M,swap,offset,_str2code(fname),tmask,outmask];
model.blocktype="d";
model.firing=-1;
model.dep_ut=[None,None];
exprs=["[]",sci2exp(outmask),fname,frmt,string(M),string(N),string(offset),string(swap)];
gr_i=[];
x=standard_define([4,2],model,exprs,gr_i);
}
READC_f.prototype.details = function READC_f() {
}
}
