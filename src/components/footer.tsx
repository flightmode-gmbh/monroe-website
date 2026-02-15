import clsx from "clsx"

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
      <div className={isInline ? "" : "footer-hours"}>
        <p className="hours-line">
          <span className="hours-label">Open</span>
          <span className="hours-sep">&#8212;</span>
          <span className="hours-value">Thu&ndash;Sat from 19h till late</span>
        </p>
      </div>
    </footer>
  )
}
