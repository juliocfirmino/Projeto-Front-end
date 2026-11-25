const cantosPorTime = {
    "geral": [
        "🎵 Eu sou brasileiro, com muito orgulho, com muito amor! 🎵",
        "🎵 Vai começar a festa na arquibancada, hoje tem gol no Brasileirão! 🎵",
        "🎵 Joga com raça e coração, a torcida empurra até o apito final! 🎵"
    ],
    "bahia": [
        "🎵 Bora Bahêa Minha Porreta! Ninguém nos vence em vibração! 🎵",
        "🎵 59 é nosso, 88 também! Tricolor de Aço, acima de tudo! 🎵",
        "🎵 Pulando, cantando, com o Esquadrão eu vou até o fim! 🎵"
    ],
    "vitoria": [
        "🎵 Pega Leão! O Barradão vai tremer com a força da nossa torcida! 🎵",
        "🎵 Sou Vitória de coração, rubro-negro de tradição! 🎵"
    ],
    "flamengo": [
        "🎵 Uma vez Flamengo, sempre Flamengo! Vamos virar, Mengo! 🎵",
        "🎵 Em dezembro de 81, botou os ingleses na roda! 🎵"
    ],
    "vasco": [
        "🎵 Vamos todos cantar de coração, a Cruz de Malta é o meu pendão! 🎵",
        "🎵 Enquanto houver um coração infantil, o Vasco será imortal! 🎵"
    ],
    "fluminense": [
        "🎵 Nense! Nense! Vamos Tricolor, queremos a taça! 🎵",
        "🎵 Sou Tricolor de coração, sou do clube tantas vezes campeão! 🎵"
    ],
    "botafogo": [
        "🎵 Fogo! Fogo! Estrela Solitária ilumina o nosso caminho! 🎵",
        "🎵 Ninguém cala esse nosso amor, é o Glorioso campeão! 🎵"
    ],
    "palmeiras": [
        "🎵 Palmeiras meu Palmeiras, meu Palmeiras! Dá-lhe Porco! 🎵",
        "🎵 Quando surge o Alviverde imponente no gramado em que a luta o aguarda! 🎵"
    ],
    "corinthians": [
        "🎵 Aqui tem um bando de loucos! Loucos por ti, Corinthians! 🎵",
        "🎵 Vai, Corinthians! Não para de lutar! 🎵"
    ],
    "sao-paulo": [
        "🎵 Como eu te amo Tricolor, como eu te amo demais! 🎵",
        "🎵 O Campeão voltou! Salve o Tricolor Paulista! 🎵"
    ],
    "santos": [
        "🎵 Agora quem dá bola é o Santos! O Santos é o novo campeão! 🎵",
        "🎵 Vai pra cima deles, Santos! Glorioso Alvinegro Praiano! 🎵"
    ],
    "bragantino": [
        "🎵 Vamos Massa Bruta! Pra cima deles, Braga! 🎵",
        "🎵 Com garra e velocidade, o Bragantino vai vencer! 🎵"
    ],
    "mirassol": [
        "🎵 Vamos Leão da Alta Araraquarense! Orgulho do interior! 🎵",
        "🎵 Amarelo e verde no coração, dá-lhe Mirassol! 🎵"
    ],
    "atletico-mg": [
        "🎵 Galo! Galo! Clube Atlético Mineiro, uma vez até morrer! 🎵",
        "🎵 Eu acredito! Aqui é Galo Forte e Vingador! 🎵"
    ],
    "cruzeiro": [
        "🎵 Nós somos loucos, somos Cruzeiro! Cabuloso em campo! 🎵",
        "🎵 Existe um grande clube na cidade que mora dentro do meu coração! 🎵"
    ],
    "internacional": [
        "🎵 Vamos, vamos Inter! Vamos ganhar essa partida! 🎵",
        "🎵 Glória do desporto nacional, oh Internacional! 🎵"
    ],
    "gremio": [
        "🎵 Até a pé nós iremos, para o que der e vier! 🎵",
        "🎵 Dá-lhe, dá-lhe Tricolor! Imortal Tricolor! 🎵"
    ],
    "chapecoense": [
        "🎵 Vamos, vamos Chape! O Verdão do Oeste nunca para! 🎵",
        "🎵 Na alegria e na dor, Chape sempre vencedor! 🎵"
    ],
    "athletico-pr": [
        "🎵 Furacão! Furacão! Vamos rubro-negro paranaense! 🎵",
        "🎵 O Caldeirão vai ferver, o Furacão vai vencer! 🎵"
    ],
    "coritiba": [
        "🎵 Verdão! Verdão! Eterno campeão, Coritiba do coração! 🎵",
        "🎵 O Couto Pereira vai pulsar por ti, Coxa! 🎵"
    ],
    "remo": [
        "🎵 Leão Azul! O Rei da Amazônia chegou para vencer! 🎵",
        "🎵 Fenômeno Azul na arquibancada, dá-lhe Clube do Remo! 🎵"
    ]
};

// Elementos da página
const spanNome = document.getElementById("nome_torcedor");
const selectTime = document.getElementById("select_time");
const btnGerar = document.getElementById("btn_gerar");
const textoCanto = document.getElementById("texto_canto");
const btnCopiar = document.getElementById("btn_copiar");

let ultimoCanto = "";


function gerarCanto() {
    const clube = selectTime.value;
    const lista = cantosPorTime[clube] || cantosPorTime["geral"];
    
    let novoCanto = lista[Math.floor(Math.random() * lista.length)];
    
   
    if (lista.length > 1 && novoCanto === ultimoCanto) {
        novoCanto = lista[(lista.indexOf(novoCanto) + 1) % lista.length];
    }
    
    ultimoCanto = novoCanto;
    textoCanto.textContent = novoCanto;
}


window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");
    const time = params.get("time");

    if (nome && nome.trim() !== "") {
        const primeiroNome = nome.trim().split(" ")[0];
        spanNome.textContent = primeiroNome;
    }

    if (time && cantosPorTime[time]) {
        selectTime.value = time;
        gerarCanto(); 
    }
});


btnGerar.addEventListener("click", gerarCanto);

btnCopiar.addEventListener("click", () => {
    const texto = textoCanto.textContent;
    navigator.clipboard.writeText(texto).then(() => {
        const textoOriginal = btnCopiar.textContent;
        btnCopiar.textContent = "✓ Copiado!";
        setTimeout(() => {
            btnCopiar.textContent = textoOriginal;
        }, 2000);
    });
});
