import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "../icons/icons";

export const Post = ({
    description,
    likes,
    replies,
}: {
    description: string;
    likes: string[];
    replies: number;
}) => {
    return (
        <>
            <div className=" flex flex-row items-center p-3 gap-10 ">
                {description}
            </div>
            <div
                style={{
                    display: "flex",
                    flex: "row",
                    gap: "10px",
                }}
            >
                <div
                    style={{
                        height: "3vh",
                        display: "flex",
                        flex: "row",
                    }}
                >
                    <HeartIcon />
                    <div>{likes.length}</div>
                </div>
                <div
                    style={{
                        height: "3vh",
                        display: "flex",
                        flex: "row",
                    }}
                >
                    <ChatBubbleOvalLeftEllipsisIcon />
                    <div>{replies}</div>
                </div>
            </div>
        </>
    );
};
