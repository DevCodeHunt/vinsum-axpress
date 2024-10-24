import { useFormik } from "formik";
import AnimationWrapper from "../components/AnimationWrapper";
import * as Yup from "yup";
import Input from "../components/Input";
import toast from "react-hot-toast";
// import axios from "axios";

const validationSchema = Yup.object({
  panNumber: Yup.string()
    .required("Pan number is required")
    .matches(/[A-Z]{5}\d{4}[A-Z]{1}/, "Invalid PAN number format")
    .trim(),
  name: Yup.string().required("Name is required").trim(),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^\d+$/, "Mobile number must contain only digits")
    .trim(),
  address: Yup.string().required("Address is required").trim(),
  remarks: Yup.string().required("Remarks is required").trim(),
  service: Yup.string().required("Please select atleast one service.").trim(),
});
const initialValues = {
  panNumber: "",
  name: "",
  mobile: "",
  address: "",
  remarks: "",
  service: "",
};

const Franchise = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        //    await  axios.get("")
        console.log(values);
        resetForm();
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });

  return (
    <AnimationWrapper className="py-20">
      <div className="wrapper grid lg:grid-cols-2 gap-6">
        <div>
          <img
            src="/images/franchise.png"
            alt="franchise"
            className="rounded-2xl"
          />
        </div>

        <div>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full p-4 rounded-2xl bg-white drop-shadow space-y-4"
          >
            <Input
              id="panNumber"
              name="panNumber"
              label="Pan Number"
              value={formik.values.panNumber}
              onChange={formik.handleChange}
              error={formik.errors.panNumber}
            />
            <Input
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name}
            />
            <Input
              id="mobile"
              name="mobile"
              label="Mobile No"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.errors.mobile}
            />
            <Input
              id="address"
              name="address"
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.errors.address}
            />
            <Input
              id="remarks"
              name="remarks"
              label="Remarks"
              value={formik.values.remarks}
              onChange={formik.handleChange}
              error={formik.errors.remarks}
            />
            <div className="space-y-2">
              <p>You are a</p>
              <div className="space-y-2">
                {["Booking Agent", "Delivery Agent", "Vendor/Partner"].map(
                  (value) => (
                    <label
                      key={value}
                      htmlFor={value}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="radio"
                        id={value}
                        name={value}
                        checked={formik.values.service === value}
                        value={formik.values.service}
                        onChange={() => formik.setFieldValue("service", value)}
                        className="peer sr-only"
                      />
                      <div className="relative w-5 h-5 rounded-full bg-gray-300 cursor-pointer peer-checked:bg-blue-600 before:content-[''] before:absolute before:w-2 before:h-2 before:peer-checked:bg-white before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full "></div>
                      <span>{value}</span>
                    </label>
                  )
                )}
                <small className="text-rose-600">{formik.errors.service}</small>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button type="submit" className="btn primary-btn">
                {" "}
                Submit
              </button>
              <button
                type="button"
                onClick={() => formik.resetForm()}
                className="btn border border-neutral-300 hover:bg-primary transition duration-300 hover:text-white"
              >
                {" "}
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Franchise;
