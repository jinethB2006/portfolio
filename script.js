// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener('scroll',()=>{
  const navbar=document.querySelector('.navbar')
  if(window.scrollY>50){
    navbar.style.background='rgba(0,0,0,0.9)'
    navbar.style.boxShadow='0 4px 30px rgba(0,0,0,0.8)'
  }else{
    navbar.style.background='rgba(0,0,0,0.7)'
  }
})


// ================= BURGER MENU =================
const burger=document.querySelector('.burger')
const navLinks=document.querySelector('.nav-links')

burger.addEventListener('click',()=>{
  navLinks.classList.toggle('active')
})


// ================= CLOSE MENU ON CLICK =================
document.querySelectorAll('.nav-links a').forEach(link=>{
  link.addEventListener('click',()=>{
    navLinks.classList.remove('active')
  })
})


// ================= SCROLL FADE-IN ANIMATION =================
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible')
    }
  })
},{threshold:0.2})

document.querySelectorAll('.fade-in').forEach(el=>{
  observer.observe(el)
})


// ================= SKILL BAR ANIMATION =================
const skillObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const bars=entry.target.querySelectorAll('.skill-progress')
      bars.forEach(bar=>{
        const value=bar.getAttribute('data-width')
        bar.style.width=value
      })
    }
  })
},{threshold:0.5})

const skillSection=document.querySelector('.skills-grid')
if(skillSection){
  skillObserver.observe(skillSection)
}


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    })
  })
})


// ================= CONTACT CLICK ACTION =================
document.querySelectorAll('.contact-item.clickable').forEach(item=>{
  item.addEventListener('click',()=>{
    const link=item.querySelector('a')
    if(link){
      window.open(link.href,'_blank')
    }
  })
})


// ================= OPTIONAL: ACTIVE NAV LINK =================
const sections=document.querySelectorAll('section')
const navItems=document.querySelectorAll('.nav-links a')

window.addEventListener('scroll',()=>{
  let current=''
  sections.forEach(section=>{
    const sectionTop=section.offsetTop-100
    if(pageYOffset>=sectionTop){
      current=section.getAttribute('id')
    }
  })

  navItems.forEach(a=>{
    a.classList.remove('active')
    if(a.getAttribute('href')==='#'+current){
      a.classList.add('active')
    }
  })
})
