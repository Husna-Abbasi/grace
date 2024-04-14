import React from 'react';
import Link from "next/link";
const navigation = [
    { name: 'CONTENT SEARCH', href: './content' },
    { name: 'GAMES', href: '#' },
    { name: 'STUDY', href: '#' },
]
const SubmenuComponent = () => {
    return (<div>
            <nav className="bg-Sblue h-[55px] flex justify-center">
                <ul className="flex justify-center gap-1 cursor-pointer tracking-wider text-sm pt-2 font-semibold">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-grey pb-2 pt-2 mx-2 transition-all duration-250 ease-in-out hover:text-lightBlue hover:border-b-lightBlue hover:border-b-4">
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>);
};

export default SubmenuComponent;
