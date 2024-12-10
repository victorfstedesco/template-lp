async function loadData() {
    try {
        
        const response = await fetch('../public/data/modulos.json')
        const data = await response.json()

        const containerhtml = document.getElementById('teste')
        
        data.forEach (datas => {
            const div = document.createElement('div')
            
            div.innerHTML = `
            <h1>${datas.tema}</h1>
            `

            containerhtml.appendChild(div)
        })
    } catch (erro) {
        console.error('Erro ao carregar os dados ', erro)
} 
} 
 
// loadData()