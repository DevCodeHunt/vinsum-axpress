import { X } from "lucide-react";

const Modals = ({ isOpen, onClose, body, title }) => {
  return (
    <div
      className={`fixed inset-0 bg-background/20 z-50 flex items-center justify-center p-4  ${
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } transition-all duration-300`}
    >
      <div className="max-w-xl w-full md:h-full h-[450px] overflow-y-auto scrollbar bg-white rounded-xl p-4 space-y-4">
        <div className="flex justify-between gap-6 items-start">
          <h1 className="text-lg font-semibold flex-1">{title}</h1>
          <button
            type="button"
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>
        {body}
      </div>
    </div>
  );
};

export default Modals;
