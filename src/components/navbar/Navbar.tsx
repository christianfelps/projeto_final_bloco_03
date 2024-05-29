import { Users } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-orange-800 text-white'>

                <div className="container flex justify-between text-lg">
                <Link to="/home" className="text-2xl font-bold">Farmacia</Link>

                    <div className='flex gap-4'>
                       <Link to="" className="text-2xl font-bold hover:underline"> Produtos</Link>
                       <Link to="/categorias" className="text-2xl font-bold hover:underline">Categorias </Link>
                       <Link to="/cadastrarcategoria" className="text-2xl font-bold hover:underline">Cadastrar categoria </Link>
                        <Users size={32} />

                        
                       Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar