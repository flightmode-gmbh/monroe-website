import clsx from "clsx"
import { OpenStatus } from "./open-status"

type FooterProps = {
  variant?: "overlay" | "inline"
}

export const Footer = ({ variant = "overlay" }: FooterProps) => {
  const isInline = variant === "inline"

  return (
    <footer
      className={clsx(
        isInline
          ? "w-full py-8 px-4 text-center bg-foreground text-white"
          : "footer"
      )}
    >
      {!isInline && (
        <a
          href="/docs/eventunterlagen.pdf"
          download
          className="event-card"
        >
          <span className="event-card-label">Private Events</span>
          <span className="event-card-title">Download our event documents</span>
          <span className="event-card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </span>
        </a>
      )}
      <div className={isInline ? "" : "footer-hours"}>
        <OpenStatus />
      </div>
    </footer>
  )
}
