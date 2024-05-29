import { Link } from "react-router-dom"
import { Users } from "@phosphor-icons/react"

function Navbar() {

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-orange-800 text-white'>

                <div className="container flex justify-between text-lg">
                    Farmacia

                    <div className='flex gap-4'>
                      Produtos
                        Categorias
                        Cadastrar categoria
                        <Users size={32} />

                        
                       Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar