import '../styles/Navbar.css'

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="Nav-1">
                <span className="hash">#</span><span className="title">home</span>
            </div>
            <div className="Nav-2">
                <span className="hash">#</span><span className="title">projects</span>
            </div>
            <div className="Nav-3">
                <span className="hash">#</span><span className="title">about-me</span>
            </div>
            <div className="Nav-4">
                <span className="hash">#</span><span className="title">contacts</span>
            </div>
        </div>
     );
}
 
export default Navbar;