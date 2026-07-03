import { format } from "date-fns";
import Image from "next/image";
import React, { useMemo } from "react";

interface EventCardProps {
  image: string;
  title: string;
  date?: string | null; // e.g. "2026-05-06T00:00:00.000Z"
  startTime?: string | null; // e.g. "19:05"
  endDate?: string | null;
  endTime?: string | null;
  address: string;
}

const EventCard = ({
  image,
  title,
  date,
  startTime,
  endDate,
  endTime,
  address,
}: EventCardProps) => {
  const eventDate = useMemo(() => (date ? new Date(date) : null), [date]);

  const formattedDate = useMemo(() => {
    if (!eventDate) return "";
    try {
      return format(eventDate, "do MMM, yyyy");
    } catch {
      return "";
    }
  }, [eventDate]);

  const formattedTime = useMemo(() => {
    if (!startTime) return "";
    try {
      // parse "HH:mm" into a Date so date-fns can format it
      const [hours, minutes] = startTime.split(":").map(Number);
      const d = new Date();
      d.setHours(hours, minutes, 0, 0);
      return format(d, "h:mm a"); // e.g. "7:05 PM"
    } catch {
      return startTime;
    }
  }, [startTime]);

  const now = new Date();

  // Combine date + startTime into a single Date for accurate label comparison
  const eventStart = useMemo(() => {
    if (!eventDate) return null;
    if (!startTime) return eventDate;
    try {
      const [hours, minutes] = startTime.split(":").map(Number);
      const d = new Date(eventDate);
      d.setHours(hours, minutes, 0, 0);
      return d;
    } catch {
      return eventDate;
    }
  }, [eventDate, startTime]);

  const eventEnd = useMemo(() => {
    if (!eventStart) return null;
    if (!endTime) {
      return new Date(eventStart.getTime() + 3 * 60 * 60 * 1000);
    }

    try {
      const [hours, minutes] = endTime.split(":").map(Number);
      const d = endDate ? new Date(endDate) : new Date(eventStart);
      d.setHours(hours, minutes, 0, 0);
      return d;
    } catch {
      return new Date(eventStart.getTime() + 3 * 60 * 60 * 1000);
    }
  }, [eventStart, endDate, endTime]);

  const timeDiff = eventStart ? eventStart.getTime() - now.getTime() : 0;
  const diffHours = timeDiff / (1000 * 60 * 60);
  const diffMins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  const label = (() => {
    if (!eventStart || !eventEnd) return "";
    if (now > eventEnd) return "Ended";
    if (now >= eventStart && now <= eventEnd) return "Going On";

    const isToday =
      eventStart.getDate() === now.getDate() &&
      eventStart.getMonth() === now.getMonth() &&
      eventStart.getFullYear() === now.getFullYear();

    if (isToday) {
      if (diffHours > 0) {
        return `In ${Math.floor(diffHours)}hr ${diffMins}mins`;
      } else return "Today";
    }

    return "";
  })();

  return (
    <div className="p-5 bg-[#F5F5F5] rounded-2xl overflow-hidden duration-300 w-full">
      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
        <Image src={image || ""} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-2 mt-5 text-sm">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>

        {/* Date · Time */}
        <div className="flex flex-wrap whitespace-nowrap items-center gap-2 text-[#666867]">
          {!!label && (
          <span
            className={`px-2 text-xs p-1 rounded-2xl w-fit ${
              label === "Going On"
                ? "bg-[#E64659]"
                : label === "Ended"
                  ? "bg-[#666867]"
                  : "bg-[#5575FF]"
            } text-white`}
          >
            {label}
          </span>
        )}
          
          {formattedDate && <span>{formattedDate}</span>}
          {formattedDate && formattedTime && <span>·</span>}
          {formattedTime && <span>{formattedTime}</span>}

          
        </div>

        {/* Label (if active event) */}
        

        {/* Address */}
        <span className="text-[#0B0B0B] line-clamp-4">{address}</span>
      </div>
    </div>
  );
};

export default EventCard;
