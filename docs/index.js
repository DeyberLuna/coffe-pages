window.onload=function () {
    const imgs=[
        {
          id:1,
          url:'https://revistadc.com/wp-content/uploads/2020/09/trunu_coffee_foto_cortesia_1.jpg'  
        },
        {
            id:2,
            url:'https://cdn.pixabay.com/photo/2017/09/07/13/45/coffee-2725265_960_720.jpg'  
          },
          {
            id:3,
            url:'https://cdn.pixabay.com/photo/2017/11/10/18/23/coffee-2937163_960_720.jpg'  
          },
          {
            id:4,
            url:'https://cdn.pixabay.com/photo/2020/02/02/13/46/espresso-4813070_960_720.jpg'  
          },
          {
            id:5,
            url:'https://salcedocatering.com/wp-content/uploads/2019/06/Coffee-Break.jpg'  
          },
          {
            id:6,
            url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyaW5KlY-SCe_t9dyLu-qoOUMU5EzVXEhtzq8_kKwSnyISPJwVOH7PyjMG4q4Rz1FjAU&usqp=CAU'  
          },
          {
            id:7,
            url:'https://media.istockphoto.com/photos/happy-coffee-cup-picture-id508347326?k=6&m=508347326&s=612x612&w=0&h=cgQkIwuaYB8T9NdI74KIutViS-jQAIix-RgzP_uS5aQ='  
          }, 
          {
            id:8,
            url:'https://images.absolutdrinks.com/drink-images/Raw/Absolut/dde5b617-048f-4af0-8c7f-0b2818407acb.jpg?imwidth=500'  
          }, 
          {
            id:9,
            url:'https://juegoscocinarpasteleria.org/wp-content/uploads/2020/04/Receta-de-caf%C3%A9-irland%C3%A9s.jpg'  
          },     
    ]

    const containerGrid=document.getElementById('containerGrid');
    imgs.map((img,indice)=>{
        containerGrid.innerHTML+=`
        <div class="card card-img">
         <div class="card-body">
            <a href="#" data-bs-toggle="modal" data-bs-target="#img${img.id}">
            <img src=${img.url} alt=${img.id}>
            </a>
         </div>
        </div>

        <div class="modal fade" id="img${img.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          
            <img src=${img.url} alt="" class="img-fluid">
          
        </div>
      </div>
      </div>
        ` 
    })
}