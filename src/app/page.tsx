'use client';
import UserCard from "@/components/UserCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from 'react';

export default function Home() {
    const [storedName, setStoredName] = useState('');
    const [storedEmail, setStoredEmail] = useState('');

   useEffect(() => {
      const storedData = localStorage.getItem('userData');
        if (storedData) {
          try {
              const parsed = JSON.parse(storedData);
              const savedName = parsed.name|| '';
              const savedEmail = parsed.email || '';
              setStoredName(savedName);
              setStoredEmail(savedEmail);
            } catch (e) {
              console.error("Failed to parse userData from localStorage", e);
            }
          }
    }, []);
  return (
    <>
      <Navbar />
      <div className="p-6">
        <UserCard name={storedName} email={storedEmail} />
      </div>
    </>
  );
}
