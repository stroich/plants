// burger start
let burger =document.querySelector(".burger");
let menu = document.getElementById("nav");
let close =document.querySelector(".header-nav-close");
let links = document.querySelectorAll(".header-list-item-link");

burger.onclick = addBurger;
function addBurger(){
    menu.classList.add("header-nav-active");
}
close.onclick =closeBurger;

function closeBurger(){
    menu.classList.remove("header-nav-active");
}

burger.addEventListener('click',clickLink);

function clickLink(){
    if(menu.classList.contains("header-nav-active")){
            for(let i=0; i<links.length; i++){
                links[i].addEventListener("click", ()=>{
                    menu.classList.remove("header-nav-active");
                });
            }
        }
}

function clickBehind (event) {
    if (menu.contains(event.target)===false && burger.contains(event.target)===false){
        menu.classList.remove("header-nav-active");
    }
}
document.addEventListener('click', clickBehind);
// burger end

// service start
let oneButtonService =document.getElementById("oneButtonService");
let twoButtonService =document.getElementById("twoButtonService");
let threeButtonService =document.getElementById("threeButtonService");
let cardsService = document.querySelectorAll(".service-pictures-card")
let buttonsService = document.querySelectorAll(".service-button")
let result= Array.from(cardsService);
function numberClickButtons(){
    let arrButtons=Array.from(buttonsService)
    let a = arrButtons.filter((item)=>{
        if (item.classList.contains("button-active")){
            return item;
        }
    })
    return a.length
}
function itemClickButtons(){
    let arrButtons=Array.from(buttonsService)
    let a = arrButtons.filter((item)=>{
        if (item.classList.contains("button-active")){
            return item;
        }
    })
    return a
}
oneButtonService.addEventListener('click',(event)=>{
    if (numberClickButtons()===0){
        result.filter(item=>{
            item.classList.add("blur")
            if (item.classList.contains('card-one')){
                item.classList.remove("blur")
                oneButtonService.classList.add("button-active")
            }
        })
    } else if(numberClickButtons()===1  && event.target.classList.contains("button-active")){
        result.filter(item=>{
            item.classList.remove("blur")
            if (item.classList.contains('card-one')){
                oneButtonService.classList.remove("button-active")
            }
        })
        
    } else if (numberClickButtons()===1  && event.target.classList.contains("button-active")===false){
            result.filter(item=>{
                if (item.classList.contains('card-one')){
                    item.classList.remove("blur")
                    oneButtonService.classList.add("button-active")
                }
            })
    }else if (numberClickButtons()===2  && event.target.classList.contains("button-active")){
        result.filter(item=>{
            if (item.classList.contains('card-one')){
                item.classList.add("blur")
                oneButtonService.classList.remove("button-active")
            }
        })
    }

});
twoButtonService.addEventListener('click',(event)=>{
    if (numberClickButtons()===0){
        result.filter(item=>{
            item.classList.add("blur")
            if (item.classList.contains('card-two')){
                item.classList.remove("blur")
                twoButtonService.classList.add("button-active")
            }
        })
    } else if(numberClickButtons()===1 && event.target.classList.contains("button-active")){
        result.filter(item=>{
            item.classList.remove("blur")
            if (item.classList.contains('card-one')){
                twoButtonService.classList.remove("button-active")
            }
        })
        
    } else if (numberClickButtons()===1 && event.target.classList.contains("button-active")===false){
        result.filter(item=>{
            if (item.classList.contains('card-two')){
                item.classList.remove("blur")
                twoButtonService.classList.add("button-active")
            }
        })
    }else if (numberClickButtons()===2  && event.target.classList.contains("button-active")){
        result.filter(item=>{
            if (item.classList.contains('card-two')){
                item.classList.add("blur")
                twoButtonService.classList.remove("button-active")
            }
        })
    }
});
threeButtonService.addEventListener('click',(event)=>{
    if (numberClickButtons()===0){
        result.filter(item=>{
            item.classList.add("blur")
            if (item.classList.contains('card-three')){
                item.classList.remove("blur")
                threeButtonService.classList.add("button-active")
            }
        })
    }else if(numberClickButtons()===1  && event.target.classList.contains("button-active")){
        result.filter(item=>{
            item.classList.remove("blur")
            if (item.classList.contains('card-one')){
                threeButtonService.classList.remove("button-active")
            }
        })
        
    } else if (numberClickButtons()===1 && event.target.classList.contains("button-active")===false){
        result.filter(item=>{
            if (item.classList.contains('card-three')){
                item.classList.remove("blur")
                threeButtonService.classList.add("button-active")
            }
        })
    }else if (numberClickButtons()===2  && event.target.classList.contains("button-active")){
        result.filter(item=>{
            if (item.classList.contains('card-three')){
                item.classList.add("blur")
                threeButtonService.classList.remove("button-active")
            }
        })
    } 
});
//service end
//prices start
let buttonsPrices = document.querySelectorAll(".prices-accordion-section-header-inactive")
function numberButtonsActive(){
    let arrButtons=Array.from(buttonsPrices)
    let a = arrButtons.filter((item)=>{
        if (item.classList.contains("prices-accordion-section-header-active")){
            return item;
        }
    })
    return [a.length, a]
}
buttonsPrices.forEach(button=>{
        button.addEventListener('click',()=>{
        if (numberButtonsActive()[0]===0){
            button.nextElementSibling.classList.toggle("prices-accordion-section-dropdown")
            button.classList.toggle("prices-accordion-section-header-active")
            button.parentElement.classList.toggle("prices-accordion-section-active")
        }
        else {
            buttonsPrices.forEach(element=>{
                if (element.classList.contains("prices-accordion-section-header-active")&& button.classList.contains("prices-accordion-section-header-active")===false){
                    element.nextElementSibling.classList.toggle("prices-accordion-section-dropdown")
                    element.classList.toggle("prices-accordion-section-header-active")
                    element.parentElement.classList.toggle("prices-accordion-section-active")
                }
            })
                button.nextElementSibling.classList.toggle("prices-accordion-section-dropdown")
                button.classList.toggle("prices-accordion-section-header-active")
                button.parentElement.classList.toggle("prices-accordion-section-active")

        }
    })
})
//prices end
//contact start
function numbers(){
    let arrButtons=Array.from(cardContact)
    let a = arrButtons.filter((item)=>{
        if (item.classList.contains("visible")){
            return item;
        }
    })
    return a.length
}
let buttonContact = document.querySelector(".contacts-accordion-item-text")
let listCity = document.querySelector(".contacts-accordion-hidden")
buttonContact.addEventListener("click",()=>{
    buttonContact.classList.toggle("hidden")
    document.querySelectorAll(".contacts-accordion-item").forEach(element=>{
        element.classList.toggle("contacts-accordion-active")
    })
})
function clickContact (event) {
    if (buttonContact.contains(event.target)===false && listCity.contains(event.target)===false){
        buttonContact.classList.remove("hidden")
        document.querySelectorAll(".contacts-accordion-item").forEach(element=>{
            element.classList.remove("contacts-accordion-active")
        })
    }
}
document.addEventListener('click', clickContact);
let  linkContact = document.querySelectorAll(".contacts-accordion-hidden-item")
let cardContact = document.querySelectorAll(".contacts-card")
linkContact.forEach((element,item)=>{
    element.addEventListener('click',()=>{
        if (numbers()===0){
            cardContact[item].classList.toggle("visible");
        }else{
            cardContact.forEach(link=>link.classList.remove("visible"));
            cardContact[item].classList.toggle("visible");
        }

        buttonContact.innerHTML = cardContact[item].firstElementChild.lastElementChild.firstElementChild.textContent;
        buttonContact.classList.toggle("hidden");
        document.querySelectorAll(".contacts-accordion-item").forEach(element=>{
            element.classList.toggle("contacts-accordion-active")
            element.classList.add("contacts-accordion-visited")
        })

    })
})
//contact end
console.log('При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\nAccordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\nВ разделе contacts реализован select с выбором городов +25');