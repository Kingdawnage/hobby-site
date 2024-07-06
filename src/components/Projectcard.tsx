import "../styles/Projectcard.css"

interface CardDetailsProp {
    thumbnail:string
    techStack:string,
    projectName:string,
    projectDescription:string,
    buttonText:string
}

const Projectcard:React.FC<CardDetailsProp> = ({ thumbnail, techStack, projectName, projectDescription, buttonText }) => {
    return ( 
    <div className="Projectcard">
        <img className="thumbnail-image" src= {thumbnail} alt="thumbnail"/>
        <div className="tech-stack">
            <span className="tech-stack-text">{techStack}</span>
        </div>
        <div className="project-content">
            <div className="project-name">
                <span className="project-name-text">{projectName}</span>
            </div>
            <div className="project-description">
                <span className="project-description-text">{projectDescription}</span>
            </div>
            <button className="live-button">
                <span className="live-button-text">{buttonText}</span>
                <svg className="live-button-arrow" width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.0755 6.384L9.8995 7.68L4.4275 10.984L9.8995 14.288L9.0195 15.576L2.8835 11.752V10.216L9.0755 6.384ZM19.7155 6.384L25.8995 10.208V11.752L19.7635 15.576L18.8835 14.312L24.3635 10.984L18.8835 7.704L19.7155 6.384ZM20.5475 9.696L21.6835 10.24C21.5022 10.6187 21.2888 10.976 21.0435 11.312C20.8035 11.648 20.5155 11.9227 20.1795 12.136C19.8488 12.3493 19.4462 12.456 18.9715 12.456C18.5928 12.456 18.2648 12.376 17.9875 12.216C17.7048 12.056 17.4515 11.8693 17.2275 11.656C16.9982 11.4427 16.7768 11.256 16.5635 11.096C16.3448 10.936 16.1102 10.856 15.8595 10.856C15.6142 10.856 15.3902 10.936 15.1875 11.096C14.9795 11.256 14.7688 11.4427 14.5555 11.656C14.3422 11.8693 14.1022 12.056 13.8355 12.216C13.5635 12.376 13.2382 12.456 12.8595 12.456C12.4808 12.456 12.1528 12.376 11.8755 12.216C11.5928 12.056 11.3395 11.8693 11.1155 11.656C10.8862 11.4427 10.6648 11.256 10.4515 11.096C10.2328 10.936 9.99817 10.856 9.7475 10.856C9.41683 10.856 9.13417 10.9813 8.8995 11.232C8.6595 11.4773 8.4355 11.792 8.2275 12.176L7.0915 11.64C7.27817 11.272 7.4915 10.92 7.7315 10.584C7.96617 10.2427 8.2515 9.96267 8.5875 9.744C8.9235 9.52 9.32883 9.408 9.8035 9.408C10.2035 9.408 10.5448 9.488 10.8275 9.648C11.1102 9.808 11.3635 9.99467 11.5875 10.208C11.8115 10.4213 12.0275 10.608 12.2355 10.768C12.4435 10.928 12.6702 11.008 12.9155 11.008C13.1555 11.008 13.3742 10.928 13.5715 10.768C13.7688 10.608 13.9742 10.4213 14.1875 10.208C14.3955 9.99467 14.6355 9.808 14.9075 9.648C15.1795 9.488 15.5155 9.408 15.9155 9.408C16.3155 9.408 16.6568 9.488 16.9395 9.648C17.2222 9.808 17.4755 9.99467 17.6995 10.208C17.9235 10.4213 18.1395 10.608 18.3475 10.768C18.5555 10.928 18.7822 11.008 19.0275 11.008C19.3475 11.008 19.6275 10.888 19.8675 10.648C20.1128 10.4027 20.3395 10.0853 20.5475 9.696Z" fill="white"/>
                </svg>
            </button>
        </div>
    </div> );
}
 
export default Projectcard;