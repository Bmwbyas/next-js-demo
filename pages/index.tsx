import Link from "next/link";

export default function Index() {

  return <div>
    <h1 style={{textAlign:"center",margin:'100px'}}>Hello world!</h1>
    <p>lorem 7  sadcldfkvjmsofdlk dklewdlwek; wefl wflk ewlf lf lwelkf ql fwl</p>
    <div><Link href="/about">about</Link></div>
    <div><Link href="/posts">posts</Link></div>

  </div>
}