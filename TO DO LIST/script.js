let add=()=>{
    let task=document.createElement("div")
    task.style.height="40px"
    task.style.width="650px"
    task.style.marginLeft="20px"
    task.style.paddingLeft="13px"
    task.style.marginTop="20px"
    task.style.background="white"
    task.style.display="flex"
    task.style.alignItems="center"
    task.style.justifyContent="space-evenly"
    let data1=document.createElement("input")
    let data2=document.createElement("input")
    let icon1=document.createElement("p")
    let icon2=document.createElement("p")
    let icon3=document.createElement("p")
    icon1.innerHTML=`<i class="fa-solid fa-trash-can fa-gl" style="color: #e60a0a;"></i>`
    icon2.innerHTML=`<i class="fa-solid fa-circle-check fa-lg" style="color: #1f5125;"></i>`
    icon3.innerHTML=`<i class="fa-solid fa-pen fa-lg" style="color: #104bb2;"></i>`
    // icon4.innerHTML=`<i class="fa-solid fa-floppy-disk fa-lg" style="color: #e9074b;"></i>`
    icon1.style.cursor="pointer"
    icon1.style.marginRight="20px"
    icon2.style.marginRight="20px"
    icon3.style.marginRight="20px"
    icon2.style.cursor="pointer"
    icon3.style.cursor="pointer"
    data1.style.width="250px"
    data2.style.width="200px"
    data1.style.background="transparent"
    data2.style.background="transparent"
    data1.style.height="25px"
    data2.style.height="25px"
    data1.style.border="none"
    data2.style.border="none"
    data1.style.fontSize="18px"
    data2.style.fontSize="18px"
    data1.style.fontWeight="600"
    data2.style.fontWeight="600"

    let box=document.querySelector(".box")
    box.appendChild(task)
    task.appendChild(data1)
    task.appendChild(data2)
    task.appendChild(icon2)
    task.appendChild(icon3)
    task.appendChild(icon1)
    let typed=document.querySelector(".item")
    let cal=document.querySelector(".cal")
    data1.value=typed.value
    data2.value=cal.value
    icon1.addEventListener("click",()=>{
        task.style.background="red"
        setTimeout(()=>{
            task.style.display="none"
        },500)
    })
    icon2.addEventListener("click",()=>{
        task.style.background="green"
        setTimeout(()=>{
            task.style.display="none"
        },500)
    })
    let bool=true
    icon3.addEventListener("click",()=>{
        if (bool==true){
            icon3.innerHTML=`<i class="fa-solid fa-floppy-disk fa-lg" style="color: #e9074b;"></i>`
            data1.style.border="2px solid pink"
            data2.style.border="2px solid pink"
        }
        else{
            icon3.innerHTML=`<i class="fa-solid fa-pen fa-lg" style="color: #104bb2;"></i>`
            data1.style.border="none"
            data2.style.border="none"
        }
        bool=!bool
    })
    typed.value=''
    cal.value=''
}