import { Play } from "lucide-react";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";

const events = [
  { day: "12", month: "Oct", title: "Community Town Hall on Local Governance", location: "Bauchi", time: "10:00 AM" },
  { day: "26", month: "Oct", title: "Youth Civic Leadership Training", location: "Kaduna", time: "9:00 AM" },
  { day: "08", month: "Nov", title: "Voter Education Outreach", location: "Gombe", time: "11:00 AM" },
];

export default function UpcomingEventsHome() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow-dark">Calendar</p>
            <h2 className="h2 mt-4">Upcoming events</h2>
            <ul className="mt-8 divide-y divide-hairline">
              {events.map((e) => (
                <li key={e.title} className="flex items-center gap-5 py-5">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md bg-navy text-center">
                    <span className="font-heading text-xl font-semibold leading-none text-gold">
                      {e.day}
                    </span>
                    <span className="mt-1 text-[11px] uppercase tracking-wide text-white/60">{e.month}</span>
                  </div>
                  <div>
                    <p className="font-heading text-base font-semibold text-navy">{e.title}</p>
                    <p className="mt-1 text-sm text-ink/55">{e.location} &middot; {e.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <div className="group relative cursor-pointer">
              <PlaceholderPhoto label="Field work highlights" className="aspect-video w-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
                  <Play className="ml-1 h-6 w-6 text-navy" fill="currentColor" />
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-sm font-medium text-ink/60">See Our Work</p>
          </div>
        </div>
      </div>
    </section>
  );
}
