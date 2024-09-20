const cardData = [
	{
		imgSrc: require("../assets/money.svg"),
		title: "Redução de custos",
		description:
			"Diga adeus ao alto custo de operações de atendimento. Com o IAgo, você reduz significativamente despesas, mantendo um padrão de excelência no suporte ao cliente.",
	},
	{
		imgSrc: require("../assets/clock.svg"),
		title: "Atendimento 24/7",
		description:
			"Seus clientes merecem respostas a qualquer hora do dia ou da noite. O IAgo está sempre disponível, garantindo que cada interação seja tratada com a eficiência que precisa.",
	},
	{
		imgSrc: require("../assets/robot.svg"),
		title: "Treinamento diário da IA",
		description:
			"Nosso time de especialistas analisa todas interações do IAgo com seu cliente, visando melhorar ainda mais o atendimento e tornando o chatbot mais preciso e assertivo.",
	},
	{
		imgSrc: require("../assets/engine.svg"),
		title: "Implementação rápida",
		description:
			"Integramos o IAgo ao site da sua empresa de maneira rápida e sem complicações. Todo o processo é pensado para que você aproveite os benefícios da IA no menor tempo possível.",
	},
	{
		imgSrc: require("../assets/emoji.svg"),
		title: "Suporte humano dedicado",
		description:
			"Dúvidas? Problemas? Estamos aqui para ajudar. Nossa equipe está sempre pronta para garantir que o IAgo opere de forma otimizada, totalmente a favor do seu negócio.",
	},
	{
		imgSrc: require("../assets/star.svg"),
		title: "IA sob medida",
		description: 'Através de um meticuloso processo de "Fine Tuning", nossa equipe INGAGE realiza ajustes manuais e criteriosos com base em interações reais.',
	},
]

// Função para criar os cards dinamicamente
function createCards(cards) {
	const container = document.getElementById("card-container")

	cards.forEach((card) => {
		// Criar o elemento do card
		const cardElement = document.createElement("div")
		cardElement.classList.add("card")

		// Criar o ícone (imagem)
		const cardIcon = document.createElement("div")
		cardIcon.classList.add("card-icon")
		const img = document.createElement("img")
		img.src = card.imgSrc
		img.alt = card.title
		cardIcon.appendChild(img)

		// Criar o título
		const title = document.createElement("h5")
		title.classList.add("card-title")
		title.textContent = card.title

		// Criar a descrição
		const desc = document.createElement("p")
		desc.classList.add("card-desc")
		desc.textContent = card.description

		// Montar o card
		cardElement.appendChild(cardIcon)
		cardElement.appendChild(title)
		cardElement.appendChild(desc)

		// Adicionar o card ao container
		container.appendChild(cardElement)
	})
}

// Chamar a função para gerar os cards
createCards(cardData)

const cardProducts = [
	{
		imgSrc: require("../assets/Zapier.svg"),
	},
	{
		imgSrc: require("../assets/Slack.svg"),
	},
	{
		imgSrc: require("../assets/Wordpress.svg"),
	},
	{
		imgSrc: require("../assets/WhatsApp.svg"),
	},
	{
		imgSrc: require("../assets/Messenger.svg"),
	},
	{
		imgSrc: require("../assets/Shopify.svg"),
	},
]
// Função para criar os cards dinamicamente
function createProducts(products) {
	const container = document.getElementById("holder-p")

	products.forEach((product) => {
		// Criar o elemento do card
		const productElement = document.createElement("div")
		productElement.classList.add("product-card")

		// Criar o ícone (imagem)
		const productIcon = document.createElement("div")
		productIcon.classList.add("product-img")
		const img = document.createElement("img")
		img.src = product.imgSrc
		productIcon.appendChild(img)

		// Montar o product
		productElement.appendChild(productIcon)

		// Adicionar o product ao container
		container.appendChild(productElement)
	})
}

// Chamar a função para gerar os cards
createProducts(cardProducts)

// Dados dos slides (exemplo)
const slidesData = [
	{
		text: "Este é o texto do primeiro slide",
		imgSrc: "https://via.placeholder.com/150",
		name: "João Silva",
		company: "Empresa A",
	},
	{
		text: "Texto do segundo slide",
		imgSrc: "https://via.placeholder.com/150",
		name: "Maria Oliveira",
		company: "Empresa B",
	},
	{
		text: "Texto do terceiro slide",
		imgSrc: "https://via.placeholder.com/150",
		name: "Carlos Souza",
		company: "Empresa C",
	},
]

