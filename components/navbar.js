function navbar (){
    return `<div id="navbar">
    <h3><a href="search.html"><img src="https://www.foodapp.us/images/logo.png" alt=""></a></h3>
    <input type="text" placeholder="Search your favourite dish" id="search">
    <!---<button onclick="get(event)">get</button>--->
    <div id="options">

    <h3><a href="receipeOfDay.html">Receipe of the day</a></h3>
    <h3><a href="latest.html">Latest Receipe</a></h3>
    <h3><a href="#">Sign In</a></h3>
    <h3><a href="#">Sign Up</a></h3>
    </div>`
}

export default navbar