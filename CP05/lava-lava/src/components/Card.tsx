import { CardProps, KeyProps } from '@/types';
import Image from 'next/image'


export default function Tarefa({nome, img, frase, index}: CardProps&KeyProps) {
    return (
      <div className="card" key={index}>
        <h3>{nome}</h3>
        <Image src={img} alt="foto cliente" width={320} height={250}/>
        <p>{frase}</p>
      </div>
    );
}