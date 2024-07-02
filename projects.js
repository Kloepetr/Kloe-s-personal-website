function toggleParagraph(paragraphId) {
    const paragraph = document.getElementById(paragraphId);
    const button = document.querySelector(`button[onclick="toggleParagraph('${paragraphId}')"]`);
    
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      button.innerText = "Hide project objectives";
    } else {
      paragraph.style.display = "none";
      button.innerText = "Project objectives";
    }
  }
  
  function toggleParagraph(paragraphId) {
    const paragraph = document.getElementById(paragraphId);
    const button = document.querySelector(`button[onclick="toggleParagraph('${paragraphId}')"]`);
    
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      button.innerText = "Hide project objectives";
    } else {
      paragraph.style.display = "none";
      button.innerText = "Project objectives";
    }
  }