import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ECE6E6]">
      <Header />
      <main className="flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">Explore my work, learn more about me, and feel free to get in touch!</p>
      </main>
    </div>
  );
}
