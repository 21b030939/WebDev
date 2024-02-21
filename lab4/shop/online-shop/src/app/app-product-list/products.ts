export interface Item {
  id: number,
  name: string,
  description: string,
  cost: number,
  rating: number,
  images: string[],
  imagesNumber: number,
  url: string
}


export const itemsList: Item[] = [
  {
    id: 1,
    name: "Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный",
    cost: 87411,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h1c/hac/64381277929502.jpg?format=gallery-medium",
              "https://resources.cdn-kaspi.kz/img/m/p/hf3/hf9/64381281107998.jpg?format=gallery-medium",
              "https://resources.cdn-kaspi.kz/img/m/p/h23/h21/64381285859358.jpg?format=gallery-medium"
    ], //{number of the image}.jpg
    description: "Технология NFC\n Цвет: черный \nТип экрана: PLS TFT LCD сенсорный, мультитач \nДиагональ: 6.6 дюйм \nРазмер оперативной памяти: 4 ГБ \nПроцессор: 8-ядерный Exynos 850 \nОбъем встроенной памяти: 128 ГБ Емкость аккумулятора: 5000 мАч",
    rating: 5,
    url:"https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item"
  },
  {
    id: 2,
    name: "Шкаф 88130, 130x45x175, серый",
    cost: 13374,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/img/m/p/hc0/hcf/64902580240414.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hc0/hcf/64902580240414.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h8e/h93/64902582861854.jpg?format=gallery-medium"
  ], //{number of the image}.jpg
    description: "    Тип установки: напольный Материал: металл, ,пластик, ,ткань Ширина, см: 130 Глубина, см: 45 Высота, см: 175 Цвет: серый Страна: Китай",
    rating: 4,
    url:"https://kaspi.kz/shop/p/88130-130x45x175-seryi-106609074/?c=750000000&tab=reviews#!/item"
  },
  {
    id: 3,
    name: "Кулер для воды A.E.L. V11s-TC UV черный",
    cost: 949915,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he7/hce/68808587083806/a-e-l-v11s-tc-uv-chernyi-108819584-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfe/h38/68808589017118/a-e-l-v11s-tc-uv-chernyi-108819584-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha1/h02/68808591704094/a-e-l-v11s-tc-uv-chernyi-108819584-3.jpg"
  ], //{number of the image}.jpg
    description: "Тип: пурифайер Установка: настольный Тип охлаждения: компрессорное Установка бутылки: отсутствует Подключение к водопроводу: Да Цвет: черный",
    rating: 5,
    url:"https://kaspi.kz/shop/p/a-e-l-v11s-tc-uv-chernyi-108819584/?c=750000000#!/item"
  },


  {
    id: 4,
    name: "Фитнес-браслет Sigma 24210 бирюзовый",
    cost: 109900,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/h1f/62157533970462/sigma-24210-biruzovyj-105170150-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hbf/62157534396446/sigma-24210-biruzovyj-105170150-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h74/h53/62157534855198/sigma-24210-biruzovyj-105170150-3.jpg"
  ], //{number of the image}.jpg
    description: "    Поддержка платформ: Android, ,iOS Материал корпуса: нерж. сталь Цвет корпуса: черный Интерфейсы: USB",
    rating: 0,
    url:"https://kaspi.kz/shop/p/sigma-24210-birjuzovyi-105170150/?c=750000000#!/item"
  },

  {
    id: 5,
    name: "Микрофон Shure SM7B черный",
    cost: 302200,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h1b/h0b/63804242034718.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hf8/h67/63804245311518.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h17/hed/63804248784926.jpg?format=gallery-medium"
  ], //{number of the image}.jpg
    description: "Тип: динамический Конструкция: подвесной Назначение: для студии Тип подключения: проводной Радиосистема: Нет Разъемы: XLR Цвет: черный",
    rating: 5,
    url:"https://kaspi.kz/shop/p/shure-sm7b-chernyi-22400184/?c=750000000#!/item"
  },

  {
    id: 6,
    name: "Графический планшет HUION H610X",
    cost: 81988,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h35/47761692327966/huion-h610x-103173114-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/he8/47761692786718/huion-h610x-103173114-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h55/h1a/47761693245470/huion-h610x-103173114-3.jpg"
  ], //{number of the image}.jpg
    description: "Тип: графический планшет Рабочая область: 254х159 мм Чувствительность к нажатию: 8192 Разрешение ввода: 5080 lpi",
    rating: 5,
    url:"https://kaspi.kz/shop/p/huion-h610x-103173114/?c=750000000#!/item"
  },
  {
    id: 7,
    name: "Телескоп LEVENHUK Skyline BASE 60T 60x700",
    cost: 108573,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/img/m/p/hae/h77/63806006657054.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h07/h6f/63806010064926.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/ha9/h80/63806013997086.jpg?format=gallery-medium"
  ], //{number of the image}.jpg
    description: "Тип: рефрактор Диаметр объектива: 60 мм Фокусное расстояние объектива: 700 мм Установка: напольная/настольная",
    rating: 3,
    url:"https://kaspi.kz/shop/p/levenhuk-skyline-base-60t-60x700-100416078/?c=750000000#!/item"
  },
  {
    id: 8,
    name: "Head&Shoulders Ментол шампунь 200 мл",
    cost: 1330,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/img/m/p/h7f/h86/85144525602846.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h7a/h54/85144525668382.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hc8/he7/85144525733918.jpg?format=gallery-medium"
  ], //{number of the image}.jpg
    description: "Действие: против перхоти, ,очищение Особенности: с кондиционером, ,для чувствительной кожи головы, ,для ежедневного применения Назначение: для женщин Тип волос: для всех типов, ,окрашенные Страна производства: Россия",
    rating: 5,
    url:"https://kaspi.kz/shop/p/head-shoulders-mentol-shampun-200-ml-100189770/?c=750000000#!/item"
  },
  {
    id: 9,
    name: "Набор кистей закругленные белые BOMEIJIA CK-157 12 кистей",
    cost: 1925,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h48/49163335434270/bomeijia-ck-157-12-kistei-103980845-1.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h59/h98/49163335893022/bomeijia-ck-157-12-kistei-103980845-2.jpg",
            "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7c/heb/49163336351774/bomeijia-ck-157-12-kistei-103980845-3.jpg"
  ], //{number of the image}.jpg
    description: "Тип: набор кистей Материал: нейлон, ,синтетика Форма пучка: плоская Материал ручки: дерево Номер кисти: 1, ,2, ,3, ,4, ,5, ,6, ,7, ,8, ,9, ,10, ,11, ,12",
    rating: 5,
    url:"https://kaspi.kz/shop/p/kistei-zakruglennye-belye-bomeijia-ck-157-12-kistei-103980845/?c=750000000#!/item"
  },
  {
    id: 10,
    name: "Тостер CENTEK СТ-1432 черный",
    cost: 11116,
    imagesNumber: 1,
    images: ["https://resources.cdn-kaspi.kz/img/m/p/hde/h91/63904868630558.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h76/h58/63904870662174.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h50/h3c/63904872955934.jpg?format=gallery-medium"
  ], //{number of the image}.jpg
    description: "Тип управления: механическое Количество тостов: 2 Поддон для крошек: Да Материал корпуса: пластик Цвет: черный",
    rating: 5,
    url:"https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item"
  }

]
