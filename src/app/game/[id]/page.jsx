'use client'
import { useParams } from 'next/navigation';
import Link from 'next/link';
import GameById from '@/components/GameById';

export default function GameDetail() {
    const { id } = useParams();

    return (
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center h-screen">
          <GameById id={id} />

          <Link href={'/'} className="my-5 inline-flex justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
            Home
          </Link>
        </div>
      );
      
}
