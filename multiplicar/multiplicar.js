// const fs = require('fs');
// var colors = require('colors');


// let createFile = ( base ) => {        
// // module.exports.createFile = ( base ) => { // Se puede hacer asi tambien
//      return new Promise ( ( resolve, reject ) => {

//         if (!Number( base)) {
//             reject( `El valor introducido ${ base } no es un Numero`);
//             return;
//         } 

//         let data = '';

//         for ( let i= 1; i<=10; i++) {
//             data += `${ base } * ${ i} = ${ base * i}\n`;
//         }
        
//         // const data = new Uint8Array(Buffer.from('Hello Mundo Loco'));
//         fs.writeFile(`tables/table-${ base }.txt`, data, (err) => {
//         //   if (err) throw err;
//         if (err) 
//             reject(err);
//         else
//             resolve( `table-${ base }.txt` )
//         //   console.log(`The file ${ base } has been saved! Yeihh`);
//         });
//     });
// }

// module.exports = {   // Se puede hacer asi tambien
//     createFile
// }

// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`)
    }


}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }


        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}