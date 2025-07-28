import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
        This app is a showcase of <strong>frontend development skills</strong> using <strong>React</strong> and <strong>Next.js</strong>.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>A working <strong>sign-up form</strong></li>
        <li>A <strong>responsive navigation bar</strong></li>
        <li><strong>Reusable components</strong></li>
      </ul>
      </main>
    </>
  );
}
