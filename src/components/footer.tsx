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
      {isInline ? (
        <div className="flex items-center justify-between">
          <OpenStatus />
          <p className="text-xs opacity-50 hidden md:block">
            Designed & developed by{" "}
            <a
              href="https://foronered.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              For One Red AG
            </a>
          </p>
        </div>
      ) : (
        <>
          <div className="footer-hours">
            <OpenStatus />
          </div>
          <p className="hidden md:block fixed bottom-5 right-6 z-10 text-white text-xs opacity-50">
            Designed & developed by{" "}
            <a
              href="https://foronered.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              For One Red AG
            </a>
          </p>
        </>
      )}
    </footer>
  )
}
