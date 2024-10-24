import { useMediaGalleryStore } from "../../stores";
import { useEffect, useRef } from "react";

const MediaGalleryModal = () => {
  const { open, media, onClose } = useMediaGalleryStore();
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!open && !media) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-[1000] flex items-center justify-center p-4">
      <div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white max-w-2xl w-full max-h-[500px]   rounded-2xl"
      >
        <img
          src={media}
          alt="media"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default MediaGalleryModal;
