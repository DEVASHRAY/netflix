'use client';

import { FC, useRef } from 'react';
import data from '@/lib/homepageData.json';
import Separator from './Separator';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const LandingPageCard: FC = () => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={item.id} className={cn(index === 0 ? 'pt-0' : 'pt-8')}>
            <Separator />
            <div
              className={cn('flex px-5', index % 2 !== 0 && 'flex-row-reverse')}
            >
              <div className='flex-1 flex justify-center items-center'>
                <div className='max-w-[70%] flex flex-col justify-center items-center'>
                  <p className='text-center text-5xl font-black'>
                    {item.title}
                  </p>
                  <p className='text-center text-2xl mt-4'>{item.subTitle}</p>
                </div>
              </div>
              <div className='flex-1 '>
                <div className='relative flex'>
                  <Image
                    alt=''
                    src={item.iconUrl}
                    className='w-[80%]'
                    width={0}
                    height={0}
                    sizes='null'
                  />
                  {item.videoUrl && (
                    <div
                      className={cn(
                        'absolute w-[100%] h-[100%] max-w-[80%] max-h-[56%] overflow-hidden flex top-[21%] left-[10%] -z-[1]',
                        index === 2 &&
                          'max-w-[57%%] max-h-[48%] top-[7%] left-[13%] '
                      )}
                    >
                      <video className='inline-block' autoPlay muted loop>
                        <source src={item.videoUrl} type='video/mp4' />
                      </video>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LandingPageCard;
