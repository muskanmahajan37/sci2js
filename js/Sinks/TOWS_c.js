/* autogenerated from "macros/Sinks/TOWS_c.sci" */
function TOWS_c() {
    TOWS_c.prototype.define = function TOWS_c() {
        nu = -1;
        this.nz = 128;
        this.varnam = "A";
        this.herit = 0;
        this.model = scicos_model();
        this.model.sim = list(new ScilabString(["tows_c"]), new ScilabDouble([4]));
        this.model.in1 = [nu];
        this.model.in2 = new ScilabDouble([-2]);
        this.model.intyp = new ScilabDouble([-1]);
        this.model.out = [];
        this.model.evtin = [1];
        this.model.evtout = [];
        this.model.rpar = [];
        this.model.ipar = [[this.nz],[length(this.varnam)],[transpose(this.ascii[this.varnam-1])]];
        this.model.blocktype = new ScilabString(["d"]);
        this.model.firing = [];
        this.model.dep_ut = [false,false];
        gr_i = [];
        exprs = [[string(this.nz)],[string(this.varnam)],[string(this.herit)]];
        this.x = standard_define([4,2],this.model,exprs,gr_i);
        return new BasicBlock(this.x);
    }
    TOWS_c.prototype.details = function TOWS_c() {
        return this.x;
    }
    TOWS_c.prototype.get = function TOWS_c() {
        var options = {
            nz:["Size of buffer",this.nz],
            varnam:["Scilab variable name",this.varnam],
            herit:["Inherit (no:0, yes:1)",this.herit],
        }
        return options;
    }
    TOWS_c.prototype.set = function TOWS_c() {
        this.nz = parseFloat(arguments[0]["nz"])
        this.varnam = arguments[0]["varnam"]
        this.herit = parseFloat(arguments[0]["herit"])
        this.x = arg1;
        graphics = arg1.graphics;
        this.model = arg1.model;
        exprs = graphics.exprs;
        while (true) {
            [ok,this.nz,this.varnam,this.herit,exprs] = scicos_getvalue("Set Xcos buffer block",["Size of buffer","Scilab variable name","Inherit (no:0, yes:1)"],list("vec",1,"str",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            if ((this.nz<=0)) {
                message("Size of buffer must be positive");
                ok = false;
            }
            r = false;
            ierr = execstr("r = validvar(varnam)","errcatch");
            if (!r||ierr!=0||length(this.varnam)>19) {
                message([["Invalid variable name."],["Please choose another variable name."]]);
                ok = false;
            }
            execstr("if type("+this.varnam+") <> 17 | or(fieldnames("+this.varnam+") <> [\"values\"; \"time\"]) then"+" message([\"Protected variable name.\"; \"Please choose another variable name.\"]);"+" ok = %f;"+" end","errcatch");
            if (ok) {
                [this.model,graphics,ok] = set_io(this.model,graphics,list([-1,-2],-1),list(),ones(1-this.herit,1),[]);
                if (this.herit==1) {
                    this.model.blocktype = new ScilabString(["x"]);
                } else {
                    this.model.blocktype = new ScilabString(["d"]);
                }
                this.model.ipar = [[this.nz],[length(this.varnam)],[transpose(this.ascii[this.varnam-1])]];
                graphics.exprs = exprs;
                this.x.graphics = graphics;
                this.x.model = this.model;
                break;
            }
        }
        return new BasicBlock(this.x);
    }
}
