function Footer({ collegeName }) {
  const year = new Date().getFullYear()

  return (
    <footer className="ledger-footer">
      <div className="ledger-rule" aria-hidden="true" />
      <p>
        {collegeName} &middot; Records generated for academic reference &middot; {year}
      </p>
    </footer>
  )
}

export default Footer
