import Head from "next/head";
import Image from "next/image";
import { useData } from "@/context/search-context";
import { Fave, SelectCaret, Unlike } from "@/assets/svg";

export default function Home() {
  const { photos, error, isLoading, isFetching } = useData();

  console.log(photos, "photos");
  if (isLoading || isFetching) {
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

  if (error) {
    return <div className="w-full text-center mt-20">an error occurred</div>;
  }

  const headings = [
    {
      id: 1,
      name: "World",
    },
    {
      id: 2,
      name: "Following",
    },
    {
      id: 3,
      name: "Popular",
    },
    {
      id: 4,
      name: "Post",
    },
    {
      id: 5,
      name: "Gender",
    },
    {
      id: 6,
      name: "Location",
    },
    {
      id: 7,
      name: "Profession",
    },
  ];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pb-10 `}
    >
      <Head>
        <title>Intelligent Innovation Test</title>
        <meta name="description" content="This is a Next.js app." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-full ">
        <div className="w-full flex justify-between mb-5 overflow-x-auto ">
          {headings.map((item, i) => (
            <div
              className={`header-item first:rounded-l-[10px] last:border-r-0 last:rounded-r-[10px] border-r bg-white w-full py-2 flex justify-around items-center text-xs md:text-base`}
              key={i}
            >
              {item.name}
              <SelectCaret />
            </div>
          ))}
        </div>

        <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
          {photos?.map((photo: any) => (
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
        </section>
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
      className={`bg-gray-300 animate-pulse w-full h-[350px] border rounded-md ${
        className || ""
      }`}
    ></div>
  );
};
