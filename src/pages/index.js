import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-6xl font-regular mb-4">Multimedia designer</h1>
        <p className="text-lg">Explore my work, learn more about me, and feel free to get in touch!</p>
      </main>
    </div>
  );
}
