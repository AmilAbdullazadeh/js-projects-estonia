let quotes = [
  "Çalışqan əl nəyə dəysə qızıl olar.",
  "Zəhmət – həyatın duzudur.",
  "Zəhmət yiyəsi-hörmət yiyəsi.",
  "Çəkilən zəhmət hədər getməz.",
  "Susuz həyat olmaz, zəhmətsiz rahatlıq.",
  "Yaz günündə tərləməyən qış günündə titrəyər.",
  "Zəhmətsiz rəhmət olmaz.",
  "Tənbəllik azar artırar, işləmək canı saf eylər.",
  "Yazı – zəhmət, qışı – rahət.",
  "Zəhmətsiz tapılan aşdan, zəhmətlə tapılan daş yaxşıdır.",
  "El çalışar, yer sevinər. Yer barlanar, el sevinər.",
  "Vicdanla işləyən gözükölgəli olmaz.",
  "Tənbəl badam istər, sındırmağının zəhmətindən qaçar.",
  "Adam ağır zəhmətlə alim olur.",
];

const generateQuote = () => {
    let element = document.getElementById("soz") 
    let randomIndex = Math.floor(Math.random() * quotes.length);
    element.textContent = quotes[randomIndex];
    element.style.marginBottom = '10px'
}

let btn = document.querySelector("#generateBtn");
btn.addEventListener("click", generateQuote)
