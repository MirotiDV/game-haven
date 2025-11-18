export function GameCard({game}) {
  return(
    <>
    <section className="gameCard">
        <img className="gameImage" src={game.img} alt="Game Image" />
        <div className="gameDetails">
            <h4>{game.title}</h4>
            <div>  
                <p className="price">{game.price}€</p>
                <button className="buyButton">Buy Now</button>
            </div>
        </div>
    </section>
    </>
  );
}
