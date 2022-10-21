(*
Dati due interi 'a' e 'b' restituisco il loro massimo comun divisore.

a > 0
b > 0
*)
let rec mcd(a,b) =
    if(b = 0) then a
    else mcd(b, a%b)