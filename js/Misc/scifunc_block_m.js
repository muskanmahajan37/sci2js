/* autogenerated from "macros/Misc/scifunc_block_m.sci" */
function scifunc_block_m() {
    scifunc_block_m.prototype.define = function scifunc_block_m() {
        in1 = 1;
        out = 1;
        clkin = [];
        clkout = [];
        x0 = [];
        z0 = [];
        typ = "c";
        auto = [];
        this.rpar = [];
        it = 1;
        model = scicos_model();
        model.sim = list("scifunc",3);
        model.in1 = in1;
        model.in2 = in1;
        model.intyp = it;
        model.out = out;
        model.out2 = out;
        model.outtyp = it;
        model.evtin = clkin;
        model.evtout = clkout;
        model.state = x0;
        model.dstate = z0;
        model.rpar = this.rpar;
        model.ipar = 0;
        model.opar = list();
        model.blocktype = typ;
        model.firing = auto;
        model.dep_ut = [true,false];
        exprs = list([[sci2exp([in1,in1])],[sci2exp([out,out])],[sci2exp(clkin)],[sci2exp(clkout)],[strcat(sci2exp(x0))],[strcat(sci2exp(z0))],[strcat(sci2exp(this.rpar))],[sci2exp(auto)],[sci2exp(0)]],list("y1=sin(u1)"," "," ","y1=sin(u1)"," "," "," "));
        gr_i = [];
        this.x = standard_define([4,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    scifunc_block_m.prototype.details = function scifunc_block_m() {
        return this.x;
    }
    scifunc_block_m.prototype.get = function scifunc_block_m() {
        var options = {
            i:["input ports sizes",this.i],
            o:["output port sizes",this.o],
            ci:["input event ports sizes",this.ci],
            co:["output events ports sizes",this.co],
            xx:["initial continuous state",this.xx],
            z:["initial discrete state",this.z],
            rpar:["System parameters vector",this.rpar],
            auto0:["initial firing vector (<0 for no firing)",this.auto0],
            deptime:["is block always active (0:no, 1:yes)",this.deptime],
        }
        return options;
    }
    scifunc_block_m.prototype.set = function scifunc_block_m() {
        this.i = parseFloat((arguments[0]["i"]))
        this.o = parseFloat((arguments[0]["o"]))
        this.ci = parseFloat((arguments[0]["ci"]))
        this.co = parseFloat((arguments[0]["co"]))
        this.xx = parseFloat((arguments[0]["xx"]))
        this.z = parseFloat((arguments[0]["z"]))
        this.rpar = parseFloat((arguments[0]["rpar"]))
        this.auto0 = parseFloat((arguments[0]["auto0"]))
        this.deptime = parseFloat((arguments[0]["deptime"]))
        this.lab = parseFloat((arguments[0]["lab"]))
        needcompile = 0;
        this.x = arg1;
        model = arg1.model;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        while (true) {
            [ok,this.i,this.o,this.ci,this.co,this.xx,this.z,this.rpar,this.auto0,this.deptime,this.lab] = scicos_getvalue([["Set scifunc_block parameters"],["only regular blocks supported"]],["input ports sizes","output port sizes","input event ports sizes","output events ports sizes","initial continuous state","initial discrete state","System parameters vector","initial firing vector (<0 for no firing)","is block always active (0:no, 1:yes)"],list("mat",[-1,2],"mat",[-2,2],"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",1),exprs[1-1]);
            if (!ok) {
                break;
            }
            exprs[1-1] = this.lab;
            this.xx = this.xx.slice();
            this.z = this.z.slice();
            this.rpar = this.rpar.slice();
            it = ones(1,size(this.i,1));
            ot = ones(1,size(this.o,1));
            nrp = prod(size(this.rpar));
            ni = size(this.i,1);
            no = size(this.o,1);
            this.ci = int(this.ci.slice());
            nci = size(this.ci,1);
            this.co = int(this.co.slice());
            nco = size(this.co,1);
            [ok,tt,dep_ut] = genfunc2(exprs[2-1],this.i,this.o,nci,nco,size(this.xx,1),size(this.z,1),nrp,"c");
            dep_ut[2-1] = (1==this.deptime);
            if (!ok) {
                break;
            }
            [model,graphics,ok] = set_io(model,graphics,list(this.i,it),list(this.o,ot),this.ci,this.co);
            if (ok) {
                auto = this.auto0;
                model.state = this.xx;
                model.dstate = this.z;
                model.rpar = this.rpar;
                if (model.ipar!=0) {
                    model.opar = model.ipar;
                    model.ipar = 0;
                }
                if (or(model.opar!=tt)) {
                    needcompile = 4;
                }
                model.opar = tt;
                model.firing = auto;
                model.dep_ut = dep_ut;
                this.x.model = model;
                exprs[2-1] = tt;
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                break;
            }
        }
        needcompile = resume(needcompile)
        return new BasicBlock(this.x);
    }
}
