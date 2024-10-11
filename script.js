const toggle = document.getElementById('modeToggle');
const espaco = document.querySelector('.espaco');
const paragraphs = document.querySelectorAll('p');
const headings = document.querySelectorAll('h1');

toggle.addEventListener('change', () => {
    document.body.style.backgroundColor = toggle.checked ? '#fff' : '';
    document.body.style.color = toggle.checked ? '#000000' : '';
    });

toggle.addEventListener('change', () => {
if (toggle.checked) {
espaco.style.background = 'linear-gradient(180deg, rgb(255, 255, 255), rgb(67, 236, 236))'; // Fundo claro
} else {
espaco.style.background = 'linear-gradient(180deg, rgb(0, 0, 0), rgb(5, 51, 136))'; // Fundo escuro (original)
}
});

var aText = new Array(
    "Sobre Mim:",
    "",
    "Gabriel Victor, Dev Full Stack",
    "Eu sou um programador iniciante que continua aprendendo",
    "com a ajuda da Escola Cotemig através dos estudos e tarefas ",
    "sempre aproveitando minha estadia na Escola aprendendo sobre diversas coisas ",
    "como HTML, CSS, C#, Ubuntu, Planilhas e mais recentemente começei a aprender JavaScript."
    );
    var iSpeed = 20; 
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
    
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
    
    function typewriter()
    {
    sContents = ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("sob");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
    }
    
    
    typewriter()



    
    var bText = new Array(
    "Habilidades:",
    "",
    "Um Bom Conhecimento em Programação de HTML e CSS",
    "Um Bom Conhecimento em Programação de C# ",
    "Um Bom Conhecimento no Uso do Google Planilhas",
    "Conhecimento Iniciante no Uso do Terminal do Ubuntu ",
    "Conhecimento Iniciante em Montagem de PC’S ",
    "Formatação de PC"
    );
    var bSpeed = 20; 
    var bIndex = 0; 
    var bArrLength = bText[0].length; 
    var bScrollAt = 20; 
    
    var bTextPos = 0; 
    var bContents = ''; 
    var bRow; 
    
    function typewriterProject()
    {
        bContents = ' ';
        bRow = Math.max(0, bIndex-bScrollAt);
        var destination = document.getElementById("hab");
        
        while ( bRow < bIndex ) {
            bContents += bText[bRow++] + '<br />';
        }
        destination.innerHTML = bContents + bText[bIndex].substring(0, bTextPos) + "_";
        if ( bTextPos++ == bArrLength ) {
            bTextPos = 0;
            bIndex++;
            if ( bIndex != bText.length ) {
                bArrLength = bText[bIndex].length;
                setTimeout("typewriterProject()", 500);
            }
        } else {
            setTimeout("typewriterProject()", bSpeed);
        }
    }
    
    typewriterProject();


    function bigImg(x) {
        x.style.height = "300px";
        x.style.width = "px";
      }
     
      function normalImg(x) {
        x.style.height = "200px";
        x.style.width = "px";
      }

      var modal = document.getElementById("myModal");
      var btn = document.querySelector(".eer");
      var span = document.getElementsByClassName("close")[0];
      
      btn.onclick = function() {
          modal.style.display = "block";
      }
      
      
      span.onclick = function() {
          modal.style.display = "none";
      }
      
      
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
      
      
     
