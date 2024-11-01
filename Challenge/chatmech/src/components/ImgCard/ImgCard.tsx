import React from 'react'
import Image, { StaticImageData } from 'next/image';
type ImgCardType = {
	imgSrc: string
};

export default function ImgCard({imgSrc}:ImgCardType) {



	const imagensr = ['@/images/img-card-1.png', '@/images/img-card-2.png', '@/images/img-card-3.png'];
  return (
	<>
	<Image src={imgSrc} alt='teste' />	
	</>
  );
}
