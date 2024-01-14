"use client";
import Skeleton from "@mui/material/Skeleton";

export const MusicCardSkeleton = () => {
  return (
    <div className="flex flex-row items-center mr-10 my-2 md:my-10 p-6 w-full md:w-[27rem] h-[8rem] sm:h-[10rem] border-[1px] rounded-lg border-[#FFAA0080] bg-[#6666661a]">
      <div className="w-1/4 md:w-32 object-fit rounded-lg">
        <Skeleton animation={"wave"} width={"5rem"} height={"10rem"} className="h-48"></Skeleton>
      </div>
      <article className="flex flex-col justify-start ml-4">
        <Skeleton animation={"wave"} sx={{color: "antiquewhite"}} height={"2.5rem"} width={"11rem"} className="h-10 w-44"></Skeleton>
        <Skeleton animation={"wave"} height={"1.25rem"} width={"9rem"} className="h-5 w-36"></Skeleton>
        <Skeleton animation={"wave"} height={"1rem"} width={"3rem"} className="h-4 w-52 mt-2"></Skeleton>
      </article>
    </div>
  );
};
