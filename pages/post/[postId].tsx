import {NextRouter, useRouter} from "next/router";

export default function Post() {
    const router:NextRouter=useRouter()
    console.log(router)
    return <>
        <h1 style={{textAlign:"center",margin:'100px'}}>Post {router.query.posId}</h1>
    </>
}