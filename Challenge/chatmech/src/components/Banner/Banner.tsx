import Image, { StaticImageData } from 'next/image'
import React from 'react'


type BannerTypes = {
	imgSrc: StaticImageData;
	alt: string;
	estilo: string;
	texto: React.ReactNode;
	estiloTexto: string;
}


export default function Banner({imgSrc, alt, estilo, texto, estiloTexto}:BannerTypes) {
  return (
	<section className={`bg-blue_2  ${estilo}`}>
		<Image src={imgSrc} alt={alt}/>
		<p className={estiloTexto}>{texto}</p>
	</section>
  )
}


// 

// "font-roboto text-background text-3xl max-w-[500px] pl-28 leading-normal"

// "font-roboto text-background text-4xl max-w-[500px] pl-28 leading-relaxed" 