const url = document.querySelector("input")
const down = document.querySelector("button")

down.addEventListener("click", async () => {
    try {
        const response = await fetch(url.value)
        const file = await response.blob()
        const link = document.createElement("a")
        link.href = URL.createObjectURL(file)
        link.download = new Date().getTime();
        link.click()

    } catch(error){
        alert("Falha no Download!")
    }
})