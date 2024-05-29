import Categoria from "../../../models/Categoria";
import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import { ClimbingBoxLoader } from "react-spinners";
import CardCategorias from "../cardcategoria/CardCategoria";

function ListaCategorias() {


    const [categorias, setCategorias] = useState<Categoria[]>([])


    async function buscarTemas() {
       await buscar(`/categorias`, setCategorias)
    }
    

  

    useEffect(() => {
        buscarTemas()
    }, [categorias.length])

    return (
        <>

            {
                categorias.length === 0 && (
                    <ClimbingBoxLoader color="#36d7b7" />
                )
            }

            < div className="flex justify-center w-full my-4" >
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">

                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}
export default ListaCategorias;