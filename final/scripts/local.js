

function local(){
    const datefieldUK = document.querySelector("aside"); 
    const d = new Date();
    const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full"}).format(d);
    datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
  }
  