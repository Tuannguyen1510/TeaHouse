
// Danh sách sản phẩm
const data = [
    {
        id: 1,
        name: 'Áo kiểu nữ cam đất phối cổ trắng dập ly',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.',
        price: 250000,
        image:
            '../asset/img/bg-1.jpg',
        count: 1,
    },
    {
        id: 2,
        name: 'Áo trắng bèo lé đen tay loe dễ thương',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.',
        price: 350000,
        image:
            'https://image.yes24.vn/Upload/ProductImage/anhduong201605/1914666_L.jpg?width=550&height=550',
        count: 1,
    },
];
function renderSinhVien(data) { //output chuỗi
    //output contentHTML:string
    let contentHTML = '';
    for (let index = 0; index < data.length; index++) {
        let sv = data[index];
        contentHTML += `
        <div class='col-3'>
           <div class="card">
                <img class="card-img-top" src=${sv.image} alt="Title">
            <div class="card-body">
                <h4 class="card-title">${sv.name}</h4>
                <p class="card-text">${sv.price}</p>
           </div>
         </div>
        </div>
        `
    }
    // console.log(contentHTML);
    document.querySelector('#product-list').innerHTML = contentHTML;
}
renderSinhVien(data);