import VegDinner from "./dinner";
import NonvegDinner from "./nonvegdinner";
import NonVeglunch from "./nonveglunch";
import Veglunch from "./veglunch";
import Breakfast from "./Breakfast";
import Snacks from "./snacks"
export default function Food(){
    return(
        <>
       <Breakfast/>
       <br/>
       <br/>
       <Veglunch/>
       <br/>
       <br/>
       <NonVeglunch/>
       <br/>
       <br/>
       <Snacks/>
       <br/>
       <br/>
       <VegDinner/>
       <br/>
       <br/>
       <NonvegDinner/>

        </>
    )
}