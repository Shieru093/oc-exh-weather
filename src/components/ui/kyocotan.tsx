import Image from 'next/image';
import React from 'react';

export default function Kyocotan({searching}: { searching: boolean }) {
  // if (searching) {
  //   return <></>;
  // }

  return (
    <div>
      <Image
      src="/images/kyocotan_line-stamp_1_large.png"
      alt="Description of image"
      width={400}
      height={400}
      />
    </div>
  );
};
