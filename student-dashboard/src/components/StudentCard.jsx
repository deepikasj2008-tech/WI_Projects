function StudentCard({ name, registerNo, department, year, cgpa, attendance, photo }) {
  const attendanceEligible = attendance >= 75
  const placementEligible = cgpa >= 8

  return (
    <section className="student-card" aria-label="Student identity card">
      <div className="card-photo-col">
        <div className="photo-frame">
          <img src={photo} alt={`Portrait of ${name}`} />
        </div>

        <div
          className={`seal ${placementEligible ? 'seal-eligible' : 'seal-watch'}`}
          role="img"
          aria-label={placementEligible ? 'Placement eligible seal' : 'Needs improvement seal'}
        >
          <svg viewBox="0 0 100 100" className="seal-ring">
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="seal-text">{placementEligible ? 'Placement\nEligible' : 'Needs\nImprovement'}</span>
        </div>
      </div>

      <div className="card-details-col">
        <p className="card-eyebrow">Student Record</p>
        <h2 className="student-name" style={{ color: '#2A4D8F' }}>
          {name}
        </h2>

        <dl className="vitals-grid">
          <div className="vital">
            <dt>Register No.</dt>
            <dd>{registerNo}</dd>
          </div>
          <div className="vital">
            <dt>Department</dt>
            <dd>{department}</dd>
          </div>
          <div className="vital">
            <dt>Year</dt>
            <dd>{year}</dd>
          </div>
          <div className="vital">
            <dt>CGPA</dt>
            <dd style={{ color: '#3F6B4C', fontWeight: 600 }}>{cgpa}</dd>
          </div>
          <div className="vital vital-wide">
            <dt>Attendance</dt>
            <dd style={{ color: '#B5651D', fontWeight: 600 }}>{attendance}%</dd>
          </div>
        </dl>

        <div className="ledger-rule" aria-hidden="true" />

        <div className="status-block">
          <p className="status-line">
            <span className="status-label">Attendance Status</span>
            <span className={`status-pill ${attendanceEligible ? 'status-pill-good' : 'status-pill-bad'}`}>
              {attendanceEligible ? 'Eligible for Semester Exam' : 'Not Eligible'}
            </span>
          </p>
          <p className="status-line">
            <span className="status-label">Placement Status</span>
            <span className={`status-pill ${placementEligible ? 'status-pill-good' : 'status-pill-bad'}`}>
              {placementEligible ? 'Eligible' : 'Need Improvement'}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default StudentCard
