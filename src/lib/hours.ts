const TIMEZONE = "Europe/Zurich"

/** Opening hours: Thursday (4), Friday (5), Saturday (6) from 19:00 to 02:00 next day */
export function isOpenNow(): boolean {
  const now = new Date()
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    hour12: false,
  })

  const parts = Object.fromEntries(
    formatter.formatToParts(now).map((p) => [p.type, p.value])
  )

  const hour = parseInt(parts.hour, 10)
  const minute = parseInt(parts.minute, 10)
  const day = parts.weekday // "Thu", "Fri", "Sat", "Sun", etc.

  const timeInMinutes = hour * 60 + minute

  // Evening session: Thu/Fri/Sat 19:00–23:59
  if (["Thu", "Fri", "Sat"].includes(day) && timeInMinutes >= 19 * 60) {
    return true
  }

  // Late-night session: Fri/Sat/Sun 00:00–01:59 (continuation from previous night)
  if (["Fri", "Sat", "Sun"].includes(day) && timeInMinutes < 2 * 60) {
    return true
  }

  return false
}
