import Image from 'next/image'
import React from 'react';
import Container from '@/components/Container';
import Comments from '@/components/Comments';
import Heading from '@/components/Heading';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Heading/>
      <Container/>
      <Comments />
    </main>
  )
}
