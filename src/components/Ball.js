function Ball({message}) {
    
    if(message === "8") {

        return (
        <div className="ball">
            <div className="smaller-white-circle">
                <div className="eight"><span>{message}</span></div>
            </div>
        </div>
        ) 
    } else {
        return (
        <div className="ball">
            <div className="smaller-white-circle">
                <div className="answer"><span>{message}</span></div>
            </div>
        </div>
        )
    }

}

export default Ball;