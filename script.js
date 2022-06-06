class toDo {
    constructor(){
        this.mainInput = document.querySelector('#input');
        this.addBtn = document.querySelector('.input-button');
        this.allCards = document.querySelector('.cards');
        this.data = [];
        this.dataCopy = this.data;
    
//calling functions

this.addValue();
this.search();

    }

    addValue() {
        this.addBtn.addEventListener('click', ()=> {
            const inputVal = this.mainInput.value;
           if(inputVal.trim()){
               this.data.push(inputVal);
            console.log(this.data);

           }
           this.createCard();
        //    this.deleteCard();
        });
    }

    createCard(){
        this.allCards.innerHTML = '';
        this.mainInput.value = '';
        this.data.forEach((item, i) => {
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('id', `${i}`)
            cardDiv.classList.add('card');
            cardDiv.innerHTML = `
            <p class="card-${i}" id="card">${item}</p>
            <button class="done-button" onclick="myToDo.deleteCard(event)" id="delete-${i}">Done</button>
    `
    this.allCards.appendChild(cardDiv)
});

    }


    search(){
        const searchInput = document.querySelector('.search');

        searchInput.addEventListener('input', (e) => {
            const evTarg = e.target.value;
            const newData = [];

            if(evTarg) {
                this.data = this.dataCopy;
                for(let i = 0; i < this.data.length; i++){
                    if(this.data[i].includes(evTarg)){
                        newData.push(this.data[i]);
                    }
                }
                this.data = newData;
            }else{
                this.data = this.dataCopy;
            }
        this.allCards.innerHTML = '';
this.createCard();
        })
    }

    deleteCard(e){
            const btnId = e.target.id[e.target.id.length - 1];
            const card = document.querySelectorAll('.card');
            const deleteBtn = document.querySelectorAll('.done-button');

            card.forEach(item => {
                const textId = item.id[item.id.length-1];
                if(btnId === textId){
                    const getmyFind = this.findmyResult(textId);
                    const indexOfmyData = this.data.indexOf(getmyFind);
                    this.data.splice(indexOfmyData, 1);
                    item.remove();
 
                }
            });
        }
        findmyResult(id){
            const ItemText = document.querySelectorAll('#card');
            let findmyItem;
            ItemText.forEach(item => {
                const itemId = item.id[item.id.length - 1];
                if(itemId === id){
                    findmyItem = item.textContent;
                }
            })
            return findmyItem;
        }
}

const myToDo = new toDo({
    data : this.data
});