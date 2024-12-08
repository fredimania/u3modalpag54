import Example from "/IESCURA/IAW/next/actividades/u3pag54/nextasir/app/DetalleCiudad";

export default async function Page({params}) {
   /*  en params es donde escribes el nombre, almeria, granada,etc */
    let {nombre}=await(params);
    return (
        <Example nombre={nombre}/>
    );
}