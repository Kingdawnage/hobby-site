import "../styles/Exhibition.css"
import Projectcard from "./Projectcard";

const Exhibition:React.FC = () => {
    return ( 
        <div className="Exhibition">
            <Projectcard
                thumbnail="/images/thumbnail1.png"
                techStack="Python Tensorflow"
                projectName="CNNCLassifier"
                projectDescription="Machine learning model that classifies images"
                buttonText="Live" />
            <Projectcard
                thumbnail="/images/thumbnail2.png"
                techStack="C# Winforms"
                projectName="Breakout"
                projectDescription="Retro game reborn in Winforms"
                buttonText="Live"/>
            <Projectcard
                thumbnail="/images/thumbnail3.png"
                techStack="C# dsharpplus"
                projectName="Rias Bot"
                projectDescription="General purpose discord bot"
                buttonText="Live"/>
        </div>
     );
}
 
export default Exhibition;