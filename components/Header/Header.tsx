'use client';

import React from 'react';
import Logo from '../Icon/Logo';
import { Button } from '../Button/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select/select';

const Header = () => {
  return (
    <div className='max-w-[84%] m-auto py-6 flex justify-between px-12'>
      <div className=''>
        <Logo />
      </div>

      <div className='flex gap-6 items-center'>
        <Select>
          <SelectTrigger className='w-[124px] h-[32px] bg-black'>
            <SelectValue placeholder='English' />
          </SelectTrigger>
          <SelectContent className='m-0 p-0 bg-black'>
            <SelectItem value='en'>English</SelectItem>
            <SelectItem value='hi'>Hindi</SelectItem>
          </SelectContent>
        </Select>

        <Button className='h-8'>
          <p className='text-[0.875rem]'>Sign In</p>
        </Button>
      </div>
    </div>
  );
};

export default Header;
