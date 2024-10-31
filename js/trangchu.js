
    // Dữ liệu sản phẩm nổi bật
    const pcNoiBat  = [
        {
            "id": 1,
            "title": "PC GVN Intel i5-12400F/ VGA RTX 4060",
            "image": "../img/sph1.webp",
            "price": "35.390.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt2.png"
        },
        {
            "id": 2,
            "title": "PC GVN Intel i5-12400F/ VGA RTX 3060",
            "image": "../img/sph2.webp",
            "price": "21.990.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt3.png"
        },
        {
            "id": 3,
            "title": "PC GVN Intel i5-12400F/ VGA RTX 4060",
            "image": "../img/sph3.webp",
            "price": "30.390.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt2.png"
        },
        {
            "id": 4,
            "title": "PC GVN Intel i5-12400F/ VGA RTX 3060",
            "image": "../img/sph4.webp",
            "price": "25.990.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt3.png"
        }
    ];

    // Dữ liệu sản phẩm giá tốt
    const pcGiaTot  = [
        {
            "id": 5,
            "title": "PC GVN Intel i5-12400F/ VGA RTX 3060",
            "image": "../img/sp1.webp",
            "price": "29.990.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt3.png"
        },
        {
            "id": 6,
            "title": "PC GVN Intel i5-12400F/ VGA RTX 4060 ",
            "image": "../img/sp2.webp",
            "price": "35.390.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt2.png"
        },
        {
            "id": 7,
            "title": "PC GVN Intel i5-12400F/ VGA RX 6600",
            "image": "../img/sp3.webp",
            "price": "15.880.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt3.png"
        },
        {
            "id": 8,
            "title": "PC GVN Intel i5-12400F/ VGA RTX 4060",
            "image": "../img/sp4.webp",
            "price": "35.390.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt2.png"
        },
        {
            "id": 9,
            "title": "PC GVN Intel i5-12400F/ VGA RX 6600 (H610)",
            "image": "../img/sp5.webp",
            "price": "33.390.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt3.png"
        },
        {
            "id": 10,
            "title": "PC GVN G-STUDIO AMD R5-5600X/ VGA RTX",
            "image": "../img/sp6.webp",
            "price": "21.990.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt2.png"
        },
        {
            "id": 11,
            "title": "PC GVN Intel i5-12400F/ VGA RTX 3060 (H610)",
            "image": "../img/sp7.webp",
            "price": "15.390.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt3.png"
        },
        {
            "id": 12,
            "title": "PC GVN G-STUDIO AMD R5-5600X/ VGA RTX",
            "image": "../img/sp8.webp",
            "price": "21.990.000",
            "link": "../html/chiTietSp.html",
            "tag": "../img/tt2.png"
        }
    ];

    function displayProducts(products, containerId) {
        let productHtml = '<div class="row">';
        products.forEach((product) => {
            productHtml += `
                <div class="col-md-3 col-sm-6 product-small col has-hover" id="pc-${product.id}">
                    <div class="col-inner">
                        <div class="product-small box">
                            <div class="box-image">
                                <img class="default-image" width="100%" src="${product.image}" alt="${product.title}">
                            </div>
                            <div class="box-text text-center">
                                <p class="name">
                                    <a href="../html/chiTietSp.html" class="product-link" onclick="saveProductData(${product.id})">${product.title}</a>
                                </p>
                                <div class="box-image">
                                    <img class="default-image" width="100%" src="${product.tag}" alt="${product.title}">
                                </div>
                                <span class="price"><bdi>${product.price}&nbsp;<span>đ</span></bdi></span>
                                <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">Thêm giỏ hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        productHtml += '</div>';
        $(`#${containerId}`).html(productHtml);
    }
    
    // Hàm lưu dữ liệu sản phẩm vào localStorage
    function saveProductData(productId) {
        const allProducts = [...pcNoiBat, ...pcGiaTot];
        const selectedProduct = allProducts.find(product => product.id === productId);
        localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    }
    
    // Hiển thị sản phẩm
    displayProducts(pcGiaTot, 'listProduct_giaTot');
    displayProducts(pcNoiBat, 'listProduct_noiBat');