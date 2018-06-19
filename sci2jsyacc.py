#!/usr/bin/python

"""
Convert a .sci file to a .js file for use with xcos_on_cloud.

Usage: ./sci2jsyacc.py filename.sci > filename.js

Example: ./sci2jsyacc.py macros/Sinks/CSCOPE.sci > js/Sinks/CSCOPE.js
"""

from __future__ import print_function

import re
import sys
import ply.yacc as yacc

from sci2jslex import tokens

precedence = (
    ('left', 'LOGICAL'),
    ('left', 'COMPARISON'),
    ('left', 'ADDITION'),
    ('left', 'MULTIPLICATION'),
    ('right', 'NOT'),
    ('right', 'UNARYADDITION'),
    ('right', 'TRANSPOSE'),
)

start = 'functionblock'

JOB_BLOCKS = {}

# define functionblock

def p_functionblock_function_statementblock_endfunction(p):
    'functionblock : EOL FUNCTION lterm ASSIGNMENT VAR OPENBRACKET JOB COMMA VAR COMMA VAR CLOSEBRACKET EOL statementblock ENDFUNCTION EOL'
    fname = str(p[5])
    p[0] = ('function %s() {\n' +
            '%s.prototype.define = function %s() {\n%s}\n' +
            '%s.prototype.details = function %s() {\n%s}\n' +
            '%s.prototype.get = function %s() {\n%s}\n' +
            '%s.prototype.set = function %s() {\n%s}\n' +
            '}') % (fname,
                    fname, fname, (JOB_BLOCKS['"define"'] if '"define"' in JOB_BLOCKS else ''),
                    fname, fname, (JOB_BLOCKS['"details"'] if '"details"' in JOB_BLOCKS else ''),
                    fname, fname, (JOB_BLOCKS['"get"'] if '"get"' in JOB_BLOCKS else ''),
                    fname, fname, (JOB_BLOCKS['"set"'] if '"set"' in JOB_BLOCKS else ''),
                   )

# end define functionblock

# define statementblock

def p_statementblock_statementblock_statement(p):
    'statementblock : statementblock statement'
    p[0] = '%s%s' % (p[1], p[2])

def p_statementblock_statement(p):
    'statementblock : statement'
    p[0] = '%s' % (p[1])

# end define statementblock

# define statement

def p_statement_assignment(p):
    '''statement : assignment EOL
                 | assignment SEMICOLON
                 | function EOL
                 | RETURN EOL'''
    p[0] = '%s;\n' % (p[1])

def p_statement_resume(p):
    'statement : lterm ASSIGNMENT RESUME OPENBRACKET expression CLOSEBRACKET EOL'
    p[0] = '%s%s%s(%s)\n' % (p[1], p[2], p[3], p[5])

def p_statement_where(p):
    'statement : lterm ASSIGNMENT WHERE OPENBRACKET CLOSEBRACKET EOL'
    p[0] = '%s%s%s()\n' % (p[1], p[2], p[3])

def p_statement_forstatement_forstatementblock(p):
    'statement : forstatementblock END EOL'
    p[0] = '%s}\n' % (p[1])

def p_statement_selectstatement_casestatementblock(p):
    'statement : selectstatement casestatementblock END EOL'
    p[0] = '%s%s}\n' % (p[1], p[2])

def p_statement_selectjobstatement_casejobstatementblock(p):
    'statement : selectjobstatement casejobstatementblock END EOL'
    p[0] = ''

def p_statement_whilestatement_whilestatementblock(p):
    'statement : whilestatementblock END EOL'
    p[0] = '%s}\n' % (p[1])

def p_statement_whilestatement_whilestatementblock_elsestatementblock(p):
    'statement : whilestatementblock elsestatementblock END EOL'
    p[0] = '%s%s%s}\n' % (p[1], p[2], p[3])

def p_statement_ifstatement_ifstatementblock(p):
    'statement : ifstatementblock END EOL'
    p[0] = '%s}\n' % (p[1])

def p_statement_ifstatement_ifstatementblock_elsestatementblock(p):
    'statement : ifstatementblock elsestatementblock END EOL'
    p[0] = '%s%s}\n' % (p[1], p[2])

def p_statement_ifstatement_ifstatementblock_elseifstatementblock(p):
    'statement : ifstatementblock elseifstatementblock END EOL'
    p[0] = '%s%s}\n' % (p[1], p[2])

