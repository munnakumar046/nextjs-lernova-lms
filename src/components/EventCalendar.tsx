"use client";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "hgjadskkkj",
    time: "12:00 PM - 02:00 PM",
    description: "AAAASDFGHJKLJKHGFDSSSADKHJGF",
  },
  {
    id: 2,
    title: "hgjadskkksdfdj",
    time: "01:00 PM - 04:00 PM",
    description: "AAAASDFGHJKLJKHGFDSSSADKHJGF",
  },
  {
    id: 3,
    title: "hgjaddfskkkj",
    time: "11:00 AM - 05:00 PM",
    description: "AAAASDFGHJKLJKHGFDSSSADKHJGF",
  },
];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="" suppressHydrationWarning>
      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between mt-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Finance Overview
        </h1>
        <Ellipsis className="cursor-pointer text-gray-500" />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md bg-sky-100 border-2 border-t-2 "
            key={event.id}
          >
            <div className="flex items-center justify-between ">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-500 text-xs" suppressHydrationWarning>
                {event.time}
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default EventCalendar;
