"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="container_wrapper">
      <nav className="bg-[#692d2d] w-full py-4 px-6 flex justify-between items-center sticky top-0">
        <div className="text-white text-[1.6rem] font-medium">
          Commerce<em>go</em>
        </div>
        <div class="flex gap-x-2 items-center">
          <div className="text-white">About</div>
          <div className="text-white">Contact</div>
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center h-[90vh] hero_bg">
        <div className="content_home px-8 text-center">
          <h1 className="text-[white] font-bold text-[2rem]">
            Manage Your Companies Commerce Data In one Click
          </h1>
          <p className="text-[white] text-[13px]">
            Use Our Fully fledged Customer spreadsheet tools to organize your
            datas
          </p>
          <div className="cta mt-2 pt-5">
            <button
              className="bg-red-700  px-10 py-2 rounded-lg text-[1.2rem] text-[white] "
              onClick={() => router.push("/signup")}
            >
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
