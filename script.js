
}

// =====================================
// ANIMAÇÃO CARRINHO
// =====================================


function animateProductToCart(sourceImage) {
    const cartButton = document.getElementById("cart-button");

    if (!sourceImage || !cartButton) return;

    const imageRect = sourceImage.getBoundingClientRect();
    const cartRect = cartButton.getBoundingClientRect();

    const flyingImage = sourceImage.cloneNode(true);

    flyingImage.style.position = "fixed";
    flyingImage.style.left = `${imageRect.left}px`;
    flyingImage.style.top = `${imageRect.top}px`;
    flyingImage.style.width = `${imageRect.width}px`;
    flyingImage.style.height = `${imageRect.height}px`;
    flyingImage.style.objectFit = "cover";
    flyingImage.style.margin = "0";
    flyingImage.style.zIndex = "99999";
    flyingImage.style.pointerEvents = "none";
    flyingImage.style.borderRadius = "8px";
    flyingImage.style.transformOrigin = "center center";

    document.body.appendChild(flyingImage);

    const x = cartRect.left + cartRect.width / 2
        - (imageRect.left + imageRect.width / 2);

    const y = cartRect.top + cartRect.height / 2
        - (imageRect.top + imageRect.height / 2);

    const animation = flyingImage.animate(
        [
            {
                transform: "translate(0, 0) scale(1)",
                opacity: 1
            },
            {
                transform: `translate(${x * 0.45}px, ${y * 0.45 - 70}px) scale(0.65)`,
                opacity: 1,
                offset: 0.55
            },
            {
                transform: `translate(${x}px, ${y}px) scale(0.12)`,
                opacity: 0.2
            }
        ],
        {
            duration: 700,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards"
        }
    );

    animation.onfinish = () => {
        flyingImage.remove();
    };

    cartButton.classList.remove("cart-bounce");

    // Reinicia a animação para cliques consecutivos.
    void cartButton.offsetWidth;

    cartButton.classList.add("cart-bounce");

    setTimeout(() => {
        cartButton.classList.remove("cart-bounce");
    }, 450);
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
