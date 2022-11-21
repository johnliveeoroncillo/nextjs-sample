import { PostData } from "../pages/posts";

function Post(props: { data: PostData }) {
    const data: PostData = props.data;
    return (
        <div className="bg-gray-900 rounded p-4 hover:bg-gray-800 cursor-pointer">
            <p className="font-semibold">{data.title}</p>
            <p className="text-sm">{data.body}</p>
        </div>
    );
}

export default Post;