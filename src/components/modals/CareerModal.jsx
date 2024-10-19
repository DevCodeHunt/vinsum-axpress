import { useCallback, useState } from "react";
import { useJobApplyStore } from "../../stores";
import Modals from "./Modals";
import { CloudUpload } from "lucide-react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import Input from "../Input";

const initialValues = {
  email: "",
  fullName: "",
  phone: "",
  experience: "",
  currentCtc: "",
  expectedCtc: "",
};

const CareerModal = () => {
  const { open, onClose, clearJob, job } = useJobApplyStore();
  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const [file, setFile] = useState(null);

  const handleClose = useCallback(() => {
    onClose();
    clearJob();
  }, [clearJob, onClose]);

  const onDrop = useCallback((acceptedFiles) => {
    const myFile = acceptedFiles[0];
    const allowedFileTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 10 * 1024 * 1024;
    if (!allowedFileTypes.includes(myFile.type)) {
      toast.error("Error: Only PDF or DOCX files are allowed.");
      return;
    }

    if (myFile.size > maxSize) {
      toast.error("Error: File size should be 10MB or less.");
      return;
    }
    setFile(myFile);
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmitApplication = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const { fullName, email, phone, experience, expectedCtc, currentCtc } =
      formValues;

    if (
      !fullName ||
      !email ||
      !phone ||
      !experience ||
      !currentCtc ||
      !expectedCtc ||
      !file
    ) {
      setIsLoading(false);
      toast.error("All fields are required");
      return;
    }

    const formdata = new FormData();
    formdata.append("fullName", fullName);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("experience", experience);
    formdata.append("currentCtc", currentCtc);
    formdata.append("expectedCtc", expectedCtc);
    if (file) formdata.append("resume", file);

    // Simulate sending email
    setTimeout(() => {
      setIsLoading(false);
      setFormValues(initialValues);
      setFile(null);
      toast.success("Application submitted successfully!");
      handleClose();
    }, 2000);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });
  const { fullName, email, phone, experience, expectedCtc, currentCtc } =
    formValues;

  const body = (
    <>
      <form onSubmit={handleSubmitApplication}>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <Input
            label="Full Name"
            id="fullName"
            value={fullName}
            onChange={handleInputChange}
          />
          <Input
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={handleInputChange}
          />
          <Input
            label="Phone"
            id="phone"
            value={phone}
            onChange={handleInputChange}
          />
          <Input
            label="Experience"
            id="experience"
            value={experience}
            onChange={handleInputChange}
          />
          <Input
            label="Current CTC"
            id="currentCtc"
            value={currentCtc}
            onChange={handleInputChange}
          />
          <Input
            label="Expected CTC"
            id="expectedCtc"
            value={expectedCtc}
            onChange={handleInputChange}
          />
        </div>
        <label
          {...getRootProps()}
          onClick={(e) => e.stopPropagation()}
          htmlFor="file"
          className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg h-56 !mt-10"
        >
          <CloudUpload size={42} className="text-gray-600" />
          {isDragActive ? (
            <p className="text-xs text-gray-500">
              Release to drop the files here
            </p>
          ) : (
            <>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                PDF, DOCX, etc (MAX. 800x400px)
              </p>
            </>
          )}
          <input
            type="file"
            id="file"
            accept=".pdf,.docx"
            hidden
            {...getInputProps()}
          />
        </label>
        <div className="flex justify-end">
          <button
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            className="btn primary-btn disabled:bg-foreground mt-6"
          >
            {isLoading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </>
  );

  return (
    <Modals
      isOpen={open}
      onClose={handleClose}
      title={` Apply for the ${job?.position} role`}
      body={body}
    />
  );
};

export default CareerModal;
