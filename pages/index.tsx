import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "react-query";
import { fetchUnsplashPhotos } from "@/services/api";
import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function Home() {
  const [query, setQuery] = useState("");
  const { data, isLoading, isError, error } = useQuery(
    ["unsplashPhotos", query],
    () => fetchUnsplashPhotos(query)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="w-full text-center mt-10">an error occurred</div>;
  }

  return (
    <main
      className={`flex min-h-screen text-red-500 flex-col items-center justify-between ${inter.className}`}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {data.map((photo: any) => (
          <div
            className="h-[350px] relative rounded-md w-full shadow-lg border cursor-pointer outer-div"
            key={photo.id}
          >
            <Image
              src={photo.urls.regular}
              alt={photo.alt_description}
              fill
              className="rounded-md"
            />
            <div className="bg-white absolute w-full rounded-b-md z-10 inner-div flex flex-col gap-2 p-4">
              <p className="text-[#342C9A] font-bold w-full truncate">
                {photo?.user?.first_name}&nbsp;{photo?.user?.last_name}
              </p>
              <p className="text-sm text-gray-500">{photo?.user?.location}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="w-full gap-1 border h-10 rounded bg-[#C73636]"></div>
                <div className="w-full gap-1 border h-10 rounded bg-[#342C9A]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
