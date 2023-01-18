import Link from "next/link";
import MainLayout from "@/components/MainLayout";

const  Index=()=> {

  return <MainLayout title={'nextJs'}>

    <h1 style={{textAlign:"center",margin:'100px'}}>Hello world!</h1>
    <p>lorem 7  sadcldfkvjmsofdlk dklewdlwek; wefl wflk ewlf lf lwelkf ql fwl</p>
    <div><Link href="/about">about</Link></div>
    <div><Link href="/posts">posts</Link></div>
    <div><Link href="/users">users</Link></div>

  </MainLayout>
}
export default  Index