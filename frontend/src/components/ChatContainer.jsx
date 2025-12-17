import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
    const {
        messages,
        getMessages,
        isMessagesLoading,
        selectedUser,
        subscribeToMessages,
        unsubscribeFromMessages,
    } = useChatStore();

    const { authUser } = useAuthStore();
    const messageEndRef = useRef(null);

    useEffect(() => {
        getMessages(selectedUser._id);

        subscribeToMessages();

        return () => unsubscribeFromMessages();
    }, [selectedUser._id,
        getMessages,
        subscribeToMessages,
        unsubscribeFromMessages
    ]);

    useEffect(() => {
        if (messageEndRef.current && messages) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    if (isMessagesLoading) {
        return (
            <div className="flex-1 flex flex-col overflow-auto">
                <ChatHeader />
                <MessageSkeleton />
                <MessageInput />
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col overflow-auto">
            <ChatHeader />

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message._id}
                        className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                        ref={messageEndRef}
                    >
                        <div className=" chat-image avatar">
                            <div className="size-10 rounded-full border">
                                <img
                                    src={
                                        message.senderId === authUser._id
                                            ? authUser.profilePic || "/avatar.png"
                                            : selectedUser.profilePic || "/avatar.png"
                                    }
                                    alt="profile pic"
                                />
                            </div>
                        </div>
                        <div className="chat-header mb-1">
                            <time className="text-xs opacity-50 ml-1">
                                {formatMessageTime(message.createdAt)}
                            </time>
                        </div>
                        <div className="chat-bubble flex flex-col">
                            {message.image && (
                                <img
                                    src={message.image}
                                    alt="Attachment"
                                    className="sm:max-w-50 rounded-md mb-2"
                                />
                            )}
                            {message.text && <p>{message.text}</p>}
                        </div>
                    </div>
                ))}
            </div>


            <MessageInput />
        </div>
    )
}

export default ChatContainer
// import { useChatStore } from "../store/useChatStore";
// import { useEffect, useRef } from "react";
// import MessageSkeleton from "./skeletons/MessageSkeleton";
// import { useAuthStore } from "../store/useAuthStore";
// import ChatHeader from "./ChatHeader";
// import MessageInput from "./MessageInput";
// import { formatMessageTime } from "../lib/utils";

// const ChatContainer = () => {
//     const { messages, getMessages, isMessagesLoading, selectedUser, subscribeToMessages, unsubscribeFromMessages } = useChatStore();
//     const { authUser } = useAuthStore();
//     const messageEndRef = useRef(null);

//     useEffect(() => {
//         getMessages(selectedUser._id);
//         subscribeToMessages();
//         return () => unsubscribeFromMessages();
//     }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

//     useEffect(() => {
//         messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, [messages]);

//     if (isMessagesLoading) {
//         return (
//             <div className="flex-1 flex flex-col overflow-auto bg-base-300">
//                 <ChatHeader />
//                 <MessageSkeleton />
//                 <MessageInput />
//             </div>
//         );
//     }

//     return (
//         <div className="flex-1 flex flex-col overflow-auto bg-linear-to-b from-base-300 to-base-200">
//             <ChatHeader />

//             <div className="flex-1 overflow-y-auto p-6 space-y-6">
//                 {messages.map((message) => (
//                     <div
//                         key={message._id}
//                         className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
//                         ref={messageEndRef}
//                     >
//                         <div className="chat-image avatar">
//                             <div className="w-10 rounded-full">
//                                 <img
//                                     src={message.senderId === authUser._id ? authUser.profilePic || "/avatar.png" : selectedUser.profilePic || "/avatar.png"}
//                                     alt="avatar"
//                                 />
//                             </div>
//                         </div>
//                         <div className="chat-header mb-1 text-xs opacity-70">
//                             {formatMessageTime(message.createdAt)}
//                         </div>
//                         <div className="chat-bubble chat-bubble-primary flex flex-col gap-2">
//                             {message.image && (
//                                 <img src={message.image} alt="Attachment" className="max-w-xs rounded-lg shadow-md" />
//                             )}
//                             {message.text && <p className="wrap-break-words">{message.text}</p>}
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <MessageInput />
//         </div>
//     );
// };

// export default ChatContainer;