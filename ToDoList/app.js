var items=["do it 1","do it 2","do it 3"]
var list =document.querySelector("#myList");

items.forEach(function(item){
    
    Createitem(item);
});



list.addEventListener('click',function(item){
    if(item.target.tagName=='LI'){
        item.target.classList.toggle('checked');
        ToogleDeleteButton();    
        
    }
});

document.querySelector('#deleteall').onclick=function(){
    var elements=document.querySelectorAll('.checked');
    elements.forEach(function(item){
        item.style.display='none'
    })
}

function ToogleDeleteButton(){
    var checkList=document.querySelectorAll('.list-group-item.checked');
    if (checkList.length>0){
        document.querySelector('#deleteall').classList.remove('d-none');
    }else{
        document.querySelector('#deleteall').classList.add('d-none');
    }
}


document.querySelector('#createbutton').onclick=function(){
     var item=document.querySelector('#textitem').value;
     if(item===''){
         alert('lütfen bir yapılacak giriniz')
         return;
     }
     Createitem(item);

};
function Createitem(item){
    var li =document.createElement('li');
    var t =document.createTextNode(item);
    li.className="list-group-item";
    li.appendChild(t);
    list.appendChild(li);
    
    var button=document.createElement('button');
    var text=document.createTextNode('Delete');
    button.className='close btn btn-outline-dark btn-sm';
    button.appendChild(text);
    li.appendChild(button);
    button.onclick=function(){
        var li=this.parentElement;
        li.style.display='none';
        li.classList.remove('checked')
}}