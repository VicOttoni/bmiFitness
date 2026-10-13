
}

// =====================================
// ANIMAÇÃO CARRINHO
// =====================================



function animateProductToCart(sourceImage) {
    const cartButton = document.getElementById("cart-button");

    if (!sourceImage || !cartButton) return;

    const start = sourceImage.getBoundingClientRect();
    const target = cartButton.getBoundingClientRect();

    if (!start.width || !start.height ||
        !target.width || !target.height) {
        return;
    }

    // Cria uma cópia visual da roupa, sem duplicar seu ID.
    const flyingImage = document.createElement("img");

    flyingImage.src = sourceImage.currentSrc || sourceImage.src;
    flyingImage.alt = "";

    Object.assign(flyingImage.style, {
        position: "fixed",
        left: `${start.left}px`,
        top: `${start.top}px`,
        width: `${start.width}px`,
        height: `${start.height}px`,
        maxWidth: "none",
        objectFit: getComputedStyle(sourceImage).objectFit || "cover",
        margin: "0",
        padding: "0",
        border: "0",
        borderRadius: "10px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
        zIndex: "99999",
        pointerEvents: "none",
        transformOrigin: "center center",
        willChange: "transform, opacity"
    });

    document.body.appendChild(flyingImage);

    // Calcula a distância usando as posições reais na tela.
    const startCenterX = start.left + start.width / 2;
    const startCenterY = start.top + start.height / 2;

    const endCenterX = target.left + target.width / 2;
    const endCenterY = target.top + target.height / 2;

    const x = endCenterX - startCenterX;
    const y = endCenterY - startCenterY;

    // Elevação proporcional para deixar o trajeto mais natural.
    const arc = Math.min(100, Math.max(28, Math.abs(x) * 0.12));

    const animation = flyingImage.animate(
        [
            {
                transform: "translate3d(0, 0, 0) scale(1)",
                opacity: 1,
                offset: 0
            },
            {
                transform:
                    `translate3d(${x * 0.5}px, ${y * 0.5 - arc}px, 0) scale(0.62)`,
                opacity: 1,
                offset: 0.55
            },
            {
                transform:
                    `translate3d(${x}px, ${y}px, 0) scale(0.12)`,
                opacity: 0,
                offset: 1
            }
        ],
        {
            duration: 780,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards"
        }
    );

    animation.onfinish = () => flyingImage.remove();
    animation.oncancel = () => flyingImage.remove();

    // Pequena reação do carrinho.
    cartButton.classList.remove("cart-bounce");
    void cartButton.offsetWidth;
    cartButton.classList.add("cart-bounce");

    setTimeout(() => {
        cartButton.classList.remove("cart-bounce");
    }, 500);
}



// =====================================
// ADICIONAR AO CARRINHO
@@ -1071,6 +1146,7 @@ function loadProductPage() {

}

            animateProductToCart(mainImage);
addToCart(product, selectedSize);

}
@@ -1161,4 +1237,4 @@ navLinks.forEach(function(link) {
}
);

});
});
