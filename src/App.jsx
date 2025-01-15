import { useState, useEffect, useRef } from "react";

function App() {
  const audioRef = useRef(null);

  const [hasInteracted, setHasInteracted] = useState(false);
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true); // Menandakan bahwa interaksi pertama terjadi
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
    };
  }, [hasInteracted]);

  console.log(img1);
  return (
    <>
      <main className="flex flex-col justify-between items-center w-full min-h-screen">
        {/* musikkk */}
        <audio ref={audioRef} src="/audio/uia-birthday.mp3" loop />

        {/* atas */}
        {hasInteracted ? (
          <>
            <p className="text-center text-sm">u i a u a i u i a u a i</p>

            {/* intinya yah */}
            <div className="flex flex-col justify-center items-center w-3/4 min-h-screen">
              <img src="uia.png" alt="uiaiu" className="object-contain w-48" />
              <h1 className="text-3xl text-center font-bold mb-4">
                selamat hari menetas
              </h1>
              <div>
                <p className="text-center text-sm">
                  Semoga sukses selalu,selalu dilancarkan rezeki, selalu, bahagia, sehat
                </p>
                <p className="text-center text-sm">
                  bingung mau ucapin apa, pokoknya doa yang terbaik
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 md:w-2/4 min-h-screen">
              <img src="hehe.jpeg" alt="anjing senyum" className="object-contain w-48 mb-16" />
              <h1 className="text-3xl text-center font-bold mb-4">
                Balikin wish kali, ya?
              </h1>
              <div>
                <p className="text-center text-sm">
                semoga km sukses trs dalam sgla hal, lancar buat kuliah, tugas akhir, dan ksibukan yg lg km lakuin. semoga km bisa bahagiain ortu n sukses karier kedepannya. jaga kesehatan ya. semoga jg km bisa lbih bisa mengekspresikan smua hal yg pgn km lakuin, semoga km bsa lebih tersurat n jujur sm diri km sendiri. aamiin.
                </p>
                <p className="text-center text-sm">selamat ulang tahun ya, nad</p>
                <p className="mt-20 text-center text-sm">;)</p>
              </div>
            </div>

            {/* inti 2 */}
            <div className="flex flex-col justify-center items-center w-3/4 min-h-screen">
              <p className="mb-10 text-2xl font-bold">wkwkwk pilih ga sih</p>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src={img1 ? "Deborah_Purrr.png" : "box-hadiah.png"}
                  alt="yes"
                  onClick={() => setImg1(true)}
                />
                <img
                  src={img2 ? "mie-ayam.jpeg" : "box-hadiah.png"}
                  alt="yes"
                  onClick={() => setImg2(true)}
                />
                <img
                  src={img3 ? "wkwk.jpg" : "box-hadiah.png"}
                  alt="yes"
                  onClick={() => setImg3(true)}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-3/4 min-h-screen">
              <p className="text-center text-slate-500">kata gweh akhir semester gini harus semangat</p>
              <p className="text-center text-slate-500">#salamsuwasta</p>
            </div>

            {/* bawah */}
            <p className="text-center text-sm">u i a u a i u i a u a i</p>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black">
            <p className="text-white font-bold">Klik ga sihhh</p>
            <p className="text-white font-bold">abis klik jangan lupa scroll wkwkwkw</p>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
