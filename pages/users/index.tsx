import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import {useEffect, useState} from "react";
import A from "@/components/A";
import {InferGetStaticPropsType} from "next";


const Users = ({usersData}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [users, setUsers] = useState<any>([])
    // useEffect(() => {
    //         const load = async (): Promise<any> => {
    //             const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //             const usersApi = await res.json()
    //             setUsers(usersApi)
    //         }
    //         load()
    // }, [])
        useEffect(()=>{
             setUsers(usersData)
        },[])
    return (
        <MainLayout title={'usersPage'}>
            <h1 style={{textAlign: "center", margin: '100px'}}>users</h1>
            <div>users</div>
            <ul>
                {users.map((u:any) => <li key={u.id}>
                    <A href={`/user/${u.id}`} text={u.name}/>

                </li>)}
            </ul>
            <Link href={'/'}> go to home </Link>
        </MainLayout>
    );
};

export default Users;

export async function getStaticProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersData = await res.json()

    console.log(usersData)

    return {props: {usersData}}
}