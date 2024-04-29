'use client';
// IMPORTED FROM: https://sdk.vercel.ai/docs/guides/frameworks/nextjs-app#in-client-components
import { useChat } from 'ai/react';

import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className='container flex flex-col w-full h-screen max-h-dvh bg-background py-4'>
      {/* GREY+BLUE COLOR: bg-[#64748b] */}

      <header className='p-4 border-b w-full max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-center'>AI Elli-bott</h1>
      </header>

      <section>
        <ul>
          {messages.map((m, index) => (
            <li key={index}>
              {m.role === 'user' ? 'Me: ' : 'Elli-bott: '}
              {m.content}
            </li>
          ))}
        </ul>
      </section>
      <section className='p-4 absolute inset-x-0 bottom-0'>
        <form
          onSubmit={handleSubmit}
          className='flex w-full max-w-3xl mx-auto items-center'
        >
          <Input
            className='flex-1 min-h-[40px]'
            placeholder='Ask me anything...'
            type='text'
            value={input}
            onChange={handleInputChange}
          />
          <Button type='submit' className='ml-2'>
            Submit
          </Button>
        </form>
      </section>
    </main>
  );
}
