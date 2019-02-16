
let persona=[]

var boton = document.getElementById("send_btn");
let count=0;

boton.addEventListener(("click"),()=>{
    let nombre = document.getElementById("int_nombre").value;
    let codigo = document.getElementById("int_Code").value;
    
    
    persona.push({nombre,codigo})
    

    console.log(persona);
        $("#hijo").append(`<div id="elementChild${count}" value=${count}> 
        <h1>${persona[`${count}`].nombre}  </h1><br>
        <input type="button" id="deleteObject${count}" value="delet">
        </div>`);
        console.log(`${count}`)

        let click_Btn=[]
        
        /*click_Btn[count] =document.getElementById(`elementChild${count}`).addEventListener(
            ("click"),()=>{
           
            $(`#elementChild${count}`).remove()
            persona.splice((persona.length-1),1)
            })**/
            count++;

          

            })

            $("#hijo").click((e)=>{
                
                let childsRemove=$(`#${e.target.id}`).parent().attr("id");
                let identify=$(`#${e.target.id}`).parent().attr("value");
                console.log(`Est es el identificador:${identify}`);

                $(`#${childsRemove}`).remove();
                persona.splice((count),1);/*Tienes que encontrar la forma de 
                hacer coincidir el que se eliminó de la vista (HTML) con el que se tiene que 
                eliminar en el objeto.*/
                console.log("el objeto es:")
                console.log(persona)
                
            })

            


