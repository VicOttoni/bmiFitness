// =====================================
// ELEMENTOS DA PÁGINA
// =====================================

const productGrid = document.getElementById("product-grid");

const cartButton = document.getElementById("cart-button");

const cartSidebar = document.getElementById("cart-sidebar");

const closeCart = document.getElementById("close-cart");

const cartOverlay = document.getElementById("cart-overlay");

const cartItems = document.getElementById("cart-items");

const cartTotal = document.getElementById("cart-total");

const cartCount = document.getElementById("cart-count");


// =====================================
// PRODUTOS
// =====================================

const products = [

    {
        id: 1,

        name: "Conjunto legging azul",

        price: 119.99,

        images: [
            "/images/conjuntoLeggingAzul/conLegA1.jpg",
            "/images/conjuntoLeggingAzul/conLegA2.jpg",
            "/images/conjuntoLeggingAzul/conLegA3.jpg",
            "/images/conjuntoLeggingAzul/conLegA4.jpg",
            "/images/conjuntoLeggingAzul/conLegA5.jpg",
            "/images/conjuntoLeggingAzul/conLegA6.jpg"
        ],

        description:
            "Conjunto fitness em azul-marinho, perfeito para quem busca conforto e estilo nos treinos. Uma combinação versátil para acompanhar sua rotina.",

        sizes: ["M"]
    },


    {
        id: 2,

        name: "Conjunto Legging Marrom",

        price: 119.99,

        images: [
            "/images/conjuntoLeggingMarrom/conLegMar1.jpg",
            "/images/conjuntoLeggingMarrom/conLegMar2.jpg",
            "/images/conjuntoLeggingMarrom/conLegMar3.jpg",
            "/images/conjuntoLeggingMarrom/conLegMar4.jpg",
            "/images/conjuntoLeggingMarrom/conLegMar5.jpg",
            "/images/conjuntoLeggingMarrom/conLegMar6.jpg"
        ],

        description:
            "Conjunto fitness em tom marrom, com design moderno e recortes que valorizam o visual. Ideal para treinar com praticidade e elegância.",

        sizes: ["M"]
    },


    {
        id: 3,

        name: "Macaquinho azul",

        price: 99.99,

        images: [
            "images/macaquinhoAzul/macAzul1.jpg",
            "images/macaquinhoAzul/macAzul2.jpg",
            "images/macaquinhoAzul/macAzul3.jpg",
            "images/macaquinhoAzul/macAzul4.jpg"
        ],

        description:
            "Macaquinho fitness azul com modelagem ajustada e costas estilo nadador. Uma peça prática e estilosa para seus treinos.",

        sizes: ["único"]
    },

    {
        id: 4,

        name: "Conjunto azul e rosa short",

        price: 109.99,

        images: [
            "images/conjuntoAzulRosaShort/conAzRs1.jpg",
            "images/conjuntoAzulRosaShort/conAzRs2.jpg",
            "images/conjuntoAzulRosaShort/conAzRs3.jpg",
            "images/conjuntoAzulRosaShort/conAzRs4.jpg",
            "images/conjuntoAzulRosaShort/conAzRs5.jpg"
        ],

        description:
            "Conjunto fitness com top azul e short rosa, perfeito para criar um look moderno e cheio de personalidade. Conforto e charme em uma só combinação.",

        sizes: ["P", "M"]    
    },

    {
        id: 5,

        name: "Conjunto preto short",

        price: 109.99,

        images: [
            "images/conjuntoPretoShort/conPtSh1.jpg",
            "images/conjuntoPretoShort/conPtSh2.jpg",
            "images/conjuntoPretoShort/conPtSh3.jpg",
            "images/conjuntoPretoShort/conPtSh4.jpg"
        ],

        description:
            "Conjunto fitness preto com visual minimalista e versátil. Ideal para quem ama peças básicas que combinam com qualquer ocasião esportiva.",

        sizes: ["P"]    
    },

    {
        id: 6,

        name: "Blusa branca com escrita",

        price: 58.99,

        images: [
            "images/blusaBrancaEscrita/bluBcEs1.jpg",
            "images/blusaBrancaEscrita/bluBcEs2.jpg"
        ],

        description:
            "Blusa cropped branca com estampa delicada, perfeita para compor looks casuais e despojados. Um toque moderno para o dia a dia.",

        sizes: ["Único"]    
    },

    {
        id: 7,

        name: "Conjunto vermelho short",

        price: 109.99,

        images: [
            "images/conjuntoVermelhoShort/conVmSh1.jpg",
            "images/conjuntoVermelhoShort/conVmSh2.jpg",
            "images/conjuntoVermelhoShort/conVmSh3.jpg"
        ],

        description:
            "Conjunto fitness em tom vermelho-vinho, com design moderno e modelagem ajustada. Ideal para destacar seu estilo durante os treinos.",

        sizes: ["G"]    
    },

    {
        id: 8,

        name: "Conjunto rosa short",

        price: 109.99,

        images: [
            "images/conjuntoRosaShort/conRsSh1.jpg",
            "images/conjuntoRosaShort/conRsSh2.jpg",
            "images/conjuntoRosaShort/conRsSh3.jpg",
            "images/conjuntoRosaShort/conRsSh4.jpg"
        ],

        description:
            "Conjunto fitness rosa com detalhes delicados nas costas e short de cintura alta. Uma opção charmosa para treinar com estilo.",

        sizes: ["P", "G"]    
    },

    {
        id: 9,

        name: "Conjunto azul short",

        price: 109.99,

        images: [
            "images/conjuntoAzulShort/conAzSh1.jpg",
            "images/conjuntoAzulShort/conAzSh2.jpg",
            "images/conjuntoAzulShort/conAzSh3.jpg",
        ],

        description:
            "Conjunto fitness azul-marinho com top e short, ideal para quem procura praticidade e um visual esportivo clássico. Perfeito para acompanhar seus movimentos.",

        sizes: ["G"]    
    },

    {
        id: 10,

        name: "Conjunto cinza short",

        price: 109.99,

        images: [
            "images/conjuntoCinzaShort/conCzSh1.jpg",
            "images/conjuntoCinzaShort/conCzSh2.jpg",
            "images/conjuntoCinzaShort/conCzSh3.jpg",
            "images/conjuntoCinzaShort/conCzSh4.jpg"
        ],

        description:
            "Conjunto fitness cinza mescla com estilo moderno e discreto. Uma combinação versátil para montar looks confortáveis para os treinos.",

        sizes: ["P"]    
    },

    {
        id: 11,

        name: "Macaquinho preto",

        price: 99.99,

        images: [
            "images/macaquinhoPreto/macPt1.jpeg",
            "images/macaquinhoPreto/macPt2.jpeg",
            "images/macaquinhoPreto/macPt3.jpeg",
            "images/macaquinhoPreto/macPt4.jpeg"
        ],

        description:
            "Macaquinho fitness preto com alças finas e visual elegante. Uma peça prática e versátil para quem deseja unir estilo e funcionalidade.",

        sizes: ["ÚNICO"]    
    },

    {
        id: 12,

        name: "Macacão Lilás",

        price: 139.99,

        images: [
            "images/macacaoLilas/macLil1.jpeg",
            "images/macacaoLilas/macLil2.jpeg",
            "images/macacaoLilas/macLil3.jpeg"
        ],

        description:
            "Macacão fitness lilás com design moderno e modelagem ajustada. Uma peça cheia de personalidade para compor produções esportivas estilosas.",

        sizes: ["ÚNICO"]    
    },

    {
        id: 13,

        name: "Top Azul",

        price: 29.99,

        images: [
            "images/topAzul/topAz1.jpeg",
            "images/topAzul/topAz1.jpeg"
        ],

        description:
            "Top fitness azul-marinho com detalhes em azul-turquesa e design diferenciado nas alças. Ideal para completar seu look esportivo com estilo.",

        sizes: ["ÚNICO"]    
    },

    {
        id: 14,

        name: "Blusa branca lisa",

        price: 24.99,

        images: [
            "images/blusaBrancaLisa/bbl1.jpeg",
            "images/blusaBrancaLisa/bbl2.jpeg",
            "images/blusaBrancaLisa/bbl3.jpeg",
            "images/blusaBrancaLisa/bbl4.jpeg"
        ],

        description:
            "Blusa branca básica de manga curta, perfeita para combinar com leggings e outras peças do seu guarda-roupa. Um item essencial para looks versáteis.",

        sizes: ["ÚNICO"]    
    }
];

