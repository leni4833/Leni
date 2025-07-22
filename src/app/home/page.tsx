import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.barberstake.com/wp-content/uploads/2024/10/Low-Taper-Fade-Haircut-1-995x503.jpg')",
      }}
    >
      <h1 className="text-6xl md:text-8xl font-bold text-gray-300 drop-shadow-lg">
        Emma Smith
      </h1>
      <h3 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-300 drop-shadow-md">
        Designer
      </h3>
    </div>
  );
}

