emailjs.init("XOCf3yXQnWGb5kICA");

/* ── helpers ── */
const $  = id => document.getElementById(id);
const show = el => el.classList.add("show");
const hide = el => el.classList.remove("show");
const visible = el => el && el.classList.contains("show");

const landing   = $("landing");
const enterBtn  = $("enterBtn");
const pageTwo   = $("pageTwo");
const pageThree = $("pageThree");
const pageFour  = $("pageFour");
const pageFive  = $("pageFive");

/* ── DOOR OPEN ── */
let hasEntered = false;

function openDoors() {
  if (hasEntered) return;
  hasEntered = true;
  enterBtn.classList.add("hidden");
  landing.classList.add("doors-open");
  setTimeout(() => show(pageTwo), 300);
  setTimeout(() => landing.classList.add("doors-gone"), 1100);
}

enterBtn.addEventListener("click", openDoors);
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && !hasEntered) openDoors();
});

/* ── HOME ── */
function goHome() {
  hide(pageTwo); hide(pageThree); hide(pageFour); hide(pageFive);
  landing.classList.remove("doors-open","doors-gone");
  enterBtn.classList.remove("hidden");
  pageThree.scrollTo(0,0);
  hasEntered = false;
}
$("homeBtn").addEventListener("click", goHome);

/* ── BACK ── */
$("backBtn").addEventListener("click", () => {
  if (visible(pageFive))  { hide(pageFive);  show(pageTwo); return; }
  if (visible(pageFour))  { hide(pageFour);  show(pageTwo); return; }
  if (visible(pageThree)) { hide(pageThree); show(pageTwo); return; }
  if (visible(pageTwo))   { goHome(); return; }
});

/* ── CTA BUTTONS ── */
$("resumeBtn").addEventListener("click",   () => { hide(pageTwo); show(pageThree); });
$("projectsBtn").addEventListener("click", () => { hide(pageTwo); show(pageFour);  });
$("contactBtn").addEventListener("click",  () => { hide(pageTwo); show(pageFive);  });
$("downloadBtn").addEventListener("click", () => window.open("Resume_Malhar__1_.pdf","_blank"));

/* ── POPUP ── */
function showPopup(msg) {
  $("popupText").textContent = msg;
  show($("messagePopup"));
  setTimeout(() => hide($("messagePopup")), 2600);
}

/* ── EMAILJS ── */
$("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("service_bov0kwd","template_vw0x5ia",this)
    .then(()  => { showPopup("Message sent! ✓"); this.reset(); })
    .catch(err => { showPopup("Failed to send. Try again."); console.error(err); });
});

/* ── PROJECTS ── */
function openProject(name) {
  const links = {
    furinsight:     "https://github.com/Malhargujar12/FurInsight",
    customer_churn: "#",
    dashboard:      "https://github.com/yourusername/dashboard",
    copyright:      "copyrighted.pdf",
  };
  const url = links[name];
  if (url && url !== "#") window.open(url,"_blank");
}
