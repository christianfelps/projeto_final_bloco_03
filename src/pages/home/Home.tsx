

function Home() {
    return (

        <>
            <main className="flex bg-orange-600  justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col items-center justify-center  pl-36">

                        <h1 className="text-bold">Seja bem-vindo</h1>

                        <div className="flex justify-around gap-4">
                        <p>Cadastre seu produtos</p>
                         </div>
                    </div>

                    <div className="flex justify-center">
                        <img className=" className='w-2/3'" src="src\assets\images\farm.png" alt="" />
                    </div>

                </div>
            </main>
        </>



    )
}

export default Home