def p_statement_ifstatement_ifstatementblock_elseifstatementblock_elsestatementblock(p):
    'statement : ifstatementblock elseifstatementblock elsestatementblock END EOL'
    p[0] = '%s%s%s}\n' % (p[1], p[2], p[3])

def p_statement_break(p):
    'statement : BREAK EOL'
    p[0] = '%s;\n' % (p[1])

def p_statement_eol(p):
    'statement : EOL'
    p[0] = '\n'

def p_statement_clearvar(p):
    'statement : clearvar EOL'
    p[0] = '%s' % (p[1])

# end define statement

# define for, case, while, if, elseif, else statement block

def p_forstatementblock_forstatement(p):
    'forstatementblock : forstatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_casestatementblock_casestatementblock_casestatement(p):
    'casestatementblock : casestatementblock casestatement statementblock'
    p[0] = '%s%s%s' % (p[1], p[2], p[3])

def p_casestatementblock_casestatement(p):
    'casestatementblock : casestatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_casejobstatementblock_casejobstatementblock_casejobstatement(p):
    'casejobstatementblock : casejobstatementblock casejobstatement statementblock'
    JOB_BLOCKS[p[2]] = p[3]
    p[0] = ''

def p_casejobstatementblock_casejobstatement(p):
    'casejobstatementblock : casejobstatement statementblock'
    JOB_BLOCKS[p[1]] = p[2]
    p[0] = ''

def p_whilestatementblock_whilestatement(p):
    'whilestatementblock : whilestatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_ifstatementblock_ifstatement(p):
    'ifstatementblock : ifstatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_elseifstatementblock_elseifstatementblock_elseifstatement(p):
    'elseifstatementblock : elseifstatementblock elseifstatement statementblock'
    p[0] = '%s%s%s' % (p[1], p[2], p[3])

def p_elseifstatementblock_elseifstatement(p):
    'elseifstatementblock : elseifstatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_elsestatementblock_elsestatement(p):
    'elsestatementblock : elsestatement statementblock'
    p[0] = '%s%s' % (p[1], p[2])

def p_clearvar_clear_var(p):
    'clearvar : CLEAR VAR'
    p[0] = '%s={};\n' % (p[2])

def p_clearvar_clearvar_var(p):
    'clearvar : clearvar VAR'
    p[0] = '%s%s={};\n' % (p[1], p[2])

# end define for, case, if, elseif, else statement block

# define for, select, case, while, if, elseif, else

def p_forstatement_for_start_step_end(p):
    '''forstatement : FOR VAR ASSIGNMENT expression COLON expression COLON expression EOL
                    | FOR VAR ASSIGNMENT expression COLON expression COLON expression DO EOL'''
    var = p[2]
    lstart = p[4]
    lstep = int(p[6])
    lend = p[8]
    if lstep > 0:
        endop = '<='
        stepop = '+='
    else:
        endop = '>='
        stepop = '-='
    p[0] = 'for (%s=%s;%s%s%s;%s%s%s) {\n' % (var, lstart, var, endop, lend, var, stepop, lstep)

def p_forstatement_for_start_end(p):
    '''forstatement : FOR VAR ASSIGNMENT expression COLON expression EOL
                    | FOR VAR ASSIGNMENT expression COLON expression DO EOL'''
    var = p[2]
    lstart = p[4]
    lstep = 1
    lend = p[6]
    endop = '<='
    stepop = '+='
    p[0] = 'for (%s=%s;%s%s%s;%s%s%s) {\n' % (var, lstart, var, endop, lend, var, stepop, lstep)

def p_forstatement_for_list(p):
    '''forstatement : FOR VAR ASSIGNMENT VAR EOL
                    | FOR VAR ASSIGNMENT VAR DO EOL'''
    var = p[2]
    p[0] = 'for (%s in %s) {\n' % (var, p[4])

def p_selectstatement_select(p):
    'selectstatement : SELECT expression EOL'
    p[0] = 'switch (%s) {\n' % (p[2])

def p_selectjobstatement_select(p):
    'selectjobstatement : SELECT JOB EOL'
    p[0] = ''

def p_casestatement_case(p):
    '''casestatement : CASE expression THEN EOL
                     | CASE expression EOL
                     | CASE expression THEN COMMA'''
    p[0] = 'case %s:\n' % (p[2])

def p_casejobstatement_case(p):
    '''casejobstatement : CASE expression THEN EOL
                        | CASE expression EOL
                        | CASE expression THEN COMMA'''
    p[0] = '%s' % (p[2])

def p_whilestatement_while_do(p):
    '''whilestatement : WHILE expression DO EOL
                      | WHILE expression THEN EOL
                      | WHILE expression EOL'''
    p[0] = 'while (%s) {\n' % (p[2])

def p_ifstatement_if_then(p):
    '''ifstatement : IF expression THEN EOL
                   | IF expression EOL'''
    p[0] = 'if (%s) {\n' % (p[2])

def p_elseifstatement_elseif_then(p):
    '''elseifstatement : ELSEIF expression THEN EOL
                       | ELSEIF expression EOL'''
    p[0] = '} else if (%s) {\n' % (p[2])

def p_elsestatement_else(p):
    '''elsestatement : ELSE EOL'''
    p[0] = '} else {\n'

# end define for, select, case, while, if, elseif, else

# define assignment

def p_assignment_expression(p):
    'assignment : lterm ASSIGNMENT expression'
    p[0] = '%s%s%s' % (p[1], p[2], p[3])

# end define assignment

# define ltermarraylist

def p_ltermarraylist_ltermarraylist_comma_var(p):
    '''ltermarraylist : ltermarraylist COMMA VAR
                      | ltermarraylist SPACE VAR'''
    p[0] = '%s,%s' % (p[1], p[3])

def p_ltermarraylist_ltermarraylist_comma_in(p):
    '''ltermarraylist : ltermarraylist COMMA IN
                      | ltermarraylist SPACE IN'''
    p[0] = '%s,%s1' % (p[1], p[3])

def p_ltermarraylist_var(p):
    'ltermarraylist : VAR'
    p[0] = p[1]
    p[0] = '%s' % (p[1])

def p_ltermarraylist_in(p):
    'ltermarraylist : IN'
    p[0] = '%s1' % (p[1])

# end define ltermarraylist

# define termarraylist

def p_termarrayarraylist_termarrayarraylist_semicolon_termarraylist(p):
    'termarrayarraylist : termarrayarraylist SEMICOLON termarraylist'
    p[0] = '%s,[%s]' % (p[1], p[3])

def p_termarrayarraylist_termarraylist_semicolon_termarraylist(p):
    'termarrayarraylist : termarraylist SEMICOLON termarraylist'
    p[0] = '[%s],[%s]' % (p[1], p[3])

def p_termarraylist_termarraylist_comma_expression(p):
    '''termarraylist : termarraylist COMMA expression
                     | termarraylist SPACE expression'''
    p[0] = '%s,%s' % (p[1], p[3])

def p_termarraylist_expression(p):
    'termarraylist : expression'
    p[0] = '%s' % (p[1])

def p_termarraylist_expression_colon_expression(p):
    'termarraylist : expression COLON expression'
    p[0] = '%s:%s' % (p[1], p[3])

# end define termarraylist

# define list

def p_list_list_expression(p):
    '''list : list COMMA expression
            | expression COMMA expression'''
    p[0] = '%s,%s' % (p[1], p[3])

def p_list_list_var_expression(p):
    'list : list COMMA VAR ASSIGNMENT expression'
    p[0] = '%s,%s=%s' % (p[1], p[3], p[5])

def p_list_list_in_expression(p):
    'list : list COMMA IN ASSIGNMENT expression'
    p[0] = '%s,%s1=%s' % (p[1], p[3], p[5])

def p_list_var_expression(p):
    'list : VAR ASSIGNMENT expression'
    p[0] = '%s=%s' % (p[1], p[3])

def p_list_in_expression(p):
    'list : IN ASSIGNMENT expression'
    p[0] = '%s1=%s' % (p[1], p[3])

# end define list

# define expression

# (2+3)
def p_expression_expression(p):
    'expression : OPENBRACKET expression CLOSEBRACKET'
    p[0] = '(%s)' % (p[2])

# [2+1,1;3-1,2;4-1,3]
def p_expression_termarrayarraylist(p):
    '''expression : OPENSQBRACKET termarrayarraylist CLOSESQBRACKET
                  | OPENSQBRACKET termarrayarraylist SEMICOLON CLOSESQBRACKET'''
    p[0] = '[%s]' % (p[2])

# [2+1,1;]
def p_expression_termarraylist_semicolon(p):
    '''expression : OPENSQBRACKET termarraylist SEMICOLON CLOSESQBRACKET'''
    p[0] = '[[%s]]' % (p[2])

