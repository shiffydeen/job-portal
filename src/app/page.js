import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Fragment } from "react";

async function Home() {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    { text: "Feed", href: "/feed" },
    {
      text: "Jobs",
      href: "/jobs",
    },
    {
      text: "Membership",
      href: "/membership",
    },
    {
      text: "Account",
      href: "/account",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 lg:px-8 min-h-screen">
      <div className="flex items-center h-16">
        <Link href={"/"} className="font-bold text-3xl hidden lg:block">
          JOBSCO
        </Link>
        <nav className="ml-auto">
          <ul className="lg:flex gap-7 font-semibold hidden ">
            {menuItems.map((item) => (
              <li>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center mt-16">
        <div className="w-full lg:w-[50%]">
          <div>
            <span></span>
            <span className="text-muted-foreground">
              One Stop Solution to Find Jobs
            </span>
          </div>
          <h1 className="text-3xl lg:text-7xl font-bold mt-5">
            Build your best job community starting from here.
          </h1>
          <div className="flex gap-3 mt-6">
            <Button className="">Job Dashboard</Button>
            <Button>Post New Job</Button>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <img
            src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
