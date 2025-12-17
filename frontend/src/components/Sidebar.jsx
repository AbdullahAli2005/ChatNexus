import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
    const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

    const { onlineUsers } = useAuthStore();

    const [showOnlineOnly, setShowOnlineOnly] = useState(false);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const filteredUsers = showOnlineOnly
        ? users.filter((user) => onlineUsers.includes(user._id))
        : users;

    if (isUsersLoading) return <SidebarSkeleton />;

    return (
        <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
            <div className="border-b border-base-300 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Users className="size-7 text-primary" />
                        <span className="text-xl font-bold">Contacts</span>
                    </div>
                    <label className="cursor-pointer flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={showOnlineOnly}
                            onChange={(e) => setShowOnlineOnly(e.target.checked)}
                            className="checkbox checkbox-primary checkbox-sm"
                        />
                        <span className="text-sm">Online only ({onlineUsers.length - 1})</span>
                    </label>
                </div>
            </div>

            <div className="overflow-y-auto w-full py-3">
                {filteredUsers.map((user) => (
                    <button
                        key={user._id}
                        onClick={() => setSelectedUser(user)}
                        className={`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
            `}
                    >
                        <div className="relative mx-auto lg:mx-0">
                            <img
                                src={user.profilePic || "/avatar.png"}
                                alt={user.name}
                                className="size-12 object-cover rounded-full"
                            />
                            {onlineUsers.includes(user._id) && (
                                <span
                                    className="absolute bottom-0 right-0 size-3 bg-green-500 
                  rounded-full ring-2 ring-zinc-900"
                                />
                            )}
                        </div>

                        {/* User info - only visible on larger screens */}
                        <div className="hidden lg:block text-left min-w-0">
                            <div className="font-medium truncate">{user.fullName}</div>
                            <div className="text-sm text-zinc-400">
                                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                            </div>
                        </div>
                    </button>
                ))}

                {filteredUsers.length === 0 && (
                    <div className="text-center text-zinc-500 py-4">No online users</div>
                )}
            </div>
        </aside>
    )
}

export default Sidebar
// import { useEffect, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { useAuthStore } from "../store/useAuthStore";
// import SidebarSkeleton from "./skeletons/SidebarSkeleton";
// import { Users } from "lucide-react";

// const Sidebar = () => {
//     const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
//     const { onlineUsers } = useAuthStore();
//     const [showOnlineOnly, setShowOnlineOnly] = useState(false);

//     useEffect(() => {
//         getUsers();
//     }, [getUsers]);

//     const filteredUsers = showOnlineOnly
//         ? users.filter((user) => onlineUsers.includes(user._id))
//         : users;

//     if (isUsersLoading) return <SidebarSkeleton />;

//     return (
//         <aside className="h-full w-full lg:w-80 border-r border-base-300 flex flex-col bg-base-200">
// <div className="border-b border-base-300 p-4">
//     <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//             <Users className="size-7 text-primary" />
//             <span className="text-xl font-bold">Contacts</span>
//         </div>
//         <label className="cursor-pointer flex items-center gap-2">
//             <input
//                 type="checkbox"
//                 checked={showOnlineOnly}
//                 onChange={(e) => setShowOnlineOnly(e.target.checked)}
//                 className="checkbox checkbox-primary checkbox-sm"
//             />
//             <span className="text-sm">Online only ({onlineUsers.length - 1})</span>
//         </label>
//     </div>
// </div>

//             <div className="overflow-y-auto flex-1 p-4 space-y-3">
//                 {filteredUsers.map((user) => (
//                     <div
//                         key={user._id}
//                         onClick={() => setSelectedUser(user)}
//                         className={`card cursor-pointer transition-all hover:shadow-lg ${selectedUser?._id === user._id ? "bg-primary text-primary-content shadow-lg" : "bg-base-100"
//                             }`}
//                     >
//                         <div className="card-body p-4 flex-row items-center gap-4">
//                             <div className="relative">
//                                 <div className="avatar">
//                                     <div className="w-14 rounded-full ring ring-offset-base-100 ring-offset-2">
//                                         <img src={user.profilePic || "/avatar.png"} alt={user.fullName} />
//                                     </div>
//                                 </div>
//                                 {onlineUsers.includes(user._id) && (
//                                     <span className="absolute bottom-0 right-0 size-4 bg-success rounded-full ring-4 ring-base-200" />
//                                 )}
//                             </div>
//                             <div className="flex-1">
//                                 <h3 className="font-semibold text-lg">{user.fullName}</h3>
//                                 <p className={`text-sm ${selectedUser?._id === user._id ? "text-primary-content/80" : "text-base-content/60"}`}>
//                                     {onlineUsers.includes(user._id) ? "Online" : "Offline"}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}

//                 {filteredUsers.length === 0 && (
//                     <div className="text-center text-base-content/60 py-8">No users found</div>
//                 )}
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;