// Função para gerar os slides dinamicamente
function createSlides() {
	const slider = $(".slider")
	slidesData.forEach((slide) => {
		const slideElement = `
            <div class="slide">
                <p class="d-text">${slide.text}</p>
                <div class="infos">
                    <div class="slide-img">
                        <img src="${slide.imgSrc}" alt="${slide.name}">
                    </div>
                    <div class="data">
                        <p class="name">${slide.name}</p>
                        <p class="company">${slide.company}</p>
                    </div>
                </div>
            </div>`

		slider.append(slideElement)
	})

	// Inicializar o slider após os slides serem adicionados
	slider.slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $(".button-prev"),
		nextArrow: $(".button-next"),
	})
}

// Chamar a função quando o documento estiver pronto
$(document).ready(function () {
	createSlides()
})

const button = document.querySelector(".button-prev")

button.addEventListener("mousemove", function (evt) {
	const movX = evt.clientX - this.getBoundingClientRect().x
	gsap.to(".button__spotlight.prev", {
		x: movX,

		scale: 30,
		duration: 0.3,
	})
})

button.addEventListener("mouseleave", function (evt) {
	const movX = evt.clientX - this.getBoundingClientRect().x
	gsap.to(".button__spotlight", {
		x: movX,

		scale: 0,
		duration: 0.3,
	})
})

const buttonNext = document.querySelector(".button-next")

buttonNext.addEventListener("mousemove", function (evt) {
	const movX = evt.clientX - this.getBoundingClientRect().x
	gsap.to(".button__spotlight.next", {
		x: movX,

		scale: 30,
		duration: 0.3,
	})
})

buttonNext.addEventListener("mouseleave", function (evt) {
	const movX = evt.clientX - this.getBoundingClientRect().x
	gsap.to(".button__spotlight", {
		x: movX,

		scale: 0,
		duration: 0.3,
	})
})

$(document).ready(function () {
	$(".navbar-toggler").click(function () {
		$(this).toggleClass("open")
	})
})

gsap.registerPlugin(ScrollTrigger)

let footer = document.querySelector("footer"),
	getOverlap = () => Math.min(window.innerHeight, footer.offsetHeight), // we never want it to overlap more than the height of the screen
	adjustFooterOverlap = () => (footer.style.marginTop = -getOverlap() + "px") // adjusts the margin-top of the footer to overlap the proper amount

adjustFooterOverlap()

// to make it responsive, re-calculate the margin-top on the footer when the ScrollTriggers revert
ScrollTrigger.addEventListener("revert", adjustFooterOverlap)

// magic
ScrollTrigger.create({
	trigger: footer,
	start: () => "top " + (window.innerHeight - getOverlap()),
	end: () => "+=" + getOverlap(),
	pin: true,
})

gsap.from(".rounded-block", {
	duration: 1,
	y: "-30vh",
	ease: "power2.in",
})

gsap.from(".iago", {
	duration: 1,
	y: "-50vh",
	ease: "power",
})

if (window.innerWidth > 768) {
	// Aqui você define o breakpoint (768px é um valor comum)
	gsap.to("#card-container", {
		scrollTrigger: {
			trigger: "#card-container",
			start: "-100 center",
			end: "250 center",

			toggleActions: "restart pause reverse pause",
			scrub: true,
		},
		x: -1200,
		duration: 3,
	})

	gsap.from(".arm", {
		scrollTrigger: {
			trigger: ".arm",
			start: "-160 center",
			end: "80 center",

			toggleActions: "restart pause reverse pause",
			scrub: true,
		},
		x: -600,
		y: -100,
		duration: 3,
	})

	gsap.from(".iago-solo", {
		scrollTrigger: {
			trigger: ".iago-solo",
			start: "-500 center",
			end: "-300 center",

			toggleActions: "restart pause reverse pause",
			scrub: true,
		},
		x: 400,
		y: 300,
		duration: 3,
	})
	gsap.utils.toArray(".button--container").forEach((button) => {
		gsap.from(button, {
			scrollTrigger: {
				trigger: button,
				start: "-600 center",
				end: "-300 center",

				toggleActions: "restart pause reverse pause",
				scrub: true,
				ease: "power",
			},
			y: 300,
			duration: 3,
		})
	})
}

gsap.from(".demo-img", {
	scrollTrigger: {
		trigger: ".demo-img",
		start: "-100 center",
		end: "100 center",

		toggleActions: "restart pause reverse pause",
		scrub: true,
	},
	x: 400,
	duration: 3,
})
