import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";


export default function Sidebar() {
    return (
        <div>
            <ul className=" h-screen flex-col justify-between">
                <div>
                    <Image src={logo} alt="mater-dei" />
                </div>
                <div>
                    <li>
                        <Link href="/dashboard">Profile</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Assignments</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Result</Link>
                    </li>
                </div>
                <div>
                    <li>
                        <Link href="/">LogOut</Link>
                    </li>
                </div>
               
                
            </ul>
        </div>
    )
}
