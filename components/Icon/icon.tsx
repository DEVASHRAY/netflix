import { FC, ReactElement, SVGProps } from 'react';

export const DropDownTriggerIcon: FC<SVGProps<SVGSVGElement>> = (
  props
): ReactElement => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      role='img'
      className={props.className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z'
        fill='currentColor'
      ></path>
    </svg>
  );
};

export const RightChevronIcon: FC<SVGProps<SVGSVGElement>> = (
  props
): ReactElement => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      role='img'
      className={props.className}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z'
        fill='currentColor'
      ></path>
    </svg>
  );
};
