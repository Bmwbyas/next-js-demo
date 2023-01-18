import Head from "next/head";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";
import {useEffect, useState} from "react";
import {GetStaticProps, InferGetStaticPropsType, NextPage, NextPageContext} from "next";
import {Context} from "vm";

export type PostType = {
    id: number
    title: string
    author: string
}

type ResType = {
    posts: readonly PostType[],
    comments: readonly [
        { "id": number, "body": string, "postId": number }
    ],
    profile: { name: string }

}
interface Props {
    post:  PostType[]
}
const Posts:NextPage<Props> = ({post}) => {
    console.log('posts')

    const [posts, setPosts] = useState<PostType[]|null>(post)

    useEffect(()=>{
        const load = async (): Promise<any> => {
            const res = await fetch(`http://localhost:4200/posts`)
            const data:PostType[] = await res.json()
            setPosts(data)
        }
        if(!posts)
        {load()}
    },[])

    if(!posts){
        return <MainLayout title={'ff'}>
            <div>loading</div>
        </MainLayout>
    }
    return <MainLayout title={'posts'}>
        <Head>
            <title> posts</title>
        </Head>
        <h1 style={{textAlign: "center", margin: '100px'}}>Posts </h1>
        {posts.map((p: any) => <div style={{margin: 20}} key={p.id}>
            <Link href={`/post/${p.id}`}>
                title: {p.title} author: {p.author}
            </Link>
        </div>)}
        <Link href={'/'}>to home</Link>
    </MainLayout>
}

interface PostNextPageContex extends NextPageContext{
    query:{
        postId:string
    }
}

export const getInitialProps =async ({req,query}: PostNextPageContex)=> {
    if(!req){
        return  {post:null}
    }
    const res = await fetch(`${process.env.API_URL}/posts`)
    const post: PostType[] = await res.json()

    console.log(post)

    return {post}
}


//     ({
//     props: {
//         hello: 'world',
//     },
// })

export default Posts