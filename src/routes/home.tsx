import { useEffect, useState } from "react";
import { getTop1Anime } from "../types";
// import type { GetAnime } from "@/types/anime";
// import { getAnime, getTopAnime } from "@/lib/api";
import { META, ANIME } from "../lib/api";
import Carousel from "nuka-carousel";
import { Trending } from "../types/meta/trending";

export default function Home() {
  const [data, setData] = useState<Trending | null>(null);

  useEffect(() => {
    (async () => {
      const data = await META.getTrendingAnime();
      setData(data);
    })();
  }, []);

  return (
    <div className="w-screen bg-gray-500 text-white">
      <Carousel>
        {data?.results.map((el) => {
          return (
            <div className="mt-5">
              <img
                src={el.cover}
                alt=""
                className="aspect-video w-full h-[400px] object-cover"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
