import { Header } from "../components/Header";
import Form from "../components/Form";
import PostFeed from "../components/posts/PostFeed";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's Happening?" />
      <PostFeed />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          signIn()
        }}
      >
        Sign in
      </button>
    </>
  );

}
