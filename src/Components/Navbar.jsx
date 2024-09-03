import { useState } from "react";

const Navbar = () => {
    const Link = [
        { name: 'Home', link: '/' },
        { name: 'Service', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Contact', link: '/' },
        { name: 'Blogs', link: '/' }
    ];

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="shadow-md w-full fixed top-0 left-0 z-50">
                <div className="md:flex items-center justify-between bg-blue-600 md:px-10 px-7 py-4">
                    <div className="text-5xl cursor-pointer">
                        <span className="text-3xl text-indigo-600">
                            <ion-icon name="logo-ionic"></ion-icon>
                        </span> Design
                    </div>

                    {/* Toggle button for mobile menu */}
                    <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    {/* Navigation Links */}
                    <ul className={`md:flex md:items-center md:static absolute bg-white md:bg-transparent px-5 py-3 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'} md:opacity-100`}>
                        {Link.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <a className="text-gray-800 hover:text-gray-400 duration-500" href={link.link}>{link.name}</a>
                            </li>
                        ))}
                        <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8">Get Started</button>
                    </ul>
                </div>
            </div>

            <div className="bg-indigo-600 w-full">
                <div className="text-black">
                    {/* Additional content can go here */}
                </div>
            </div>
        </>
    );
};

export default Navbar;
