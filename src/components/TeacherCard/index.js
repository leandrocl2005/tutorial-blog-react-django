function TeacherCard({teacher}) {
  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
    <div className="member" >
      <img src={teacher.avatar} className="img-fluid" style={{
        height: '100%', objectFit: 'cover'
      }} alt={teacher.first_name}/>
      <div className="member-info">
        <div className="member-info-content">
          <h4>{teacher.first_name} {teacher.last_name}</h4>
          <span>{teacher.tech}</span>
          <div className="social">
            <a target="_blank" href={`https://github.com/${teacher.github_username}`} rel="noreferrer"><i className="bi bi-github"></i></a>
            <a target="_blank" href={`https://instagram.com/${teacher.instagram_username}`} rel="noreferrer"><i className="bi bi-instagram"></i></a>
            <a target="_blank" href={`https://linkedin.com/in/${teacher.linkedin_username}`} rel="noreferrer"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeacherCard;