import Footer from './components/Footer';
import Header from './components/Header'; // Importing the Header component from Header.tsx
import Homepage from './Homepage'; // Importing the Homepage component from Homepage.tsx

export default function Home() {
  return (
    <main className='max-w-[1440px] m-auto'>
      <Header/>
      <Homepage/>
      <Footer/>
    </main>
  );
}
