function criarTarefa(){
    const formTarefa = document.getElementById("form-tarefa")
    const formData = document.getElementById("form-data")
    const formHora = document.getElementById("form-hora")

    //colocando a data do Brasil
    const parte = formData.value.split("-")
    const dataBrasil = `${parte[2]}/${parte[1]}/${parte[0]}`

    //pegar uma data de agora e a data selecionada
    const agora = new Date()
    const dataSelecionada = new Date(`${formData.value}T${formHora.value}`)

    //checkbox
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")

    //texto da tarefa
    const texto = document.createElement("span")
    texto.textContent = `${formTarefa.value}`

    //data + hora 
    const dataHora = document.createElement("small")
    dataHora.textContent = `${dataBrasil} • ${formHora.value}`
    dataHora.classList.add("dataHora")

    // colocar a data e hora numa const pra usar mais tarde
    const textoDataHora = `${dataBrasil} • ${formHora.value}`
    dataHora.textContent = textoDataHora

    //botão de remover 
    const btnRemover = document.createElement("button")
    btnRemover .textContent = "Remover"

    //lista (para colocar a info)
    const li = document.createElement("li")
    li.classList.add("espaco")

    //div (para colocar texto e dataHora)
    const div = document.createElement("div")

    checkbox.addEventListener("change", function(){
        if (checkbox.checked){
            texto.style.textDecoration = "line-through"
            dataHora.innerHTML = "Concluída"
        } else {
            texto.style.textDecoration = "none"
            dataHora.textContent = textoDataHora
        }
    })

    if (dataSelecionada < agora) {
        alert("Impossível criar uma tarefa no passado")
        return
    }
    
    if (formTarefa.value.length == 0 || formData.value.length == 0 || formHora.value.length == 0){
        alert("Complete as informações da tarefa e tente novamente")
    } else {
        div.appendChild(texto)
        div.appendChild(dataHora)

        li.appendChild(checkbox)
        li.appendChild(div)
        li.appendChild(btnRemover)

    document.getElementById("area-tarefa").appendChild(li)

    formTarefa.value = ""
    formHora.value = ""
    formData.value = ""
    }

    btnRemover.addEventListener("click", function(){
        li.remove()
    })
}