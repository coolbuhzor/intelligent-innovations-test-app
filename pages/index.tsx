import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "react-query";
import { fetchUnsplashPhotos } from "@/services/api";
import { useSearch } from "@/context/search-context";
import { Fave, Unlike } from "@/assets/svg";
import Head from "next/head";

// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function Home() {
  const { searchQuery } = useSearch();

  const { data, isLoading, isError } = useQuery(
    ["unsplashPhotos", searchQuery],
    () => fetchUnsplashPhotos(searchQuery)
  );

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <SkeletonLoader key={i} />
          ))}
      </div>
    );
  }

  if (isError) {
    return <div className="w-full text-center mt-10">an error occurred</div>;
  }

  return (
    <main
      className={`flex min-h-screen text-red-500 flex-col items-center justify-between pb-10 ${inter.className}`}
    >
      <Head>
        <title>Intelligent Innovation Test</title>
        <meta name="description" content="This is a Next.js app." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
              className="rounded-md select-none object-cover"
            />
            <div className="bg-white absolute w-full rounded-b-md z-1 inner-div flex flex-col gap-2 p-4">
              <p className="text-[#342C9A] font-bold w-full truncate">
                {photo?.user?.first_name}&nbsp;{photo?.user?.last_name}
              </p>
              <p className="text-sm text-gray-500">{photo?.user?.location}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="w-full gap-1 border h-10 grid place-content-center rounded bg-[#C73636]">
                  <Fave className="stroke-[#fff]" />
                </div>
                <div className="w-full gap-1 border h-10 rounded bg-[#342C9A] grid place-content-center">
                  <Unlike className="stroke-[#fff]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className }) => {
  return (
    <div
      className={`bg-gray-300 animate-pulse w-full h-[350px] border ${
        className || ""
      }`}
    ></div>
  );
};
