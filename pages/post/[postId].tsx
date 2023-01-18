import {NextRouter, useRouter} from "next/router";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import {PostType} from "@/pages/posts";
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from "next";
import {useEffect, useState} from "react";
import {Context} from "vm";

// export default function Post({post}: InferGetServerSidePropsType<typeof getServerSideProps>) {
//
//     const router: NextRouter = useRouter()
//     console.log(post)
//     const [p, setP] = useState<PostType | null>(post)
//     useEffect(() => {
//         const load = async (): Promise<any> => {
//             const res = await fetch(`http://localhost:4200/posts/${router.query.postId}`)
//             const data: PostType = await res.json()
//             setP(data)
//         }
//         if (!p) {
//             load()
//         }
//     }, [])
//
//     if (p == null) {
//         return <MainLayout title={'ff'}>
//             <div>loading</div>
//         </MainLayout>
//     }
//
//     return <MainLayout title={`post ${router.query.postId}`}>
//         <h1 style={{textAlign: "center", margin: '100px'}}>Post {router.query.posId}</h1>
//         <div>author:= {p.author}</div>
//         <div>{p.title}</div>
//         <Link href={'/posts'}> back to posts</Link>
//     </MainLayout>
// }

// export const getServerSideProps: GetServerSideProps = async ({params, req}) => {
//
//     if (!params) return {props: {post: null}}
//
//     console.log(params.postId)
//
//     const response = await fetch(`http://localhost:4200/posts/${params.postId}`)
//     const post: PostType = await response.json()
//
//
//     return {props: {post}}
// }
interface Props {
    post:  any
}
 const Post:NextPage<Props>=({post}) =>{

    const router: NextRouter = useRouter()
    console.log(post)
    const [p, setP] = useState<PostType | null>(post)
    useEffect(() => {
        const load = async (): Promise<any> => {
            const res = await fetch(`http://localhost:4200/posts/${router.query.postId}`)
            const data: PostType = await res.json()
            setP(data)
        }
        if (!p) {
            load()
        }
    }, [])

    if (!p) {
        return <MainLayout title={'ff'}>
            <div>loading</div>
        </MainLayout>
    }

    return <MainLayout title={`post ${router.query.postId}`}>
        <h1 style={{textAlign: "center", margin: '100px'}}>Post {router.query.posId}</h1>
        <div>author:= {p.author}</div>
        <div>{p.title}</div>
        <Link href={'/posts'}> back to posts</Link>
    </MainLayout>
}
export default Post
export const getInitialProps =async (ctx: Context)=> {
    if(!ctx.req){
        return  {post:null}
    }
    if (!ctx.params) return {props: {post: null}}



    const response = await fetch(`${process.env.API_URL}/${ctx.params.postId}`)
    const post: PostType[] = await response.json()

    console.log(post)

    return {post}
}
