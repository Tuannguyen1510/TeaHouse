
// Danh sách sản phẩm
const data = [
    {
        id: 1,
        name: 'Trà việt quất',
        price: 25000,
        image:
            '../asset/img/bg-1.jpg',
        capacity: 250,
        evaluate: 5
    },
    {
        id: 2,
        name: 'Trà sữa đào',
        price: 35000,
        image: '../asset/img/bg-2.jpg',
        capacity: 250,
        evaluate: 5
    },
];
function renderSinhVien(data) { //output chuỗi
    //output contentHTML:string
    let contentHTML = '';
    for (let index = 0; index < data.length; index++) {
        let sv = data[index];
        contentHTML += `
        <div class="col-3 product-card">
        <div class="card">
          <img class="card-img-top" src="${sv.image}" alt="Title" />
          <div class="card-body ">
            <p class="card-title ml-0">${sv.name}</p>
            <p class="card-text ml-0">${sv.price} $$</p>
            <div class="row">
              <div class="col-6">
                <div class="btn btn-outline-success button-add">Chọn Mua</div>
              </div>
              <div class="col-6">
                <div class="btn btn-outline-success button-add">Xem chi tiết</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    }
    // console.log(contentHTML);
    document.querySelector('#product-list').innerHTML = contentHTML;
}
renderSinhVien(data);



renderStart = (name) => {
    let htmlContent = '<i class="fa fa-star mr-1"></i>';
    let result = []
    for (var i = 0; i < parseInt(name); i++) {
        result.push(htmlContent);
    }
    // document.querySelector('.evaluate').innerHTML = htmlContent;
    return result;
}
