import { X } from "lucide-react";
import { useTrackShipmentStore } from "../../stores";

const TrackShipmentModal = () => {
  const { open, shipment, onClose } = useTrackShipmentStore();

  if (!open && !shipment) return null;
  return (
    <div className="fixed inset-0 bg-black/30 !z-[1000]">
      <div className="fixed bg-white max-w-3xl w-full h-screen right-0 top-0 bottom-0 overflow-y-auto no-scrollbar">
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-md bg-primary text-white flex items-center justify-center absolute top-4 left-4"
        >
          <X size={18} />
        </button>
      </div>
      
    </div>
  );
};

export default TrackShipmentModal;
