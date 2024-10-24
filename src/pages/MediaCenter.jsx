import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { blogs, galleries } from "../constants";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AnimationWrapper from "../components/AnimationWrapper";
import { useMediaGalleryStore } from "../stores";
import { useCallback } from "react";

const MediaCenter = () => {
  const { setMedia, onOpen } = useMediaGalleryStore();
  const handleSubscribe = (values) => {
    if (!values.email) {
      toast.error("Email field is required");
      return;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      toast.error("Invalid email format");
      return;
    }

    toast.success(`Thanks for susbcribing ${values.email}`);
  };

  const handleMediaGalleryOpen = useCallback(
    (media) => {
      setMedia(media);
      onOpen(true);
    },
    [onOpen, setMedia]
  );

  return (
    <AnimationWrapper>
      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="wrapper grid md:grid-cols-2 md:items-center gap-6"
        >
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <h1 className="sm:text-5xl text-3xl font-bold">Vinsum Blog</h1>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={handleSubscribe}
            >
              {({ values, handleChange, handleSubmit }) => (
                <Form
                  onSubmit={handleSubmit}
                  className="mt-6 relative rounded-full max-w-sm w-full border h-11"
                >
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="outline-none bg-transparent border-none h-full w-full rounded-full pl-4 pr-[150px] text-sm"
                  />
                  <button
                    type="submit"
                    className="btn primary-btn !rounded-full absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    Subscribe
                  </button>
                </Form>
              )}
            </Formik>
          </motion.div>

          <motion.p
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="md:ml-auto text-lg md:max-w-sm w-full"
          >
            New product features, the latest in the technology, solutions, and
            updates.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="wrapper">
          <div className="flex md:flex-row flex-col">
            {blogs.map((blog, index) => (
              <div key={index} className="w-full  relative">
                <div className="h-[400px] relative">
                  <img
                    src={blog.images[0]}
                    alt={blog.title}
                    className="w-full h-full  object-cover"
                  />
                  <div className="absolute inset-0 bg-background/20" />
                  <div className="w-full p-4 py-10 absolute backdrop-blur-sm bg-white/30 text-white  left-0 right-0 bottom-0">
                    <div className="z-10">
                      <h3 className="font-semibold">{blog.author}</h3>
                      <p className="text-white font-medium">{blog.cratedAt}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-xl font-bold relative w-full cursor-pointer underline"
                  >
                    {blog.title}
                  </Link>
                  <p
                    className="line-clamp-2 my-4 font-medium"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                    aria-label="Blog information content"
                  ></p>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="flex items-center font-semibold gap-1 text-sm"
                  >
                    Read post <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="wrapper space-y-12 ">
          <h1 className="text-3xl font-bold text-center ">Our Gallery</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleries.map((image, index) => (
              <div key={index} className="grid gap-4">
                <div className="cursor-pointer" onClick={() => handleMediaGalleryOpen(image)}>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default MediaCenter;
