/* autogenerated from "macros/Hydraulics/PerteDP.sci" */
function PerteDP() {
    PerteDP.prototype.define = function PerteDP() {
        this.model = scicos_model();
        this.model.in1 = [1];
        this.model.out = [1];
        this.L = 10;
        this.D = 0.2;
        this.lambda = 0.03;
        this.z1 = 0;
        this.z2 = 0;
        this.p_rho = 0;
        this.model.rpar = [[this.L],[this.D],[this.lambda],[this.z1],[this.z2],[this.p_rho]];
        this.model.sim = new ScilabString("PerteDP");
        this.model.blocktype = new ScilabString("c");
        this.model.dep_ut = [true,false];
        mo = modelica();
        mo.model = "PerteDP";
        mo.inputs = "C1";
        mo.outputs = "C2";
        mo.parameters = list([["L"],["D"],["lambda"],["z1"],["z2"],["p_rho"]],[[this.L],[this.D],[this.lambda],[this.z1],[this.z2],[this.p_rho]]);
        this.model.equations = new ScilabDouble(mo);
        this.model.in1 = new ScilabDouble(ones(size(mo.inputs,"*"),1));
        this.model.out = new ScilabDouble(ones(size(mo.outputs,"*"),1));
        exprs = [[string(this.L)],[string(this.D)],[string(this.lambda)],[string(this.z1)],[string(this.z2)],[string(this.p_rho)]];
        gr_i = [];
        this.x = standard_define([2,1],this.model,exprs,list(gr_i,0));
        this.x.graphics.in_implicit = ["I"];
        this.x.graphics.out_implicit = ["I"];
        return new BasicBlock(this.x);
    }
    PerteDP.prototype.details = function PerteDP() {
        return this.x;
    }
    PerteDP.prototype.get = function PerteDP() {
        var options = {
            L:["Longueur du tube : L (m)",this.L],
            D:["Diamètre interne du tube : D (m)",this.D],
            lambda:["Coefficient de perte de charge-frottement(S.U) : lambda",this.lambda],
            z1:["Altitude entrée tuyauterie : z1 (m)",this.z1],
            z2:["Altitude sortie tuyauterie : z2 (m)",this.z2],
            p_rho:["Si >0, masse volumique imposée fu fluide : p_rho (kg/m3)",this.p_rho],
        }
        return options;
    }
    PerteDP.prototype.set = function PerteDP() {
        this.L = parseFloat(arguments[0]["L"])
        this.D = parseFloat(arguments[0]["D"])
        this.lambda = parseFloat(arguments[0]["lambda"])
        this.z1 = parseFloat(arguments[0]["z1"])
        this.z2 = parseFloat(arguments[0]["z2"])
        this.p_rho = parseFloat(arguments[0]["p_rho"])
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        this.model = arg1.model;
        while (true) {
            [ok,this.L,this.D,this.lambda,this.z1,this.z2,this.p_rho,exprs] = scicos_getvalue("Parametres du tuyau",["Longueur du tube : L (m)","Diamètre interne du tube : D (m)","Coefficient de perte de charge-frottement(S.U) : lambda","Altitude entrée tuyauterie : z1 (m)","Altitude sortie tuyauterie : z2 (m)","Si >0, masse volumique imposée fu fluide : p_rho (kg/m3)"],list("vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1,"vec",-1),exprs);
            if (!ok) {
                break;
            }
            this.model.rpar = [[this.L],[this.D],[this.lambda],[this.z1],[this.z2],[this.p_rho]];
            this.model.equations.parameters[('2', 'double')] = list(this.L,this.D,this.lambda,this.z1,this.z2,this.p_rho);
            graphics.exprs = exprs;
            this.x.graphics = graphics;
            this.x.model = this.model;
            break;
        }
        return new BasicBlock(this.x);
    }
}
