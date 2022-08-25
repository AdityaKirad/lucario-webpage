import { useEffect } from "react";
import { signIn, useSession } from 'next-auth/react';

const SignInPage = () => {
    const { data: session, loading } = useSession();
    useEffect(() => {
        if(!loading && !session) void signIn('discord')
        if(!loading && session) window.close()
    }, [ session, loading ])
    return null
}

export default SignInPage