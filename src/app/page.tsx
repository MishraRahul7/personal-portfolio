import Navbar from '@/components/Navbar';

export default function Home() {
  return (
  <>
    <main className='min-h-screen bg-black/[0.56] antialiased'>
      <div className='relative w-full flex items-center justify-center' >
        <Navbar/>
      </div>
      <h1 className='text-2xl text-center'>Portfolio</h1>
    </main>
  </>
  );
}
