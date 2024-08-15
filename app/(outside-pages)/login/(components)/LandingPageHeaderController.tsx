import { Button } from '@/components/Button/button';
import Header from '@/components/Header/Header';
import { RightChevronIcon } from '@/components/Icon/icon';
import { Input } from '@/components/Input/input';
import { FC } from 'react';

const LandingPageHeaderController: FC = () => {
  return (
    <>
      <div
        className="h-[700px] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg')]
     "
      >
        <div className='h-full bg-[#000000b8] overflow-hidden'>
          <Header />

          <div className='h-full flex'>
            <div className='flex flex-col items-center justify-center m-auto'>
              <h2 className='text-center text-5xl font-black'>
                Unlimited movies, TV shows and more
              </h2>
              <p className='text-2xl font-normal mt-4'>
                Watch anywhere. Cancel anytime.
              </p>

              <p className='text-[1.25rem] font-normal mt-[1.5rem]'>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              <div className='flex items-center h-14 mt-4'>
                <div className='focus-within:border-[#FFFFFF] focus-within:border-2 focus-within:p-[2px] rounded-lg mr-2 min-w-96'>
                  <Input
                    type='email'
                    className='h-14  mr-2 bg-[#161616b3] text-base'
                    placeholder='Email address'
                  />
                </div>

                <Button type='submit' className='h-14 w-full flex'>
                  <p className='text-2xl font-medium'>Get Started</p>
                  <RightChevronIcon className='ml-3' />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageHeaderController;
