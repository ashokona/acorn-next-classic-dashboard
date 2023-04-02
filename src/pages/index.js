import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter()
    useEffect(() => {
        router.push('auth/login')
    })
    return <h2>Redirecting to login ...</h2>
}