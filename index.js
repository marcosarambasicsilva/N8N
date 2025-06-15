const form = document.getElementById('companyForm');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const companyName = document.getElementById('companyName').value.trim().toUpperCase();

    status.textContent = "Enviando...";

    try {
        const response = await fetch('https://marcos-arambasic11.app.n8n.cloud/webhook-test/empresa-pesquisada', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ companyName })
        });
        
        if (response.ok) {
          status.textContent = "Enviado com sucesso!";
        } else {
          status.textContent = "Erro ao enviar!";
        }
    } 
    catch (error) {
        status.textContent = "Erro de rede: " + error;
    }
});