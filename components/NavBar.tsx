"use client";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PagesIcon from "@mui/icons-material/Pages";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";

const NavBar = () => {
  const [page, setPage] = useState("Home");

  const route = useRouter();
  const navigateToHome = () => {
    route.push("/", { scroll: false });
  };
  const navigateToReadArticale = () => {
    route.push("/read", { scroll: false });
  };
  const navigateToProfile = () => {
    route.push("/profile", { scroll: false });
  };

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname == "/") {
      setPage("home");
    } else if (pathname == "/read") {
      setPage("read");
    } else if (pathname == "/profile") {
      setPage("profile");
    }else if(pathname == "/sign-in"){ 
      setPage("sign-in");
    }else if(pathname=="/sign-up"){
      setPage("sign-up");
    }else{
      setPage("read");
    }
  }, [pathname, searchParams]);

  return (
    <div className="font-family-Montserrat flex items-center justify-between nsTsm:flex-col md:flex-col">
      <div className="nsTsm:pt-[20px] md:pt-[20px]">
        <div className="text-[36px] font-bold text-white" onClick={navigateToHome}>
          ARTICLE<span className="text-blue-500">ROOT</span>
        </div>
      </div>

      <div className="flex gap-[30px] nsTsm:flex-col nsTsm:items-center  nsTsm:pt-[30px] md:flex-col md:items-center md:pt-[30px]">
        <div className="flex items-center gap-[30px] px-[60px] py-[20px] w-fit bg-slate-900 border-[1px] border-slate-800 rounded-[24px] nsTsm:bg-transparent nsTsm:border-none nsTsm:py-0 nsTsm:px-0 md:bg-transparent md:border-none md:px-0 md:py-0">
          
        <div
            className="flex items-center gap-[6px] cursor-pointer"
            onClick={navigateToHome}
          >
            <div
              className={`${"font-family-Roboto font-medium text-[16px] flex items-center gap-[6px] "} ${
                page === "home"
                  ? "text-blue-500 font-semibold"
                  : "text-white"
              }`}
            >
              <PagesIcon sx={{ width: "16px", height: "16px" }} /> Articles
            </div>
          </div>
          
          
          <div
            className="flex items-center gap-[6px] cursor-pointer"
            // onClick={navigateToReadArticale}
          >
            <div
              className={`${"font-family-Roboto font-medium text-[16px] flex items-center gap-[6px] "} ${
                page === "read" ? "text-blue-500 font-semibold" : "text-white"
              }`}
            >
              <AutoStoriesOutlinedIcon sx={{ width: "16px", height: "16px" }} />{" "}
              Read
            </div>
          </div>

       

          {/* <div
            className="flex items-center cursor-pointer"
            onClick={navigateToProfile}
          >
            <div
              className={`${"font-family-Roboto font-medium text-[16px] flex items-center gap-[6px] "} ${
                page === "profile"
                  ? "text-blue-500 font-semibold"
                  : "text-white"
              }`}
            >
              {" "}
              <AccountCircleIcon sx={{ width: "16px", height: "16px" }} />{" "}
              Profile
            </div>
          </div> */}
        </div>
        <div className="flex items-center gap-[30px] nsTsm:pb-[20px] nsTsm:pt-[10px] md:pb-[20px] md:pt-[10px]">
          <button className="text-[18px] font-medium text-white">Login</button>
          <button className="text-[18px] font-medium bg-blue-500 px-[24px] py-[8px] rounded-md text-white">
            Fund
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
