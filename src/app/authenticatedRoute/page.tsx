import { getUser} from '@workos-inc/authkit-nextjs'
export default async function AuthenticatedRoute() {
    await getUser({ensureSignedIn: true});
    return (
        <main>
            <h1>Authenticated Route</h1>
            <p>This is an authenticated route. Only visible when logged in.</p>
        </main>
    );
}