
function switchLanguage(lang) {
  const body = document.body;
  const heading = document.getElementById("hero-heading");
  const description = document.getElementById("hero-description");
  const button = document.getElementById("hero-button");
  const features = document.querySelectorAll(".feature h3");

  if (lang === "ur") {
    body.dir = "rtl";
    heading.innerText = "خوش آمدید ZS Pizza پر";
    description.innerText = "مزے دار زِنگر، پیزا، سینڈوچ اور مزید!";
    button.innerText = "واٹس ایپ پر آرڈر کریں";
    features.forEach(el => el.innerText = el.getAttribute("data-ur"));
  } else {
    body.dir = "ltr";
    heading.innerText = "Welcome to ZS Pizza";
    description.innerText = "Deliciously Delivered – Zinger, Pizza, Sandwiches & More!";
    button.innerText = "Order on WhatsApp";
    features.forEach(el => el.innerText = el.getAttribute("data-en"));
  }
}
