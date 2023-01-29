import style from '../styles/Button.module.css'

const  Component1 = (props)=>{
    const  change_state = ()=>{
        props.set_is_clicked(!props.is_clicked)
    }
     const  change_state2 = ()=>{
        props.set_is_clicked2(!props.is_clicked2)
    }
    return (
        <>
        <button  onClick={change_state} className={style.button}>
            CLICK ME TO SEE THE  POP DOWN
        </button> 
        <button onClick = {change_state2}>CLICK METO SEE THE POP DOWN 2</button> 
        </>
    )
}

export default Component1