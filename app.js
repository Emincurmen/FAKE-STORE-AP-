const myContainer = document.querySelector(".shopCards");
// const filterByCategory = document.querySelectorAll(".category-card")
const filterByCategory = document.querySelectorAll(".category-card");
const sirala = document.querySelectorAll(".filters");
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        crateDivs(data);
        yildizCagir(data)
        filterByCategory[0].addEventListener('click', () => {
                c1(data);
                // yildizCagir(data);
        });
        filterByCategory[1].addEventListener('click', () => {
            c2(data);
            // yildizCagir(data);
        });
        filterByCategory[2].addEventListener('click', () => {
            c3(data);
            // yildizCagir(data);
        });
        filterByCategory[3].addEventListener('click', () => {
            c4(data);
        });
        // filterByCategory[4].addEventListener('click', () => {
        //     myContainer.innerHTML = "";
        //     crateDivs(data);
        //     yildizCagir(data);
        // });
        sirala[0].addEventListener('click', () => {
            ucuzPahalıSırala(data);
        });
        sirala[1].addEventListener('click', () => {
            pahalıdanUcuzaSırala(data);
        });
        sirala[2].addEventListener('click', () => {
            YıldızArtan(data);
        });
        sirala[3].addEventListener('click', () => {
            YıldızAzalan(data);
        });
    })
    .catch(error => {
        console.log(error);
    }).finally(() => {
        
    });

    //KATEGORİZE
        function c1(data) {
            const category = data.filter(product => product.category === `men's clothing`);
            myContainer.innerHTML = "";
            crateDivs(category);
            yildizCagir(category);
        }
        function c2(data) {
            const category = data.filter(product => product.category === `women's clothing`);
            myContainer.innerHTML = "";
            crateDivs(category);
            yildizCagir(category);
        }
        function c3(data) {
            const category = data.filter(product => product.category === `jewelery`);
            myContainer.innerHTML = "";
            crateDivs(category);
            yildizCagir(category);
        }
        function c4(data) {
            const category = data.filter(product => product.category === `electronics`);
            myContainer.innerHTML = "";
            crateDivs(category);
            yildizCagir(category);
        }
        //SIRALAMA
        // function sirala0(data) {
        //     const sortedNames = data.map(user => user.title).sort();
        //     // console.log(sortedNames);
        //     myContainer.innerHTML = "";
        //     crateDivs(sortedNames);
        // }
        // function sirala2(data) {
        //     const sortedNames = data.map(user => user.title).sort();
        //     // console.log(sortedNames);
        //     myContainer.innerHTML = "";
        //     crateDivs(sortedNames);
        // }
        // function sirala3(data) {
        //     const sortedNames = data.map(user => user.title).sort();
        //     // console.log(sortedNames);
        //     myContainer.innerHTML = "";
        //     crateDivs(sortedNames);
        // }


        //CARD OLUŞTURMA
     function crateDivs(category) {
        if (category && category.length > 0) {
            category.forEach(user => {
                myContainer.innerHTML += ` <div class="col-4">
                <div class="container">
                    <div class="user-card " onclick="showProductDetails(${user.id})">
                        <div class="title">
                            <p>${user.title}}</p>
                        </div>
                        <div class="card-img">
                            <img src="${user.image}" alt="">
                        </div>
                        <div class="description">
                            <p>${user.description}<p>
                        </div>
                        <div class="last">
                            <span>
                                <p class="price">${user.price} TL</p>
                                <p class="rate">${user.rating.rate}
                                <i class="fa-solid fa-star yildiz pass star" style="color: #C0C0C0;"></i>
                                <i class="fa-solid fa-star yildiz pass star" style="color: #C0C0C0;"></i>
                                <i class="fa-solid fa-star yildiz pass star" style="color: #C0C0C0;"></i>
                                <i class="fa-solid fa-star yildiz pass star" style="color: #C0C0C0;"></i>
                                <i class="fa-solid fa-star yildiz pass star" style="color: #C0C0C0;"></i>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>`;
            });
        } else {
            console.error('Category is undefined or empty');
        }
    }
        function showProductDetails(productId) {
        window.location.href = `product-details.html?id=${productId}`;
        }
      const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
     
    function gösterYildizPuani(puan, index, yildizlar) {
        const startIndex = index * 5;
        const endIndex = startIndex + 5;
        
        // Yıldız puanına göre dolu yıldızları ayarla
        for (let i = startIndex; i < startIndex + Math.round(puan); i++) {
            yildizlar[i].style.color = 'gold';
        }
        
        // Kalan yıldızları boş bırak
        for (let j = startIndex + Math.round(puan); j < endIndex; j++) {
            yildizlar[j].style.color = 'gray';
        }
    }
    function yildizCagir(data) {
        const allYildizlar = document.querySelectorAll('.yildiz');
        data.forEach((user, index) => {
            gösterYildizPuani(user.rating.rate, index, allYildizlar);
            });
    }

    function deneme() {
        console.log('deneme');
    }
    function ucuzPahalıSırala(data) {
        const ucuzPahalı = data.sort((a, b) => a.price - b.price);
        myContainer.innerHTML = "";
        crateDivs(ucuzPahalı);
        yildizCagir(ucuzPahalı);
    }
    function pahalıdanUcuzaSırala(data) {
        const pahalıUcuz = data.sort((a, b) => b.price - a.price);
        myContainer.innerHTML = "";
        crateDivs(pahalıUcuz);
        yildizCagir(pahalıUcuz);
    }
    function YıldızArtan(data) {
        const yldzartan = data.sort((a, b) => a.rating.rate - b.rating.rate);
        myContainer.innerHTML = "";
        crateDivs(yldzartan);
        yildizCagir(yldzartan);
    }
    function YıldızAzalan(data) {
        const za = data.sort((a, b) => b.rating.rate - a.rating.rate);
        myContainer.innerHTML = "";
        crateDivs(za);
        yildizCagir(za);
    }



    //yazılara tıklayarak kategori ve filtreleme arası geçiş
    const cftext = document.querySelectorAll(".change-cat")
    const displays = document.querySelectorAll(".bottomC")
    cftext[1].addEventListener('click', () => {
        cftext[1].classList.remove(`opacity30`);
        cftext[0].classList.add(`opacity30`);
        displays[1].classList.remove(`displayNone`);
        displays[0].classList.add(`displayNone`);

    });
    cftext[0].addEventListener('click', () => {
        cftext[0].classList.remove(`opacity30`);
        cftext[1].classList.add(`opacity30`);
        displays[0].classList.remove(`displayNone`);
        displays[1].classList.add(`displayNone`);
    });

    //oklarla kategori ve filtreleme arası geçiş
    // const cfarrow = document.querySelectorAll(".change-arrow")
    // let currentSlide = 0;
    // cfarrow[0].addEventListener('click', () => {
    //     prevSlide()
    // });

    // function showSlide(n) {
    //     cftext[n].classList.add('opacity30');
    //   }
    // function prevSlide() {
    //     currentSlide = (currentSlide - 1 + slides.length) % cfarrow.length;
    //     showSlide(currentSlide);
    //   }
  
    //   function nextSlide() {
    //     currentSlide = (currentSlide + 1) % cfarrow.length;
    //     showSlide(currentSlide);
    //   }

    //deneme fonksiyonu
    function deneme() {
        console.log('deneme');
    }