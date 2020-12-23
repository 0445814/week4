const blogList = [
  {
    id: '1',
    title: '情人特別企劃',
    label: '2020 Valentine’s Special',
    createdAt: '2020/02/14',
    content:
      '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ 即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯',
    imgUrl:
      'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-1.png',
  },
  {
    id: '2',
    title: '街頭潮人訪問',
    label: 'Street Interview',
    createdAt: '2020/02/02',
    content:
      '炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯',
    imgUrl:
      'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-2.png',
  },
  {
    id: '3',
    title: '春季新品上市',
    label: 'New Selection',
    createdAt: '2020/02/02',
    content:
      '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯',
    imgUrl:
      'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-3.png',
  },
  {
    id: '4',
    title: '設計師獨享鏡框優惠',
    label: 'Sales for Designer',
    createdAt: '2020/01/18',
    content:
      '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯',
    imgUrl:
      'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-4.png',
  },
  {
    id: '5',
    title: '抵抗夏日大作戰',
    label: 'Summer Special',
    createdAt: '2019/08/07',
    content:
      '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯',
    imgUrl:
      'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-5.png',
  },
]

const blogItemList = [
  {
    id: '6',
    title: '',
    label: '',
    createdAt: '',
    content:
      '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品， 結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！',
    imgUrl:
      'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-6.png',
  },
  {
    id: '7',
    title: '',
    label: '',
    createdAt: '',
    content:
      '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品， 結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！',
    imgUrl:
      'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-7.png',
  },
  {
    id: '8',
    title: '',
    label: '',
    createdAt: '',
    content:
      '2/14(五)-2/20(日) 至本店單筆消費滿2980元, 就送情人節限定眼鏡盒1個 <br/> 期間優惠還有~~持他牌鏡框更換鏡片 <br/> 薄型非球面鏡片折300元 <br/> 濾藍光鏡片折500元 <br/> 快快帶上另一半 <br/> 讓彼此每一次睜開眼，都被愛的視線包圍!',
    imgUrl:
      'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/blog-8.png',
  },
]

export function getBlogList(id) {
  if (id) {
    return blogList.find((item) => item.id === id)
  }
  return blogList
}

export function getBlogItemList() {
  return blogItemList
}
