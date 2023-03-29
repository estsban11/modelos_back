import { data, MostrarNomina} from "../models/docente.js"



export const getNomina =(req,res)=>{


    let nominas = [];
data.forEach((docente,index)=>{
    const datos = MostrarNomina();
    const nomina = {...docente,"sueldoNeto":datos[index]};
    nominas.push(nomina);
})

res.json(nominas)

}

export const getTotalDocentes=(req,res)=>{
    let nominas = [];  
    let total_horas = 0; 
    let total_nomina = 0;

    data.forEach((docente,index)=>{
        const datos = MostrarNomina();
        const nomina = {...docente,"sueldoNeto":datos[index]};
        nominas.push(nomina);
        total_horas += docente.num_horas;
        total_nomina += datos[index];
    })

    const total = nominas.length;
    res.json({
        "total":total,
        "total_horas":total_horas,
        total_nomina
    })
}