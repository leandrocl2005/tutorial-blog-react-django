import TeacherCard from '../../components/TeacherCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TeachersSection() {

  const [teachers, setTeachers] = useState([]);
  
  useEffect(() => {
    async function fetchTeachers() {
      const {data} = await axios.get('api/users/');
      setTeachers(data);
    }
    fetchTeachers()
  }, [])

  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h3>Professores</h3>
          <p>Nossos professores são especialistas nas tecnologias mais novas do mercado!</p>
        </div>

        <div className="row d-flex justify-content-around">
          {teachers.map(teacher => (
            <TeacherCard teacher={teacher} key={teacher.id} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default TeachersSection;