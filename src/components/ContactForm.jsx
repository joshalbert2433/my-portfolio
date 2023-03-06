import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const toastOptions = {
	position: "top-center",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
};

function ContactForm() {
	const form = useRef();

	const sendEmail = async (values, actions) => {
		try {
			await emailjs.sendForm(
				SERVICE_ID,
				TEMPLATE_ID,
				form.current,
				PUBLIC_KEY
			);
			toast.info("Your message has been sent!", toastOptions);
			actions.setSubmitting(false);
			actions.resetForm();
		} catch (error) {
			console.log(error.text);
		}
	};

	const contactFormSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, "Name is too short!")
			.max(40, "Name is too long!")
			.required("Required"),
		email: Yup.string().email("Invalid email address").required("Required"),
		message: Yup.string()
			.min(10, "Message is too short.")
			.max(400, "Message is too long")
			.required("Required"),
	});

	const {
		values,
		errors,
		isSubmitting,
		touched,
		handleBlur,
		handleSubmit,
		handleChange,
		dirty,
	} = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: contactFormSchema,
		onSubmit: sendEmail,
	});
	return (
		<form
			ref={form}
			autoComplete="off"
			className="mx-auto max-w-3xl space-y-4 md:space-y-6"
			onSubmit={handleSubmit}
		>
			<div>
				<label htmlFor="name" className="label">
					Your Name:
				</label>
				<input
					type="text"
					name="name"
					id="name"
					value={values.name}
					onChange={handleChange}
					onBlur={handleBlur}
					className={`input-bordered input w-full ${
						errors.name && touched.name && "input-warning"
					}`}
				/>
				{errors.name && touched.name && (
					<div className="text-warning">{errors.name}</div>
				)}
			</div>
			<div>
				<label htmlFor="email" className="label">
					Your Email:
				</label>
				<input
					type="text"
					name="email"
					id="email"
					value={values.email}
					autoComplete="false"
					onChange={handleChange}
					onBlur={handleBlur}
					className={`input-bordered input w-full ${
						errors.email && touched.email && "input-warning"
					}`}
				/>
				{errors.email && touched.email && (
					<div className="text-warning">{errors.email}</div>
				)}
			</div>
			<div>
				<label htmlFor="message" className="label">
					Message:
				</label>
				<textarea
					className={`textarea-bordered textarea h-32 w-full resize-none md:h-48 ${
						errors.message && touched.message && "textarea-warning"
					}`}
					name="message"
					id="message"
					value={values.message}
					onChange={handleChange}
					onBlur={handleBlur}
				></textarea>
				{errors.message && touched.message && (
					<div className="text-warning">{errors.message}</div>
				)}
			</div>

			<button
				type="submit"
				className="btn mt-6 w-full md:w-fit"
				disabled={isSubmitting}
			>
				Send Message
			</button>
			<ToastContainer />
		</form>
	);
}

export default ContactForm;
