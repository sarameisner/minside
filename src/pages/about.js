import Header from "@/components/Header";
import Images from "@/components/Images";

export default function About() {
  return (
    <div className="bg-[#ece6e6] min-h-screen">
      {/* Header */}
      <Header />

      {/* Centreret Overskrift */}
      <div className="flex justify-center mt-12">
        <h1 className="text-6xl md:text-7xl font-boutegard text-center">About me</h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between px-4 sm:px-8 lg:px-20 py-12 gap-8">
        {/* Teksten omkring dig */}
        <div className="lg:w-1/2 relative">
          {/* Container for tekst og papir */}
          <div className="relative w-full max-w-[90%] mx-auto mt-6">
            {/* Clips */}
            <img src="/images/clips.png" alt="Paper clip" className="absolute -top-8 -left-4 w-14 md:w-16 z-20 rotate-[20deg]" />

            {/* Baggrundsbillede (papir) */}
            <img src="/images/tekstur.png" alt="Paper background" className="absolute top-0 left-0 w-full h-full object-cover z-0 drop-shadow-lg" />

            {/* Tekst på papiret */}
            <div className="relative z-10 p-10 text-left">
              <p className="text-lg leading-relaxed font-avantn">My name is Sara Meisner, and I am a Multimedia Design student at Københavns Erhvervsakademi, specializing in frontend development. My passion for frontend is driven by my curiosity and eagerness to continuously learn and grow. Outside of my studies, I have a strong focus on design and creative work. In my free time, I assist upcoming businesses and artists by contributing my skills in photography, video editing, and brand identity. I love combining my technical knowledge with my creative talents to create visual solutions that engage and inspire.</p>
            </div>
          </div>
        </div>

        {/* Image-komponent */}
        <div className="lg:w-1/2 flex justify-center">
          <Images />
        </div>
      </div>

      {/* Skills, Languages, Tools */}
      <div className="flex flex-col lg:flex-row justify-around items-start px-4 sm:px-8 lg:px-20 py-12 gap-12">
        {/* Skills */}
        <div>
          <h2 className="text-4xl md:text-5xl font-boutegard mb-4 text-center">Skills</h2>
          <ul className="text-lg font-avantn space-y-2">
            <li>Frontend web development</li>
            <li>UX & UI design</li>
            <li>Graphic design</li>
            <li>Content planning and creation</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Layout design & grid system</li>
            <li>Editing</li>
            <li>Moodboarding</li>
            <li>Mockups</li>
            <li>Illustration</li>
            <li>Photography</li>
            <li>Videography</li>
            <li>User testing</li>
            <li>Project management</li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-4xl md:text-5xl font-boutegard mb-4 text-center">Languages</h2>
          <ul className="text-lg font-avantn space-y-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-4xl md:text-5xl font-boutegard mb-4 text-center">Tools</h2>
          <ul className="text-lg font-avantn space-y-2">
            <li>VSCode</li>
            <li>Astro</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>InDesign</li>
            <li>Premiere Pro</li>
            <li>Microsoft Office</li>
            <li>Trello</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
