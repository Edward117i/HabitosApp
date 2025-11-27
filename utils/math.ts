export const sumar = (a: number, b: number) => a + b;

export const dobleDe = (n: number) => n * 2;

export function ejemploDestructuracionUsuario(){
    const usuario = {
        nombre: "Jesus",
        edad: 25,
        genero: "Masculino",
    }
    const {nombre, edad, genero} = usuario; // Destructuracion de objetos
    return `${nombre} tiene ${edad} años y es ${genero}`;
}