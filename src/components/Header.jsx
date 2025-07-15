import dcLogo from "../img/dc-logo.png"

/*1. Define the compotenent*/
export default function Header() {
    return (

        <header>
            <img src={dcLogo} />
            <nav className="">
                <a className="" href="">CHARACTERS</a>
                <a className="" href="">COMICS</a>
                <a className="" href="">MOVIES</a>
                <a className="" href="">TV</a>
                <a className="" href="">GAMES</a>
                <a className="" href="">COLLECTIBLES</a>
                <a className="" href="">VIDEOS</a>
                <a className="" href="">FANS</a>
                <a className="" href="">NEWS</a>
                <a className="" href="">SHOP</a>
            </nav>

        </header >

    )
}