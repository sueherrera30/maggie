import maggie from './maggie.jpg';
const Card = () => (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">feliz cumple maggito! ♡ </h3>
        <img alt="maggie" src={maggie} className="maggie" />
      </div>
      <div className="cardInside">
        <h3 className="back">
            Maggito de la torre:
        </h3>
        <p>No tengo como agradecer ni retribuir todo lo que has construido dentro de mi,
           no tengo como pagar a tus orejitas y tu sabiduria por ser muletas de apoyo 
           en mis dias, que infinita alegria tenerte a mi lado.
           llena de luz, de magia y mucha empatia que la vida te siga colmando de calma en el corazon,
           que te lluevan kilos de carcajadas, y mucha fortaleza para formar a tus pequeños bebés.
           te quiero mucho y espero que cada dia lo tengas presente.
           gracias de nuevo por ser y estar, asi como el verbo to be.
           feliz feliz cumple!!!
        </p>
        <a href="https://www.youtube.com/watch?v=F9jkYYC_8ds">TOCA AQUI!</a>
      </div>
    </div>
  );

export default Card;
  