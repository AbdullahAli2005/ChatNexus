import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
    const { selectedUser } = useChatStore();

    return (
        <div className="h-screen bg-linear-to-br from-base-300 via-base-200 to-base-300">
            <div className="flex items-center justify-center pt-20 px-4">
                <div className="bg-base-200/80 backdrop-blur rounded-2xl shadow-2xl w-full max-w-7xl h-[calc(100vh-6rem)] overflow-hidden">
                    <div className="flex h-full">
                        <Sidebar />
                        {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;