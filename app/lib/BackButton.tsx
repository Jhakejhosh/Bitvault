'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-white/80 py-2 hover:text-white"
    >
      ← Go Back
    </button>
  );
}