function autoText() {
    var typed = new Typed("#typed-text", {
    strings: ["Software Developer", "Data Scientist", "Web Developer", "Programmer"],
    typeSpeed: 100,       // typing speed
    backSpeed: 60,        // backspacing speed
    backDelay: 1500,      // delay before backspacing
    loop: true            // loop the animation
  });
}
gsap.registerPlugin(ScrollTrigger);

// gsap.from('.courses-left #first-cours1',{
//     x:200,
//     duration:1,
//     scrollTrigger:{
//         trigger: '.courses-left #first-cours1',
//         start: 'top 30%',
//         markers: true,
//         scroller:'body'

//     }
// })

// Fixed ScrollTrigger animation




// Hero section animations (existing)
gsap.from('.hero-title', {
    x: -230,
    opacity: 0,
    duration: 1
});

gsap.from('.hero-description', {
    opacity: 0,
    duration: 1.3,
    x: 230
});

// Course section title animation
gsap.from('.course-section h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.course-section h1',
        start: 'top 80%',
        scroller: 'body'
    }
});

// About section animations
gsap.from('.course-section-1 h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.course-section-1 h1',
        start: 'top 80%',
        scroller: 'body'
    }
});

gsap.from('.cont img', {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: '.cont img',
        start: 'top 80%',
        scroller: 'body'
    }
});

gsap.from('.cont p', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.cont p',
        start: 'top 80%',
        scroller: 'body'
    }
});

var loader = document.querySelector('.preloader');
window.addEventListener('load',function(){
    loader.style.display = 'none'
})

document.addEventListener('mousemove', function(e){
    gsap.to('.hero-curser', {
        left:e.x,
        top:e.y
    })
})

function mainCurser(){
    // alowing cursor on this section
    document.querySelector('.hero-section').addEventListener('mouseenter', function(){
        gsap.to('.hero-curser',{
            transform: `translate(-50%,-50%) scale(1)`
        })
    })
    document.querySelector('.course-section-1').addEventListener('mouseenter', function(){
        gsap.to('.hero-curser',{
            transform: `translate(-50%,-50%) scale(1)`
            
        })
    })
    //removing cursuer to course and footer section
    document.querySelector('.course-section').addEventListener('mouseenter', function(){
        gsap.to('.hero-curser',{
            transform: `translate(-50%,-50%) scale(0)`
        })
    })
    document.querySelector('.footer').addEventListener('mouseenter', function(){
        gsap.to('.hero-curser',{
            transform: `translate(-50%,-50%) scale(0)`
        })
    })
}





// Horizontal scrolling animation
let teamTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".team-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: updateProgress
    }
});

// Move the team content horizontally
teamTl.to(".team-content", {
    x: "-400vw", // Move 4 viewport widths (5 total sections - 1 visible)
    ease: "none",
    duration: 1
});

// Animate team members individually
gsap.from(".team-member", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".team-members",
        start: "left center",
        scrub:4.6,
        toggleActions: "play none none reverse"
    }
});

// Progress indicator functionality
function updateProgress(self) {
    const progress = self.progress;
    const dots = document.querySelectorAll('.progress-dot');
    
    // Calculate which section is active
    const section = Math.floor(progress * 5);
    
    dots.forEach((dot, index) => {
        if (index <= section) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Add hover animations for team members
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
        gsap.to(member.querySelector('.member-image'), {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
        });
        
        gsap.to(member.querySelectorAll('.skill-tag'), {
            y: -5,
            duration: 0.2,
            stagger: 0.1,
            ease: "power2.out"
        });
    });
    
    member.addEventListener('mouseleave', () => {
        gsap.to(member.querySelector('.member-image'), {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
        
        gsap.to(member.querySelectorAll('.skill-tag'), {
            y: 0,
            duration: 0.2,
            stagger: 0.1,
            ease: "power2.out"
        });
    });
});

// Initial animation for the title
gsap.from(".team-title", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".team-intro",
        start: "top 10%",
    }
});


gsap.from(".team-subtitle", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".team-intro",
        start: "top 20%",
    }
});


// course Section Code
const courses = [
        {
          title: "Mobile App Development",
          level: "Intermediate",
          icon: "📱",
          duration: "12 Weeks",
          description: "Create stunning mobile applications for iOS and Android. Learn React Native and cross-platform development.",
          features: [
            "React Native Framework",
            "iOS & Android Development",
            "App Store Deployment",
            "UI/UX Best Practices"
          ]
        },
        {
          title: "Cloud & DevOps",
          level: "Advanced",
          icon: "☁️",
          duration: "10 Weeks",
          description: "Master cloud infrastructure, deployment automation, and modern DevOps practices for scalable applications.",
          features: [
            "AWS & Azure Platforms",
            "Docker & Kubernetes",
            "CI/CD Pipelines",
            "Infrastructure as Code"
          ]
        },
        {
          title: "Data Science & AI",
          level: "Beginner",
          icon: "🧠",
          duration: "14 Weeks",
          description: "Dive into data analysis, machine learning, and artificial intelligence. Turn data into actionable insights.",
          features: [
            "Python & R Programming",
            "Machine Learning Algorithms",
            "Data Visualization",
            "Real-world Projects"
          ]
        },
        {
          title: "Cybersecurity Fundamentals",
          level: "Intermediate",
          icon: "🔒",
          duration: "8 Weeks",
          description: "Protect digital assets and learn ethical hacking. Understand security protocols and threat mitigation strategies.",
          features: [
            "Network Security",
            "Penetration Testing",
            "Security Frameworks",
            "Incident Response"
          ]
        },
        {
          title: "Game Development",
          level: "Advanced",
          icon: "🎮",
          duration: "18 Weeks",
          description: "Create immersive gaming experiences. Learn game engines, 3D graphics, and interactive storytelling.",
          features: [
            "Unity & Unreal Engine",
            "C# & C++ Programming",
            "3D Graphics & Animation",
            "Multiplayer Systems"
          ]
        }
      ];



function selectCategory(level) {
  return courses.filter(c => c.level === level);
}

function displayCategory(level) {
  const filtered = level === "All" ? courses : selectCategory(level);

  const html = filtered.map(c => `
  <div class="course-card">
    <div class="level-badge">${c.level}</div>
    <div class="course-icon">${c.icon}</div>
    <h3 class="course-title">${c.title}</h3>
    <span class="course-duration">${c.duration}</span>
    <p class="course-description">${c.description}</p>
    
    <div class="course-features">
      ${c.features.map(f => `<div class="feature">${f}</div>`).join("")}
    </div>
    
    <button class="course-btn">Enroll Now</button>
  </div>
`).join("");


  document.querySelector(".courses-grid").innerHTML = html;
}

// show all courses on page load
displayCategory("All");


// course Section Code End

//Displaying auto text 
autoText()
//Displaying trasnparane curser 
mainCurser()
