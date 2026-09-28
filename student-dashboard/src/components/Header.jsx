function Header({ collegeName }) {
  return (
    <header className="letterhead">
      <div className="letterhead-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="40" height="40">
          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M24 12 L34 18 V28 C34 34 29 37 24 38 C19 37 14 34 14 28 V18 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M24 20 V32 M18 24 H30" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
      <div className="letterhead-text">
        <p className="letterhead-eyebrow">Office of Academic Records</p>
        <h1 className="letterhead-title">{collegeName}</h1>
        <p className="letterhead-subtitle">Student Dashboard</p>
      </div>
    </header>
  )
}

export default Header
