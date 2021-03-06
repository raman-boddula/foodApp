//getData
//AppendData


async function getDetails(url){
    let res = await fetch(url);
    let data = await res.json();
    return data;
}
function AppendData(data,container){
    data.forEach(({strMeal,strMealThumb,strIngredient1,strMeasure1,strIngredient2,strMeasure2,strIngredient3,strMeasure3,strIngredient4,strMeasure4,strIngredient5,strMeasure5})=>{
        let div = document.createElement('div');
        div.setAttribute('class','pic')
        let p = document.createElement('h3');
        p.setAttribute('class','mealName')
        p.textContent= strMeal;
        let img = document.createElement('img');
        
        img.src=strMealThumb;
        let inc = document.createElement('h4');
        inc.textContent="Incredients:- "+strIngredient1+"-"+strMeasure1+", "+strIngredient2+"-"+strMeasure2+", "+strIngredient3+"-"+strMeasure3+", "+strIngredient4+"-"+strMeasure4+", "+strIngredient5+"-"+strMeasure5;
        inc.setAttribute('class','incr')
        div.append(img,p,inc);
        container.append(div);
    })
}
function show(data,container){
    data.forEach((res)=>{
        let div = document.createElement('div');
        div.setAttribute('class','pic')
        let p = document.createElement('h2');
       p.setAttribute('class','catName')
        p.textContent= res.strCategory;
        let img = document.createElement('img');
        
        img.src=res.strCategoryThumb;
        div.append(img,p);
        container.append(div);
    })
}

export {getDetails,AppendData,show};