// =====================================
// CARRINHO
// =====================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// =====================================
// SALVAR CARRINHO
// =====================================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


// =====================================
// ADICIONAR AO CARRINHO
// =====================================

function addToCart(product, selectedSize = null) {

    const existingProduct = cart.find(function(item) {

        return (
            item.id === product.id &&
            item.size === selectedSize
            );
    });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            ...product,

            size: selectedSize,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

}


// =====================================
// ATUALIZAR CARRINHO
// =====================================

function updateCart() {

    // Se não existir carrinho nesta página,
    // não executa o restante da função

    if (!cartItems || !cartTotal || !cartCount) {

        return;

    }


    cartItems.innerHTML = "";


    let total = 0;

    let totalItems = 0;


    // Se o carrinho estiver vazio

    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Seu carrinho está vazio.</p>";

    }


    // Criar itens do carrinho

    cart.forEach(function(product) {

        total = total + (
            product.price * product.quantity
        );


        totalItems = totalItems + product.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.classList.add("cart-item");


        cartItem.innerHTML = `

            <img
                src="${product.images[0]}"
                alt="${product.name}"
            >


            <div class="cart-item-info">

                <h4>${product.name}</h4>
                
            ${product.size ? `
                <p class="cart-product-size">
                    Tamanho: ${product.size}
                </p>
            ` : ""}

                <p>
                    R$ ${product.price
                        .toFixed(2)
                        .replace(".", ",")}
                </p>


                <div class="quantity-controls">

                    <button class="decrease-button">
                        -
                    </button>


                    <span>
                        ${product.quantity}
                    </span>


                    <button class="increase-button">
                        +
                    </button>

                </div>


                <button class="remove-button">

                    Remover

                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);


        // BOTÃO +

        const increaseButton =
            cartItem.querySelector(".increase-button");


        increaseButton.addEventListener(
            "click",
            function() {

                product.quantity++;

                saveCart();

                updateCart();

            }
        );


        // BOTÃO -

        const decreaseButton =
            cartItem.querySelector(".decrease-button");


        decreaseButton.addEventListener(
            "click",
            function() {

                product.quantity--;


                if (product.quantity <= 0) {

                    const productIndex =
                        cart.findIndex(function(item) {

                            return (
                                item.id === product.id &&
                                item.size === product.size
                            );

                        });


                    cart.splice(
                        productIndex,
                        1
                    );

                }


                saveCart();

                updateCart();

            }
        );


        // BOTÃO REMOVER

        const removeButton =
            cartItem.querySelector(".remove-button");


        removeButton.addEventListener(
            "click",
            function() {

                const productIndex =
                    cart.findIndex(function(item) {

                        return (
                            item.id === product.id &&
                            item.size === product.size
                        );

                    });


                cart.splice(
                    productIndex,
                    1
                );


                saveCart();

                updateCart();

            }
        );

    });


    // Atualizar contador

    cartCount.textContent = totalItems;


    // Atualizar total

    cartTotal.textContent =
        `R$ ${total
            .toFixed(2)
            .replace(".", ",")}`;

}


// =====================================
// ABRIR CARRINHO
// =====================================

if (cartButton && cartSidebar) {

    cartButton.addEventListener(
        "click",
        function() {

            cartSidebar.classList.add("active");

            cartOverlay.classList.add("active");

            document.body.style.overflow = "hidden";

        }
    );

}


// =====================================
// FECHAR CARRINHO
// =====================================

if (closeCart && cartSidebar) {

    closeCart.addEventListener(
        "click",
        function() {

            cartSidebar.classList.remove("active");

            cartOverlay.classList.remove("active");

            document.body.style.overflow = "";

        }
    );

}

cartOverlay.addEventListener(
    "click",
    function() {

        cartSidebar.classList.remove("active");

        cartOverlay.classList.remove("active");

        document.body.style.overflow = "";

    }
);

// =====================================
// FINALIZAR COMPRA PELO WHATSAPP
// =====================================

function checkoutWhatsApp() {

    // Verificar se o carrinho está vazio

    if (cart.length === 0) {

        alert("Seu carrinho está vazio.");

        return;

    }


    let message = "Olá! 👋%0A%0A";

    message += "Gostaria de finalizar este pedido:%0A%0A";


    cart.forEach(function(item) {

        message +=
            `• ${item.name}%0A`;

        message +=
            `Tamanho: ${item.size}%0A`;

        message +=
            `Quantidade: ${item.quantity}%0A`;

        message +=
            `Preço: R$ ${(item.price * item.quantity)
                .toFixed(2)
                .replace(".", ",")}%0A%0A`;

    });


    // Total

    const total = cart.reduce(
        function(sum, item) {

            return sum +
                item.price * item.quantity;

        },
        0
    );


    message +=
        `*Total do pedido: R$ ${total
            .toFixed(2)
            .replace(".", ",")}*`;


    // Número do WhatsApp

    const phoneNumber =
        "5531998649461";


    // Criar link

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${message}`;


    // Abrir WhatsApp

    window.open(
        whatsappURL,
        "_blank"
    );

}


// =====================================
// CRIAR CARDS DOS PRODUTOS
// =====================================

if (productGrid) {

    products.forEach(function(product) {

        const card =
            document.createElement("article");


        card.classList.add("product-card");


        card.innerHTML = `

            <img
                src="${product.images[0]}"
                alt="${product.name}"
            >


            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>


                <p class="buy-button">
                    R$ ${product.price
                        .toFixed(2)
                        .replace(".", ",")}
                </p>

            </div>

        `;


        // Abrir página do produto
        // quando clicar no card

        card.addEventListener(
            "click",
            function(event) {

                if (
                    !event.target.classList.contains(
                        "buy-button"
                    )
                ) {

                    window.location.href =
                        `produto.html?id=${product.id}`;

                }

            }
        );


        // Botão adicionar ao carrinho

  


        productGrid.appendChild(card);

    });

}


// =====================================
// CARREGAR PÁGINA DO PRODUTO
// =====================================

function loadProductPage() {

    // Pegar ID da URL

    const params =
        new URLSearchParams(
            window.location.search
        );


    const productId =
        Number(params.get("id"));


    // Procurar produto

    const product =
        products.find(function(item) {

            return item.id === productId;

        });


    const productPage =
        document.getElementById("product-page");
    
    let selectedSize = null;


    // Produto não encontrado

    if (!product) {

        productPage.innerHTML = `

            <h2>
                Produto não encontrado.
            </h2>

            <a href="index.html">
                Voltar para a loja
            </a>

        `;

        return;

    }


    // Criar página do produto

    productPage.innerHTML = `

        <div class="product-gallery">


            <div class="main-image">

                <img
                    id="main-product-image"
                    src="${product.images[0]}"
                    alt="${product.name}"
                >

            </div>


            <div class="thumbnail-images">

                ${product.images.map(
                    function(image) {

                        return `

                            <img
                                src="${image}"
                                alt="${product.name}"
                                class="thumbnail"
                            >

                        `;

                    }
                ).join("")}

            </div>


        </div>



        <div class="product-details">


            <h1>
                ${product.name}
            </h1>


            <p class="product-page-price">

                R$ ${product.price
                    .toFixed(2)
                    .replace(".", ",")}

            </p>


            <p class="product-description">

                ${product.description}

            </p>



            <div class="size-selection">


                <h3>
                    Escolha o tamanho
                </h3>


                <div class="sizes">

                    ${product.sizes.map(
                        function(size) {

                            return `

                                <button
                                    class="size-button"
                                >

                                    ${size}

                                </button>

                            `;

                        }
                    ).join("")}

                </div>


            </div>



            <button
                class="add-product-page-button"
                id="add-product-page-button"
            >

                Adicionar ao carrinho

            </button>


        </div>

    `;


    // =====================================
    // TROCAR IMAGEM PRINCIPAL
    // =====================================

    const mainImage =
        document.getElementById(
            "main-product-image"
        );


    const thumbnails =
        document.querySelectorAll(
            ".thumbnail"
        );


    thumbnails.forEach(function(thumbnail) {

        thumbnail.addEventListener(
            "click",
            function() {

                mainImage.src =
                    thumbnail.src;

            }
        );

    });


    // =====================================
    // SELECIONAR TAMANHO
    // =====================================

    const sizeButtons =
        document.querySelectorAll(
            ".size-button"
        );


    sizeButtons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                sizeButtons.forEach(
                    function(btn) {

                        btn.classList.remove(
                            "selected"
                        );

                    }
                );


                button.classList.add(
                    "selected"
                );

                selectedSize = button.textContent.trim();

            }
        );

    });


    // =====================================
    // ADICIONAR PRODUTO AO CARRINHO
    // =====================================

    const addProductPageButton =
        document.getElementById(
            "add-product-page-button"
        );


    addProductPageButton.addEventListener(
        "click",
        function() {

            if(!selectedSize) {

                alert("Selecione um tamanho antes de adicionar ao carrinho.");

                return;
                
            }

            addToCart(product, selectedSize);

        }
    );

}


// =====================================
// EXECUTAR CARRINHO
// =====================================

updateCart();


// =====================================
// VERIFICAR SE ESTAMOS NA PÁGINA
// DE UM PRODUTO
// =====================================

if (
    document.getElementById("product-page")
) {

    loadProductPage();

}

// =====================================
// BOTÃO FINALIZAR COMPRA
// =====================================

const checkoutButton =
    document.querySelector(
        ".checkout-button"
    );


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        checkoutWhatsApp
    );

}

// =====================================
// MENU MOBILE
// =====================================

const menuButton =
    document.getElementById("menu-button");

const navbar =
    document.querySelector(".navbar");


if (menuButton && navbar) {

    menuButton.addEventListener(
        "click",
        function() {

            navbar.classList.toggle("active");

        }
    );

}

const navLinks =
    document.querySelectorAll(
        ".navbar a"
    );


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            navbar.classList.remove(
                "active"
            );

        }
    );

});
