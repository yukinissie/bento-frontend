import { PostCard } from "./PostCard";
export default {
    title: "Example/PostCard",
    component: PostCard,
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
export const Default = () => <PostCard {...args} />;
