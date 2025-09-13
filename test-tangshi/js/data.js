// 唐诗数据
const poems = [
  {
    id: 1,
    title: "江南",
    titlePinyin: "Jiāng nán",
    dynasty: "汉代",
    dynastyPinyin: "Hàn dài",
    author: "佚名",
    authorPinyin: "Yì míng",
    content: [
      "江南可采莲，莲叶何田田。鱼戏莲叶间。",
      "鱼戏莲叶东，鱼戏莲叶西。","鱼戏莲叶南，鱼戏莲叶北。"
    ],
    coupletPinyin: [
      "Jiāng nán kě cǎi lián, lián yè hé tián tián. Yú xì lián yè jiān.",
      "Yú xì lián yè dōng, yú xì lián yè xī. ","Yú xì lián yè nán, yú xì lián yè běi."
    ],
    fullPinyin: "Jiāng nán - Hàn dài · Yì míng\nJiāng nán kě cǎi lián, lián yè hé tián tián. Yú xì lián yè jiān.\nYú xì lián yè dōng, yú xì lián yè xī. Yú xì lián yè nán, yú xì lián yè běi."
  },
  {
    id: 2,
    title: "风",
    titlePinyin: "Fēng",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李峤",
    authorPinyin: "Lǐ qiáo",
    content: [
      "解落三秋叶，能开二月花。","过江千尺浪，入竹万竿斜。"
    ],
    coupletPinyin: [
      "Jiě luò sān qiū yè, néng kāi èr yuè huā. ","Guò jiāng qiān chǐ làng, rù zhú wàn gān xié."
    ],
    fullPinyin: "Fēng - Táng dài · Lǐ qiáo\nJiě luò sān qiū yè, néng kāi èr yuè huā. Guò jiāng qiān chǐ làng, rù zhú wàn gān xié."
  },
  {
    id: 3,
    title: "古朗月行",
    titlePinyin: "Gǔ lǎng yuè xíng",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李白",
    authorPinyin: "Lǐ bái",
    content: [
      "小时不识月，呼作白玉盘。","又疑瑶台镜，飞在青云端。"
    ],
    coupletPinyin: [
      "Xiǎo shí bù shí yuè, hū zuò bái yù pán. ","Yòu yí yáo tái jìng, fēi zài qīng yún duān."
    ],
    fullPinyin: "Gǔ lǎng yuè xíng - Táng dài · Lǐ bái\nXiǎo shí bù shí yuè, hū zuò bái yù pán. Yòu yí yáo tái jìng, fēi zài qīng yún duān."
  },
  {
    id: 4,
    title: "悯农（一）",
    titlePinyin: "Mǐn nóng (yī)",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李绅",
    authorPinyin: "Lǐ shēn",
    content: [
      "锄禾日当午，汗滴禾下土。","谁知盘中餐，粒粒皆辛苦。"
    ],
    coupletPinyin: [
      "Chú hé rì dāng wǔ, hàn dī hé xià tǔ. ","Shéi zhī pán zhōng cān, lì lì jiē xīn kǔ."
    ],
    fullPinyin: "Mǐn nóng (yī) - Táng dài · Lǐ shēn\nChú hé rì dāng wǔ, hàn dī hé xià tǔ. Shéi zhī pán zhōng cān, lì lì jiē xīn kǔ."
  },
  {
    id: 5,
    title: "咏鹅",
    titlePinyin: "Yǒng é",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "骆宾王",
    authorPinyin: "Luò bīn wáng",
    content: [
      "鹅，鹅，鹅，曲项向天歌。","白毛浮绿水，红掌拨清波。"
    ],
    coupletPinyin: [
      "É, é, é, qū xiàng xiàng tiān gē. ","Bái máo fú lǜ shuǐ, hóng zhǎng bō qīng bō."
    ],
    fullPinyin: "Yǒng é - Táng dài · Luò bīn wáng\nÉ, é, é, qū xiàng xiàng tiān gē. Bái máo fú lǜ shuǐ, hóng zhǎng bō qīng bō."
  },
  {
    id: 6,
    title: "小池",
    titlePinyin: "Xiǎo chí",
    dynasty: "宋代",
    dynastyPinyin: "Sòng dài",
    author: "杨万里",
    authorPinyin: "Yáng wàn lǐ",
    content: [
      "泉眼无声惜细流，树阴照水爱晴柔。","小荷才露尖尖角，早有蜻蜓立上头。"
    ],
    coupletPinyin: [
      "Quán yǎn wú shēng xī xì liú, shù yīn zhào shuǐ ài qíng róu. ","Xiǎo hé cái lù jiān jiān jiǎo, zǎo yǒu qīng tíng lì shàng tóu."
    ],
    fullPinyin: "Xiǎo chí - Sòng dài · Yáng wàn lǐ\nQuán yǎn wú shēng xī xì liú, shù yīn zhào shuǐ ài qíng róu. Xiǎo hé cái lù jiān jiān jiǎo, zǎo yǒu qīng tíng lì shàng tóu."
  },
  {
    id: 7,
    title: "池上",
    titlePinyin: "Chí shàng",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "白居易",
    authorPinyin: "Bái jū yì",
    content: [
      "小娃撑小艇，偷采白莲回。","不解藏踪迹，浮萍一道开。"
    ],
    coupletPinyin: [
      "Xiǎo wá chēng xiǎo tǐng, tōu cǎi bái lián huí. ","Bù jiě cáng zōng jì, fú píng yī dào kāi."
    ],
    fullPinyin: "Chí shàng - Táng dài · Bái jū yì\nXiǎo wá chēng xiǎo tǐng, tōu cǎi bái lián huí. Bù jiě cáng zōng jì, fú píng yī dào kāi."
  },
  {
    id: 8,
    title: "寻隐者不遇",
    titlePinyin: "Xún yǐn zhě bù yù",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "贾岛",
    authorPinyin: "Jiǎ dǎo",
    content: [
      "松下问童子，言师采药去。","只在此山中，云深不知处。"
    ],
    coupletPinyin: [
      "Sōng xià wèn tóng zǐ, yán shī cǎi yào qù. ","Zhǐ zài cǐ shān zhōng, yún shēn bù zhī chù."
    ],
    fullPinyin: "Xún yǐn zhě bù yù - Táng dài · Jiǎ dǎo\nSōng xià wèn tóng zǐ, yán shī cǎi yào qù. Zhǐ zài cǐ shān zhōng, yún shēn bù zhī chù."
  },
  {
    id: 9,
    title: "静夜思",
    titlePinyin: "Jìng yè sī",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李白",
    authorPinyin: "Lǐ bái",
    content: [
      "床前明月光，疑是地上霜。","举头望明月，低头思故乡。"
    ],
    coupletPinyin: [
      "Chuáng qián míng yuè guāng, yí shì dì shàng shuāng. ","Jǔ tóu wàng míng yuè, dī tóu sī gù xiāng."
    ],
    fullPinyin: "Jìng yè sī - Táng dài · Lǐ bái\nChuáng qián míng yuè guāng, yí shì dì shàng shuāng. Jǔ tóu wàng míng yuè, dī tóu sī gù xiāng."
  },
  {
    id: 10,
    title: "赠汪伦",
    titlePinyin: "Zèng wāng lún",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李白",
    authorPinyin: "Lǐ bái",
    content: [
      "李白乘舟将欲行，忽闻岸上踏歌声。","桃花潭水深千尺，不及汪伦送我情。"
    ],
    coupletPinyin: [
      "Lǐ bái chéng zhōu jiāng yù xíng, hū wén àn shàng tà gē shēng. ","Táo huā tán shuǐ shēn qiān chǐ, bù jí wāng lún sòng wǒ qíng."
    ],
    fullPinyin: "Zèng wāng lún - Táng dài · Lǐ bái\nLǐ bái chéng zhōu jiāng yù xíng, hū wén àn shàng tà gē shēng. Táo huā tán shuǐ shēn qiān chǐ, bù jí wāng lún sòng wǒ qíng."
  },
  {
    id: 11,
    title: "春晓",
    titlePinyin: "Chūn xiǎo",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "孟浩然",
    authorPinyin: "Mèng hào rán",
    content: [
      "春眠不觉晓，处处闻啼鸟。","夜来风雨声，花落知多少。"
    ],
    coupletPinyin: [
      "Chūn mián bù jué xiǎo, chù chù wén tí niǎo. ","Yè lái fēng yǔ shēng, huā luò zhī duō shǎo."
    ],
    fullPinyin: "Chūn xiǎo - Táng dài · Mèng hào rán\nChūn mián bù jué xiǎo, chù chù wén tí niǎo. Yè lái fēng yǔ shēng, huā luò zhī duō shǎo."
  },
  {
    id: 12,
    title: "登鹳雀楼",
    titlePinyin: "Dēng guàn què lóu",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "王之涣",
    authorPinyin: "Wáng zhī huàn",
    content: [
      "白日依山尽，黄河入海流。","欲穷千里目，更上一层楼。"
    ],
    coupletPinyin: [
      "Bái rì yī shān jìn, huáng hé rù hǎi liú. ","Yù qióng qiān lǐ mù, gèng shàng yī céng lóu."
    ],
    fullPinyin: "Dēng guàn què lóu - Táng dài · Wáng zhī huàn\nBái rì yī shān jìn, huáng hé rù hǎi liú. Yù qióng qiān lǐ mù, gèng shàng yī céng lóu."
  },
  {
    id: 13,
    title: "望庐山瀑布",
    titlePinyin: "Wàng lú shān pù bù",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李白",
    authorPinyin: "Lǐ bái",
    content: [
      "日照香炉生紫烟，遥看瀑布挂前川。","飞流直下三千尺，疑是银河落九天。"
    ],
    coupletPinyin: [
      "Rì zhào xiāng lú shēng zǐ yān, yáo kàn pù bù guà qián chuān. ","Fēi liú zhí xià sān qiān chǐ, yí shì yín hé luò jiǔ tiān."
    ],
    fullPinyin: "Wàng lú shān pù bù - Táng dài · Lǐ bái\nRì zhào xiāng lú shēng zǐ yān, yáo kàn pù bù guà qián chuān. Fēi liú zhí xià sān qiān chǐ, yí shì yín hé luò jiǔ tiān."
  },
  {
    id: 14,
    title: "山行",
    titlePinyin: "Shān xíng",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "杜牧",
    authorPinyin: "Dù mù",
    content: [
      "远上寒山石径斜，白云深处有人家。","停车坐爱枫林晚，霜叶红于二月花。"
    ],
    coupletPinyin: [
      "Yuǎn shàng hán shān shí jìng xié, bái yún shēn chù yǒu rén jiā. ","Tíng chē zuò ài fēng lín wǎn, shuāng yè hóng yú èr yuè huā."
    ],
    fullPinyin: "Shān xíng - Táng dài · Dù mù\nYuǎn shàng hán shān shí jìng xié, bái yún shēn chù yǒu rén jiā. Tíng chē zuò ài fēng lín wǎn, shuāng yè hóng yú èr yuè huā."
  },
  {
    id: 15,
    title: "早发白帝城",
    titlePinyin: "Zǎo fā bái dì chéng",
    dynasty: "唐代",
    dynastyPinyin: "Táng dài",
    author: "李白",
    authorPinyin: "Lǐ bái",
    content: [
      "朝辞白帝彩云间，千里江陵一日还。","两岸猿声啼不住，轻舟已过万重山。"
    ],
    coupletPinyin: [
      "Zhāo cí bái dì cǎi yún jiān, qiān lǐ jiāng líng yī rì hái. ","Liǎng àn yuán shēng tí bú zhù, qīng zhōu yǐ guò wàn chóng shān."
    ],
    fullPinyin: "Zǎo fā bái dì chéng - Táng dài · Lǐ bái\nZhāo cí bái dì cǎi yún jiān, qiān lǐ jiāng líng yī rì hái. Liǎng àn yuán shēng tí bú zhù, qīng zhōu yǐ guò wàn chóng shān."
  }
];

export default poems;