
import { ClipLoader } from "react-spinners";


export default function Loader({ loading }) {
    
const override = {
display: "block",
margin: "0 auto",
    };
    
const color = "#0000FF";

    return (
       
            <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        
    );
}