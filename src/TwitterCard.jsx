
import { useState } from "react"
export function TwitterCard ({name, user, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const btnText= isFollowing ? 'Follow' : 'Unfollow'
    const btnClassName = isFollowing ? 'twCard-btn' : 'twCard-btn twCard-btn-isFolowing'
    function firstLetter({name}){
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
    const nameUpperCase = firstLetter({name})

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className="twCard">
            <header className="twCard-header">
                <img 
                className="twCard-img"
                src={`../src/assets/${name}.jpg`}
                alt="avatar"/>
                <div className="twCard-info">
                    <strong className="twCard-name">
                        {nameUpperCase}
                    </strong>
                    <span className="twCard-user">
                        @{user}
                    </span>
                </div>
            </header>
            <aside>
                <button 
                onClick={handleClick}
                className={btnClassName}>
                    {btnText}
                </button>
            </aside>
        </article>
    )
}