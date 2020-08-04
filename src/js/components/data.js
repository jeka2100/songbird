const data = [
  [
    {
      name: 'Восточный тундровый гусь',
      latin: 'Anser serrirostris',
      description: 'Крупный гусь. Длина тела достигает до 90 см, размах крыльев до 1,5 – 1,7 метра. Вес взрослых самцов осенью достигает 3,5 – 5 кг. Преимущественно обитает в южной половине России.',
      image: './birds/russia/Anser-serrirostris.jpg',
      audio: './audio/russia/Anser-serrirostris.mp3',
    }, {
      name: 'Удод',
      latin: 'Upupa epops',
      description: 'Небольшая ярко окрашенная птица с длинным узким клювом и хохолком, иногда раскрываемым в виде веера.',
      image: './birds/russia/Upupa-epops.jpg',
      audio: './audio/russia/Upupa-epops.mp3',
    }, {
      name: 'Лебедь-кликун',
      latin: 'Cygnus cygnus',
      description: 'Крупная птица, весящая от 7 до 10 кг, иногда больше. Тело вытянутое, длина шеи примерно равна длине туловища.',
      image: './birds/russia/Cygnus-cygnus.jpg',
      audio: './audio/russia/Cygnus-cygnus.mp3',
    }, {
      name: 'Огарь',
      latin: 'Tadorna ferruginea',
      description: 'Водоплавающая птица семейства утиных, родственная пеганке. Птица имеет оранжево-коричневое оперение с более светлой головой.',
      image: './birds/russia/Tadorna-ferruginea.jpg',
      audio: './audio/russia/Tadorna-ferruginea.mp3',
    }, {
      name: 'Мандаринка',
      latin: 'Aix galericulata',
      description: 'Небольшая птица рода лесных уток семейства утиных.',
      image: './birds/russia/Aix-galericulata.jpg',
      audio: './audio/russia/Aix-galericulata.mp3',
    }, {
      name: 'Красноносый нырок',
      latin: 'Netta rufina',
      description: 'Птица из семейства утиных. Это довольно своеобразная утка, по биологическим особенностям являющаяся переходной формой между речными утками и нырками.',
      image: './birds/russia/Netta-rufina.jpg',
      audio: './audio/russia/Netta-rufina.mp3',
    },
  ], [
    {
      name: 'Чёрная казарка',
      latin: 'Branta bernicla nigricans',
      description: 'Водоплавающая птица семейства утиных. Чёрная казарка — самый мелкий представитель рода казарок.',
      image: './birds/usa/Branta-bernicla-nigricans.jpg',
      audio: './audio/usa/Branta-bernicla-nigricans.mp3',
    }, {
      name: 'Белошей',
      latin: 'Anser canagicus',
      description: 'Птица из семейства утиных. Гусь-белошей — птица средней величины с короткой толстой шеей. Масса взрослой птицы около 2,5 кг. ',
      image: './birds/usa/Anser-canagicus.jpg',
      audio: './audio/usa/Anser-canagicus.mp3',
    }, {
      name: 'Лебедь-трубач',
      latin: 'Cygnus buccinator',
      description: '',
      image: './birds/usa/Cygnus-buccinator.jpg',
      audio: './audio/usa/Cygnus-buccinator.mp3',
    }, {
      name: 'Синекрылый чирок',
      latin: 'Spatula discors',
      description: 'Синекрылый чирок — вид птиц из семейства утиных. Длина синекрылого чирка — 40 см, размах крыльев — около 57 см, вес — около 400 г.',
      image: './birds/usa/Spatula-discors.jpg',
      audio: './audio/usa/Spatula-discors.mp3',
    }, {
      name: 'Широконоска',
      latin: 'Spatula clypeata',
      description: 'Вид широко распространённых водоплавающих птиц из семейства утиных с очень длинным и широким клювом.',
      image: './birds/usa/Spatula-clypeata.jpg',
      audio: './audio/usa/Spatula-clypeata.mp3',
    }, {
      name: 'Американская свиязь',
      latin: 'Mareca americana',
      description: 'Речная утка семейства утиных рода Anas. Это широко распространенная утка, которая гнездится везде, за исключением крайнего севера Канады и Аляски',
      image: './birds/usa/Mareca-americana.jpg',
      audio: './audio/usa/Mareca-americana.mp3',
    },
  ], [
    {
      name: 'Рачья ржанка',
      latin: 'Dromas ardeola',
      description: 'Вид птиц из монотипического семейства рачьих ржанок отряда ржанкообразных.',
      image: './birds/africa/Dromas-ardeola.jpg',
      audio: './audio/africa/Dromas-ardeola.mp3',
    }, {
      name: 'Пустынный ворон',
      latin: 'Corvus ruficollis',
      description: 'Размеры мельче, чем у обыкновенного ворона: длина тела 52-56 см, длина крыла самцов в среднем 411, самок 310 мм. Средний вес 580 г.',
      image: './birds/africa/Corvus-ruficollis.jpg',
      audio: './audio/africa/Corvus-ruficollis.mp3',
    }, {
      name: 'Маньярский ткач',
      latin: 'Ploceus manyar',
      description: 'Одна из любимых птиц для сажания в клетку, поэтому при виде человека эта птица быстро "испаряется".',
      image: './birds/africa/Ploceus-manyar.jpg',
      audio: './audio/africa/Ploceus-manyar.mp3',
    }, {
      name: 'Нильский гусь',
      latin: 'Alopochen aegyptiaca',
      description: 'Нильский гусь или египетский гусь — вид водоплавающих птиц семейства утиных.',
      image: './birds/africa/Alopochen-aegyptiaca.jpg',
      audio: './audio/africa/Alopochen-aegyptiaca.mp3',
    }, {
      name: 'Африканский блестящий чирок',
      latin: 'Nettapus auritus',
      description: 'Африканский блестящий чирок обитает в Африке к югу от Сахары и на Мадагаскаре, населяет пресные водоемы, крупные озера, реже прибрежные лагуны и эстуарии.',
      image: './birds/africa/Nettapus-auritus.jpg',
      audio: './audio/africa/Nettapus-auritus.mp3',
    }, {
      name: 'Малый фламинго',
      latin: 'Phoeniconaias minor',
      description: 'Самый маленький представитель семейства имеет ярко-розовое оперение.',
      image: './birds/africa/Phoeniconaias-minor.jpg',
      audio: './audio/africa/Phoeniconaias-minor.mp3',
    },
  ], [
    {
      name: 'Королевский пингвин',
      latin: 'Aptenodytes patagonicus',
      description: 'Королевский пингвин похож на императорского пингвина, но немного мельче его размерами и ярче окраской.',
      image: './birds/antarctica/Aptenodytes-patagonicus.jpg',
      audio: './audio/antarctica/Aptenodytes-patagonicus.mp3',
    }, {
      name: 'Императорский пингвин',
      latin: 'Aptenodytes forsteri',
      description: 'Самый крупный и тяжёлый из современных видов семейства пингвиновых. Его средний рост составляет около 122 см, а вес колеблется между 22 и 45 кг.',
      image: './birds/antarctica/Aptenodytes-forsteri.jpg',
      audio: './audio/antarctica/Aptenodytes-forsteri.mp3',
    }, {
      name: 'Папуанский пингвин',
      latin: 'Pygoscelis papua',
      description: 'Вид из рода антарктических пингвинов семейства пингвиновых, родственный пингвинам Адели и антарктическим пингвинам.',
      image: './birds/antarctica/Pygoscelis-papua.jpg',
      audio: './audio/antarctica/Pygoscelis-papua.mp3',
    }, {
      name: 'Пингвин Адели',
      latin: 'Pygoscelis adeliae',
      description: 'Один из самых распространённых видов пингвинов.',
      image: './birds/antarctica/Pygoscelis-adeliae.jpg',
      audio: './audio/antarctica/Pygoscelis-adeliae.mp3',
    }, {
      name: 'Антарктический пингвин',
      latin: 'Pygoscelis antarcticus',
      description: 'Вид из рода антарктических пингвинов семейства пингвиновых, родственный пингвинам Адели и субантарктическим пингвинам.',
      image: './birds/antarctica/Pygoscelis-antarcticus.jpg',
      audio: './audio/antarctica/Pygoscelis-antarcticus.mp3',
    }, {
      name: 'Антарктическая крачка',
      latin: 'Sterna vittata',
      description: 'Вид птиц из семейства чайковых.',
      image: './birds/antarctica/Sterna-vittata.jpg',
      audio: './audio/antarctica/Sterna-vittata.mp3',
    },
  ], [
    {
      name: 'Тибетский улар',
      latin: 'Tetraogallus tibetanus henrici',
      description: 'Птица из семейства фазановых. Голова, шея и участок спины у шеи темно-серые с охристым налётом. Спина покрыта густым чёрным крапом. ',
      image: './birds/china/Tetraogallus-tibetanus-henrici.jpg',
      audio: './audio/china/Tetraogallus-tibetanus-henrici.mp3',
    }, {
      name: 'Немой перепел',
      latin: 'Coturnix japonica',
      description: 'Немой перепел — птица подсемейства куропатковых отряда курообразных.',
      image: './birds/china/Coturnix-japonica.jpg',
      audio: './audio/china/Coturnix-japonica.mp3',
    }, {
      name: 'Кеклик Пржевальского',
      latin: 'Alectoris magna',
      description: 'Кеклики, или каменные куропатки, или горные курочки — род птиц подсемейства куропатковых семейства фазановых.',
      image: './birds/china/Alectoris-magna.jpg',
      audio: './audio/china/Alectoris-magna.mp3',
    }, {
      name: 'Итагин',
      latin: 'Ithaginis cruentus',
      description: 'Итагин - вид птиц семейства фазановых, единственный вид рода Ithaginis. Распространён исключительно в Восточной Азии.',
      image: './birds/china/Ithaginis-cruentus.jpg',
      audio: './audio/china/Ithaginis-cruentus.mp3',
    }, {
      name: 'Китайский монал',
      latin: 'Lophophorus lhuysii',
      description: 'Редкая птица семейства фазановых. Видовой эпитет дан в честь французского министра иностранных дел Эдуарда Дрюэн-де-Люи.',
      image: './birds/china/Lophophorus-lhuysii.jpg',
      audio: './audio/china/Lophophorus-lhuysii.mp3',
    }, {
      name: 'Алмазный фазан',
      latin: 'Chrysolophus amherstiae',
      description: 'Птица рода воротничковые фазаны. Родина этой птицы со сказочным разноцветным оперением находится в Восточной Азии.',
      image: './birds/china/Chrysolophus-amherstiae.jpg',
      audio: './audio/china/Chrysolophus-amherstiae.mp3',
    },
  ], [
    {
      name: 'Татаупа',
      latin: 'Crypturellus tataupa',
      description: 'Птица семейства тинаму, обитающая в Южной Америке.',
      image: './birds/south-america/Crypturellus-tataupa.jpg',
      audio: './audio/south-america/Crypturellus-tataupa.mp3',
    }, {
      name: 'Коскороба',
      latin: 'Coscoroba coscoroba',
      description: 'Коскороба - водоплавающая птица семейства утиных. Единственный вид рода Coscoroba.',
      image: './birds/south-america/Coscoroba-coscoroba.jpg',
      audio: './audio/south-america/Coscoroba-coscoroba.mp3',
    }, {
      name: 'Чачалака',
      latin: 'Ortalis canicollis',
      description: 'Крупная птица из Нового Света, размеры взрослой особи 46 см.',
      image: './birds/south-america/Ortalis-canicollis.jpg',
      audio: './audio/south-america/Ortalis-canicollis.mp3',
    }, {
      name: 'Кваква',
      latin: 'Nycticorax nycticorax',
      description: 'Птица семейства цаплевых. Кваква имеет короткую по сравнению с другими цаплями шею и короткий, но крепкий и мощный клюв.',
      image: './birds/south-america/Nycticorax-nycticorax.jpg',
      audio: './audio/south-america/Nycticorax-nycticorax.mp3',
    }, {
      name: 'Агуйа',
      latin: 'Geranoaetus melanoleucus',
      description: 'Агуйа - птица семейства ястребиных. Единственный вид рода Geranoaetus.',
      image: './birds/south-america/Geranoaetus-melanoleucus.jpg',
      audio: './audio/south-america/Geranoaetus-melanoleucus.mp3',
    }, {
      name: 'Пепельногорлый погоныш',
      latin: 'Porzana albicollis',
      description: 'Род небольших птиц из семейства пастушковых, с коротким конусообразным клювом и длинными пальцами на ногах.',
      image: './birds/south-america/Porzana-albicollis.jpg',
      audio: './audio/south-america/Porzana-albicollis.png',
    },
  ],
];

export default data;
