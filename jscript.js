const gallery=document.querySelectorAll('img');


button.forEach(button) => {
    button.addEventListener('click',()=>{
        for(let img of gallery {
            img.style.display='none'
            const images= img .getAttrbute('data-filter');
            if(<button.text "All"{
                img.style.display='block';
                img.class{st.add("show")
                }
            else{
                    img.class{st.remove("hide")
                }
            }
        })
    })
}