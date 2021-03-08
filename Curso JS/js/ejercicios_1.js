let miTexto = "Hola mundo cruel"

const contarCaracteres = (text) => {
  try {
    if (typeof text != 'string') return `Ingresa un texto`
  return text.length
  } catch (error) {
    return error
  }
}

const recortarTexto =(text, limite) => {
  try {
    if(typeof text != 'string') return `Ingresa un texto`
    if(typeof limite != 'number') return `Ingresa un numero `
  return text.substring(0,limite)
  } catch (error) {
    return error
  }
  
}

const separarTexto = (text, separador) =>{
  try {
    if (typeof text != 'string') return `Ingresa un texto`
    if (typeof separador != 'string') return `Ingresa un separador en texto`
    return text.split(separador)
  } catch (error) {
    return error
  }
}

const repetirTexto = (text, repeticiones) => {
  try {
    if (typeof text != 'string') return `Ingresa un texto`
    if (typeof repeticiones != 'number') return `Ingresa un numero`
    let miTextoAux = text
    for (let i=0; i<repeticiones-1; i++){
      text += " " + miTextoAux
    }
    return text
  } catch (error) {
    return error
  }
}
  
let Cadena = [contarCaracteres(miTexto), recortarTexto(miTexto,10), separarTexto(miTexto, "o"), repetirTexto(miTexto, 3)]
console.table(Cadena)