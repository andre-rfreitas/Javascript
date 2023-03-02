const imoveis = []
let opcao = ""

do{
    opcao = prompt(
        "Bem-vindo ao Cadastro de Imóveis!\n" +
        "Total de Imóveis: " + imoveis.length +
        "\n\nEscolha uma opção: \n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imovel:")
            imovel.quartos = prompt("Quantos quartos possui o imóvel?")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel?")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")
            
            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietario: "+ imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\n Possui garagem?" + imovel.garagem
            )

            if(confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel salvo com sucesso")
            } else {
                alert("Voltando ao menu...")
            }

            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nPropietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\n Possui garagem?" + imoveis[i].garagem
                )
            }
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")    
    }
} while (opcao !== "3")