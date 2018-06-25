/* autogenerated from "macros/IntegerOp/BITSET.sci" */
function BITSET() {
    BITSET.prototype.define = function BITSET() {
        model = scicos_model();
        model.sim = list("bit_set_32",4);
        model.in1 = 1;
        model.in2 = 1;
        model.out = 1;
        model.out2 = 1;
        model.intyp = 3;
        model.outtyp = 3;
        model.opar = list(uint32(0));
        model.blocktype = "c";
        model.dep_ut = [true,false];
        exprs = [[sci2exp(3)],[sci2exp(0)]];
        gr_i = [];
        this.x = standard_define([4,2],model,exprs,gr_i);
    }
    BITSET.prototype.details = function BITSET() {
        return this.x;
    }
    BITSET.prototype.get = function BITSET() {
    }
    BITSET.prototype.set = function BITSET() {
        this.x = arg1;
        graphics = arg1.graphics;
        exprs = graphics.exprs;
        model = arg1.model;
        while (true) {
            [ok,Datatype,bit,exprs] = scicos_getvalue([[msprintf(gettext("Set %s block parameters"),"BITSET")],[" "],[gettext("Set a bit")],[" "]],[[msprintf(gettext("Data Type %s"),"(3:int32, 4:int16, 5:int8, ...)")],[gettext("Index of Bit (0 is least significant)")]],list("vec",1,"vec",1),exprs);
            if (!ok) {
                break;
            }
            in1 = [model.in1,model.in2];
            if (floor(bit)!=bit) {
                block_parameter_error(msprintf(gettext("Wrong type for \'%s\' parameter: %5.1f."),gettext("Index of Bit"),bit),gettext("Must be integer."));
                ok = false;
            }
            if ((Datatype==3)||(Datatype==6)) {
                if (bit>31||bit<0) {
                    block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Index of Bit"),bit),msprintf(gettext("Must be in the interval %s."),"[0, 31]"));
                    ok = false;
                }
                bit = uint32(bit);
                n = 2^bit;
                n = uint32(n);
                model.sim = list("bit_set_32",4);
            } else if ((Datatype==4)||(Datatype==7)) {
                if (bit>15||bit<0) {
                    block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Index of Bit"),bit),msprintf(gettext("Must be in the interval %s."),"[0, 15]"));
                    ok = false;
                }
                bit = uint16(bit);
                n = 2^bit;
                n = uint16(n);
                model.sim = list("bit_set_16",4);
            } else if ((Datatype==5)||(Datatype==8)) {
                if (bit>7||bit<0) {
                    block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Index of Bit"),bit),msprintf(gettext("Must be in the interval %s."),"[0, 7]"));
                    ok = false;
                }
                bit = uint8(bit);
                n = 2^bit;
                n = uint8(n);
                model.sim = list("bit_set_8",4);
            } else {
                block_parameter_error(msprintf(gettext("Wrong value for \'%s\' parameter: %d."),gettext("Data Type"),Datatype),msprintf(gettext("Must be in the interval %s."),"[3, 8]"));
                ok = false;
            }
            if (ok) {
                it = Datatype;
                ot = Datatype;
                out = [1,1];
                [model,graphics,ok] = set_io(model,graphics,list(in1,it),list(out,ot),[],[]);
            }
            if (ok) {
                graphics.exprs = exprs;
                model.opar = list(n);
                this.x.graphics = graphics;
                this.x.model = model;
                break;
            }
        }
    }
}
