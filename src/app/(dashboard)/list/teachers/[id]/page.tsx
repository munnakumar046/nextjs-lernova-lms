import Image from "next/image";
import React from "react";

function SingleTeacherPage() {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 md:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-amber-100 py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-2/3">
              <Image
                src=""
                alt=""
                width={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">munna kr</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2026</span>
                </div>
                <div className="">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>88738620</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex-1"></div>
        </div>
        {/* BOTTOM */}
        <div className="">Schedule</div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3">right</div>
    </div>
  );
}

export default SingleTeacherPage;
