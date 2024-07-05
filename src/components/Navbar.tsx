import '../styles/Navbar.css'

interface NavInfo {
    tag1:string,
    tag2:string,
    tag3:string,
    tag4:string
}

const Navbar:React.FC<NavInfo> = ({ tag1, tag2, tag3, tag4 }) => {
    return ( 
        <div className="Navbar">
            <div className="Nav-1">
                <span className="hash">#</span><span className="title">{tag1}</span>
            </div>
            <div className="Nav-2">
                <span className="hash">#</span><span className="title">{tag2}</span>
            </div>
            <div className="Nav-3">
                <span className="hash">#</span><span className="title">{tag3}</span>
            </div>
            <div className="Nav-4">
                <span className="hash">#</span><span className="title">{tag4}</span>
            </div>
        </div>
     );
}
 
export default Navbar;