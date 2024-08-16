import img_carro from "./../assets/porsche.jpg"
function Carros() {
    return(
        <div>
            <img src={img_carro} alt="Imagem de um carro porsche muito loco" />
            <ol>
                <li>Porsche 911 - Um dos modelos mais icônicos da marca, conhecido por seu design clássico e desempenho esportivo.</li>
                <li>Porsche Cayenne – Um SUV de luxo que combina desempenho esportivo com espaço e conforto.</li>
                <li>Porsche Macan – Um SUV compacto que oferece um equilíbrio entre esportividade e praticidade.</li>
                <li>Porsche Panamera – Um sedã de alto desempenho que combina luxo e esportividade com uma gama de motores potentes.</li>
                <li>Porsche Taycan – O primeiro modelo totalmente elétrico da Porsche, oferecendo uma experiência esportiva com tecnologia avançada.</li>
            </ol>
        </div>
    )
}

export default Carros