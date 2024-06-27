import {BiLogoGithub, BiLogoGmail, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
    return (
        <>
        <div className="bg-red-500">
            <div className="flex justify-between items-center space-x-4 h-16 ">
                <a href="https://portfolio-rose-three-51.vercel.app/" target="_blank">
                    <h3 className="text-white text-5xl flex-shrink-0 p-10 ease-in-out duration-300 hover:text-blue-500">Kunal Chauhan</h3>
                </a>
                <div className="flex gap-2 p-12">
                    <a href="https://github.com/Kunal-Chauhan7" target="_blank"><BiLogoGithub className="h-10 w-10 hover:text-white ease-in-out duration-150" /></a>
                    <a href="https://www.linkedin.com/in/kunal-chauhan-08291b136/" target="_blank"><BiLogoLinkedin className="h-10 w-10 hover:text-blue-400 ease-in-out duration-150" /></a>
                    <a href="https://www.instagram.com/kunalchauhan___/0." target="_blank"><BiLogoInstagram className="h-10 w-10 hover:text-pink-500 ease-in-out duration-150" /></a>
                    <a href="mailto:kunalchauhanlion@gmail.com" target="_blank"><BiLogoGmail className="h-10 w-10 hover:text-orange-600 ease-in-out duration-150" /></a>
                </div>
            </div>
            <div className="flex align-middle justify-center text-white">
                <span>Made With love By ~Kunal Chauhan ♥️</span>
            </div>
        </div>
        </>
    )
}
export default Footer;