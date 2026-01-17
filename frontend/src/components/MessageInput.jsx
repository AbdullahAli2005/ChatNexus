import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
    const { sendMessage } = useChatStore();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file.type.startsWith("image/")) {
            toast.error("Please select an image file");
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
    };

    const removeImage = () => {
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!text.trim() && !imagePreview) return;

        await sendMessage({ text: text.trim(), image: imagePreview });
        setText("");
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="p-4 bg-base-200 border-t border-base-300">
            {imagePreview && (
                <div className="mb-4 flex justify-center">
                    <div className="relative inline-block">
                        <img src={imagePreview} alt="Preview" className="max-w-sm rounded-xl shadow-lg" />
                        <button onClick={removeImage} className="btn btn-circle btn-sm absolute top-2 right-2">
                            <X />
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSendMessage} className="flex gap-3">
                <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageChange} />
                <button type="button" className="btn btn-circle btn-primary" onClick={() => fileInputRef.current?.click()}>
                    <Image size={24} />
                </button>
                <input
                    type="text"
                    className="input input-bordered input-lg flex-1"
                    placeholder="Type a message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" className="btn btn-primary btn-circle" disabled={!text.trim() && !imagePreview}>
                    <Send size={24} />
                </button>
            </form>
        </div>
    );
};

export default MessageInput;