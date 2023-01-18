import Head from "next/head";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";
import {useEffect, useState} from "react";
import {InferGetStaticPropsType} from "next";

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

const Posts = ({post}: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log('posts')
    const [posts, setPosts] = useState<PostType[]>([])
    useEffect(() => {
        setPosts(post)
    }, [])


    // useEffect(() => {
    //     const load = async (): Promise<any> => {
    //         const res = await fetch('http://localhost:4200/posts')
    //         const json:PostType[] = await res.json()
    //
    //         setPosts(json)
    //     }
    //     load()
    // }, [])

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


export async function getStaticProps() {

    const res = await fetch('http://localhost:4200/posts')
    const post: PostType[] = await res.json()

    console.log(post)

    return {props: {post}}
}


//     ({
//     props: {
//         hello: 'world',
//     },
// })

export default Posts