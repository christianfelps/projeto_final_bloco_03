import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    /**
     * Automatiza a exibição do ano no rodapé
     */
    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-orange-800 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                       Farmacia desenvoldida por Christian | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="" target="_blank">
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        <a href="" target="_blank">
                            <FacebookLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer