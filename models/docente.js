import xlsx from 'xlsx';


const archivo = xlsx.readFile('./bd.xlsx');
const name = archivo.SheetNames;
export const data = xlsx.utils.sheet_to_json(archivo.Sheets[name[0]]);


const calcularNomina =(num_horas, val_horas,bon_cuf,bon_inv,salud,pension)=>{
    var sueldoNeto = ((num_horas*val_horas)+(bon_cuf+bon_inv)-(salud+pension));
    return sueldoNeto;
}

export const MostrarNomina=()=>{
    let datos = {};
    data.forEach((docente,index)=>{
        const nomina = calcularNomina(docente.num_horas,docente.val_hor,docente.bon_cuf,docente.bon_inv,
            docente.salud,docente.pension);
        datos[index] = nomina;
       
    })
    return datos;   
}



