function toggleNextElement(e) {
      // 1. Leta upp det nästkommande element-syskonet
      let parent = this.parentNode;
      let section = parent.querySelector("section");
  
      // 2. Kontrollera om element visas eller döljs
      if (section.style.display == "none") {
          // 3.a. Om elementet är dolt - visa det
          section.style.display = "block";
      }
      else {
          // 3.b. Om elemenetet visas - dölj det
          section.style.display = "none";
      } 
  }
  
  /*
      `start` har som uppgift att dölja allt innehåll för våra artiklar och
      ser till att funktionen `toggleNextElement` körs när en användare
      klickar på rubrikerna (h2)
  */
  function start() {
      // 1. Hämta alla rubriker (h2) och spara dom i en variabel
      const allH2 = document.querySelectorAll("h2");
  
  
      // 2. Loopa igenom alla dessa rubriker och:
      allH2.forEach(h2 => {
         // 2.a. Dölj allt innehåll (section) som ligger som det nästkommande
        // syskonet till rubriken
        let parent = h2.parentNode;
        let section = parent.querySelector("section");
        
        section.style.display = "none";

        // 2.b. Lägg till en event-lyssnar för att ange att funktionen
        //     `toggleNextElement` ska köras när en användare klickar
        //     på en rubrik.
        h2.addEventListener("click", toggleNextElement);

    });

}

// Kör våran `start` funktion
start();