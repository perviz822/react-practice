import style from '../styles/Button.module.css'

const  Component1 = (props)=>{
    const  change_state = ()=>{
        props.set_is_clicked(!props.is_clicked)
    }
    return (
        <>
        <button  onClick={change_state}className={style.button}>
            CLICK ME TO SEE THE  POP DOWN
        </button>  
        </>
    )
}

export default Component1