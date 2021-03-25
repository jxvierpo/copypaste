//-------FORMATO DE LA PLATA-------//
const formatter = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP', minimumFractionDigits: 0});
//---------------------------------//
//------ORDENAR POR CAE------//
function sort_by_cae(a, b) {
    if (a[3] <= b[3]) return -1;
    if (a[3] > b[3]) return 1;
    return 0;
  }
//---------------------------//
//-------Acortador------//
function acortador(Nombre,Interes,Valor,NCuotas){
    var Valor_Cuota = Math.round((Valor*Interes)/(1-(1+Interes)**(-NCuotas)));
    var Total_credito = Math.round(Valor_Cuota*NCuotas);
    var Interes_mensual = Interes*100;
    var Cae = Interes_mensual*NCuotas;
    let lista = [Nombre, formatter.format(Valor_Cuota), formatter.format(Total_credito), Interes_mensual.toFixed(2)+'%', Cae.toFixed(2)+'%'];
    return lista
}
//----------------------//
//-------Calculo por banco-------//
//30.000.000
function Banco_Falabella(Valor, NCuotas){
    var Nombre = "Banco Falabella";
    if 		(Valor>=1 		 && Valor<=3000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0225, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=3000001  && Valor<=20000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0163, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=20000001  && Valor<=30000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0145, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0147, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0150, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0152, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//30.000.000
function Banco_Chile(Valor,NCuotas){
    var Nombre = "Banco de Chile";
    if 		(Valor>=1 		 && Valor<=3000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0225, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=3000001  && Valor<=20000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0163, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=20000001  && Valor<=30000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0145, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0147, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0150, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0152, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//20.000.000
function CMR(Valor, NCuotas){
    var Nombre = "CMR Falabella";
    if 		(Valor>=1 		 && Valor<=1000000) {
        if 		(NCuotas>=2  && NCuotas<=24) {return acortador(Nombre, 0.0285, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0194, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0285, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1000001  && Valor<=5000000) {
        if 		(NCuotas>=2  && NCuotas<=36) {return acortador(Nombre, 0.0227, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0208, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=20000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0167, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//30.000.000
function Banco_Estado(Valor,NCuotas){
    var Nombre = "Banco Estado";
    if 		(Valor>=1 		 && Valor<=1000000) {
        if 		(NCuotas>=2  && NCuotas<=36) {return acortador(Nombre, 0.0202, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0203, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1000001  && Valor<=3000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0159, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=36) {return acortador(Nombre, 0.0158, Valor, NCuotas)}
        else if (NCuotas>=36 && NCuotas<=48) {return acortador(Nombre, 0.0182, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=3000001  && Valor<=5000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0129, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=36) {return acortador(Nombre, 0.0128, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0163, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=10000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0103, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=36) {return acortador(Nombre, 0.0102, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0113, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=10000001  && Valor<=20000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0083, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0082, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0081, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0112, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=20000001  && Valor<=30000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0075, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0074, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0073, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0110, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//5.000.000
function Caja_18(Valor,NCuotas){
    var Nombre = "Caja 18 de septiembre";
    if 		(Valor>=1 		 && Valor<=1000000) {
        if 		(NCuotas>=2  && NCuotas<=36) {return acortador(Nombre, 0.0245, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0220, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1000001  && Valor<=5000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0190, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=36) {return acortador(Nombre, 0.0218, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0185, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//10.000.000
function Banco_Ripley(Valor,NCuotas){
    var Nombre = "Banco Ripley";
    if 		(Valor>=1 		 && Valor<=1500000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0286, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1500001  && Valor<=8000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0228, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=8000001  && Valor<=10000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0168, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//20.000.000
function Banco_Security(Valor,NCuotas){
    var Nombre = "Banco Security";
    if 		(Valor>=1 		 && Valor<=3000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0167, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=3000001  && Valor<=10000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0158, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=10000001  && Valor<=20000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0147, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//30.000.000
function Coopeuch(Valor,NCuotas){
    var Nombre = "Coopeuch";
    if 		(Valor>=1 		 && Valor<=1000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0237, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=48) {return acortador(Nombre, 0.0259, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1000001  && Valor<=5000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0189, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=48) {return acortador(Nombre, 0.0218, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=30000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0069, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=36) {return acortador(Nombre, 0.0156, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0089, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//5.000.000
function Scotiabank(Valor,NCuotas){
    var Nombre = "Banco Scotiabank";
    if 		(Valor>=1 		 && Valor<=1000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0245, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1000001  && Valor<=1500000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0228, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1500001  && Valor<=3000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0215, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=36) {return acortador(Nombre, 0.0216, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0217, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=3000001  && Valor<=5000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0185, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=36) {return acortador(Nombre, 0.0186, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0187, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//30.000.000
function Los_Heroes(Valor,NCuotas){
    var Nombre = "Los Heroes";
    if 		(Valor>=1 		 && Valor<=1000000) {
        if 		(NCuotas>=2  && NCuotas<=24) {return acortador(Nombre, 0.0237, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=48) {return acortador(Nombre, 0.0259, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1000001  && Valor<=5000000) {
        if 		(NCuotas>=2  && NCuotas<=24) {return acortador(Nombre, 0.0189, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=48) {return acortador(Nombre, 0.0218, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=30000000) {
        if 		(NCuotas>=2  && NCuotas<=24) {return acortador(Nombre, 0.0069, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=48) {return acortador(Nombre, 0.0089, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//30.000.000
function Itau(Valor,NCuotas){
    var Nombre = "Banco Itau";
    if 		(Valor>=1 		 && Valor<=3000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0193, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=3000001  && Valor<=30000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0159, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//30.000.000
function Santander(Valor,NCuotas){
    var Nombre = "Banco Santander";
    if 		(Valor>=1 		 && Valor<=1000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0256, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0258, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0260, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0261, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1000001  && Valor<=1500000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0228, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1500001  && Valor<=5000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0198, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0200, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0201, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0202, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=10000000) {
        if       (NCuotas>=2 && NCuotas<=48) {return acortador(Nombre, 0.0143, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=10000001 && Valor<=20000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0134, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0136, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0137, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0138, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=20000001 && Valor<=30000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0130, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//30.000.000
function Edwards(Valor,NCuotas){
    var Nombre = "Banco Edwards";
    if 		(Valor>=1 		 && Valor<=3000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0225, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=3000001  && Valor<=20000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0163, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=20000001 && Valor<=30000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0145, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0147, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0150, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0152, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//26.000.000
function Caja_los_andes(Valor,NCuotas){
    var Nombre = "Caja Los Andes"
    if 		(Valor>=1  && Valor<=1500000) {
        if 		(NCuotas>=2  && NCuotas<=24) {return acortador(Nombre, 0.0179, Valor, NCuotas)}
        else if (NCuotas>=24 && NCuotas<=48) {return acortador(Nombre, 0.0183, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=1500001  && Valor<=5000000) {
        if 		(NCuotas>=2  && NCuotas<=24) {return acortador(Nombre, 0.0177, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0179, Valor, NCuotas)}
        else if (NCuotas>=36 && NCuotas<=48) {return acortador(Nombre, 0.0159, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=26000000) {
        if 		(NCuotas>=2  && NCuotas<=12) {return acortador(Nombre, 0.0053, Valor, NCuotas)}
        else if (NCuotas>=13 && NCuotas<=24) {return acortador(Nombre, 0.0147, Valor, NCuotas)}
        else if (NCuotas>=25 && NCuotas<=36) {return acortador(Nombre, 0.0145, Valor, NCuotas)}
        else if (NCuotas>=37 && NCuotas<=48) {return acortador(Nombre, 0.0110, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}
//30.000.000
function Consorcio(Valor,NCuotas){
    var Nombre = "Consorcio";
    if 		(Valor>=1 		 && Valor<=2000000) {
        if 	(NCuotas>=2      && NCuotas<=48) {return acortador(Nombre, 0.0179, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=2000001  && Valor<=5000000) {
        if 		(NCuotas>=2  && NCuotas<=48) {return acortador(Nombre, 0.0165, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=5000001  && Valor<=8000000) {
        if 	(NCuotas>=2      && NCuotas<=48) {return acortador(Nombre, 0.0162, Valor, NCuotas)}
        else{alert("Error");}
    }
    else if (Valor>=8000001  && Valor<=30000000) {
        if  (NCuotas>=2      && NCuotas<=48) {return acortador(Nombre, 0.0160, Valor, NCuotas)}
        else{alert("Error");}
    }
    else{alert("Error");}
}

//-------------------------------//
//------Calculadora------//
function Calculadora(Valor,NCuotas,opcionInteres){
    let lista =[]
    lista.push(Banco_Estado(Valor, NCuotas));
    lista.push(Itau(Valor, NCuotas));
    lista.push(Santander(Valor, NCuotas));
    lista.push(Edwards(Valor, NCuotas));
    lista.push(Consorcio(Valor,NCuotas));
    lista.push(Los_Heroes(Valor, NCuotas));
    lista.push(Coopeuch(Valor, NCuotas));
    lista.push(Banco_Chile(Valor, NCuotas));
	lista.push(Banco_Falabella(Valor, NCuotas));

    if (Valor<=26000000) {
        lista.push(Caja_los_andes(Valor, NCuotas));
        if (Valor<=20000000) {
            lista.push(Banco_Security(Valor, NCuotas));
            if (Valor<=10000000) {
                lista.push(Banco_Ripley(Valor, NCuotas));
                if (Valor<=5000000){
                    lista.push(Scotiabank(Valor, NCuotas));
                    lista.push(Caja_18(Valor, NCuotas));
                }
            }
        }
    }

    if(opcionInteres != ""){
        lista.push(acortador("PERSONALIZADO",parseFloat(opcionInteres), Valor, NCuotas));
    }

    lista.sort(sort_by_cae);
    return lista
}
//------Generador de tabla------//
function Generar_tabla(Valor,NCuotas,opcionInteres){
    var mytable = '<div class="table-responsive"><table class="table"><thead class="thead-dark"><tr><th scope="col">Nombre entidad financiera</th><th scope="col">Valor de la cuota</th><th scope="col">Total del credito</th><th scope="col">Interes mensual</th><th scope="col">CAE</th></tr></thead><tbody>';
    for (var ROW of Calculadora(Valor,NCuotas,opcionInteres)){
        
        if(ROW[0]=="PERSONALIZADO"){

            mytable += "<tr class='table-info'>";
            for (var COL of ROW){  mytable += "<td>" + COL + "</td>"; };
            mytable += "</tr>";

        }else{

            mytable += "<tr>";
            for (var COL of ROW){  mytable += "<td>" + COL + "</td>"; };
            mytable += "</tr>";

        }
    };
    mytable += "</tbody></table></div>";

    return mytable;
    //document.write(mytable);
}
//------------------------------//
