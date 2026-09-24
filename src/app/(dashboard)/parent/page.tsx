import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

function ParentPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] p-4 gap-4 items-stretch">
      {/* left */}
      <div className="flex flex-col gap-4 h-full flex-1">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (Munna Kumar)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full flex flex-col gap-4 h-full flex-1">
        <div className="bg-white">
          <EventCalendar />
        </div>
        <div>
          <Announcements />
        </div>
      </div>
    </div>
  );
}
export default ParentPage;
