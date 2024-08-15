import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <Image
        alt=''
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png'
        className='w-36 h-10'
        width={0}
        height={0}
        sizes='100vw'
      />
    </>
  );
};

export default Logo;
