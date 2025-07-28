import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          We&#39;d love to hear from you! Please reach out using the form or email below.
        </p>
        <ul className="text-gray-800 space-y-2">
          <li><strong>Email:</strong> contact@example.com</li>
          <li><strong>Phone:</strong> +91 9*********</li>
          <li><strong>Address:</strong> Bengaluru, India</li>
        </ul>
      </main>
    </>
  );
}
