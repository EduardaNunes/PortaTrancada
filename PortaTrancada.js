
            var px=0;
            var py=0;
            var abrir = false;
            
            document.addEventListener('keydown', function(event){
                
                var objeto = $("#personagem");
                var tecla = event.keyCode;
            
                // 37 = seta esquerda
                // 38 = seta cima
                // 39 = direita
                // 40 = baixo
                
                if(tecla == 37 && px!==0){
                    px-=10;
                    $("#personagem").css("left", px+"px");
                }
                    
                else if(tecla == 38 && py!==0){ 
                    py-=10;
                    $("#personagem").css("top", py+"px");
                }
                
                else if(tecla == 39 && px!==700){ 
                    px+=10;
                    $("#personagem").css("left", px+"px");
                }
                
                else if(tecla == 40 && py!==700){ 
                    py+=10;
                    $("#personagem").css("top", py+"px");
                    
                }
                
                if(px==0 && py==700){
                    
                    alert("A porta foi destrancada.");
                    $(".chave").remove();
                    $("#corpo_cadeado").animate({'top':'115px'},2000);
                    $("#cadeado").delay(2000).fadeOut(1000);
                    abrir=true;
                    
                } 
                
                if (abrir==true && px==700 && py==700){
                    alert("Parabéns, você ganhou!!");
                    $("#personagem").animate({"left":"670px"},2000).fadeOut(2000);
                    $(".porta1").animate({
                        'background-color':'black',
                        'width':'0px',
                    },3500);
                    $("#macaneta").fadeOut(500);
                }
                
                else if (abrir==false && px==700 && py==700){
                    alert("Trancado");
                }
            
            });