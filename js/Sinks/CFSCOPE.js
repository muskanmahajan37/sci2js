/* autogenerated from "macros/Sinks/CFSCOPE.sci" */
function CFSCOPE() {
    CFSCOPE.prototype.define = function CFSCOPE() {
        this.win = -1;
        this.wdim = [[600],[400]];
        this.wpos = [[-1],[-1]];
        this.clrs = [[1],[3],[5],[7],[9],[11],[13],[15]];
        this.N = 2;
        this.ymin = -15;
        this.ymax = 15;
        this.per = 30;
        model = scicos_model();
        model.sim = list("cfscope",4);
        model.evtin = 1;
        model.rpar = [[0],[this.ymin],[this.ymax],[this.per]];
        model.ipar = [[this.win],[1],[this.N],[this.clrs],[this.wpos],[this.wdim],[1],[1]];
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[strcat(string(this.clrs)," ")],[string(this.win)],[sci2exp([])],[sci2exp(this.wdim)],[string(this.ymin)],[string(this.ymax)],[string(this.per)],[string(this.N)],[string([1])]];
        gr_i = [];
        this.x = standard_define([2,2],model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    CFSCOPE.prototype.details = function CFSCOPE() {
        return this.x;
    }
    CFSCOPE.prototype.get = function CFSCOPE() {
        var options = {
            clrs:["Color (>0) or mark (<0) vector (8 entries)",this.clrs],
            win:["Output window number (-1 for automatic)",this.win],
            wpos:["Output window position",this.wpos],
            wdim:["Output window sizes",this.wdim],
            ymin:["Ymin",this.ymin],
            ymax:["Ymax",this.ymax],
            per:["Refresh period",this.per],
            N:["Buffer size",this.N],
            wu:["Links to view",this.wu],
        }
        return options;
    }
    CFSCOPE.prototype.set = function CFSCOPE() {
        this.clrs = parseFloat((arguments[0]["clrs"]))
        this.win = parseFloat((arguments[0]["win"]))
        this.wpos = parseFloat((arguments[0]["wpos"]))
        this.wdim = parseFloat((arguments[0]["wdim"]))
        this.ymin = parseFloat((arguments[0]["ymin"]))
        this.ymax = parseFloat((arguments[0]["ymax"]))
        this.per = parseFloat((arguments[0]["per"]))
        this.N = parseFloat((arguments[0]["N"]))
        this.wu = parseFloat((arguments[0]["wu"]))
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,this.clrs,this.win,this.wpos,this.wdim,this.ymin,this.ymax,this.per,this.N,this.wu,exprs] = scicos_getvalue("Set Scope parameters",["Color (>0) or mark (<0) vector (8 entries)","Output window number (-1 for automatic)","Output window position","Output window sizes","Ymin","Ymax","Refresh period","Buffer size","Links to view"],list("vec",8,"vec",1,"vec",-1,"vec",-1,"vec",1,"vec",1,"vec",1,"vec",1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            mess = [];
            if (size(this.wpos,"*")!=0&&size(this.wpos,"*")!=2) {
                mess = [[mess],["Window position must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (size(this.wdim,"*")!=0&&size(this.wdim,"*")!=2) {
                mess = [[mess],["Window dim must be [] or a 2 vector"],[" "]];
                ok = false;
            }
            if (this.win<-1) {
                mess = [[mess],["Window number cannot be inferior than -1"],[" "]];
                ok = false;
            }
            if (this.per<=0) {
                mess = [[mess],["Refresh period must be positive"],[" "]];
                ok = false;
            }
            if (this.N<2) {
                mess = [[mess],["Buffer size must be at least 2"],[" "]];
                ok = false;
            }
            if (this.ymin>=this.ymax) {
                mess = [[mess],["Ymax must be greater than Ymin"],[" "]];
                ok = false;
            }
            if (this.wu<0) {
                mess = [[mess],["Link to view must be positive"],[" "]];
                ok = false;
            }
            if (!ok) {
                message([["Some specified values are inconsistent:"],[" "],[mess]]);
            }
            if (ok) {
                if (this.wpos==[]) {
                    this.wpos = [[-1],[-1]];
                }
                if (this.wdim==[]) {
                    this.wdim = [[-1],[-1]];
                }
                rpar = [[0],[this.ymin],[this.ymax],[this.per]];
                if (size(this.clrs,"*")>8) {
                    this.clrs = this.clrs.slice(1-1,8);
                }
                if (size(this.clrs,"*")<8) {
                    this.clrs[8-1] = 0;
                }
                ipar = [[this.win],[1],[this.N],[this.clrs.slice()],[this.wpos.slice()],[this.wdim.slice()],[size(this.wu,"*")],[this.wu.slice()]];
                model.rpar = rpar;
                model.ipar = ipar;
                model.firing = [];
                model.dep_ut = [true,false];
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
