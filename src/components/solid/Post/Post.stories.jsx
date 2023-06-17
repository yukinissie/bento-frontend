import { Post } from "./Post";
export default {
    title: "Example/Post",
    component: Post,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
};
const args = {
    replies: 4,
    likes: ["hoge", "huga"],
    description: "hogehogehogehoge",
};
export const Default = () => <Post {...args} />;
