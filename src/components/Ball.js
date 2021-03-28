function Ball({message}) {
    
    return(
        <form className="ball">
            <div className="smaller-white-circle">
                <div className="eight"><span>{message}</span></div>
            </div>
        </form>
    )

}

export default Ball;