
// Danh sách sản phẩm
const data = [
  {
      id: 1,
      name: 'Hồng Trà Sữa Nóng',
      price: 35000,
      image: '../asset/img/bg-1.png',
      capacity: 250,
      evaluate: 5
  },
  {
      id: 2,
      name: 'Hồng Trà Latte Macchiato',
      price: 35000,
      image: '../asset/img/bg-2.png',
      capacity: 250,
      evaluate: 5
  },
  {
      id: 3,
      name: 'Hồng Trà Sữa Trân Châu',
      price: 35000,
      image: '../asset/img/bg-3.png',
      capacity: 250,
      evaluate: 5
  },
  {
      id: 4,
      name: 'Trà Sữa Sô Cô La (Nóng)',
      price: 25000,
      image: '../asset/img/bg-4.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 5,
      name: 'Trà Sữa Dừa (Nóng)',
      price: 25000,
      image: '../asset/img/bg-5.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 6,
      name: 'Trà Đào Cam Sả',
      price: 25000,
      image: '../asset/img/bg-6.png',
      capacity: 250,
      evaluate: 3
  },
  {
      id: 7,
      name: 'Trà Hạt Sen',
      price: 20000,
      image: '../asset/img/bg-7.png',
      capacity: 250,
      evaluate: 3
  },
  {
      id: 8,
      name: 'Trà Long Nhãn',
      price: 20000,
      image: '../asset/img/bg-8.png',
      capacity: 250,
      evaluate: 3
  },
  {
      id: 9,
      name: 'Trà Đen Macchiato',
      price: 45000,
      image: '../asset/img/bg-9.png',
      capacity: 250,
      evaluate: 2
  },
  {
      id: 10,
      name: 'Trà Sữa Mắc Ca Trân Châu',
      price: 45000,
      image: '../asset/img/bg-10.png',
      capacity: 250,
      evaluate: 2
  }
]
const data1 = [
  {
      id: 11,
      name: 'Hồng Trà Sữa Nóng',
      price: 45000,
      image: '../asset/img/bg-1.png',
      capacity: 3000,
      evaluate: 5
  },
  {
      id: 12,
      name: 'Hồng Trà Latte Macchiato',
      price: 45000,
      image: '../asset/img/bg-2.png',
      capacity: 300,
      evaluate: 5
  },
  {
      id: 13,
      name: 'Hồng Trà Sữa Trân Châu',
      price: 45000,
      image: '../asset/img/bg-3.png',
      capacity: 300,
      evaluate: 5
  },
  {
      id: 14,
      name: 'Trà Sữa Sô Cô La (Nóng)',
      price: 45000,
      image: '../asset/img/bg-4.png',
      capacity: 300,
      evaluate: 4
  },
  {
      id: 15,
      name: 'Trà Sữa Dừa (Nóng)',
      price: 35000,
      image: '../asset/img/bg-5.png',
      capacity: 300,
      evaluate: 4
  },
  {
      id: 16,
      name: 'Trà Đào Cam Sả',
      price: 35000,
      image: '../asset/img/bg-6.png',
      capacity: 300,
      evaluate: 3
  },
  {
      id: 17,
      name: 'Trà Hạt Sen',
      price: 30000,
      image: '../asset/img/bg-7.png',
      capacity: 300,
      evaluate: 3
  },
  {
      id: 18,
      name: 'Trà Long Nhãn',
      price: 30000,
      image: '../asset/img/bg-8.png',
      capacity: 300,
      evaluate: 3
  },
  {
      id: 19,
      name: 'Trà Đen Macchiato',
      price: 55000,
      image: '../asset/img/bg-9.png',
      capacity: 300,
      evaluate: 2
  },
  {
      id: 20,
      name: 'Trà Sữa Mắc Ca Trân Châu',
      price: 55000,
      image: '../asset/img/bg-10.png',
      capacity: 300,
      evaluate: 2
  }
]
const data2 = [
  {
      id: 21,
      name: 'Hồng Trà Sữa Nóng',
      price: 55000,
      image: '../asset/img/bg-1.png',
      capacity: 400,
      evaluate: 5
  },
  {
      id: 22,
      name: 'Hồng Trà Latte Macchiato',
      price: 55000,
      image: '../asset/img/bg-2.png',
      capacity: 400,
      evaluate: 5
  },
  {
      id: 23,
      name: 'Hồng Trà Sữa Trân Châu',
      price: 55000,
      image: '../asset/img/bg-3.png',
      capacity: 400,
      evaluate: 5
  },
  {
      id: 24,
      name: 'Trà Sữa Sô Cô La (Nóng)',
      price: 55000,
      image: '../asset/img/bg-4.png',
      capacity: 400,
      evaluate: 4
  },
  {
      id: 25,
      name: 'Trà Sữa Dừa (Nóng)',
      price: 45000,
      image: '../asset/img/bg-5.png',
      capacity: 400,
      evaluate: 4
  },
  {
      id: 26,
      name: 'Trà Đào Cam Sả',
      price: 45000,
      image: '../asset/img/bg-6.png',
      capacity: 400,
      evaluate: 3
  },
  {
      id: 7,
      name: 'Trà Hạt Sen',
      price: 40000,
      image: '../asset/img/bg-7.png',
      capacity: 400,
      evaluate: 3
  },
  {
      id: 8,
      name: 'Trà Long Nhãn',
      price: 40000,
      image: '../asset/img/bg-8.png',
      capacity: 400,
      evaluate: 3
  },
  {
      id: 9,
      name: 'Trà Đen Macchiato',
      price: 65000,
      image: '../asset/img/bg-9.png',
      capacity: 400,
      evaluate: 2
  },
  {
      id: 10,
      name: 'Trà Sữa Mắc Ca Trân Châu',
      price: 65000,
      image: '../asset/img/bg-10.png',
      capacity: 400,
      evaluate: 2
  }
]
const data3 = [
  {
      id: 1,
      name: 'Hồng Trà Sữa Nóng',
      price: 65000,
      image: '../asset/img/bg-1.png',
      capacity: 500,
      evaluate: 5
  },
  {
      id: 2,
      name: 'Hồng Trà Latte Macchiato',
      price: 65000,
      image: '../asset/img/bg-2.png',
      capacity: 500,
      evaluate: 5
  },
  {
      id: 3,
      name: 'Hồng Trà Sữa Trân Châu',
      price: 65000,
      image: '../asset/img/bg-3.png',
      capacity: 500,
      evaluate: 5
  },
  {
      id: 4,
      name: 'Trà Sữa Sô Cô La (Nóng)',
      price: 55000,
      image: '../asset/img/bg-4.png',
      capacity: 500,
      evaluate: 4
  },
  {
      id: 5,
      name: 'Trà Sữa Dừa (Nóng)',
      price: 55000,
      image: '../asset/img/bg-5.png',
      capacity: 500,
      evaluate: 4
  },
  {
      id: 6,
      name: 'Trà Đào Cam Sả',
      price: 55000,
      image: '../asset/img/bg-6.png',
      capacity: 500,
      evaluate: 3
  },
  {
      id: 7,
      name: 'Trà Hạt Sen',
      price: 50000,
      image: '../asset/img/bg-7.png',
      capacity: 500,
      evaluate: 3
  },
  {
      id: 8,
      name: 'Trà Long Nhãn',
      price: 50000,
      image: '../asset/img/bg-8.png',
      capacity: 500,
      evaluate: 3
  },
  {
      id: 9,
      name: 'Trà Đen Macchiato',
      price: 75000,
      image: '../asset/img/bg-9.png',
      capacity: 500,
      evaluate: 2
  },
  {
      id: 10,
      name: 'Trà Sữa Mắc Ca Trân Châu',
      price: 75000,
      image: '../asset/img/bg-10.png',
      capacity: 500,
      evaluate: 2
  }
]
const data4 = [
  {
      id: 1,
      name: 'Hồng Trà Sữa Nóng',
      price: 35000,
      image: '../asset/img/bg-1.png',
      capacity: 250,
      evaluate: 5
  },
  {
      id: 2,
      name: 'Hồng Trà Latte Macchiato',
      price: 35000,
      image: '../asset/img/bg-2.png',
      capacity: 250,
      evaluate: 5
  },
  {
      id: 3,
      name: 'Hồng Trà Sữa Trân Châu',
      price: 35000,
      image: '../asset/img/bg-3.png',
      capacity: 250,
      evaluate: 5
  },
  {
      id: 4,
      name: 'Trà Sữa Sô Cô La (Nóng)',
      price: 25000,
      image: '../asset/img/bg-4.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 5,
      name: 'Trà Sữa Dừa (Nóng)',
      price: 25000,
      image: '../asset/img/bg-5.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 6,
      name: 'Trà Đào Cam Sả',
      price: 25000,
      image: '../asset/img/bg-6.png',
      capacity: 250,
      evaluate: 3
  },
  {
      id: 7,
      name: 'Trà Hạt Sen',
      price: 20000,
      image: '../asset/img/bg-7.png',
      capacity: 250,
      evaluate: 3
  },
  {
      id: 8,
      name: 'Trà Long Nhãn',
      price: 20000,
      image: '../asset/img/bg-8.png',
      capacity: 250,
      evaluate: 3
  },
  {
      id: 9,
      name: 'Trà Đen Macchiato',
      price: 45000,
      image: '../asset/img/bg-9.png',
      capacity: 250,
      evaluate: 2
  },
  {
      id: 10,
      name: 'Trà Sữa Mắc Ca Trân Châu',
      price: 45000,
      image: '../asset/img/bg-10.png',
      capacity: 250,
      evaluate: 2
  },
  {
      id: 11,
      name: 'Trà Hibiscus Đào',
      price: 50000,
      image: '../asset/img/bg-11.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 12,
      name: 'Trà Hibiscus Phúc Bồn Tử Mandarin',
      price: 50000,
      image: '../asset/img/bg-12.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 13,
      name: 'Trà Hibiscus Xoài Đào',
      price: 50000,
      image: '../asset/img/bg-13.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 14,
      name: 'Trà Hibiscus Vải',
      price: 50000,
      image: '../asset/img/bg-14.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 15,
      name: 'Trà Đào Cam Sả (Nóng)',
      price: 50000,
      image: '../asset/img/bg-15.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 16,
      name: 'Bánh Red Velvet',
      price: 30000,
      image: '../asset/img/bg-16.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 17,
      name: 'Bánh Tiramisu',
      price: 30000,
      image: '../asset/img/bg-17.png',
      capacity: 250,
      evaluate: 4
  },
  {
      id: 18,
      name: 'Mochi Kem Matcha',
      price: 30000,
      image: '../asset/img/bg-18.png',
      capacity: 250,
      evaluate: 4
  }
]
function renderTeaHouse(data) { //output chuỗi
    //output contentHTML:string
    let contentHTML = '';
    for (let index = 0; index < data.length; index++) {
        let tea = data[index];
        contentHTML += `
        <div class="col-3 product-card mt-3" id="animated-thumbnails">
        <div class="card">
        <div class="img item">
        <img class="card-img-top" src="${tea.image}" alt="Title" />
        <p>-${(((tea.price)/ ((tea.price+10000)+(tea.price)) ) * 100).toFixed(0)}%</p>
        <a data-exthumbimage="${tea.image}" data-lg-size="2500-2500" class="lightimg"
        data-src="${tea.image}" data-sub-html="Design">
        <i class="fa fa-plus"></i>
        </a>
        </div>
          <div class="card-body ">
            <p class="card-title ml-0">${tea.name} ${tea.capacity} ml</p>
            <p class="card-text ml-0">${tea.price} đ <span> / </span><span> ${tea.price+ 10000} đ</span></p>
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
function renderTeaHouse1(data) { //output chuỗi
  //output contentHTML:string
  let contentHTML = '';
  for (let index = 0; index < data.length; index++) {
      let tea = data[index];
      contentHTML += `
      <div class="col-3 product-card mt-3" id="animated-thumbnails">
      <div class="card">
      <div class="img item">
      <img class="card-img-top" src="${tea.image}" alt="Title" />
      <p>-${(((tea.price)/ ((tea.price+10000)+(tea.price)) ) * 100).toFixed(0)}%</p>
      <a data-exthumbimage="${tea.image}" data-lg-size="2500-2500" class="lightimg"
      data-src="${tea.image}" data-sub-html="Design">
      <i class="fa fa-plus"></i>
      </a>
      </div>
        <div class="card-body ">
          <p class="card-title ml-0">${tea.name} ${tea.capacity} ml</p>
          <p class="card-text ml-0">${tea.price} đ <span> / </span><span> ${tea.price+ 10000} đ</span></p>
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
  document.querySelector('#product-list1').innerHTML = contentHTML;
}
function renderTeaHouse2(data) { //output chuỗi
  //output contentHTML:string
  let contentHTML = '';
  for (let index = 0; index < data.length; index++) {
      let tea = data[index];
      contentHTML += `
      <div class="col-3 product-card mt-3" id="animated-thumbnails">
      <div class="card">
      <div class="img item">
      <img class="card-img-top" src="${tea.image}" alt="Title" />
      <p>-${(((tea.price)/ ((tea.price+10000)+(tea.price)) ) * 100).toFixed(0)}%</p>
      <a data-exthumbimage="${tea.image}" data-lg-size="2500-2500" class="lightimg"
      data-src="${tea.image}" data-sub-html="Design">
      <i class="fa fa-plus"></i>
      </a>
      </div>
        <div class="card-body ">
          <p class="card-title ml-0">${tea.name} ${tea.capacity} ml</p>
          <p class="card-text ml-0">${tea.price} đ <span> / </span><span> ${tea.price+ 10000} đ</span></p>
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
  document.querySelector('#product-list2').innerHTML = contentHTML;
}
function renderTeaHouse3(data) { //output chuỗi
  //output contentHTML:string
  let contentHTML = '';
  for (let index = 0; index < data.length; index++) {
      let tea = data[index];
      contentHTML += `
      <div class="col-3 product-card mt-3" id="animated-thumbnails">
      <div class="card">
      <div class="img item">
      <img class="card-img-top" src="${tea.image}" alt="Title" />
      <p>-${(((tea.price)/ ((tea.price+10000)+(tea.price)) ) * 100).toFixed(0)}%</p>
      <a data-exthumbimage="${tea.image}" data-lg-size="2500-2500" class="lightimg"
      data-src="${tea.image}" data-sub-html="Design">
      <i class="fa fa-plus"></i>
      </a>
      </div>
        <div class="card-body ">
          <p class="card-title ml-0">${tea.name} ${tea.capacity} ml</p>
          <p class="card-text ml-0">${tea.price} đ <span> / </span><span> ${tea.price+ 10000} đ</span></p>
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
  document.querySelector('#product-list3').innerHTML = contentHTML;
}
function renderTeaHouse4(data) { //output chuỗi
  //output contentHTML:string
  let contentHTML = '';
  for (let index = 0; index < data.length; index++) {
      let tea = data[index];
      contentHTML += `
      <div class="col-3 product-card mt-3" id="animated-thumbnails">
      <div class="card">
      <div class="img item">
      <img class="card-img-top" src="${tea.image}" alt="Title" />
      <p>-${(((tea.price)/ ((tea.price+10000)+(tea.price)) ) * 100).toFixed(0)}%</p>
      <a data-exthumbimage="${tea.image}" data-lg-size="2500-2500" class="lightimg"
      data-src="${tea.image}" data-sub-html="Design">
      <i class="fa fa-plus"></i>
      </a>
      </div>
        <div class="card-body ">
          <p class="card-title ml-0">${tea.name} ${tea.capacity} ml</p>
          <p class="card-text ml-0">${tea.price} đ <span> / </span><span> ${tea.price+ 10000} đ</span></p>
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
  document.querySelector('#listAll').innerHTML = contentHTML;
}
renderTeaHouse(data);
renderTeaHouse1(data1);
renderTeaHouse2(data2);
renderTeaHouse3(data3);
renderTeaHouse4(data4);
renderStart = (name) => {
    let htmlContent = '<i class="fa fa-star mr-1"></i>';
    let result = []
    for (var i = 0; i < parseInt(name); i++) {
        result.push(htmlContent);
    }
    // document.querySelector('.evaluate').innerHTML = htmlContent;
    return result;
}
