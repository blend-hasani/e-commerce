const banner = document.querySelector("banner");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then(
    (json) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("hide");
      const mbyll = document.createElement("div");
      mbyll.textContent = "X";
      mbyll.classList.add("closex");
      wrapper.appendChild(mbyll);

      mbyll.addEventListener("click", () => {
        wrapper.classList.add("hide");
      });

      const shportazbrazt = document.createElement("div");
      shportazbrazt.textContent = "Your cart is empty";
      wrapper.appendChild(shportazbrazt);

      wrapper.id = "parentDiv";
      document.body.appendChild(wrapper);

      const totali = document.createElement("div");
      totali.classList.add("totali");
      wrapper.appendChild(totali);

      let qmimi = 0;

      for (let i = 0; i < 20; i++) {
        const product = json[i];

        const container = document.createElement("div");
        document.querySelector(".banner").appendChild(container);
        container.classList.add("products");

        const imagelem = document.createElement("img");
        imagelem.src = product.image;
        container.appendChild(imagelem);

        const title = document.createElement("h5");
        container.appendChild(title);
        title.textContent = product.title;

        const category = document.createElement("h6");
        container.appendChild(category);
        category.textContent = `Category: ${product.category}`;

        const price = document.createElement("h4");
        price.textContent = `Price ${product.price}  $`;
        container.appendChild(price);

        const productdetails = document.createElement("button");
        container.appendChild(productdetails);
        productdetails.textContent = "Check details";

        if (window.innerWidth >= 768) {
          productdetails.style.display = "block";
        } else {
          productdetails.style.display = "none";
        }
        const btn = document.createElement("button");
        container.appendChild(btn);
        btn.textContent = "Add to cart";
        // /////////////////////////////////////////////////////////////////////////////////
        productdetails.addEventListener("click", () => {
          const divwraper = document.createElement("div");
          const maindiv = document.createElement("div");
          maindiv.classList.add("maindiv");
          divwraper.appendChild(maindiv);
          document.body.appendChild(divwraper);
          divwraper.classList.add("divwrapper");
          document.body.classList.add("stopscroll");
          document.body.appendChild(maindiv);
          const imgdiv = document.createElement("div");
          const divdesc = document.createElement("div");
          const closex = document.createElement("div");
          const button = document.createElement("button");
          button.textContent = "Add to cart";
          button.classList.add("buttoni");
          button.addEventListener("click", cart);

          imgdiv.classList.add("imgdiv");
          divdesc.classList.add("divdesc");
          closex.classList.add("closex");
          maindiv.appendChild(imgdiv);
          maindiv.appendChild(divdesc);
          maindiv.appendChild(closex);

          closex.textContent = "X";
          imgdiv.style.backgroundImage = `url(${product.image}) `;
          imgdiv.style.backgroundSize = "contain";
          imgdiv.style.backgroundPosition = "center";
          imgdiv.style.backgroundRepeat = "no-repeat";

          divdesc.innerHTML = `
                <h5>${title.textContent}</h5>
                <p>Description <br/> ${product.description}</p>
                <p>${price.textContent}</p>
                `;

          divdesc.appendChild(button);

          divdesc.classList.add("popup");

          closex.addEventListener("click", () => {
            document.body.removeChild(maindiv);
            divwraper.classList.remove("divwrapper");
            document.body.classList.remove("stopscroll");
          });
        });

        const karta = document.getElementById("cart");
        karta.addEventListener("click", () => {
          wrapper.classList.add("wrapper");
          wrapper.classList.remove("hide");
          items.classList.remove("active");
          menuBtn.classList.remove("hide");
          searchBtn.classList.remove("hide");
          cancelBtn.classList.remove("show");
          form.classList.remove("active");
          cancelBtn.style.color = "#ff3d00";
        });

        function cart() {
          var cart = document.createElement("div");
          cart.id = "cart";
          const closex = document.createElement("div");
          closex.classList.add("closex");
          closex.textContent = "X";
          cart.appendChild(closex);

          closex.addEventListener("click", () => {
            wrapper.removeChild(cart);
            qmimi -= product.price;
            totali.innerHTML = `<h1>Totali: ${qmimi.toFixed(2)}`;
          });

          const cartphoto = document.createElement("div");
          const cartdescription = document.createElement("div");
          const price = document.createElement("div");

          cart.classList.add("cart");
          cartphoto.classList.add("cartphoto");
          cartdescription.classList.add("carddescription");
          price.classList.add("price");
          wrapper.appendChild(cart);
          cartphoto.style.backgroundImage = `url(${product.image}) `;
          cartphoto.style.backgroundSize = "contain";
          cartphoto.style.backgroundRepeat = "no-repeat";
          cartdescription.innerHTML = `${product.description}`;
          cart.appendChild(cartphoto);
          cart.appendChild(cartdescription);
          cart.appendChild(price);

          price.textContent = `Qmimi: ${product.price}`;
          qmimi += product.price;
          totali.innerHTML = `<h1>Totali: ${qmimi.toFixed(2)} $`;
          alert(`Produkti "${product.title}" u shtua ne shportë`);
          wrapper.removeChild(shportazbrazt);
        }
        btn.addEventListener("click", cart);
      }
    }

    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     for (let i = 0; i < 20; i++) {
    //       const product = json[i];

    //       const container = document.createElement("div");
    //       document.querySelector(".banner").appendChild(container);
    //       container.classList.add("products");

    //       const imagelem = document.createElement("img");
    //       imagelem.src = product.image;
    //       container.appendChild(imagelem);

    //       const title = document.createElement("h5");
    //       container.appendChild(title);
    //       title.textContent = product.title;

    //       const category = document.createElement("h6");
    //       container.appendChild(category);
    //       category.textContent = `Category: ${product.category}`;

    //       const price = document.createElement("h4");
    //       price.textContent = `Price ${product.price}  $`;
    //       container.appendChild(price);

    //       const productdetails = document.createElement("button");
    //       container.appendChild(productdetails);
    //       productdetails.textContent = "Check details";

    //       const btn = document.createElement("button");
    //       container.appendChild(btn);
    //       btn.textContent = "Add to cart";
    //       // /////////////////////////////////////////////////////////////////////////////////
    //       productdetails.addEventListener("click", () => {
    //         const divwraper = document.createElement("div");
    //         const maindiv = document.createElement("div");
    //         maindiv.classList.add("maindiv");
    //         divwraper.appendChild(maindiv);
    //         document.body.appendChild(divwraper);
    //         divwraper.classList.add("divwrapper");
    //         document.body.classList.add("stopscroll");
    //         document.body.appendChild(maindiv);
    //         const imgdiv = document.createElement("div");
    //         const divdesc = document.createElement("div");
    //         const closex = document.createElement("div");
    //         const button = document.createElement("button");
    //         button.textContent = "Add to cart";
    //         button.classList.add("buttoni");

    //         imgdiv.classList.add("imgdiv");
    //         divdesc.classList.add("divdesc");
    //         closex.classList.add("closex");
    //         maindiv.appendChild(imgdiv);
    //         maindiv.appendChild(divdesc);
    //         maindiv.appendChild(closex);

    //         closex.textContent = "X";
    //         imgdiv.style.backgroundImage = `url(${product.image}) `;
    //         imgdiv.style.backgroundSize = "contain";
    //         imgdiv.style.backgroundPosition = "center";
    //         imgdiv.style.backgroundRepeat = "no-repeat";

    //         divdesc.innerHTML = `
    //           <h5>${title.textContent}</h5>
    //           <p>Description <br/> ${product.description}</p>
    //           <p>${price.textContent}</p>
    //           `;

    //         divdesc.appendChild(button);

    //         divdesc.classList.add("popup");

    //         closex.addEventListener("click", () => {
    //           document.body.removeChild(maindiv);
    //           divwraper.classList.remove("divwrapper");
    //           document.body.classList.remove("stopscroll");
    //         });
    //       });

    //       var wrapper = document.createElement("div");
    //       const mbyll = document.createElement("div");
    //       mbyll.textContent = "X";
    //       mbyll.classList.add("closex");
    //       wrapper.appendChild(mbyll);

    //       mbyll.addEventListener("click", () => {
    //         wrapper.classList.add("hide");
    //       });

    //       var shportazbrazt = document.createElement("div");
    //       shportazbrazt.textContent = "Your cart is empty";
    //       wrapper.appendChild(shportazbrazt);
    //       document.body.appendChild(wrapper);
    //       var qmimi = 0;

    //       var totali = document.createElement("div");
    //       totali.classList.add("totali");
    //       wrapper.appendChild(totali);

    //       const karta = document.getElementById("cart");
    //       karta.addEventListener("click", () => {
    //         wrapper.classList.add("wrapper");
    //         wrapper.classList.remove("hide");
    //       });

    //       function cart() {
    //         var cart = document.createElement("div");
    //         cart.id = "cart";
    //         const cartphoto = document.createElement("div");
    //         const cartdescription = document.createElement("div");
    //         const price = document.createElement("div");

    //         cart.classList.add("cart");
    //         cartphoto.classList.add("cartphoto");
    //         cartdescription.classList.add("carddescription");
    //         price.classList.add("price");
    //         wrapper.appendChild(cart);
    //         cartphoto.style.backgroundImage = `url(${product.image}) `;
    //         cartphoto.style.backgroundSize = "contain";
    //         cartphoto.style.backgroundRepeat = "no-repeat";
    //         cartdescription.innerHTML = `${product.description}`;
    //         cart.appendChild(cartphoto);
    //         cart.appendChild(cartdescription);
    //         cart.appendChild(price);

    //         price.textContent = `Qmimi: ${product.price}`;
    //         qmimi += product.price;

    //         alert("Produkti u shtua ne shportë");
    //         totali.innerHTML = `<h1>Totali: ${qmimi.toFixed(2)} $</h1>`;
    //       }

    //       btn.addEventListener("click", cart);

    //     }
  );
