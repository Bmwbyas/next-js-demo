import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";
import A from "@/components/A";

export default function MainLayout({
                                       // Layouts must accept a children prop.
                                       // This will be populated with nested layouts or pages
                                       children,title='next App'
                                   }: { children: React.ReactNode;title:string }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content="next js ts react" />
                <meta name="descriptions" content="this site about use next js " />
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <Link href={'/'}>home</Link>
                <Link href={'/about'}>about</Link>
                <Link href={'/posts'}>posts</Link>
                <Link href={'/post'}>post</Link>
                <Link href={'/post/345'}>post {router.query.postId}</Link>
                <A href={'/users'} text={'usersPage'}/>
            </nav>
            <main>
                {children}
            </main>
            <style >{
                `nav {
                  position: fixed;
                  height: 60px;
                  left: 0;
                  top: 0;
                  right: 0;
                  display:flex;
                  justify-content:center
                }

                nav a {
                  color: black;
                  padding: 15px;
                  text-decoration:none;
                  
                }`
            }</style>
        </>
    );
}