import { GameCard } from "./GameCard";
import games from "../games.json";

export function GameListing() {    
    return (
    <>

        <div className="gameListing">
            {games.map((game) => (
                <GameCard game={game} />
        
        ))}
        </div>
    </>
    );
}