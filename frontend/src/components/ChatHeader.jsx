import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();

    return (
        <div className="bg-base-200 border-b border-base-300 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="avatar online">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{selectedUser.fullName}</h3>
                        <p className="text-sm text-success">
                            {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
                        </p>
                    </div>
                </div>
                <button onClick={() => setSelectedUser(null)} className="btn btn-ghost btn-circle">
                    <X className="size-6" />
                </button>
            </div>
        </div>
    );
};

export default ChatHeader;