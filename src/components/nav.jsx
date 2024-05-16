
function nav({handleNavClick}) {
  return (
    <nav>
        <div onClick={()=>handleNavClick('home')}>Home</div>
        <div onClick={()=>handleNavClick('people')}>People</div>
        <div onClick={()=>handleNavClick('starships')}>Starships</div>
    </nav>
  )
}

export default nav