import {NextRouter, useRouter} from "next/router";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";


 const User=({user}: InferGetServerSidePropsType<typeof getServerSideProps>)=> {
    const router:NextRouter=useRouter()
    console.log(user)

    return <MainLayout title={`post ${router.query.postId}`}>
        <h1 style={{textAlign:"center",margin:'100px'}}>user {router.query.userId}</h1>
        <div>author:= </div>

        <Link href={'/users'}> back to posts</Link>
    </MainLayout>
}
export default User

export const getServerSideProps:GetServerSideProps= async({params})=> {
     if(!params)return  {props: {}}
    console.log(params.userId)
    debugger
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const user = await res.json()

    console.log(user)

    return {props: {user}}
}