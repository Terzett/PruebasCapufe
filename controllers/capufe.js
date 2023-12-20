import { response,request } from "express";



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
    console.log("Enviando peticion de login")
    // if (usuario=='olep' || password=='12345')
    // {
    //     res.json({
    //         responseCode:100
            
    //     })
    // }
    // else {
    //     res.json({
    //         responseCode:101
            
    //     })
    // }
    res.json({
                responseCode:100,
                shiftLane:123,
                fullName: "ejemplo"
                
            })
   
}

export const rfidRequest=async(req,res=response)=>{
    const {shift,place,tag}=req.query
    console.log("Enviando tag o rfid")
    const valor=Math.floor(Math.random() * (208 -200 +1 )) + 200
    res.json({
        responseCode:valor,
        idTag:tag
    })
}
