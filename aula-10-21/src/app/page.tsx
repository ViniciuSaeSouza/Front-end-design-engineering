import Image from 'next/image';
import carro from './../img/lamborghini.jpg'

export default function Home() {
  return (
    <div>
      <Image src={carro} alt="Lamborghini"/>
      <Image src='/img/lamborghini.jpg' alt='Lamborghini' width={5472} height={3648}/>
    </div>
  );
}
