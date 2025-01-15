import { useState, useEffect, useRef } from "react";

function App() {
  const audioRef = useRef(null);

  const [hasInteracted, setHasInteracted] = useState(false);
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);  // Menandakan bahwa interaksi pertama terjadi
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
    }
  };

  useEffect(() => {
    // Menambahkan event listener untuk klik atau scroll
    window.addEventListener("click", handleInteraction);

    // Menghapus event listener saat komponen dibersihkan
    return () => {
      window.removeEventListener("click", handleInteraction);
    }
  }, [hasInteracted]);

  console.log(img1);
  return (
    <>
      <main className="flex flex-col justify-between items-center w-full min-h-screen">
        {/* atas */}
        <p className="text-center text-sm">u i a u a i u i a u a i</p>

        {/* musikkk */}
        <audio ref={audioRef} src="/audio/Section 6 - HAND HQ Ambient Theme Zenless Zone Zero 1.3.mp3" loop />

        {/* intinya yah */}
        <div className="flex flex-col justify-center items-center w-3/4 min-h-screen">
          <img src="uia.png" alt="" className="object-contain w-48" />
          <h1 className="text-3xl text-center font-bold mb-4">
            selamat hari menetas
          </h1>
          <div>
            <p className="text-center text-sm">
              Semoga bertambahnya usia dan berkurangnya umur menjadi lebih
              bahagia
            </p>
            <p className="text-center text-sm">
              bingung mau doain apa, pokoknya terbaik:3
            </p>
          </div>
        </div>

        <p>Terus kebawah</p>
        {/* inti 2 */}
        <div className="flex flex-col justify-center items-center w-3/4 min-h-screen">
          <p className="text-2xl">wkwkwk pilih ga sih</p>
          <div className="grid grid-cols-3 gap-2">
            <img src={img1 ? "img1.png" : "box-hadiah.png"} alt="yes" onClick={()=> setImg1(true)}/>
            <img src={img2 ? "img1.png" : "box-hadiah.png"} alt="yes" onClick={()=> setImg2(true)}/>
            <img src={img3 ? "img1.png" : "box-hadiah.png"} alt="yes" onClick={()=> setImg3(true)}/>
          </div>
        </div>

        {/* bawah */}
        <p className="text-center text-sm">u i a u a i u i a u a i</p>
      </main>
    </>
  );
}

export default App;
