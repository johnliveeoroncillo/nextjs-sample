import { useEffect, useState } from "react";
import Post from "../components/Post";

export interface PostData {
    userId: string;
    id: string;
    title: string;
    body: string;
}

function Posts() {
    const [data , setData] = useState<PostData[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts') 
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
    }, [])

    if (isLoading) return (<p>Loading</p>);
    else {
        if (data && data.length) {
            return (
                <ol className="flex flex-col gap-2">
                    {data.map((item: PostData, i: number) => <Post data={item} key={i} /> )}
                </ol>
            );
        }
    }
}

export default Posts;