# [2 3 4]
# [2,3,4]
def p_expression_termarraylist(p):
    '''expression : OPENSQBRACKET termarraylist CLOSESQBRACKET
                  | OPENSQBRACKET termarraylist COMMA CLOSESQBRACKET
                  | OPENSQBRACKET termarraylist SPACE CLOSESQBRACKET'''
    p[0] = '[%s]' % (p[2])

# []
def p_expression_empty(p):
    'expression : OPENSQBRACKET CLOSESQBRACKET'
    p[0] = '[]'

def p_expression_term_transpose(p):
    'expression : expression TRANSPOSE'
    p[0] = 'transpose(%s)' % (p[1])

def p_expression_expression_multiplication_expression(p):
    'expression : expression MULTIPLICATION expression'
    if p[2] == '**':
        operator = '^'
    elif p[2] == '\\':
        operator = '\\'
    else:
        operator = p[2]
    p[0] = '%s%s%s' % (p[1], operator, p[3])

def p_expression_expression_addition_expression(p):
    'expression : expression ADDITION expression'
    p[0] = '%s%s%s' % (p[1], p[2], p[3])

def p_expression_expression_comparison_expression(p):
    'expression : expression COMPARISON expression'
    operator = p[2]
    if operator == '<>' or operator == '~=':
        operator = '!='
    p[0] = '%s%s%s' % (p[1], operator, p[3])

def p_expression_expression_logical_expression(p):
    'expression : expression LOGICAL expression'
    operator = p[2]
    if operator == '&':
        operator = '&&'
    elif operator == '|':
        operator = '||'
    p[0] = '%s%s%s' % (p[1], operator, p[3])

def p_expression_addition_term(p):
    'expression : ADDITION expression %prec UNARYADDITION'
    p[0] = '%s%s' % (p[1], p[2])

def p_expression_not_expression(p):
    'expression : NOT expression'
    operator = '!'
    p[0] = '%s%s' % (operator, p[2])

def p_expression_term(p):
    'expression : term'
    p[0] = '%s' % (p[1])

# end define expression

# define function

# C('function parameter')
def p_function_function_parameter(p):
    '''function : ltermvar OPENBRACKET expression CLOSEBRACKET
                | SCICOS_DEBUG OPENBRACKET expression CLOSEBRACKET'''
    p[0] = '%s(%s)' % (p[1], p[3])

# A(2,3)
def p_function_function_parameters(p):
    'function : ltermvar OPENBRACKET list CLOSEBRACKET'
    p[0] = '%s(%s)' % (p[1], p[3])

# A()
def p_function_function(p):
    'function : ltermvar OPENBRACKET CLOSEBRACKET'
    p[0] = '%s()' % (p[1])

# end define function

# define lterm

# B(2:$-1)
def p_lterm_slice(p):
    'lterm : ltermvar OPENBRACKET expression COLON expression CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = '%s.slice(%s-1,%s)' % (p[1], p[3], p[5])

# B(2)
def p_lterm_index(p):
    'lterm : ltermvar OPENBRACKET expression CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = '%s[%s-1]' % (p[1], p[3])

# [A,B,C]
def p_lterm_ltermarraylist(p):
    'lterm : OPENSQBRACKET ltermarraylist CLOSESQBRACKET'
    p[0] = '[%s]' % (p[2])

def p_lterm_ltermvar(p):
    'lterm : ltermvar'
    p[0] = '%s' % (p[1])

def p_ltermvar_ltermvar_dot_var(p):
    'ltermvar : ltermvar DOT VAR'
    p[0] = '%s.%s' % (p[1], p[3])

def p_ltermvar_ltermvar_dot_in(p):
    'ltermvar : ltermvar DOT IN'
    p[0] = '%s.%s1' % (p[1], p[3])

def p_ltermvar_var(p):
    '''ltermvar : VAR
                | PREVAR'''
    p[0] = '%s' % (p[1])

# in
def p_ltermvar_in(p):
    'ltermvar : IN'
    p[0] = '%s1' % (p[1])

# end define lterm

# define term

# B(2:$-1)
def p_term_slice(p):
    'term : termvar OPENBRACKET expression COLON expression CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = '%s.slice(%s-1,%s)' % (p[1], p[3], p[5])

# B(2:$-1,1)
def p_term_slice_expression(p):
    'term : termvar OPENBRACKET expression COLON expression COMMA expression CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = '%s.slice(%s-1,%s)[%s-1]' % (p[1], p[3], p[5], p[7])

# B(:$-1)
def p_term_left_slice(p):
    'term : termvar OPENBRACKET COLON expression CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = '%s.slice(%s-1)' % (p[1], p[3])

