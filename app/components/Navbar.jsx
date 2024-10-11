import Link from "next/link";
import Image from "next/image";
import LogoLink from "./dojo-logo.png";
export default function Navbar() {
    return (
        <nav>

            <Image src={LogoLink} alt="Dogo Logo" width={70} quality={100} placeholder={"blur"} />
            <h1>Help Desk</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/news">news</Link>
    </nav>)
}
