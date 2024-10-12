import {makeGetServerInsertedHTML} from "next/dist/server/app-render/make-get-server-inserted-html";
import Link from "next/link";

export default function NotFound(){
    return (
        <main className="text-center">
            <h2 className="text-3xl">There was A Problem.</h2>
            <p>We could not find the Page you were looking for</p>
            <p>Go back to the dashboard <Link href="/"> Dashboard</Link></p>
        </main>
    )
}