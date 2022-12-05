import AverageRating from "./Average-Rating"
import Reviews from "./Reviews"
import SentimentAnalysis from "./Sentiment-Analysis"

export default function SmallMenu (){
    return(
        <div className="small-menu">
            <Reviews />
            <AverageRating />
            <SentimentAnalysis />
        </div>
    )
}