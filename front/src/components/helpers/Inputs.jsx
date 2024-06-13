function Inputs ({type,placeholder,handleOnChange}){
    return(
        <input className="controls" type={type} placeholder={placeholder} onChange={handleOnChange} />
    )
}

export default Inputs