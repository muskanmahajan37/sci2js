//  Scicos
//
//  Copyright (C) INRIA - METALAU Project <scicos@inria.fr>
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
//
// See the file ../license.txt
//

function [x,y,typ]=Capacitor(job,arg1,arg2)
    // exemple d'un bloc implicit,
    //   -  sans entree ni sortie de conditionnement
    //   -  avec une entree et une sortie de type implicit et de dimension 1
    //   - avec un dialogue de saisie de parametre
    x=[];
    y=[];
    typ=[];
    select job
    case "set" then
        x=arg1;
        graphics=arg1.graphics;
        exprs=graphics.exprs
        model=arg1.model;
        while %t do
            [ok,C,v,exprs]=scicos_getvalue("Set Capacitor block parameter",..
            ["C (F)";"Initial Voltage"],list("vec",1,"vec",1),exprs)
            if ~ok then
                break,
            end
            model.rpar=C
            model.equations.parameters(2)=list(C,v)
            graphics.exprs=exprs
            x.graphics=graphics;
            x.model=model
            break
        end
    case "define" then
        model=scicos_model()
        C=0.01,v=0
        model.rpar=[C;v]
        model.sim="Capacitor"
        model.blocktype="c"
        model.dep_ut=[%t %f]
        mo=modelica()
        mo.model="Capacitor"
        mo.inputs="p";
        mo.outputs="n";
        mo.parameters=list(["C","v"],list(C,v),[0,1])
        model.equations=mo
        model.in=ones(size(mo.inputs,"*"),1)
        model.out=ones(size(mo.outputs,"*"),1)

        exprs=string([C;v])
        gr_i=[];
        x=standard_define([2 1.1],model,exprs,list(gr_i,0))
        x.graphics.in_implicit=["I"]
        x.graphics.out_implicit=["I"]
    end
endfunction
