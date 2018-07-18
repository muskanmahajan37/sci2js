/* autogenerated from "macros/Sinks/CSCOPXY.sci" */
function CSCOPXY() {
    CSCOPXY.prototype.define = function CSCOPXY() {
        this.win = -1;
        this.clrs = 4;
        this.siz = 1;
        this.wdim = [[600],[400]];
        this.wpos = [[-1],[-1]];
        this.N = 2;
        this.xmin = -15;
        this.xmax = 15;
        this.ymin = -15;
        this.ymax = 15;
        this.nbr_curves = 1;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["cscopxy"]), new ScilabDouble([4]));
        this.model.in = new ScilabDouble([1],[1]);
        this.model.in2 = new ScilabDouble([1],[1]);
        this.model.intyp = new ScilabDouble([1],[1]);
        this.model.evtin = new ScilabDouble([1]);
        this.model.rpar = new ScilabDouble([this.xmin],[this.xmax],[this.ymin],[this.ymax]);
        this.model.ipar = new ScilabDouble([this.win],[1],[this.N],[this.clrs],[this.siz],[1],[this.wpos.slice()],[this.wdim.slice()],[this.nbr_curves]);
        this.model.blocktype = new ScilabString(["d"]);
        this.model.dep_ut = new ScilabBoolean([false,false]);
        this.exprs = [[string(this.nbr_curves)],[sci2exp(this.clrs)],[sci2exp(this.siz)],[string(this.win)],[sci2exp([])],[sci2exp(this.wdim)],[string(this.xmin)],[string(this.xmax)],[string(this.ymin)],[string(this.ymax)],[string(this.N)]];
        this.gr_i = new ScilabString(["xstringb(orig(1),orig(2),\"CSCOPXY\",sz(1),sz(2));"]);
        this.x = new standard_define(new ScilabDouble([2,2]),this.model,new ScilabDouble(this.exprs),this.gr_i);
        return new BasicBlock(this.x);
    }
    CSCOPXY.prototype.details = function CSCOPXY() {
        return this.x;
    }
    CSCOPXY.prototype.get = function CSCOPXY() {
        var options = {
            nbr_curves:["Number of Curves",this.nbr_curves],
            clrs:["color (>0) or mark (<0)",this.clrs],
            siz:["line or mark size",this.siz],
            win:["Output window number (-1 for automatic)",this.win],
            wpos:["Output window position",this.wpos.toString().replace(/,/g," ")],
            wdim:["Output window sizes",this.wdim.toString().replace(/,/g," ")],
            xmin:["Xmin",this.xmin],
            xmax:["Xmax",this.xmax],
            ymin:["Ymin",this.ymin],
            ymax:["Ymax",this.ymax],
            N:["Buffer size",this.N],
        }
        return options;
    }
    CSCOPXY.prototype.set = function CSCOPXY() {
        this.exprs = this.graphics.exprs;
        while (true) {
            var ok = true;
            this.nbr_curves = parseFloat(arguments[0]["nbr_curves"]);
            this.clrs = parseFloat(arguments[0]["clrs"]);
            this.siz = parseFloat(arguments[0]["siz"]);
            this.win = parseFloat(arguments[0]["win"]);
            this.wpos = inverse(arguments[0]["wpos"]);
            this.wdim = inverse(arguments[0]["wdim"]);
            this.xmin = parseFloat(arguments[0]["xmin"]);
            this.xmax = parseFloat(arguments[0]["xmax"]);
            this.ymin = parseFloat(arguments[0]["ymin"]);
            this.ymax = parseFloat(arguments[0]["ymax"]);
            this.N = parseFloat(arguments[0]["N"]);
            if (!ok) {
                break;
            }
            var mess = [];
            if (size(this.wpos,"*")!=0&&size(this.wpos,"*")!=2) {
                var mess = [[mess],["Window position must be [] or a 2 vector"],[" "]];
                var ok = false;
            }
            if (size(this.wdim,"*")!=0&&size(this.wdim,"*")!=2) {
                var mess = [[mess],["Window dim must be [] or a 2 vector"],[" "]];
                var ok = false;
            }
            if (this.nbr_curves<=0) {
                var mess = [[mess],["Number of Curves cannot be negative or null"],[" "]];
                var ok = false;
            }
            if (this.win<-1) {
                var mess = [[mess],["Window number cannot be inferior than -1"],[" "]];
                var ok = false;
            }
            if (this.N<1) {
                var mess = [[mess],["Buffer size must be at least 1"],[" "]];
                var ok = false;
            }
            if (this.N==1&&this.clrs>0) {
                var mess = [[mess],["Buffer size must be at least 2"],[" "]];
                var ok = false;
            }
            if (this.ymin>=this.ymax) {
                var mess = [[mess],["Ymax must be greater than Ymin"],[" "]];
                var ok = false;
            }
            if (this.xmin>=this.xmax) {
                var mess = [[mess],["Xmax must be greater than Xmin"],[" "]];
                var ok = false;
            }
            if (!ok) {
                message(mess);
                throw "user error";
            } else {
                var in1 = this.nbr_curves*ones(2,1);
                var in2 = ones(2,1);
                var tmpvar0 = set_io(this.model,this.graphics,list([in1,in2],ones(2,1)),list(),ones(1,1),[]);
                this.model = tmpvar0[0];
                this.graphics = tmpvar0[1];
                var ok = tmpvar0[2];
                if (this.wpos==[]) {
                    this.wpos = [[-1],[-1]];
                }
                if (this.wdim==[]) {
                    this.wdim = [[-1],[-1]];
                }
                var rpar = [[this.xmin],[this.xmax],[this.ymin],[this.ymax]];
                var ipar = [[this.win],[1],[this.N],[this.clrs],[this.siz],[1],[this.wpos.slice()],[this.wdim.slice()],[this.nbr_curves]];
                this.model.rpar = new ScilabDouble(rpar);
                this.model.ipar = new ScilabDouble(ipar);
                this.graphics.exprs = new ScilabDouble([this.exprs]);
                this.x.graphics = this.graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
