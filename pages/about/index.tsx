import {useRouter} from "next/router";
import MainLayout from "@/components/MainLayout";

export default function Index() {
    const router=useRouter()
    const onClickHandler = ()=>{
         router.push('/')

    }
    return <MainLayout title={'about'}>
        <h1 style={{textAlign:"center",margin:'100px'}}>About</h1>
        <button onClick={onClickHandler}> go to home</button>
    </MainLayout>
}