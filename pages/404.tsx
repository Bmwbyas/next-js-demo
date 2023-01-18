import {useRouter} from "next/router";
import s from '../styles/error.module.scss'

export default function ErrorPage(){
    const router=useRouter()
    const onClickHandler=()=>{
        router.push('/')
    }
    return (
        <>
            <h1 className={s.error}>Error 404</h1>
            <button onClick={onClickHandler}>go home</button>
        </>
    )
}