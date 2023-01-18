import {NextRouter, useRouter} from "next/router";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import {PostType} from "@/pages/posts";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

export default function Post({post}:InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router:NextRouter=useRouter()
    console.log('post')

    return <MainLayout title={`post ${router.query.postId}`}>
        <h1 style={{textAlign:"center",margin:'100px'}}>Post {router.query.posId}</h1>
        <div>author:= {post.author}</div>
        <div>{post.title}</div>
            <Link href={'/posts'}> back to posts</Link>
    </MainLayout>
}

export const getServerSideProps:GetServerSideProps= async({params})=> {
    if(!params)return  {props: {}}
    console.log(params.postId)

    const res = await fetch(`http://localhost:4200/posts/${params.postId}`)
    const post:PostType = await res.json()



    return {props: {post}}
}