import logoRocket from '../assets/logo-rockeat.svg?url';

export function Footer(){
  return(
    <footer className="w-full py-5 px-6 bg-gray-900 flex flex-col md:flex-row items-center justify-between relative before:content-[''] before:absolute before:bg-gray-500 before:top-0 before:left-0 before:h-[1px] before:w-[98%] before:mx-[1%] ">
      <div className='flex flex-col md:flex-row items-center'>
        <img src={logoRocket} alt="logo rocketseat" className='h-7 mr-0 md:mr-6 mb-4 md:mb-0'/>
        <p className=' text-gray-300 text-sm md:text-base mb-6 md:mb-0'>Rocketseat - Todos os direitos reservados</p>
      </div>
      <span className='text-gray-300 text-sm md:text-base'>Políticas de privacidade</span>
    </footer>
  )
}