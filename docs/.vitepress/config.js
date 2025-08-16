// docs/.vitepress/config.js
export default {
    title: "雪映专集", // 站点标题
    description: "这是我的第一个 VitePress 站点", // SEO 描述
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/guoyu.jpg'
            }
        ]
    ],//网页icon
    themeConfig: {
        logo: '/guoyu.jpg',
        nav: [
            { text: "首页", link: "/" },
        ],
        outline: {
            level: [2, 3],     // 显示 h2 到 h3
            label: '本页目录'
        },
        sidebar: [
            {
                text: "雪映專集介紹",
                collapsed: true,
                items: [
                    { text: "雪映專集介紹", link: "/intro/book-intro.md" },
                    { text: "十年学佛路", link: "/intro/十年学佛路" },
                    { text: "网站介绍", link: "/intro/web-intro.md" },
                ]
            },
            {
                text: "十住芳草",
                collapsed: true,
                items: [
                    { text: "00-自序", link: "/szfc/00-自序.md" },
                    { text: "01-觀心銘講記", link: "/szfc/01-觀心銘講記.md" },
                    { text: "02-禪修者的心象" },
                    { text: "03-靜坐調心方法論" },
                    { text: "04-火焰化紅蓮" },
                    { text: "05-論印光大師的淨土思想" },
                    { text: "06-對密教雙修法之評議" },
                ]
            },
            {
                text: "百步穿楊",
                collapsed: true,
                items: [
                    { text: "00-自序" },
                    { text: "01-閒情的逸趣─逸與勞" },
                    { text: "02-悠然的幸福" },
                    { text: "03-性別的超越─男與女" },
                    { text: "04-安穩的步履─鬆與緊" },
                    { text: "05-繽紛的世界─同與異" },
                    { text: "06-平衡的人格─卑與慢" },
                    { text: "07-溝通的藝術─語與默" },
                    { text: "08-行為的導向─慾與律" },
                    { text: "09-道德的規範─善與惡" },
                    { text: "10-命運的堂奧─心與境" },
                    { text: "11-風水的堪究─象與數" },
                    { text: "12-凌雲的雙翼─福與慧" },
                    { text: "13-業障的消除─罪與業" },
                    { text: "14-生命的意義─取與捨" },
                    { text: "15-夢幻的遊戲─生與死" },
                    { text: "16-回頭的道路─正與倒" },
                    { text: "17-進取的指標─道與俗" },
                    { text: "18-心靈的皈處─宗與教" },
                    { text: "19-理事的印證─信與疑" },
                    { text: "20-靈界的訊息─神與人" },
                    { text: "21-成就的因力─自與他" },
                    { text: "22-生命的倫常─縛與解" },
                    { text: "23-永恆的跫音─常與變" },
                    { text: "24-內外的圓融─心與物" },
                ]
            },
            {
                text: "千江水月",
                collapsed: true,
                items: [
                    { text: "00-自序", link: "/qjsy/00-自序.md" },
                    { text: "01-發心與學佛", link: "/qjsy/01-发心与学佛.md" },
                    { text: "02-學佛的旨趣" },
                    { text: "03-誠信與正修" },
                    { text: "04-佛教的人生觀" },
                    { text: "05-《成佛之道》「布施」偈頌講記" },
                    { text: "06-《成佛之道》「持戒」偈頌講記" },
                    { text: "07-《略辨大乘入道四行》講記" },
                    { text: "08-從印度禪、中國禪到現代禪" },
                    { text: "09-主與客" },
                    { text: "10-心之性相體用" },
                    { text: "11-橫行與豎出" },
                    { text: "12-修定與觀慧" },
                    { text: "13-知識與智慧" },
                    { text: "14-知心與寂寞" },
                    { text: "15-宗教上的唯美主義與精神分裂" }
                ]
            },
            {
                text: "萬里雲天",
                collapsed: true,
                items: [
                    { text: "01-開心自不在" },
                    { text: "02-歸依三寶之究竟義" },
                    { text: "03-經是佛親口說的嗎" },
                    { text: "04-《小品般若波羅蜜經》引言" },
                    { text: "05-中觀論序" },
                    { text: "06-大乘佛法概說" },
                    { text: "07-普賢十大願" },
                ]
            },
            {
                text: "法華經",
                collapsed: true,
                items: [
                    { text: "00-法華經開題(一)" },
                    { text: "00-法華經開題(二)" },
                    { text: "01-序品" },
                    { text: "02-方便品" },
                    { text: "03-譬喻品" },
                    { text: "04-信解品" },
                    { text: "05-藥草喻品" },
                    { text: "06-授記品" },
                    { text: "07-化城喻品" },
                    { text: "08-五百弟子受記品" },
                    { text: "09-授學無學人記品" },
                    { text: "10-法師品" },
                    { text: "11-常不輕菩薩品" },
                    { text: "12-見寶塔品" },
                    { text: "13-勸持品" },
                    { text: "14-安樂行品" },
                    { text: "15-從地湧出品" },
                    { text: "16-如來壽量品" },
                    { text: "17-分別功德品" },
                    { text: "18-藥王本事品" },
                    { text: "19-普賢勸發品" }
                ]
            },
            {
                text: "圓覺經心鑰",
                collapsed: true,
                items: [
                    { text: "00-圓覺經開題" },
                    { text: "01-圓覺經證信序" },
                    { text: "02-文殊師利菩薩章" },
                    { text: "03-普賢菩薩章" },
                    { text: "04-普眼菩薩章" },
                    { text: "05-金剛藏菩薩章" },
                    { text: "06-彌勒菩薩章" },
                    { text: "07-清淨慧菩薩章" },
                    { text: "08-威德自在菩薩章" },
                    { text: "09-辨音菩薩章" },
                    { text: "10-淨諸業障菩薩章" },
                    { text: "11-普覺菩薩章" },
                    { text: "12-圓覺菩薩章" },
                    { text: "13-賢善首菩薩章" },
                ]
            },
            {
                text: "如何三養：養老、養病、養死",
                collapsed: true,
                items: [
                    { text: "如何三養：養老、養病、養死" }
                ]
            },
            {
                text: "中觀續雕",
                collapsed: true,
                items: [
                    { text: "00-開場白" },
                    { text: "01-觀因緣品" },
                    { text: "02-觀因果品" },
                    { text: "03-觀六情品" },
                    { text: "04-觀五陰品" },
                    { text: "05-觀六種品" },
                    { text: "06-觀本住品" },
                    { text: "07-觀作作者品" },
                    { text: "08-觀染染者品" },
                    { text: "09-觀然可然品" },
                    { text: "11-觀業品" },
                    { text: "12-觀行品" },
                    { text: "13-觀合品" },
                    { text: "14-觀十二因緣品" },
                    { text: "15-觀本際品" },
                    { text: "16-觀時品" },
                    { text: "17-觀三相品" },
                    { text: "18-觀成壞品" },
                    { text: "19-觀去來品" },
                    { text: "20-觀有無品" },
                    { text: "21-觀四諦品" },
                    { text: "22-觀法品" },
                    { text: "23-觀邪見品" },
                    { text: "24-觀縛解品" },
                    { text: "25-觀顛倒品" },
                    { text: "26-觀如來品" },
                    { text: "27-觀涅槃品" }
                ]
            },
            {
                text: "金剛經 (上)(下)",
                collapsed: true,
                items: [
                    { text: "金剛經 (上)" },
                    { text: "金剛經 (下)" }
                ]
            },
            {
                text: "般若波羅蜜多心經",
                collapsed: true,
                items: [
                    { text: "般若波羅蜜多心經" }
                ]
            },
            {
                text: "腳跟著地",
                collapsed: true,
                items: [
                    { text: "數息的變化" },
                    { text: "逆障的超越" },
                    { text: "氣脈的通調" },
                    { text: "觀參的妙用" },
                    { text: "觀念的提昇" },
                    { text: "外延的準則" },
                    { text: "雙溪聖南寺禪修開示" },
                    { text: "師生答問拾珍" },
                    { text: "死與活" },
                    { text: "身與心" },
                    { text: "福與慧" },
                    { text: "禪與淨" }
                ]
            },
            {
                text: "力挽狂瀾",
                collapsed: true,
                items: [
                    { text: "禪修對現代的意義" },
                    { text: "溈山戀夢" },
                    { text: "世間與菩提" },
                    { text: "不以覺受論功夫" },
                    { text: "知與無知" },
                    { text: "八風吹不動" },
                    { text: "頓悟與漸修" },
                    { text: "南泉養貓" },
                    { text: "問世間情是何物之一" },
                    { text: "問世間情是何物之二" },
                    { text: "問世間情是何物之三" }
                ]
            },
            {
                text: "破繭而出",
                collapsed: true,
                items: [
                    { text: "開場白" },
                    { text: "發心學佛" },
                    { text: "信徒在那" },
                    { text: "出家形象" },
                    { text: "出家包袱" },
                    { text: "行持律儀" },
                    { text: "佛教律制" },
                    { text: "修定調心" },
                    { text: "通塞與覺受" },
                    { text: "智慧解脫" },
                    { text: "智慧的修證" },
                    { text: "菩薩道之一" },
                    { text: "菩薩道之二" },
                    { text: "我對菩薩道的省思" },
                    { text: "於末法時代應有的警覺" },
                    { text: "總結" }
                ]
            },
            {
                text: "漣珠甘露",
                collapsed: true,
                items: [
                    { text: "序言" },
                    { text: "專注與遍佈" },
                    { text: "從數息到內觀" },
                    { text: "從內觀到參禪" },
                    { text: "略述禪宗的印證心法" },
                    { text: "我是誰─無我的提昇與修證" },
                    { text: "從性情的調適看修行法門" },
                    { text: "從對位與流行，觀法界之莊嚴" },
                    { text: "從上求與下化，發菩薩之行願" },
                    { text: "淨土思想校正" },
                    { text: "念佛與十方淨土" },
                    { text: "彌陀淨土的層次" },
                    { text: "從菩薩道到成佛" }
                ]
            },
            {
                text: "楞嚴新粹",
                collapsed: true,
                items: [
                    { text: "引言" },
                    { text: "從「無始無明」到「本來清淨」" },
                    { text: "真心與妄識" },
                    { text: "八識表解" },
                    { text: "廿五圓通" },
                    { text: "耳根圓通與參禪法門" },
                    { text: "三無漏學與四清淨明誨" },
                    { text: "五十陰魔" }
                ]
            },
            {
                text: "禪悟密法",
                collapsed: true,
                items: [
                    { text: "引言" },
                    { text: "從滿頭霧水到大悟徹底" },
                    { text: "從參禪、入中脈、透頂到開悟" },
                    { text: "兩類話頭的參法" },
                    { text: "疑情與道心" },
                    { text: "正氣與第三鼻" },
                    { text: "中脈的層次" },
                    { text: "正經、奇經與中脈" },
                    { text: "參禪的時機" },
                    { text: "止觀與大手印" },
                    { text: "總結：中道與法身" },
                    { text: "歇後語" }
                ]
            },
            {
                text: "法雲灌頂",
                collapsed: true,
                items: [
                    { text: "誰是善知識" },
                    { text: "打開心中的結" },
                    { text: "用心與賣力" },
                    { text: "彈性空間" },
                    { text: "開悟與解脫" },
                    { text: "黃巢過後，還收得劍否？" },
                    { text: "確認死亡的正面意義？" },
                    { text: "評月溪法師的《大乘絕對論》" },
                    { text: "觀門入道" },
                    { text: "絕後復甦 (不要你)" },
                    { text: "無頭野鬼，安心自在" },
                    { text: "安心立命於資訊時代" }
                ]
            },
            {
                text: "天心明月",
                collapsed: true,
                items: [
                    { text: "自序" },
                    { text: "禪的藝術" },
                    { text: "幸福貼心" },
                    { text: "照顧腳下" },
                    { text: "真情無限" },
                    { text: "坦誠團體" },
                    { text: "新年談歲" },
                    { text: "休閒與品味" },
                    { text: "獨裁與奴才" },
                    { text: "安平與刺激" },
                    { text: "共識與自在" },
                    { text: "輕鬆與放逸" },
                    { text: "完美與殘缺" },
                    { text: "煩惱與菩提" },
                    { text: "茫忙與恬閒" },
                    { text: "格式與局限" },
                    { text: "了願與消業" },
                    { text: "佛法與企業" },
                    { text: "佛法與管理" },
                    { text: "愛心的真義" },
                    { text: "富貴長在、慧命永存" },
                    { text: "禪與人生" }
                ]
            },
            {
                text: "佛法原典",
                collapsed: true,
                items: [
                    { text: "序言之一" },
                    { text: "序言之二" },
                    { text: "五陰誦" },
                    { text: "六入處誦" },
                    { text: "雜因誦" },
                    { text: "道品誦" },
                    { text: "八眾誦" },
                    { text: "弟子所說誦" },
                    { text: "如來所說誦" }
                ]
            },
            {
                text: "《攝大乘論》評註",
                collapsed: true,
                items: [
                    { text: "第一章" },
                    { text: "第二章之一" },
                    { text: "第二章之二" },
                    { text: "第二章之三" },
                    { text: "第二章之四" },
                    { text: "第三章之一" },
                    { text: "第三章之二" },
                    { text: "第三章之三" }
                ]
            },
            {
                text: "《攝大乘論》研討",
                collapsed: true,
                items: [
                    { text: "2008年9月6日" },
                    { text: "2008年9月20日" },
                    { text: "2008年10月4日" },
                    { text: "2008年10月18日" },
                    { text: "2008年11月8日" },
                    { text: "2008年11月22日" },
                    { text: "2008年11月6日" },
                    { text: "2008年12月20日" },
                    { text: "2009年1月18日" },
                    { text: "2009年2月21日" },
                    { text: "2009年3月7日上" },
                    { text: "2009年3月7日下" },
                    { text: "2009年3月21日" },
                    { text: "2009年4月4日" },
                    { text: "2009年4月18日" },
                    { text: "2009年5月9日" },
                    { text: "2009年5月23日" },
                    { text: "2009年6月13日" }
                ]
            },
            {
                text: "天台小止觀講記",
                collapsed: true,
                items: [
                    { text: "天台小止觀講記" }
                ]
            },
            {
                text: "一葦過江",
                collapsed: true,
                items: [
                    { text: "一葦過江" }
                ]
            },
            {
                text: "散篇演講",
                collapsed: true,
                items: [
                    { text: "攝心與消心" },
                    { text: "如何將「修行」落實在生活當中" },
                    { text: "再談淨土法門" },
                    { text: "從中觀看唯識" },
                    { text: "行門的切要處" },
                    { text: "禪修與八正道" },
                    { text: "從禪的觀點看淨土" },
                    { text: "菩薩道之離合" },
                    { text: "禪修─從健康到覺悟之路" },
                    { text: "三心一觀" },
                    { text: "大乘的精義" },
                    { text: "智慧的修練" },
                    { text: "從中觀思想看如來藏" },
                    { text: "云何為「修行」" },
                    { text: "從思惟到不思惟" },
                    { text: "空觀、中觀和總相觀" },
                    { text: "從指月的比喻，看學佛的旨趣" },
                    { text: "無明風動的比喻" },
                    { text: "求「無所求」" },
                    { text: "禪在坐，不在坐？" },
                    { text: "參疑情與調氣脈" },
                    { text: "從情識的轉化，看寂靜涅槃" },
                    { text: "調氣脈對應禪定的層次" },
                    { text: "以內攝法超脫生死的苦厄" },
                    { text: "修觀與參話頭" },
                    { text: "如何快樂過生活" },
                    { text: "安樂死的進化論" },
                    { text: "諸乘之發心與類別" },
                    { text: "新冠病毒感言" }
                ]
            },
            {
                text: "2004禪五開示",
                collapsed: true,
                items: [
                    { text: "安全感" },
                    { text: "人際關係的離合" },
                    { text: "自我實現" }
                ]
            },
            {
                text: "2016禪五開示",
                collapsed: true,
                items: [
                    { text: "佈施度" },
                    { text: "持戒度" },
                    { text: "智慧度" },
                    { text: "禪定度" }
                ]
            },
            {
                text: "《三寶山靈嚴禪寺禪修開示》",
                collapsed: true,
                items: [
                    { text: "昏沉" },
                    { text: "從缺憾營求到感恩回饋" },
                    { text: "統一與獨立" },
                    { text: "置心無處" }
                ]
            },
            {
                text: "《勝鬘經》開示",
                collapsed: true,
                items: [
                    { text: "《開題、譯文注釋》" },
                    { text: "開示之一《序分、十受章》" },
                    { text: "開示之二《三願章、攝受章》" },
                    { text: "開示之三《一乘章(上)》" },
                    { text: "開示之四《一乘章(下)》" },
                    { text: "開示之五《無邊聖諦章、如來藏章、法身章、空義隱覆真實章、一諦章》" },
                    { text: "開示之六《一依章、顛倒真實章、自性清淨章、如來真子章、勝鬘章》" },
                ]
            },
            {
                text: "《中阿含》",
                collapsed: true,
                items: [
                    { text: "《中阿含》(一) " },
                    { text: "《中阿含》(二) " },
                    { text: "《中阿含》(三) " },
                    { text: "《中阿含》(四) " },
                    { text: "《中阿含》(五) " },
                    { text: "《中阿含》(六) " },
                    { text: "《中阿含》(七) " },
                    { text: "《中阿含》(八) " }
                ]
            },
            {
                text: "《寶積經》",
                collapsed: true,
                items: [
                    { text: "《寶積經》" }
                ]
            },
            {
                text: "《善生經》",
                collapsed: true,
                items: [
                    { text: "《善生經》" }
                ]
            }
        ],
    },
}
