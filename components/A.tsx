import React from 'react';
import Link from "next/link";
type AType ={
    href:string
    text:string
}
const A:React.FC<AType> = ({href,text}) => {
    return (
        <Link href={href}>
            {text}
        </Link>
    );
};

export default A;