const datasProfile = document.getElementById("datas-profile")

const datas = {
  "Name": "Afugan",
  "Date of Birth": "1945",
  "Education": "Educated",
  "Skills": "Nothin"
}

Object.entries(datas).forEach(([label, value]) => {
  const element = 
`<div>
  <div class="label">${label}</div>
  <div class="value">${value}</div>
</div>`
  datasProfile.innerHTML += element
})