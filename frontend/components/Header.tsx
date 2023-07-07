import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-midnight py-4">
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
				<Image 
					src='/jellyfish.png'
						alt='medusa store logo'
						width={60}
						height={10}
						className='object-contain'
				/>
				<div className="container mx-auto flex items-center justify-between px-4">
					<h1 className="font-mono font-extrabold text-white text-3xl">AGILO MEDUSA STORE</h1>
				</div>
      </nav>
    </header>
  );
};

export default Header;
