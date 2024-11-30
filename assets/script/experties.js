const SkillsData = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    category: "Languages",
  },
  {
    name: "React Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    category: "Languages",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    category: "Languages",
  },
  {
    name: "Intellij",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
    category: "Others",
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    category: "Databases",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    category: "Databases",
  },
  {
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    category: "Languages",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    category: "Languages",
  },
  {
    name: "Javascript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    category: "Languages",
  },
  {
    name: "TypeScript",
    logo: "https://www.svgrepo.com/show/349540/typescript.svg",
    category: "Languages",
  },
  {
    name: "Node Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    category: "Languages",
  },
  {
    name: "Flutter",
    logo: "https://www.svgrepo.com/show/353751/flutter.svg",
    category: "Languages",
  },
  {
    name: "Dart",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Dart_programming_language_logo_icon.svg",
    category: "Languages",
  },
  {
    name: "Mockito",
    logo: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*4ezoav544ciIcSAa67ci1w.png",
    category: "Languages",
  },
  {
    name: "JUnit",
    logo: "https://avatars.githubusercontent.com/u/874086?s=280&v=4",
    category: "Languages",
  },
  {
    name: "Spring Framework",
    logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
    category: "Languages",
  },
  {
    name: "AWS",
    logo: "https://www.svgrepo.com/show/448266/aws.svg",
    category: "Databases",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    category: "Databases",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    category: "Databases",
  },
  {
    name: "Python",
    logo: "https://www.svgrepo.com/show/452091/python.svg",
    category: "Languages",
  },
  {
    name: "C#",
    logo: "https://logotyp.us/file/c-sharp.svg",
    category: "Languages",
  },
  {
    name: "Bootstrap",
    logo: "https://download.logo.wine/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.png",
    category: "Languages",
  },
  {
    name: "Android Studio",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
    category: "Others",
  },
  {
    name: "Visual Studio",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    category: "Others",
  },
  {
    name: "Visual Studio Community",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg",
    category: "Others",
  },
  {
    name: "Jenkins",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
    category: "Others",
  },
  {
    name: "PowerPoint",
    logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_PowerPoint_Logo_512px.png",
    category: "Others",
  },
  {
    name: "Word Doument",
    category: "Others",
    logo:"https://static.vecteezy.com/system/resources/previews/017/396/802/non_2x/microsoft-word-mobile-apps-icon-free-png.png"
  },
  {
    name: "AdobeXD",
    category: "Others",
    logo:"https://www.logo.wine/a/logo/Adobe_XD/Adobe_XD-Logo.wine.svg"
  },
  {
    name: "PowerBI",
    category: "Others",
    logo:"data:image/png;base64,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"
  },
  {
    name: "KNime",
    category: "Others",
    logo:"data:image/jpeg;base64,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"
  },
  {
    name: "Jupiter Notebook",
    category: "Languages",
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlquQbehFaMuUwUN32KhAS4AxK7WTUtKuZBQ&s"
  },
];


const groupedSkills = SkillsData.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {});

// Manually order the categories (ensure this order is respected)
const categoryOrder = ['Languages', 'Databases', 'Others'];

// Generate the HTML content in the desired category order
const SkillsDataHTML = categoryOrder
  .map(category => {
    if (groupedSkills[category]) {
      const categorySkills = groupedSkills[category];
      return `
        <div class="category-section">
          <h3>${category}</h3>
          <div class="skills-cards">
            ${categorySkills.map(item => `
              <div class="skills-card">
                  <img loading="lazy" src="${item.logo}" alt="${item.name}">
                  <span>${item.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      
    }
    return '';
  })
  .join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('skills-card-container').innerHTML = SkillsDataHTML;
});
