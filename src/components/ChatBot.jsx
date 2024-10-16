import {
  MdAttachFile,
  MdOutlineChatBubble,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import { useCallback, useEffect, useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import { useFormik } from "formik";

const ChatBot = () => {
  const buttonRef = useRef(null);
  const chatbotRef = useRef(null);

  const [show, setShow] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const handleClickOutside = (event) => {
    if (
      chatbotRef.current &&
      !chatbotRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleChatbot = useCallback(() => setShow((prev) => !prev), []);

  const toggleShowPicker = useCallback(
    () => setShowPicker((prev) => !prev),
    []
  );

  const formik = useFormik({
    initialValues: { message: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (!files.length) return;
  };

  const onEmojiClick = (emojiObject) => {
    formik.setFieldValue("message", formik.values.message + emojiObject.emoji);
    setShowPicker(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      <button
        onClick={toggleChatbot}
        ref={buttonRef}
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center bg-primary text-white hover:drop-shadow-xl hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
      >
        <MdOutlineChatBubble size={26} />
      </button>

      <div
        ref={chatbotRef}
        className={`absolute bottom-14 rounded w-[400px] right-0  bg-card shadow drop-shadow-xl  ${
          show ? "opacity-100" : "opacity-0"
        }  transition-all duration-300`}
      >
        <div className="h-16 border-b border-text absolute left-0 right-0 top-0 bg-card z-10"></div>
        <div className="p-2 max-h-[460px] pt-20 pb-20 space-y-4 overflow-y-auto no-scrollbar">
          <Message />
          <Message isUser />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        {showPicker && (
          <div className="absolute top-10 z-[20]">
            <EmojiPicker theme="dark" onEmojiClick={onEmojiClick} />
          </div>
        )}
        <form
          onSubmit={formik.handleSubmit}
          className="left-0 right-0 h-16 p-4 absolute bottom-0 w-full border-t flex items-center gap-2 border-text bg-card z-10"
        >
          <div className="relative h-10 rounded border-text flex-1 border">
            <input
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="Write your message..."
              className="h-full resize-none overflow-hidden bg-transparent outline-none w-full text-sm pl-2 pr-16 placeholder:text-text"
            />
            <label className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer">
              {" "}
              <MdAttachFile size={20} />
              <input type="file" hidden multiple onChange={handleFileUpload} />
            </label>
            <button
              type="button"
              onClick={toggleShowPicker}
              className="absolute top-1/2 -translate-y-1/2 right-8"
            >
              {" "}
              <MdOutlineEmojiEmotions size={20} />
            </button>
          </div>
          <button
            type="submit"
            className="bg-primary h-10 rounded w-10 flex items-center justify-center"
          >
            {" "}
            <BsSendFill />
          </button>
        </form>
      </div>
    </div>
  );
};

const Message = ({ isUser }) => {
  return (
    <div className="">
      <p
        className={`text-sm  bg-cardSecondary p-4  rounded-3xl ${
          isUser ? "rounded-br-none" : "rounded-bl-none"
        }`}
      >
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        distinctio!
      </p>
    </div>
  );
};

export default ChatBot;
