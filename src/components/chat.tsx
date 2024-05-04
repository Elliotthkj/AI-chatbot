'use client';
// IMPORTED FROM: https://sdk.vercel.ai/docs/guides/frameworks/nextjs-app#in-client-components
import { useChat } from 'ai/react';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { useRef, useEffect } from 'react';
import ThemeSwitch from './ThemeSwitch';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const chatParent = useRef<HTMLUListElement>(null);

  // TODO: Customize the scrollbar styling
  // TODO: Implement RAG w/ LangChain
  // TODO: Add transition delay when toggling theme

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  return (
    <main className='container flex flex-col w-full h-screen max-h-dvh bg-background py-4'>
      <header className='flex justify-between items-center p-4 border-b w-full max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-center'>AI Elli-bott</h1>
        <ThemeSwitch />
      </header>

      <section className='container px-0 pb-10 flex flex-col flex-grow gap-4 mx-auto max-w-3xl'>
        <ul
          ref={chatParent}
          className='h-1 p-4 flex-grow bg-muted/50 rounded-lg overflow-y-auto flex flex-col gap-4'
        >
          {messages.map((m, index) => (
            <>
              {m.role === 'user' ? (
                <li key={index} className='flex flex-row-reverse'>
                  <div className='rounded-xl p-4 bg-[#1987ff] shadow-md flex'>
                    <p className='text-white'>{m.content}</p>
                  </div>
                </li>
              ) : (
                <li key={index} className='flex flex-row'>
                  <div className='rounded-xl p-4 bg-background shadow-md flex w-3/4'>
                    <p className='text-primary'>
                      <span className='font-bold'>Elli-bott: </span>
                      {m.content}
                    </p>
                  </div>
                </li>
              )}
            </>
          ))}
        </ul>
      </section>

      <section className='p-4'>
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
