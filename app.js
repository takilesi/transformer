// DOM MANIPULATION

// Goal: Retail Site 
    // Dynamically change the Entire Site with a click of a button
    // General -- Mens -- Womens -- Children


    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of mens pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: {
            headImage: "https://preply.com/wp-content/uploads/2018/04/dresses.jpg",
            optionTags: ["High Heels", "Dresses", "Scarves", "Lotion"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://m.media-amazon.com/images/I/81NjeIhs4iL.AC_SS144.jpg"
                },
                {
                    name: 'Boots',
                    pic: "https://i.ebayimg.com/images/g/Gf8AAOSwRyti26Qc/s-l500.jpg"
                },
                {
                    name: 'Flannels',
                    pic: "https://cdn.shopify.com/s/files/1/0359/8357/products/FA21-WKF2107-TCB-faherty-womens-legend-sweater-shirt-tan-charcoal-buffalo-check-2_front-1_5c8d7833-0109-4ebd-b618-413e62e1a490_300x.jpg?v=1643820775"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.urbndata.com/is/image/Anthropologie/85324101_011_b2?$an-category$&fit=constrain&fmt=webp&hei=1046&qlt=80&wid=698"
                },
                {
                    name: 'Hoodies',
                    pic: "https://m.media-amazon.com/images/I/71DFpgg0EML._AC_UL800_FMwebp_QL65_.jpg"
                },
                {
                    name: 'Hats',
                    pic: "https://images.urbndata.com/is/image/Anthropologie/83333914_038_b2?$an-category$&qlt=80&fit=constrain"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of mens pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'},
        kids: {}
    }
// -----------------------

let mainImage = document.querySelector('.mainImg')
let option = document.querySelector('.options')
let miniOp = document.querySelectorAll('.choice')
let productBox = document.querySelector('.productContainer')
let pic = document.querySelector('.polaroid')
let textBox= document.querySelector('.textContainer')






const changeAll = () => {
    changeTopPic()
    changeOptions()
    product()
}
    const changeTopPic = () =>{
        // createImage 
        let newimage = document.createElement('img')
            newimage.setAttribute('src', majorContainer.mens.headImage)
            newimage.setAttribute('class','topPic')
        // replaceWith current
        mainImage.replaceWith(newimage)

    }

    const changeOptions = () =>{
        majorContainer.mens.optionTags.forEach((tagname)=>{
            // CREATE ELE
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
        })
    }

    const product= () => {
        majorContainer.mens.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        })

    }

    const changeAllWomens = () => {
        changeTopPicW()
        changeOptionsW()
        productW()
    }
        const changeTopPicW = () =>{
            // createImage 
            let newimage = document.createElement('img')
                newimage.setAttribute('src', majorContainer.womens.headImage)
                newimage.setAttribute('class','topPic')
            // replaceWith current
            mainImage.replaceWith(newimage)
    
        }
    
        const changeOptionsW = () =>{
            majorContainer.womens.optionTags.forEach((tagname)=>{
                // CREATE ELE
                let txt = document.createElement('div')
                txt.innerHTML = tagname
                // REPLACE ELEMENT WITH NEW ELEMENT
                option.append(txt)
            })
        }
    
        const productW= () => {
            majorContainer.womens.productImages.forEach((obj)=>{
                let shopBox  = document.createElement('img')
                shopBox.setAttribute('src',obj.pic)
                shopBox.setAttribute('class','product')
                productBox.append(shopBox)
            })
    
        }