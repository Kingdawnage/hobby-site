import '../styles/Aboutme.css'

const Aboutme:React.FC = () => {
    return ( 
        <div className="Aboutme">
            <p className='description'>I'm King. A <span className='flavour-text'>vehicle engineer</span> and a <span className='flavour-text'>game developer.</span></p>
            <p className="sub-description">I’m a tech enthusiast who’s dabbled in all sorts of technology. Feel free to contact me on X or check out some of my projects.</p>
            <button className="contact-button">
                <p className="button-text">Contact me!!</p>
            </button>
        </div>
     );
}
 
export default Aboutme;