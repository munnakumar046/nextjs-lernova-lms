import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Menu from "@/components/Menu";
import { GraduationCap } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-4 "
        >
          <GraduationCap />
          <span className="hidden lg:block text-2xl font-semibold">
            Lernova
          </span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
