import Piechart from "./Piechart";
import Radarchart from "./Radarchart";
import "../styles/Activity.css"

const Activity = () => {
    return (
        <div className="Activity">
            <Piechart/>
            <Radarchart/>
        </div>
    );
}
 
export default Activity;