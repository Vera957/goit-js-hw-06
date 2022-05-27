const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgList = document.querySelector(".gallery");

const result = images.forEach(function(item){
  imgList.insertAdjacentHTML("afterbegin", '<li></li>');
  let el = document.querySelector('li');
  el.className = 'item_task_3'
  el.insertAdjacentHTML('afterbegin', '<img/>');
  let img = document.querySelector('img');
  img.src = item.url;
  img.alt = item.alt;
  img.className = "img_task_3";
  imgList.append(el);
})


