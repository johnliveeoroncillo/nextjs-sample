import Link from 'next/link';

function Header() {
    return (
        <div className='py-4'>
            <ul className='flex flex-row gap-2 px-4 py-2'>
                <li><Link className='text-white font-semibold rounded cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-gray-500' href="/">Home</Link></li>
                <li><Link className='text-white font-semibold rounded cursor-pointer px-4 py-2 hover:bg-gray-100 hover:text-gray-500' href="posts">Posts</Link></li>
            </ul>
        </div>
    )
}

export default Header;