import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <h2>MNTC</h2>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/team'>Team</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