# B(2:)
def p_term_right_slice(p):
    'term : termvar OPENBRACKET expression COLON CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = '%s.slice(%s-1,%s)' % (p[1], '1', p[4])

# B(:)
def p_term_full_slice(p):
    'term : termvar OPENBRACKET COLON CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = '%s.slice()' % (p[1])

# B(:,1)
def p_term_full_slice_expression(p):
    'term : termvar OPENBRACKET COLON COMMA expression CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = '%s.slice()[%s-1]' % (p[1], p[5])

# B(1,:)
def p_term_expression_full_slice(p):
    '''term : termvar OPENBRACKET expression COMMA COLON CLOSEBRACKET'''
    addtoarray(p[1])
    p[0] = '%s[%s-1].slice()' % (p[1], p[3])

# B(:,:)
def p_term_full_slice_full_slice(p):
    'term : termvar OPENBRACKET COLON COMMA COLON CLOSEBRACKET'
    addtoarray(p[1])
    p[0] = '%s.slice().slice()' % (p[1])

# (1:10)
def p_term_range(p):
    'term : OPENBRACKET expression COLON expression CLOSEBRACKET'
    p[0] = '[%s:%s]' % (p[2], p[4])

# B($-2)
# C('function parameter')
def p_term_parameter(p):
    'term : termvar OPENBRACKET expression CLOSEBRACKET'
    if isarray(p[1]):
        p[0] = '%s[%s-1]' % (p[1], p[3])
    else:
        p[0] = '%s(%s)' % (p[1], p[3])

# B($-2)('function parameter')
def p_term_termfunc_parameter_parameter(p):
    'term : termvar OPENBRACKET expression CLOSEOPENBRACKET expression CLOSEBRACKET'
    if isarray(p[1]):
        base = '%s[%s-1]' % (p[1], p[3])
    else:
        base = '%s(%s)' % (p[1], p[3])
    if isarray(base):
        p[0] = '%s[%s-1]' % (base, p[5])
    else:
        p[0] = '%s(%s)' % (base, p[5])

# B($-2)(:)
def p_term_termfunc_parameter_slice(p):
    'term : termvar OPENBRACKET expression CLOSEOPENBRACKET COLON CLOSEBRACKET'
    if isarray(p[1]):
        base = '%s[%s-1]' % (p[1], p[3])
    else:
        base = '%s(%s)' % (p[1], p[3])
    addtoarray(base)
    p[0] = '%s.slice()' % (base)

# B($-2)('function parameter')(3)
def p_term_termfunc_parameter_parameter_parameter(p):
    'term : termvar OPENBRACKET expression CLOSEOPENBRACKET expression CLOSEOPENBRACKET expression CLOSEBRACKET'
    if isarray(p[1]):
        base = '%s[%s-1]' % (p[1], p[3])
    else:
        base = '%s(%s)' % (p[1], p[3])
    if isarray(base):
        base = '%s[%s-1]' % (base, p[5])
    else:
        base = '%s(%s)' % (base, p[5])
    if isarray(base):
        p[0] = '%s[%s-1]' % (base, p[7])
    else:
        p[0] = '%s(%s)' % (base, p[7])

# B($-2)('function parameter')(3:4)
def p_term_termfunc_parameter_parameter_slice(p):
    'term : termvar OPENBRACKET expression CLOSEOPENBRACKET expression CLOSEOPENBRACKET expression COLON expression CLOSEBRACKET'
    if isarray(p[1]):
        base = '%s[%s-1]' % (p[1], p[3])
    else:
        base = '%s(%s)' % (p[1], p[3])
    if isarray(base):
        base = '%s[%s-1]' % (base, p[5])
    else:
        base = '%s(%s)' % (base, p[5])
    addtoarray(base)
    p[0] = '%s.slice(%s-1,%s)' % (base, p[7], p[9])

# part(x,1:10)
def p_term_part_parameter_range(p):
    'term : PART OPENBRACKET expression COMMA expression COLON expression CLOSEBRACKET'
    p[0] = '%s(%s,%s,%s)' % (p[1], p[3], p[5], p[7])

# part(x,1)
def p_term_part_parameter_parameter(p):
    'term : PART OPENBRACKET expression COMMA expression CLOSEBRACKET'
    p[0] = '%s(%s,%s)' % (p[1], p[3], p[5])

