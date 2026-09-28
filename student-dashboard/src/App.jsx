import Header from './components/Header.jsx'
import StudentCard from './components/StudentCard.jsx'
import SubjectList from './components/SubjectList.jsx'
import Footer from './components/Footer.jsx'
import AboutMe from './components/AboutMe.jsx'
import studentPhoto from './assets/student-photo.jpg'
import './App.css'

const subjects = ['React', 'Java', 'Python', 'SQL', 'DBMS']

const student = {
  name: 'Deepika S',
  registerNo: 411625243013,
  department: 'AI-DS',
  year: 'II',
  cgpa: 8.5,
  attendance: 89,
  photo: studentPhoto,
}

const semester = 'III'

function App() {
  return (
    <div className="app-shell">

      <Header
        collegeName="Prince Dr.K Vasudevan College of Engineering and Technology"
      />

      <main className="app-main">

        <StudentCard
          name={student.name}
          registerNo={student.registerNo}
          department={student.department}
          year={student.year}
          cgpa={student.cgpa}
          attendance={student.attendance}
          photo={student.photo}
        />

        <AboutMe />

        <SubjectList
          subjects={subjects}
          semester={semester}
          year={student.year}
        />

      </main>

      <Footer
        collegeName="Prince Dr.K Vasudevan College of Engineering and Technology"
      />

    </div>
  )
}

export default App