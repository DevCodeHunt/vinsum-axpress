import { MdOutlineChatBubble } from "react-icons/md";
import { useCallback, useEffect, useRef } from "react";
import { BsSendFill } from "react-icons/bs";
import { useFormik } from "formik";
import { useChatBotStore } from "../stores";

const ChatBot = () => {
  const buttonRef = useRef(null);
  const chatbotRef = useRef(null);

  const { open, onClose, onToggle } = useChatBotStore();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatbotRef.current &&
        !chatbotRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  const toggleChatbot = useCallback(() => onToggle(), [onToggle]);

  const formik = useFormik({
    initialValues: { message: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChatbot}
        ref={buttonRef}
        className="w-[52px] h-[52px] rounded-full flex items-center justify-center bg-primary text-white hover:drop-shadow-xl hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
      >
        <MdOutlineChatBubble size={26} />
      </button>

      <div
        ref={chatbotRef}
        className={`absolute bottom-14 rounded min-[576px]:w-[400px] w-[300px] right-0  bg-white shadow drop-shadow-xl  ${
          open ? "block" : "hidden"
        }  transition-all duration-300`}
      >
        <div className="h-16 border-b border-neutral-200 absolute left-0 right-0 top-0 bg-white z-10"></div>
        <div className="p-2 max-h-[460px] pt-20 pb-20 space-y-4 overflow-y-auto no-scrollbar">
          <Message />
          <Message isUser />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="left-0 right-0 h-16 p-4 absolute bottom-0 w-full border-t border-neutral-200 flex items-center gap-2 bg-white z-10"
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
          </div>
          <button
            type="submit"
            className="bg-primary h-10 text-white rounded w-10 flex items-center justify-center"
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
        className={`text-sm  bg-foreground p-4  rounded-3xl ${
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
