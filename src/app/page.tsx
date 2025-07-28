'use client';

import UserCard from "@/components/UserCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  const [storedName, setStoredName] = useState('');
  const [storedEmail, setStoredEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');

    if (!storedData) {
      router.push("/signUp");
      return;
    }

    try {
      const parsed = JSON.parse(storedData);
      const savedName = parsed.name || '';
      const savedEmail = parsed.email || '';
      setStoredName(savedName);
      setStoredEmail(savedEmail);
    } catch (e) {
      console.error("Failed to parse userData from localStorage", e);
    }

    setIsLoading(false);
  }, [router]);

  const isSignUpPage = pathname === "/signUp";

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  if (isSignUpPage) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="p-6">
        <UserCard name={storedName} email={storedEmail} />
      </div>
    </>
  );
}
