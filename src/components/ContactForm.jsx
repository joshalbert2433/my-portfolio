import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactForm() {
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
	} = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: contactFormSchema,
		onSubmit: () => {
			console.log("hello");
		},
	});
	return (
		<form
			action="#"
			autoComplete="off"
			className="max-w-3xl mx-auto space-y-4 md:space-y-6"
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
					onChange={handleChange}
					onBlur={handleBlur}
					className={`input input-bordered w-full ${
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
					autoComplete="false"
					onChange={handleChange}
					onBlur={handleBlur}
					className={`input input-bordered w-full ${
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
					className={`textarea textarea-bordered w-full resize-none h-32 md:h-48 ${
						errors.message && touched.message && "textarea-warning"
					}`}
					name="message"
					id="message"
					onChange={handleChange}
					onBlur={handleBlur}
				></textarea>
				{errors.message && touched.message && (
					<div className="text-warning">{errors.message}</div>
				)}
			</div>

			<button
				type="submit"
				className="btn w-full mt-6 md:w-fit"
				disabled={isSubmitting}
			>
				Send Message
			</button>
		</form>
	);
}

export default ContactForm;
