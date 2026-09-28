function SubjectList({ subjects, semester, year }) {
  return (
    <section className="ledger" aria-label="Registered subjects">
      <div className="ledger-header">
        <h2 className="ledger-title">Subjects Registered</h2>
        <dl className="ledger-meta">
          <div>
            <dt>Current Semester</dt>
            <dd>{semester}</dd>
          </div>
          <div>
            <dt>Current Year</dt>
            <dd>{year}</dd>
          </div>
          <div>
            <dt>Total Subjects</dt>
            <dd>{subjects.length}</dd>
          </div>
        </dl>
      </div>

      <ul className="ledger-list">
        {subjects.map((subject) => (
          <li className="ledger-row" key={subject}>
            <span className="ledger-dot" aria-hidden="true" />
            <span className="ledger-subject">{subject}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SubjectList
