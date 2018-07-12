/* autogenerated from "macros/Sources/FROMWSB.sci" */
function FROMWSB() {
    FROMWSB.prototype.define = function FROMWSB() {
        var scs_m_1 = scicos_diagram(version="scicos4.2",props=scicos_params(wpar=[-159.096,811.104,-121.216,617.984,1323,1008,331,284,630,480,1426,231,1.4],Title="FROMWSB",tol=[0.0001,0.000001,1.000e-10,100001,0,0],tf=100000,context=" ",void1=[],options=tlist(["scsopt","3D","Background","Link","ID","Cmap"],list(true,33),[8,1],[1,5],list([5,1],[4,1]),[0.8,0.8,0.8]),void2=[],void3=[],doc=list()));
        scs_m_1.objs[1-1] = scicos_block(gui="FROMWS_c",graphics=scicos_graphics(orig=[260.37067,261.584],sz=[70,40],flip=true,theta=0,exprs=[["V"],["1"],["1"],["0"]],pin=[],pout=4,pein=2,peout=2,gr_i=[],id="",in_implicit=[],out_implicit="E"),model=scicos_model(sim=list("fromws_c",4),in1=[],in2=[],intyp=1,out=-1,out2=-2,outtyp=-1,evtin=1,evtout=1,state=[],dstate=[],odstate=list(),rpar=[],ipar=[[1],[-31],[1],[1],[0]],opar=list(),blocktype="d",firing=0,dep_ut=[false,true],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[2-1] = scicos_link(xx=[[295.37067],[295.37067],[233.23733],[233.23733],[295.37067],[295.37067]],yy=[[255.86971],[223.45067],[223.45067],[337.85067],[337.85067],[307.29829]],id="drawlink",thick=[0,0],ct=[5,-1],from=[1,1,0],to=[1,1,1]);
        scs_m_1.objs[3-1] = scicos_block(gui="OUT_f",graphics=scicos_graphics(orig=[358.9421,271.584],sz=[20,20],flip=true,theta=0,exprs="1",pin=4,pout=[],pein=[],peout=[],gr_i=[],id="",in_implicit="E",out_implicit=[]),model=scicos_model(sim="output",in1=-1,in2=-2,intyp=-1,out=[],out2=[],outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=[],ipar=1,opar=list(),blocktype="c",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list()),doc=list());
        scs_m_1.objs[4-1] = scicos_link(xx=[[338.9421],[358.9421]],yy=[[281.584],[281.584]],id="drawlink",thick=[0,0],ct=[1,1],from=[1,1,0],to=[3,1,1]);
        this.model = scicos_model(sim="csuper",in1=[],in2=[],intyp=1,out=-1,out2=-2,outtyp=1,evtin=[],evtout=[],state=[],dstate=[],odstate=list(),rpar=scs_m_1,ipar=[],opar=list(),blocktype="h",firing=[],dep_ut=[false,false],label="",nzcross=0,nmode=0,equations=list());
        var gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"FROMWSB\",sz(1),sz(2));"]);
        this.x = standard_define([5,2],this.model,[],gr_i);
        return new BasicBlock(this.x);
    }
    FROMWSB.prototype.details = function FROMWSB() {
        return this.x;
    }
    FROMWSB.prototype.get = function FROMWSB() {
        var options = {
        }
        return options;
    }
    FROMWSB.prototype.set = function FROMWSB() {
        for (i=1;i<=length(arg1.model.rpar.objs);i+=1) {
            var o = arg1.model.rpar.objs[i-1];
            if (typeof(o)=="Block"&&o.gui=="FROMWS_c") {
                var ppath = list(i);
                break;
            }
        }
        var newpar = list();
        var y = 0;
        for (path in ppath) {
            var np = size(path,"*");
            var spath = list();
            for (k=1;k<=np;k+=1) {
                spath[$+1-1] = "model";
                spath[$+1-1] = "rpar";
                spath[$+1-1] = "objs";
                spath[$+1-1] = path[k-1];
            }
            var xx = arg1[spath-1];
            execstr("xxn="+xx.gui+"(\'set\',xx)");
            if (!isequalbitwise(this.xxn,xx)) {
                this.model = xx.model;
                var model_n = this.xxn.model;
                if (!is_modelica_block(xx)) {
                    var modified = or(this.model.sim!=model_n.sim)||!isequal(this.model.state,model_n.state)||!isequal(this.model.dstate,model_n.dstate)||!isequal(this.model.odstate,model_n.odstate)||!isequal(this.model.rpar,model_n.rpar)||!isequal(this.model.ipar,model_n.ipar)||!isequal(this.model.opar,model_n.opar)||!isequal(this.model.label,model_n.label);
                    if (or(this.model.in1!=model_n.in1)||or(this.model.out!=model_n.out)||or(this.model.in2!=model_n.in2)||or(this.model.out2!=model_n.out2)||or(this.model.outtyp!=model_n.outtyp)||or(this.model.intyp!=model_n.intyp)) {
                        var needcompile = 1;
                    }
                    if (or(this.model.firing!=model_n.firing)) {
                        var needcompile = 2;
                    }
                    if ((size(this.model.in1,"*")!=size(model_n.in1,"*"))||(size(this.model.out,"*")!=size(model_n.out,"*"))) {
                        var needcompile = 4;
                    }
                    if (this.model.sim=="input"||this.model.sim=="output") {
                        if (this.model.ipar!=model_n.ipar) {
                            var needcompile = 4;
                        }
                    }
                    if (or(this.model.blocktype!=model_n.blocktype)||or(this.model.dep_ut!=model_n.dep_ut)) {
                        var needcompile = 4;
                    }
                    if ((this.model.nzcross!=model_n.nzcross)||(this.model.nmode!=model_n.nmode)) {
                        var needcompile = 4;
                    }
                    if (prod(size(model_n.sim))>1) {
                        if (model_n.sim[2-1]>1000) {
                            if (this.model.sim[1-1]!=model_n.sim[1-1]) {
                                var needcompile = 4;
                            }
                        }
                    }
                } else {
                    var modified = or(model_n!=this.model);
                    var eq = this.model.equations;
                    var eqn = model_n.equations;
                    if (or(eq.model!=eqn.model)||or(eq.inputs!=eqn.inputs)||or(eq.outputs!=eqn.outputs)) {
                        var needcompile = 4;
                    }
                }
                arg1[spath-1] = this.xxn;
                newpar[size(newpar)+1-1] = path;
                var y = max(y,needcompile);
            }
        }
        this.x = arg1;
        var typ = newpar;
        return new BasicBlock(this.x);
    }
}
