
export function GameCard() {
  return (

    <section className="gameCard">
            <img className="gameImage" src="..\src\public\pz3.jpg" alt="Game Image" />
        <div className="gameDetails">
            <h4>Project Zero 3: The Tormented</h4>
            <div>  
                <p className="price">$19.99</p>
                <button className="buyButton">Buy Now</button>
            </div>
            
        </div>
    </section>
  );
}