# A(2,3)
def p_term_function_parameters(p):
    '''term : termvar OPENBRACKET list CLOSEBRACKET
            | SCICOS_BLOCK OPENBRACKET list CLOSEBRACKET
            | SCICOS_DIAGRAM OPENBRACKET list CLOSEBRACKET
            | SCICOS_GETVALUE OPENBRACKET list CLOSEBRACKET
            | SCICOS_GRAPHICS OPENBRACKET list CLOSEBRACKET
            | SCICOS_LINK OPENBRACKET list CLOSEBRACKET
            | SCICOS_MODEL OPENBRACKET list CLOSEBRACKET
            | SCICOS_PARAMS OPENBRACKET list CLOSEBRACKET'''
    p[0] = '%s(%s)' % (p[1], p[3])

# A()
def p_term_function(p):
    '''term : termvar OPENBRACKET CLOSEBRACKET
            | SCICOS_BLOCK OPENBRACKET CLOSEBRACKET
            | SCICOS_DEBUG OPENBRACKET CLOSEBRACKET
            | SCICOS_DIAGRAM OPENBRACKET CLOSEBRACKET
            | SCICOS_GRAPHICS OPENBRACKET CLOSEBRACKET
            | SCICOS_LINK OPENBRACKET CLOSEBRACKET
            | SCICOS_MODEL OPENBRACKET CLOSEBRACKET'''
    p[0] = '%s()' % (p[1])

# $
def p_term_lastindex(p):
    'term : LASTINDEX'
    p[0] = '%s' % (p[1])

# %f
def p_term_prevar(p):
    'term : PREVAR'
    p[0] = '%s' % (p[1])

# %f
def p_term_prevar_boolean(p):
    'term : PREVAR_BOOLEAN'
    if p[1] == '%t':
        value = 'true'
    elif p[1] == '%f':
        value = 'false'
    p[0] = '%s' % (value)

# 1+2*%i
def p_term_prevar_complex1(p):
    'expression : expression ADDITION expression MULTIPLICATION PREVAR_COMPLEX'
    if p[2] == '-':
        imag = str(p[2]) + str(p[3])
    else:
        imag = str(p[3])
    p[0] = 'math.complex(%s,%s)' % (p[1], imag)

# 1+2*%i
def p_term_prevar_complex2(p):
    'expression : expression ADDITION PREVAR_COMPLEX MULTIPLICATION expression'
    if p[2] == '-':
        imag = str(p[2]) + str(p[5])
    else:
        imag = str(p[5])
    p[0] = 'math.complex(%s,%s)' % (p[1], imag)

# %e %pi
def p_term_prevar_float(p):
    'term : PREVAR_FLOAT'
    if p[1] == '%e':
        flt = 'math.E'
    elif p[1] == '%pi':
        flt = 'math.PI'
    else:
        flt = p[1]
    p[0] = '%s' % (flt)

def p_term_termvar(p):
    'term : termvar'
    p[0] = '%s' % (p[1])

# A.B
def p_termvar_termvar_dot_var(p):
    'termvar : termvar DOT VAR'
    p[0] = '%s.%s' % (p[1], p[3])

def p_termvar_termvar_dot_in(p):
    'termvar : termvar DOT IN'
    p[0] = '%s.%s1' % (p[1], p[3])

# A
def p_termvar_var(p):
    'termvar : VAR'
    p[0] = '%s' % (p[1])

# in
def p_termvar_in(p):
    'termvar : IN'
    p[0] = '%s1' % (p[1])

# 5
# 3.4
# 4e5
# 1.0d-4
def p_term_number(p):
    'term : NUMBER'
    number = re.sub(r'[de]', r'e', p[1], flags=re.IGNORECASE)
    p[0] = '%s' % (number)

# 'abc'
# "abc"
def p_term_string(p):
    '''term : QSTRING
            | DQSTRING'''
    p[0] = '%s' % (p[1])

# end define term

def p_error(p):
    print("Syntax error in input", p)

ARRAY_LIST = set()

def addtoarray(name):
    ARRAY_LIST.add(name)

def isarray(name):
    return name in ARRAY_LIST

FUNCTION_LIST = set()

def isfunction(name):
    return name in FUNCTION_LIST

if __name__ == '__main__':
    if len(sys.argv) <= 1:
        print('Usage:', sys.argv[0], 'filename')
        sys.exit(1)

    filename = sys.argv[1]

    data = ''
    with open(filename, 'r') as infile:
        for line in infile:
            data += line

        addtoarray('exprs')

        parser = yacc.yacc()
        result = parser.parse(data, debug=True)

        print('/* autogenerated from "', filename, '" */', sep='')
        print(result)
