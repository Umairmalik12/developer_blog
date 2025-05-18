"use server"

import { z } from "zod"

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

// Newsletter schema
const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    const result = contactFormSchema.safeParse({ name, email, subject, message })

    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors }
    }

    // In a real application, you would send an email here
    // For example, using a service like SendGrid, Mailgun, etc.
    console.log("Sending email with:", { name, email, subject, message })

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Extract email
    const email = formData.get("email") as string

    // Validate email
    const result = newsletterSchema.safeParse({ email })

    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors }
    }

    // In a real application, you would add the email to your newsletter service
    // For example, using Mailchimp, ConvertKit, etc.
    console.log("Subscribing email to newsletter:", email)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}
