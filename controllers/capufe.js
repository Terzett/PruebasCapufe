import { response,request } from "express";
import xmlbuilder from "xmlbuilder";


// export const tokenGet=async(req,res=response)=>{
//     console.log("aqui")
//     const {qr,caseta}=req.query //Lectura del query que se esta mandando desde la esp32
//     try {
//         //Algoritmo para la correcta lectura del dato
//         const primerParte=qr?.slice(0,12) 
//         let segundaParte=qr?.slice(12,13)
//         segundaParte.split('').join(" ")
//         segundaParte=" "+segundaParte
//         const ultimoString=primerParte+segundaParte
//         console.log(ultimoString)
//         res.json({
//             msg:"Enviado correctamente",
//             qr:ultimoString,
//         })
//     } catch (error) {
//         console.log("error")
//     }
// }


export const loginRequest=async(req,res=response)=>{
    const {place,usuario,password}=req.query
    const xml = xmlbuilder.create('ResponseModuleTag', {
        encoding: 'utf-8',
        version: '1.0'
      })
        .att('responseCode', '100')
        .att('shiftLane', '123')
        .att('fullName', 'operador')
        .end({ pretty: true });
    
    res.type('application/xml').send(xml);
   
}

export const rfidRequest=async(req,res=response)=>{
    const {shift,place,tag}=req.query
    console.log("Enviando tag o rfid")
    const valor=Math.floor(Math.random() * (208 -200 +1 )) + 200
    const xml = xmlbuilder.create('ResponseModuleTag', {
        encoding: 'utf-8',
        version: '1.0'
      })
        .att('responseCode', valor)
        .att('idTag', tag)
        .end({ pretty: true });
    
    res.type('application/xml').send(xml);
}


export const codeBarRequest=async(req,res=response)=>{
    const {shift,place,tag}=req.query
    console.log("Enviando tag o rfid")
    const valor=Math.floor(Math.random() * (208 -200 +1 )) + 200
    const xml = xmlbuilder.create('ResponseModuleTag', {
        encoding: 'utf-8',
        version: '1.0'
      })
        .att('responseCode', valor)
        .att('idTag', tag)
        .end({ pretty: true });
    
    res.type('application/xml').send(xml);
}
