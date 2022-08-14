// function which excutes on window loads
window.onload = function(){
    // generate header
    // declare object header and store necessary variables

    
    const header = {
        
    heading: "SamyCa Store",
    buttonName: "Search"
    

    };
    // create a template which includes mustache variable including it with {{}}
    var template = `
    <h1>{{heading}}</h1>
    <input type="text" placeholder="Search..">
    <button>{{buttonName}}</button>
    `;
    // get compiled template which original html string
    var html = Mustache.to_html(template, header);
    // select header element and add as a inner html
    document.getElementsByClassName('header')[0].innerHTML = html;
    
    // similary add links in navbar
    const links = ['Home','Men', 'Women', 'Kid & Baby', 'Shoes', 'All Special'];
    // if we want to loop in mustache use #<variable name> , inside this you cn access each element of arr.
    // here . indicates selt string
    template = `
    {{#links}}
    <a href="#">{{.}}</a>
    {{/links}}
    `
    // simalry add items
    html = Mustache.to_html(template, {links});
    document.getElementsByClassName('navbar')[0].innerHTML = html;
    const items = {
    title : 'Shop All Doorbuste',
    subtitile : 'Extra 25% OFF for Any purchap with Coupon Earn Bonus Points NOW',
    allItems : [
    {
    name: 'Mens Shirt',
    quantity: '4 in stock',
    cost: '$12.99 sale 60% off'
    
    },
    {
    name: 'a.n.a Women Wvi Sandals',
    quantity: '5 in stock',
    cost: ' $$25.99 sale 60% off'
    },
    {
    name: 'Babiess clother unisex',
    quantity: '10 in stock',
    cost: '$22.99 sale 60% off'
    },
    {
    name: 'Classic dressy',
    quantity: '13',
    cost: '$27.99 sale 60% off'
    },
    ]
    }
    template = `
    <h2>{{title}}</h2>
    <h5>{{subtitile}}</h5>
    {{#allItems}}
    
    <div class="container" style="height:200px;">
    <img src="baby.png" alt="Image" style="height:150px;">
    <img src="Men Shirt.png" alt="Image" style="height:150px;">
    <img src="Sandal.png" alt="Image" style="height:150px;">
    <img src="Women.jpeg" alt="Image" style="height:150px;">
    </div>
    <p>{{name}}</p>
    <p>{{quantity}}</p>
    <p>{{cost}}</p>
    <br>
    {{/allItems}}
    `
    html = Mustache.to_html(template, items);
    document.getElementsByClassName('main')[0].innerHTML = html;
    template = `
    <h2>{{footer}}</h2>
    `
    const footer = "Special Register."
    html = Mustache.to_html(template, {footer});
    document.getElementsByClassName('footer')[0].innerHTML = html;
    // $('#sampleArea').html(html);
    }