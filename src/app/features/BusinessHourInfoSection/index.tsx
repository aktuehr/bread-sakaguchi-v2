'use client';

import BusinessHourInfo from "./components/BusinessHourInfo";

export default function BusinessHourInfoSection() {
  return (
    <div className="flex gap-4 justify-center py-1">
      <BusinessHourInfo title="営業" content="6:00-16:00" />
      <BusinessHourInfo title="定休日" content="水・木" />
    </div>
  );
}
