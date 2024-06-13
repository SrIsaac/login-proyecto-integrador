function Button ({handleOnclick,Class,Text}){
    return(
        <button onClick={handleOnclick} className={Class} type="button">{Text}</button>
    )
}
export default Button