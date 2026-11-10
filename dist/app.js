const chineseTitleMap = new Proxy({
  "Fire Emblem Engage": "火焰之纹章 结合",
  "Fire Emblem Engage (ファイアーエムブレム エンゲージ)": "火焰之纹章 结合",
  "Fire Emblem Engage（ファイアーエムブレム エンゲージ）": "火焰之纹章 结合",
  "ファイアーエムブレム エンゲージ": "火焰之纹章 结合",
  "Stray": "迷失",
  "Figment": "虚构世界",
  "Figment 2": "虚构世界2",
  "Figment 2: Creed Valley": "虚构世界2：信念之谷",
  "Figment 1 + Figment 2": "虚构世界1 + 虚构世界2",
  "Hades II": "哈迪斯 II",
  "Hades II Nintendo Switch 2 Edition": "哈迪斯 II Nintendo Switch 2 版",
  "Fire Emblem: Fortune's Weave": "火焰纹章 万紫千紅",
  "ファイアーエムブレム 万紫千紅": "火焰纹章 万紫千紅",
  "Balatro": "小丑牌",
  "BIOHAZARD": "生化危机",
  "BIOHAZARD RE:4": "生化危机4 重制版",
  "BIOHAZARD requiem": "生化危机 安魂曲",
  "Resident Evil Requiem": "Resident Evil Requiem",
  "Resident Evil 4": "生化危机4",
  "Metaphor: ReFantazio": "暗喻幻想",
  "メタファー：リファンタジオ": "暗喻幻想",
  "It Takes Two": "双人成行",
  "Split Fiction": "双影奇境",
  "Grounded": "Grounded",
  "Slay the Spire": "Slay the Spire",
  "ELDEN RING": "艾尔登法环",
  "Stellar Blade": "剑星",
  "Cyberpunk 2077: Phantom Liberty": "赛博朋克 2077: 往日之影",
  "Wuthering Waves": "鸣潮",
  "鳴潮": "鸣潮",
  "Infinity Nikki": "无限暖暖",
  "インフィニティニキ": "无限暖暖",
  "Honkai: Star Rail": "崩坏：星穹铁道",
  "崩壊：スターレイル": "崩坏: 星穹铁道",
  "Zenless Zone Zero": "绝区零",
  "ゼンレスゾーンゼロ": "绝区零",
  "Arknights: Endfield": "明日方舟：终末地",
  "アークナイツ：エンドフィールド": "明日方舟: 终末地",
  "ARK: Survival Ascended": "ARK: Survival Ascended",
  "Squad": "Squad",
  "Last Epoch": "最后纪元",
  "Steep": "极限巅峰",
  "ICEY": "ICEY",
  "SEKIRO: SHADOWS DIE TWICE": "SEKIRO: SHADOWS DIE TWICE",
  "SEKIRO™： SHADOWS DIE TWICE": "只狼 影逝二度",
  "Sekiro™: Shadows Die Twice - GOTY Edition": "Sekiro: Shadows Die Twice - GOTY Edition",
  "Ghost of Yōtei": "羊蹄山之魂",
  "Ghost of Yotei": "羊蹄山之魂",
  "Overcooked": "Overcooked",
  "Overcooked!": "胡闹厨房",
  "Overcooked! 2": "胡闹厨房2",
  "Overcooked! All You Can Eat": "胡闹厨房 全都好吃",
  "War Thunder": "战争雷霆",
  "Minecraft Dungeons II": "Minecraft Dungeons II",
  "Minecraft Dungeons II Deluxe Edition": "我的世界 地下城2 豪华版",
  "Pokémon LEGENDS Z-A": "宝可梦传说 Z-A",
  "Castlevania Dominus Collection": "Castlevania Dominus Collection",
  "Castlevania Advance Collection": "恶魔城 Advance合集",
  "ウィッチャー３　ワイルドハント　リマスター": "巫师3 狂猎 复刻版",
  "ホグワーツ・レガシー：デジタルデラックスエディション Hogwarts Legacy: Digital Deluxe Edition": "霍格沃茨之遗 数字豪华版",
  "Mini Motorways（ミニ・モーターウェイ）": "迷你高速公路",
  "ホグワーツ・レガシー: デジタルデラックスエディション": "霍格沃茨之遗: 数码豪华版",
  "Hogwarts Legacy: Digital Deluxe Edition": "霍格沃茨之遗 数字豪华版",
  "ぷよぷよeスポーツ": "噗哟噗哟 电竞",
  "ポケットモンスター スカーレット": "宝可梦 朱",
  "ポケットモンスター ブリリアントダイヤモンド": "宝可梦 晶灿钻石",
  "ポケットモンスター シャイニングパール": "宝可梦 明亮珍珠",
  "ポケットモンスター リーフグリーン": "宝可梦 叶绿",
  "スーパーマリオブラザーズ ワンダー": "超级马力欧兄弟 惊奇",
  "ファイナルファンタジータクティクス - イヴァリース クロニクルズ": "最终幻想战略版 伊瓦利斯编年史",
  "ドラゴンクエストXI　過ぎ去りし時を求めて S": "勇者斗恶龙XI 寻觅逝去的时光 S",
  "ドラゴンクエストVII Reimagined": "勇者斗恶龙 VII Reimagined",
  "デイヴ・ザ・ダイバー": "潜水员戴夫",
  "ぷよぷよ™テトリス®２Ｓ": "噗哟噗哟俄罗斯方块2S",
  "真・三國無双２ with 猛将伝 Remastered": "真・三国无双2 with 猛将传 Remastered",
  "悪魔城ドラキュラ アニバーサリーコレクション": "恶魔城 周年纪念合集",
  "太鼓の達人 ドンダフルフェスティバル": "太鼓之达人 咚咚雷音祭",
  "みんなのGOLF WORLD": "全民高尔夫 世界",
  "世界樹の迷宮Ⅰ･Ⅱ･Ⅲ HD REMASTER": "世界树的迷宫Ⅰ·Ⅱ·Ⅲ HD复刻版",
  "桃太郎電鉄 ～昭和 平成 令和も定番！～": "桃太郎电铁 昭和 平成 令和也是基本款！",
  "グランド・セフト・オート：トリロジー：決定版": "侠盗猎车手 三部曲 决定版",
  "スポンジ・ボブ  :  カニカーニ・クックオフ": "海绵宝宝 蟹堡王大挑战",
  "魔法使いの夜": "魔法使之夜",
  "リズム天国 ミラクルスターズ": "节奏天国 奇迹之星",
  "トルネコの大冒険 不思議のダンジョン　ちょっとステキなリマスター": "特鲁尼克大冒险 不可思议的迷宫 精美复刻版",
  "不思議のダンジョン　風来のシレン６　とぐろ島探検録": "不可思议迷宫 风来的希炼6 蛇蜷岛探险录",
  "妖怪ウォッチ1 for Nintendo Switch": "妖怪手表1 for Nintendo Switch",
  "トモダチコレクション わくわく生活": "Tomodachi Life 朋友收集 梦想生活",
  "妖怪ウォッチ4++": "妖怪手表4++",
  "Little Witch in the Woods": "林中小女巫",
  "大乱闘スマッシュブラザーズ SPECIAL": "任天堂明星大乱斗 特别版",
  "マリオカート ワールド": "马力欧卡丁车 世界",
  "ドンキーコング バナンザ": "咚奇刚 蕉力全开",
  "Minecraft": "我的世界",
  "空の軌跡 the 2nd": "空之轨迹 the 2nd",
  "ドラゴンクエストモンスターズ３　魔族の王子とエルフの旅": "勇者斗恶龙怪兽篇3 魔族王子与精灵之旅",
  "パワフルプロ野球2026-2027": "实况力量棒球 2026-2027",
  "アナザーエデン ビギンズ": "另一个伊甸 起源",
  "スプラトゥーン3": "斯普拉遁3",
  "モンスターハンターライズ ＋ サンブレイク セット": "怪物猎人 崛起 + 曙光 套装",
  "世界のアソビ大全51": "世界游戏大全51",
  "ロマンシング サガ2 リベンジオブザセブン": "浪漫沙加2 七英雄的复仇",
  "Overcooked!® - オーバークック 王国のフルコース": "胡闹厨房 全都好吃",
  "ほの暮しの庭": "静谧田园",
  "がんばれゴエモン大集合！": "加油五右卫门 大合集",
  "パワフルプロ野球2026-2027 パワフルエディション": "实况力量棒球 2026-2027 强力版",
  "ドラゴンクエストIII　そして伝説へ…": "勇者斗恶龙III 接着迈向传说",
  "FINAL FANTASY I-VI Bundle": "最终幻想 I-VI 同捆包",
  "ホグワーツ・レガシー Hogwarts Legacy": "霍格沃茨之遗",
  "スーパー マリオパーティ ジャンボリー": "超级马力欧派对 空前盛会",
  "あつまれ どうぶつの森": "集合啦！动物森友会",
  "ファイアーエムブレム 風花雪月": "火焰之纹章 风花雪月",
  "魔法少女ノ魔女裁判": "魔法少女的魔女审判",
  "ポケットモンスター ファイアレッド": "宝可梦 火红",
  "マリオカート8 デラックス": "马力欧卡丁车8 豪华版",
  "Le Mirage Mystique": "Le Mirage Mystique",
  "東方紅魔郷：New Classic　～ the Embodiment of Scarlet Devil.": "东方红魔乡：New Classic",
  "桃太郎電鉄２ ～あなたの町も きっとある～ 東日本編＋西日本編": "桃太郎电铁2 东日本篇+西日本篇",
  "パラノマサイト FILE38 伊勢人魚物語": "灵异视界 FILE38 伊势人鱼物语",
  "モンスターハンターダブルクロス™ Nintendo Switch Ver.": "怪物猎人XX Nintendo Switch版",
  "太鼓の達人 ドンダフルフェスティバル 太鼓ミュージックパス 90日利用券セット": "太鼓之达人 咚咚雷音祭 音乐通行证90日套装",
  "ダンガンロンパ 希望の学園と絶望の高校生 Anniversary Edition": "弹丸论破 希望学园与绝望高中生 周年版",
  "空の軌跡 the 2nd デジタルデラックス版": "空之轨迹 the 2nd 数字豪华版",
  "ゼルダの伝説 ブレス オブ ザ ワイルド": "塞尔达传说 旷野之息",
  "都市伝説解体センター": "都市传说解体中心",
  "EA SPORTS FC™ 27": "EA SPORTS FC 27",
  "『超探偵事件簿 レインコード』『ダンガンロンパ1・2・V3』バンドル": "超侦探事件簿 雾雨迷宫 + 弹丸论破合集",
  "Le Mirage Mystique ダウンロード版 デジタル特典版": "Le Mirage Mystique ダウンロード版 デジタル特典版",
  "逆転裁判123 成歩堂セレクション": "逆转裁判123 成步堂精选集",
  "Pikmin 4 (ピクミン4)": "皮克敏4",
  "ドラゴンクエストI＆II": "勇者斗恶龙I＆II",
  "ポケットモンスター バイオレット": "宝可梦 紫",
  "NieR:Automata The End of YoRHa Edition": "尼尔：机械纪元 The End of YoRHa Edition",
  "ファイアーエムブレム 万紫千紅 (ばんしせんこう)": "火焰纹章 万紫千紅",
  "めっちゃカメレオン": "MECCHA CHAMELEON",
  "空の軌跡 the 2nd Nintendo Switch 2 Edition": "空之轨迹 the 2nd Switch 2版",
  "ELDEN RING Tarnished Edition": "艾尔登法环 褪色者版",
  "「ディアブロ IV: 憎悪の時代」コレクション": "暗黑破坏神IV 「憎悪の時代」合集",
  "ロマンシング サガ2 リベンジオブザセブン Nintendo Switch 2 Edition": "浪漫沙加2 七英雄的复仇 Switch 2版",
  "アナザーエデン ビギンズ Nintendo Switch 2 Edition": "另一个伊甸 起源 Switch 2版",
  "ダービースタリオン２": "德贝赛马2",
  "鬼武者 Way of the Sword": "鬼武者 Way of the Sword",
  "FINAL FANTASY VII REBIRTH": "FINAL FANTASY VII REBIRTH",
  "スプラトゥーン レイダース": "斯普拉遁 Raiders",
  "FINAL FANTASY VII REMAKE INTERGRADE": "FINAL FANTASY VII REMAKE INTERGRADE",
  "空の軌跡 the 1st Nintendo Switch 2 Edition": "空之轨迹 the 1st Nintendo Switch 2 版",
  "ぽこ あ ポケモン": "Pokémon Pokopia",
  "桃太郎電鉄２ ～あなたの町も きっとある～ Nintendo Switch 2 Edition 東日本編＋西日本編": "桃太郎电铁2 Switch 2版 东日本篇+西日本篇",
  "ペルソナ３ リロード": "女神异闻录3 Reload",
  "東方紅魔郷：New Classic　～ the Embodiment of Scarlet Devil.　デラックス版": "东方红魔乡：New Classic 豪华版",
  "オービタルズ Orbitals": "Orbitals 轨道星球",
  "Granblue Fantasy Versus: Rising Legendary Edition": "碧蓝幻想 Versus Rising 传奇版",
  "ゼルダの伝説 ブレス オブ ザ ワイルド Nintendo Switch 2 Edition": "塞尔达传说 旷野之息 Switch 2版",
  "PRAGMATA": "PRAGMATA",
  "PRAGMATA™": "识质存在",
  "PRAGMATA Deluxe Edition": "PRAGMATA Deluxe Edition",
  "PRAGMATA™ Deluxe Edition": "识质存在 豪华版",
  "PRAGMATA Digital Deluxe Edition": "识质存在 数字豪华版",
  "PRAGMATA™ Digital Deluxe Edition": "识质存在 数字豪华版",
  "Forza Horizon 5 Premium Edition": "极限竞速: 地平线 5 顶级版",
  "Forza Horizon 5 Standard Edition": "极限竞速: 地平线 5 标准版",
  "モンスターハンターワイルズ": "Monster Hunter Wilds",
  "モンスターハンターストーリーズ3　～運命の双竜～": "怪物猎人物语3 ～命运之双龙～",
  "モンスターハンターストーリーズ3　～運命の双竜～ デラックスエディション": "怪物猎人物语3 豪华版",
  "モンスターハンターストーリーズ3　～運命の双竜～ プレミアムデラックスエディション": "怪物猎人物语3 高级豪华版",
  "SILENT HILL f": "SILENT HILL f",
  "CODE VEIN II": "噬血代码 II",
  "CODE VEIN II Ultimate Edition": "噬血代码 II 终极版",
  "DEATH STRANDING 2: ON THE BEACH": "DEATH STRANDING 2: ON THE BEACH",
  "METAL GEAR SOLID Δ: SNAKE EATER Digital Deluxe Edition": "合金装备Δ：食蛇者 数字豪华版",
  "龍が如く 極３ / 龍が如く３外伝 Dark Ties PS4 & PS5": "人中之龙 极3 / 人中之龙3外传 Dark Ties PS4 & PS5",
  "Clair Obscur: Expedition 33 – Deluxe Edition": "光与影: 33号远征队 豪华版",
  "Starfield Premium Edition": "Starfield Premium Edition",
  "デジモンストーリー タイムストレンジャー デラックスエディション": "数码宝贝故事 时空异客 豪华版",
  "鉄拳8 Advanced Edition": "铁拳8 进阶版",
  "Battlefield™ 6 ファントムエディション": "战地风云 6魅影版",
  "OCTOPATH TRAVELER 0 Digital Deluxe Edition PS4 & PS5": "歧路旅人0 数字豪华版 OCTOPATH TRAVELER 0 Digital Deluxe Edition PS4&PS5",
  "Echoes of Aincrad": "艾恩葛朗特的回响",
  "Echoes of Aincrad アルティメットエディション": "艾恩葛朗特的回响 终极版",
  "ドラゴンボール Sparking! ZERO": "七龙珠 电光炸裂！ZERO",
  "龍が如く８外伝 Pirates in Hawaii PS4 & PS5": "人中之龙8外传 Pirates in Hawaii PS4 & PS5",
  "ドラゴンクエストVII Reimagined　デジタルデラックス版": "勇者斗恶龙 VII Reimagined 数字豪华版",
  "Valheim": "英灵神殿",
  "MONSTER HUNTER RISE": "MONSTER HUNTER RISE",
  "ゼルダの伝説 ティアーズ オブ ザ キングダム": "塞尔达传说 王国之泪",
  "HADES": "哈迪斯",
  "Stardew Valley": "Stardew Valley",
  "オーバークック 王国的フルコース": "胡闹厨房 全都好吃",
  "ホロウナイト": "空洞骑士",
  "ペルソナ５ ザ・ロイヤル": "女神异闻录5 皇家版",
  "ぷよぷよ™テトリス®２": "噗哟噗哟俄罗斯方块2",
  "真・三國無双 ORIGINS": "真・三国无双 起源",
  "『スター・ウォーズ 無法者たち』": "星球大战：亡命之徒",
  "スター・ウォーズ 無法者たち": "星球大战：亡命之徒",
  "零 ～紅い蝶～ REMAKE": "零 ～红蝶～ 重制版",
  "ファークライ6": "孤岛惊魂6",
  "龍の国 ルーンファクトリー": "龙之国 符文工厂",
  "牧場物語 Let's！風のグランドバザール": "牧场物语 来吧!风之繁华集市",
  "アサシン クリード ヴァルハラ": "刺客信条：英灵殿",
  "スーパーロボット大戦Y": "超级机器人大战Y",
  "スーパーロボット大戦30": "超级机器人大战30",
  "幻想水滸伝 I&II HDリマスター 門の紋章戦争 / デュナン統一戦争": "幻想水浒传 I&II HD复刻版",
  "テイルズ オブ エクシリア リマスター": "无尽传奇 复刻版",
  "テイルズ オブ グレイセス エフ リマスター": "圣恩传奇 F 复刻版",
  "テイルズ オブ シンフォニア リマスター": "仙乐传说 复刻版",
  "聖剣伝説 VISIONS of MANA": "圣剑传说 玛娜视界",
  "ガンダムブレイカー４": "高达破坏者4",
  "SDガンダム バトルアライアンス": "SD高达 激斗同盟",
  "龍が如く７外传 名を消した男": "人中之龙7外传 无名之龙",
  "龍が如く７　光と闇の行方　インターナショナル": "人中之龙7 光与暗的去向 国际版",
  "ロマンシング サガ -ミンストレルソング- リマスター": "浪漫沙加 吟游诗人之歌 复刻版",
  "サガ フロンティア２ リマスター": "沙加开拓者2 复刻版",
  "サガ フロンティア リマスター": "沙加开拓者 复刻版",
  "天穂のサクナヒメ": "天穗之咲稻姬",
  "ハッピーダンガンロンパＳ 超高校級の南国サイコロ合宿": "幸福枪弹辩驳S 超高中级的南国掷骰合宿",
  "僕のヒーローアカデミア All's Justice": "我的英雄学院 All's Justice",
  "BLEACH Rebirth of Souls": "死神 魂魄觉醒",
  "ボーダーランズ® 4": "无主之地4",
  "『ボーダーランズ® 4』": "无主之地4",
  "フロストパンク2": "冰汽时代2",
  "007 First Light": "007 初露锋芒",
  "007 First Light - デラックスエディション": "007 初露锋芒 豪华版",
  "Rust Console Edition": "腐蚀 Rust 主机版",
  "Forza Horizon 5": "极限竞速: 地平线 5",
  "METAL GEAR SOLID Δ: SNAKE EATER": "合金装备Δ：食蛇者",
  "龍が如く 極３ / 龍が如く３外伝 Dark Ties": "人中之龙 极3 / 人中之龙3外传 Dark Ties",
  "Clair Obscur: Expedition 33": "光与影: 33号远征队",
  "Starfield": "Starfield",
  "デジモンストーリー タイムストレンジャー": "数码宝贝故事 时空异客",
  "鉄拳8": "铁拳8",
  "Battlefield™ 6": "战地风云 6",
  "OCTOPATH TRAVELER 0": "歧路旅人0",
  "龍が如く８外伝 Pirates in Hawaii": "人中之龙8外传 夏威夷海盗",
  "REANIMAL": "生灵重塑",
  "REANIMAL – Digital Deluxe Edition": "生灵重塑 数字豪华版",
  "The Elder Scrolls IV: Oblivion Remastered": "上古卷轴IV：湮没 复刻版",
  "The Elder Scrolls IV: Oblivion Remastered - Deluxe Edition": "上古卷轴IV：湮没 复刻版 豪华版",
  "幻想水滸伝 I&II HDリマスター 門の紋章戦争 / デュナン統一戦争 PS4 & PS5": "幻想水浒传 I&II HD复刻版",
  "Avowed": "宣誓",
  "FINAL FANTASY VII REMAKE": "FINAL FANTASY VII REMAKE",
  "NINJA GAIDEN 4": "NINJA GAIDEN 4",
  "NINJA GAIDEN 4": "NINJA GAIDEN 4",
  "The Outer Worlds 2": "The Outer Worlds 2",
  "ジュラシック・ワールド・エボリューション3": "侏罗纪世界: 进化 3",
  "プラネットコースター 2": "过山车之星2",
  "STAR WARS ジェダイ：フォールン・オーダー™": "星球大战 绝地：陨落的武士团",
  "STAR WARS ジェダイ：フォールン・オーダー": "星球大战 绝地：陨落的武士团",
  "STAR WARS ジェダイ：フォールン・オーダー™ デラックス エディション": "星球大战 绝地：陨落的武士团 豪华版",
  "STAR WARS ジェダイ：サバイバー™": "星球大战 绝地：幸存者",
  "STAR WARS ジェダイ：サバイバー": "星球大战 绝地：幸存者",
  "STAR WARS ジェダイ：サバイバー™ デラックス エディション": "星球大战 绝地：幸存者 豪华版",
  "The Elder Scrolls Online": "上古卷轴OL",
  "The Elder Scrolls Online: Standard Edition": "上古卷轴OL 标准版",
  "Cult of the Lamb": "Cult of the Lamb",
  "Cult of the Lamb: Heretic Edition": "Cult of the Lamb: Heretic Edition",
  "龍が如く７外传 名を消した男　PS4 & PS5": "人中之龙7外传 无名之龙",
  "ロマンシング サガ -ミンストレルソング- リマスター PS4 & PS5": "浪漫沙加 吟游诗人之歌 复刻版",
  "サガ フロンティア２ リマスター PS4 & PS5": "沙加开拓者2 复刻版",
  "SAND LAND": "沙漠大冒险",
  "SAND LAND PS4® & PS5®": "沙漠大冒险",
  "トワと神樹の祈り子たち": "永久与神树的祈愿者",
  "Lost Soul Aside™": "失落之魂",
  "Lost Soul Aside": "失落之魂",
  "Sea of Thieves: 2026": "盗贼之海",
  "Sea of Thieves": "盗贼之海",
  "Sea of Thieves: 2026 Premium Edition": "盗贼之海 高级版",
  "CHRONO CROSS: THE RADICAL DREAMERS EDITION": "穿越时空：THE RADICAL DREAMERS EDITION",
  "DAEMON X MACHINA TITANIC SCION": "机甲战魔 泰坦之裔",
  "DREDGE": "渔帆暗涌",
  "DREDGE - Digital Deluxe Edition": "渔帆暗涌 数字豪华版",
  "DREDGE: Expansion Bundle": "渔帆暗涌 扩展捆绑包",
  "Moving Out 2": "Moving Out 2",
  "Neon Abyss": "霓虹深渊",
  "SCARLET NEXUS": "绯红结系",
  "SCARLET NEXUS PS4 & PS5": "绯红结系",
  "Shadow Labyrinth (シャドウラビリンス)": "暗影迷宫",
  "Shadow Labyrinth": "暗影迷宫",
  "Sifu": "Sifu",
  "ソニックレーシング クロスワールド": "索尼克赛车 交叉世界",
  "ソニックレーシング クロスワールド PS4 & PS5": "索尼克赛车 交叉世界",
  "NARUTO X BORUTO ナルティメットストームコネクションズ": "火影忍者 终极风暴羁绊",
  "ASTRONEER": "ASTRONEER",
  "ASTRONEER - Ultimate Edition": "异星探险家 终极版",
  "アバター：フロンティア・オブ・パンドラ": "阿凡达: 潘多拉边境",
  "Palworld": "幻兽帕鲁",
  "Palworld / 幻兽帕鲁": "幻兽帕鲁",
  "Palworld / パルワールド": "幻兽帕鲁",
  "Grounded 2": "禁闭求生2",
  "禁闭求生2 Grounded 2": "禁闭求生2",
  "Once Human": "七日世界",
  "Once Human（基本プレイ無料）": "七日世界",
  "Once Human（免費遊戲）": "七日世界",
  "Aniimo": "伊莫",
  "アニモ": "伊莫",
  "NTE: Neverness to Everness": "异环",
  "Wo Long: Fallen Dynasty": "卧龙：苍天陨落",
  "Wo Long: Fallen Dynasty （卧龙：苍天陨落）(PS4 & PS5)": "卧龙：苍天陨落",
  "Wo Long 2: Wings of Ember": "卧龙2：凤火连天",
  "Beast of Reincarnation": "轮回之兽",
  "ビースト・オブ・リンカネーション": "轮回之兽",
  "Mount & Blade II: Bannerlord": "骑马与砍杀2：霸主",
  "Mount &amp; Blade II: Bannerlord": "骑马与砍杀2：霸主",
  "Dead Cells": "死亡细胞",
  "Escape the Backrooms": "逃离后室",
  "World War Z": "僵尸世界大战",
  "World War Z: Aftermath": "僵尸世界大战：余波",
  "LOST JUDGMENT：裁かれざる記憶": "审判之逝：湮灭的记忆",
  "Dragon Quest Builders 2": "勇者斗恶龙 创世小玩家2",
  "THE FINALS": "THE FINALS",
  "R.E.P.O.": "R.E.P.O.",
  "Pizza Possum": "Pizza Possum",
  "Gears of War: E-Day": "战争机器：E-Day",
  "Ready or Not": "严阵以待",
  "Limbus Company": "边狱公司",
  "Victoria 3": "维多利亚3",
  "Raft": "木筏求生",
  "Rust": "Rust",
  "PEAK": "PEAK",
  "Pummel Party": "Pummel Party",
  "Chained Together": "Chained Together",
  "AION 2": "AION 2",
  "Transport Fever 3": "Transport Fever 3",
  "Pokémon Pokopia": "Pokémon Pokopia",
  "DYNASTY WARRIORS 3: Complete Edition Remastered": "真・三国无双2 with 猛将传 Remastered",
  "FATAL FURY: City of the Wolves": "饿狼传说：群狼之城",
  "VALORANT": "无畏契约",
  "Shape of Dreams": "梦之形",
  "Tales of ARISE": "破晓传奇",
  "A Way Out": "逃出生天",
  "Super Bunny Man": "超级兔子人",
  "スーパーバニーマン": "超级兔子人",
  "SYNDUALITY Echo of Ada": "奇异贤伴 爱达之歌",
  "Resident Evil 6": "生化危机6",
  "Resident Evil Revelations 2": "生化危机：启示录2",
  "Dragonball FighterZ": "七龙珠 斗士Z",
  "DRAGON BALL FighterZ": "七龙珠 斗士Z",
  "KINGDOM HEARTS Collection [I～III]": "王国之心合集 [I～III]",
  "KINGDOM HEARTS -HD 1.5+2.5 ReMIX-": "王国之心 -HD 1.5+2.5 ReMIX-",
  "KINGDOM HEARTS III + Re Mind (DLC)": "王国之心III + Re Mind（DLC）",
  "FINAL FANTASY X/X-2 HD Remaster": "最终幻想X/X-2 高清重制版",
  "FINAL FANTASY XII THE ZODIAC AGE": "最终幻想XII 黄道时代",
  "FINAL FANTASY Ⅻ THE ZODIAC AGE": "最终幻想XII 黄道时代",
  "ACE COMBAT 7: SKIES UNKNOWN": "皇牌空战7：未知空域",
  "Marvel's Spider-Man 2": "漫威蜘蛛侠2",
  "Marvel's Spider-Man: Miles Morales": "漫威蜘蛛侠：迈尔斯·莫拉莱斯",
  "Marvel's Spider-Man Remastered": "漫威蜘蛛侠 重制版",
  "Marvel's Spider-Man": "漫威蜘蛛侠",
  "The Last of Us Part II Remastered": "最后生还者 第二部 重制版",
  "The Last of Us Part I": "最后生还者 第一部",
  "Street Fighter 6": "街头霸王6",
  "Street Fighter 6 Years 1-2 Fighters Edition": "街头霸王6 第1–2年斗士版",
  "PUBG: BATTLEGROUNDS": "绝地求生",
  "World of Warships: Legends": "战舰世界：传奇",
  "Microsoft Flight Simulator 2024": "微软飞行模拟2024",
  "Microsoft Flight Simulator 2024 - Aviator Edition": "微软飞行模拟2024 飞行员版",
  "Monster Hunter Wilds": "怪物猎人 荒野",
  "Monster Hunter Wilds Prologue Demo": "怪物猎人 荒野 序章体验版",
  "Minecraft: Ultimate Collection": "我的世界 终极合集",
  "Far Cry 6": "孤岛惊魂6",
  "Black Desert": "黑色沙漠",
  "Black Desert: Mythical Edition": "黑色沙漠 神话版",
  "Black Desert: Heroic Edition": "黑色沙漠 英雄版",
  "Roblox": "罗布乐思",
  "Call of Duty: Modern Warfare 2 Campaign Remastered": "使命召唤：现代战争2 战役重制版",
  "Call of Duty: Modern Warfare Remastered": "使命召唤：现代战争 重制版",
  "Call of Duty: Black Ops II": "使命召唤：黑色行动II",
  "Call of Duty: Black Ops III - Zombies Chronicles Edition": "使命召唤：黑色行动III 僵尸编年史版",
  "Call of Duty: Black Ops III - Zombies Chronicles Deluxe": "使命召唤：黑色行动III 僵尸编年史豪华版",
  "Resident Evil Remake Trilogy": "生化危机 重制三部曲",
  "Resident Evil 4 Chainsaw Demo PS4 & PS5": "生化危机4 重制版 电锯体验版 PS4 & PS5",
  "The Sims 4": "模拟人生4",
  "The Seven Deadly Sins: Origin": "七大罪：起源",
  "七つの大罪：Origin": "七大罪：起源",
  "Alan Wake 2": "心灵杀手2",
  "FINAL FANTASY XVI": "最终幻想XVI",
  "FINAL FANTASY XV": "最终幻想XV",
  "FINAL FANTASY XV MULTIPLAYER: COMRADES": "最终幻想XV 多人扩展包：战友",
  "ファイナルファンタジーXIV": "最终幻想XIV",
  "Moving Out + Moving Out 2 Bundle": "胡闹搬家 + 胡闹搬家2 组合包",
  "The First Descendant": "第一后裔",
  "UFC 6": "UFC 6",
  "Yu-Gi-Oh! MASTER DUEL": "游戏王 大师决斗",
  "遊戯王 マスターデュエル": "游戏王 大师决斗",
  "Sackboy: A Big Adventure": "麻布仔大冒险",
  "Battlefield 1": "战地1",
  "Battlefield 1 Revolution": "战地1 革命版",
  "Granblue Fantasy: Relink": "碧蓝幻想：Relink",
  "Trine 5: A Clockwork Conspiracy": "三位一体5：发条阴谋",
  "TEKKEN 8 - DEMO": "铁拳8 体验版",
  "HITMAN World of Assassination": "杀手：暗杀世界",
  "HITMAN World of Assassination Part One": "杀手：暗杀世界 第一部",
  "HITMAN World of Assassination Part One – VR Edition": "杀手：暗杀世界 第一部 VR版",
  "Gears of War: Reloaded": "战争机器：重装上阵",
  "RESIDENT EVIL 2": "生化危机2 重制版",
  "RESIDENT EVIL 2 R.P.D. Demo": "生化危机2 重制版 R.P.D.体验版",
  "FINAL FANTASY TACTICS - The Ivalice Chronicles [PS4 & PS5]": "最终幻想战略版 伊瓦利斯编年史 [PS4 & PS5]",
  "FINAL FANTASY TACTICS - The Ivalice Chronicles Deluxe Edition [PS4 & PS5]": "最终幻想战略版 伊瓦利斯编年史 豪华版 [PS4 & PS5]",
  "Fallout 76": "辐射76",
  "Fallout 4": "辐射4",
  "Ship of Fools": "同舟共济",
  "Sniper Elite: Resistance": "狙击精英：抵抗",
  "Outer Wilds": "星际拓荒",
  "Outer Wilds: Archaeologist Edition": "星际拓荒 考古学家版",
  "Destiny 2": "命运2",
  "Goat Simulator 3": "模拟山羊3",
  "The Elder Scrolls V: Skyrim Special Edition": "上古卷轴V：天际 特别版",
  "The Elder Scrolls V: Skyrim Anniversary Edition - PS5 & PS4": "上古卷轴V：天际 周年纪念版 PS5 & PS4",
  "Cities: Skylines": "都市：天际线",
  "Cities: Skylines - Remastered": "都市：天际线 重制版",
  "シティーズ：スカイライン": "都市：天际线",
  "THE KING OF FIGHTERS XV": "拳皇XV",
  "THE KING OF FIGHTERS XIV (PS4)": "拳皇XIV（PS4）",
  "God of War Ragnarök": "战神：诸神黄昏",
  "God of War": "战神",
  "Monster Hunter: World": "怪物猎人：世界",
  "モンスターハンター：ワールド": "怪物猎人：世界",
  "モンスターハンターライズ": "怪物猎人 崛起",
  "Monster Hunter World: Iceborne Master Edition": "怪物猎人：世界 冰原 大师版",
  "Monster Hunter World: Iceborne Master Edition Digital Deluxe": "怪物猎人：世界 冰原 大师版 数字豪华版",
  "War Robots": "战争机器人",
  "Age of Empires II: Definitive Edition": "帝国时代II：决定版",
  "Age of Empires IV: Anniversary Edition": "帝国时代IV 周年纪念版",
  "The Binding of Isaac: Repentance": "以撒的结合：忏悔",
  "The Binding of Isaac: Rebirth": "以撒的结合：重生",
  "Fortnite": "堡垒之夜",
  "グランド・セフト・オートVI": "侠盗猎车手VI",
  "ドラゴンクエストⅩ オンライン": "勇者斗恶龙X Online",
  "Path of Exile 2": "流放之路2",
  "ロケットリーグ": "火箭联盟",
  "METAL GEAR SOLID: MASTER COLLECTION Vol.2": "合金装备 大师合集 第2辑",
  "7 Days to Die - コンソールエディション": "七日杀 主机版",
  "Bloodborne": "血源诅咒",
  "GUILTY GEAR -STRIVE-": "罪恶装备 奋战",
  "TCG Card Shop Simulator": "TCG卡牌商店模拟器",
  "Ghost of Tsushima": "对马岛之魂",
  "ディズニー ドリームライトバレー": "迪士尼梦幻星谷",
  "真・女神転生Ⅴ Vengeance": "真・女神转生V Vengeance",
  "Granblue Fantasy Versus: Rising": "碧蓝幻想 Versus：崛起",
  "The Outlast Trials": "逃生：试炼",
  "Apex Legends": "Apex英雄",
  "Ori and the Will of the Wisps": "奥日与精灵意志",
  "Counter-Strike 2": "反恐精英2",
  "Sons Of The Forest": "森林之子",
  "Escape from Tarkov": "逃离塔科夫",
  "Terraria": "泰拉瑞亚",
  "Left 4 Dead 2": "求生之路2",
  "Project Zomboid": "僵尸毁灭工程",
  "Watch_Dogs 2": "看门狗2",
  "Library Of Ruina": "废墟图书馆",
  "Crusader Kings III": "十字军之王III",
  "Lobotomy Corporation | Monster Management Simulation": "脑叶公司",
  "Slay the Spire 2": "杀戮尖塔2",
  "Euro Truck Simulator 2": "欧洲卡车模拟2",
  "Stellaris": "群星",
  "Sid Meier's Civilization VI": "席德·梅尔的文明VI",
  "Cuphead": "茶杯头",
  "Minecraft Dungeons": "我的世界：地下城",
  "ARK: Survival Evolved": "方舟：生存进化",
  "The Forest": "森林",
  "DARK SOULS III": "黑暗之魂III",
  "Dying Light": "消逝的光芒",
  "7 Days to Die": "七日杀",
  "Titanfall 2": "泰坦陨落2",
  "Sea of Thieves: 2026 Edition": "盗贼之海 2026版",
  "American Truck Simulator": "美国卡车模拟",
  "Kingdom Rush Origins - Tower Defense": "王国保卫战：起源",
  "Assassin's Creed Odyssey": "刺客信条：奥德赛",
  "WRC 7 FIA World Rally Championship": "WRC 7 国际汽联世界拉力锦标赛",
  "Russian Fishing 4": "俄罗斯钓鱼4",
  "Rise of the Tomb Raider": "古墓丽影：崛起",
  "Kingdom Rush - Tower Defense": "王国保卫战",
  "Kingdom Rush Frontiers - Tower Defense": "王国保卫战：前线",
  "Kingdom Rush Vengeance - Tower Defense": "王国保卫战：复仇",
  "DEATH STRANDING DIRECTOR'S CUT": "死亡搁浅 导演剪辑版",
  "Team Fortress 2": "军团要塞2",
  "Tom Clancy's Rainbow Six Siege": "彩虹六号：围攻",
  "Magic: The Gathering Arena": "万智牌：竞技场",
  "S.T.A.L.K.E.R. 2: Heart of Chornobyl": "潜行者2：切尔诺贝利之心",
  "Gothic 1 Remake": "哥特王朝1 重制版",
  "Age of Wonders 4": "奇迹时代4",
  "Borderlands 4": "无主之地4",
  "Ratchet & Clank: Rift Apart": "瑞奇与叮当：时空跳转",
  "Nobody Saves the World": "小人物拯救世界",
  "Lies of P": "匹诺曹的谎言",
  "Lies of P: Overture Bundle": "匹诺曹的谎言：序曲 组合包",
  "eFootball": "eFootball",
  "FATAL FURY: City of the Wolves - Demo Version -": "饿狼传说：群狼之城 体验版",
  "ELDEN RING NIGHTREIGN": "艾尔登法环 黑夜君临",
  "Winning Post 10 2026": "赛马大亨10 2026",
  "真・三國無雙２ with 猛將傳 Remastered": "真・三国无双2 with 猛将传 Remastered",
  "真・三国无双２ with 猛将传 Remastered": "真・三国无双2 with 猛将传 Remastered",
  "真・三國無雙２ with 猛將傳 Remastered 數位豪華版": "真・三国无双2 with 猛将传 Remastered 数字豪华版",
  "真・三国无双２ with 猛将传 Remastered 数字豪华版": "真・三国无双2 with 猛将传 Remastered 数字豪华版",
  "真・三国无双２ with 猛将传 Remastered 体验版": "真・三国无双2 with 猛将传 Remastered 体验版",
  "PRAGMATA Sketchbook - DEMO": "识质存在 Sketchbook 体验版",
  "Shadow Tactics: Blades of the Shogun": "影子战术：将军之刃",
  "Cult of the Lamb: Cultist Edition": "咩咩启示录: Cultist Edition",
  "Cult of the Lamb: Sinful Edition": "咩咩启示录: Sinful Edition",
  "Cult of the Lamb: The One Who Waits": "咩咩启示录: The One Who Waits",
  "Cult of the Lamb: Unholy Edition": "咩咩启示录: Unholy Edition",
  "Cult of the Lamb: Woolhaven Edition": "咩咩启示录: Woolhaven Edition",
  "Little Nightmares III - Free Trial & Friend's Pass": "小小梦魇III 免费体验版与好友通行证",
  "theHunter: Call of the Wild - Ultimate Hunting Bundle": "猎人：荒野的召唤 终极狩猎组合包",
  "NieR:Automata DEMO 120161128": "尼尔：机械纪元 体验版 120161128",
  "Sniper Elite: Resistance PS4 & PS5": "狙击精英：抵抗 PS4 & PS5",
  "Destiny 2 PS4 & PS5": "命运2 PS4 & PS5",
  "Marvel Rivals": "漫威争锋",
  "Brotato": "土豆兄弟",
  "プロ野球スピリッツ2026": "职业棒球之魂2026",
  "SILENT HILL: Townfall": "寂静岭：Townfall",
  "eFootball: Lamine Yamal Edition 2027": "eFootball 拉明·亚马尔版2027",
  "eFootball: Leo Messi Edition 2027": "eFootball 莱昂内尔·梅西版2027",
  "eFootball: Lamine Yamal Edition 2027 [Deluxe]": "eFootball 拉明·亚马尔版2027 豪华版",
  "eFootball: Leo Messi Edition 2027 [Deluxe]": "eFootball 莱昂内尔·梅西版2027 豪华版",
  "NBA 2K27": "NBA 2K27",
  "REMATCH": "REMATCH",
  "ARC Raiders": "ARC Raiders",
  "Bodycam": "Bodycam",
  "Dota 2": "Dota 2",
  "Muse Dash": "喵斯快跑",
  "紅の錬金術士と白の守護者 ～レスレリアーナのアトリエ～": "红色的炼金术士和白色的守护者 ～蕾斯莱莉娅娜的炼金工房～",
  "ACE COMBAT7: SKIES UNKNOWN DELUXE EDITION": "皇牌空战7：未知空域 豪华版",
  "Grand Theft Auto VI": "侠盗猎车手VI",
  "ヒューマン フォール フラット Nintendo Switch 2 Edition アップグレードパス": "人类：一败涂地 Nintendo Switch 2版 升级通行证",
  "ポケモン不思議のダンジョン 救助隊DX": "宝可梦不可思议迷宫 救助队DX",
  "DRAGON QUEST XI S: Echoes of an Elusive Age – Definitive Edition": "勇者斗恶龙XI S 寻觅逝去的时光 决定版",
  "Little Nightmares Trial": "小小梦魇 体验版",
  "KINGDOM HEARTS HD 2.8 Final Chapter Prologue": "王国之心 HD 2.8 终章序幕",
  "DEAD OR ALIVE 6": "生死格斗6",
  "DEAD OR ALIVE 6 Last Round": "生死格斗6 Last Round",
  "DEAD OR ALIVE 6 Last Round Core Fighters": "生死格斗6 Last Round 基础免费版",
  "DEAD OR ALIVE 6: Core Fighters": "生死格斗6 基础免费版",
  "STRANGER OF PARADISE FINAL FANTASY ORIGIN": "最终幻想起源：天堂的陌生人",
  "STRANGER OF PARADISE FINAL FANTASY ORIGIN Digital Deluxe Upgrade": "最终幻想起源：天堂的陌生人 数字豪华升级包",
  "Warhammer 40,000: Space Marine 2 - 1-Year Anniversary Edition": "战锤40,000：星际战士2 一周年纪念版",
  "Warhammer 40,000: Space Marine 2 - 2-Year Anniversary Edition": "战锤40,000：星际战士2 两周年纪念版",
  "Warhammer 40,000: Space Marine 2 - 3-Year Anniversary Edition": "战锤40,000：星际战士2 三周年纪念版",
  "Bloodborne The Old Hunters Edition": "血源诅咒 老猎人版",
  "Bloodborne PlayStationHits": "血源诅咒 PlayStation Hits",
  "Goat Simulator 3 – Starter Edition": "模拟山羊3 入门版",
  "Goat Simulator 3 - Multiversal Traveler's Edition": "模拟山羊3 多元宇宙旅行者版",
  "War Thunder - Senrai Maidens Bundle (中英韩文版)": "战争雷霆 - Senrai Maidens Bundle",
  "War Thunder - High-res Texture Edition (英语)": "战争雷霆 - High-res Texture Edition",
  "War Thunder - German Starter Bundle (日语, 英语)": "战争雷霆 - German Starter Bundle",
  "War Thunder - US Starter Bundle (日语, 英语)": "战争雷霆 - US Starter Bundle",
  "War Thunder - \"Be Prepared!\" Bundle (日语, 英语)": "战争雷霆 - \"Be Prepared!\" Bundle",
  "War Thunder - Cyberpunk Helicopter Snail Bundle (日语, 英语)": "战争雷霆 - Cyberpunk Helicopter Snail Bundle",
  "War Thunder - Senrai Maidens: Emily Bundle (日语, 英语)": "战争雷霆 - Senrai Maidens: Emily Bundle",
  "War Thunder - Senrai Maidens: Ling Bundle (日语, 英语)": "战争雷霆 - Senrai Maidens: Ling Bundle",
  "War Thunder - Senrai Maidens: Usagi Bundle (日语, 英语)": "战争雷霆 - Senrai Maidens: Usagi Bundle",
  "Beat Saber (日语, 韩语, 英语)": "节奏光剑",
  "Beat Saber + Britney Spears Music Pack (日语, 韩语, 英语)": "节奏光剑 + Britney Spears Music Pack",
  "Beat Saber + BTS Music Pack (日语, 韩语, 英语)": "节奏光剑 + BTS Music Pack",
  "Beat Saber + Daft Punk Music Pack (日语, 韩语, 英语)": "节奏光剑 + Daft Punk Music Pack",
  "Beat Saber + Hip Hop Mixtape (日语, 韩语, 英语)": "节奏光剑 + Hip Hop Mixtape",
  "Beat Saber + Imagine Dragons Music Pack (日语, 韩语, 英语)": "节奏光剑 + Imagine Dragons Music Pack",
  "Beat Saber + Linkin Park x Mike Shinoda Ultimate Bundle (日语, 韩语, 英语)": "节奏光剑 + Linkin Park x Mike Shinoda Ultimate Bundle",
  "Beat Saber + Metallica Music Pack (日语, 韩语, 英语)": "节奏光剑 + Metallica Music Pack",
  "Beat Saber + Monstercat Mixtape 2 (日语, 韩语, 英语)": "节奏光剑 + Monstercat Mixtape 2",
  "Beat Saber + Queen Music Pack (日语, 韩语, 英语)": "节奏光剑 + Queen Music Pack",
  "Beat Saber + The Rolling Stones Music Pack (日语, 韩语, 英语)": "节奏光剑 + The Rolling Stones Music Pack",
  "Towa and the Guardians of the Sacred Tree": "永久与神树的祈愿者",
  "ヴィラクタル(Viractal) Nintendo Switch 2 Edition": "维拉克塔尔 Nintendo Switch 2 版",
  "Sullyland Nursery Rhyme": "Sullyland Nursery Rhyme",
  "Leafy Corner": "绿植小筑",
  "sins of KALEIDO 塔巡りし因果の魔女": "sins of KALEIDO 塔巡りし因果の魔女",
  "むちむちポーク！＆ピンクスゥイーツ Boosted": "むちむちポーク!&ピンクスゥイーツ Boosted",
  "テニスの王子様 も～っと 学園祭の王子様 ♡-40 and more...": "网球王子 学园祭的王子们 ♡-40 and more…",
  "ヴィラクタル(Viractal)": "维拉克塔尔",
  "ウィザードリィ外伝 五つの試練 トリプルパック": "巫术外传 五重试炼 三合一套装",
  "God of War Laufey™ (中英韩文版)": "战神：劳菲",
  "FINAL FANTASY VII REVELATION Premium Plus Edition (中韩文版) (中韩文版)": "最终幻想VII：启示 高级加强版",
  "FINAL FANTASY VII REVELATION (中韩文版) (中韩文版)": "最终幻想VII：启示",
  "FINAL FANTASY VII REVELATION Premium Edition (中韩文版) (中韩文版)": "最终幻想VII：启示 高级版",
  "FINAL FANTASY VII REVELATION Premium Plus Edition": "最终幻想VII：启示 高级加强版",
  "FINAL FANTASY VII Remake Series Trilogy Edition（中韩文版）": "最终幻想VII 重制系列三部曲合集",
  "FINAL FANTASY VII Remake Series Trilogy Edition（日英文版） (日语, 英语)": "最终幻想VII 重制系列三部曲合集",
  "FINAL FANTASY VII REVELATION": "最终幻想VII：启示",
  "FINAL FANTASY VII REVELATION Premium Edition": "最终幻想VII：启示 高级版",
  "FINAL FANTASY RESONANCE Digital Deluxe Edition (中韩文版)": "最终幻想：共鸣 数字豪华版",
  "FINAL FANTASY RESONANCE": "最终幻想：共鸣",
  "FINAL FANTASY RESONANCE Digital Deluxe Edition": "最终幻想：共鸣 数字豪华版",
  "FINAL FANTASY RESONANCE (日语, 英语)": "最终幻想：共鸣",
  "EA SPORTS™《Madden NFL 27》 (英语)": "EA SPORTSMadden NFL 27",
  "Until Dawn 2 (中日英韩文版)": "Until Dawn 2",
  "Castlevania: Belmont’s Curse Midnight Edition (中日英韩文版)": "恶魔城：贝尔蒙特的诅咒 Midnight Edition",
  "Castlevania: Belmont&#x27;s Curse": "恶魔城：贝尔蒙特的诅咒",
  "Castlevania: Belmont&#x27;s Curse Demo": "恶魔城：贝尔蒙特的诅咒 体验版",
  "Clive Barker’s Hellraiser: Revival - Deluxe Edition (英语)": "Clive Barker's Hellraiser: Revival - Deluxe Edition",
  "Clive Barker&#x27;s Hellraiser: Revival (英语)": "Clive Barker's Hellraiser: Revival",
  "Kingdom Come: Deliverance - Saga Bundle": "天国：拯救 传奇捆绑包",
  "Graveyard Keeper 2": "守墓人2",
  "STRANGER THAN HEAVEN (中日英韩文版)": "STRANGER THAN HEAVEN",
  "Well Dweller Demo": "黯井微光 体验版",
  "Achilles: Legends Untold": "阿喀琉斯：未诉传说",
  "Ship of Fools - Completely Foolish Edition": "同舟共济 同舟共寄版",
  "Ship of Fools - The Aquapocalypse Edition": "同舟共济 Aquapocalypse Edition",
  "Sniper Elite: The French Collection": "狙击精英：法国典藏版",
  "Stupid Never Dies: Glorious Idiot Edition (中日英韩文版)": "愚者不灭 Glorious Idiot Edition",
  "Jotunnslayer: Horde of Hel - Conan Edition": "巨人杀手：暗黑之潮 柯南版",
  "Hamster Playground": "仓鼠游乐场",
  "Fate/EXTRA Record PS4 & PS5 (中日英韩文版)": "Fate/EXTRA Record PS4 & PS5",
  "《MARVEL Tōkon: Fighting Souls》": "漫威斗魂",
  "Way of the Hunter 2 - Deluxe Edition": "猎人之路2 豪华版",
  "Way of the Hunter 2": "猎人之路2",
  "Hunting Simulator 3 (英语)": "狩猎模拟3",
  "Hunting Simulator 3 - Apex Predator Edition (中日英韩文版)": "狩猎模拟3 Apex Predator Edition",
  "THE KING OF FIGHTERS XIV DEMO VER.2 (中日英韩文版)": "拳皇XIV 体验版2",
  "Venus Vacation PRISM - DEAD OR ALIVE Xtreme -": "维纳斯璀璨假期",
  "God of War Laufey™": "战神：劳菲",
  "ファイナルファンタジー レゾナンス": "最终幻想：共鸣",
  "PSO2 NEW GENESIS": "梦幻之星Online 2：新起源",
  "僕のヒーローアカデミア ULTRA RUMBLE": "僕のヒーローアカデミア ULTRA RUMBLE",
  "ドラゴンクエストモンスターズ４　枯れ木の国のビアンカ・フローラ": "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉",
  "三國志14 with パワーアップキット Complete Edition": "三国志14 威力加强传承版套装",
  "Throne and Liberty": "王权与自由",
  "テイルズ オブ エターニア リマスター": "永恒传说 复刻版",
  "Train Sim World® 7": "模拟火车世界7",
  "カラオケ＠DAM": "カラオケ@DAM",
  "Active Matter": "Active Matter",
  "Castlevania: Belmont's Curse": "恶魔城：贝尔蒙特的诅咒",
  "STRANGER THAN HEAVEN": "STRANGER THAN HEAVEN",
  "JDM：ジャパニーズドリフトマスター": "JDM：漂移大师",
  "JOYSOUND.TV Plus ダウンロード版": "JOYSOUND.TV Plus ダウンロード版",
  "エイリアン：ファイアーチーム エリート ２": "异形：火力精英2",
  "神貌のクリファ": "神貌之树逆卡巴拉",
  "進撃の巨人３": "进击的巨人3",
  "ドラゴンボール ゲキシン スクアドラ": "ドラゴンボール ゲキシン スクアドラ",
  "Big Walk": "Big Walk",
  "WARDOGS": "WARDOGS",
  "BOMBANANA!": "BOMBANANA!",
  "MECCHA CHAMELEON": "MECCHA CHAMELEON",
  "Mimic Party": "Mimic Party",
  "STAR WARS: Galactic Racer™": "星球大战：银河赛车手",
  "Nivalis Nights": "尼瓦利斯之夜",
  "LEGO® Batman™: Legacy of the Dark Knight": "乐高蝙蝠侠：黑暗骑士之遗",
  "Planet Zoo 2": "动物园之星2",
  "Queen's Blade Re:Build": "Queen's Blade Re:Build",
  "NieR:Automata Game of the YoRHa Edition": "尼尔：机械纪元 Game of the YoRHa Edition",
  "NieR:Automata Game of the YoRHa Edition (中日英韩文版)": "尼尔：机械纪元 Game of the YoRHa Edition",
  "NieR:Automata Game of the YoRHa Edition (OST bundle)": "尼尔：机械纪元 Game of the YoRHa Edition（原声带合集）",
  "NieR:Automata Game of the YoRHa Edition (OST bundle) (中日英韩文版)": "尼尔：机械纪元 Game of the YoRHa Edition（原声带合集）",
  "ARK: Bob&#x27;s Bundle": "方舟 Bob's Bundle",
  "HITMAN WOA Free Demo ft. The Undying": "杀手：暗杀世界 免费体验版（The Undying）",
  "Diablo® Prime Evil Collection": "暗黑破坏神 Prime Evil Collection",
  "Fallout 76: Deathclaw Pet Deluxe Edition PS4 & PS5": "辐射76 死亡爪宠物豪华版 PS4 & PS5",
  "Cities: Skylines - Mayor&#x27;s Edition": "都市：天际线 市长版",
  "Cities: Skylines - Mayor&#x27;s Edition (韩语, 英语)": "都市：天际线 市长版",
  "Cities: Skylines - Premium Edition 2": "都市：天际线 高级版2",
  "Cities: Skylines - Premium Edition 2 (韩语, 英语)": "都市：天际线 高级版2",
  "Cities: Skylines - PlayStation®4 Edition": "都市：天际线 PlayStation 4版",
  "Cities: Skylines - PlayStation®4 Edition (韩语, 英语)": "都市：天际线 PlayStation 4版",
  "Age of Empires II + Age of Mythology Premium Edition Bundle": "帝国时代II + 神话时代 高级版捆绑包",
  "The Elder Scrolls V: Skyrim Anniversary Edition + Fallout 4: Anniversary Edition Bundle": "上古卷轴V：天际 周年版 + 辐射4 周年版捆绑包",
  "Destiny 2: Renegades": "命运2：反叛",
  "Schedule I": "Schedule I",
  "《瑪利歐 ＋ 瘋狂兔子 希望之星》- 黃金版（MARIO + RABBIDS SPARKS OF HOPE GOLD EDITION）": "玛利欧 + 疯狂兔子 希望之星- 黄金版(MARIO + RABBIDS SPARKS OF HOPE GOLD EDITION)",
  "霍格華茲的傳承：數位豪華版 Hogwarts Legacy: Digital Deluxe Edition": "霍格华兹的传承: 数位豪华版 Hogwarts Legacy: Digital Deluxe Edition",
  "潛水員戴夫 (DAVE THE DIVER)": "潜水员戴夫 (DAVE THE DIVER)",
  "薩爾達傳說 曠野之息 擴充票": "萨尔达传说 旷野之息 扩充票",
  "MONSTER HUNTER RISE + SUNBREAK 組合包": "MONSTER HUNTER RISE + SUNBREAK 组合包",
  "潛水員戴夫－叢林 Content Pack": "潜水员戴夫-丛林 Content Pack",
  "《樂高®小城：臥底密探》[LEGO® CITY Undercover]": "乐高小城: 卧底密探[LEGO CITY Undercover]",
  "薔薇與椿 〜豪華絢爛版〜": "蔷薇与椿 〜豪华绚烂版〜",
  "女神異聞錄５ 皇家版（PERSONA5 THE ROYAL）": "女神异闻录5 皇家版(PERSONA5 THE ROYAL)",
  "Phoenix Wright: Ace Attorney Trilogy(逆轉裁判123成步堂精選集)": "Phoenix Wright: Ace Attorney Trilogy(逆转裁判123成步堂精选集)",
  "潛水員戴夫 一番的假日 Content Pack": "潜水员戴夫 一番的假日 Content Pack",
  "《瑪利歐 ＋ 瘋狂兔子 希望之星》(MARIO + RABBIDS SPARKS OF HOPE)": "玛利欧 + 疯狂兔子 希望之星(MARIO + RABBIDS SPARKS OF HOPE)",
  "《刺客教條：埃齊歐合輯》(Assassin’s Creed The Ezio Collection)": "刺客教条: 埃齐欧合辑(Assassin's Creed The Ezio Collection)",
  "《波斯王子：失落王冠》完全版 (Prince of Persia: The Lost Crown - Complete Edition)": "波斯王子: 失落王冠完全版 (Prince of Persia: The Lost Crown - Complete Edition)",
  "Nintendo Switch 運動": "Nintendo Switch 运动",
  "寶可夢 紫 零之秘寶": "宝可梦 紫 零之秘宝",
  "真人快打11終極版": "真人快打11终极版",
  "寶可夢傳說 Z-A 超次元爆湧": "宝可梦传说 Z-A 超次元爆涌",
  "resident evil 4": "生化危机4",
  "LEGO® 漫威超級英雄 2 [LEGO® Marvel Super Heroes 2]": "LEGO 漫威超级英雄 2 [LEGO Marvel Super Heroes 2]",
  "《Pokémon Champions+起始包》": "Pokémon Champions+起始包",
  "潛水員戴夫 (DAVE THE DIVER) Nintendo Switch 2 Edition": "潜水员戴夫 (DAVE THE DIVER) Nintendo Switch 2 Edition",
  "薩爾達傳說 王國之淚 Nintendo Switch 2 Edition升級通行證": "萨尔达传说 王国之泪 Nintendo Switch 2 Edition升级通行证",
  "薩爾達傳說 曠野之息 Nintendo Switch 2 Edition升級通行證": "萨尔达传说 旷野之息 Nintendo Switch 2 Edition升级通行证",
  "Pokémon Pokopia擴充票": "Pokémon Pokopia扩充票",
  "空之軌跡 the 1st Nintendo Switch 2 Edition": "空之轨迹 the 1st Nintendo Switch 2 Edition",
  "瑪利歐賽車世界": "玛利欧赛车世界",
  "異度神劍2 Nintendo Switch 2 Edition升級通行證": "异度神剑2 Nintendo Switch 2 Edition升级通行证",
  "集合啦！動物森友會 Nintendo Switch 2 Edition升級通行證": "集合啦!动物森友会 Nintendo Switch 2 Edition升级通行证",
  "雙影奇境": "双影奇境",
  "ONE PIECE 海賊無雙4 Nintendo Switch 2 Edition": "ONE PIECE 海贼无双4 Nintendo Switch 2 Edition",
  "集合啦！動物森友會 Nintendo Switch 2 Edition": "集合啦!动物森友会 Nintendo Switch 2 Edition",
  "巫師3：狂獵 — 重製版": "巫师3: 狂猎 — 重制版",
  "《暗黑破壞神® IV：憎恨時代合輯》": "暗黑破坏神 IV: 憎恨时代合辑",
  "超級瑪利歐派對 空前盛會 Nintendo Switch 2 Edition + 空前盛會TV": "超级玛利欧派对 空前盛会 Nintendo Switch 2 Edition + 空前盛会TV",
  "Dragon's Dogma 2: Dark Arisen": "龙之信条2：黑暗觉者",
  "軌道雙子星": "轨道双子星",
  "Maestro 大師指揮": "Maestro 大师指挥",
  "FINAL FANTASY VII REMAKE INTERGRADE Digital Deluxe Edition": "FINAL FANTASY VII REMAKE INTERGRADE Digital Deluxe Edition",
  "艾爾登法環 褪色者版 (ELDEN RING Tarnished Edition)": "艾尔登法环 褪色者版 (ELDEN RING Tarnished Edition)",
  "薩爾達傳說 曠野之息 Nintendo Switch 2 Edition": "萨尔达传说 旷野之息 Nintendo Switch 2 Edition",
  "Minecraft Dungeons II ": "我的世界 地下城2",
  "地球防衛軍5 for Nintendo Switch 2 DELUXE EDITION": "地球防卫军5 for Nintendo Switch 2 DELUXE EDITION",
  "真・三國無双２ with 猛将伝 Remastered Digital Deluxe Edition": "真・三国无双2 with 猛将传 Remastered 数字豪华版",
  "地球防衛軍5 for Nintendo Switch 2": "地球防卫军5 for Nintendo Switch 2",
  "FINAL FANTASY VII REBIRTH Digital Deluxe Edition": "FINAL FANTASY VII REBIRTH Digital Deluxe Edition",
  "テニスの王子様 も～っと 学園祭の王子様 ♡-40 and more... Nintendo Switch 2 Edition": "网球王子 学园祭的王子们 ♡-40 and more… Nintendo Switch 2 版",
  "ドラゴンクエストモンスターズ３　魔族の王子とエルフの旅　マスターズ版": "勇者斗恶龙怪兽篇3 魔族王子与精灵之旅 大师版",
  "ホグワーツ・レガシー: デジタルデラックスエディション\nHogwarts Legacy: Digital Deluxe Edition": "霍格沃茨之遗 数字豪华版",
  "ACE COMBAT™7: SKIES UNKNOWN DELUXE EDITION": "皇牌空战7：未知空域 豪华版",
  "God of War Laufey™ 数字豪华版 (中英韩文版)": "God of War Laufey 数字豪华版",
  "God of War Laufey™ 数字豪华版升级 (中英韩文版)": "God of War Laufey 数字豪华版升级",
  "Grand Theft Auto VI：终极版 (中英韩文版)": "Grand Theft Auto VI: 终极版",
  "Grand Theft Auto VI (中英韩文版)": "侠盗猎车手VI",
  "《EA SPORTS FC™ 27》标准版（PS4 和 PS5 版）": "EA SPORTS FC 27标准版(PS4 和 PS5 版)",
  "《EA SPORTS FC™ 27》终极版（PS4 和 PS5 版）": "EA SPORTS FC 27终极版(PS4 和 PS5 版)",
  "EA SPORTS FC™ 27 Lite": "EA SPORTS FC 27 Lite",
  "NBA 2K27 豪华版": "NBA 2K27 豪华版",
  "《NBA 2K27》": "NBA 2K27",
  "空战奇兵8 希孚之翼 (ACE COMBAT 8: WINGS OF THEVE) 数字豪华版": "空战奇兵8 希孚之翼 (ACE COMBAT 8: WINGS OF THEVE) 数字豪华版",
  "空战奇兵8 希孚之翼 (ACE COMBAT 8: WINGS OF THEVE)": "空战奇兵8 希孚之翼 (ACE COMBAT 8: WINGS OF THEVE)",
  "eFootball™: Lamine Yamal Edition 2027 [Deluxe]": "eFootball 拉明·亚马尔版2027 豪华版",
  "eFootball™: Lamine Yamal Edition 2027": "eFootball 拉明·亚马尔版2027",
  "eFootball™: Leo Messi Edition 2027 [Deluxe]": "eFootball 莱昂内尔·梅西版2027 豪华版",
  "eFootball™: Leo Messi Edition 2027": "eFootball 莱昂内尔·梅西版2027",
  "eFootball™": "eFootball",
  "影之刃零数字豪华版 (中日英韩文版)": "影之刃零数字豪华版",
  "影之刃零 (中日英韩文版)": "影之刃零",
  "《羊蹄山之魂》完整版": "羊蹄山之魂完整版",
  "《刺客信条：黑旗 记忆重置》豪华版": "刺客信条: 黑旗 记忆重置豪华版",
  "刺客信条：黑旗 记忆重置": "刺客信条: 黑旗 记忆重置",
  "控制: 共振": "控制: 共振",
  "鬼武者 Way of the Sword 高级豪华版": "鬼武者 Way of the Sword 高级豪华版",
  "鬼武者 Way of the Sword 豪华版": "鬼武者 Way of the Sword 豪华版",
  "鬼武者 Way of the Sword DEMO": "鬼武者 Way of the Sword DEMO",
  "崩坏：星穹铁道": "崩坏: 星穹铁道",
  "崩壞：星穹鐵道": "崩坏: 星穹铁道",
  "巫师3：狂猎 — 重制版": "巫师3: 狂猎 — 重制版",
  "Minecraft Dungeons II 豪华版": "Minecraft Dungeons II 豪华版",
  "《暗黑破坏神® IV》：憎恨的时代收藏": "暗黑破坏神 IV: 憎恨的时代收藏",
  "Diablo® IV - 标准版": "Diablo IV - 标准版",
  "伊莫": "伊莫",
  "原神-6周年": "原神-6周年",
  "原神-六週年": "原神-六周年",
  "燕云十六声（免费游玩）": "燕云十六声(免费游玩)",
  "燕雲十六聲（免費遊玩）": "燕云十六声(免费游玩)",
  "跑车浪漫旅 7": "跑车浪漫旅 7",
  "《跑车浪漫旅 7》25周年纪念数字豪华版": "跑车浪漫旅 725周年纪念数字豪华版",
  "《使命召唤®：现代战争® 4》金库版": "使命召唤: 现代战争 4金库版",
  "使命召唤®：现代战争® 4": "使命召唤: 现代战争 4",
  "《使命召唤®：黑色行动 7》跨越世代版": "使命召唤: 黑色行动 7跨越世代版",
  "《使命召唤®：黑色行动 6》跨越世代版": "使命召唤: 黑色行动 6跨越世代版",
  "《使命召唤®：现代战争® III 2023》跨越世代礼包": "使命召唤: 现代战争 III 2023跨越世代礼包",
  "《使命召唤®：现代战争®II 2022》跨越世代版": "使命召唤: 现代战争II 2022跨越世代版",
  "使命召唤®：战争地带™": "使命召唤: 战争地带",
  "《漫威金刚狼》": "漫威金刚狼",
  "《漫威金刚狼》数字豪华版": "漫威金刚狼数字豪华版",
  "博德之门3": "博德之门3",
  "博德之门3 - 数字豪华版": "博德之门3 - 数字豪华版",
  "潜水员戴夫": "潜水员戴夫",
  "潜水员戴夫 戴夫 & 一番捆绑包": "潜水员戴夫 戴夫 & 一番捆绑包",
  "Marvel’s Spider-Man 2": "漫威蜘蛛侠2",
  "《Marvel’s Spider-Man 2》数字豪华版": "Marvel's Spider-Man 2数字豪华版",
  "空之轨迹 the 2nd": "空之轨迹 the 2nd",
  "空之轨迹 the 2nd 数字豪华版": "空之轨迹 the 2nd 数字豪华版",
  "空之轨迹 the 2nd 体验版": "空之轨迹 the 2nd 体验版",
  "三角洲行动 (免费游玩)": "三角洲行动 (免费游玩)",
  "Delta Force": "三角洲行动",
  "Grand Theft Auto V（PS4™ 和 PS5™）": "Grand Theft Auto V(PS4 和 PS5)",
  "Grand Theft Auto 在线模式 (PlayStation®5)": "Grand Theft Auto 在线模式 (PlayStation5)",
  "Grand Theft Auto V及大白鲨现金卡捆绑包": "Grand Theft Auto V及大白鲨现金卡捆绑包",
  "红色沙漠：增强版": "红色沙漠: 增强版",
  "红色沙漠：增强豪华版": "红色沙漠: 增强豪华版",
  "七日世界（免费游戏）": "七日世界(免费游戏)",
  "空之轨迹 the 1st": "空之轨迹 the 1st",
  "空之轨迹 the 1st 数字豪华版": "空之轨迹 the 1st 数字豪华版",
  "空之轨迹 the 1st 体验版": "空之轨迹 the 1st 体验版",
  "SILENT HILL: Townfall - Deluxe Edition": "寂静岭：Townfall 豪华版",
  "The Last of Us™ Part II Remastered": "最后生还者 第二部 重制版",
  "The Last of Us™ Part II 数字豪华版": "The Last of Us Part II 数字豪华版",
  "The Last of Us™ Part II 普通版": "The Last of Us Part II 普通版",
  "鸣潮": "鸣潮",
  "Street Fighter 6 Demo": "街头霸王6 体验版",
  "艾尔登法环 黄金树幽影版 PS4 & PS5": "艾尔登法环 黄金树幽影版 PS4 & PS5",
  "艾尔登法环 PS4 & PS5": "艾尔登法环 PS4 & PS5",
  "艾尔登法环 黄金树幽影 数字典藏包 PS4 & PS5": "艾尔登法环 黄金树幽影 数字典藏包 PS4 & PS5",
  "艾尔登法环 黄金树幽影 数字豪华版 PS4 & PS5": "艾尔登法环 黄金树幽影 数字豪华版 PS4 & PS5",
  "《刺客信条：影》数字豪华版": "刺客信条: 影数字豪华版",
  "《刺客信条：影》高级版": "刺客信条: 影高级版",
  "《刺客信条：影》": "刺客信条: 影",
  "The Last of Us™ Part I": "最后生还者 第一部",
  "《The Last of Us™ Part I》数字豪华版": "The Last of Us Part I数字豪华版",
  "黑神话：悟空": "黑神话: 悟空",
  "黑神话：悟空 数字豪华版": "黑神话: 悟空 数字豪华版",
  "《FINAL FANTASY RESONANCE》第一章抢先体验版 (日语, 英语)": "FINAL FANTASY RESONANCE第一章抢先体验版",
  "《FINAL FANTASY RESONANCE》第一章抢先体验版": "FINAL FANTASY RESONANCE第一章抢先体验版",
  "双影奇境": "双影奇境",
  "《双影奇境》 - 好友通行证": "双影奇境 - 好友通行证",
  "极限竞速：地平线 5 标准版": "极限竞速: 地平线 5 标准版",
  "极限竞速：地平线 5 顶级版": "极限竞速: 地平线 5 顶级版",
  "极限竞速：地平线 5 豪华版": "极限竞速: 地平线 5 豪华版",
  "异环": "异环",
  "異環": "异环",
  "Dragon&#x27;s Dogma 2: Dark Arisen": "龙之信条2：黑暗觉者",
  "Dragon&#x27;s Dogma 2": "龙之信条2",
  "Dragon&#x27;s Dogma 2 角色编辑＆保存": "龙之信条2 创建&保存角色",
  "《刺客信条：奥德赛》终极版": "刺客信条: 奥德赛终极版",
  "《刺客信条：奥德赛》 - 数码标准版": "刺客信条: 奥德赛 - 数码标准版",
  "《刺客信条》古典组合包": "刺客信条古典组合包",
  "《刺客信条：奥德赛》豪华版": "刺客信条: 奥德赛豪华版",
  "《刺客信条：奥德赛》- 数码黄金版": "刺客信条: 奥德赛- 数码黄金版",
  "「《刺客信条：奥德赛》- 数码黄金版」+「《刺客信条：起源》 - 数码黄金版」同捆包": "刺客信条: 奥德赛- 数码黄金版+刺客信条: 起源 - 数码黄金版同捆包",
  "「《刺客信条：奥德赛》- 数码黄金版」+「《刺客信条：艾吉奥合辑》- 数码标准版」同捆包": "刺客信条: 奥德赛- 数码黄金版+刺客信条: 艾吉奥合辑- 数码标准版同捆包",
  "《绝区零》": "绝区零",
  "絕區零": "绝区零",
  "Apex Legends™ PS4™": "Apex英雄 PS4",
  "Apex Legends™ PS5": "Apex英雄 PS5",
  "《Apex 英雄》": "Apex 英雄",
  "全境封锁2 (中日英韩文版)": "全境封锁2",
  "《全境封锁 2》- 黄金版 (中日英韩文版)": "全境封锁 2- 黄金版",
  "全境封锁2 - 精英版 (中日英韩文版)": "全境封锁2 - 精英版",
  "全境封锁2 - 传奇版 (中日英韩文版)": "全境封锁2 - 传奇版",
  "全境封锁2 - 终极版 (中日英韩文版)": "全境封锁2 - 终极版",
  "Bloodborne™ The Old Hunters Edition (中英韩文版)": "血源诅咒 老猎人版",
  "Bloodborne™ PlayStation®Hits (中英韩文版)": "血源诅咒 PlayStation Hits",
  "WORLD OF WARSHIPS: LEGENDS": "战舰世界：传奇",
  "Microsoft Flight Simulator 2024- Standard Edition": "微软飞行模拟2024 标准版",
  "Microsoft Flight Simulator 2024 - Premium Deluxe Edition": "微软飞行模拟2024 高级豪华版",
  "Microsoft Flight Simulator 2024 - Deluxe Edition": "微软飞行模拟2024 豪华版",
  "Microsoft Flight Simulator 2024 -  Aviator Edition": "微软飞行模拟2024 飞行员版",
  "PS5®版《NBA 2K26》": "PS5版NBA 2K26",
  "《NBA 2K26》超级明星版": "NBA 2K26超级明星版",
  "《NBA 2K26》x《PGA TOUR 2K25》同捆包": "NBA 2K26xPGA TOUR 2K25同捆包",
  "《NBA 2K26》x《WWE 2K25》同捆包": "NBA 2K26xWWE 2K25同捆包",
  "《NBA 2K26》SLAM版": "NBA 2K26SLAM版",
  "EA SPORTS™ 开球同捆包（《Madden NFL 27》和《College Football 27》） (英语)": "EA SPORTS 开球同捆包(Madden NFL 27和College Football 27)",
  "《EA SPORTS™ Madden NFL 27》豪华版 (英语)": "EA SPORTS Madden NFL 27豪华版",
  "EA SPORTS™ MVP 同捆包（《College Football 27》豪华版和《Madden NFL 27》豪华版） (英语)": "EA SPORTS MVP 同捆包(College Football 27豪华版和Madden NFL 27豪华版)",
  "剑星": "剑星",
  "《剑星》完整版": "剑星完整版",
  "宇宙机器人": "宇宙机器人",
  "《宇宙机器人》数字豪华版": "宇宙机器人数字豪华版",
  "战争雷霆 制品版 (日语, 英语)": "战争雷霆 制品版",
  "战争雷霆 (英语)": "战争雷霆",
  "Monster Hunter Wilds 黄金版": "Monster Hunter Wilds 黄金版",
  "我的世界": "我的世界",
  "《我的世界 豪华系列》": "我的世界 豪华系列",
  "双人成行 PS4™ 和 PS5™": "双人成行 PS4 和 PS5",
  "Hazelight 同捆包": "Hazelight 同捆包",
  "双人成行——好友通行证 PS4™": "双人成行——好友通行证 PS4",
  "双人成行——好友通行证 PS5™": "双人成行——好友通行证 PS5",
  "战地风云™ 6": "战地风云 6",
  "《战地风云™ 6》魅影版": "战地风云 6魅影版",
  "无限暖暖": "无限暖暖",
  "無限暖暖": "无限暖暖",
  "仁王3 数字豪华版": "仁王3 数字豪华版",
  "仁王3 数字豪华版 (日语, 韩语, 英语)": "仁王3 数字豪华版",
  "仁王３": "仁王3",
  "仁王３ (日语, 韩语, 英语)": "仁王3",
  "仁王3　体验版 (日语, 韩语, 英语)": "仁王3 体验版",
  "仁王3　体验版": "仁王3 体验版",
  "《使命召唤®：黑色行动冷战》跨越世代版 PS4™ & PS5™": "使命召唤: 黑色行动冷战跨越世代版 PS4 & PS5",
  "《使命召唤®：黑色行动冷战》标准版": "使命召唤: 黑色行动冷战标准版",
  "《孤岛惊魂6》年度版": "孤岛惊魂6年度版",
  "孤岛惊魂6": "孤岛惊魂6",
  "Far Cry® 6 FREE Trial": "孤岛惊魂6 体验版",
  "《孤岛惊魂6》豪华版": "孤岛惊魂6豪华版",
  "《孤岛惊魂6》黄金版": "孤岛惊魂6黄金版",
  "《孤岛惊魂》精选捆绑包": "孤岛惊魂精选捆绑包",
  "机动战士高达 激战任务2": "机动战士高达 激战任务2",
  "机动战士高达 激战任务２": "机动战士高达 激战任务2",
  "MOBILE SUIT GUNDAM BATTLE OPERATION 2": "机动战士高达 激战任务2",
  "三国志14 威力加强传承版套装 PS5": "三国志14 威力加强传承版套装 PS5",
  "三国志14 威力加强版套装": "三国志14 威力加强版套装",
  "三国志 14 (英语)": "三国志 14",
  "三国志 14 数字豪华版 (英语)": "三国志 14 数字豪华版",
  "三国志14 威力加强版套装 (英语)": "三国志14 威力加强版套装",
  "三国志14 威力加强版套装 数字豪华版 (英语)": "三国志14 威力加强版套装 数字豪华版",
  "The Blood of Dawnwalker 黎明行者之血": "The Blood of Dawnwalker 黎明行者之血",
  "The Blood of Dawnwalker 黎明行者之血 日蚀版": "The Blood of Dawnwalker 黎明行者之血 日蚀版",
  "猛兽派对": "猛兽派对",
  "猛兽派对豪华版": "猛兽派对豪华版",
  "REANIMAL DEMO": "生灵重塑 体验版",
  "World of Tanks Modern Armor (日语, 英语)": "World of Tanks Modern Armor – 极速恶魔",
  "World of Tanks Modern Armor – 极速恶魔 (日语, 英语)": "World of Tanks Modern Armor – 极速恶魔",
  "World of Tanks Modern Armor – 神准伙伴 (日语, 英语)": "World of Tanks Modern Armor – 神准伙伴",
  "World of Tanks Modern Armor": "World of Tanks Modern Armor",
  "Black Desert : Standard Edition": "黑色沙漠 标准版",
  "Black Desert : Mythical Edition": "黑色沙漠 神话版",
  "Call of Duty®: Modern Warfare® 2 Campaign Remastered": "使命召唤：现代战争2 战役重制版",
  "Resident Evil 4 PS4 & PS5": "生化危机4 PS4 & PS5",
  "Resident Evil 4 Gold Edition PS4 & PS5": "生化危机4 黄金版 PS4 & PS5",
  "Resident Evil 4 VR模式游戏体验版": "Resident Evil 4 VR模式游戏体验版",
  "《The Sims™ 4》": "模拟人生4",
  "The Sims™ 4": "模拟人生4",
  "真・三国无双 起源": "真・三国无双 起源",
  "真・三国无双 起源 数字豪华版": "真・三国无双 起源 数字豪华版",
  "真・三国无双 起源 (日语, 韩语, 英语)": "真・三国无双 起源",
  "真・三国无双 起源 体验版": "真・三国无双 起源 体验版",
  "真・三国无双 起源 体验版 (日语, 韩语, 英语)": "真・三国无双 起源 体验版",
  "真・三国无双 起源 数字豪华版 (日语, 韩语, 英语)": "真・三国无双 起源 数字豪华版",
  "NINJA GAIDEN 4 豪华版": "NINJA GAIDEN 4 豪华版",
  "《疯狂兔子：奇遇派对》": "疯狂兔子: 奇遇派对",
  "Overcooked! 2 - Gourmet Edition": "胡闹厨房2 美食版",
  "Red Dead Redemption 2": "Red Dead Redemption 2",
  "Red Dead Redemption 2：终极版": "Red Dead Redemption 2: 终极版",
  "Red Dead 在线模式": "Red Dead 在线模式",
  "Wo Long 2: Wings of Ember Digital Deluxe Edition (中日英韩文版)": "卧龙2：凤火连天 数字豪华版",
  "Wo Long 2: Wings of Ember（卧龙2：凤火连天） (中日英韩文版)": "Wo Long 2: Wings of Ember(卧龙2: 凤火连天)",
  "《赛博朋克 2077》": "赛博朋克 2077",
  "《赛博朋克 2077：终极版》 (PS5)": "赛博朋克 2077: 终极版 (PS5)",
  "看门狗 2 - 数码标准版 PlayStation®Hits": "看门狗 2 - 数码标准版 PlayStationHits",
  "看门狗 2 - 数码黄金版": "看门狗 2 - 数码黄金版",
  "《看门狗》+《看门狗 2》标准版捆绑包": "看门狗+看门狗 2标准版捆绑包",
  "看门狗 2 - 体验版": "看门狗 2 - 体验版",
  "神界：原罪2 - 终极版 PS4 & PS5": "神界: 原罪2 - 终极版 PS4 & PS5",
  "Warframe® (英语)": "Warframe 制品版",
  "Warframe® 制品版 (中日英韩文版)": "Warframe 制品版",
  "Warframe": "Warframe 星际战甲",
  "Resident Evil Requiem 豪华版": "Resident Evil Requiem 豪华版",
  "Resident Evil Requiem - Demo": "Resident Evil Requiem - Demo",
  "HELLDIVERS™ 2": "HELLDIVERS 2",
  "《HELLDIVERS™ 2》超级公民版": "HELLDIVERS 2超级公民版",
  "Alan Wake 2 Deluxe Edition": "心灵杀手2 豪华版",
  "007 First Light - 豪华版": "007 First Light - 豪华版",
  "Wo Long: Fallen Dynasty Complete Edition (PS4 & PS5)": "卧龙：苍天陨落 完整版 (PS4 & PS5)",
  "《彩虹六号：围攻》- 终极版": "彩虹六号: 围攻- 终极版",
  "《彩虹六号：围攻》- 精英版": "彩虹六号: 围攻- 精英版",
  "《彩虹六号：围攻》- 免费版": "彩虹六号: 围攻- 免费版",
  "《虹彩六號：圍攻行動 》": "虹彩六号: 围攻行动",
  "FINAL FANTASY XVI 完全版": "FINAL FANTASY XVI 完全版",
  "FINAL FANTASY XVI DEMO": "最终幻想XVI 体验版",
  "Transport Fever 3: 豪华版": "Transport Fever 3: 豪华版",
  "超级机器人大战Y 数字终极版": "超级机器人大战Y 数字终极版",
  "超级机器人大战Y 数字豪华版": "超级机器人大战Y 数字豪华版",
  "超级机器人大战Y 体验版": "超级机器人大战Y 体验版",
  "超级机器人大战Y": "超级机器人大战Y",
  "FINAL FANTASY VII REBIRTH Digital Deluxe Edition (中韩文版)": "FINAL FANTASY VII REBIRTH Digital Deluxe Edition",
  "FINAL FANTASY VII REBIRTH (中韩文版)": "FINAL FANTASY VII REBIRTH",
  "FINAL FANTASY VII REBIRTH (日语, 英语)": "最终幻想VII 重生",
  "FINAL FANTASY VII REBIRTH DEMO (中韩文版)": "FINAL FANTASY VII REBIRTH DEMO",
  "FINAL FANTASY VII REBIRTH DEMO (日语, 英语)": "最终幻想VII 重生 体验版",
  "明日方舟：终末地": "明日方舟: 终末地",
  "明日方舟：終末地": "明日方舟: 终末地",
  "Moving Out 2 - Deluxe Edition": "Moving Out 2 - Deluxe Edition",
  "勇者斗恶龙 VII Reimagined": "勇者斗恶龙 VII Reimagined",
  "勇者斗恶龙 VII Reimagined 数字豪华版": "勇者斗恶龙 VII Reimagined 数字豪华版",
  "勇者斗恶龙 VII Reimagined 数字豪华版 (日语, 英语)": "勇者斗恶龙 VII Reimagined 数字豪华版",
  "勇者斗恶龙 VII Reimagined (日语, 英语)": "勇者斗恶龙 VII Reimagined",
  "勇者斗恶龙 VII Reimagined 率先启程体验版 (日语, 英语)": "勇者斗恶龙 VII Reimagined 率先启程体验版",
  "勇者斗恶龙 VII Reimagined 率先启程体验版": "勇者斗恶龙 VII Reimagined 率先启程体验版",
  "THE FIRST DESCENDANT": "第一后裔",
  "人中之龙８　究极版　PS4 & PS5": "人中之龙8 究极版 PS4 & PS5",
  "人中之龙８ PS4 & PS5": "人中之龙8 PS4 & PS5",
  "人中之龙８　豪华版　PS4 & PS5": "人中之龙8 豪华版 PS4 & PS5",
  "《使命召唤®：先锋》跨越世代版": "使命召唤: 先锋跨越世代版",
  "《使命召唤®：先锋》标准版": "使命召唤: 先锋标准版",
  "ONE PIECE 海贼无双4 PS4 & PS5": "ONE PIECE 海贼无双4 PS4 & PS5",
  "ONE PIECE 海贼无双 4 数字传奇版 PS4 & PS5": "ONE PIECE 海贼无双 4 数字传奇版 PS4 & PS5",
  "ONE PIECE 海贼无双4 数字终极版 PS4 & PS5": "ONE PIECE 海贼无双4 数字终极版 PS4 & PS5",
  "UFC™ 6": "UFC 6",
  "《UFC™ 6》终极版": "UFC 6终极版",
  "《Until Dawn 2》数字豪华版 (中日英韩文版)": "Until Dawn 2数字豪华版",
  "数码宝贝物语 时空异客 数字终极版": "数码宝贝物语 时空异客 数字终极版",
  "数码宝贝物语 时空异客": "数码宝贝物语 时空异客",
  "数码宝贝物语 时空异客 数字豪华版": "数码宝贝物语 时空异客 数字豪华版",
  "数码宝贝物语 时空异客 体验版": "数码宝贝物语 时空异客 体验版",
  "FINAL FANTASY XV ROYAL EDITION": "最终幻想XV 皇家版",
  "FINAL FANTASY XV ROYAL EDITION (日语, 英语)": "最终幻想XV 皇家版",
  "《渡神纪 芬尼斯崛起》- 数字黄金版 PS4 & PS5": "渡神纪 芬尼斯崛起- 数字黄金版 PS4 & PS5",
  "《渡神纪 芬尼斯崛起》- 数字标准版 PS4 & PS5": "渡神纪 芬尼斯崛起- 数字标准版 PS4 & PS5",
  "《渡神纪 芬尼斯崛起》 - 免费体验版": "渡神纪 芬尼斯崛起 - 免费体验版",
  "《地平线 西之绝境™》完整版": "地平线 西之绝境完整版",
  "《地平线 西之绝境™》": "地平线 西之绝境",
  "Horizon Forbidden West™": "Horizon Forbidden West",
  "人中之龙 极３ / 人中之龙３外传 Dark Ties 豪华版 PS4 & PS5": "人中之龙 极3 / 人中之龙3外传 Dark Ties 豪华版 PS4 & PS5",
  "人中之龙 极３ / 人中之龙３外传 Dark Ties PS4 & PS5": "人中之龙 极3 / 人中之龙3外传 Dark Ties PS4 & PS5",
  "人中之龙 极３ / 人中之龙３外传 Dark Ties 体验版": "人中之龙 极3 / 人中之龙3外传 Dark Ties 体验版",
  "Ready or Not: Digital Deluxe Edition": "严阵以待 数字豪华版",
  "深海迷航": "深海迷航",
  "漫威争锋": "漫威争锋",
  "漫威爭鋒": "漫威争锋",
  "无主之地®4": "无主之地4",
  "《无主之地® 4》超级豪华版": "无主之地 4超级豪华版",
  "《无主之地® 4》豪华版": "无主之地 4豪华版",
  "永劫无间": "永劫无间",
  "永劫無間": "永劫无间",
  "《飙酷车神：轰鸣盛典》跨世代捆绑包": "飙酷车神: 轰鸣盛典跨世代捆绑包",
  "《飙酷车神：轰鸣盛典》第 3 年终极版": "飙酷车神: 轰鸣盛典第 3 年终极版",
  "《飙酷车神：轰鸣盛典》豪华版": "飙酷车神: 轰鸣盛典豪华版",
  "《飙酷车神：轰鸣盛典》": "飙酷车神: 轰鸣盛典",
  "《飙酷车神：轰鸣盛典》第 2 年终极版": "飙酷车神: 轰鸣盛典第 2 年终极版",
  "猎人：荒野的召唤™": "猎人: 荒野的召唤",
  "theHunter: Call of the Wild™ - Ultimate Hunting Bundle": "猎人：荒野的召唤 终极狩猎组合包",
  "《猎人：荒野的召唤™》——职业猎人包": "猎人: 荒野的召唤——职业猎人包",
  "《猎人：荒野的召唤™》——狩猎新手同捆包": "猎人: 荒野的召唤——狩猎新手同捆包",
  "《古墓丽影：亚特兰蒂斯遗迹》 (中日英韩文版)": "古墓丽影: 亚特兰蒂斯遗迹",
  "NieR:Automata DEMO 120161128 (中韩文版)": "尼尔：机械纪元 体验版 120161128",
  "三国志8 REMAKE 威力加强版套装": "三国志8 REMAKE 威力加强版套装",
  "三国志8 REMAKE (PS4 & PS5)": "三国志8 REMAKE (PS4 & PS5)",
  "三国志8 REMAKE 数字豪华版 (PS4 & PS5)": "三国志8 REMAKE 数字豪华版 (PS4 & PS5)",
  "三国志8 REMAKE (PS4 & PS5) (英语)": "三国志8 REMAKE (PS4 & PS5)",
  "三国志8 REMAKE 数字豪华版 (PS4 & PS5) (英语)": "三国志8 REMAKE 数字豪华版 (PS4 & PS5)",
  "三国志8 REMAKE 威力加强版套装 (英语)": "三国志8 REMAKE 威力加强版套装",
  "狂野飙车：竞速传奇": "狂野飙车: 竞速传奇",
  "狂野飆車：競速傳奇": "狂野飙车: 竞速传奇",
  "七龙珠 电光炸裂！ZERO": "七龙珠 电光炸裂!ZERO",
  "七龙珠 电光炸裂！ZERO 数字传奇版": "七龙珠 电光炸裂!ZERO 数字传奇版",
  "七龙珠 电光炸裂！ZERO 极限超突破NEO版": "七龙珠 电光炸裂!ZERO 极限超突破NEO版",
  "3on3 街头篮球": "3on3 街头篮球",
  "3对3街头篮球": "3对3街头篮球",
  "3on3 FreeStyle": "3对3街头篮球",
  "Warhammer 40,000: Space Marine 2": "Warhammer 40,000: Space Marine 2",
  "晶核": "晶核",
  "《Sackboy: A Big Adventure》数字豪华版 PS4 & PS5": "Sackboy: A Big Adventure数字豪华版 PS4 & PS5",
  "Sackboy: A Big Adventure PS4 & PS5": "麻布仔大冒险 PS4 & PS5",
  "《Sackboy: A Big Adventure》数字豪华版升级包": "Sackboy: A Big Adventure数字豪华版升级包",
  "Dune: Awakening 沙丘：觉醒": "Dune: Awakening 沙丘: 觉醒",
  "Dune: Awakening 沙丘：觉醒 - 豪华版": "Dune: Awakening 沙丘: 觉醒 - 豪华版",
  "Dune: Awakening 沙丘：觉醒 - 终极版": "Dune: Awakening 沙丘: 觉醒 - 终极版",
  "FINAL FANTASY VII REMAKE INTERGRADE Digital Deluxe Edition （中韩文版）": "FINAL FANTASY VII REMAKE INTERGRADE Digital Deluxe Edition",
  "FINAL FANTASY VII REMAKE Digital Deluxe Edition": "FINAL FANTASY VII REMAKE Digital Deluxe Edition",
  "FINAL FANTASY VII REMAKE INTERGRADE （中韩文版）": "FINAL FANTASY VII REMAKE INTERGRADE",
  "FINAL FANTASY VII REMAKE INTERGRADE Digital Deluxe Edition （日英文版） (日语, 英语)": "最终幻想VII 重制版 Intergrade 数字豪华版",
  "FINAL FANTASY VII REMAKE INTERGRADE （日英文版） (日语, 英语)": "最终幻想VII 重制版 Intergrade",
  "FINAL FANTASY VII REMAKE DEMO (中韩文版)": "FINAL FANTASY VII REMAKE DEMO",
  "FINAL FANTASY VII REMAKE DEMO": "FINAL FANTASY VII REMAKE DEMO",
  "《F1® 25》：2026赛季版": "F1 25: 2026赛季版",
  "F1® 25": "F1 25",
  "Marvel&#x27;s Spider-Man: Miles Morales PS4 & PS5": "漫威蜘蛛侠：迈尔斯·莫拉莱斯 PS4 & PS5",
  "Marvel&#x27;s Spider-Man: Miles Morales Ultimate Edition": "漫威蜘蛛侠：迈尔斯·莫拉莱斯 终极版",
  "Kingdom Come: Deliverance II Royal Edition": "Kingdom Come: Deliverance II Royal Edition",
  "Kingdom Come: Deliverance II": "Kingdom Come: Deliverance II",
  "Battlefield™ 1": "战地1",
  "Battlefield™ 1 Revolution": "战地1 革命版",
  "Battlefield™ 1与Titanfall™ 2终极同捆包": "Battlefield 1与Titanfall 2终极同捆包",
  "碧蓝幻想Relink 无尽黄昏（普通版）": "碧蓝幻想Relink 无尽黄昏(普通版)",
  "碧蓝幻想Relink 无尽黄昏（特别版）": "碧蓝幻想Relink 无尽黄昏(特别版)",
  "Granblue Fantasy: Relink Standard Edition PS4＆PS5": "碧蓝幻想：Relink 标准版 PS4&PS5",
  "碧蓝幻想Relink 无尽黄昏 Demo": "碧蓝幻想Relink 无尽黄昏 Demo",
  "《刺客信条：幻景》+《刺客信条：英灵殿》同捆包": "刺客信条: 幻景+刺客信条: 英灵殿同捆包",
  "《刺客信条：幻景》": "刺客信条: 幻景",
  "《刺客信条：幻景》 - 刺客大师版": "刺客信条: 幻景 - 刺客大师版",
  "《刺客信条：幻景》豪华版": "刺客信条: 幻景豪华版",
  "《NBA 2K25》全明星版": "NBA 2K25全明星版",
  "《NBA 2K25》标准版": "NBA 2K25标准版",
  "《NBA 2K25》锦标赛版": "NBA 2K25锦标赛版",
  "《WWE 2K26》标准版 (英语)": "WWE 2K26标准版",
  "《WWE 2K26》King of Kings版 (英语)": "WWE 2K26标准版",
  "《WWE 2K26》狂野年代版 (英语)": "WWE 2K26狂野年代版",
  "《WWE 2K26》Monday Night War版 (英语)": "WWE 2K26标准版",
  "铁拳8 Season2 Deluxe Edition": "铁拳8 Season2 Deluxe Edition",
  "铁拳8 Season2 Ultimate Edition": "铁拳8 Season2 Ultimate Edition",
  "铁拳8": "铁拳8",
  "铁拳8 Advanced Edition": "铁拳8 Advanced Edition",
  "《守望先锋®》": "守望先锋",
  "《守望先锋®》 (英语)": "守望先锋",
  "《鬥陣特攻®》": "斗阵特攻",
  "《极限国度》豪华版": "极限国度豪华版",
  "《极限国度》高级版": "极限国度高级版",
  "《极限国度》 PS4 & PS5": "极限国度 PS4 & PS5",
  "STRANGER THAN HEAVEN 豪华版 (中日英韩文版)": "STRANGER THAN HEAVEN 豪华版",
  "《致命躯壳 II：虔诚版》": "致命躯壳 II: 虔诚版",
  "《致命躯壳 II》": "致命躯壳 II",
  "《致命躯壳 II》公开测试": "致命躯壳 II公开测试",
  "七龙珠 异战2": "七龙珠 异战2",
  "七龙珠 异战2 (日语)": "七龙珠 异战2",
  "七龙珠 异战2 数字特别版": "七龙珠 异战2 数字特别版",
  "七龙珠 异战2 数字豪华版": "七龙珠 异战2 数字豪华版",
  "七龙珠 异战2 体验版 (日语)": "七龙珠 异战2 体验版",
  "七龙珠 异战2 体验版": "七龙珠 异战2 体验版",
  "HITMAN World of Assassination Deluxe Edition": "杀手：暗杀世界 豪华版",
  "双点博物馆：探索者版": "双点博物馆: 探索者版",
  "双点博物馆": "双点博物馆",
  "NARUTO X BORUTO 火影忍者 终极风暴羁绊 豪华数字版 PS4™ & PS5®": "NARUTO X BORUTO 火影忍者 终极风暴羁绊 豪华数字版 PS4 & PS5",
  "NARUTO X BORUTO 火影忍者 终极风暴羁绊 乐曲终极数字版 PS4™ & PS5®": "NARUTO X BORUTO 火影忍者 终极风暴羁绊 乐曲终极数字版 PS4 & PS5",
  "NARUTO X BORUTO 火影忍者 终极风暴羁绊 PS4™ & PS5®": "NARUTO X BORUTO 火影忍者 终极风暴羁绊 PS4 & PS5",
  "星之翼（Starward）": "星之翼(Starward)",
  "女神异闻录４ Revival (中日英韩文版)": "女神异闻录4 Revival",
  "女神异闻录４ Revival: 数字高级版 (中日英韩文版)": "女神异闻录4 Revival: 数字高级版",
  "女神异闻录４ Revival: 数字豪华版 (中日英韩文版)": "女神异闻录4 Revival: 数字豪华版",
  "梦之形": "梦之形",
  "《Sky光·遇》": "Sky光·遇",
  "Halo: Campaign Evolved": "Halo: Campaign Evolved",
  "Halo: Campaign Evolved - 高级版": "Halo: Campaign Evolved - 高级版",
  "DEAD OR ALIVE Xtreme 沙滩排球 3 Fortune (中英韩文版)": "DEAD OR ALIVE Xtreme 沙滩排球 3 Fortune",
  "DEAD OR ALIVE Xtreme 沙滩排球 3 Fortune 基本免费版 (中英韩文版)": "DEAD OR ALIVE Xtreme 沙滩排球 3 Fortune 基本免费版",
  "DEAD OR ALIVE Xtreme 3 Fortune": "DEAD OR ALIVE Xtreme 沙滩排球 3 Fortune",
  "潜行者 2：切尔诺贝利之心 - 终极版": "潜行者 2: 切尔诺贝利之心 - 终极版",
  "潜行者2：切尔诺贝利之心": "潜行者2: 切尔诺贝利之心",
  "潜行者 2：切尔诺贝利之心 - 豪华版": "潜行者 2: 切尔诺贝利之心 - 豪华版",
  "小小梦魇3": "小小梦魇3",
  "小小梦魇3 数字豪华版": "小小梦魇3 数字豪华版",
  "Little Nightmares III - Free Trial & Friend&#x27;s Pass": "小小梦魇III 免费体验版与好友通行证",
  "光与影：33号远征队": "光与影: 33号远征队",
  "光与影：33号远征队 豪华版": "光与影: 33号远征队 豪华版",
  "THE FINALS - Year 1 Deluxe Edition": "THE FINALS Year 1 豪华版",
  "RESIDENT EVIL 2 Deluxe Edition": "生化危机2 重制版 豪华版",
  "《侏罗纪世界：进化 3》豪华版": "侏罗纪世界: 进化 3豪华版",
  "侏罗纪世界：进化 3": "侏罗纪世界: 进化 3",
  "《侏罗纪世界：进化 3》重生包。": "侏罗纪世界: 进化 3重生包。",
  "《暗黑破坏神2》重制版 - 终极包": "暗黑破坏神2重制版 - 终极包",
  "植物大战僵尸™：重植版": "植物大战僵尸: 重植版",
  "勇者斗恶龙XI S 寻觅逝去的时光 - Definitive Edition": "勇者斗恶龙XI S 寻觅逝去的时光 - Definitive Edition",
  "DRAGON QUEST XI S: Echoes of an Elusive Age – Definitive Edition (英语)": "勇者斗恶龙XI S 寻觅逝去的时光 决定版",
  "《勇者斗恶龙XI S 寻觅逝去的时光 - Definitive Edition》体验版": "勇者斗恶龙XI S 寻觅逝去的时光 - Definitive Edition体验版",
  "《勇者斗恶龙XI S 寻觅逝去的时光 - Definitive Edition》体验版 (英语)": "勇者斗恶龙XI S 寻觅逝去的时光 - Definitive Edition体验版",
  "小小梦魇 强化版": "小小梦魇 强化版",
  "小小梦魇 强化版 - 数字完全版": "小小梦魇 强化版 - 数字完全版",
  "Little Nightmares Trial (中韩文版)": "小小梦魇 体验版",
  "《阿凡达：潘多拉边境™》完整版": "阿凡达: 潘多拉边境完整版",
  "阿凡达：潘多拉边境": "阿凡达: 潘多拉边境",
  "浴火重生版 - 《阿凡达：潘多拉边境™》": "浴火重生版 - 阿凡达: 潘多拉边境",
  "KINGDOM HEARTS HD 2.8 Final Chapter Prologue (英语)": "王国之心 HD 2.8 终章序幕",
  "KINGDOM HEARTS -HD 1.5+2.5 ReMIX- (英语)": "王国之心 -HD 1.5+2.5 ReMIX-",
  "KINGDOM HEARTS -HD 1.5+2.5 ReMIX- (日语)": "王国之心 -HD 1.5+2.5 ReMIX-",
  "KINGDOM HEARTS HD 2.8 Final Chapter Prologue (日语)": "王国之心 HD 2.8 终章序幕",
  "真人快打11": "真人快打11",
  "真人快打11终极版 PS4 & PS5": "真人快打11终极版 PS4 & PS5",
  "真人快打11：余波」典藏版": "真人快打11: 余波典藏版",
  "《真人快打11终极版》+《Injustice™ 2》 - 传奇版捆绑包": "真人快打11终极版+Injustice 2 - 传奇版捆绑包",
  "孤山独影": "孤山独影",
  "孤山独影——豪华版": "孤山独影——豪华版",
  "《GigaBash 巨击大乱斗》": "GigaBash 巨击大乱斗",
  "Cuphead (中日英韩文版)": "茶杯头",
  "Cuphead & The Delicious Last Course (游戏)": "Cuphead & The Delicious Last Course (游戏)",
  "《消逝的光芒：困兽》失地复苏豪华版": "消逝的光芒: 困兽失地复苏豪华版",
  "《消逝的光芒：困兽》": "消逝的光芒：困兽",
  "《消逝的光芒：困兽》失地复苏决定版": "消逝的光芒: 困兽失地复苏决定版",
  "《席德·梅尔的文明VI 典藏版》": "席德·梅尔的文明VI 典藏版",
  "《席德·梅尔的文明VI》": "席德·梅尔的文明VI",
  "《席德·梅尔的文明VI 白金版》": "席德·梅尔的文明VI 白金版",
  "《使命召唤®：二战》数字豪华版 (中英韩文版)": "使命召唤: 二战数字豪华版",
  "使命召唤®：二战 (中英韩文版)": "使命召唤: 二战",
  "明末：渊虚之羽": "明末: 渊虚之羽",
  "《明末：渊虚之羽》豪华版": "明末: 渊虚之羽豪华版",
  "黯井微光": "黯井微光",
  "Marvel&#x27;s Spider-Man Remastered": "漫威蜘蛛侠 重制版",
  "Marvel&#x27;s Spider-Man Game Of The Year Edition": "漫威蜘蛛侠 年度版",
  "Fallout 76 PS4 & PS5": "辐射76 PS4 & PS5",
  "七龙珠Z 卡卡洛特 MASTER EDITION PS4 & PS5": "七龙珠Z 卡卡洛特 MASTER EDITION PS4 & PS5",
  "七龙珠Z 卡卡洛特 PS4&PS5": "七龙珠Z 卡卡洛特 PS4&PS5",
  "七龙珠Z 卡卡洛特 DAIMA EDITION PS4 & PS5": "七龙珠Z 卡卡洛特 DAIMA EDITION PS4 & PS5",
  "七龙珠Z 卡卡洛特 体验版": "七龙珠Z 卡卡洛特 体验版",
  "席德·梅尔的文明®VII": "席德·梅尔的文明VII",
  "《席德·梅尔的文明VII》开拓者版": "席德·梅尔的文明VII开拓者版",
  "《席德·梅尔的文明®VII》豪华版": "席德·梅尔的文明VII豪华版",
  "《动物园之星 2》豪华版": "动物园之星 2豪华版",
  "《动物园之星 2》": "动物园之星 2",
  "刺客信条：艾吉奥合集": "刺客信条: 艾吉奥合集",
  "「《刺客信条：枭雄》 - 数码黄金版」+「《刺客信条：艾吉奥合辑》 - 数码标准版」同捆包": "刺客信条: 枭雄 - 数码黄金版+刺客信条: 艾吉奥合辑 - 数码标准版同捆包",
  "Sniper Elite: Resistance PS4™ & PS5™": "狙击精英：抵抗 PS4 & PS5",
  "Sniper Elite: Resistance Deluxe Edition PS4™ & PS5™": "狙击精英：抵抗 豪华版 PS4 & PS5",
  "《刺客信条：英灵殿》- 数字标准版 PS4 & PS5": "刺客信条: 英灵殿- 数字标准版 PS4 & PS5",
  "《刺客信条：英灵殿》+《渡神纪 芬尼斯崛起》同捆包": "刺客信条: 英灵殿+渡神纪 芬尼斯崛起同捆包",
  "《刺客信条》神话同捆包": "刺客信条神话同捆包",
  "刺客信条：英灵殿 - 完全版": "刺客信条: 英灵殿 - 完全版",
  "刺客信条：英灵殿 - 豪华版": "刺客信条: 英灵殿 - 豪华版",
  "刺客信条：英灵殿 - 诸神黄昏版": "刺客信条: 英灵殿 - 诸神黄昏版",
  "《刺客信条：英灵殿》+《看门狗：军团》同捆包": "刺客信条: 英灵殿+看门狗: 军团同捆包",
  "愚者不灭（Stupid Never Dies）": "愚者不灭(Stupid Never Dies)",
  "愚者不灭（Stupid Never Dies）：First Bite Demo": "愚者不灭(Stupid Never Dies): First Bite Demo",
  "英灵神殿": "英灵神殿",
  "真人快打™ 1：终极版 (英语)": "真人快打 1: 终极版",
  "真人快打：远古之神捆绑包": "真人快打: 远古之神捆绑包",
  "真人快打™ 1 (英语)": "真人快打 1",
  "Destiny 2 PS4™ & PS5™": "命运2 PS4 & PS5",
  "Call of Duty®: Black Ops III - Zombies Chronicles Edition": "使命召唤：黑色行动III 僵尸编年史版",
  "Call of Duty®: Black Ops III - Zombies Chronicles Deluxe": "使命召唤：黑色行动III 僵尸编年史豪华版",
  "汤姆·克兰西《幽灵行动：断点》终极版 (游戏)": "汤姆·克兰西幽灵行动: 断点终极版 (游戏)",
  "《幽灵行动：断点》 - 标准版 (中日英韩文版)": "幽灵行动: 断点 - 标准版",
  "《幽灵行动：断点》 - 黄金版 (中日英韩文版)": "幽灵行动: 断点 - 黄金版",
  "汤姆·克兰西《幽灵行动：断点》 (中日英韩文版)": "汤姆·克兰西幽灵行动: 断点",
  "汤姆·克兰西《幽灵行动：断点》豪华版 (游戏)": "汤姆·克兰西幽灵行动: 断点豪华版 (游戏)",
  "战锤40K：暗潮": "战锤40K: 暗潮",
  "Warhammer 40,000: Darktide - 帝国版": "Warhammer 40,000: Darktide - 帝国版",
  "浪漫沙加3 错综宿命 数字豪华版 (中韩文版)": "浪漫沙加3 错综宿命 数字豪华版",
  "浪漫沙加3 错综宿命 (中韩文版)": "浪漫沙加3 错综宿命",
  "浪漫沙加3 错综宿命": "浪漫沙加3 错综宿命",
  "浪漫沙加3 错综宿命 数字豪华版": "浪漫沙加3 错综宿命 数字豪华版",
  "巨灵之斩：冥府群魔 — 收藏版": "巨灵之斩: 冥府群魔 — 收藏版",
  "巨人杀手：暗黑之潮": "巨人杀手: 暗黑之潮",
  "巨人杀手：暗黑之潮 试玩版": "巨人杀手: 暗黑之潮 试玩版",
  "大富翁11 PS4 & PS5": "大富翁11 PS4 & PS5",
  "RuneScape: Dragonwilds 符文世界：龙之荒野": "RuneScape: Dragonwilds 符文世界: 龙之荒野",
  "《符文世界：龙之荒野》 - 豪华版": "符文世界: 龙之荒野 - 豪华版",
  "Goat Simulator 3 - Multiversal Traveler&#x27;s Edition": "模拟山羊3 多元宇宙旅行者版",
  "Fate/EXTRA Record 数字豪华版 PS4 & PS5 (中日英韩文版)": "Fate/EXTRA Record 数字豪华版 PS4 & PS5",
  "三国志13 with 威力加强版": "三国志13 with 威力加强版",
  "三国志13": "三国志13",
  "Ratchet & Clank: Rift Apart 数字豪华版": "Ratchet & Clank: Rift Apart 数字豪华版",
  "《MARVEL Tōkon: Fighting Souls》终极版": "MARVEL Tōkon: Fighting Souls终极版",
  "《MARVEL Tōkon: Fighting Souls 》数字豪华版": "MARVEL Tōkon: Fighting Souls 数字豪华版",
  "咒语旅团": "咒语旅团",
  "迪士尼无限飞车— Disney Speedstorm": "迪士尼无限飞车— Disney Speedstorm",
  "《迪士尼無限飛車》— Disney Speedstorm": "迪士尼无限飞车— Disney Speedstorm",
  "STRANGER OF PARADISE FINAL FANTASY ORIGIN Digital Deluxe Edition PS4 & PS5": "最终幻想起源：天堂的陌生人 数字豪华版 PS4 & PS5",
  "STRANGER OF PARADISE FINAL FANTASY ORIGIN PS4 & PS5": "最终幻想起源：天堂的陌生人 PS4 & PS5",
  "STRANGER OF PARADISE FINAL FANTASY ORIGIN PS4 & PS5 (日语, 英语)": "最终幻想起源：天堂的陌生人 PS4 & PS5",
  "STRANGER OF PARADISE FINAL FANTASY ORIGIN Digital Deluxe Edition PS4 & PS5 (日语, 英语)": "最终幻想起源：天堂的陌生人 数字豪华版 PS4 & PS5",
  "STRANGER OF PARADISE FINAL FANTASY ORIGIN Digital Deluxe Upgrade (日语, 英语)": "最终幻想起源：天堂的陌生人 数字豪华升级包",
  "STRANGER OF PARADISE FINAL FANTASY ORIGIN DEMO VERSION (日语, 英语)": "最终幻想起源：天堂的陌生人 体验版",
  "STRANGER OF PARADISE FINAL FANTASY ORIGIN DEMO VERSION": "最终幻想起源：天堂的陌生人 体验版",
  "World War Z: Aftermath Deluxe Edition": "僵尸世界大战：余波 豪华版",
  "人中之龙８外传 Pirates in Hawaii 豪华版 PS4 & PS5": "人中之龙8外传 Pirates in Hawaii 豪华版 PS4 & PS5",
  "人中之龙８外传 Pirates in Hawaii PS4 & PS5": "人中之龙8外传 Pirates in Hawaii PS4 & PS5",
  "人中之龙８外传 Pirates in Hawaii 体验版": "人中之龙8外传 Pirates in Hawaii 体验版",
  "Dead by Daylight PS4™ & PS5™": "Dead by Daylight PS4 & PS5",
  "黎明杀机：十周年版": "黎明杀机: 十周年版",
  "《黎明杀机》 - 黄金版": "黎明杀机 - 黄金版",
  "《黎明杀机：杰森版》": "黎明杀机: 杰森版",
  "DRAGON BALL FighterZ PS4™&PS5®": "七龙珠 斗士Z PS4&PS5",
  "Dragonball FighterZ　FighterZ版  PS4™&PS5®": "Dragonball FighterZ FighterZ版 PS4&PS5",
  "DRAGON BALL FighterZ传奇版 PS4™ & PS5®": "DRAGON BALL FighterZ传奇版 PS4 & PS5",
  "真・三国无双7 with 猛将传 制品版": "真・三国无双7 with 猛将传 制品版",
  "真・三国无双7 with 猛将传 制品版 (英语)": "真・三国无双7 with 猛将传 制品版",
  "真・三国无双7 with 猛将传 制品版 (日语)": "真・三国无双7 with 猛将传 制品版",
  "DEAD OR ALIVE 6: Core Fighters (中日英韩文版)": "生死格斗6 基础免费版",
  "《Nobody Saves the World》+《Frozen Hearth》捆绑包": "Nobody Saves the World+Frozen Hearth捆绑包",
  "THE KING OF FIGHTERS XV 标准版 PS4 & PS5": "THE KING OF FIGHTERS XV 标准版 PS4 & PS5",
  "THE KING OF FIGHTERS XV Ultimate Edition": "拳皇XV 终极版",
  "THE KING OF FIGHTERS XV 豪华版 PS4 & PS5": "THE KING OF FIGHTERS XV 豪华版 PS4 & PS5",
  "THE KING OF FIGHTERS XV DEMO": "拳皇XV 体验版",
  "共鸣：瘟疫传说传承": "共鸣: 瘟疫传说传承",
  "我的世界地牢": "我的世界地牢",
  "《我的世界：地下城》：终极版": "我的世界: 地下城: 终极版",
  "信長之野望･新生 with 威力加強版 Complete Edition": "信長之野望・新生 with 威力加強版 Complete Edition",
  "信長之野望·新生": "信长之野望·新生",
  "信長之野望･新生 with 威力加強版 (英语)": "信長之野望・新生 with 威力加強版",
  "信長之野望･新生 with 威力加強版 數位豪華版 (英语)": "信長之野望・新生 with 威力加強版 數位豪華版",
  "信長之野望･新生 with 威力加強版": "信長之野望・新生 with 威力加強版",
  "信長之野望･新生 with 威力加強版 Complete Edition (英语)": "信長之野望・新生 with 威力加強版 Complete Edition",
  "信長之野望･新生 with 威力加強版 Complete Edition + Collector&#x27;s Set (英语)": "信長之野望・新生 with 威力加強版 Complete Edition + Collector's Set",
  "信長之野望･新生 with 威力加強版 Complete Edition + Collector&#x27;s Set": "信長之野望・新生 with 威力加強版 Complete Edition + Collector's Set",
  "信長之野望･新生 with 威力加強版 數位豪華版": "信長之野望・新生 with 威力加強版 數位豪華版",
  "信長之野望·新生 数字豪华版": "信长之野望·新生 数字豪华版",
  "SEGA 新创造球会": "SEGA 新创造球会",
  "SEGA 新創造球會": "SEGA 新创造球会",
  "《四海兄弟：故乡 最终版》": "四海兄弟: 故乡 最终版",
  "《四海兄弟：缄默法则》合集": "四海兄弟: 缄默法则合集",
  "四海兄弟：故乡": "四海兄弟: 故乡",
  "A Way Out Trial": "逃出生天 体验版",
  "Brotato PS4 & PS5": "土豆兄弟 PS4 & PS5",
  "《看门狗：军团》- 终极版 PS4 & PS5": "看门狗: 军团- 终极版 PS4 & PS5",
  "《看门狗：军团》 PS4 & PS5": "看门狗: 军团 PS4 & PS5",
  "《看门狗：军团》- 黄金版 PS4 & PS5": "看门狗: 军团- 黄金版 PS4 & PS5",
  "《看门狗：军团》豪华版 PS4 & PS5": "看门狗: 军团豪华版 PS4 & PS5",
  "女神异闻录３ Reload PS4＆PS5": "女神异闻录3 Reload PS4&PS5",
  "女神异闻录３ Reload 数字高级版 PS4＆PS5": "女神异闻录3 Reload 数字高级版 PS4&PS5",
  "女神异闻录３ Reload 数字豪华版 PS4＆PS5": "女神异闻录3 Reload 数字豪华版 PS4&PS5",
  "女神异闻录３ Reload 体验版": "女神异闻录3 Reload 体验版",
  "刺客信条：大革命 - 数字标准版": "刺客信条: 大革命 - 数字标准版",
  "DARK SOULS™ III (中英韩文版)": "黑暗之魂III",
  "DARK SOULS™ III - Deluxe Edition (中英韩文版)": "黑暗之魂III 豪华版",
  "《The Last of Us™ 合辑》": "The Last of Us 合辑",
  "GUNDAM 异轨征途 数字豪华版 (中日英韩文版)": "GUNDAM 异轨征途 数字豪华版",
  "GUNDAM 异轨征途 (中日英韩文版)": "GUNDAM 异轨征途",
  "鬼灭之刃 火之神血风谭2　豪华版 PS4 & PS5": "鬼灭之刃 火之神血风谭2 豪华版 PS4 & PS5",
  "鬼灭之刃 火之神血风谭2 PS4 & PS5": "鬼灭之刃 火之神血风谭2 PS4 & PS5",
  "乐高®蝙蝠侠™：黑暗骑士之遗豪华版": "乐高蝙蝠侠: 黑暗骑士之遗豪华版",
  "乐高®蝙蝠侠™：黑暗骑士之遗": "乐高蝙蝠侠: 黑暗骑士之遗",
  "地平线 山之呼唤™": "地平线 山之呼唤",
  "植物大战僵尸™: 和睦小镇保卫战": "植物大战僵尸: 和睦小镇保卫战",
  "《植物大战僵尸™：和睦小镇保卫战》豪华版": "植物大战僵尸: 和睦小镇保卫战豪华版",
  "EA 植物飞车捆绑包": "EA 植物飞车捆绑包",
  "勇者斗恶龙 创世小玩家２　破坏神席德与空荡岛 (中韩文版)": "勇者斗恶龙 创世小玩家2 破坏神席德与空荡岛",
  "DRAGON QUEST BUILDERS 2": "勇者斗恶龙 创世小玩家2",
  "勇者斗恶龙 创世小玩家２ 游戏本篇＋追加DLC第1波・第2波・第3波套装": "勇者斗恶龙 创世小玩家2 游戏本篇+追加DLC第1波・第2波・第3波套装",
  "勇者斗恶龙 创世小玩家２ 游戏本篇＋追加DLC第1波・第2波・第3波套装 (中韩文版)": "勇者斗恶龙 创世小玩家2 游戏本篇+追加DLC第1波・第2波・第3波套装",
  "DRAGON QUEST BUILDERS 2 Digital Deluxe Edition": "勇者斗恶龙 创世小玩家2 数字豪华版",
  "勇者斗恶龙 创世小玩家２　破坏神席德与空荡岛　玩个过瘾体验版 (中韩文版)": "勇者斗恶龙 创世小玩家2 破坏神席德与空荡岛 玩个过瘾体验版",
  "勇者斗恶龙 创世小玩家２　破坏神席德与空荡岛　玩个过瘾体验版": "勇者斗恶龙 创世小玩家2 破坏神席德与空荡岛 玩个过瘾体验版",
  "使命召唤®：现代战争®": "使命召唤: 现代战争",
  "THE KING OF FIGHTERS XIV ULTIMATE EDITION (游戏)": "THE KING OF FIGHTERS XIV ULTIMATE EDITION (游戏)",
  "THE KING OF FIGHTERS XIV (PS4™) (中日韩文版)": "拳皇XIV（PS4）",
  "THE KING OF FIGHTERS XIV (PS4™)": "拳皇XIV（PS4）",
  "《战地风云 5》": "战地风云 5",
  "《战地风云 5》决定版": "战地风云 5决定版",
  "《Grounded 2》：创始者版本": "Grounded 2: 创始者版本",
  "人中之龙7　光与暗的去向　国际版 Legendary Hero Edition": "人中之龙7 光与暗的去向 国际版 Legendary Hero Edition",
  "人中之龙7＆人中之龙８套装包": "人中之龙7&人中之龙8套装包",
  "人中之龙7　光与暗的去向　国际版 Hero Edition": "人中之龙7 光与暗的去向 国际版 Hero Edition",
  "人中之龙7　光与暗的去向　国际版": "人中之龙7 光与暗的去向 国际版",
  "《DEATH STRANDING 2:ON THE BEACH》数字豪华版": "DEATH STRANDING 2: ON THE BEACH数字豪华版",
  "Venus Vacation PRISM - DEAD OR ALIVE Xtreme -  数字豪华版": "Venus Vacation PRISM - DEAD OR ALIVE Xtreme - 数字豪华版",
  "《God of War Ragnarök》数字豪华版": "God of War Ragnarök数字豪华版",
  "Shadow Tactics: Blades of the Shogun Deluxe Edition": "影子战术：将军之刃 豪华版",
  "饿狼传说：群狼之城  Revenge Edition": "饿狼传说: 群狼之城 Revenge Edition",
  "饿狼传说：群狼之城  Legend Edition": "饿狼传说: 群狼之城 Legend Edition",
  "《纪元117：罗马和平》黄金版": "纪元117: 罗马和平黄金版",
  "《纪元117：罗马和平》": "纪元117: 罗马和平",
  "《神鬼寓言》尊享版": "神鬼寓言尊享版",
  "《神鬼寓言》标准版": "神鬼寓言标准版",
  "牧场物语 来吧！风之繁华集市": "牧场物语 来吧!风之繁华集市",
  "牧场物语 来吧！风之繁华集市 数字豪华版": "牧场物语 来吧!风之繁华集市 数字豪华版",
  "牧场物语 来吧！风之繁华集市 数字豪华典藏版": "牧场物语 来吧!风之繁华集市 数字豪华典藏版",
  "歧路旅人0 OCTOPATH TRAVELER 0 PS4&PS5": "歧路旅人0 OCTOPATH TRAVELER 0 PS4&PS5",
  "歧路旅人0 OCTOPATH TRAVELER 0 PS4&PS5 (日语, 英语)": "歧路旅人0 OCTOPATH TRAVELER 0 PS4&PS5",
  "歧路旅人0 序章体验版 (日语, 英语)": "歧路旅人0 序章体验版",
  "歧路旅人0 序章体验版": "歧路旅人0 序章体验版",
  "歧路旅人0 数字豪华版 OCTOPATH TRAVELER 0 Digital Deluxe Edition PS4&PS5 (TC/SC/KR)": "歧路旅人0 数字豪华版 OCTOPATH TRAVELER 0 Digital Deluxe Edition PS4&PS5",
  "歧路旅人0 数字豪华版 OCTOPATH TRAVELER 0 Digital Deluxe Edition PS4&PS5 (EN/JP)": "歧路旅人0 数字豪华版 OCTOPATH TRAVELER 0 Digital Deluxe Edition PS4&PS5",
  "《EA SPORTS FC™ 26》标准版（PS4 和 PS5 版）": "EA SPORTS FC 26标准版(PS4 和 PS5 版)",
  "Mount & Blade II: Bannerlord - Digital Deluxe": "骑马与砍杀2：霸主 数字豪华版",
  "队长小翼2 世界群星": "队长小翼2 世界群星",
  "队长小翼2 世界群星 数字豪华版": "队长小翼2 世界群星 数字豪华版",
  "队长小翼2 世界群星 数字终极版": "队长小翼2 世界群星 数字终极版",
  "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick 数字豪华版 (游戏)": "ACE COMBAT 7: SKIES UNKNOWN - TOP GUN: Maverick 数字豪华版 (游戏)",
  "ACE COMBAT™ 7: SKIES UNKNOWN (中韩文版)": "皇牌空战7：未知空域",
  "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick 数字版 (游戏)": "ACE COMBAT 7: SKIES UNKNOWN - TOP GUN: Maverick 数字版 (游戏)",
  "《轮回之兽》数字豪华版": "轮回之兽数字豪华版",
  "超级忍 反攻的斩击 PS4 & PS5": "超级忍 反攻的斩击 PS4 & PS5",
  "超级忍 反攻的斩击 数字豪华版 PS4 & PS5": "超级忍 反攻的斩击 数字豪华版 PS4 & PS5",
  "《超级忍 反攻的斩击》试玩版": "超级忍 反攻的斩击试玩版",
  "Call of Duty®: Modern Warfare® Remastered": "使命召唤：现代战争 重制版",
  "MONSTER HUNTER: WORLD™": "怪物猎人：世界",
  "蝙蝠侠™：阿卡姆骑士 PlayStation®Hits (韩语, 英语)": "蝙蝠侠: 阿卡姆骑士 PlayStationHits",
  "蝙蝠侠：阿卡姆合辑 (韩语, 英语)": "蝙蝠侠: 阿卡姆合辑",
  "蝙蝠侠：阿卡姆骑士豪华版 (韩语, 英语)": "蝙蝠侠: 阿卡姆骑士豪华版",
  "火影忍者 疾风传 终极风暴4 (中日韩文版)": "火影忍者 疾风传 终极风暴4",
  "火影忍者疾风传：终极风暴4 慕留人传 (中日韩文版)": "火影忍者疾风传: 终极风暴4 慕留人传",
  "FINAL FANTASY X/X-2 HD Remaster (中韩文版)": "最终幻想X/X-2 高清重制版",
  "ACE COMBAT 8: WINGS OF THEVE": "空战奇兵8 希孚之翼 (ACE COMBAT 8: WINGS OF THEVE)",
  "エーペックスレジェンズ": "Apex 英雄",
  "機動戦士ガンダム　バトルオペレーション２": "机动战士高达 激战任务2",
  "「オーバーウォッチ®」": "守望先锋",
  "『NBA 2K27』": "NBA 2K27",
  "ドラゴンクエストⅩ　オンライン": "勇者斗恶龙X Online",
  "星の翼（Starward）": "星之翼",
  "Dragon's Dogma 2": "龙之信条2",
  "地球防衛軍６.２ INVADERS FROM ANOTHER WORLD": "地球防卫军6.2 INVADERS FROM ANOTHER WORLD",
  "グランド・セフト・オートV (PlayStation®5)": "侠盗猎车手V (PlayStation 5)",
  "CONTROL Resonant（コントロール レゾナント）": "控制: 共振",
  "Dead by Daylight": "Dead by Daylight PS4 & PS5",
  "ディビジョン2": "全境封锁2",
  "グランツーリスモ７": "跑车浪漫旅 7",
  "Call of Duty®": "使命召唤",
  "ロマンシング サガ3 デスティニーユナイテッド": "浪漫沙加3 错综宿命",
  "Marvel’s Wolverine": "漫威金刚狼",
  "プロサッカークラブをつくろう！": "SEGA 新创造球会",
  "ディアブロ IV": "Diablo IV - 标准版",
  "レインボーシックス シージ": "虹彩六号: 围攻行动",
  "紅の砂漠 Enhanced": "红色沙漠: 增强版",
  "アサシン クリード ブラック フラッグ RE:シンクロ": "刺客信条: 黑旗 记忆重置",
  "Stellar Blade™": "剑星",
  "風燕伝：Where Winds Meet（基本プレイ無料）": "燕云十六声(免费游玩)",
  "ロケットリーグ®": "火箭联盟",
  "RuneScape: Dragonwilds": "RuneScape: Dragonwilds 符文世界: 龙之荒野",
  "マーベル・ライバルズ": "漫威争锋",
  "地球防衛軍6": "地球防卫军6",
  "ペルソナ４ リバイバル": "女神异闻录4 Revival",
  "GRANBLUE FANTASY: Relink": "碧蓝幻想：Relink",
  "ACE COMBAT™ 7: SKIES UNKNOWN": "皇牌空战7：未知空域",
  "Phantom Blade Zero": "影之刃零",
  "ボーダーランズ4": "无主之地4",
  "Call of Duty®: Black Ops II": "使命召唤：黑色行动II",
  "TEKKEN 8": "铁拳8",
  "GUNDAM ROGUE ORBIT": "GUNDAM 异轨征途",
  "アサシン クリード シャドウズ": "刺客信条: 影",
  "ドラゴンボールZ KAKAROT": "七龙珠Z 卡卡洛特 PS4&PS5",
  "NBA 2K26": "NBA 2K26",
  "ドラゴンボール ゼノバース2": "七龙珠 异战2",
  "空の軌跡 the 1st": "空之轨迹 the 1st",
  "龍が如く８": "人中之龙8 PS4 & PS5",
  "クリスタル・オブ・アトラン": "晶核",
  "Bloodborne®": "血源诅咒",
  "Marvel’s Spider-Man: Miles Morales": "漫威蜘蛛侠：迈尔斯·莫拉莱斯",
  "信長の野望･新生": "信长之野望·新生",
  "Sky 星を紡ぐ子どもたち": "Sky光·遇",
  "ONE PIECE 海賊無双4": "ONE PIECE 海贼无双4",
  "theHunter: Call of the Wild™": "猎人: 荒野的召唤",
  "井戸の鳥 (Well Dweller)": "黯井微光",
  "サイバーパンク2077": "赛博朋克 2077",
  "WWE 2K26": "WWE 2K26标准版",
  "Party Animals": "猛兽派对",
  "The Blood of Dawnwalker": "The Blood of Dawnwalker 黎明行者之血",
  "Tower of Fantasy（幻塔）": "Tower of Fantasy",
  "餓狼伝説 City of the Wolves": "FATAL FURY: City of the Wolves",
  "Mortal Shell II": "致命躯壳 II",
  "三國志8 REMAKE": "三国志8 REMAKE",
  "アストロボット": "宇宙机器人",
  "赛博朋克 2077": "赛博朋克 2077",
  "Apex Legends™": "Apex英雄",
  "渔力全开": "渔力全开",
  "极限竞速：地平线 5": "极限竞速: 地平线 5",
  "极限竞速：地平线 6": "极限竞速: 地平线 6",
  "Grand Theft Auto V 增强版": "Grand Theft Auto V 增强版",
  "双人成行": "双人成行",
  "三角洲行动": "三角洲行动",
  "《赛博朋克 2077：往日之影》": "赛博朋克 2077: 往日之影",
  "Wallpaper Engine：壁纸引擎": "Wallpaper Engine: 壁纸引擎",
  "影之刃零": "影之刃零",
  "Warhammer 40,000: 星际战士2": "Warhammer 40,000: 星际战士2",
  "霍格沃茨之遗": "霍格沃茨之遗",
  "朋友，梭哈吧": "朋友,梭哈吧",
  "《使命召唤®：现代战争® III 2023》": "使命召唤: 现代战争 III 2023",
  "天国：拯救2": "天国: 拯救2",
  "Warframe 星际战甲": "Warframe 星际战甲",
  "饥荒联机版": "饥荒联机版",
  "黎明杀机": "黎明杀机",
  "HELLDIVERS™ 绝地潜兵2": "HELLDIVERS 绝地潜兵2",
  "方舟: 生存飞升": "方舟: 生存飞升",
  "Watch_Dogs® 2": "看门狗2",
  "王国：两位君主": "王国: 两位君主",
  "潜水员戴夫 DAVE THE DIVER": "潜水员戴夫 DAVE THE DIVER",
  "极限国度": "极限国度",
  "全面战争：战锤3": "全面战争: 战锤3",
  "底特律：化身为人": "底特律: 化身为人",
  "午夜轮班": "午夜轮班",
  "王国保卫战 6：新启程": "王国保卫战 6: 新启程",
  "Marvel’s Spider-Man Remastered": "漫威蜘蛛侠 重制版",
  "Far Cry® 6": "孤岛惊魂6",
  "针影裁梦": "针影裁梦",
  "Subnautica - 深海迷航": "Subnautica - 深海迷航",
  "机械狂欢": "机械狂欢",
  "Cities: Skylines II 都市：天际线2": "Cities: Skylines II 都市: 天际线2",
  "人类一败涂地 / Human Fall Flat": "人类：一败涂地",
  "Steep™": "极限巅峰",
  "007 初露锋芒": "007 初露锋芒",
  "生存日志": "生存日志",
  "边缘世界 RimWorld": "边缘世界 RimWorld",
  "缺氧": "缺氧",
  "No Man's Sky 无人深空": "No Man's Sky 无人深空",
  "《猎人：荒野的召唤™》": "猎人: 荒野的召唤",
  "Sid Meier’s Civilization® VI": "席德·梅尔的文明VI",
  "苍翼：混沌效应": "苍翼: 混沌效应",
  "艾尔登法环": "艾尔登法环",
  "Ghost of Tsushima导演剪辑版": "Ghost of Tsushima导演剪辑版",
  "女神异闻录３ Reload": "女神异闻录3 Reload",
  "DARK SOULS™ III": "黑暗之魂III",
  "王国保卫战 5：联盟": "王国保卫战 5: 联盟",
  "雀魂麻将": "雀魂麻将",
  "女神异闻录5皇家版": "女神异闻录5皇家版",
  "最后纪元": "最后纪元",
  "逸剑风云决": "逸剑风云决",
  "刺客信条：影": "刺客信条: 影",
  "死亡搁浅2": "死亡搁浅2",
  "我们到了吗？": "我们到了吗?",
  "兰斯7 战国兰斯": "兰斯7 战国兰斯",
  "Titanfall® 2": "泰坦陨落2",
  "Hades": "Hades",
  "Valheim: 英灵神殿": "Valheim: 英灵神殿",
  "战争雷霆": "战争雷霆",
  "不问凡尘": "不问凡尘",
  "UNCHARTED™: 盗贼传奇合辑": "UNCHARTED: 盗贼传奇合辑",
  "猎杀：对决 1896": "猎杀: 对决 1896",
  "Assassin's Creed® Odyssey": "刺客信条：奥德赛",
  "席德·梅尔的文明VII": "席德·梅尔的文明VII",
  "魔法门之英雄无敌：上古纪元 Heroes of Might and Magic: Olden Era": "魔法门之英雄无敌: 上古纪元 Heroes of Might and Magic: Olden Era",
  "Phasmophobia 恐鬼症": "Phasmophobia 恐鬼症",
  "塔罗斯的法则2": "塔罗斯的法则2",
  "《暗黑破坏神® IV》": "暗黑破坏神 IV",
  "消逝的光芒2: 重装上阵版": "消逝的光芒2: 重装上阵版",
  "死亡之门": "死亡之门",
  "地铁：离乡": "地铁: 离乡",
  "Rise of the Tomb Raider™": "古墓丽影：崛起",
  "Resident Evil 2": "生化危机2 重制版",
  "Yu-Gi-Oh! Master Duel": "游戏王 大师决斗",
  "原子之心": "原子之心",
  "Warhammer 40,000: 行商浪人": "Warhammer 40,000: 行商浪人",
  "神界：原罪2 - 终极版": "神界: 原罪2 - 终极版",
  "胡闹厨房 全都好吃": "胡闹厨房 全都好吃",
  "Kingdom Rush  - Tower Defense": "王国保卫战",
  "失落城堡2": "失落城堡2",
  "鲁特里一家死了（The Roottrees are Dead）": "鲁特里一家死了(The Roottrees are Dead)",
  "东方夜雀食堂 - Touhou Mystia's Izakaya": "东方夜雀食堂 - Touhou Mystia's Izakaya",
  "潜水员戴夫 - 丛林 Content Pack": "潜水员戴夫 - 丛林 Content Pack",
  "建筑模拟器": "建筑模拟器",
  "苏丹的游戏": "苏丹的游戏",
  "超级兔子人": "超级兔子人",
  "神之天平（ASTLIBRA Revision）": "神之天平(ASTLIBRA Revision)",
  "雨中冒险 2": "雨中冒险 2",
  "龙之剑:觉醒": "龙之剑: 觉醒",
  "桌面破坏神：挂机ARPG": "桌面破坏神: 挂机ARPG",
  "Cyberpunk 2077": "赛博朋克 2077",
  "How to Fish": "渔力全开",
  "Dressmaker": "针影裁梦",
  "Baldur's Gate 3": "博德之门3",
  "Total War: WARHAMMER III": "全面战争: 战锤3",
  "Forza Horizon 6": "极限竞速: 地平线 6",
  "Grand Theft Auto V Enhanced": "Grand Theft Auto V 增强版",
  "CONTROL Resonant": "控制: 共振",
  "Ghost of Tsushima DIRECTOR'S CUT": "对马岛之魂 导演剪辑版",
  "The Witcher 3: Wild Hunt — Remastered": "巫师3: 狂猎 — 重制版",
  "Call of Duty®: Modern Warfare® III": "使命召唤: 现代战争 III 2023",
  "Gamble With Your Friends": "朋友,梭哈吧",
  "Hogwarts Legacy": "霍格沃茨之遗",
  "Call of Duty®: Modern Warfare® 4": "使命召唤: 现代战争 4",
  "Street Fighter™ 6": "街头霸王6",
  "No Man's Sky": "No Man's Sky 无人深空",
  "Cities: Skylines II": "Cities: Skylines II 都市: 天际线2",
  "RimWorld": "边缘世界 RimWorld",
  "Baldur’s Gate 3": "博德之门3",
  "柏德之門3": "博德之门3",
  "柏德之门3": "博德之门3",
  "博德之門3": "博德之门3",
  "柏德之門3 - 數位豪華版": "博德之门3 - 数字豪华版",
  "柏德之门3 - 数位豪华版": "博德之门3 - 数字豪华版",
  "Baldur's Gate 3 - Digital Deluxe Edition": "博德之门3 - 数字豪华版",
  "Overcooked 2": "胡闹厨房2",
  "Metaphor :ReFantazio": "暗喻幻想",
  "Dying Light: The Beast": "消逝的光芒：困兽",
  "消逝的光芒：困兽": "消逝的光芒：困兽",
  "Delta Force (F2P)": "三角洲行动",
  "ヒューマン フォール フラット": "人类：一败涂地",
  "Human Fall Flat": "人类：一败涂地",
  "Human: Fall Flat": "人类：一败涂地",
  "Rise of the Ronin": "浪人崛起",
  "Rise of the Rōnin": "浪人崛起",
  "Heartopia": "心动小镇",
  "Vampire Survivors": "吸血鬼幸存者",
  "Where Winds Meet": "燕云十六声",
  "PowerWash Simulator 2": "冲就完事模拟器2",
  "Nintendo Switch Sports": "Nintendo Switch 运动",
  "ストレイ": "迷失",
  "BIOHAZARD RE:2": "生化危机2 重制版",
  "BIOHAZARD VILLAGE": "生化危机8：村庄",
  "Dragon’s Dogma 2: Dark Arisen": "龙之信条2：黑暗觉者",
  "Dragon's Dogma II: Dark Arisen": "龙之信条2：黑暗觉者",
  "Dragon’s Dogma 2": "龙之信条2",
  "ドラゴンズドグマ 2": "龙之信条2",
  "ドラゴンズドグマ2": "龙之信条2",
  "Dragon's Dogma 2: Dark Arisen Expansion": "龙之信条2：黑暗觉者 扩展包",
  "Dragon's Dogma 2 Character Creator & Storage": "龙之信条2 创建&保存角色",
  "Dragon's Dogma 2 創建＆保存角色": "龙之信条2 创建&保存角色",
  "Ghost of Tsushima DIRECTOR’S CUT": "对马岛之魂 导演剪辑版",
  "Ghost of Tsushima Director's Cut": "对马岛之魂 导演剪辑版",
  "Neon Abyss 2": "霓虹深渊2",
  "Hollow Knight: Silksong": "空洞骑士：丝之歌",
  "NINJA GAIDEN 2 Black": "忍者龙剑传2 黑之章",
  "The First Berserker: Khazan": "第一狂战士：卡赞",
  "The Long Dark": "漫漫长夜",
  "Devil May Cry 5": "鬼泣5",
  "The Escapists 2": "逃脱者2",
  "Sonic Racing: CrossWorlds": "索尼克赛车 交叉世界",
  "Wolfenstein II: The New Colossus": "德军总部II：新巨像",
  "Just Cause 4 Reloaded": "正当防卫4 Reloaded",
  "MapleStory": "冒险岛",
  "Call of Duty": "使命召唤",
  "Returnal": "死亡回归",
  "Returnal™": "死亡回归",
  "Demon’s Souls": "恶魔之魂",
  "Demon's Souls": "恶魔之魂",
  "Overcooked® 2 - オーバークック２": "胡闹厨房2",
  "Overcooked® 2 - オーバークック２：真の食通エディション": "胡闹厨房2 真·美食家版",
  "太鼓之達人 咚咚雷音祭": "太鼓之达人 咚咚雷音祭",
  "Castlevania: Belmont’s Curse Midnight Edition": "恶魔城：贝尔蒙特的诅咒 Midnight Edition",
  "Moving Out & Moving Out 2 Bundle": "Moving Out & Moving Out 2 Bundle",
  "我的超級現充生活 for Nintendo Switch": "我的超级现充生活 for Nintendo Switch",
  "ONE PIECE 海賊無雙4 數位終極版": "ONE PIECE 海贼无双4 数位终极版",
  "哆啦A夢 牧場物語 自然王國與和樂家人": "哆啦A梦 牧场物语 自然王国与和乐家人",
  "MONSTER HUNTER RISE: SUNBREAK": "MONSTER HUNTER RISE: SUNBREAK",
  "Little Strays 小貓大營救: Havana": "Little Strays 小猫大营救: Havana",
  "小小夢魘1+2": "小小梦魇1+2",
  "集合啦！動物森友會 快樂家樂園": "集合啦!动物森友会 快乐家乐园",
  "Resident Evil 4 Gold Edition": "生化危机4 黄金版",
  "沉星之序": "沉星之序",
  "Resident Evil 2 Deluxe Edition": "生化危机2 重制版 豪华版",
  "Resident Evil 3": "Resident Evil 3",
  "Silver Pines": "银松镇",
  "啦嗒噹(Ratatan) - 數位豪華版": "啦嗒当(Ratatan) - 数位豪华版",
  "數碼寶貝物語 時空異客": "数码宝贝物语 时空异客",
  "Resident Evil 7 Gold Edition & Village Gold Edition": "Resident Evil 7 Gold Edition & Village Gold Edition",
  "BIOHAZARD RE:4 Gold Edition": "生化危机4 重制版 黄金版",
  "テイルズ オブ エターニア リマスター デラックスエディション": "永恒传说 复刻版 豪华版",
  "ぼくと釣り日記": "我与钓鱼日记",
  "BIOHAZARD RE:2 Z Version デラックスエディション": "生化危机2 重制版 Z Version 豪华版",
  "Ratatan - デラックス版": "啦嗒铛",
  "BIOHAZARD RE:3 Z Version": "BIOHAZARD RE: 3 Z Version",
  "Ratatan": "啦嗒铛",
  "ペルソナ４ ザ・ゴールデン": "女神异闻录4 黄金版",
  "ペルソナ３ ポータブル": "女神异闻录3 携带版",
  "Pokémon LEGENDS アルセウス": "宝可梦传说 阿尔宙斯",
  "夜廻三": "夜廻三",
  " Neon Abyss 2 - Deluxe Edition": "霓虹深渊2 豪华版",
  "Forza Horizon 6 Premium Edition": "极限竞速: 地平线 6 高级版",
  "Forza Horizon 6 Deluxe Edition": "极限竞速: 地平线 6 豪华版",
  "Dragon's Dogma 2 角色编辑＆保存": "龙之信条2 创建&保存角色",
  "Clive Barker's Hellraiser: Revival": "Clive Barker's Hellraiser: Revival",
  "Clive Barker’s Hellraiser: Revival - Deluxe Edition": "Clive Barker's Hellraiser: Revival - Deluxe Edition",
  "ARC Raiders - Deluxe Edition": "ARC Raiders 豪华版",
  "星球大战：银河赛车手™ 豪华版": "星球大战: 银河赛车手 豪华版",
  "星球大战：银河赛车手™": "星球大战: 银河赛车手",
  "Castlevania: Belmont's Curse Demo": "恶魔城：贝尔蒙特的诅咒 体验版",
  "Neon Abyss 2: Deluxe Edition": "霓虹深渊2 豪华版",
  "《飙酷车神：轰鸣盛典》辉煌车库版": "飙酷车神: 轰鸣盛典辉煌车库版",
  "《飙酷车神：轰鸣盛典》Headliners 版": "飙酷车神: 轰鸣盛典Headliners 版",
  "夺宝奇兵：古老之圈": "夺宝奇兵: 古老之圈",
  "夺宝奇兵：古老之圈：Premium Edition": "夺宝奇兵: 古老之圈: Premium Edition",
  "FINAL FANTASY VII Remake Series Trilogy Edition（日英文版）": "最终幻想VII 重制系列三部曲合集",
  "三国志 14": "三国志 14",
  "三国志 14 数字豪华版": "三国志 14 数字豪华版",
  "三国志14 威力加强版套装 数字豪华版": "三国志14 威力加强版套装 数字豪华版",
  "《霍格沃茨之遗》PS5版": "霍格沃茨之遗PS5版",
  "《霍格沃茨之遗》PS4版": "霍格沃茨之遗PS4版",
  "霍格沃茨之遗：数码豪华版": "霍格沃茨之遗: 数码豪华版",
  "《霍格沃茨之遗》+《哈利·波特：魁地奇锦标赛》豪华版捆绑包": "霍格沃茨之遗+哈利·波特: 魁地奇锦标赛豪华版捆绑包",
  "Marvel's Spider-Man Game Of The Year Edition": "漫威蜘蛛侠 年度版",
  "The First Berserker: Khazan Standard Edition": "第一狂战士：卡赞 标准版",
  "The First Berserker: Khazan Deluxe Edition": "第一狂战士：卡赞 豪华版",
  "Grand Theft Auto：三部曲 – 最终版 (PS5 & PS4)": "Grand Theft Auto: 三部曲 – 最终版 (PS5 & PS4)",
  "刀剑神域 碎梦边境": "刀剑神域 碎梦边境",
  "刀剑神域 碎梦边境 数字典藏版": "刀剑神域 碎梦边境 数字典藏版",
  "刀剑神域 碎梦边境 数字豪华版": "刀剑神域 碎梦边境 数字豪华版",
  "《四海兄弟：三部曲》": "四海兄弟: 三部曲",
  "《师父》": "师父",
  "星球大战 绝地：幸存者™": "星球大战 绝地: 幸存者",
  "《星球大战™ 绝地》跨世代同捆包版": "星球大战 绝地跨世代同捆包版",
  "《星球大战 绝地：幸存者™》PS4": "星球大战 绝地: 幸存者PS4",
  "《星球大战 绝地：幸存者™》豪华版": "星球大战 绝地: 幸存者豪华版",
  "Big Helmet Heroes": "Big Helmet Heroes",
  "Big Helmet Heroes - Exalted Edition": "Big Helmet Heroes - Exalted Edition",
  "BLEACH 魂魄觉醒 PS4 & PS5": "BLEACH 魂魄觉醒 PS4 & PS5",
  "BLEACH 魂魄觉醒 数字终极版 PS4 & PS5": "BLEACH 魂魄觉醒 数字终极版 PS4 & PS5",
  "BLEACH 魂魄觉醒 数字豪华版 PS4 & PS5": "BLEACH 魂魄觉醒 数字豪华版 PS4 & PS5",
  "TRIANGLE STRATEGY": "TRIANGLE STRATEGY",
  "Fallout 4: Anniversary Edition": "辐射4 周年版",
  "Fallout 4: Game of the Year Edition": "辐射4 年度版",
  "War Thunder - High-res Texture Edition": "战争雷霆 - High-res Texture Edition",
  "War Thunder - German Starter Bundle": "战争雷霆 - German Starter Bundle",
  "War Thunder - US Starter Bundle": "战争雷霆 - US Starter Bundle",
  "战争雷霆 制品版": "战争雷霆 制品版",
  "War Thunder - \"Be Prepared!\" Bundle": "战争雷霆 - \"Be Prepared!\" Bundle",
  "PS5® 版《四海兄弟：最终版》": "PS5 版四海兄弟: 最终版",
  "破晓传奇 黎明新程数字典藏版 PS4 & PS5": "破晓传奇 黎明新程数字典藏版 PS4 & PS5",
  "破晓传奇 黎明新程普通版 PS4 & PS5": "破晓传奇 黎明新程普通版 PS4 & PS5",
  "破晓传奇 体验版 & 传奇系列艺廊": "破晓传奇 体验版 & 传奇系列艺廊",
  "God of War™ III Remastered PlayStation®Hits": "God of War III Remastered PlayStationHits",
  "Hunt: Showdown 1896": "猎杀: 对决 1896",
  "Hunt: Showdown 1896 - Deluxe Edition": "猎杀: 对决 1896 豪华版",
  "Hunt: Showdown 1896 - Starter Edition": "Hunt: Showdown 1896 - Starter Edition",
  "Hunt: Showdown 1986 - Premium Edition": "Hunt: Showdown 1986 - Premium Edition",
  "沙罗周期": "沙罗周期",
  "《沙罗周期》数字豪华版": "沙罗周期数字豪华版",
  "墨境": "墨境",
  "AI LIMIT 无限机兵": "AI LIMIT 无限机兵",
  "AI LIMIT 无限机兵 豪华版": "AI LIMIT 无限机兵 豪华版",
  "Warframe®": "Warframe",
  "Gear.Club Unlimited 3": "Gear.Club Unlimited 3",
  "Gear.Club Unlimited 3 - Deluxe Edition": "Gear.Club Unlimited 3 - Deluxe Edition",
  "伊苏X -诺曼荣光-": "伊苏X -诺曼荣光-",
  "Metro Exodus": "Metro Exodus",
  "Metro Exodus: Gold Edition": "Metro Exodus: Gold Edition",
  "Demon's Souls 数字豪华版": "Demon's Souls 数字豪华版",
  "EA SPORTS™《Madden NFL 27》": "EA SPORTSMadden NFL 27",
  "《EA SPORTS™ Madden NFL 27》豪华版": "EA SPORTS Madden NFL 27豪华版",
  "EA SPORTS™ MVP 同捆包（《College Football 27》豪华版和《Madden NFL 27》豪华版）": "EA SPORTS MVP 同捆包(College Football 27豪华版和Madden NFL 27豪华版)",
  "EA SPORTS™ 开球同捆包（《Madden NFL 27》和《College Football 27》）": "EA SPORTS 开球同捆包(Madden NFL 27和College Football 27)",
  "Dying Light 2 Stay Human PS4&PS5": "消逝的光芒系列包",
  "Dying Light 2 Stay Human: Digital Extras Edition PS5": "Dying Light 2 Stay Human: Digital Extras Edition PS5",
  "Dying Light Collection": "Dying Light Collection",
  "Dying Light: Human & Beast Bundle": "Dying Light: Human & Beast Bundle",
  "《消逝的光芒》系列包": "消逝的光芒系列包",
  "World of Tanks Modern Armor – 极速恶魔": "World of Tanks Modern Armor – 极速恶魔",
  "World of Tanks Modern Armor – 神准伙伴": "World of Tanks Modern Armor – 神准伙伴",
  "SnowRunner - 5-Year Anniversary Edition": "SnowRunner - 5-Year Anniversary Edition",
  "SnowRunner - 1-Year Anniversary Edition": "SnowRunner - 1-Year Anniversary Edition",
  "SnowRunner": "SnowRunner",
  "无主之地3：超级豪华版 PS4™ &  PS5™": "无主之地3: 超级豪华版 PS4 & PS5",
  "无主之地3 PS4™ &  PS5™": "无主之地3 PS4 & PS5",
  "无主之地3：次世代版 PS4™ &  PS5™": "无主之地3: 次世代版 PS4 & PS5",
  "无主之地3：终极版 PS4™ &  PS5™": "无主之地3: 终极版 PS4 & PS5",
  "《极品飞车™：不羁》终极合集": "极品飞车: 不羁终极合集",
  "《极品飞车™：不羁》": "极品飞车: 不羁",
  "《极品飞车™：不羁》Palace 版": "极品飞车: 不羁Palace 版",
  "绯红结系 终极版  PS4&PS5": "绯红结系 终极版 PS4&PS5",
  "绯红结系 Demo Edition": "绯红结系 Demo Edition",
  "绯红结系 PS4 & PS5": "绯红结系 PS4 & PS5",
  "绯红结系 Story Demo": "绯红结系 Story Demo",
  "绯红结系 豪华版 PS4 & PS5": "绯红结系 豪华版 PS4 & PS5",
  "《死亡空间》": "死亡空间",
  "《死亡空间》数字豪华版": "死亡空间数字豪华版",
  "Into the Radius 2": "Into the Radius 2",
  "生化奇兵：典藏版": "生化奇兵: 典藏版",
  "进击的巨人３": "进击的巨人3",
  "进击的巨人３ 数字豪华版 (中日英韩文版)": "进击的巨人3 数字豪华版",
  "真人快打™ 1": "真人快打 1",
  "真人快打™ 1：终极版": "真人快打 1: 终极版",
  "Ratatan - 数位豪华版": "Ratatan - 数位豪华版",
  "啦嗒铛": "啦嗒铛",
  "The Elder Scrolls Online: Deluxe Edition": "上古卷轴OL 豪华版",
  "失落星船：马拉松": "失落星船: 马拉松",
  "《失落星船：马拉松》豪华版": "失落星船: 马拉松豪华版",
  "边境猎人 - 豪华版": "边境猎人 - 豪华版",
  "边境猎人: 艾尔莎的命运之轮": "边境猎人: 艾尔莎的命运之轮",
  "苍翼：混沌效应X 数字豪华版": "苍翼: 混沌效应X 数字豪华版",
  "苍翼：混沌效应X": "苍翼: 混沌效应X",
  "DIRT 5 PS4 & PS5": "DIRT 5 PS4 & PS5",
  "DIRT 5 Year One Edition PS4 & PS5": "DIRT 5 Year One Edition PS4 & PS5",
  "Sniper Elite 5 Complete Edition": "Sniper Elite 5 Complete Edition",
  "Sniper Elite 5 PS4™ & PS5™": "Sniper Elite 5 PS4 & PS5",
  "Sniper Elite 5 Deluxe Edition PS4™ & PS5™": "Sniper Elite 5 Deluxe Edition PS4 & PS5",
  "NINJA GAIDEN: Master Collection": "NINJA GAIDEN: Master Collection",
  "NINJA GAIDEN: Master Collection 下载豪华版": "NINJA GAIDEN: Master Collection 下载豪华版",
  "RESIDENT EVIL 7 biohazard": "RESIDENT EVIL 7 biohazard",
  "RESIDENT EVIL 7 biohazard Gold Edition": "RESIDENT EVIL 7 biohazard Gold Edition",
  "Resident Evil 7 Teaser: Beginning Hour": "Resident Evil 7 Teaser: Beginning Hour",
  "钓鱼行星 (Fishing Planet)": "钓鱼行星 (Fishing Planet)",
  "Fishing Planet Anniversary Pack": "Fishing Planet Anniversary Pack",
  "Fishing Planet: Gars＆Glory Pack": "Fishing Planet: Gars&Glory Pack",
  "Fishing Planet: Golden Dragon Pack": "Fishing Planet: Golden Dragon Pack",
  "Fishing Planet: First Steps Float Bundle": "Fishing Planet: First Steps Float Bundle",
  "Assetto Corsa Competizione": "Assetto Corsa Competizione",
  "神力科莎：竞速 - 2024 组合包": "神力科莎: 竞速 - 2024 组合包",
  "《使命召唤®：黑色行动》": "使命召唤: 黑色行动",
  "RimWorld Console Edition - Digital Deluxe": "RimWorld Console Edition - Digital Deluxe",
  "RimWorld Console Edition": "RimWorld Console Edition",
  "MOBILE SUIT GUNDAM EXTREME VS. 极限爆发": "MOBILE SUIT GUNDAM EXTREME VS. 极限爆发",
  "MOBILE SUIT GUNDAM EXTREME VS. 极限爆发 入门版": "MOBILE SUIT GUNDAM EXTREME VS. 极限爆发 入门版",
  "MOBILE SUIT GUNDAM EXTREME VS. 极限爆发 豪华原声版": "MOBILE SUIT GUNDAM EXTREME VS. 极限爆发 豪华原声版",
  "Pathfinder: Wrath of the Righteous - Game of the Year Edition": "Pathfinder: Wrath of the Righteous - Game of the Year Edition",
  "Pathfinder: Wrath of the Righteous - Enhanced Edition": "Pathfinder: Wrath of the Righteous - Enhanced Edition",
  "Narrative-Rich CRPG Bundle": "Narrative-Rich CRPG Bundle",
  "7 Days to Die - 主机版": "7 Days to Die - 主机版",
  "《NHL 27》PS5 豪华版": "NHL 27PS5 豪华版",
  "《NHL 27》PS5 标准版": "NHL 27PS5 标准版",
  "Kingdom Come: Deliverance": "天国：拯救",
  "Kingdom Come: Deliverance - Royal Edition": "Kingdom Come: Deliverance - Royal Edition",
  "奇异人生：重逢": "奇异人生: 重逢",
  "《奇异人生：重逢》双子包": "奇异人生: 重逢双子包",
  "《奇异人生：重逢》豪华版": "奇异人生: 重逢豪华版",
  "地球防卫军6 豪华版 (PS4 & PS5)": "地球防卫军6 豪华版 (PS4 & PS5)",
  "地球防卫军6 (PS4 & PS5)": "地球防卫军6 (PS4 & PS5)",
  "指挥家": "指挥家",
  "指挥大师：完整版": "指挥大师: 完整版",
  "<p>大师：秘密魔法包</p>": "<p>大师: 秘密魔法包</p>",
  "指挥家：末日束缚组合包": "指挥家: 末日束缚组合包",
  "指挥：全体登船礼包": "指挥: 全体登船礼包",
  "Maestro：《进击的巨人》组合包": "Maestro: 进击的巨人组合包",
  "UNCHARTED: The Nathan Drake Collection™ PlayStation®Hits (中英韩文版)": "UNCHARTED: The Nathan Drake Collection PlayStationHits",
  "UNCHARTED: The Nathan Drake Collection™体验版 (中英韩文版)": "UNCHARTED: The Nathan Drake Collection体验版",
  "LEGO® Harry Potter™ Collection": "LEGO Harry Potter Collection",
  "《LEGO® Harry Potter™合集》": "LEGO Harry Potter合集",
  "ARK: Bob's Bundle": "方舟 Bob's Bundle",
  "英雄传说 界之轨迹 -告别塞姆利亚- (PS4 & PS5)": "英雄传说 界之轨迹 -告别塞姆利亚- (PS4 & PS5)",
  "艾尔登法环 黑夜君临 PS4 & PS5": "艾尔登法环 黑夜君临 PS4 & PS5",
  "艾尔登法环 黑夜君临 数字豪华版 PS4 & PS5": "艾尔登法环 黑夜君临 数字豪华版 PS4 & PS5",
  "《TOPSPIN 2K25》跨世代数字版": "TOPSPIN 2K25跨世代数字版",
  "《TOPSPIN 2K25》Grand Slam®版": "TOPSPIN 2K25跨世代数字版",
  "《TOPSPIN 2K25》豪华版": "TOPSPIN 2K25豪华版",
  "PS5™《漫威暗夜之子》传奇版": "PS5漫威暗夜之子传奇版",
  "《漫威暗夜之子》增强版本": "漫威暗夜之子增强版本",
  "PS4™《漫威暗夜之子》传奇版": "PS4漫威暗夜之子传奇版",
  "PS5™《漫威暗夜之子》数字升级版": "PS5漫威暗夜之子数字升级版",
  "PS4™版《漫威暗夜之子》": "PS4版漫威暗夜之子",
  "PS4™《漫威暗夜之子》数字升级版": "PS4漫威暗夜之子数字升级版",
  "真·三国无双８ 全季票版": "真·三国无双8 全季票版",
  "真・三国无双８": "真・三国无双8",
  "真·三国无双８ 追加武器版": "真·三国无双8 追加武器版",
  "真・三国无双８ (游戏)": "真・三国无双8 (游戏)",
  "真·三国无双８ 追加剧本版": "真·三国无双8 追加剧本版",
  "真·三国无双８　免费共战＆体验版": "真·三国无双8 免费共战&体验版",
  "真・三国无双８　免费共战＆体验版": "真・三国无双8 免费共战&体验版",
  "乐高®星球大战™：天行者传奇银河版": "乐高星球大战: 天行者传奇银河版",
  "LEGO® 星球大战™：天行者传奇 PS4 & PS5": "LEGO 星球大战: 天行者传奇 PS4 & PS5",
  "LEGO® 星球大战™：天行者传奇豪华版 PS4 & PS5": "LEGO 星球大战: 天行者传奇豪华版 PS4 & PS5",
  "《God of War Sons of Sparta》": "God of War Sons of Sparta",
  "《God of War Sons of Sparta》数字豪华版": "God of War Sons of Sparta数字豪华版",
  "Forever Ago": "Forever Ago",
  "雷曼：传奇再叙": "雷曼: 传奇再叙",
  "《雷曼：传奇再叙》豪华版": "雷曼: 传奇再叙豪华版",
  "亰都幻都 -樱花幻舞-": "亰都幻都 -樱花幻舞-",
  "索尼克赛车 交叉世界 PS4 & PS5": "索尼克赛车 交叉世界 PS4 & PS5",
  "索尼克赛车 交叉世界：赛季2 数字豪华版 PS4 & PS5": "索尼克赛车 交叉世界: 赛季2 数字豪华版 PS4 & PS5",
  "索尼克赛车 交叉世界：体验版": "索尼克赛车 交叉世界: 体验版",
  "索尼克赛车 交叉世界：数字豪华版 PS4 & PS5": "索尼克赛车 交叉世界: 数字豪华版 PS4 & PS5",
  "《过山车之星 2》豪华版": "过山车之星 2豪华版",
  "过山车之星 2": "过山车之星 2",
  "哆啦A梦 牧场物语 自然王国与和乐家人": "哆啦A梦 牧场物语 自然王国与和乐家人",
  "《哆啦A梦 牧场物语 自然王国与和乐家人》数字豪华版": "哆啦A梦 牧场物语 自然王国与和乐家人数字豪华版",
  "哆啦A梦 牧场物语 自然王国与和乐家人 体验版": "哆啦A梦 牧场物语 自然王国与和乐家人 体验版",
  "小小梦魇2 PS4 & PS5": "小小梦魇2 PS4 & PS5",
  "小小梦魇2 豪华版 PS4 & PS5": "小小梦魇2 豪华版 PS4 & PS5",
  "小小梦魇1+2": "小小梦魇1+2",
  "小小梦魇2 体验版": "小小梦魇2 体验版",
  "UNCHARTED: 盗贼传奇合辑": "UNCHARTED: 盗贼传奇合辑",
  "《UNCHARTED 4: A Thief’s End》和《UNCHARTED: The Lost Legacy》数字版组合包 (游戏)": "UNCHARTED 4: A Thief's End和UNCHARTED: The Lost Legacy数字版组合包 (游戏)",
  "End of Abyss": "End of Abyss",
  "Returnal™ 数字豪华版": "Returnal 数字豪华版",
  "太鼓之达人 咚咚雷音祭": "太鼓之达人 咚咚雷音祭",
  "太鼓之达人 咚咚雷音祭 体验版": "太鼓之达人 咚咚雷音祭 体验版",
  "太鼓之达人 咚咚雷音祭 歌曲收藏集": "太鼓之达人 咚咚雷音祭 歌曲收藏集",
  "深岩银河：幸存者": "深岩银河: 幸存者",
  "Tails of Iron & Tails of Iron 2 - Deluxe Bundle": "Tails of Iron & Tails of Iron 2 - Deluxe Bundle",
  "Tails of Iron 2: Whiskers of Winter (PS4 & PS5)": "Tails of Iron 2: Whiskers of Winter (PS4 & PS5)",
  "Tails of Iron 2: Whiskers of Winter - Deluxe Edition (PS4 & PS5)": "Tails of Iron 2: Whiskers of Winter - Deluxe Edition (PS4 & PS5)",
  "Tails of Iron & Tails of Iron 2 - Standard Bundle": "Tails of Iron & Tails of Iron 2 - Standard Bundle",
  "Undisputed": "Undisputed",
  "Undisputed - Championship Edition": "Undisputed - Championship Edition",
  "异界揭踪／ANOMALITH 数字豪华版 (中日英韩文版)": "异界揭踪/ANOMALITH 数字豪华版",
  "异界揭踪／ANOMALITH": "异界揭踪/ANOMALITH",
  "异界揭踪／ANOMALITH 体验版": "异界揭踪/ANOMALITH 体验版",
  "圣骑士之战 -奋战-": "圣骑士之战 -奋战-",
  "圣骑士之战 -奋战- 2.0入门版": "圣骑士之战 -奋战- 2.0入门版",
  "Red Dead Redemption (PS4 & PS5)": "Red Dead Redemption (PS4 & PS5)",
  "Red Dead Redemption（PS4 & PS5）& Red Dead Redemption 2（PS4）捆绑包": "Red Dead Redemption(PS4 & PS5)& Red Dead Redemption 2(PS4)捆绑包",
  "蝙蝠侠：阿卡姆合辑": "蝙蝠侠: 阿卡姆合辑",
  "蝙蝠侠：阿卡姆骑士豪华版": "蝙蝠侠: 阿卡姆骑士豪华版",
  "蝙蝠侠™：阿卡姆骑士 PlayStation®Hits": "蝙蝠侠: 阿卡姆骑士 PlayStationHits",
  "只只大冒险": "只只大冒险",
  "Bipedal Party": "只只大冒险",
  "Stupid Never Dies: Glorious Idiot Edition": "愚者不灭 Glorious Idiot Edition",
  "《消逝的光芒》决定版": "消逝的光芒决定版",
  "《消逝的光芒》精要版": "消逝的光芒精要版",
  "Hello Kitty Island Adventure: Deluxe Edition": "Hello Kitty Island Adventure: Deluxe Edition",
  "Hello Kitty Island Adventure": "Hello Kitty Island Adventure",
  "无休仙途（豪华版）": "无休仙途(豪华版)",
  "无休仙途": "无休仙途",
  "超级机器人大战30 数字豪华版": "超级机器人大战30 数字豪华版",
  "『超级机器人大战30』 体验版": "超级机器人大战30 体验版",
  "超级机器人大战30": "超级机器人大战30",
  "超级机器人大战30 数字终极版": "超级机器人大战30 数字终极版",
  "小缇娜的奇幻之地：魅幻绝伦版": "小缇娜的奇幻之地: 魅幻绝伦版",
  "小缇娜的奇幻之地：增强版": "小缇娜的奇幻之地: 增强版",
  "《Nikoderiko:The Magical World》（导演剪辑版）": "Nikoderiko: The Magical World(导演剪辑版)",
  "Nikoderiko: The Magical World - Director's Cut": "导演剪辑版",
  "《Nikoderiko:The Magical World》（导演剪辑版）| 试玩版": "Nikoderiko: The Magical World(导演剪辑版)| 试玩版",
  "再来一张": "再来一张",
  "《异形：火力精英2》- 40周年典藏版": "异形: 火力精英2- 40周年典藏版",
  "Aliens: Fireteam Elite 2": "Aliens: Fireteam Elite 2",
  "《The Sinking City 2》尊享版": "The Sinking City 2尊享版",
  "《The Sinking City 2》": "The Sinking City 2尊享版",
  "《The Sinking City 2》豪华版": "The Sinking City 2豪华版",
  "The Order: 1886™ 制品版 (中英韩文版)": "The Order: 1886 制品版",
  "Rust Console Edition (PlayStation®5)": "Rust Console Edition (PlayStation5)",
  "Rust Console Edition: Deluxe (PlayStation®5)": "Rust Console Edition: Deluxe (PlayStation5)",
  "Rust Console Edition: Ultimate (PlayStation®5)": "Rust Console Edition: Ultimate (PlayStation5)",
  "英雄传说 零之轨迹：改": "英雄传说 零之轨迹: 改",
  "双点医院：满血痊愈典藏版": "双点医院: 满血痊愈典藏版",
  "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉": "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉",
  "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉 怪物大师版 (中日英韩文版)": "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉 怪物大师版",
  "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉　体验版": "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉 体验版",
  "Frostpunk 2: Deluxe Edition": "Frostpunk 2: Deluxe Edition",
  "Frostpunk 2": "Frostpunk 2",
  "静谧田园": "静谧田园",
  "静谧田园 数字豪华版": "静谧田园 数字豪华版",
  "Titan Quest": "Titan Quest",
  "《TERA》 (神游之战)": "TERA (神游之战)",
  "Dead Rising Deluxe Remaster": "Dead Rising Deluxe Remaster",
  "Dead Rising Deluxe Remaster Demo": "Dead Rising Deluxe Remaster Demo",
  "Dead Rising Deluxe Remaster Digital Deluxe": "Dead Rising Deluxe Remaster Digital Deluxe",
  "《使命召唤®：黑色行动 II》": "使命召唤: 黑色行动 II",
  "国际汽车联合会 - 世界汽车拉力锦标赛 7": "国际汽车联合会 - 世界汽车拉力锦标赛 7",
  "兄弟：双子传说 重制版（Brothers: A Tale of Two Sons Remake）": "兄弟: 双子传说 重制版(Brothers: A Tale of Two Sons Remake)",
  "Halloween: The Game": "Halloween: The Game",
  "万圣节 - 数字豪华版": "万圣节 - 数字豪华版",
  "死亡细胞 Dead Cells: Medley of Pain Bundle": "死亡细胞 Dead Cells: Medley of Pain Bundle",
  "死亡细胞 Dead Cells (PS4® & PS5®)": "死亡细胞 Dead Cells (PS4 & PS5)",
  "死亡细胞：重返恶魔城 Dead Cells: Return to Castlevania Bundle": "死亡细胞: 重返恶魔城 Dead Cells: Return to Castlevania Bundle",
  "Bus Simulator 27": "Bus Simulator 27",
  "Bus Simulator 27 - Deluxe Edition": "Bus Simulator 27 - Deluxe Edition",
  "Bus Simulator 27 - Year 1 Edition": "Bus Simulator 27 - Year 1 Edition",
  "RACCOON CITY EDITION": "RACCOON CITY EDITION",
  "RESIDENT EVIL 3": "RESIDENT EVIL 3",
  "Resident Evil 3: Raccoon City Demo": "Resident Evil 3: Raccoon City Demo",
  "Age of Empires II: Definitive Edition - Standard Edition": "帝国时代II：决定版 标准版",
  "Age of Empires II: Definitive Edition Premium Edition": "帝国时代II：决定版 高级版",
  "首都高赛车": "首都高赛车",
  "《WILD HEARTS™》标准版": "WILD HEARTS标准版",
  "《WILD HEARTS™》机巧版": "WILD HEARTS机巧版",
  "仁王２ Remastered Complete Edition PS4 & PS5": "仁王2 Remastered Complete Edition PS4 & PS5",
  "仁王２": "仁王2",
  "仁王 Collection": "仁王 Collection",
  "《漫威银河护卫队》PS4和PS5": "漫威银河护卫队PS4和PS5",
  "Contra Run & Gun Bundle": "Contra Run & Gun Bundle",
  "Contra: Operation Galuga PS4 & PS5": "Contra: Operation Galuga PS4 & PS5",
  "《神探杰克鼠》": "神探杰克鼠",
  "「EA SPORTS FC™ 27」Standard Edition PS4 & PS5": "EA SPORTS FC 27 标准版 PS4 & PS5",
  "「EA SPORTS FC™ 27」Ultimate Edition PS4 & PS5": "EA SPORTS FC 27 终极版 PS4 & PS5",
  "エーペックスレジェンズ‎ PS4™": "Apex 英雄",
  "エーペックスレジェンズ‎ PS5": "Apex 英雄",
  "Dead by Daylight: Jasonエディシ": "黎明杀机: 杰森版",
  "Dead by Daylight: ゴールドエディション": "黎明杀机: 杰森版",
  "Dead by Daylight: 10th Anniversary Edition": "黎明杀机: 十周年版",
  "ACE COMBAT 8: WINGS OF THEVE DELUXE EDITION": "空战奇兵8 希孚之翼 豪华版",
  "PSO2 ニュージェネシス": "PSO2 ニュージェネシス",
  "グランド・セフト・オートVI：アルティメット・エディション": "侠盗猎车手VI アルティメット・エディション",
  "Fortnite Battle Royale": "Fortnite Battle Royale",
  "Fortnite Festival": "Fortnite Festival",
  "フォートナイト ORIGIN": "フォートナイト ORIGIN",
  "フォートナイト 世界を救え": "フォートナイト 世界を救え",
  "レゴ®フォートナイト オデッセイ": "レゴフォートナイト オデッセイ",
  "レゴ®フォートナイト ブロックライフ": "レゴフォートナイト ブロックライフ",
  "真・三國無双２ with 猛将伝 Remastered 体験版": "真・三国无双2 with 猛将传 Remastered 体验版",
  "『NBA 2K27』デラックス エディション": "NBA 2K27 デラックス エディション",
  "ソードアート・オンライン フラクチュアード デイドリーム デジタルプレミアムエディション": "刀剑神域 碎梦边境",
  "ソードアート・オンライン フラクチュアード デイドリーム デジタルデラックスエディション": "刀剑神域 碎梦边境",
  "ソードアート・オンライン フラクチュアード デイドリーム": "刀剑神域 碎梦边境",
  "ドラゴンクエストＸ　オンライン　オールインワンパッケージ　version 1-8": "ドラゴンクエストX オンライン オールインワンパッケージ version 1-8",
  "ドラゴンクエストＸ　オンライン　体験版": "勇者斗恶龙X Online 体験版",
  "ファイナルファンタジー レゾナンス Digital Deluxe Edition": "最终幻想：共鸣 数字豪华版",
  "ファイナルファンタジー レゾナンス 第一章まるごと先行体験版": "FINAL FANTASY RESONANCE第一章抢先体验版",
  "モンスターハンターワイルズ ゴールドエディション": "Monster Hunter Wilds 黄金版",
  "モンスターハンターワイルズ 序盤体験版": "モンスターハンターワイルズ 序盤体験版",
  "スター・ウォーズ：ギャラクティック・レーサー™": "星球大战: 银河赛车手",
  "スター・ウォーズ：ギャラクティック・レーサー™ デラックスエディション": "星球大战: 银河赛车手",
  "Minecraft: Deluxe Collection": "Minecraft: Deluxe Collection",
  "Minecraft トリプル バンドル": "我的世界",
  "DEAD OR ALIVE 6 Last Round 基本無料版": "DEAD OR ALIVE 6 Last Round Core Fighters",
  "DEAD OR ALIVE 6 基本無料版": "DEAD OR ALIVE 6 基本無料版",
  "星の翼": "星之翼",
  "ペルソナ３ リロードPS4＆PS5": "女神异闻录3 Reload PS4&PS5",
  "ペルソナ３ リロード デジタルデラックスエディション PS4 & PS5": "女神异闻录3 Reload PS4&PS5",
  "ペルソナ３ リロード DEMO": "女神异闻录3 Reload 体验版",
  "ペルソナ３ リロード デジタルプレミアムエディションPS4&PS5": "女神异闻录3 Reload PS4&PS5",
  "地球防衛軍６.２ DeluxeEdition": "地球防衛軍6.2 DeluxeEdition",
  "Ghost of Yōtei™ Complete Edition": "羊蹄山之魂 完整版",
  "GTAオンライン (PlayStation®5)": "Grand Theft Auto 在线模式",
  "『グランド・セフト・オートV』(PS4™ & PS5™)": "Grand Theft Auto 在线模式",
  "『グランド・セフト・オートV』&ホワイトシャーク マネーカードバンドル": "Grand Theft Auto 在线模式",
  "ELDEN RING SHADOW OF THE ERDTREE EDITION PS4 & PS5": "ELDEN RING SHADOW OF THE ERDTREE EDITION PS4 & PS5",
  "ELDEN RING PS4 & PS5": "艾尔登法环 PS4 & PS5",
  "ELDEN RING SHADOW OF THE ERDTREE DELUXE EDITION PS4 & PS5": "ELDEN RING SHADOW OF THE ERDTREE DELUXE EDITION PS4 & PS5",
  "ELDEN RING SHADOW OF THE ERDTREE PREMIUM BUNDLE PS4 & PS5": "ELDEN RING SHADOW OF THE ERDTREE PREMIUM BUNDLE PS4 & PS5",
  "Call of Duty®: Modern Warfare® 4 - 秘蔵版": "Call of Duty: Modern Warfare 4 - 秘蔵版",
  "Call of Duty®: Black Ops 7 - クロスジェンバンドル": "使命召唤: 战争地带",
  "Call of Duty®: Black Ops 6 - クロスジェンバンドル": "使命召唤: 战争地带",
  "Call of Duty®: Modern Warfare® II - クロスジェンバンドル": "使命召唤: 战争地带",
  "Call of Duty®: Modern Warfare® III - クロスジェンバンドル": "使命召唤: 战争地带",
  "Call of Duty®: Warzone™": "使命召唤: 战争地带",
  "Roblox (ロブロックス)": "Roblox",
  "FINAL FANTASY VII Remake Series Trilogy Edition": "最终幻想VII 重制系列三部曲合集",
  "グランツーリスモ7 25周年アニバーサリーデジタルデラックスエディション": "跑车浪漫旅 7",
  "ザ クルー：モーターフェス Cross-Genバンドル": "飙酷车神: 轰鸣盛典",
  "ザ クルー：モーターフェス Headlinersエディション": "飙酷车神: 轰鸣盛典",
  "ザ クルー：モーターフェス": "飙酷车神: 轰鸣盛典",
  "ザ クルー：モーターフェス Grand Garageエディション": "飙酷车神: 轰鸣盛典",
  "ザ クルー：モーターフェス デラックスエディション": "飙酷车神: 轰鸣盛典",
  "ワンス・アポン・ア・塊魂　ロイヤルサウンドエディション": "从前从前有个块魂",
  "ワンス・アポン・ア・塊魂　ローリングライブハイライツエディション": "从前从前有个块魂",
  "ワンス・アポン・ア・塊魂": "从前从前有个块魂",
  "Street Fighter 6 Years 1-2 ファイターズエディション": "Street Fighter 6 Years 1-2 ファイターズエディション",
  "空の軌跡 the 2nd 体験版": "空之轨迹 the 2nd",
  "ディアブロ IV - スタンダードエディション": "Diablo IV - 标准版",
  "『ディビジョン2』 - ゴールドエディション": "全境封锁2",
  "ディビジョン2 - アルティメットエディション": "全境封锁2",
  "ディビジョン2 - エリートエディション": "全境封锁2",
  "ディビジョン2 - レジェンダリーエディション": "全境封锁2",
  "プロ野球スピリッツ2026 デジタルデラックス版": "职业棒球之魂2026 数字豪华版",
  "レインボーシックス シージ - エリートエディション": "虹彩六号: 围攻行动",
  "レインボーシックス シージ - アルティメットエディション": "虹彩六号: 围攻行动",
  "テイルズ オブ エターニア リマスター PS4 & PS5": "永恒传说 复刻版 PS4 & PS5",
  "テイルズ オブ エターニア リマスター デラックスエディション PS4 & PS5": "永恒传说 复刻版 豪华版 PS4 & PS5",
  "鬼武者 Way of the Sword プレミアムデラックスエディション": "鬼武者 Way of the Sword",
  "鬼武者 Way of the Sword デラックスエディション": "鬼武者 Way of the Sword",
  "ドラゴンクエストモンスターズ４　枯れ木の国のビアンカ・フローラ　マスターズ版": "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉",
  "ドラゴンクエストモンスターズ４　枯れ木の国のビアンカ・フローラ　体験版": "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉",
  "GUNDAM ROGUE ORBIT デラックスエディション": "GUNDAM 异轨征途",
  "『World of Tanks Modern Armor』– 高精度の相棒": "World of Tanks Modern Armor – 极速恶魔",
  "『World of Tanks Modern Armor』– 伝説の走り屋": "World of Tanks Modern Armor – 极速恶魔",
  "Winning Post 10 2026（PS4 & PS5）": "赛马大亨10 2026(PS4 & PS5)",
  "Winning Post 10 2026（PS4）": "赛马大亨10 2026(PS4)",
  "【体験版】Winning Post 10 2026（PS5）": "【体験版】Winning Post 10 2026(PS5)",
  "アメリカスターター バンドル": "战争雷霆",
  "ソビエト連邦スターター バンドル": "战争雷霆",
  "大日本帝国スターター バンドル": "战争雷霆",
  "ドイツスターター バンドル": "战争雷霆",
  "\"ビー・プリペアード！\" バンドル": "战争雷霆",
  "PlayStation®5高解像度テクスチャエディション（ゲーム本編＋陸空テクスチャパック）": "战争雷霆",
  "Minecraft Dungeons II デラックス エディション": "Minecraft Dungeons II 豪华版",
  "Deep Rock Galactic: Survivor": "深岩银河: 幸存者",
  "アノマリス／ANOMALITH デジタルデラックスエディション": "异界揭踪/ANOMALITH",
  "アノマリス／ANOMALITH": "异界揭踪/ANOMALITH",
  "アノマリス／ANOMALITH Demo": "异界揭踪/ANOMALITH 体验版",
  "GUILTY GEAR -STRIVE- PS4 & PS5": "圣骑士之战 -奋战-",
  "GUILTY GEAR -STRIVE- 2.0 スターターエディション": "圣骑士之战 -奋战-",
  "ドラゴンボール Sparking! ZERO レジェンダリーエディション": "七龙珠 电光炸裂!ZERO",
  "ドラゴンボール Sparking! ZERO 限界超突破「NEO」エディション": "七龙珠 电光炸裂!ZERO",
  "ロマンシング サガ3 デスティニーユナイテッド デジタルデラックス版": "浪漫沙加3 错综宿命",
  "Path of Exile 2 ファウンダーズパック - Path of Exile 2 早期アクセス": "Path of Exile 2 ファウンダーズパック - Path of Exile 2 早期アクセス",
  "Path of Exile 2 ファウンダーズパック - ファリドゥンの王": "Path of Exile 2 ファウンダーズパック - ファリドゥンの王",
  "Path of Exile 2 ファウンダーズパック - オガムの領主": "Path of Exile 2 ファウンダーズパック - オガムの領主",
  "スーパーロボット大戦Y デジタルデラックスエディション": "超级机器人大战Y",
  "スーパーロボット大戦Y デジタルアルティメットエディション": "超级机器人大战Y",
  "スーパーロボット大戦Y 体験版": "超级机器人大战Y",
  "ツーポイントミュージアム：エクスプローラーエディション": "双点博物馆",
  "ツーポイントミュージアム": "双点博物馆",
  "地球防衛軍６ PS4 & PS5": "地球防卫军6 PS4 & PS5",
  "地球防衛軍６ Deluxe Edition  PS4 & PS5": "地球防卫军6 豪华版 PS4 & PS5",
  "四角い地球に再びシカク現る!? デジボク地球防衛軍2 EARTH DEFENSE FORCE: WORLD BROTHERS デラックスエディション　PS4 & PS5": "地球再次变四方?! 数码方块地球防卫军2",
  "四角い地球に再びシカク現る!? デジボク地球防衛軍2 EARTH DEFENSE FORCE: WORLD BROTHERS　PS4 & PS5": "地球再次变四方?! 数码方块地球防卫军2",
  "STRANGER THAN HEAVEN デラックス・エディション": "STRANGER THAN HEAVEN デラックス・エディション",
  "首都高バトル": "首都高赛车",
  "Transport Fever 3: Deluxe Edition": "Transport Fever 3 豪华版",
  "紅の砂漠 Enhanced デラックスエディション": "红色沙漠: 增强版",
  "ペルソナ４ リバイバル: デジタルデラックスエディション": "女神异闻录4 Revival",
  "ペルソナ４ リバイバル: デジタルプレミアムエディション": "女神异闻录4 Revival",
  "Phantom Blade Zero Digital Deluxe Edition": "影之刃零 数字豪华版",
  "Risk of Rain 2": "雨中冒险 2",
  "Risk of Rain 2 & Survivors of the Void Bundle": "Risk of Rain 2 & Survivors of the Void Bundle",
  "リスク・オブ・レイン 2 + サバイバーズ・オブ・ザ・ボイド + シーカーズ・オブ・ザ・ストーム + アロイ・コレクティブ + ハロウド・コンセプツ": "雨中冒险 2+虚空幸存者+风暴探寻者+合金意念+ 万象归衡",
  "3on3フリースタイル": "3对3街头篮球",
  "プラネット ズー 2: デラックス版": "动物园之星 2",
  "プラネット ズー 2": "动物园之星 2",
  "モンスターハンターワールド：アイスボーン マスターエディション": "モンスターハンターワールド: アイスボーン マスターエディション",
  "モンスターハンターワールド：アイスボーン マスターエディション デジタルデラックス": "モンスターハンターワールド: アイスボーン マスターエディション デジタルデラックス",
  "ソニックレーシング クロスワールド：デジタルデラックスエディション PS4 & PS5": "索尼克赛车 交叉世界 PS4 & PS5",
  "ソニックレーシング クロスワールド：シーズン2 デジタルデラックスエディション PS4 & PS5": "索尼克赛车 交叉世界 PS4 & PS5",
  "ソニックレーシング クロスワールド：体験版": "索尼克赛车 交叉世界 PS4 & PS5",
  "『ボーダーランズ® 4』超デラックス・エディション": "无主之地4",
  "ボーダーランズ®4": "无主之地4",
  "『ボーダーランズ® 4』デラックス・エディション": "无主之地4",
  "デジモンストーリー タイムストレンジャー アルティメットエディション": "数码宝贝物语 时空异客",
  "デジモンストーリー タイムストレンジャー 体験版": "数码宝贝物语 时空异客",
  "鉄拳8 Season2 Ultimate Edition": "鉄拳8 Season2 Ultimate Edition",
  "鉄拳8 Season2 Deluxe Edition": "鉄拳8 Season2 Deluxe Edition",
  "ACE COMBAT™ 7: SKIES UNKNOWN Welcome Price!!": "游戏",
  "ACE COMBAT™ 7: SKIES UNKNOWN 25th Anniversary Edition": "ACE COMBAT 7: SKIES UNKNOWN 25th Anniversary Edition",
  "ACE COMBAT™ 7: SKIES UNKNOWN Ultimate Edition": "皇牌空战7：未知空域 终极版",
  "ACE COMBAT™ 7: SKIES UNKNOWN Deluxe Edition 2022": "ACE COMBAT 7: SKIES UNKNOWN Deluxe Edition 2022",
  "ACE COMBAT™ 7: SKIES UNKNOWN VR MODE 体験版": "ACE COMBAT 7: SKIES UNKNOWN VR MODE 体験版",
  "真・三國無双 ORIGINS Digital Deluxe": "真·三国无双 起源 数字豪华版",
  "真・三國無双 ORIGINS 体験版": "真・三国无双 起源 体验版",
  "Marvel’s Wolverineデジタルデラックスエディション": "漫威金刚狼",
  "風燕伝：Where Winds Meet（無料プレイ）": "燕云十六声(免费游玩)",
  "信長の野望 Online ～天楼の章～": "信長の野望 Online ~天楼の章~",
  "GRANBLUE FANTASY: Relink - Endless Ragnarok（Standard Edition）": "GRANBLUE FANTASY: Relink - Endless Ragnarok(Standard Edition)",
  "GRANBLUE FANTASY: Relink Standard Edition": "碧蓝幻想：Relink 标准版",
  "GRANBLUE FANTASY: Relink - Endless Ragnarok（Special Edition）": "GRANBLUE FANTASY: Relink - Endless Ragnarok(Special Edition)",
  "GRANBLUE FANTASY: Relink - Endless Ragnarok Demo": "GRANBLUE FANTASY: Relink - Endless Ragnarok Demo",
  "『ホグワーツ・レガシー』PS5版": "霍格沃茨之遗PS5版",
  "『ホグワーツ・レガシー』PS4版": "霍格沃茨之遗PS5版",
  "『ホグワーツ・レガシー』+『ハリー・ポッター：クィディッチ・チャンピオンズ』デラックス・エディションバンドル": "霍格沃茨之遗PS5版",
  "DEAD OR ALIVE 5 Last Round": "DEAD OR ALIVE 5 Last Round",
  "DEAD OR ALIVE 5 Last Round 基本無料版": "DEAD OR ALIVE 5 Last Round 基本無料版",
  "太鼓の達人 ドンダフルフェスティバル ソングコレクションセット": "太鼓之达人 咚咚雷音祭",
  "太鼓の達人 ドンダフルフェスティバル 体験版": "太鼓之达人 咚咚雷音祭",
  "ドラゴンボールZ KAKAROT PS4&PS5": "七龙珠Z 卡卡洛特 PS4&PS5",
  "ドラゴンボールZ KAKAROT DAIMA EDITION PS4 & PS5": "ドラゴンボールZ KAKAROT DAIMA EDITION PS4 & PS5",
  "ドラゴンボールZ KAKAROT MASTER EDITION PS4 & PS5": "ドラゴンボールZ KAKAROT MASTER EDITION PS4 & PS5",
  "ドラゴンボールZ KAKAROT 体験版": "七龙珠Z 卡卡洛特 PS4&PS5",
  "HELLDIVERS™ 2 スーパー市民エディション": "HELLDIVERS 2超级公民版",
  "SYNDUALITY Echo of Ada アルティメットエディション": "奇异贤伴 爱达之歌 アルティメットエディション",
  "SYNDUALITY Echo of Ada デラックスエディション": "奇异贤伴 爱达之歌 豪华版",
  "ONE PIECE 海賊無双4 Ultimate Edition PS4 & PS5": "ONE PIECE 海贼无双4 终极版 PS4 & PS5",
  "ONE PIECE 海賊無双4 PS4 & PS5": "ONE PIECE 海贼无双4 PS4 & PS5",
  "ONE PIECE 海賊無双4 Deluxe Edition PS4 & PS5": "ONE PIECE 海贼无双4 豪华版 PS4 & PS5",
  "進撃の巨人３ Digital Deluxe Edition": "进击的巨人3 数字豪华版",
  "ドラゴンボール ゲキシン スクアドラ PS4 & PS5": "ドラゴンボール ゲキシン スクアドラ PS4 & PS5",
  "PS5®版『NBA 2K26』": "PS5版NBA 2K26",
  "『NBA 2K26』スーパースター エディション": "NBA 2K26超级明星版",
  "『NBA 2K26』 x 『WWE 2K25』バンドル": "NBA 2K26超级明星版",
  "『NBA 2K26』 x 『ゴルフ PGAツアー 2K25』バンドル": "NBA 2K26超级明星版",
  "『NBA 2K26』SLAMエディション": "NBA 2K26超级明星版",
  "魔界戦記ディスガイア７": "魔界戦記ディスガイア7",
  "魔界戦記ディスガイア７ 体験版【PS4™版】": "魔界戦記ディスガイア7 体験版【PS4版】",
  "魔界戦記ディスガイア７ 体験版【PS5™版】": "魔界戦記ディスガイア7 体験版【PS5版】",
  "魔界戦記ディスガイア７ これまでの全部入りはじめました。": "魔界戦記ディスガイア7 これまでの全部入りはじめました。",
  "カラオケ JOYSOUND.TV Plus ダウンロード版": "カラオケ JOYSOUND.TV Plus ダウンロード版",
  "ファイナルファンタジーXIV - コンプリートパック": "最终幻想XIV コンプリートパック",
  "ファイナルファンタジーXIV - スターターパック": "最终幻想XIV スターターパック",
  "ファイナルファンタジーXIV - コンプリートパック コレクターズ・エディション": "最终幻想XIV コンプリートパック コレクターズ・エディション",
  "ファイナルファンタジーXIV - PS5アップグレード版": "最终幻想XIV PS5アップグレード版",
  "ファイナルファンタジーXIV - フリートライアル": "最终幻想XIV フリートライアル",
  "仁王３ Digital Deluxe Edition": "仁王3 数字豪华版",
  "仁王３ 体験版": "仁王3 体験版",
  "「UFC™ 6」アルティメット エディション": "UFC 6 アルティメット エディション",
  "うたわれるもの 白への道標": "うたわれるもの 白への道標",
  "Bloodborne® PlayStation®Hits": "血源诅咒 PlayStation Hits",
  "Bloodborne® The Old Hunters Edition": "血源诅咒 老猎人版",
  "『アサシン クリード シャドウズ』プレミアムエディション": "刺客信条: 影",
  "『アサシン クリード シャドウズ』デジタルデラックスエディション": "刺客信条: 影",
  "Tales of ARISE - Beyond the Dawn Edition PS4 & PS5": "Tales of ARISE - Beyond the Dawn Edition PS4 & PS5",
  "Tales of ARISE Demo Version & 『テイルズ オブ』シリーズギャラリー": "Tales of ARISE Demo Version & テイルズ オブシリーズギャラリー",
  "Tales of ARISE - Beyond the Dawn Premium Edition PS4 & PS5": "Tales of ARISE - Beyond the Dawn Premium Edition PS4 & PS5",
  "BIOHAZARD RE:4 Gold Edition PS4 & PS5": "生化危机4 重制版 黄金版 PS4 & PS5",
  "BIOHAZARD RE:4 PS4 & PS5": "生化危机4 重制版 PS4 & PS5",
  "BIOHAZARD Remake Trilogy": "BIOHAZARD Remake Trilogy",
  "BIOHAZARD RE:4 Chainsaw Demo PS4 & PS5": "BIOHAZARD RE: 4 Chainsaw Demo PS4 & PS5",
  "BIOHAZARD RE:4 VR MODE Gameplay Demo": "BIOHAZARD RE: 4 VR MODE Gameplay Demo",
  "三國志14 with パワーアップキット Complete Edition（PS5）": "三国志14 威力加强传承版套装(PS5)",
  "三國志14 with パワーアップキット": "三国志 14",
  "三國志14 with パワーアップキット Complete Edition（PS4）": "三国志14 威力加强传承版套装(PS4)",
  "Wo Long 2: Wings of Ember Digital Deluxe Edition": "卧龙2：凤火连天 数字豪华版",
  "ゴッド・オブ・ウォー ラウフェイ™": "God of War Laufey",
  "ゴッド・オブ・ウォー ラウフェイ™ デジタルデラックスエディション": "God of War Laufey 数字豪华版",
  "ゴッド・オブ・ウォー ラウフェイ™ デジタルデラックスエディションアップグレード": "God of War Laufey 数字豪华版升级",
  "『スーパーロボット大戦30』体験版": "超级机器人大战30",
  "スーパーロボット大戦30 デジタルアルティメットエディション": "超级机器人大战30",
  "スーパーロボット大戦30 デジタルデラックスエディション": "超级机器人大战30",
  "『F1® 25』2026シーズンエディション": "F1 25: 2026赛季版",
  "ザ・ハンター：コール・オブ・ザ・ワイルド™ - 狩猟プロバンドル": "猎人: 荒野的召唤",
  "theHunter: Call of the Wild™ – 狩りスターターバンドル": "猎人: 荒野的召唤",
  "REMATCH - PRO EDITION": "REMATCH - PRO EDITION",
  "『Rematch』×『ブルーロック』トレーニングパック": "REMATCH × BLUE LOCK TRAINING PACK BUNDLE",
  "REMATCH - ELITE EDITION": "REMATCH - ELITE EDITION",
  "DEAD OR ALIVE Xtreme 3 Fortune 基本無料版": "DEAD OR ALIVE Xtreme 3 Fortune 基本無料版",
  "ELDEN RING NIGHTREIGN DELUXE EDITION PS4 & PS5": "艾尔登法环 黑夜君临 豪华版 PS4 & PS5",
  "ELDEN RING NIGHTREIGN PS4 & PS5": "艾尔登法环 黑夜君临 PS4 & PS5",
  "ユニコーンオーバーロード PS4&PS5": "ユニコーンオーバーロード PS4&PS5",
  "ダウンロード豪華版『ユニコーンオーバーロード』モナークエディション PS4 & PS5": "ダウンロード豪華版ユニコーンオーバーロードモナークエディション PS4 & PS5",
  "ユニコーンオーバーロード 体験版": "ユニコーンオーバーロード 体験版",
  "『WWE 2K26』通常版": "WWE 2K26标准版",
  "『WWE 2K26』ATTITUDE時代 エディション": "WWE 2K26标准版",
  "『WWE 2K26』キングオブキングス エディション": "WWE 2K26标准版",
  "『WWE 2K26』マンデーナイトウォー エディション": "WWE 2K26标准版",
  "『シドマイヤーズ シヴィライゼーション VII』開拓者エディション": "席德·梅尔的文明VII",
  "『シドマイヤーズ シヴィライゼーション® VII』": "席德·梅尔的文明VII",
  "『シドマイヤーズ シヴィライゼーション® VII』デラックス エディション": "席德·梅尔的文明VII",
  "MechWarrior 5: Mercenaries": "MechWarrior 5: Mercenaries",
  "MechWarrior 5: Mercenaries - JumpShip Edition": "MechWarrior 5: Mercenaries - JumpShip Edition",
  "MechWarrior 5: Mercenaries - Succession Wars Edition": "MechWarrior 5: Mercenaries - Succession Wars Edition",
  "NARUTO TO BORUTO シノビストライカー": "NARUTO TO BORUTO シノビストライカー",
  "NARUTO TO BORUTO シノビストライカー デラックスエディション": "NARUTO TO BORUTO シノビストライカー デラックスエディション",
  "NARUTO TO BORUTO シノビストライカー アルティメットエディション": "NARUTO TO BORUTO シノビストライカー アルティメットエディション",
  "モンスターハンターライズ ＋ サンブレイク ダブルデラックスセット": "モンスターハンターライズ + サンブレイク ダブルデラックスセット",
  "モンスターハンターライズ PS4 & PS5": "怪物猎人 崛起 PS4 & PS5",
  "モンスターハンターライズ デラックスエディション PS4 & PS5": "怪物猎人 崛起 豪华版 PS4 & PS5",
  "Forza Horizon 5 Deluxe Edition": "极限竞速：地平线 5 豪华版",
  "Fate/EXTRA Record デジタルデラックスエディション PS4 & PS5": "Fate/EXTRA Record 数字豪华版 PS4 & PS5",
  "Fate/EXTRA Record PS4 & PS5": "Fate/EXTRA Record PS4 & PS5",
  "龍が如く８　デラックス・エディション　PS4 & PS5": "人中之龙8 PS4 & PS5",
  "龍が如く８　アルティメット・エディション　PS4 & PS5": "人中之龙8 PS4 & PS5",
  "龍が如く８　PS4 & PS5": "人中之龙8 PS4 & PS5",
  "レッド・デッド・リデンプション2": "Red Dead 在线模式",
  "レッド・デッド・リデンプション2：アルティメット・エディション": "Red Dead 在线模式",
  "レッド・デッド・オンライン": "Red Dead 在线模式",
  "亰都ザナドゥ -桜花幻舞-": "亰都幻都 -樱花幻舞-",
  "バットマン：アーカム・コレクション": "蝙蝠侠: 阿卡姆合辑",
  "バットマン：アーカム・ナイト スペシャル・エディション": "蝙蝠侠: 阿卡姆合辑",
  "『アサシン クリード ブラック フラッグ RE:シンクロ』デラックスエディション": "刺客信条: 黑旗 记忆重置",
  "夜廻三 体験版": "夜廻三 体験版",
  "Deck of Haunts": "Deck of Haunts",
  "Marvel's Spider-Man Game of the Year Edition": "漫威蜘蛛侠 年度版",
  "Phasmophobia": "Phasmophobia",
  "CODE VEIN II Deluxe Edition": "噬血代码 II 豪华版",
  "CODE VEIN II Character Creator Demo": "CODE VEIN II Character Creator Demo",
  "英雄伝説 創の軌跡 通常版": "英雄伝説 創の軌跡 通常版",
  "英雄伝説 創の軌跡 デジタルデラックス版": "英雄伝説 創の軌跡 デジタルデラックス版",
  "英雄伝説「閃の軌跡Ⅰ～Ⅳ」＆「創の軌跡」コンプリートBOX": "英雄伝説閃の軌跡I~IV&創の軌跡コンプリートBOX",
  "空の軌跡 the 1st 体験版": "空之轨迹 the 1st",
  "空の軌跡 the 1st デジタルデラックス版": "空之轨迹 the 1st",
  "『Stellar Blade』コンプリートエディション": "剑星",
  "BIOHAZARD requiem デラックスエディション": "生化危机 安魂曲 豪华版",
  "BIOHAZARD requiem - Demo": "生化危机 安魂曲 体验版",
  "BLEACH Rebirth of Souls PS4 & PS5": "BLEACH 魂魄觉醒 PS4 & PS5",
  "BLEACH Rebirth of Souls アルティメットエディション PS4 & PS5": "BLEACH 魂魄觉醒 PS4 & PS5",
  "BLEACH Rebirth of Souls デラックスエディション PS4 & PS5": "BLEACH 魂魄觉醒 PS4 & PS5",
  "FINAL FANTASY XVI コンプリートエディション": "FINAL FANTASY XVI 完全版",
  "Granblue Fantasy Versus: Rising Standard Edition": "碧蓝幻想 Versus：崛起 标准版",
  "Active Matter - Deluxe Edition": "Active Matter 豪华版",
  "Active Matter - Advanced Edition": "Active Matter - Advanced Edition",
  "ジョジョの奇妙な冒険　アイズオブヘブン(PS4®版)": "ジョジョの奇妙な冒険 アイズオブヘブン(PS4版)",
  "スノーランナー　1-Year Anniversary Edition": "SnowRunner - 1-Year Anniversary Edition",
  "スノーランナー": "SnowRunner",
  "ドラゴンボール ゼノバース2 アルティメットエディション": "七龙珠 异战2",
  "ドラゴンボール ゼノバース 2 スーパーデラックスエディション": "七龙珠 异战2",
  "MARVEL Tōkon: Fighting Soulsアルティメットエディション": "漫威斗魂 アルティメットエディション",
  "MARVEL Tōkon: Fighting Souls": "漫威斗魂",
  "MARVEL Tōkon: Fighting Soulsデジタルデラックスエディション": "漫威斗魂 数字豪华版",
  "DARK SOULS Ⅲ": "黑暗之魂III",
  "DARK SOULS Ⅲ THE FIRE FADES EDITION": "DARK SOULS III THE FIRE FADES EDITION",
  "Marvel’s Spider-Man 2 デジタルデラックスエディション": "漫威蜘蛛侠2 数字豪华版",
  "ETERNAL（エターナル）": "ETERNAL(エターナル)",
  "ETERNAL（エターナル）+有償石1000+アークロア2倍お得セット": "ETERNAL(エターナル)+有償石1000+アークロア2倍お得セット",
  "ETERNAL（エターナル）+有償石3000+アークロア4倍お得セット＋PS版限定アバター": "ETERNAL(エターナル)+有償石3000+アークロア4倍お得セット+PS版限定アバター",
  "ETERNAL（エターナル）+有償石500+アークロアお得セット": "ETERNAL(エターナル)+有償石500+アークロアお得セット",
  "シティーズ：スカイライン PlayStation®4 Edition": "シティーズ: スカイライン PlayStation4 Edition",
  "シティーズ：スカイライン PlayStation®4 Edition メイヤーズエディション": "シティーズ: スカイライン PlayStation4 Edition メイヤーズエディション",
  "シティーズ：スカイライン PlayStation®4 Premium Edition": "シティーズ: スカイライン PlayStation4 Premium Edition",
  "ほの暮しの庭 デジタルデラックスエディション": "静谧田园",
  "いただきストリート　ドラゴンクエスト＆ファイナルファンタジー　30th ANNIVERSARY": "いただきストリート ドラゴンクエスト&ファイナルファンタジー 30th ANNIVERSARY",
  "Marathon": "失落星船: 马拉松",
  "Marathonデラックス版": "失落星船: 马拉松",
  "龍が如く 極３ / 龍が如く３外伝 Dark Ties  デラックス・エディション PS4 & PS5": "人中之龙 极3 / 人中之龙3外传 Dark Ties PS4 & PS5",
  "龍が如く 極３ / 龍が如く３外伝 Dark Ties 体験版": "人中之龙 极3 / 人中之龙3外传 Dark Ties PS4 & PS5",
  "『Ghost of Tsushima』ボーナスコンテンツ（デジタルミニアートブック＆ディレクターズコメンタリー）": "奇谈模式",
  "Ghost of Tsushima: Legends／冥人奇譚（単体版）": "Ghost of Tsushima: Legends/冥人奇譚(単体版)",
  "信長の野望･新生 with パワーアップキット Complete Edition": "信长之野望·新生 完整版",
  "信長の野望･新生 with パワーアップキット": "信长之野望·新生",
  "信長の野望･新生 with パワーアップキット Complete Edition + Collector's Set": "信長之野望・新生 with 威力加強版 Complete Edition + Collector's Set",
  "信長の野望·新生": "信长之野望·新生",
  "信長の野望·新生 Digital Deluxe Edition": "信长之野望·新生 数字豪华版",
  "信長の野望･新生 with パワーアップキット Digital Deluxe Edition": "信长之野望·新生 数字豪华版",
  "フロンティアハンター-豪華版": "フロンティアハンター-豪華版",
  "フロンティアハンター ～エルザの運命の輪～": "边境猎人: 艾尔莎的命运之轮",
  "クライムライト／CRYMELIGHT デラックスエディション": "恸哭幽光/CRYMELIGHT",
  "クライムライト／CRYMELIGHT": "恸哭幽光/CRYMELIGHT",
  "BLAZBLUE　CENTRALFICTION": "苍翼默示录 神观之梦",
  "The Outer Worlds 2 Premium Edition": "天外世界2 高级版",
  "BIOHAZARD VILLAGE Z Version GOLD EDITION PS4 & PS5": "生化危机8：村庄 Z Version 黄金版 PS4 & PS5",
  "BIOHAZARD VILLAGE Gold Edition PS4 & PS5": "生化危机8：村庄 黄金版 PS4 & PS5",
  "BIOHAZARD VILLAGE PS4 & PS5": "生化危机8：村庄 PS4 & PS5",
  "BIOHAZARD VILLAGE Z Version PS4 & PS5": "生化危机8：村庄 Z Version PS4 & PS5",
  "BIOHAZARD 7 Gold Edition & VILLAGE Gold Edition バンドル PS4 & PS5": "BIOHAZARD 7 Gold Edition & VILLAGE Gold Edition バンドル PS4 & PS5",
  "BIOHAZARD 7 Gold Edition & VILLAGE Gold Edition バンドル Z Version PS4 & PS5": "BIOHAZARD 7 Gold Edition & VILLAGE Gold Edition バンドル Z Version PS4 & PS5",
  "BIOHAZARD VILLAGE GOLD EDITION Gameplay Demo": "BIOHAZARD VILLAGE GOLD EDITION Gameplay Demo",
  "BIOHAZARD VILLAGE VR MODE Gameplay Demo": "BIOHAZARD VILLAGE VR MODE Gameplay Demo",
  "MAIDEN": "MAIDEN",
  "機動戦士ガンダム EXTREME VS. マキシブーストON": "MOBILE SUIT GUNDAM EXTREME VS. 极限爆发",
  "機動戦士ガンダム EXTREME VS. マキシブーストON STARTER EDITION": "機動戦士ガンダム EXTREME VS. マキシブーストON STARTER EDITION",
  "機動戦士ガンダム EXTREME VS. マキシブーストON プレミアムサウンドエディション": "MOBILE SUIT GUNDAM EXTREME VS. 极限爆发",
  "ファーミングシミュレーター 25": "ファーミングシミュレーター 25",
  "Farming Simulator 25: Beans & Alpacas Edition": "Farming Simulator 25: Beans & Alpacas Edition",
  "Farming Simulator 25: Highlands Fishing Edition": "Farming Simulator 25: Highlands Fishing Edition",
  "Farming Simulator 25: Year 1 Bundle": "Farming Simulator 25: Year 1 Bundle",
  "ガンダムブレイカー４ PS4 & PS5": "GUNDAM 创坏者4 PS4 & PS5",
  "ガンダムブレイカー４ デジタルアルティメットエディション PS4 & PS5": "GUNDAM 创坏者4 PS4 & PS5",
  "ガンダムブレイカー４ デジタルデラックスエディション PS4 & PS5": "GUNDAM 创坏者4 PS4 & PS5",
  "創神のアルスマグナ The Alchemist of Ars Magna": "创神之阿尔斯马格纳 The Alchemist of Ars Magna",
  "ディズニー スピードストーム-- Disney Speedstorm": "迪士尼无限飞车— Disney Speedstorm",
  "FISHING PLANET": "钓鱼行星",
  "Fishing Planet: Gars&Glory Pack": "Fishing Planet: Gars&Glory Pack",
  "エンダーマグノリア: ブルームインザミスト": "エンダーマグノリア: ブルームインザミスト",
  "真・三國無双７ with 猛将伝": "真・三國無双7 with 猛将伝",
  "戦国ダイナスティ (Sengoku Dynasty)": "戦国ダイナスティ (Sengoku Dynasty)",
  "Sengoku Dynasty - Sakura Edition": "Sengoku Dynasty - Sakura Edition",
  "SDガンダム ジージェネレーション クロスレイズ": "游戏",
  "SDガンダム ジージェネレーション ジェネシス & クロスレイズ ダブルパック": "游戏",
  "SDガンダム ジージェネレーション クロスレイズ 体験版": "游戏",
  "SDガンダム ジージェネレーション クロスレイズ プラチナムエディション": "游戏",
  "サイバーパンク2077 アルティメットエディション (PS5)": "赛博朋克 2077",
  "MOUSE：やとわれの探偵": "神探杰克鼠",
  "Train Sim World® 7: Standard Edition": "模拟火车世界7 标准版",
  "Train Sim World® 7: Ultimate Edition": "模拟火车世界7 终极版",
  "Train Sim World® 7: Deluxe Edition": "模拟火车世界7 豪华版",
  "Train Sim World® 7: Free Starter Edition": "Train Sim World 7: Free Starter Edition",
  "英雄伝説 閃の軌跡Ⅳ -THE END OF SAGA-": "英雄伝説 閃の軌跡IV -THE END OF SAGA-",
  "英雄伝説 閃の軌跡Ⅳ -THE END OF SAGA-《デジタルデラックス版》": "英雄伝説 閃の軌跡IV -THE END OF SAGA-デジタルデラックス版",
  "英雄伝説 閃の軌跡IV スーパープライス": "英雄伝説 閃の軌跡IV スーパープライス",
  "英雄伝説 閃の軌跡IV スーパープライス《デジタルデラックス版》": "英雄伝説 閃の軌跡IV スーパープライスデジタルデラックス版",
  "RAIDOU Remastered: 超力兵団奇譚 デジタルデラックス版 PS4&PS5": "RAIDOU Remastered: 超力兵団奇譚 デジタルデラックス版 PS4&PS5",
  "RAIDOU Remastered: 超力兵団奇譚 PS4&PS5": "RAIDOU Remastered: 超力兵団奇譚 PS4&PS5",
  "チョコボの不思議なダンジョン エブリバディ！": "チョコボの不思議なダンジョン エブリバディ!",
  "アーケードアーカイブス ファイティングゴルフ": "アーケードアーカイブス ファイティングゴルフ",
  "アーケードアーカイブス2 ファイティングゴルフ": "アーケードアーカイブス2 ファイティングゴルフ",
  "牧場物語 Let's！風のグランドバザール デジタルデラックスエディション": "牧场物语 来吧!风之繁华集市",
  "牧場物語 Let's！風のグランドバザール プレミアムデジタルデラックスエディション": "牧场物语 来吧!风之繁华集市",
  "真・三國無双８ オールシーズンパスエディション": "真・三国无双8",
  "真・三國無双８ 追加シナリオエディション": "真・三国无双8",
  "真・三國無双８ 追加武器エディション": "真・三国无双8",
  "アストロボット デジタルデラックス版": "宇宙机器人",
  "Project Motor Racing": "Project Motor Racing",
  "Project Motor Racing: Year 1 Bundle": "Project Motor Racing: Year 1 Bundle",
  "S.T.A.L.K.E.R. 2: Heart of Chornobyl — アルティメットエディション": "潜行者2: 切尔诺贝利之心",
  "S.T.A.L.K.E.R. 2: Heart of Chornobyl — デラックスエディション": "潜行者2: 切尔诺贝利之心",
  "EA SPORTS™ Madden NFL 27": "EA SPORTSMadden NFL 27",
  "EA SPORTS™ キックオフバンドル（Madden NFL 27 と College Football 27）": "EA SPORTS 开球同捆包(Madden NFL 27和College Football 27)",
  "「EA SPORTS™ Madden NFL 27」デラックスエディション": "EA SPORTS Madden NFL 27豪华版",
  "EA SPORTS™ MVPバンドル（College Football 27 デラックスエディションとMadden NFL 27 デラックスエディション）": "EA SPORTS MVP 同捆包(College Football 27豪华版和Madden NFL 27豪华版)",
  "KINGDOM HEARTS Ⅲ": "KINGDOM HEARTS III",
  "KINGDOM HEARTS INTEGRUM MASTERPIECE": "KINGDOM HEARTS INTEGRUM MASTERPIECE",
  "KINGDOM HEARTS Ⅲ DEMO Version": "KINGDOM HEARTS III DEMO Version",
  "LOST JUDGMENT：裁かれざる記憶 デジタルデラックス　PS4 & PS5": "审判之逝：湮灭的记忆 デジタルデラックス PS4 & PS5",
  "LOST JUDGMENT：裁かれざる記憶　PS4 & PS5": "审判之逝：湮灭的记忆 PS4 & PS5",
  "LOST JUDGMENT：裁かれざる記憶 体験版": "审判之逝：湮灭的记忆 体験版",
  "英雄伝説 界の軌跡 -Farewell, O Zemuria- (PS4 & PS5)": "英雄传说 界之轨迹 -告别塞姆利亚-",
  "ステューピッド・ネバー・ダイズ：ゴージャスバカエディション": "愚者不灭",
  "ステューピッド・ネバー・ダイズ（Stupid Never Dies）": "愚者不灭",
  "ステューピッド・ネバー・ダイズ（Stupid Never Dies）：First Bite Demo": "愚者不灭(Stupid Never Dies): First Bite Demo",
  "Back to the Dawn ～ブレイク･ザ･アニマル･プリズン～": "动物迷城 ~Back to the Dawn~",
  "Back to the Dawn ～ブレイク･ザ･アニマル･プリズン～ 体験版": "动物迷城 ~Back to the Dawn~",
  "NARUTO X BORUTO ナルティメットストームコネクションズ デラックスエディション PS4® & PS5®": "火影忍者 终极风暴羁绊 豪华版 PS4 & PS5",
  "NARUTO X BORUTO ナルティメットストームコネクションズ　サウンドアルティメットエディション PS4® & PS5®": "NARUTO X BORUTO ナルティメットストームコネクションズ サウンドアルティメットエディション PS4 & PS5",
  "NARUTO X BORUTO ナルティメットストームコネクションズ PS4® & PS5®": "火影忍者 终极风暴羁绊 PS4 & PS5",
  "Grounded 2：ファウンダーズエディション": "Grounded 2: 创始者版本",
  "シドマイヤーズ シヴィライゼーション VI": "席德·梅尔的文明VI",
  "シドマイヤーズ シヴィライゼーション VI　コンプリート・エディション": "席德·梅尔的文明VI",
  "シドマイヤーズ シヴィライゼーション VI　プラチナ・エディション": "席德·梅尔的文明VI",
  "BLAZBLUE ENTROPY EFFECT X Deluxe Edition": "苍翼: 混沌效应X 豪华版",
  "BLAZBLUE ENTROPY EFFECT X": "苍翼: 混沌效应X",
  "『Fable』プレミアムエディション": "神鬼寓言标准版",
  "『Fable』スタンダードエディション": "神鬼寓言标准版",
  "コンプリートエディション - アバター：フロンティア・オブ・パンドラ™": "阿凡达: 潘多拉边境",
  "「フロム・ジ・アッシュズ」エディション - アバター：フロンティア・オブ・パンドラ™": "阿凡达: 潘多拉边境",
  "Minecraft Dungeons Ultimate Edition": "我的世界：地下城 终极版",
  "SOULCALIBUR VI Welcome Price!!": "SOULCALIBUR VI Welcome Price!!",
  "SOULCALIBUR Ⅵ デラックスエディション2019": "SOULCALIBUR VI デラックスエディション2019",
  "モンスターハンターストーリーズ3　～運命の双竜～　体験版": "Monster Hunter Stories 3: 命运双龙",
  "トゥームレイダー：レガシー・オブ・アトランティス": "古墓丽影: 亚特兰蒂斯遗迹",
  "閃乱忍忍忍者大戦ネプテューヌ -少女達の響艶-": "閃乱忍忍忍者大戦ネプテューヌ -少女達の響艶-",
  "ロマンシング サガ2 リベンジオブザセブン - PS4&PS5": "浪漫沙加2 七英雄的复仇 PS4&PS5",
  "春ゆきてレトロチカ PS4&PS5": "春ゆきてレトロチカ PS4&PS5",
  "春ゆきてレトロチカ（体験版）": "春ゆきてレトロチカ(体験版)",
  "スクウェア・エニックス 謎解きバンドル": "スクウェア・エニックス 謎解きバンドル",
  "聖剣伝説2 SECRET of MANA": "聖剣伝説2 SECRET of MANA",
  "Faaast Penguin / ファーストペンギン": "Faaast Penguin / ファーストペンギン",
  "STAR WARS ジェダイ：サバイバー™ PS4": "星球大战 绝地: 幸存者",
  "STAR WARS™ジェダイクロスジェネバンドルエディション": "星球大战 绝地: 幸存者",
  "アサシン クリード オデッセイ": "刺客信条: 奥德赛 - 数码标准版",
  "アサシン クリード 古代パック": "刺客信条: 奥德赛 - 数码标准版",
  "アサシン クリード オデッセイ - アルティメットエディション": "刺客信条: 奥德赛 - 数码标准版",
  "アサシン クリード オデッセイ - デラックスエディション": "刺客信条: 奥德赛 - 数码标准版",
  "アサシン クリード オデッセイ ゴールドエディション": "刺客信条: 奥德赛 - 数码标准版",
  "Voice of Cards Trilogy + DLCセット": "Voice of Cards Trilogy + DLCセット",
  "Voice of Cards ドラゴンの島 ＋ DLCセット": "Voice of Cards ドラゴンの島 + DLCセット",
  "Voice of Cards Trilogy": "Voice of Cards Trilogy",
  "Voice of Cards ドラゴンの島": "Voice of Cards ドラゴンの島",
  "Voice of Cards ドラゴンの島 Demo": "Voice of Cards ドラゴンの島 Demo",
  "RuneScape: Dragonwilds - デラックス版": "RuneScape: Dragonwilds 符文世界: 龙之荒野",
  "METAL GEAR SOLID PEACE WALKER (MASTER COLLECTION版)": "METAL GEAR SOLID PEACE WALKER (MASTER COLLECTION版)",
  "METAL GEAR SOLID 4 GUNS OF THE PATRIOTS (MASTER COLLECTION版)": "METAL GEAR SOLID 4 GUNS OF THE PATRIOTS (MASTER COLLECTION版)",
  "英雄伝説 閃の軌跡III": "英雄伝説 閃の軌跡III",
  "英雄伝説 閃の軌跡III スーパープライス": "英雄伝説 閃の軌跡III スーパープライス",
  "ドラゴンクエストX　目覚めし五つの種族　オフライン　デラックス版　PS4&PS5": "勇者斗恶龙X 觉醒的五种族 OFFLINE PS4&PS5",
  "ドラゴンクエストX　目覚めし五つの種族　オフライン　PS4&PS5": "勇者斗恶龙X 觉醒的五种族 OFFLINE PS4&PS5",
  "ドラゴンクエストX　目覚めし五つの種族　オフライン　体験版": "勇者斗恶龙X 觉醒的五种族 OFFLINE PS4&PS5",
  "ぷよぷよ™テトリス®２　PS4 & PS5": "噗哟噗哟俄罗斯方块2 PS4 & PS5",
  "ぷよぷよ™テトリス®２ たいけんばん": "ぷよぷよテトリス2 たいけんばん",
  "A列車で行こうExp.+ DX": "A列車で行こうExp.+ DX",
  "Full Stride": "Full Stride",
  "ドラゴンボール ファイターズ Welcome Price!!  PS4®&PS5®": "DRAGON BALL FighterZ传奇版 PS4 & PS5",
  "ドラゴンボール ファイターズ　デラックスエディション PS4®&PS5®": "DRAGON BALL FighterZ传奇版 PS4 & PS5",
  "ドラゴンボール ファイターズ レジェンダリーエディション PS4®&PS5®": "DRAGON BALL FighterZ传奇版 PS4 & PS5",
  "DARK SOULS REMASTERED": "DARK SOULS REMASTERED",
  "Demon's Souls デジタルデラックスエディション": "恶魔之魂 数字豪华版",
  "イースX -Proud NORDICS-": "伊苏X -诺曼荣光-",
  "Enlisted": "Enlisted",
  "\"Trail-Ready\" バンドル": "\"Trail-Ready\" バンドル",
  "日本スターター バンドル": "日本スターター バンドル",
  "USSRスターター バンドル": "USSRスターター バンドル",
  "USAスターター バンドル": "USAスターター バンドル",
  "「フォーオナー」– アルティメットエディション": "荣耀战魂",
  "フォーオナー": "荣耀战魂",
  "「フォーオナー」– ゴールドエディション": "荣耀战魂",
  "無双OROCHI3 Ultimate": "無双OROCHI3 Ultimate",
  "無双OROCHI３ Deluxe Edition": "無双OROCHI3 Deluxe Edition",
  "無双OROCHI3 Ultimate Deluxe Edition": "無双OROCHI3 Ultimate Deluxe Edition",
  "スプリット・フィクション": "双影奇境",
  "「スプリット・フィクション」 - フレンドパス": "双影奇境",
  "アサシン クリード ヴァルハラ - コンプリートエディション": "刺客信条: 英灵殿 - 完全版",
  "アサシン クリード ヴァルハラ PS4 & PS5": "刺客信条: 英灵殿 - 完全版",
  "アサシン クリード  ヴァルハラ + イモータルズ  フィニクス ライジング  バンドル": "刺客信条: 英灵殿 - 完全版",
  "アサシン クリード ヴァルハラ - デラックスエディション": "刺客信条: 英灵殿 - 完全版",
  "アサシン クリード ヴァルハラ - ラグナロクエディション": "刺客信条: 英灵殿 - 完全版",
  "アサシン クリード ミソロジーパック": "刺客信条: 英灵殿 - 完全版",
  "アサシン クリード ヴァルハラ + ウォッチドッグス レギオン バンドル": "刺客信条: 英灵殿 - 完全版",
  "ヴァルキリープロファイル −レナス−": "ヴァルキリープロファイル −レナス−",
  "ジョジョの奇妙な冒険 オールスターバトルR　DIGITAL ULTIMATE EDITION PS4 & PS5": "ジョジョの奇妙な冒険 オールスターバトルR DIGITAL ULTIMATE EDITION PS4 & PS5",
  "ジョジョの奇妙な冒険 オールスターバトル R PS4 & PS5": "ジョジョの奇妙な冒険 オールスターバトル R PS4 & PS5",
  "ジョジョの奇妙な冒険 オールスターバトル R　体験版": "ジョジョの奇妙な冒険 オールスターバトル R 体験版",
  "ジョジョの奇妙な冒険 オールスターバトル R　DIGITAL DELUXE EDITION PS4 & PS5": "ジョジョの奇妙な冒険 オールスターバトル R DIGITAL DELUXE EDITION PS4 & PS5",
  "SDガンダム バトルアライアンス PS4 & PS5": "SD GUNDAM 激斗同盟 PS4 & PS5",
  "SDガンダム バトルアライアンス アルティメットエディション PS4 & PS5": "SD GUNDAM 激斗同盟 PS4 & PS5",
  "SDガンダム バトルアライアンス 体験版": "SD GUNDAM 激斗同盟 PS4 & PS5",
  "SDガンダム バトルアライアンス デラックスエディション PS4 & PS5": "SD GUNDAM 激斗同盟 PS4 & PS5",
  "餓狼伝説 City of the Wolves Revenge Edition": "饿狼传说: 群狼之城 Revenge Edition",
  "餓狼伝説 City of the Wolves - Demo Version -": "FATAL FURY: City of the Wolves - Demo Version -",
  "餓狼伝説 City of the Wolves Legend Edition": "饿狼传说: 群狼之城 Legend Edition",
  "RoadCraft": "RoadCraft",
  "RoadCraft – 1-Year Anniversary Edition": "RoadCraft – 1-Year Anniversary Edition",
  "Crimson Moon": "Crimson Moon",
  "スーパーロボット大戦X デラックスエディション": "超级机器人大战X",
  "スーパーロボット大戦Ｘ (PS4®版) Welcome Price!!": "超级机器人大战X",
  "初音ミク Project DIVA Future Tone DX": "初音未来 Project DIVA Future Tone DX",
  "Keep Driving": "Keep Driving",
  "スーパーロボット大戦ＯＧ ムーン・デュエラーズ（PS4®版）": "超级机器人大战OG THE MOON DWELLERS",
  "ガンダムブレイカー３  Welcome Price!!(PS4®版)": "ガンダムブレイカー3 Welcome Price!!(PS4版)",
  "ガンダムブレイカー３ BREAK EDITION(PS4®版)": "ガンダムブレイカー3 BREAK EDITION(PS4版)",
  "World of Warships": "World of Warships",
  "银松镇": "银松镇",
  "ForgeTax": "ForgeTax",
  "雨中冒险2：万象归衡": "雨中冒险2: 万象归衡",
  "勇敢者之试炼 : Invokyr": "勇敢者之试炼: Invokyr",
  "越来越黑暗 Dark and Darker": "越来越黑暗 Dark and Darker",
  "永冻纪元 - Permafrost": "永冻纪元 - Permafrost",
  "双点博物馆：失落游乐园": "双点博物馆: 失落游乐园",
  "火炬之光：无限": "火炬之光: 无限",
  "Hunt: Showdown 1896 - Bound by Blood": "Hunt: Showdown 1896 - Bound by Blood",
  "王国纪元 (Lords Mobile)": "王国纪元 (Lords Mobile)",
  "霓虹深渊2": "霓虹深渊2",
  "Dark and Darker - EAS11 Seasonal Pack": "Dark and Darker - EAS11 Seasonal Pack",
  "暗区突围：无限": "暗区突围: 无限",
  "风纪委员会梦见魅魔吗？": "风纪委员会梦见魅魔吗?",
  "幻想放置远征队": "幻想放置远征队",
  "七日世界": "七日世界",
  "Japanese Ramen Simulator": "Japanese Ramen Simulator",
  "House in a Meadow VR": "House in a Meadow VR",
  "竞拍之王": "竞拍之王",
  "Escape from Tarkov - The Unheard Steam Edition Expansion Pack": "Escape from Tarkov - The Unheard Steam Edition Expansion Pack",
  "This Game Costs 200 Dollars": "This Game Costs 200 Dollars",
  "双点校园": "双点校园",
  "KARDS - 二战卡牌游戏": "KARDS - 二战卡牌游戏",
  "SOS OPS!": "SOS OPS!",
  "全面战争：三国": "全面战争: 三国",
  "绿色地狱": "绿色地狱",
  "基石 Foundation": "基石 Foundation",
  "火之石 – 放置点击英雄RPG": "火之石 – 放置点击英雄RPG",
  "人渣": "人渣",
  "双点医院": "双点医院",
  "暗黑地牢 Darkest Dungeon": "暗黑地牢 Darkest Dungeon",
  "吉星派对": "吉星派对",
  "三国杀": "三国杀",
  "三国志14": "三国志14",
  "战地风云™ 禁区冲突": "战地风云 禁区冲突",
  "逃离鸭科夫": "逃离鸭科夫",
  "彩虹六号：围攻": "彩虹六号: 围攻",
  "iRacing": "iRacing",
  "信長之野望･新生": "信長之野望・新生",
  "Hunt: Showdown 1896 - Starter Pack: The Crow’s Calling": "Hunt: Showdown 1896 - Starter Pack: The Crow's Calling",
  "Truck Preparation For Driving VR Training": "Truck Preparation For Driving VR Training",
  "EA Play": "EA Play",
  "《漫威斗魂》": "漫威斗魂",
  "Underground roof fall hazard assessment VR Training": "Underground roof fall hazard assessment VR Training",
  "女神异闻录４ Revival": "女神异闻录4 Revival",
  "刺客信条：英灵殿": "刺客信条: 英灵殿",
  "艾恩葛朗特 回荡新声": "艾恩葛朗特 回荡新声",
  "奇异贤伴 爱达之歌": "奇异贤伴 爱达之歌",
  "王于兴师": "王于兴师",
  "火湖": "火湖",
  "PAPERHEAD": "PAPERHEAD",
  "英雄立志传：三国志": "英雄立志传: 三国志",
  "战鬼克莉丝汀": "战鬼克莉丝汀",
  "土豆兄弟(Brotato)": "土豆兄弟(Brotato)",
  "优米雅的炼金工房 ～追忆之炼金术士与幻创之地～": "优米雅的炼金工房 ~追忆之炼金术士与幻创之地~",
  "德州扑克 - Pokerist": "德州扑克 - Pokerist",
  "房产达人 2": "房产达人 2",
  "基石：丰收节 Foundation: Harvest Festival": "基石: 丰收节 Foundation: Harvest Festival",
  "雨中冒险 2: 合金意念": "雨中冒险 2: 合金意念",
  "星界战士": "星界战士",
  "红色沙漠：增强版 - 未知征途": "红色沙漠: 增强版 - 未知征途",
  "Aimlabs": "Aimlabs",
  "Grim Dawn": "Grim Dawn",
  "全面战争：战锤2": "全面战争: 战锤2",
  "王国 两位君主：奥林匹斯的召唤": "王国 两位君主: 奥林匹斯的召唤",
  "LoveChoice 拣爱": "LoveChoice 拣爱",
  "机械迷城 (Machinarium)": "机械迷城 (Machinarium)",
  "Subnautica 2：异星水域": "Subnautica 2: 异星水域",
  "护核纪元": "护核纪元",
  "双点博物馆：艺想天开": "双点博物馆: 艺想天开",
  "艾尔登法环 黄金树幽影": "艾尔登法环 黄金树幽影",
  "Age of Empires IV: Raiders of the North": "Age of Empires IV: Raiders of the North",
  "人中之龙０ 誓约的场所 导演剪辑版": "人中之龙0 誓约的场所 导演剪辑版",
  "Anima Engine": "Anima Engine",
  "Risk of Rain 2: Hallowed Concepts": "雨中冒险2: 万象归衡",
  "Overwatch®": "守望先锋",
  "Permafrost": "永冻纪元 - Permafrost",
  "Order of the Sinking Star": "沉星之序",
  "NARAKA: BLADEPOINT": "永劫无间",
  "Invokyr": "勇敢者之试炼: Invokyr",
  "Car Park Capital": "Car Park Capital",
  "Two Point Museum": "双点博物馆",
  "Arena Breakout: Infinite": "暗区突围: 无限",
  "Sonic Racing: CrossWorlds Season Pass Two": "索尼克赛车 交叉世界: 季票2",
  "VRChat": "VRChat",
  "Risk of Rain 2: Alloyed Collective": "雨中冒险 2: 合金意念",
  "EA SPORTS™ College Football 27": "EA SPORTS College Football 27",
  "Crimson Desert Enhanced": "红色沙漠: 增强版",
  "The Elder Scrolls® Online": "上古卷轴OL",
  "Dark and Darker": "越来越黑暗 Dark and Darker",
  "Diablo® IV": "暗黑破坏神 IV",
  "Foundation": "基石 Foundation",
  "Wallpaper Engine": "Wallpaper Engine: 壁纸引擎",
  "Warhammer 40,000: Darktide": "战锤40K: 暗潮",
  "Two Point Museum: Rides & Relics": "双点博物馆: 失落游乐园",
  "デイヴ・ザ・ダイバー Nintendo Switch 2 Edition": "潜水员戴夫 Nintendo Switch 2 版",
  "あつまれ どうぶつの森 Nintendo Switch 2 Edition": "集合啦！动物森友会 Nintendo Switch 2 版",
  "《芬尼克斯傳說》- 黃金版 (Immortals Fenyx Rising Gold Edition)": "芬尼克斯传说- 黄金版 (Immortals Fenyx Rising Gold Edition)",
  "空之軌跡 the 1st Nintendo Switch 2 Edition升級通行證": "空之轨迹 the 1st Nintendo Switch 2 Edition升级通行证",
  "《The Elder Scrolls V: Skyrim Anniversary Edition》+《Fallout 4: Anniversary Edition》組合包": "The Elder Scrolls V: Skyrim Anniversary Edition+Fallout 4: Anniversary Edition组合包",
  "《波斯王子之重生者》The Rogue Prince of Persia": "波斯王子之重生者The Rogue Prince of Persia",
  "FINAL FANTASY XII THE ZODIAC AGE デジタル通常版": "最终幻想XII 黄道时代 デジタル通常版",
  "ライザのアトリエ 〜常闇の女王と秘密の隠れ家〜 DX (PS4&5)": "ライザのアトリエ 〜常闇の女王と秘密の隠れ家〜 DX (PS4&5)",
  "アーケードアーカイブス2 ゼビウス3D/G": "アーケードアーカイブス2 ゼビウス3D/G",
  "Horizon Forbidden West": "地平线 西之绝境",
  "风暴崛起 Tempest Rising": "风暴崛起 Tempest Rising",
  "American Truck Simulator - Road Trip: Ford": "American Truck Simulator - Road Trip: Ford",
  "DARK SOULS™: REMASTERED": "DARK SOULS: REMASTERED",
  "Muse Dash - Muse Plus": "Muse Dash - Muse Plus",
  "美少女梦工厂: 预言之子": "美少女梦工厂: 预言之子",
  "DARK SOULS™ II: Scholar of the First Sin": "DARK SOULS II: Scholar of the First Sin",
  "Crusader Kings III: By God Alone": "Crusader Kings III: By God Alone",
  "刺客信条：起源": "刺客信条: 起源",
  "Thief Simulator": "Thief Simulator",
  "动物厨房 Tasty Chef": "动物厨房 Tasty Chef",
  "歧路旅人 II": "歧路旅人 II",
  "新世界：暗影成双": "新世界: 暗影成双",
  "Company of Heroes 3": "Company of Heroes 3",
  "太吾绘卷：天幕心帷": "太吾绘卷: 天幕心帷",
  "StarSavior": "StarSavior",
  "BLACK SOULS II": "BLACK SOULS II",
  "BLACK SOULS": "BLACK SOULS",
  "SiNiSistar 2": "SiNiSistar 2",
  "Songs of Glimmerwick": "Songs of Glimmerwick",
  "Grand Theft Auto: San Andreas – The Definitive Edition": "Grand Theft Auto: San Andreas – The Definitive Edition",
  "魔法少女的魔女审判": "魔法少女的魔女审判",
  "Watch_Dogs™": "Watch_Dogs",
  "全境封锁2": "全境封锁2",
  "永恒轮回": "永恒轮回",
  "刺客信条：枭雄": "刺客信条: 枭雄",
  "Bunker Tidy Up": "Bunker Tidy Up",
  "Thief Simulator 2": "Thief Simulator 2",
  "恶月十三": "恶月十三",
  "DEAD OR ALIVE Xtreme Venus Vacation": "DEAD OR ALIVE Xtreme Venus Vacation",
  "In Falsus": "In Falsus",
  "纪元1800": "纪元1800",
  "Thronefall": "Thronefall",
  "骰之侵略者": "骰之侵略者",
  "生死狙击2": "生死狙击2",
  "《上古卷轴OL》": "上古卷轴OL",
  "歧路旅人": "歧路旅人",
  "最佳球会Online": "最佳球会Online",
  "风暴怕死队": "风暴怕死队",
  "TOEM 2 摄影冒险2": "TOEM 2 摄影冒险2",
  "黎明门前的吹笛人": "黎明门前的吹笛人",
  "JOJO的奇妙冒险 群星之战 重制版": "JOJO的奇妙冒险 群星之战 重制版",
  "World of Tanks": "World of Tanks",
  "Scroll Of Taiwu - 元鸡化影": "Scroll Of Taiwu - 元鸡化影",
  "女神异闻录４ 黄金版": "女神异闻录4 黄金版",
  "氧气列车": "氧气列车",
  "FINAL FANTASY XV WINDOWS EDITION": "FINAL FANTASY XV WINDOWS EDITION",
  "Persona 3 Reload": "女神异闻录3 Reload",
  "Persona 5 Royal": "女神异闻录5皇家版",
  "Dune: Awakening": "Dune: Awakening 沙丘: 觉醒",
  "Onimusha: Way of the Sword": "鬼武者 Way of the Sword",
  "Palia": "Palia",
  "Warhammer 40,000: Rogue Trader": "Warhammer 40,000: 行商浪人",
  "hololive Dreams": "hololive Dreams",
  "Satisfactory": "幸福工厂",
  "赛菲莉娅": "赛菲莉娅",
  "钢铁指挥官": "钢铁指挥官",
  "龙王传奇": "龙王传奇",
  "MXGP 26 - The Official Game": "MXGP 26 - The Official Game",
  "Wizardry Variants Daphne": "Wizardry Variants Daphne",
  "Warhammer 40,000: Space Marine 2 - Space Wolves Champion Pack": "Warhammer 40,000: Space Marine 2 - Space Wolves Champion Pack",
  "女王的游戏：盛世天下 女帝篇": "女王的游戏: 盛世天下 女帝篇",
  "王国保卫战 5：巨龙战争": "王国保卫战 5: 巨龙战争",
  "魔法使之夜": "魔法使之夜",
  "MOGGED: Looksmaxx or Die": "MOGGED: Looksmaxx or Die",
  "战意": "战意",
  "TOEM: A Photo Adventure": "TOEM: A Photo Adventure",
  "刺客信条：幻景": "刺客信条: 幻景",
  "Last Epoch - 暴怒传奇赞助包 (Enraged Legend Supporter Pack)": "Last Epoch - 暴怒传奇赞助包 (Enraged Legend Supporter Pack)",
  "魔女：终末旅途": "魔女: 终末旅途",
  "真·女神转生Ⅴ Vengeance": "真·女神转生V Vengeance",
  "刺客信条：大革命": "刺客信条: 大革命",
  "NieR:Automata™": "NieR: Automata",
  "复古时空": "复古时空",
  "暗星铁律": "暗星铁律",
  "DCS World Steam Edition": "DCS World Steam Edition",
  "Mortal Kombat 11": "Mortal Kombat 11",
  "《镜之边缘：Catalyst》": "镜之边缘: Catalyst",
  "饥荒": "饥荒",
  "Left 4 Dead": "Left 4 Dead",
  "Resident Evil 7 Biohazard": "Resident Evil 7 Biohazard",
  "Noita": "Noita",
  "War Thunder - Cyberpunk Helicopter Snail Bundle": "战争雷霆 - Cyberpunk Helicopter Snail Bundle",
  "War Thunder - Senrai Maidens: Emily Bundle": "战争雷霆 - Senrai Maidens: Emily Bundle",
  "War Thunder - Senrai Maidens: Ling Bundle": "战争雷霆 - Senrai Maidens: Ling Bundle",
  "War Thunder - Senrai Maidens: Usagi Bundle": "战争雷霆 - Senrai Maidens: Usagi Bundle",
  "Crossout (英文)": "Crossout (英文)",
  "千恋＊万花": "千恋*万花",
  "超级鸡马": "超级鸡马",
  "FINAL FANTASY VII REBIRTH DEMO": "FINAL FANTASY VII REBIRTH DEMO",
  "Marvel's Spider-Man: Miles Morales PS4 & PS5": "漫威蜘蛛侠：迈尔斯·莫拉莱斯 PS4 & PS5",
  "Marvel's Spider-Man: Miles Morales Ultimate Edition": "漫威蜘蛛侠：迈尔斯·莫拉莱斯 终极版",
  "FINAL FANTASY VII REMAKE INTERGRADE Digital Deluxe Edition （日英文版）": "FINAL FANTASY VII REMAKE INTERGRADE Digital Deluxe Edition",
  "FINAL FANTASY VII REMAKE INTERGRADE （日英文版）": "FINAL FANTASY VII REMAKE INTERGRADE",
  "《WWE 2K26》标准版": "WWE 2K26标准版",
  "《WWE 2K26》King of Kings版": "WWE 2K26King of Kings版",
  "《WWE 2K26》狂野年代版": "WWE 2K26狂野年代版",
  "《WWE 2K26》Monday Night War版": "WWE 2K26Monday Night War版",
  "迪士尼梦幻星谷——终极版": "迪士尼梦幻星谷——终极版",
  "迪士尼梦幻星谷": "迪士尼梦幻星谷",
  "迪士尼梦幻星谷——蜜辉森林版": "迪士尼梦幻星谷——蜜辉森林版",
  "迪士尼梦幻星谷——许愿花牧场版": "迪士尼梦幻星谷——许愿花牧场版",
  "Cities: Skylines - Mayor's Edition": "都市：天际线 市长版",
  "信長之野望･新生 with 威力加強版 Complete Edition + Collector's Set": "信長之野望・新生 with 威力加強版 Complete Edition + Collector's Set",
  "Beat Saber": "节奏光剑",
  "Beat Saber + Britney Spears Music Pack": "节奏光剑 + Britney Spears Music Pack",
  "Beat Saber + BTS Music Pack": "节奏光剑 + BTS Music Pack",
  "Beat Saber + Daft Punk Music Pack": "节奏光剑 + Daft Punk Music Pack",
  "Beat Saber + Hip Hop Mixtape": "节奏光剑 + Hip Hop Mixtape",
  "Beat Saber + Imagine Dragons Music Pack": "节奏光剑 + Imagine Dragons Music Pack",
  "Beat Saber + Linkin Park x Mike Shinoda Ultimate Bundle": "节奏光剑 + Linkin Park x Mike Shinoda Ultimate Bundle",
  "Beat Saber + Metallica Music Pack": "节奏光剑 + Metallica Music Pack",
  "Beat Saber + Monstercat Mixtape 2": "节奏光剑 + Monstercat Mixtape 2",
  "Beat Saber + Queen Music Pack": "节奏光剑 + Queen Music Pack",
  "Beat Saber + The Rolling Stones Music Pack": "节奏光剑 + The Rolling Stones Music Pack",
  "ポケットモンスター ソード": "宝可梦 剑",
  "Detroit: Become Human": "底特律: 化身为人",
  "戴森球计划": "戴森球计划",
  "Atomic Heart": "原子之心",
  "Hunting Simulator 3": "狩猎模拟3",
  "Farming Simulator 25": "Farming Simulator 25",
  "Hearts of Iron IV": "Hearts of Iron IV",
  "薩爾達傳說 王國之淚 Nintendo Switch 2 Edition": "萨尔达传说 王国之泪 Nintendo Switch 2 Edition",
  "Amnesia™: Memories": "Amnesia: Memories",
  "戦雷乙女：ウサギ バンドル": "战争雷霆",
  "戦雷乙女：エミリー バンドル": "战争雷霆",
  "戦雷乙女：リン バンドル": "战争雷霆",
  "メタファー：リファンタジオ PS4 & PS5": "暗喻幻想: ReFantazio PS4 & PS5",
  "メタファー：リファンタジオ アトラスブランド35thデジタル・アニバーサリーエディション PS4 & PS5": "暗喻幻想: ReFantazio PS4 & PS5",
  "メタファー：リファンタジオ ～プロローグ体験版～": "暗喻幻想: ReFantazio PS4 & PS5",
  "ドラゴンクエストVII Reimagined　旅のはじまり先行プレイ版": "勇者斗恶龙 VII Reimagined",
  "Splatoon Raiders (斯普拉遁 塗擊隊)": "Splatoon Raiders (斯普拉遁 涂击队)",
  "Microsoft Flight Simulator 2024 Beta": "Microsoft Flight Simulator 2024 Beta",
  "《The Sims™ 4》EA Play 版": "The Sims 4EA Play 版",
  "【PS4版购买者专用】FINAL FANTASY VII REMAKE（中韩文版）": "【PS4版购买者专用】FINAL FANTASY VII REMAKE",
  "【PS4版购买者专用】FINAL FANTASY VII REMAKE（日英文版）": "【PS4版购买者专用】FINAL FANTASY VII REMAKE",
  "《暗黑破坏神®》魔神典藏版升级": "暗黑破坏神魔神典藏版升级",
  "Call of Duty®: Black Ops III": "Call of Duty: Black Ops III",
  "Call of Duty®: Black Ops III - Digital Deluxe Edition": "Call of Duty: Black Ops III - Digital Deluxe Edition",
  "Resident Evil Village PS4 & PS5": "Resident Evil Village PS4 & PS5",
  "Resident Evil 7 Gold Edition & Village Gold Edition PS4 & PS5": "Resident Evil 7 Gold Edition & Village Gold Edition PS4 & PS5",
  "Maiden": "Maiden",
  "Resident Evil Village Gold Edition Gameplay Demo": "Resident Evil Village Gold Edition Gameplay Demo",
  "Resident Evil Village VR Mode Gameplay Demo": "Resident Evil Village VR Mode Gameplay Demo",
  "Resident Evil Village Gold Edition PS4 & PS5": "Resident Evil Village Gold Edition PS4 & PS5",
  "逸剑风云决 豪华版 (中日英韩文版)": "逸剑风云决 豪华版",
  "逸剑风云决 (中日英韩文版)": "逸剑风云决",
  "无双OROCHI 蛇魔３ Ultimate 豪华版": "无双OROCHI 蛇魔3 Ultimate 豪华版",
  "无双OROCHI 蛇魔３ Deluxe Edition": "无双OROCHI 蛇魔3 Deluxe Edition",
  "『无双OROCHI 蛇魔３』 神速版": "无双OROCHI 蛇魔3 神速版",
  "无双OROCHI 蛇魔３ Ultimate": "无双OROCHI 蛇魔3 Ultimate",
  "《女神异闻录５》系列 游戏套装": "女神异闻录5系列 游戏套装",
  "女神异闻录５ 皇家版": "女神异闻录5 皇家版",
  "《WWE 2K25》标准版": "WWE 2K25标准版",
  "《WWE 2K25》活死人版": "WWE 2K25活死人版",
  "《WWE 2K25》血亲家族版": "WWE 2K25血亲家族版",
  "《WWE 2K25》告别巡演捆绑包": "WWE 2K25告别巡演捆绑包",
  "《WWE 2K25》告别巡演版": "WWE 2K25告别巡演版",
  "Bluey&#x27;s Happy Snaps：豪华版": "Bluey's Happy Snaps: 豪华版",
  "Seafarer: The Ship Sim - Voyager Edition": "Seafarer: The Ship Sim - Voyager Edition",
  "Seafarer: The Ship Sim": "Seafarer: The Ship Sim",
  "KINGDOM HEARTS III (中韩文版)": "KINGDOM HEARTS III",
  "KINGDOM HEARTS III": "KINGDOM HEARTS III",
  "KINGDOM HEARTS All-In-One Package": "KINGDOM HEARTS All-In-One Package",
  "KINGDOM HEARTS Ⅲ DEMO Version (中韩文版)": "KINGDOM HEARTS III DEMO Version",
  "《幽灵行动：荒野》决定版": "幽灵行动: 荒野决定版",
  "汤姆·克兰西《幽灵行动：荒野》": "汤姆·克兰西幽灵行动: 荒野",
  "《孤岛惊魂 5》黄金版": "孤岛惊魂 5黄金版",
  "孤岛惊魂5": "孤岛惊魂5",
  "极地战嚎 5 - 数码豪华版": "极地战嚎 5 - 数码豪华版",
  "Far Cry Insanity Bundle": "Far Cry Insanity Bundle",
  "「《孤岛惊魂 5》 - 数码黄金版」+「《孤岛惊魂 4 》- 数码黄金版」+「《孤岛惊魂 3：经典版》 - 数码标准版」同捆包": "孤岛惊魂 5 - 数码黄金版+孤岛惊魂 4 - 数码黄金版+孤岛惊魂 3: 经典版 - 数码标准版同捆包",
  "CONTROL Ultimate Edition": "CONTROL Ultimate Edition",
  "Control Ultimate Edition": "Control Ultimate Edition",
  "Rocksmith+": "Rocksmith+",
  "Rocket League®": "Rocket League",
  "Songs of Silence": "Songs of Silence",
  "Samson": "Samson",
  "No Man&#x27;s Sky PS4 & PS5": "No Man's Sky 无人深空 PS4 & PS5",
  "勇者斗恶龙I & II HD-2D Remake": "勇者斗恶龙I & II HD-2D Remake",
  "勇者斗恶龙 HD-2D版 洛特三部曲合辑": "勇者斗恶龙 HD-2D版 洛特三部曲合辑",
  "《TOEM 2 摄影冒险2》": "TOEM 2 摄影冒险2",
  "Disco Elysium - The Final Cut": "Disco Elysium - The Final Cut",
  "JDM: Japanese Drift Master": "JDM: Japanese Drift Master",
  "Active Matter - Upgrade from Standard to Deluxe (中英韩文版)": "Active Matter - Upgrade from Standard to Deluxe",
  "REMATCH × BLUE LOCK TRAINING PACK BUNDLE": "REMATCH × BLUE LOCK TRAINING PACK BUNDLE",
  "关于我转生变成史莱姆这档事 坦派斯特开拓谭 PS4 & PS5": "关于我转生变成史莱姆这档事 坦派斯特开拓谭 PS4 & PS5",
  "关于我转生变成史莱姆这档事 坦派斯特开拓谭 数字豪华版 PS4 & PS5": "关于我转生变成史莱姆这档事 坦派斯特开拓谭 数字豪华版 PS4 & PS5",
  "七龙珠Z 卡卡洛特 数字豪华版 PS4&PS5": "七龙珠Z 卡卡洛特 数字豪华版 PS4&PS5",
  "Minecraft 体験版": "Minecraft 体験版",
  "PlayStation®Plus Free \"CYBERPUNK HELICOPTER SNAIL\" バンドル": "战争雷霆",
  "レインボーシックス シージ - フリーアクセス": "虹彩六号: 围攻行动",
  "PTB Access Bundle": "PTB Access Bundle",
  "The Sims™ 4 EA Play Edition": "The Sims 4 EA Play Edition",
  "Active Matter - Upgrade from Standard to Deluxe": "Active Matter - Upgrade from Standard to Deluxe",
  "The Elder Scrolls Online (PS4)": "The Elder Scrolls Online (PS4)",
  "The Elder Scrolls Online (PS5)": "The Elder Scrolls Online (PS5)",
  "『Beast of Reincarnation』 デジタルデラックスエディション": "轮回之兽 数字豪华版",
  "ジュラシック・ワールド・エボリューション3:デラックス エディション": "侏罗纪世界: 进化 3",
  "ジュラシック・ワールド・エボリューション3: 復活の大地バンドル。": "侏罗纪世界: 进化 3",
  "ファイナルファンタジータクティクス - イヴァリース クロニクルズ [PS4 & PS5]": "FINAL FANTASY TACTICS - The Ivalice Chronicles [PS4 & PS5]",
  "ファイナルファンタジータクティクス - イヴァリース クロニクルズ デラックスエディション [PS4 & PS5]": "FINAL FANTASY TACTICS - The Ivalice Chronicles Deluxe Edition [PS4 & PS5]",
  "ドラゴンボール ゼノバース 2 デラックスエディション": "七龙珠 异战2",
  "ドラゴンボール ゼノバース 2 Lite": "七龙珠 异战2",
  "FINAL FANTASY VII REMAKE Deluxe Edition": "最终幻想VII 重制版 豪华版",
  "【PS4版購入者向け】FINAL FANTASY VII REMAKE": "【PS4版购买者专用】FINAL FANTASY VII REMAKE",
  "FINAL FANTASY XV JUDGMENT DISC": "FINAL FANTASY XV JUDGMENT DISC",
  "デイヴ・ザ・ダイバー デイヴ＆一番バンドル": "潜水员戴夫",
  "Wo Long: Fallen Dynasty (PS4 & PS5)": "卧龙: 苍天陨落",
  "紅の錬金術士と白の守護者 ～レスレリアーナのアトリエ～ Digital Deluxe with Season Pass": "紅の錬金術士と白の守護者 ~レスレリアーナのアトリエ~ Digital Deluxe with Season Pass",
  "紅の錬金術士と白の守護者 ～レスレリアーナのアトリエ～ Digital Deluxe": "红色的炼金术士和白色的守护者 ～蕾斯莱莉娅娜的炼金工房～ 数字豪华版",
  "エイリアン：ファイアーチーム エリート2": "エイリアン: ファイアーチーム エリート2",
  "エイリアン：ファイアーチーム エリート2 - 40th Anniversaryプレミアムエディション": "エイリアン: ファイアーチーム エリート2 - 40th Anniversaryプレミアムエディション",
  "Tales of ARISE PS4® & PS5®": "破晓传奇 PS4 & PS5",
  "井戸の鳥のデモ": "黯井微光",
  "Granblue Fantasy Versus: Rising フリーエディション": "Granblue Fantasy Versus: Rising フリーエディション",
  "The Blood of Dawnwalker - Eclipse Edition": "The Blood of Dawnwalker - Eclipse Edition",
  "Party Animals Deluxe Edition": "猛兽派对 豪华版",
  "真・女神転生Ⅴ Vengeance デジタルデラックスエディション PS4&PS5": "真·女神转生V Vengeance PS4&PS5",
  "真・女神転生Ⅴ Vengeance PS4&PS5": "真・女神转生V Vengeance PS4&PS5",
  "FINAL FANTASY XII THE ZODIAC AGE デジタルプレミアムエディション": "最终幻想XII 黄道时代 デジタルプレミアムエディション",
  "FINAL FANTASY XII THE ZODIAC AGE Original Soundtrack": "最终幻想XII 黄道时代 Original Soundtrack",
  "FINAL FANTASY XII THE ZODIAC AGE Mini Soundtrack": "最终幻想XII 黄道时代 Mini Soundtrack",
  "FINAL FANTASY XII THE ZODIAC AGE 予約限定Extra Soundtrack": "最终幻想XII 黄道时代 予约限定Extra Soundtrack",
  "Ghost of Tsushima DIRECTOR’S CUT (PlayStation Plus)": "奇谈模式",
  "Horizon Forbidden West™ Complete Edition": "地平线 西之绝境 完整版",
  "ドラゴンクエスト HD-2D版 ロト三部作セット": "勇者斗恶龙 HD-2D版 洛特三部曲合辑",
  "『ザ クルー：モーターフェス』アルティメットYEAR 3エディション": "飙酷车神: 轰鸣盛典",
  "『ザ クルー：モーターフェス』アルティメットYEAR 2エディション": "飙酷车神: 轰鸣盛典",
  "三國志8 REMAKE with パワーアップキット": "三国志8 REMAKE",
  "三國志8 REMAKE (PS4 & PS5)": "三国志8 REMAKE (PS4 & PS5)",
  "三國志8 REMAKE Digital Deluxe Edition (PS4 & PS5)": "三国志8 REMAKE 数字豪华版 (PS4 & PS5)",
  "進撃の巨人２ -Final Battle-": "进击的巨人2",
  "進撃の巨人２　Deluxe Edition": "进击的巨人2 豪华版",
  "進撃の巨人２": "进击的巨人2",
  "ファークライ6 ゲームオブザイヤーエディション": "孤岛惊魂6",
  "ファークライ6 デラックスエディション": "孤岛惊魂6",
  "ファークライ アンソロジーバンドル": "孤岛惊魂6",
  "ファークライ6 ゴールドエディション": "孤岛惊魂6",
  "龍が如く８外伝 Pirates in Hawaii デラックス・エディション PS4 & PS5": "人中之龙8外传 Pirates in Hawaii PS4 & PS5",
  "龍が如く８外伝 Pirates in Hawaii 体験版": "人中之龙8外传 Pirates in Hawaii PS4 & PS5",
  "The Last of Us™ Part I デジタルデラックスエディション": "最后生还者 第一部 数字豪华版",
  "「ニーア」バンドル": "ニーアバンドル",
  "Echoes of Aincrad デラックスエディション": "艾恩葛朗特 回荡新声",
  "Echoes of Aincrad DEMO Version": "艾恩葛朗特的回响 体验版",
  "Mortal Shell II: Devout Edition": "致命躯壳 II: 虔诚版",
  "Mortal Shell II - オープンベータ版": "致命躯壳 II",
  "ライザのアトリエ ～秘密トリロジー～ DX (PS4&5)": "ライザのアトリエ ~秘密トリロジー~ DX (PS4&5)",
  "BIOHAZARD RE:2 Z Version": "生化危机2 重制版 Z Version",
  "BIOHAZARD RE:2 デラックスエディション": "生化危机2 重制版 豪华版",
  "BIOHAZARD RE:2 R.P.D. Demo": "BIOHAZARD RE: 2 R.P.D. Demo",
  "龍が如く 桐生一馬コンプリートセット": "人中之龙 桐生一马整合套装",
  "龍が如く 極 PS4 & PS5": "人中之龙 桐生一马整合套装",
  "龍が如く 極＆龍が如く 極２セットパック PS4＆PS5": "人中之龙 桐生一马整合套装",
  "キャプテン翼２ WORLD FIGHTERS": "队长小翼2 世界群星",
  "キャプテン翼２ WORLD FIGHTERS アルティメットエディション": "队长小翼2 世界群星",
  "キャプテン翼２ WORLD FIGHTERS デラックスエディション": "队长小翼2 世界群星",
  "ディズニー ドリームライトバレー – アルティメットエディション": "迪士尼梦幻星谷 アルティメットエディション",
  "ディズニー ドリームライトバレー – ハニーグローの森": "ディズニー ドリームライトバレー – ハニーグローの森",
  "ディズニー ドリームライトバレー – 願い咲く牧場エディション": "ディズニー ドリームライトバレー – 願い咲く牧場エディション",
  "Ninja Gaiden 4 Deluxe Edition": "忍者龙剑传4 豪华版",
  "『ドラゴンクエストXI　過ぎ去りし時を求めて S』“たっぷり遊べる体験版”": "ドラゴンクエストXI 過ぎ去りし時を求めて S“たっぷり遊べる体験版”",
  "ARMORED CORE™ VI FIRES OF RUBICON™ PS4 & PS5": "机战佣兵VI 境界天火 PS4&PS5",
  "ARMORED CORE™ VI FIRES OF RUBICON™ デラックス エディション PS4 & PS5": "机战佣兵VI 境界天火 PS4&PS5",
  "Venus Vacation PRISM - DEAD OR ALIVE Xtreme - Digital Deluxe Edition": "维纳斯璀璨假期 数字豪华版",
  "龍が如く 維新！ 極 デジタルデラックス　PS4 & PS5": "人中之龙 维新! 极 PS4 & PS5",
  "龍が如く 維新！ 極　PS4 & PS5": "人中之龙 维新! 极 PS4 & PS5",
  "龍が如く 維新！ 極　バトル体験版": "人中之龙 维新! 极 PS4 & PS5",
  "コナン アウトキャスト": "コナン アウトキャスト",
  "コナン アウトキャスト – アイル・オブ・シプター・エディション": "コナン アウトキャスト – アイル・オブ・シプター・エディション",
  "コナン アウトキャスト – コンプリート・エディション": "コナン アウトキャスト – コンプリート・エディション",
  "鬼滅の刃 ヒノカミ血風譚2　デラックスエディション PS4 & PS5": "鬼灭之刃 火之神血风谭2 PS4 & PS5",
  "鬼滅の刃 ヒノカミ血風譚2 PS4 & PS5": "鬼灭之刃 火之神血风谭2 PS4 & PS5",
  "METAL GEAR SOLID V: THE PHANTOM PAIN PS4®版": "METAL GEAR SOLID V: THE PHANTOM PAIN PS4版",
  "Winning Post 10 2025 (PS4 & PS5)": "Winning Post 10 2025 (PS4 & PS5)",
  "Winning Post 10 2025 (PS4)": "Winning Post 10 2025 (PS4)",
  "【体験版】Winning Post 10 2025": "【体験版】Winning Post 10 2025",
  "Moonlighter 2: The Endless Vault": "Moonlighter 2: The Endless Vault",
  "Moonlighter 2: The Endless Vault Demo": "Moonlighter 2: The Endless Vault Demo",
  "OCTOPATH TRAVELER 0 Prologue Demo": "歧路旅人0 序章体验版",
  "OCTOPATH TRAVELER 0 PS4 & PS5": "歧路旅人0 OCTOPATH TRAVELER 0 PS4&PS5",
  "DEATH STRANDING 2:ON THE BEACH デジタルデラックスエディション": "死亡搁浅2：冥滩之上 数字豪华版",
  "ゴーストリコン ワイルドランズ ディフィニティブエディション": "幽灵行动: 荒野决定版",
  "ゴーストリコン ワイルドランズ": "幽灵行动: 荒野决定版",
  "SILENT HILL f - デラックスエディション": "寂静岭 f 豪华版",
  "SILENT HILL 2 & SILENT HILL f デラックスデュアルパック": "SILENT HILL 2 & SILENT HILL f デラックスデュアルパック",
  "SILENT HILL 2 & SILENT HILL f スタンダードデュアルパック": "SILENT HILL 2 & SILENT HILL f スタンダードデュアルパック",
  "TOEM 2": "TOEM 2 摄影冒险2",
  "FINAL FANTASY IX": "FINAL FANTASY IX",
  "超新時空ゲイム ネプテューヌ∞": "超新時空ゲイム ネプテューヌ∞",
  "超新時空ゲイム ネプテューヌ∞ デジタルデラックス版": "超新時空ゲイム ネプテューヌ∞ デジタルデラックス版",
  "十三機兵防衛圏 ウェルカムバリューパック": "十三机兵防卫圈",
  "十三機兵防衛圏 体験版": "十三機兵防衛圏 体験版",
  "『ゴーストリコン ブレイクポイント』アルティメットエディション": "幽灵行动: 断点 - 标准版",
  "ゴーストリコン ブレイクポイント スタンダードエディション": "幽灵行动: 断点 - 标准版",
  "『ゴーストリコン ブレイクポイント』デラックスエディション": "幽灵行动: 断点 - 标准版",
  "ゴーストリコン ブレイクポイント  ゴールドエディション": "幽灵行动: 断点 - 标准版",
  "三國志13 with パワーアップキット": "三国志13",
  "三國志13": "三國志13",
  "CODE VEIN": "CODE VEIN",
  "CODE VEIN 体験版": "CODE VEIN 体験版",
  "CODE VEIN デラックスエディション": "CODE VEIN デラックスエディション",
  "スカル アンド ボーンズ": "碧海黑帆",
  "『スカル アンド ボーンズ』デラックスエディション": "碧海黑帆",
  "『スカル アンド ボーンズ』プレミアムエディション": "碧海黑帆",
  "『Halo: Campaign Evolved』": "Halo: Campaign Evolved",
  "『Halo: Campaign Evolved - プレミアム エディション』": "Halo: Campaign Evolved - 高级版",
  "龍が如く７外伝 名を消した男 デラックス・エディション　PS4 & PS5": "龍が如く7外伝 名を消した男 デラックス・エディション PS4 & PS5",
  "龍が如く７外伝 名を消した男　PS4 & PS5": "龍が如く7外伝 名を消した男 PS4 & PS5",
  "イナズマイレブン 英雄たちのヴィクトリーロード  PS4 & PS5": "イナズマイレブン 英雄たちのヴィクトリーロード PS4 & PS5",
  "イナズマイレブン 英雄たちのヴィクトリーロード デラックスエディション": "イナズマイレブン 英雄たちのヴィクトリーロード デラックスエディション",
  "Subnautica": "深海迷航",
  "Subnautica サブノーティカ": "深海迷航",
  "太鼓の達人 セッションでドドンがドン！": "太鼓之达人 合奏咚咚咚!",
  "太鼓の達人 セッションでドドンがドン！デラックス版": "太鼓之达人 合奏咚咚咚!",
  "【体験版】太鼓の達人 セッションでドドンがドン！": "太鼓之达人 合奏咚咚咚!",
  "アスファルト: Legends": "狂野飙车: 竞速传奇",
  "It Takes Two PS4™ & PS5™": "双人成行 PS4 和 PS5",
  "「It Takes Two」 - フレンドパス PS4™": "双人成行 PS4 和 PS5",
  "「It Takes Two」 - フレンドパス PS5™": "双人成行 PS4 和 PS5",
  "悪魔城ドラキュラＸ・セレクション 月下の夜想曲 ＆ 血の輪廻": "悪魔城ドラキュラX・セレクション 月下の夜想曲 & 血の輪廻",
  "WORLD WAR Z: Aftermath": "僵尸世界大战：余波",
  "WORLD WAR Z: Aftermath Deluxe Edition": "僵尸世界大战：余波 豪华版",
  "地球防衛軍5": "地球防衛軍5",
  "地球防衛軍5 デジタルプレミアムエディション": "地球防衛軍5 デジタルプレミアムエディション",
  "新 鬼武者　DAWN OF DREAMS": "新 鬼武者 DAWN OF DREAMS",
  "JUDGE EYES：死神の遺言 Remastered": "JUDGE EYES: 死神の遺言 Remastered",
  "JUDGE EYES：死神の遺言 Remastered デジタルデラックス": "JUDGE EYES: 死神の遺言 Remastered デジタルデラックス",
  "JUDGE EYES：死神の遺言　新価格版": "审判之眼: 死神的遗言 新价格版",
  "ソフィーのアトリエ ～不思議な本の錬金術士～ DX": "ソフィーのアトリエ ~不思議な本の錬金術士~ DX",
  "アトリエ ～不思議の錬金術士　トリロジー～ DX": "アトリエ ~不思議の錬金術士 トリロジー~ DX",
  "リディー＆スールのアトリエ ～不思議な絵画の錬金術士～ DX": "リディー&スールのアトリエ ~不思議な絵画の錬金術士~ DX",
  "フィリスのアトリエ ～不思議な旅の錬金術士～ DX": "フィリスのアトリエ ~不思議な旅の錬金術士~ DX",
  "ドラゴンクエストビルダーズ２　ゲーム本編+追加DLC第1弾・第2弾・第3弾セット": "勇者斗恶龙 创世小玩家2 破坏神席德与空荡岛",
  "ドラゴンクエストビルダーズ２　破壊神シドーとからっぽの島": "勇者斗恶龙 创世小玩家2 破坏神席德与空荡岛",
  "ドラゴンクエストビルダーズ２　破壊神シドーとからっぽの島　たっぷり遊べる体験版": "勇者斗恶龙 创世小玩家2 破坏神席德与空荡岛",
  "Little Strays \"小貓大營救\": Legendary Collection": "Little Strays \"小猫大营救\": Legendary Collection",
  "夏日狂想曲：乡间的难忘回忆": "夏日狂想曲: 乡间的难忘回忆",
  "Monster Hunter World: Iceborne": "Monster Hunter World: Iceborne",
  "鬼谷八荒": "鬼谷八荒",
  "MY HERO ULTRA RUMBLE": "MY HERO ULTRA RUMBLE",
  "黒神話：悟空": "黑神话: 悟空",
  "黒神話：悟空 デジタルデラックス版": "黑神话: 悟空",
  "《战地风云™ 2042》PS5": "战地风云 2042PS5",
  "《战地风云™ 2042》PS4": "战地风云 2042PS4",
  "《战地风云™ 2042》精英版 PS4 和 PS5": "战地风云 2042精英版 PS4 和 PS5",
  "阿西, 美女室友竟然...？2": "阿西, 美女室友竟然...?2",
  "Stellaris: Console Edition PS5 - Deluxe Edition": "Stellaris: Console Edition PS5 - Deluxe Edition",
  "Stellaris: Console Edition PS5 - Starter Edition": "Stellaris: Console Edition PS5 - Starter Edition",
  "Stellaris: Console Edition PS5": "Stellaris: Console Edition PS5",
  "『ゴルフ PGAツアー 2K25』": "PGA TOUR 2K25职业版",
  "『ゴルフ PGAツアー 2K25』プロ エディション": "PGA TOUR 2K25职业版",
  "『ゴルフ PGAツアー 2K25』レジェンド エディション Year 2": "PGA TOUR 2K25职业版",
  "『ゴルフ PGAツアー 2K25』体験版": "PGA TOUR 2K25职业版",
  "『MLB® The Show™ 26』（英語版）デジタルデラックスエディション": "MLB The Show 26デジタルデラックスエディション",
  "MLB® The Show™ 26（英語版）": "MLB The Show 26",
  "碧海黑帆": "碧海黑帆",
  "《碧海黑帆》豪华版": "碧海黑帆豪华版",
  "《碧海黑帆》高级版": "碧海黑帆高级版",
  "SILENT HILL f - Deluxe Edition": "寂静岭 f 豪华版",
  "SILENT HILL 2 & SILENT HILL f Standard Dual Pack": "SILENT HILL 2 & SILENT HILL f Standard Dual Pack",
  "SILENT HILL 2 & SILENT HILL f Deluxe Dual Pack": "SILENT HILL 2 & SILENT HILL f Deluxe Dual Pack",
  "伊苏回忆录 -菲尔迦纳的誓约-": "伊苏回忆录 -菲尔迦纳的誓约-",
  "《Unravel Two》": "Unravel Two",
  "《Unravel Yarny》同捆包": "Unravel Yarny同捆包",
  "ダイイングライト2 ステイ ヒューマン PS5": "消逝的光芒系列包",
  "ダイイングライト2 ステイ ヒューマン – Digital Extras Edition PS5": "ダイイングライト2 ステイ ヒューマン – Digital Extras Edition PS5",
  "クルセイダーキングス Ⅲ": "クルセイダーキングス III",
  "クルセイダーキングス Ⅲ: ロイヤルエディション": "クルセイダーキングス III: ロイヤルエディション",
  "無双アビス": "无双深渊",
  "無双アビス スタートダッシュエディション": "无双深渊",
  "無双アビス フルコスチュームエディション": "无双深渊",
  "龍が如く７＆龍が如く８セットパック": "人中之龙7&人中之龙8套装包",
  "龍が如く７　光と闇の行方　インターナショナル　レジェンダリーヒーローエディション": "人中之龙7&人中之龙8套装包",
  "龍が如く７　光と闇の行方　インターナショナル　ヒーローエディション": "人中之龙7&人中之龙8套装包",
  "Assassin's Creed® Origins - ゴールドエディション": "刺客信条: 起源 - 数字标准版",
  "アサシン クリード オリジンズ": "刺客信条: 起源 - 数字标准版",
  "アサシン クリード オリジンズ - デラックスエディション": "刺客信条: 起源 - 数字标准版",
  "ブロウルハラ": "ブロウルハラ",
  "ユミアのアトリエ ～追憶の錬金術士と幻創の地～ Digital Deluxe with Season Pass (PS4 & PS5)": "ユミアのアトリエ ~追憶の錬金術士と幻創の地~ Digital Deluxe with Season Pass (PS4 & PS5)",
  "ユミアのアトリエ ～追憶の錬金術士と幻創の地～ (PS4 & PS5)": "ユミアのアトリエ ~追憶の錬金術士と幻創の地~ (PS4 & PS5)",
  "ユミアのアトリエ ～追憶の錬金術士と幻創の地～ Digital Deluxe (PS4 & PS5)": "ユミアのアトリエ ~追憶の錬金術士と幻創の地~ Digital Deluxe (PS4 & PS5)",
  "ユミアのアトリエ ～追憶の錬金術士と幻創の地～ (PS4)": "ユミアのアトリエ ~追憶の錬金術士と幻創の地~ (PS4)",
  "ユミアのアトリエ ～追憶の錬金術士と幻創の地～ Digital Deluxe (PS4)": "ユミアのアトリエ ~追憶の錬金術士と幻創の地~ Digital Deluxe (PS4)",
  "ユミアのアトリエ ～追憶の錬金術士と幻創の地～ Digital Deluxe with Season Pass (PS4)": "ユミアのアトリエ ~追憶の錬金術士と幻創の地~ Digital Deluxe with Season Pass (PS4)",
  "Rise of the Ronin™ Z version デジタルデラックス版": "浪人崛起 Z version 数字豪华版",
  "Rise of the Ronin™ Z version": "浪人崛起 Z version",
  "Rise of the Ronin™": "浪人崛起",
  "Rise of the Ronin™ Z version 体験版": "浪人崛起 Z version 体験版",
  "Rise of the Ronin™ 体験版": "浪人崛起 体験版",
  "Rise of the Ronin™ デジタルデラックス版": "浪人崛起 数字豪华版",
  "无双深渊": "无双深渊",
  "无双深渊 起跑冲刺版": "无双深渊 起跑冲刺版",
  "无双深渊 全套服装版": "无双深渊 全套服装版",
  "Untitled Goose Game": "Untitled Goose Game",
  "Tower of Fantasy": "Tower of Fantasy",
  "《PGA TOUR 2K25》": "PGA TOUR 2K25职业版",
  "《PGA TOUR 2K25》传奇版第2年": "PGA TOUR 2K25传奇版第2年",
  "PGA TOUR 2K25 抢先体验": "PGA TOUR 2K25 抢先体验",
  "《PGA TOUR 2K25》职业版": "PGA TOUR 2K25职业版",
  "UNCHARTED 4: A Thief&#x27;s End™ PlayStation®Hits (游戏)": "UNCHARTED 4: A Thief's End PlayStationHits (游戏)",
  "UNCHARTED: The Lost Legacy™ (中英韩文版)": "游戏",
  "《特技摩托賽：崛起》- 試玩版": "特技摩托赛: 崛起- 试玩版",
  "《特技摩托賽：崛起》- 數位黃金版": "特技摩托赛: 崛起- 数码黄金版",
  "《特技摩托賽：崛起》- 數位標準版": "特技摩托赛: 崛起- 数码标准版",
  "What Remains of Edith Finch": "What Remains of Edith Finch",
  "「ペルソナ５」シリーズ ゲームバンドル": "女神异闻录5 皇家版",
  "バトルフィールド 1": "バトルフィールド 1",
  "バトルフィールド 1 Revolution": "バトルフィールド 1 Revolution",
  "バトルフィールド 1 Revolution & タイタンフォール® 2 Ultimate Edition バンドル": "バトルフィールド 1 Revolution & タイタンフォール 2 Ultimate Edition バンドル",
  "METAL GEAR SOLID V: GROUND ZEROES + THE PHANTOM PAIN": "METAL GEAR SOLID V: GROUND ZEROES + THE PHANTOM PAIN",
  "勇者斗恶龙X 觉醒的五种族 OFFLINE Deluxe Edition PS4&PS5": "勇者斗恶龙X 觉醒的五种族 OFFLINE Deluxe Edition PS4&PS5",
  "勇者斗恶龙X 觉醒的五种族 OFFLINE PS4&PS5": "勇者斗恶龙X 觉醒的五种族 OFFLINE PS4&PS5",
  "勇者斗恶龙X 觉醒的五种族 OFFLINE DEMO PS4&PS5": "勇者斗恶龙X 觉醒的五种族 OFFLINE DEMO PS4&PS5",
  "刺客信条：起源 - 数字标准版": "刺客信条: 起源 - 数字标准版",
  "刺客信条：起源 - 数码豪华版": "刺客信条: 起源 - 数码豪华版",
  "刺客信条：起源 - 数码黄金版": "刺客信条: 起源 - 数码黄金版",
  "极速滑板": "极速滑板",
  "Crime Scene Cleaner": "Crime Scene Cleaner",
  "Laundry Store Simulator & Crime Scene Cleaner": "Laundry Store Simulator & Crime Scene Cleaner",
  "Indie All Star Vol 4": "Indie All Star Vol 4",
  "『War Robots: Frontiers』": "War Robots: Frontiers",
  "仁王２ Remastered Complete Edition": "仁王2 Remastered Complete Edition",
  "【PS4版購入者向け特別価格】仁王２": "仁王2",
  "仁王２ Complete Edition": "仁王2 Complete Edition",
  "アノ 117: パックスロマーナ ゴールドエディション": "纪元117: 罗马和平",
  "アノ 117: パックスロマーナ": "纪元117: 罗马和平",
  "STEINS;GATE RE:BOOT": "STEINS;GATE RE: BOOT",
  "STEINS;GATE RE:BOOT DIGITAL DELUXE EDITION": "STEINS;GATE RE: BOOT DIGITAL DELUXE EDITION",
  "STEINS;GATE RE:BOOT Digital Deluxe Edition": "STEINS;GATE RE: BOOT Digital Deluxe Edition",
  "BIOHAZARD 7 resident evil": "BIOHAZARD 7 resident evil",
  "BIOHAZARD 7 resident evil グロテスクVer.": "BIOHAZARD 7 resident evil グロテスクVer.",
  "BIOHAZARD 7 resident evil Gold Edition グロテスクVer.": "BIOHAZARD 7 resident evil Gold Edition グロテスクVer.",
  "BIOHAZARD 7 resident evil Gold Edition": "BIOHAZARD 7 resident evil Gold Edition",
  "BIOHAZARD 7 TEASER -BEGINNING HOUR-": "BIOHAZARD 7 TEASER -BEGINNING HOUR-",
  "skate.™": "极速滑板",
  "Granblue Fantasy: Versus": "传说版",
  "Granblue Fantasy: Versus（传说版）": "Granblue Fantasy: Versus(传说版)",
  "Monster Hunter Rise + Sunbreak 双重豪华组合包": "Monster Hunter Rise + Sunbreak 双重豪华组合包",
  "Monster Hunter Rise + Sunbreak 组合包": "Monster Hunter Rise + Sunbreak 组合包",
  "Monster Hunter Rise PS4 & PS5": "怪物猎人 崛起 PS4 & PS5",
  "Monster Hunter Rise Deluxe Edition PS4 & PS5": "怪物猎人 崛起 豪华版 PS4 & PS5",
  "创神之阿尔斯马格纳 The Alchemist of Ars Magna": "创神之阿尔斯马格纳 The Alchemist of Ars Magna",
  "真·女神转生Ⅴ Vengeance PS4&PS5": "真·女神转生V Vengeance PS4&PS5",
  "真·女神转生Ⅴ Vengeance 数字豪华版 PS4&PS5": "真·女神转生V Vengeance 数字豪华版 PS4&PS5",
  "Days Gone Remastered": "Days Gone Remastered",
  "Days Gone 豪华下载版": "Days Gone 豪华下载版",
  "Days Gone 一般版": "Days Gone 一般版",
  "LEGO® Party!": "LEGO Party!",
  "ペルソナ３ リロード　デジタルデラックスエディション": "女神异闻录3 Reload 数字豪华版",
  "Sleeping Dogs™ Definitive Edition 制品版 (中韩文版)": "Sleeping Dogs Definitive Edition 制品版",
  "Sleeping Dogs™ Definitive Edition 制品版": "Sleeping Dogs Definitive Edition 制品版",
  "《星球大战 零号连队™》豪华版": "星球大战 零号连队豪华版",
  "星球大战 零号连队™": "星球大战 零号连队",
  "God of War 豪华下载版": "God of War 豪华下载版",
  "FINAL FANTASY XII THE ZODIAC AGE (中韩文版)": "最终幻想XII 黄道时代",
  "FINAL FANTASY XII THE ZODIAC AGE 数码典藏版 (中韩文版)": "FINAL FANTASY XII THE ZODIAC AGE 数码典藏版",
  "蠢蠢角斗士": "蠢蠢角斗士",
  "愚蠢的角斗士演示": "愚蠢的角斗士演示",
  "『ベイブレードエックス エボバトル』スーパーアルティメットエディション": "ベイブレードエックス エボバトルスーパーアルティメットエディション",
  "ベイブレードエックス エボバトル": "ベイブレードエックス エボバトル",
  "『ベイブレードエックス エボバトル』アルティメットエディション": "ベイブレードエックス エボバトルアルティメットエディション",
  "MapleStory Classic World - Zakum Package": "MapleStory Classic World - Zakum Package",
  "超级机器人大战Ｘ (PS4™版) (中韩文版)": "超级机器人大战X (PS4版)",
  "无双OROCHI 蛇魔2 Ultimate 制品版": "无双OROCHI 蛇魔2 Ultimate 制品版",
  "コール オブ デューティ ワールドウォーII 通常版": "使命召唤: 二战",
  "Call of Duty®: WWII - デジタルデラックスエディション": "使命召唤: 二战",
  "トロピコ 6": "トロピコ 6",
  "百万吨级武藏W：WIRED 豪华版": "百万吨级武藏W: WIRED 豪华版",
  "百万吨级武藏W：WIRED 标准版": "百万吨级武藏W: WIRED 标准版",
  "勇者斗恶龙III HD-2D Remake": "勇者斗恶龙III HD-2D Remake",
  "EVERSPACE™ 2": "EVERSPACE 2",
  "EVERSPACE™ 2 - Galactic Edition": "EVERSPACE 2 - Galactic Edition",
  "Test Drive Unlimited Solar Crown（テストドライブ アンリミテッド ソーラークラウン）": "Test Drive Unlimited Solar Crown(テストドライブ アンリミテッド ソーラークラウン)",
  "Test Drive Unlimited Solar Crown（テストドライブ アンリミテッド ソーラークラウン）- Silver Sharps Edition": "Test Drive Unlimited Solar Crown(テストドライブ アンリミテッド ソーラークラウン)- Silver Sharps Edition",
  "Test Drive Unlimited Solar Crown（テストドライブ アンリミテッド ソーラークラウン）- Gold Edition": "Test Drive Unlimited Solar Crown(テストドライブ アンリミテッド ソーラークラウン)- Gold Edition",
  "Test Drive Unlimited Solar Crown（テストドライブ アンリミテッド ソーラークラウン）- Silver Streets Edition": "Test Drive Unlimited Solar Crown(テストドライブ アンリミテッド ソーラークラウン)- Silver Streets Edition",
  "SimRail - The Railway Simulator": "SimRail - The Railway Simulator",
  "Fall Guys": "Fall Guys",
  "ロマンシング サガ３": "ロマンシング サガ3",
  "CarX Street": "CarX Street",
  "Castlevania Requiem:Symphony of the Night ＆ Rondo of Blood": "Castlevania Requiem: Symphony of the Night & Rondo of Blood",
  "Autobahn Police Simulator 3 - Off-Road Bundle": "Autobahn Police Simulator 3 - Off-Road Bundle",
  "Autobahn Police Simulator 3": "Autobahn Police Simulator 3",
  "Autobahn Police Simulator 3 - Complete Edition": "Autobahn Police Simulator 3 - Complete Edition",
  "Extinguish & Patrol Bundle": "Extinguish & Patrol Bundle",
  "《地平线 零之曙光™》重制版": "地平线 零之曙光重制版",
  "Horizon Zero Dawn™": "地平线 零之曙光重制版",
  "Horizon Zero Dawn™: Complete Edition PlayStation®Hits": "Horizon Zero Dawn: Complete Edition PlayStationHits",
  "Anvil Saga - Deluxe Edition": "Anvil Saga - Deluxe Edition",
  "Anvil Saga": "Anvil Saga",
  "凶乱魔界主义 数字尊爵豪华版": "凶乱魔界主义 数字尊爵豪华版",
  "凶乱魔界主义": "凶乱魔界主义",
  "凶乱魔界主义 数字豪华版": "凶乱魔界主义 数字豪华版",
  "超级机器人大战Ｖ": "超级机器人大战V",
  "アセットコルサ コンペティツィオーネ": "アセットコルサ コンペティツィオーネ",
  "Assetto Corsa Competizione - 2024 パック": "Assetto Corsa Competizione - 2024 パック",
  "BIOHAZARD RE:3": "BIOHAZARD RE: 3",
  "RACCOON CITY EDITION Z version": "RACCOON CITY EDITION Z version",
  "BIOHAZARD RE：3　Raccoon City Demo": "BIOHAZARD RE: 3 Raccoon City Demo",
  "FINAL FANTASY VII": "FINAL FANTASY VII",
  "スクウェア・エニックス 名作RPGバンドル": "スクウェア・エニックス 名作RPGバンドル",
  "コール オブ デューティ モダン・ウォーフェア": "使命召唤: 现代战争",
  "STAR WARS ゼロ・カンパニー™": "星球大战 零号连队",
  "「STAR WARS ゼロ・カンパニー™」 デラックス エディション": "星球大战 零号连队",
  "Gothic II Complete Classic": "Gothic II Complete Classic",
  "意航员 2": "意航员 2",
  "AFL 26": "AFL 26",
  "AFL 26 - PRO TEAM BUNDLE": "AFL 26 - PRO TEAM BUNDLE",
  "纸人2": "纸人2",
  "纸人2 黄金典藏版": "纸人2 黄金典藏版",
  "《波斯王子™》- 新纪元组合包": "波斯王子- 新纪元组合包",
  "波斯王子：Rogue™": "波斯王子: Rogue",
  "Hunting Simulator 3 - Apex Predator Edition": "狩猎模拟3 Apex Predator Edition",
  "鉄道にっぽん！ RealPro 長距離運転！特急ひのとり 近畿日本鉄道 編": "鉄道にっぽん! RealPro 長距離運転!特急ひのとり 近畿日本鉄道 編",
  "The Last of Us® Part II デジタルデラックス版": "The Last of Us Part II 普通版",
  "The Last of Us® Part II Value Selection": "The Last of Us Part II 普通版",
  "GIGABASH": "GigaBash 巨击大乱斗",
  "《王国》传承捆绑包": "王国传承捆绑包",
  "Kingdom Coronation Collection": "Kingdom Coronation Collection",
  "Kingdom Two Crowns: Essentials Pack": "Kingdom Two Crowns: Essentials Pack",
  "Kingdom Two Crowns: Olympus Edition": "Kingdom Two Crowns: Olympus Edition",
  "鬼灭之刃 火之神血风谭 PS4＆PS5": "鬼灭之刃 火之神血风谭 PS4&PS5",
  "鬼灭之刃 火之神血风谭 终极版 PS4＆PS5": "鬼灭之刃 火之神血风谭 终极版 PS4&PS5",
  "鬼灭之刃 火之神血风谭 豪华版 PS4＆PS5": "鬼灭之刃 火之神血风谭 豪华版 PS4&PS5",
  "NBA 2K16": "NBA 2K16 Michael Jordan特别版",
  "NBA 2K16 Michael Jordan特别版": "NBA 2K16 Michael Jordan特别版",
  "代号三国：龙起": "代号三国: 龙起",
  "《忍者神龟：斯普林特的命运》 - 白金版": "忍者神龟: 斯普林特的命运 - 白金版",
  "《忍者神龟：斯普林特的命运》——黄金版": "忍者神龟: 斯普林特的命运——黄金版",
  "《忍者神龟：斯普林特的命运》": "忍者神龟: 斯普林特的命运",
  "SD GUNDAM G世代 创世＆火线纵横 双重包 (游戏)": "SD GUNDAM G世代 创世&火线纵横 双重包 (游戏)",
  "SD GUNDAM G世代 火线纵横 (中韩文版)": "SD GUNDAM G世代 火线纵横",
  "SD GUNDAM G 世代 火线纵横 体验版 (中韩文版)": "SD GUNDAM G 世代 火线纵横 体验版",
  "SD GUNDAM G世代 火线纵横 白金版 (游戏)": "SD GUNDAM G世代 火线纵横 白金版 (游戏)",
  "Boomerang Fu": "Boomerang Fu",
  "Boomerang Fu - Deluxe Edition": "Boomerang Fu - Deluxe Edition",
  "RIDE 6": "RIDE 6",
  "RIDE 6 - Deluxe Edition": "RIDE 6 - Deluxe Edition",
  "RIDE 6 - Ultimate Edition": "RIDE 6 - Ultimate Edition",
  "DAEMON X MACHINA TITANIC SCION DIGITAL DELUXE EDITION  デモンエクスマキナ タイタニックサイオン デジタルデラックスエディション": "DAEMON X MACHINA TITANIC SCION DIGITAL DELUXE EDITION デモンエクスマキナ タイタニックサイオン デジタルデラックスエディション",
  "DAEMON X MACHINA TITANIC SCION PREMIUM DIGITAL DELUXE EDITION  デモンエクスマキナ タイタニックサイオン プレミアムデジタルデラックスエディション": "DAEMON X MACHINA TITANIC SCION PREMIUM DIGITAL DELUXE EDITION デモンエクスマキナ タイタニックサイオン プレミアムデジタルデラックスエディション",
  "DAEMON X MACHINA TITANIC SCION 体験版": "DAEMON X MACHINA TITANIC SCION 体験版",
  "DAEMON X MACHINA TITANIC SCION  デモンエクスマキナ タイタニックサイオン": "机甲战魔 神话之裔",
  "バルダーズ・ゲート3": "博德之门3",
  "バルダーズ・ゲート3 デジタル・デラックス・エディション": "博德之门3",
  "战地之王-国际": "战地之王-国际",
  "Eslabong": "Eslabong",
  "速速上菜！": "速速上菜!",
  "MechWarrior 5: Mercenaries - Ashes and Ascension": "MechWarrior 5: Mercenaries - Ashes and Ascension",
  "Ghost of Tsushima 导演剪辑版": "Ghost of Tsushima 导演剪辑版",
  "Ghost of Tsushima Bonus Content": "奇谈模式",
  "Ghost of Tsushima 导演剪辑版 (PlayStation Plus)": "Ghost of Tsushima 导演剪辑版 (PlayStation Plus)",
  "《Ghost of Tsushima: Legends（奇谈模式）》": "Ghost of Tsushima: Legends(奇谈模式)",
  "Plants vs. Zombies™ Garden Warfare 2": "Plants vs. Zombies Garden Warfare 2",
  "Plants vs. Zombies™ Garden Warfare 2:豪华版": "Plants vs. Zombies Garden Warfare 2: 豪华版",
  "美俏女剑士 起源 豪华版": "美俏女剑士 起源 豪华版",
  "美俏女剑士 起源": "美俏女剑士 起源",
  "BLUE REFLECTION Quartet: 少女们的奇迹": "BLUE REFLECTION Quartet: 少女们的奇迹",
  "Harvest Moon®: Echoes of Teradea": "Harvest Moon: Echoes of Teradea",
  "MLB® The Show™ 26": "MLB The Show 26",
  "《MLB® The Show™ 26》数字豪华版": "MLB The Show 26数字豪华版",
  "忍者龟：施莱德的复仇 (Teenage Mutant Ninja Turtles: Shredder's Revenge)": "忍者龟: 施莱德的复仇 (Teenage Mutant Ninja Turtles: Shredder's Revenge)",
  "《忍者龟：施莱德的复仇》终极版": "忍者龟: 施莱德的复仇终极版",
  "《失落之魂》": "失落之魂",
  "《失落之魂》体验版": "失落之魂体验版",
  "《失落之魂》数字豪华版": "失落之魂数字豪华版",
  "咒术回战 双华乱舞  PS4™ & PS5®": "咒术回战 双华乱舞 PS4 & PS5",
  "咒术回战 双华乱舞 体验版": "咒术回战 双华乱舞 体验版",
  "咒术回战 双华乱舞 数字终极版 PS4™ & PS5®": "咒术回战 双华乱舞 数字终极版 PS4 & PS5",
  "咒术回战 双华乱舞 数字豪华版 PS4™ & PS5®": "咒术回战 双华乱舞 数字豪华版 PS4 & PS5",
  "STEINS;GATE RE:BOOT PS5": "STEINS;GATE RE: BOOT PS5",
  "LEGO® Voyagers": "LEGO Voyagers",
  "LEGO® Voyagers Friend’s Pass": "LEGO Voyagers Friend's Pass",
  "Warhammer 40,000: Boltgun 2": "Warhammer 40,000: Boltgun 2",
  "超级机器人大战OG THE MOON DWELLERS": "超级机器人大战OG THE MOON DWELLERS",
  "苦痛殿堂": "苦痛殿堂",
  "Halls of Torment - Prelude": "苦痛殿堂",
  "苦痛殿堂 - The Bog Bundle": "苦痛殿堂 - The Bog Bundle",
  "Vampire: The Masquerade® - Bloodlines™ 2 - Premium Edition": "Vampire: The Masquerade - Bloodlines 2 - Premium Edition",
  "Vampire: The Masquerade® - Bloodlines™ 2": "Vampire: The Masquerade - Bloodlines 2",
  "Vampire: The Masquerade® - Bloodlines™ 2 - Deluxe Edition": "Vampire: The Masquerade - Bloodlines 2 - Deluxe Edition",
  "eBaseball™: PRO SPIRIT 2026": "eBaseball: PRO SPIRIT 2026",
  "情感反诈模拟器": "情感反诈模拟器",
  "情感反诈模拟器 体验版": "情感反诈模拟器 体验版",
  "超级鸡马 (中日英韩文版)": "超级鸡马",
  "Dysmantle": "Dysmantle",
  "PAYDAY 3: The Big Scoreバンドル": "PAYDAY 3: The Big Scoreバンドル",
  "PAYDAY 3": "PAYDAY 3",
  "PAYDAY 3: Silver Edition": "PAYDAY 3: Silver Edition",
  "PAYDAY 3: Year 1 Edition": "PAYDAY 3: Year 1 Edition",
  "Remnant II® - Standard Edition": "Remnant II - Standard Edition",
  "Remnant II® - Deluxe Edition": "Remnant II - Deluxe Edition",
  "Remnant II® - Ultimate Edition": "Remnant II - Ultimate Edition",
  "ソードアート・オンライン フェイタル・バレット コンプリートエディション": "ソードアート・オンライン フェイタル・バレット コンプリートエディション",
  "ソードアート・オンライン フェイタル・バレット Welcome Price!!": "ソードアート・オンライン フェイタル・バレット Welcome Price!!",
  "【体験版】ソードアート・オンライン フェイタル・バレット": "【体験版】ソードアート・オンライン フェイタル・バレット",
  "ロスト アイドロン": "ロスト アイドロン",
  "Lost Eidolons & The Dungeon of Naheulbeuk - Tactical Bundle": "Lost Eidolons & The Dungeon of Naheulbeuk - Tactical Bundle",
  "ファンタジーライフｉ グルグルの竜と時をぬすむ少女　デジタルデラックスエディション PS4 & PS5": "ファンタジーライフi グルグルの竜と時をぬすむ少女 デジタルデラックスエディション PS4 & PS5",
  "ファンタジーライフｉ グルグルの竜と時をぬすむ少女 PS4 & PS5": "ファンタジーライフi グルグルの竜と時をぬすむ少女 PS4 & PS5",
  "DISSIDIA FINAL FANTASY NT デジタルプレミアムエディション": "DISSIDIA FINAL FANTASY NT デジタルプレミアムエディション",
  "DISSIDIA FINAL FANTASY NT 通常版": "DISSIDIA FINAL FANTASY NT 通常版",
  "DISSIDIA FINAL FANTASY NT Free Edition": "DISSIDIA FINAL FANTASY NT Free Edition",
  "龍が如く０ 誓いの場所 Director&#x27;s Cut": "人中之龙0 誓约的场所 导演剪辑版",
  "まさか！下宿生が 美女ですって？2": "阿西, 美女室友竟然...?2",
  "Battlefield™ V": "战地风云 5",
  "Battlefield™ V Definitive エディション": "战地风云 5",
  "Surviving Mars: Relaunched": "Surviving Mars: Relaunched",
  "Surviving Mars: Relaunched - Ultimate Edition": "Surviving Mars: Relaunched - Ultimate Edition",
  "ペルソナ５ タクティカ　デジタルデラックス PS4 & PS5": "ペルソナ5 タクティカ デジタルデラックス PS4 & PS5",
  "ペルソナ５ タクティカ PS4 & PS5": "ペルソナ5 タクティカ PS4 & PS5",
  "シアトリズム ファイナルバーライン プレミアムデジタルデラックスエディション": "シアトリズム ファイナルバーライン プレミアムデジタルデラックスエディション",
  "シアトリズム ファイナルバーライン デジタルデラックスエディション": "シアトリズム ファイナルバーライン デジタルデラックスエディション",
  "シアトリズム ファイナルバーライン": "シアトリズム ファイナルバーライン",
  "シアトリズム ファイナルバーライン DEMO Version": "シアトリズム ファイナルバーライン DEMO Version",
  "ザ クルー2 - ゴールドエディション": "ザ クルー2 - ゴールドエディション",
  "ザ クルー2 - スペシャルエディション": "ザ クルー2 - スペシャルエディション",
  "ザ クルー2": "ザ クルー2",
  "Back 4 Blood: スタンダード・エディション PS4 & PS5": "喋血复仇: 标准版 PS4 & PS5",
  "Back 4 Blood: アルティメット・エディション PS4 & PS5": "喋血复仇: 标准版 PS4 & PS5",
  "Back 4 Blood: デラックス・エディション PS4 & PS5": "喋血复仇: 标准版 PS4 & PS5",
  "ラブライブ！スクールアイドルフェスティバル ～after school ACTIVITY～ わいわい！Home Meeting!!": "ラブライブ!スクールアイドルフェスティバル ~after school ACTIVITY~ わいわい!Home Meeting!!",
  "ライザのアトリエ３ ～終わりの錬金術士と秘密の鍵～ DX (PS4&5)": "ライザのアトリエ3 ~終わりの錬金術士と秘密の鍵~ DX (PS4&5)",
  "冒険家エリオットの千年物語": "冒険家エリオットの千年物語",
  "冒険家エリオットの千年物語 Prologue Demo": "冒険家エリオットの千年物語 Prologue Demo",
  "冒険家エリオットの千年物語 デジタルデラックスエディション": "冒険家エリオットの千年物語 デジタルデラックスエディション",
  "アサシン クリード ユニティ": "刺客信条: 大革命 - 数字标准版",
  "LET IT DIE+オフラインキー": "LET IT DIE+オフラインキー",
  "鬼武者2": "鬼武者2",
  "鬼武者1+2 パック": "鬼武者1+2 パック",
  "鬼武者2 Demo": "鬼武者2 Demo",
  "ザ・ラストスタンド：アフターマス": "ザ・ラストスタンド: アフターマス",
  "AKIBA LOST": "AKIBA LOST",
  "AKIBA LOST: Digital Deluxe Edition": "AKIBA LOST: Digital Deluxe Edition",
  "AKIBA LOST 体験版": "AKIBA LOST 体験版",
  "信長の野望･大志": "信長の野望・大志",
  "信長の野望･大志 with パワーアップキット": "信長の野望・大志 with パワーアップキット",
  "信長の野望･大志 デジタルデラックス": "信長の野望・大志 デジタルデラックス",
  "SAMURAI SPIRITS": "SAMURAI SPIRITS",
  "SAMURAI SPIRITS DELUXE PACK": "SAMURAI SPIRITS DELUXE PACK",
  "聖剣伝説 VISIONS of MANA Digital Deluxe Edition PS4 & PS5": "圣剑传说 玛娜视界 数字豪华版 PS4 & PS5",
  "聖剣伝説 VISIONS of MANA PS4 & PS5": "圣剑传说 玛娜视界 PS4 & PS5",
  "聖剣伝説 VISIONS of MANA 体験版": "聖剣伝説 VISIONS of MANA 体験版",
  "FINAL FANTASY I–VI Bundle": "FINAL FANTASY I–VI Bundle",
  "FINAL FANTASY VI": "FINAL FANTASY VI",
  "鬼斬": "鬼斬",
  "鉄拳7 Definitive Edition": "鉄拳7 Definitive Edition",
  "鉄拳7 Welcome Price!!": "鉄拳7 Welcome Price!!",
  "フロントミッション サード: リメイク": "フロントミッション サード: リメイク",
  "フロントミッション サード: リメイク Demo": "フロントミッション サード: リメイク Demo",
  "Age of Wonders 4: Collector’s Bundle": "Age of Wonders 4: Collector's Bundle",
  "Age of Wonders 4: Premium Edition": "奇迹时代4 高级版",
  "Age of Wonders 4: Starter Edition": "Age of Wonders 4: Starter Edition",
  "Devil May Cry 5 Special Edition": "Devil May Cry 5 Special Edition",
  "Devil May Cry 5 プレイヤーバージルパック": "Devil May Cry 5 プレイヤーバージルパック",
  "Devil May Cry 5 Demo": "鬼泣5 体验版",
  "Devil May Cry 5 デラックスエディション プレイヤーバージルパック": "鬼泣5 豪华版 プレイヤーバージルパック",
  "METAL GEAR SOLID: MASTER COLLECTION Vol.1 PS4 & PS5": "METAL GEAR SOLID: MASTER COLLECTION Vol.1 PS4 & PS5",
  "METAL GEAR SOLID (MASTER COLLECTION版) PS4 & PS5": "METAL GEAR SOLID (MASTER COLLECTION版) PS4 & PS5",
  "METAL GEAR SOLID 3 SNAKE EATER (MASTER COLLECTION版) PS4 & PS5": "METAL GEAR SOLID 3 SNAKE EATER (MASTER COLLECTION版) PS4 & PS5",
  "METAL GEAR SOLID 2 SONS OF LIBERTY (MASTER COLLECTION版) PS4 & PS5": "METAL GEAR SOLID 2 SONS OF LIBERTY (MASTER COLLECTION版) PS4 & PS5",
  "戦国BASARA4 皇": "戦国BASARA4 皇",
  "戦国BASARA4 皇 ANNIVERSARY SET": "戦国BASARA4 皇 ANNIVERSARY SET",
  "Virtua Fighter 5 R.E.V.O. World Stage 30thアニバーサリーエディション": "Virtua Fighter 5 R.E.V.O. World Stage 30thアニバーサリーエディション",
  "Virtua Fighter 5 R.E.V.O. World Stage": "Virtua Fighter 5 R.E.V.O. World Stage",
  "Virtua Fighter 5 R.E.V.O. World Stage 体験版": "Virtua Fighter 5 R.E.V.O. World Stage 体験版",
  "バイオハザード リベレーションズ2 (Episode 1 「流刑地にて」)": "章节1: 流放地",
  "FINAL FANTASY V": "FINAL FANTASY V",
  "DARIUSBURST Chronicle Saviours": "DARIUSBURST Chronicle Saviours",
  "PowerWash Simulator：アルティメット・サティスファクション・バンドル": "PowerWash Simulator: アルティメット・サティスファクション・バンドル",
  "PowerWash Simulator": "PowerWash Simulator",
  "PowerWash Simulator 体験版": "PowerWash Simulator 体験版",
  "Call of Duty®: Black Ops Cold War - 世代互換バンドル PS4® & PS5®": "使命召唤: 黑色行动冷战标准版",
  "Call of Duty®: Black Ops Cold War - スタンダード版": "使命召唤: 黑色行动冷战标准版",
  "Crysis Remastered Trilogy": "Crysis Remastered Trilogy",
  "Crysis Remastered": "Crysis Remastered",
  "MADiSON": "MADiSON",
  "Blasphemous 2 - Mea Culpa Edition": "Blasphemous 2 - Mea Culpa Edition",
  "Blasphemous 2": "Blasphemous 2",
  "纸人 : 第一章 (中日英韩文版)": "纸人: 第一章",
  "inKONBINI: One Store. Many Stories": "inKONBINI: One Store. Many Stories",
  "inKONBINI: One Store. Many Stories Digital Deluxe Edition": "inKONBINI: One Store. Many Stories Digital Deluxe Edition",
  "Resident Evil Triple Pack": "Resident Evil Triple Pack",
  "Victor Vran: Overkill Edition": "Victor Vran: Overkill Edition",
  "《巫师之昆特牌：王权的陨落》": "巫师之昆特牌: 王权的陨落",
  "《TOPSPIN 2K25》": "TOPSPIN 2K25跨世代数字版",
  "方舟公园 (中日英韩文版)": "方舟公园",
  "Dragonkin: The Banished": "Dragonkin: The Banished",
  "Dragonkin - Blood Scales Edition": "Dragonkin - Blood Scales Edition",
  "《秘影曼德拉》": "秘影曼德拉",
  "《秘影曼德拉》——试玩版": "秘影曼德拉——试玩版",
  "《秘影曼德拉》：数字豪华版": "秘影曼德拉: 数字豪华版",
  "英雄传说 黎之轨迹Ⅱ -绯红原罪- SUPER PRICE (PS4 & PS5)": "英雄传说 黎之轨迹II -绯红原罪- SUPER PRICE (PS4 & PS5)",
  "英雄传说 黎之轨迹Ⅱ -绯红原罪- 战斗体验版": "英雄传说 黎之轨迹II -绯红原罪- 战斗体验版",
  "英雄传说 黎之轨迹Ⅱ -绯红原罪- 故事体验版": "英雄传说 黎之轨迹II -绯红原罪- 故事体验版",
  "英雄传说 黎之轨迹Ⅱ -绯红原罪- SUPER PRICE 数字豪华版 (PS4 & PS5)": "英雄传说 黎之轨迹II -绯红原罪- SUPER PRICE 数字豪华版 (PS4 & PS5)",
  "《中土世界™：暗影捆绑包》 (游戏)": "中土世界: 暗影捆绑包 (游戏)",
  "演示版中土世界™: 战争之影™ (中英韩文版)": "演示版中土世界: 战争之影",
  "《中土世界™ : 战争之影™》 (中英韩文版)": "中土世界: 战争之影",
  "中土世界™：战争之影™终极选定版 (中英韩文版)": "中土世界: 战争之影终极选定版",
  "Agefield High: Rock the School": "Agefield High: Rock the School",
  "百宜佳超市模拟器": "百宜佳超市模拟器",
  "Valkyria Chronicles Remasterd": "Valkyria Chronicles Remasterd",
  "假面骑士 巅峰战士 (中韩文版)": "假面骑士 巅峰战士",
  "铁拳7": "铁拳7",
  "铁拳7 - 决定版": "铁拳7 - 决定版",
  "铁拳7 - 经典版": "铁拳7 - 经典版",
  "Capcom Arcade Stadium": "Capcom Arcade Stadium",
  "Capcom Arcade Stadium Bundle": "Capcom Arcade Stadium Bundle",
  "银河之星 Remastered Collection": "银河之星 Remastered Collection",
  "《纪元 1800》主机版 - 豪华版": "纪元 1800主机版 - 豪华版",
  "《纪元 1800》主机版 - 标准版": "纪元 1800主机版 - 标准版",
  "MudRunner - American Wilds Edition [PS4 & PS5]": "MudRunner - American Wilds Edition [PS4 & PS5]",
  "MudRunner [PS4 & PS5]": "MudRunner [PS4 & PS5]",
  "機動戦士ガンダム　バトルオペレーション　Code Fairy　デラックスエディション PS4 ＆ PS5": "機動戦士ガンダム バトルオペレーション Code Fairy デラックスエディション PS4 & PS5",
  "機動戦士ガンダム　バトルオペレーション　Code Fairy　Vol.1 PS4 ＆ PS5": "機動戦士ガンダム バトルオペレーション Code Fairy Vol.1 PS4 & PS5",
  "機動戦士ガンダム　バトルオペレーション　Code Fairy　スタンダードエディション PS4 ＆ PS5": "機動戦士ガンダム バトルオペレーション Code Fairy スタンダードエディション PS4 & PS5",
  "CRISIS CORE –FINAL FANTASY VII– REUNION PS4 & PS5": "CRISIS CORE –FINAL FANTASY VII– REUNION PS4 & PS5",
  "CRISIS CORE –FINAL FANTASY VII– REUNION DIGITAL DELUXE EDITION PS4 & PS5": "CRISIS CORE –FINAL FANTASY VII– REUNION DIGITAL DELUXE EDITION PS4 & PS5",
  "ファークライ5": "孤岛惊魂5",
  "ファークライ5 ゴールドエディション": "孤岛惊魂5",
  "「ファークライ インサニティ」バンドル": "孤岛惊魂5",
  "リトルナイトメア3 PS4 & PS5": "小小梦魇3",
  "リトルナイトメア3 デジタルデラックスエディション PS4 & PS5": "小小梦魇3",
  "リトルナイトメア3 - 無料体験版＆フレンドパス": "小小梦魇3",
  "戦極姫７～戦雲つらぬく紅蓮の遺志～": "戦極姫7~戦雲つらぬく紅蓮の遺志~",
  "MUDRUNNER「マッドランナー」 [PS4 & PS5]": "MUDRUNNERマッドランナー [PS4 & PS5]",
  "鬼滅の刃 ヒノカミ血風譚　デラックスエディション PS4＆PS5": "鬼灭之刃 火之神血风谭 PS4&PS5",
  "鬼滅の刃 ヒノカミ血風譚　アルティメットエディション": "鬼灭之刃 火之神血风谭 PS4&PS5",
  "鬼滅の刃 ヒノカミ血風譚 PS4＆PS5": "鬼灭之刃 火之神血风谭 PS4&PS5",
  "Yet Another Zombie Survivors": "Yet Another Zombie Survivors",
  "Yet Another Zombie Survivors Demo": "Yet Another Zombie Survivors Demo",
  "明末：ウツロノハネ": "明末: 渊虚之羽",
  "明末：ウツロノハネ - デラックスエディション": "明末: 渊虚之羽",
  "グリードフォール：滅びゆく世界 - デラックスエディション": "グリードフォール: 滅びゆく世界 - デラックスエディション",
  "グリードフォール：滅びゆく世界": "グリードフォール: 滅びゆく世界",
  "ダライアス コズミックコレクションAE": "ダライアス コズミックコレクションAE",
  "ダライアス コズミックコレクションCE": "ダライアス コズミックコレクションCE",
  "トランスポートフィーバー２ デラックスエディション": "トランスポートフィーバー2 デラックスエディション",
  "トランスポートフィーバー２": "トランスポートフィーバー2",
  "Darwin's Paradox!": "Darwin's Paradox!",
  "Darwin's Paradox! タクティカルタコアクションデモ": "Darwin's Paradox! タクティカルタコアクションデモ",
  "The Texas Chain Saw Massacre": "The Texas Chain Saw Massacre",
  "The Texas Chain Saw Massacre - Content Pass Edition": "The Texas Chain Saw Massacre - Content Pass Edition",
  "The Texas Chain Saw Massacre - Family Edition": "The Texas Chain Saw Massacre - Family Edition",
  "The Texas Chain Saw Massacre - Friends and Family Edition": "The Texas Chain Saw Massacre - Friends and Family Edition",
  "The Texas Chain Saw Massacre - Friends Edition": "The Texas Chain Saw Massacre - Friends Edition",
  "The Texas Chain Saw Massacre - Robbing Graves Edition": "The Texas Chain Saw Massacre - Robbing Graves Edition",
  "Core Keeper": "Core Keeper",
  "Chained Echoes": "Chained Echoes",
  "Astroneer　-アストロニーア-": "Astroneer -アストロニーア-",
  "Astroneer -アストロニーア-": "Astroneer -アストロニーア-",
  "ASTRONEER: Glitchwalkers Edition": "ASTRONEER: Glitchwalkers Edition",
  "Astroneer: Megatech Edition": "Astroneer: Megatech Edition",
  "Dune: Awakening デューン：アウェイクニング - アルティメット版": "Dune: Awakening 沙丘: 觉醒",
  "Dune: Awakening デューン：アウェイクニング": "Dune: Awakening 沙丘: 觉醒",
  "Dune: Awakening デューン：アウェイクニング - デラックス版": "Dune: Awakening 沙丘: 觉醒",
  "グラディオ・モリ": "蠢蠢角斗士",
  "Gladio Mori Demo": "Gladio Mori Demo",
  "LOLLIPOP CHAINSAW RePOP": "LOLLIPOP CHAINSAW RePOP",
  "MotoGP™26": "MotoGP26",
  "Ship Graveyard Simulator Collection": "Ship Graveyard Simulator Collection",
  "Ship Graveyard Simulator 2 - Complete Edition": "Ship Graveyard Simulator 2 - Complete Edition",
  "Ship Graveyard Simulator 2": "Ship Graveyard Simulator 2",
  "Mine & Ship Bundle: Gold Mining & Ship Graveyard Simulator 2": "Mine & Ship Bundle: Gold Mining & Ship Graveyard Simulator 2",
  "『無双OROCHI２ Ultimate』": "無双OROCHI2 Ultimate",
  "七つ荒れ獄：カオスの木": "七度荒域: 混沌之树",
  "ペルソナ５ ダンシング・スターナイト": "ペルソナ5 ダンシング・スターナイト",
  "Avowed プレミアムエディション": "Avowed プレミアムエディション",
  "Dungeon Antiqua 2": "Dungeon Antiqua 2",
  "Path of Titansスタンダードファウンダーズパック": "Path of Titansスタンダードファウンダーズパック",
  "Path of Titans - デラックスファウンダーズパック": "Path of Titans - デラックスファウンダーズパック",
  "メトロ エクソダス": "メトロ エクソダス",
  "メトロ エクソダス ゴールドエディション": "メトロ エクソダス ゴールドエディション",
  "不確定世界の探偵紳士～悪行双麻の事件ファイル～": "不確定世界の探偵紳士~悪行双麻の事件ファイル~",
  "ウォッチドッグス レギオン PS4 & PS5": "看门狗: 军团 PS4 & PS5",
  "ウォッチドッグス レギオン アルティメットエディション PS4 & PS5": "看门狗: 军团 PS4 & PS5",
  "ウォッチドッグス レギオン デラックスエディション PS4 & PS5": "看门狗: 军团 PS4 & PS5",
  "ウォッチドッグス レギオン ゴールドエディション PS4 & PS5": "看门狗: 军团 PS4 & PS5",
  "山羊模拟器：重制版": "山羊模拟器: 重制版",
  "动物迷城 ～Back to the Dawn～": "动物迷城 ~Back to the Dawn~",
  "动物迷城 ～Back to the Dawn～ 体验版": "动物迷城 ~Back to the Dawn~ 体验版",
  "美女，请别影响我成仙": "美女,请别影响我成仙",
  "硬核机甲": "硬核机甲",
  "Tactics Ogre: Reborn": "Tactics Ogre: Reborn",
  "Tactics Ogre: Reborn Digital Premium Edition PS4&PS5": "Tactics Ogre: Reborn Digital Premium Edition PS4&PS5",
  "阿加莎·克里斯蒂 – 尼罗河上的惨案": "阿加莎·克里斯蒂 – 尼罗河上的惨案",
  "英雄传说 闪之轨迹I：改 -Thors Military Academy 1204-": "英雄传说 闪之轨迹I: 改 -Thors Military Academy 1204-",
  "同行：月球逃脱": "同行: 月球逃脱",
  "同行：月球逃脱 试玩版": "同行: 月球逃脱 试玩版",
  "《海绵宝宝》：比基尼海滩捆绑包": "海绵宝宝: 比基尼海滩捆绑包",
  "《海绵宝宝：潮汐巨神》": "海绵宝宝: 潮汐巨神",
  "《海绵宝宝：潮汐巨神》Demo": "海绵宝宝: 潮汐巨神Demo",
  "《海绵宝宝：潮汐巨神》——幽灵数字典藏版": "海绵宝宝: 潮汐巨神——幽灵数字典藏版",
  "《榮耀戰魂》– 黃金版": "荣耀战魂– 黄金版",
  "《荣耀战魂》": "荣耀战魂",
  "《荣耀战魂》终极版": "荣耀战魂终极版",
  "蚂蚁帝国（Empire of the Ants）": "蚂蚁帝国(Empire of the Ants)",
  "蚂蚁帝国（Empire of the Ants）- Demo": "蚂蚁帝国(Empire of the Ants)- Demo",
  "Kingdoms of Amalur: Re-Reckoning": "Kingdoms of Amalur: Re-Reckoning",
  "Kingdoms of Amalur: Re-Reckoning - Fate Edition": "Kingdoms of Amalur: Re-Reckoning - Fate Edition",
  "机甲战魔 神话之裔": "机甲战魔 神话之裔",
  "机甲战魔 神话之裔 数字豪华典藏版": "机甲战魔 神话之裔 数字豪华典藏版",
  "机甲战魔 神话之裔 数字豪华版": "机甲战魔 神话之裔 数字豪华版",
  "机甲战魔 神话之裔 试玩版": "机甲战魔 神话之裔 试玩版",
  "Life is Strange 2: Awesome Adventures of Captain Spirit Demo": "Life is Strange 2: Awesome Adventures of Captain Spirit Demo",
  "Life is Strange 2 Complete Season": "Life is Strange 2 Complete Season",
  "Life is Strange 2 Episode 1": "Life is Strange 2 Episode 1",
  "THE KING OF FIGHTERS '97 GLOBAL MATCH (PS4™)": "THE KING OF FIGHTERS '97 GLOBAL MATCH (PS4)",
  "THE KING OF FIGHTERS '97 GLOBAL MATCH (PS4™、PS Vita)": "THE KING OF FIGHTERS '97 GLOBAL MATCH (PS4、PS Vita)",
  "瑞奇与叮当™ PlayStation®Hits": "瑞奇与叮当 PlayStationHits",
  "零 ～红蝶～ REMAKE": "零 ~红蝶~ REMAKE",
  "零 ～红蝶～ REMAKE 体验版": "零 ~红蝶~ REMAKE 体验版",
  "零 ～红蝶～ REMAKE 体验版 (英韩文版)": "零 ~红蝶~ REMAKE 体验版",
  "零 ～红蝶～ REMAKE Digital Deluxe Edition": "零 ~红蝶~ REMAKE Digital Deluxe Edition",
  "RESIDENT EVIL 5": "RESIDENT EVIL 5",
  "Resident Evil Revelations 2 (章节1：流放地) (中日英韩文版)": "Resident Evil Revelations 2 (章节1: 流放地)",
  "Resident Evil Revelations 2 Deluxe Edition (中日英韩文版)": "生化危机：启示录2 豪华版",
  "Gun Club VR": "Gun Club VR",
  "HARD BULLET": "HARD BULLET",
  "Kynseed": "Kynseed",
  "地狱丧钟 Hell Clock": "地狱丧钟 Hell Clock",
  "警区": "警区",
  "Castlevania Anniversary Collection": "Castlevania Anniversary Collection",
  "Poppy Playtime: Chapter 5": "Poppy Playtime: Chapter 5",
  "PS4™ 和 PS5™ 采石场惊魂：豪华版": "PS4 和 PS5 采石场惊魂: 豪华版",
  "采石场惊魂（PS4™）": "采石场惊魂(PS4)",
  "采石场惊魂（PS5™）": "采石场惊魂(PS5)",
  "《歧路旅人》＋《歧路旅人 II》合辑": "歧路旅人+歧路旅人 II合辑",
  "OCTOPATH TRAVELER PS4＆PS5": "歧路旅人+歧路旅人 II合辑",
  "人中之龙 极２ PS4 & PS5": "人中之龙 极2 PS4 & PS5",
  "人中之龙　极2 体验版": "人中之龙 极2 体验版",
  "东京都市谜案特搜事件簿": "东京都市谜案特搜事件簿",
  "东京都市谜案特搜事件簿 DEMO": "东京都市谜案特搜事件簿 DEMO",
  "Sniper Elite 4 Digital Deluxe Edition": "Sniper Elite 4 Digital Deluxe Edition",
  "Sniper Elite 4": "Sniper Elite 4",
  "Test Drive Unlimited Solar Crown": "Test Drive Unlimited Solar Crown",
  "Test Drive Unlimited Solar Crown - Gold Edition": "Test Drive Unlimited Solar Crown - Gold Edition",
  "Test Drive Unlimited Solar Crown - Silver Sharps Edition": "Test Drive Unlimited Solar Crown - Silver Sharps Edition",
  "Test Drive Unlimited Solar Crown - Silver Streets Edition": "Test Drive Unlimited Solar Crown - Silver Streets Edition",
  "Daymare: 1994 Sandcastle 《白日梦魇：沙堡1994》": "Daymare: 1994 Sandcastle 白日梦魇: 沙堡1994",
  "招桃花温泉物语": "招桃花温泉物语",
  "SD GUNDAM G世代 创世 豪华版 (游戏)": "SD GUNDAM G世代 创世 豪华版 (游戏)",
  "SD GUNDAM G 世代 创世": "SD GUNDAM G 世代 创世",
  "纪念碑谷": "纪念碑谷",
  "Monument Valley: The Collection": "Monument Valley: The Collection",
  "SILENT HILL 2 Deluxe Edition": "SILENT HILL 2 Deluxe Edition",
  "SILENT HILL 2": "SILENT HILL 2",
  "The Relic: First Guardian": "The Relic: First Guardian",
  "太鼓之达人 合奏咚咚咚！ (中日英韩文版)": "太鼓之达人 合奏咚咚咚!",
  "太鼓之达人 合奏咚咚咚！ 豪华版 (中日英韩文版)": "太鼓之达人 合奏咚咚咚! 豪华版",
  "【体验版】太鼓之达人 合奏咚咚咚！ (中日英韩文版)": "【体验版】太鼓之达人 合奏咚咚咚!",
  "大航海時代 Online": "大航海時代 Online",
  "Until Dawn 2 -祟り島の惨劇-デジタルデラックスエディション": "Until Dawn 2 -祟り島の惨劇-デジタルデラックスエディション",
  "Until Dawn 2 -祟り島の惨劇-": "Until Dawn 2 -祟り島の惨劇-",
  "Medieval Dynasty": "Medieval Dynasty",
  "Medieval Dynasty - Complete Edition": "Medieval Dynasty - Complete Edition",
  "Medieval Dynasty - Echoes Edition": "Medieval Dynasty - Echoes Edition",
  "Winning Post 10 2024 (PS4 & PS5)": "Winning Post 10 2024 (PS4 & PS5)",
  "Winning Post 10 2024 (PS4)": "Winning Post 10 2024 (PS4)",
  "【体験版】Winning Post 10 2024": "【体験版】Winning Post 10 2024",
  "Ultimate Chicken Horse": "超级鸡马",
  "SILENT HILL 2 デラックスエディション": "SILENT HILL 2 デラックスエディション",
  "UNDERTALE": "UNDERTALE",
  "北斗が如く": "北斗が如く",
  "北斗が如く　体験版": "北斗が如く 体験版",
  "KINGDOM HEARTS - HD 1.5+2.5 ReMIX -": "KINGDOM HEARTS - HD 1.5+2.5 ReMIX -",
  "溶鉄のマルフーシャ": "熔铁少女",
  "OCTOPATH TRAVELER II PS4＆PS5": "OCTOPATH TRAVELER II PS4&PS5",
  "OCTOPATH TRAVELER II Prologue Demo": "OCTOPATH TRAVELER II Prologue Demo",
  "リトルナイトメア1+2 バンドルエディション": "小小梦魇1+2",
  "リトルナイトメア2 PS4 & PS5": "小小梦魇1+2",
  "リトルナイトメア2 体験版": "小小梦魇1+2",
  "リトルナイトメア2 デラックスエディション PS4 & PS5": "小小梦魇1+2",
  "Spyro™ Reignited Trilogy": "Spyro Reignited Trilogy",
  "Spirit of the North 2": "Spirit of the North 2",
  "Spirit of the North 1 & 2 Bundle": "Spirit of the North 1 & 2 Bundle",
  "Spirit of the North 2 - Deluxe Edition": "Spirit of the North 2 - Deluxe Edition",
  "BIOHAZARD 6": "BIOHAZARD 6",
  "セインツロウ ザ・サード：リマスタード": "セインツロウ ザ・サード: リマスタード",
  "Days Gone Value Selection": "Days Gone 一般版",
  "Days Gone デジタルデラックスエディション": "Days Gone 一般版",
  "銀魂乱舞 Welcome Price!! (PS4®版)": "銀魂乱舞 Welcome Price!! (PS4版)",
  "レイズ アーケード クロノロジー": "レイズ アーケード クロノロジー",
  "R-GEAR": "R-GEAR",
  "New みんなのGOLF コースまとめてスペシャルパック": "New みんなのGOLF コースまとめてスペシャルパック",
  "New みんなのGOLF Value Selection": "New みんなのGOLF Value Selection",
  "ボーダーランズ3 超デラックス・エディション PS4™ &  PS5™": "无主之地3 PS4 & PS5",
  "ボーダーランズ3 超レベルアップ・エディション PS4™ &  PS5™": "无主之地3 PS4 & PS5",
  "ボーダーランズ3アルティメット・エディション PS4™ &  PS5™": "无主之地3 PS4 & PS5",
  "ボーダーランズ3  PS4™ &  PS5™": "无主之地3 PS4 & PS5",
  "Clean Up Earth": "Clean Up Earth",
  "初音ミク Project DIVA Future Tone Prelude": "初音ミク Project DIVA Future Tone Prelude",
  "CONTROL アルティメット・エディション": "CONTROL アルティメット・エディション",
  "エスカ＆ロジーのアトリエ ～黄昏の空の錬金術士～ DX": "エスカ&ロジーのアトリエ ~黄昏の空の錬金術士~ DX",
  "Wandering Sword ～逸剣風雲決～": "逸剑风云决",
  "Wandering Sword ～逸剣風雲決～ デラックスエディション": "逸剑风云决",
  "Cairn": "孤山独影",
  "Cairn - デラックス版": "孤山独影",
  "ダイイングライト：ザ・ビースト RL Definitive Edition": "ダイイングライト: ザ・ビースト RL Definitive Edition",
  "ダイイングライト：ザ・ビースト": "消逝的光芒: 困兽",
  "ダイイングライト：ザ・ビースト Deluxe Edition": "消逝的光芒: 困兽 豪华版",
  "リスク・オブ・レイン 2 + サバイバーズ・オブ・ザ・ボイド + シーカーズ・オブ・ザ・ストーム + アロイ・コレクティブ": "雨中冒险 2+虚空幸存者+风暴探寻者+合金意念+ 万象归衡",
  "ツーポイントホスピタル：ハートフルコレクション": "ツーポイントホスピタル: ハートフルコレクション",
  "神椿市協奏中。": "神椿市協奏中。",
  "ワンダーランズ ～タイニー・ティナと魔法の世界 超レベルアップ・エディション": "小缇娜的奇幻之地: 增强版",
  "ワンダーランズ ～タイニー・ティナと魔法の世界 超カオス・エディション": "小缇娜的奇幻之地: 增强版",
  "Starship Troopers: Ultimate Bug War!": "Starship Troopers: Ultimate Bug War!",
  "百剣討妖伝綺譚": "百剣討妖伝綺譚",
  "荒野行動": "荒野行動",
  "DRIFTCE": "DRIFTCE",
  "Avatarland": "Avatarland",
  "Warrior Cats: Clans of the Forest - Feral Edition": "Warrior Cats: Clans of the Forest - Feral Edition",
  "Warrior Cats: Clans of the Forest": "Warrior Cats: Clans of the Forest",
  "Sea of Thieves: 2026 Deluxe Edition": "盗贼之海 豪华版",
  "サガ スカーレット グレイス 緋色の野望": "サガ スカーレット グレイス 緋色の野望",
  "Life is Strange Remastered Collection": "Life is Strange Remastered Collection",
  "ポピープレイタイムチャプタートよっつ": "ポピープレイタイムチャプタートよっつ",
  "戦場のヴァルキュリア４  新価格版": "戦場のヴァルキュリア4 新価格版",
  "戦場のヴァルキュリア４ 序盤体験版": "戦場のヴァルキュリア4 序盤体験版",
  "Scott Pilgrim EX": "Scott Pilgrim EX",
  "Mobile Suit Gundam: Silver Phantom": "Mobile Suit Gundam: Silver Phantom",
  "アノ1800 コンソールエディション - スタンダード": "纪元 1800主机版 - 标准版",
  "アノ1800 コンソールエディション - デラックス": "纪元 1800主机版 - 标准版",
  "Tchia (PS4 & PS5)": "Tchia (PS4 & PS5)",
  "Tchia: Oléti Edition (PS4 & PS5)": "Tchia: Oléti Edition (PS4 & PS5)",
  "House Flipper 2": "House Flipper 2",
  "House Flipper 2 - Complete Bundle": "House Flipper 2 - Complete Bundle",
  "Housedresser Bundle": "Housedresser Bundle",
  "Sakura Bundle (House Flipper 2 + Sakura DLC)": "Sakura Bundle (House Flipper 2 + Sakura DLC)",
  "Scooby Bundle (House Flipper 2 + Scooby Doo DLC)": "Scooby Bundle (House Flipper 2 + Scooby Doo DLC)",
  "Wreckfest（レックフェスト）PlayStation®5 Version": "Wreckfest(レックフェスト)PlayStation5 Version",
  "Wreckfest（レックフェスト）": "Wreckfest(レックフェスト)",
  "Wreckfest Complete Edition（レックフェスト コンプリートエディション）": "Wreckfest Complete Edition(レックフェスト コンプリートエディション)",
  "ラチェット＆クランク THE GAME PlayStation®Hits": "瑞奇与叮当 PlayStationHits",
  "ソフィーのアトリエ２ ～不思議な夢の錬金術士～ Digital Deluxe": "ソフィーのアトリエ2 ~不思議な夢の錬金術士~ Digital Deluxe",
  "ソフィーのアトリエ２ ～不思議な夢の錬金術士～": "ソフィーのアトリエ2 ~不思議な夢の錬金術士~",
  "ソフィーのアトリエ２ ～不思議な夢の錬金術士～ Digital Deluxe with Season Pass": "ソフィーのアトリエ2 ~不思議な夢の錬金術士~ Digital Deluxe with Season Pass",
  "Dumb Ways to Build": "Dumb Ways to Build",
  "Undead Citadel": "Undead Citadel",
  "Easy Red 2": "Easy Red 2",
  "人中之龙 维新！ 极 数字豪华版 PS4 & PS5": "人中之龙 维新! 极 数字豪华版 PS4 & PS5",
  "《人中之龙 维新！ 极》战斗体验版": "人中之龙 维新! 极战斗体验版",
  "人中之龙 维新！ 极 PS4 & PS5": "人中之龙 维新! 极 PS4 & PS5",
  "《极速快感：生存竞速》": "极速快感: 生存竞速",
  "《Need for Speed™ Rivals》完整版": "Need for Speed Rivals完整版",
  "机战佣兵™VI 境界天火™ PS4＆PS5": "机战佣兵VI 境界天火 PS4&PS5",
  "机战佣兵™VI 境界天火™ 数字豪华版 PS4＆PS5": "机战佣兵VI 境界天火 数字豪华版 PS4&PS5",
  "ONE PIECE 时光旅诗 数字豪华版 PS4 & PS5": "ONE PIECE 时光旅诗 数字豪华版 PS4 & PS5",
  "ONE PIECE 时光旅诗 体验版": "ONE PIECE 时光旅诗 体验版",
  "ONE PIECE 时光旅诗 PS4 & PS5": "ONE PIECE 时光旅诗 PS4 & PS5",
  "生化奇兵 重制版": "生化奇兵 重制版",
  "余烬骑士": "余烬骑士",
  "Farm Together 2": "Farm Together 2",
  "Kunio-kun: The World Classics Collection": "Kunio-kun: The World Classics Collection",
  "METAL GEAR SOLID 4: Guns of the Patriots - Master Collection Version": "METAL GEAR SOLID 4: Guns of the Patriots - Master Collection Version",
  "METAL GEAR SOLID: Peace Walker - Master Collection Version": "METAL GEAR SOLID: Peace Walker - Master Collection Version",
  "Love Live! School Idol Festival ~after school ACTIVITY~ Wai-Wai!Home Meeting!!": "Love Live! School Idol Festival ~after school ACTIVITY~ Wai-Wai!Home Meeting!!",
  "Swordsman VR": "Swordsman VR",
  "夏日美女：欧巴请和我恋爱吧！": "夏日美女: 欧巴请和我恋爱吧!",
  "The 7th Guest Remake": "The 7th Guest Remake",
  "Granblue Fantasy Versus: Rising Free Edition": "Granblue Fantasy Versus: Rising Free Edition",
  "Kalanoro": "Kalanoro",
  "Kittengumi Short: Chapter 0 + The Sakabato's Thief Pack": "Kittengumi Short: Chapter 0 + The Sakabato's Thief Pack",
  "Kittengumi Short: Chapter 0": "Kittengumi Short: Chapter 0",
  "Kittengumi Short: Chapter 0 Bundle": "Kittengumi Short: Chapter 0 Bundle",
  "ScooterFlow": "ScooterFlow",
  "Guns, Gore and Cannoli 2 (中日英韩文版)": "Guns, Gore and Cannoli 2",
  "《极限巅峰》- X Games 数码黄金版": "极限巅峰- X Games 数码黄金版",
  "《极限巅峰》- 数码标准版": "极限巅峰- 数码标准版",
  "√Letter-方根书简-": "√Letter-方根书简-",
  "Romancing SaGa 2": "复活邪神2",
  "复活邪神2": "复活邪神2",
  "Wylde Flowers": "Wylde Flowers",
  "Gang Beasts": "Gang Beasts",
  "名利游戏": "名利游戏",
  "名利游戏 体验版": "名利游戏 体验版",
  "NiuGamer FMV Collection 1": "NiuGamer FMV Collection 1",
  "红色的炼金术士和白色的守护者 ～蕾斯莱莉娅娜的炼金工房～": "红色的炼金术士和白色的守护者 ~蕾斯莱莉娅娜的炼金工房~",
  "红色的炼金术士和白色的守护者 ～蕾斯莱莉娅娜的炼金工房～ 数字豪华版": "红色的炼金术士和白色的守护者 ~蕾斯莱莉娅娜的炼金工房~ 数字豪华版",
  "红色的炼金术士和白色的守护者 ～蕾斯莱莉娅娜的炼金工房～ 数字豪华版 with 季票": "红色的炼金术士和白色的守护者 ~蕾斯莱莉娅娜的炼金工房~ 数字豪华版 with 季票",
  "《星球大战 绝地：陨落的武士团™》": "星球大战 绝地: 陨落的武士团",
  "《星球大战 绝地：陨落的武士团™》豪华版": "星球大战 绝地: 陨落的武士团豪华版",
  "LEGO® Marvel™ Super Heroes 制品版": "LEGO Marvel Super Heroes 制品版",
  "审判之眼：死神的遗言　新价格版": "审判之眼: 死神的遗言 新价格版",
  "审判之眼：死神的遗言 Remastered": "审判之眼: 死神的遗言 Remastered",
  "审判之眼：死神的遗言 Remastered 数字豪华版": "审判之眼: 死神的遗言 Remastered 数字豪华版",
  "Tools Up! - Ultimate Edition": "Tools Up! - Ultimate Edition",
  "Call of Duty®: Advanced Warfare Gold Edition": "Call of Duty: Advanced Warfare Gold Edition",
  "Call of Duty®: Advanced Warfare - Digital Pro Edition": "Call of Duty: Advanced Warfare - Digital Pro Edition",
  "Evil Genius 2: World Domination PS4 & PS5": "Evil Genius 2: World Domination PS4 & PS5",
  "Airplane Flight Simulator : EVO": "Airplane Flight Simulator: EVO",
  "Airplane Flight Simulator : EVO & Combat Zone + Bus Driving Simulator : EVO Bundle": "Airplane Flight Simulator: EVO & Combat Zone + Bus Driving Simulator: EVO Bundle",
  "Airplane Flight Simulator : EVO & Airplane Flight Simulator : Combat Zone Bundle": "Airplane Flight Simulator: EVO & Airplane Flight Simulator: Combat Zone Bundle",
  "生化奇兵2 重制版": "生化奇兵2 重制版",
  "LEGO® Marvel Super Heroes 2 (中英韩文版)": "LEGO Marvel Super Heroes 2",
  "LEGO® Marvel Super Heroes 2 Deluxe Edition (中英韩文版)": "LEGO Marvel Super Heroes 2 Deluxe Edition",
  "Soulstone Survivors": "Soulstone Survivors",
  "Soulstone Survivors & Supporter Pack": "Soulstone Survivors & Supporter Pack",
  "Forgive Me Father 2": "Forgive Me Father 2",
  "Revenge of the Savage Planet PS4 & PS5": "Revenge of the Savage Planet PS4 & PS5",
  "ROTSP: The Cosmic Hoarder Edition PS4 & PS5": "ROTSP: The Cosmic Hoarder Edition PS4 & PS5",
  "Nordic Ashes: The Complete Saga": "Nordic Ashes: The Complete Saga",
  "Ghostwire: Tokyo": "Ghostwire: Tokyo",
  "Ghostwire: Tokyo - Prelude (PS4/PS5)": "Ghostwire: Tokyo - Prelude (PS4/PS5)",
  "Ghostwire: Tokyo Deluxe Edition": "Ghostwire: Tokyo Deluxe Edition",
  "Detroit: Become Human™ 数码豪华版 (中英韩文版)": "Detroit: Become Human 数码豪华版",
  "Detroit: Become Human™ 一般版 (中英韩文版)": "Detroit: Become Human 一般版",
  "Detroit: Become Human™ 体验版 (中英韩文版)": "Detroit: Become Human 体验版",
  "Assetto Corsa": "Assetto Corsa",
  "Assetto Corsa Ultimate Edition": "Assetto Corsa Ultimate Edition",
  "Dragon&#x27;s Dogma: Dark Arisen": "Dragon's Dogma: Dark Arisen",
  "《战地风云4》 制品版": "战地风云4 制品版",
  "《战地风云4》高级版": "战地风云4高级版",
  "Pawbay（帕灣）": "Pawbay(帕湾)",
  "帕湾：暖心流浪猫": "帕湾: 暖心流浪猫",
  "Pawbay: 貓咪大混亂": "Pawbay: 猫咪大混乱",
  "帕湾: 模范猫爸妈": "帕湾: 模范猫爸妈",
  "SCHiM": "SCHiM",
  "光明记忆：无限": "光明记忆: 无限",
  "废土快递": "废土快递",
  "废土快递（狂野 MAX 版）": "废土快递(狂野 MAX 版)",
  "STAR WARS™ Episode I Racer": "STAR WARS Episode I Racer",
  "MOTORSLICE": "MOTORSLICE",
  "Darts VR2: BullsEye": "Darts VR2: BullsEye",
  "ForRace GT2D": "ForRace GT2D",
  "Brotato Nintendo Switch 2 Edition": "土豆兄弟 Nintendo Switch 2 版",
  "Wrap House Simulator": "Wrap House Simulator",
  "Wrap House Simulator Demo": "Wrap House Simulator Demo",
  "Kaku - Ancient Seal": "Kaku - Ancient Seal",
  "DayZ": "DayZ",
  "DayZ Cool Edition": "DayZ Cool Edition",
  "熔铁少女": "熔铁少女",
  "Pure Pool Pro": "Pure Pool Pro",
  "NBA THE RUN": "NBA THE RUN",
  "Crisol: Theater of Idols": "Crisol: Theater of Idols",
  "航海王BURNING BLOOD（PS4™版） (中日韩文版)": "航海王BURNING BLOOD(PS4版)",
  "航海王BURNING BLOOD 体验版 (中日韩文版)": "航海王BURNING BLOOD 体验版",
  "Shadow of the Tomb Raider: Definitive Edition": "Shadow of the Tomb Raider: Definitive Edition",
  "Shadow of the Tomb Raider": "Shadow of the Tomb Raider",
  "EA SPORTS™ WRC 24": "EA SPORTS WRC 24",
  "罪金游戏": "罪金游戏",
  "黑暗灵魂 Remastered (中英韩文版)": "黑暗灵魂 Remastered",
  "Tavern Manager Simulator": "Tavern Manager Simulator",
  "Bus Bound": "Bus Bound",
  "Bus Bound - Deluxe Edition": "Bus Bound - Deluxe Edition",
  "SpellForce: Conquest of Eo": "SpellForce: Conquest of Eo",
  "1000xRESIST": "1000xRESIST",
  "星穹遗迹": "星穹遗迹",
  "Wall World 2": "Wall World 2",
  "莫莫多拉: 月下告别": "莫莫多拉: 月下告别",
  "Construction Simulator - Gold Edition": "Construction Simulator - Gold Edition",
  "Construction Simulator": "Construction Simulator",
  "Construction Simulator - Titanium Edition": "Construction Simulator - Titanium Edition",
  "Flint: Treasure of Oblivion": "Flint: Treasure of Oblivion",
  "Flint: Treasure of Oblivion - Demo": "Flint: Treasure of Oblivion - Demo",
  "恐怖的世界": "恐怖的世界",
  "阿加莎·克里斯蒂：东方快车谋杀案": "阿加莎·克里斯蒂: 东方快车谋杀案",
  "Hello Neighbor": "Hello Neighbor",
  "《Spiritfarer》Farewell版": "SpiritfarerFarewell版",
  "仙剑奇侠传七": "仙剑奇侠传七",
  "Synthetic Lover PS4 & PS5": "Synthetic Lover PS4 & PS5",
  "《侏罗纪世界：进化 2》": "侏罗纪世界: 进化 2",
  "《侏罗纪世界：进化 2》豪华版": "侏罗纪世界: 进化 2豪华版",
  "《侏罗纪世界：进化 2》捆绑包": "侏罗纪世界: 进化 2捆绑包",
  "Mega Man X Legacy Collection": "Mega Man X Legacy Collection",
  "Mega Man X Legacy Collection 1+2": "Mega Man X Legacy Collection 1+2",
  "Anime Girls: Stellar Invasion": "Anime Girls: Stellar Invasion",
  "Supermarket Manager Simulator": "Supermarket Manager Simulator",
  "矩阵: 零日危机™": "矩阵: 零日危机",
  "Ducks in Disguise": "Ducks in Disguise",
  "METAL SLUG XX": "METAL SLUG XX",
  "Backrooms: Lost Tape": "Backrooms: Lost Tape",
  "ONE PIECE 无限世界 赤红 Deluxe Edition": "ONE PIECE 无限世界 赤红 Deluxe Edition",
  "Wizard of Legend 2": "Wizard of Legend 2",
  "Evil Nun: The Broken Mask": "Evil Nun: The Broken Mask",
  "Siren - 死魂曲": "Siren - 死魂曲",
  "The Little Tomb: The Maholova Club and the Search for a Dead Body PS4 & PS5": "The Little Tomb: The Maholova Club and the Search for a Dead Body PS4 & PS5",
  "Necromunda: Hired Gun": "Necromunda: Hired Gun",
  "Unpacking": "Unpacking",
  "Arranger: A Role-Puzzling Adventure": "Arranger: A Role-Puzzling Adventure",
  "Prison Boss VR": "Prison Boss VR",
  "Prison Boss VR- Demo": "Prison Boss VR- Demo",
  "主播之心": "主播之心",
  "Trine 2: Complete Story 制品版": "Trine 2: Complete Story 制品版",
  "Pathfinder: Kingmaker - Definitive Edition": "Pathfinder: Kingmaker - Definitive Edition",
  "My Little Universe": "My Little Universe",
  "My Little Universe Demo": "My Little Universe Demo",
  "极地战嚎 3：经典版 - 数码一般版": "极地战嚎 3: 经典版 - 数码一般版",
  "Street Fighter V: Champion Edition (中日英韩文版)": "Street Fighter V: Champion Edition",
  "STREET FIGHTER V Soundtrack: PlayStation®Plus Edition (中日英韩文版)": "STREET FIGHTER V Soundtrack: PlayStationPlus Edition",
  "Street Fighter V: Champion Edition + Season 5 Premium Pass Bundle (游戏)": "Street Fighter V: Champion Edition + Season 5 Premium Pass Bundle (游戏)",
  "嘘, 美女拍摄中": "嘘, 美女拍摄中",
  "Grounded PS4® & PS5®": "禁闭求生 PS4 & PS5",
  "Donut County (中日英韩文版)": "Donut County",
  "哔哔砰砰大作战": "哔哔砰砰大作战",
  "Totally Accurate Battle Simulator": "Totally Accurate Battle Simulator",
  "纪念碑谷 3": "纪念碑谷 3",
  "CATO 黄油猫": "CATO 黄油猫",
  "Euro Truck Sim Driver Simulator 24 - Garbage": "Euro Truck Sim Driver Simulator 24 - Garbage",
  "AWAY": "AWAY",
  "AWAY Digital Deluxe Version": "AWAY Digital Deluxe Version",
  "Need for Speed™ Payback": "Need for Speed Payback",
  "Need for Speed™ Payback - Deluxe Edition": "Need for Speed Payback - Deluxe Edition",
  "Mixtape": "Mixtape",
  "60 Parsecs!": "60 Parsecs!",
  "刺客信条：编年史 - 印度": "刺客信条: 编年史 - 印度",
  "Rubber Bandits: Starter Bundle": "Rubber Bandits: Starter Bundle",
  "Rubber Bandits": "Rubber Bandits",
  "Rubber Bandits: Animal Bandits Bundle": "Rubber Bandits: Animal Bandits Bundle",
  "Rubber Bandits: Supporter Bundle": "Rubber Bandits: Supporter Bundle",
  "NBA THE RUN - Deluxe Edition Bundle": "NBA THE RUN - Deluxe Edition Bundle",
  "8番のりば": "8番のりば",
  "The Exit 8 + Platform 8 Bundle PS5": "The Exit 8 + Platform 8 Bundle PS5",
  "シャンティ - 海賊の呪い -": "シャンティ - 海賊の呪い -",
  "Rainbow Skies": "Rainbow Skies",
  "Dungeon Antiqua": "Dungeon Antiqua",
  "ヴァガンテ (Vagante)": "ヴァガンテ (Vagante)",
  "Red Matter 2": "Red Matter 2",
  "Haste": "Haste",
  "Mutant Year Zero: Road to Eden": "Mutant Year Zero: Road to Eden",
  "Mutant Year Zero: Road to Eden - Deluxe Edition": "Mutant Year Zero: Road to Eden - Deluxe Edition",
  "リビッツ！ ビッグ・アドベンチャー デジタルデラックスエディション PS4 & PS5": "リビッツ! ビッグ・アドベンチャー デジタルデラックスエディション PS4 & PS5",
  "リビッツ！ビッグ・アドベンチャー - デジタルデラックスエディションアップグレード": "リビッツ!ビッグ・アドベンチャー - デジタルデラックスエディションアップグレード",
  "リビッツ！ ビッグ・アドベンチャー PS4 & PS5": "リビッツ! ビッグ・アドベンチャー PS4 & PS5",
  "Hell is Us（ヘル・イズ・アス）": "Hell is Us(ヘル・イズ・アス)",
  "Hell is Us - Deluxe Edition": "Hell is Us - Deluxe Edition",
  "RoboCop : Rogue City Collection + ヘル・イズ・アス": "RoboCop: Rogue City Collection + ヘル・イズ・アス",
  "UFC® 4 Deluxe Edition": "UFC 4 Deluxe Edition",
  "UFC® 4": "UFC 4",
  "Minecraft Legends": "Minecraft Legends",
  "Minecraft Legends Deluxe Edition": "Minecraft Legends Deluxe Edition",
  "Lawn Mowing Simulator 2": "Lawn Mowing Simulator 2",
  "カルドセプト ザ ファースト": "カルドセプト ザ ファースト",
  "仁王": "仁王",
  "仁王 Complete Edition": "仁王 Complete Edition",
  "仁王 Remastered Complete Edition": "仁王 Remastered Complete Edition",
  "The Mobius Machine": "The Mobius Machine",
  "Predator: Hunting Grounds": "Predator: Hunting Grounds",
  "Predator: Hunting Grounds デジタルデラックスエディション": "Predator: Hunting Grounds デジタルデラックスエディション",
  "Predator: Hunting Grounds - Yautja エディション": "Predator: Hunting Grounds - Yautja エディション",
  "Predator: Hunting Grounds - ジャングルエディション": "Predator: Hunting Grounds - ジャングルエディション",
  "RENNSPORT": "RENNSPORT",
  "RENNSPORT - Deluxe Edition": "RENNSPORT - Deluxe Edition",
  "シャンティ：ハーフ・ジーニーヒーローアルティメット・エディション": "シャンティ: ハーフ・ジーニーヒーローアルティメット・エディション",
  "シャンティ：ハーフ・ジーニーヒーロー アルティメット・エディション": "シャンティ: ハーフ・ジーニーヒーロー アルティメット・エディション",
  "ルルアのアトリエ ～アーランドの錬金術士４～": "ルルアのアトリエ ~アーランドの錬金術士4~",
  "AI LIMIT 無限機兵": "AI LIMIT 無限機兵",
  "AI LIMIT 無限機兵 デラックスエディション": "AI LIMIT 无限机兵",
  "キャサリン・フルボディ PS Store グラマラス・エディション": "キャサリン・フルボディ PS Store グラマラス・エディション",
  "キャサリン・フルボディ": "キャサリン・フルボディ",
  "UNO®": "UNO",
  "UNO™ Legacy Edition": "UNO Legacy Edition",
  "UNO™ Ultimate Edition": "UNO Ultimate Edition",
  "Capcom Arcade 2nd Stadium": "Capcom Arcade 2nd Stadium",
  "Capcom Arcade 2nd Stadium Bundle": "Capcom Arcade 2nd Stadium Bundle",
  "Luto": "Luto",
  "White Day 2: The Flower That Tells Lies - Complete Edition": "White Day 2: The Flower That Tells Lies - Complete Edition",
  "Wildgate - Renegade Edition": "Wildgate - Renegade Edition",
  "ワイルドゲート": "ワイルドゲート",
  "Rewrite": "Rewrite",
  "PsychoBreak": "PsychoBreak",
  "Fallout Shelter": "Fallout Shelter",
  "Shadows of Doubt": "Shadows of Doubt",
  "冬、君が静かに咲く": "冬、君が静かに咲く",
  "ドラゴンズドグマ：ダークアリズン": "ドラゴンズドグマ: ダークアリズン",
  "シェンムーⅢ": "シェンムーIII",
  "シェンムーIII - デジタルデラックスエディション": "シェンムーIII - デジタルデラックスエディション",
  "サドン ストライク 5": "サドン ストライク 5",
  "サドン ストライク 5 デラックスエディション": "サドン ストライク 5 デラックスエディション",
  "あく★パラ ～Akuma's Paradise～": "あく★パラ ~Akuma's Paradise~",
  "あく★パラ ～Akuma's Paradise～ Special Edition": "あく★パラ ~Akuma's Paradise~ Special Edition",
  "Heroes of Magic & Cards": "Heroes of Magic & Cards",
  "東方紅輝心": "東方紅輝心",
  "ファーミングシミュレーター 22 PS4 & PS5": "ファーミングシミュレーター 22 PS4 & PS5",
  "Across the Obelisk - Starter Set": "Across the Obelisk - Starter Set",
  "Across the Obelisk": "Across the Obelisk",
  "ウォーハンマー 40,000: Inquisitor - Martyr Ultimate Edition": "ウォーハンマー 40,000: Inquisitor - Martyr Ultimate Edition",
  "ウォーハンマー40,000：Inquisitor - Martyr": "ウォーハンマー40,000: Inquisitor - Martyr",
  "あくありうむ。": "あくありうむ。",
  "あくありうむ。体験版": "あくありうむ。体験版",
  "アスディバインメナス": "アスディバインメナス",
  "『インディ・ジョーンズ/大いなる円環』": "夺宝奇兵: 古老之圈",
  "インディ・ジョーンズ/大いなる円環: デジタルプレミアムエディショ": "夺宝奇兵: 古老之圈",
  "Luna Abyss": "Luna Abyss",
  "Dark Hours": "Dark Hours",
  "沼落ち禁止2: 真夏の屋台 (Love Too Easily 2: Summer Pocha)": "沼落ち禁止2: 真夏の屋台 (Love Too Easily 2: Summer Pocha)",
  "沼落ち禁止 バンドル (Love Too Easily Bundle)": "沼落ち禁止 バンドル (Love Too Easily Bundle)",
  "TRUCK SIMULATOR US DRIVER": "TRUCK SIMULATOR US DRIVER",
  "Arcade Archives 2 SPACE INVADERS PART II": "Arcade Archives 2 SPACE INVADERS PART II",
  "Arcade Archives SPACE INVADERS PART II": "Arcade Archives SPACE INVADERS PART II",
  "Darksiders Genesis (游戏)": "Darksiders Genesis (游戏)",
  "Bleach: Brave Souls Anime Game": "Bleach: Brave Souls Anime Game",
  "Shy Cats Hidden Orchestra 2": "Shy Cats Hidden Orchestra 2",
  "Welcome to Empyreum": "Welcome to Empyreum",
  "完蛋！我被美女包围了！2": "完蛋!我被美女包围了!2",
  "完蛋！我被美女包围了！2 体验版": "完蛋!我被美女包围了!2 体验版",
  "哆啦A梦 牧场物语": "哆啦A梦 牧场物语",
  "Quiz & Learn: Geography": "Quiz & Learn: Geography",
  "Blacksad: Under the Skin PS5": "Blacksad: Under the Skin PS5",
  "《埃德娜 & 哈维》捆绑包": "埃德娜 & 哈维捆绑包",
  "Edna & Harvey: The Breakout - Anniversary Edition": "Edna & Harvey: The Breakout - Anniversary Edition",
  "有这么一个家伙": "有这么一个家伙",
  "Cannibal Cuisine": "Cannibal Cuisine",
  "METAL SLUG 3 (PS4™)": "METAL SLUG 3 (PS4)",
  "METAL SLUG 3 (PS4™、PlayStation®3、PS Vita)": "METAL SLUG 3 (PS4、PlayStation3、PS Vita)",
  "Nine Parchments": "Nine Parchments",
  "影牢 ～恶梦公主～": "影牢 ~恶梦公主~",
  "影牢 ～恶梦公主～ 体验版": "影牢 ~恶梦公主~ 体验版",
  "Slime Rancher": "Slime Rancher",
  "Copy The Line": "Copy The Line",
  "The Jumping Bird": "The Jumping Bird",
  "Firefighting Simulator: Ignite": "Firefighting Simulator: Ignite",
  "Firefighting Simulator: Ignite - Year 1 Edition": "Firefighting Simulator: Ignite - Year 1 Edition",
  "Firefighting Simulator: Ignite - Vehicle Rescue Edition": "Firefighting Simulator: Ignite - Vehicle Rescue Edition",
  "Rescue & Build Bundle: Firefighting Construction": "Rescue & Build Bundle: Firefighting Construction",
  "Rescue & Protect Bundle: Firefighting Police": "Rescue & Protect Bundle: Firefighting Police",
  "Press \"X\" to win": "Press \"X\" to win",
  "Prizma Puzzle Classic": "Prizma Puzzle Classic",
  "Poppy Playtime: Chapter 2": "Poppy Playtime: Chapter 2",
  "The Evil Within 2 (中英韩文版)": "The Evil Within 2",
  "The Evil Within 2 Trial (中英韩文版)": "The Evil Within 2 Trial",
  "Eiyuden Chronicle: Rising 百英雄传：崛起": "Eiyuden Chronicle: Rising 百英雄传: 崛起",
  "铁翼少女 Wing of Darkness": "铁翼少女 Wing of Darkness",
  "Mayhem Brawler PS4 & PS5": "Mayhem Brawler PS4 & PS5",
  "IKARUGA": "IKARUGA",
  "Bus Simulator": "Bus Simulator",
  "雪落情书时": "雪落情书时",
  "极地战嚎 4 - 数字标准版 PlayStation®Hits": "极地战嚎 4 - 数字标准版 PlayStationHits",
  "极地战嚎 4 - 数位黄金版": "极地战嚎 4 - 数位黄金版",
  "Achilles: Survivor": "Achilles: Survivor",
  "Bigfoot's Journey": "Bigfoot's Journey",
  "汤姆克兰西：全境封锁 – 数字标准版 PlayStation®Hits": "汤姆克兰西: 全境封锁 – 数字标准版 PlayStationHits",
  "汤姆克兰西：全境封锁 - 体验版": "汤姆克兰西: 全境封锁 - 体验版",
  "全境封锁 - 决定版": "全境封锁 - 决定版",
  "残机为零": "残机为零",
  "残机为零 EXTEND-EDITION": "残机为零 EXTEND-EDITION",
  "残机为零 体验版": "残机为零 体验版",
  "TOEM": "TOEM",
  "8号出口": "8号出口",
  "进击的巨人２": "进击的巨人2",
  "进击的巨人２ Deluxe Edition": "进击的巨人2 Deluxe Edition",
  "进击的巨人２ -Final Battle-": "进击的巨人2 -Final Battle-",
  "进击的巨人２ (中韩文版)": "进击的巨人2",
  "进击的巨人２ Deluxe Edition (中韩文版)": "进击的巨人2 Deluxe Edition",
  "进击的巨人２ -Final Battle- (中韩文版)": "进击的巨人2 -Final Battle-",
  "人中之龙７　光與闇的去向　體驗版 (中日韩文版)": "人中之龙7 光与暗的去向 体验版",
  "人中之龙7　光与暗的去向": "人中之龙7 光与暗的去向",
  "Omega Labyrinth Z": "Omega Labyrinth Z",
  "Omega Labyrinth Z (中日韩文版)": "Omega Labyrinth Z",
  "#BLUD": "#BLUD",
  "#SinucaAttack": "#SinucaAttack",
  ".T.E.S.T: Expected Behaviour": ".T.E.S.T: Expected Behaviour",
  "0 Degrees": "0 Degrees",
  "1 CatLine PS4 & PS5": "1 CatLine PS4 & PS5",
  "10 Second Ninja X": "10 Second Ninja X",
  "10 Seconds to Win! PS4 & PS5": "10 Seconds to Win! PS4 & PS5",
  "11-11: Memories Retold": "11-11: Memories Retold",
  "112th Seed": "112th Seed",
  "十三机兵防卫圈": "十三机兵防卫圈",
  "十三机兵防卫圈　完整开局体验版 (中韩文版)": "十三机兵防卫圈 完整开局体验版",
  "十三机兵防卫圈 Premium Edition": "十三机兵防卫圈 Premium Edition",
  "18层 (游戏)": "18层 (游戏)",
  "20 Bunnies PS4 & PS5": "20 Bunnies PS4 & PS5",
  "2Dark": "2Dark",
  "2Xtreme": "2Xtreme",
  "35MM": "35MM",
  "36 Fragments of Midnight (中英韩文版)": "36 Fragments of Midnight",
  "Casual Game Bundle Vol. 1 (中英韩文版)": "Casual Game Bundle Vol. 1",
  "3D Color Labyrinth": "3D Color Labyrinth",
  "3D Don't Die Mr. Robot (Demo)": "3D Don't Die Mr. Robot (Demo)",
  "3D Don't Die Mr. Robot PS4 & PS5": "3D Don't Die Mr. Robot PS4 & PS5",
  "3D Billiards - Pool & Snooker": "3D Billiards - Pool & Snooker",
  "3D Billiards & 3D MiniGolf Bundle": "3D Billiards & 3D MiniGolf Bundle",
  "3D MiniGolf - Makeover-Edition": "3D MiniGolf - Makeover-Edition",
  "3D MiniGolf": "3D MiniGolf",
  "3°C: Sand Puzzle": "3°C: Sand Puzzle",
  "4096 Space Traders Era": "4096 Space Traders Era",
  "41 Hours PS4 & PS5": "41 Hours PS4 & PS5",
  "Are You Smarter Than A 5th Grader?": "Are You Smarter Than A 5th Grader?",
  "60 Seconds! Reatomized": "60 Seconds! Reatomized",
  "7 Shifts in Subway": "7 Shifts in Subway",
  "七度荒域：混沌之树": "七度荒域: 混沌之树",
  "7Days Heroes": "7Days Heroes",
  "8-Bit Farm": "8-Bit Farm",
  "8-Bit Hordes": "8-Bit Hordes",
  "8-Bit Invaders!": "8-Bit Invaders!",
  "890B": "890B",
  "8-Bit Armies": "8-Bit Armies",
  "8-Bit RTS Series - Complete Collection": "8-Bit RTS Series - Complete Collection",
  "8-Bit Armies - Deluxe Edition": "8-Bit Armies - Deluxe Edition",
  "8道门：雅兰的来世冒险 (8Doors: Arum&#x27;s Afterlife Adventure)": "8道门: 雅兰的来世冒险 (8Doors: Arum's Afterlife Adventure)",
  "99Vidas (中日英韩文版)": "99Vidas",
  "A Boy and His Blob Retro Collection": "A Boy and His Blob Retro Collection",
  "A Day Without Me": "A Day Without Me",
  "A HERO AND A GARDEN PS4 & PS5": "A HERO AND A GARDEN PS4 & PS5",
  "A Juggler&#x27;s Tale": "A Juggler's Tale",
  "A KING&#x27;S TALE: FINAL FANTASY XV": "A KING'S TALE: FINAL FANTASY XV",
  "原则问题": "原则问题",
  "A Memoir Blue": "A Memoir Blue",
  "怪兽远征": "怪兽远征",
  "Draknek and Friends 解谜游戏捆绑包": "Draknek and Friends 解谜游戏捆绑包",
  "A Musical Story PS4 & PS5": "A Musical Story PS4 & PS5",
  "A Night on the Farm PS4 & PS5": "A Night on the Farm PS4 & PS5",
  "完美的一天 PS4 & PS5": "完美的一天 PS4 & PS5",
  "A Pixel Story": "A Pixel Story",
  "比萨送达 A Pizza Delivery": "比萨送达 A Pizza Delivery",
  "A Plague Tale: Innocence": "A Plague Tale: Innocence",
  "A Plague Tale Bundle": "A Plague Tale Bundle",
  "A Plague Tale: Requiem": "A Plague Tale: Requiem",
  "A Quiet Place: The Road Ahead": "A Quiet Place: The Road Ahead",
  "A Space for the Unbound": "A Space for the Unbound",
  "流浪猫的故事": "流浪猫的故事",
  "ハミダシクリエイティブ": "ハミダシクリエイティブ",
  "ハミダシクリエイティブ体験版": "ハミダシクリエイティブ体験版",
  "スーパーマッシュ": "スーパーマッシュ",
  "Contraband Police": "Contraband Police",
  "勇者のくせになまいきだ：3D": "勇者のくせになまいきだ: 3D",
  "God of Weapons": "God of Weapons",
  "アセットコルサ アルティメット・エディション": "アセットコルサ アルティメット・エディション",
  "Windlands": "Windlands",
  "牧場物語 再会のミネラルタウン": "牧場物語 再会のミネラルタウン",
  "Pentiment": "Pentiment",
  "プレートアップ！": "プレートアップ!",
  "The Lord of the Rings: Gollum™(ザ・ロード・オブ・ザ・リング：ゴラム）": "The Lord of the Rings: Gollum(ザ・ロード・オブ・ザ・リング: ゴラム)",
  "The Lord of the Rings: Gollum™ - Precious Edition（ザ・ロード・オブ・ザ・リング：ゴラム プレシャスエディション）": "The Lord of the Rings: Gollum - Precious Edition(ザ・ロード・オブ・ザ・リング: ゴラム プレシャスエディション)",
  "フォルトナの魔術師 Special Edition": "フォルトナの魔術師 Special Edition",
  "フォルトナの魔術師": "フォルトナの魔術師",
  "UNDER NIGHT IN-BIRTH II Sys:Celes Deluxe Edition": "UNDER NIGHT IN-BIRTH II Sys: Celes Deluxe Edition",
  "UNDER NIGHT IN-BIRTH II Sys:Celes": "UNDER NIGHT IN-BIRTH II Sys: Celes",
  "Manny&#x27;s": "Manny's",
  "『Off The Grid』 - アーリーアクセス": "Off The Grid - アーリーアクセス",
  "レッド・デッド・リデンプション™ (PS4 & PS5)": "レッド・デッド・リデンプション (PS4 & PS5)",
  "『レッド・デッド・リデンプション™』(PS4 & PS5)と『レッド・デッド・リデンプション2』(PS4)のバンドル": "レッド・デッド・リデンプション(PS4 & PS5)とレッド・デッド・リデンプション2(PS4)のバンドル",
  "アスディバインノット Special Edition": "アスディバインノット Special Edition",
  "アスディバインノット": "アスディバインノット",
  "アーケードアーカイブス　HYPER SPORTS": "アーケードアーカイブス HYPER SPORTS",
  "アサシン クリード４　ブラック フラッグ": "アサシン クリード4 ブラック フラッグ",
  "Berry Bury Berry": "Berry Bury Berry",
  "Starship Troopers: Extermination": "Starship Troopers: Extermination",
  "Starship Troopers: Extermination - Galactic Victory Edition": "Starship Troopers: Extermination - Galactic Victory Edition",
  "英雄伝説 黎の軌跡II スーパープライス デジタルデラックス版": "英雄传说 黎之轨迹II -绯红原罪- SUPER PRICE",
  "英雄伝説 黎の軌跡II -CRIMSON SiN- ストーリー体験版": "英雄传说 黎之轨迹II -绯红原罪- SUPER PRICE",
  "英雄伝説 黎の軌跡II -CRIMSON SiN- バトル体験版": "英雄传说 黎之轨迹II -绯红原罪- SUPER PRICE",
  "英雄伝説 黎の軌跡II スーパープライス": "英雄传说 黎之轨迹II -绯红原罪- SUPER PRICE",
  "「ディアブロ II リザレクテッド」 – 「獄炎エディション」": "暗黑破坏神2重制版 - 终极包",
  "バブルボブル 4 フレンズ すかるもんすたの逆襲": "バブルボブル 4 フレンズ すかるもんすたの逆襲",
  "たけうまやろう (Stilt Fella)": "たけうまやろう (Stilt Fella)",
  "Kamikaze Strike: FPV Drone": "Kamikaze Strike: FPV Drone",
  "Enotria: The Last Song Standard Edition": "Enotria: The Last Song Standard Edition",
  "Enotria: The Last Song - Deluxe edition": "Enotria: The Last Song - Deluxe edition",
  "Moonscars": "Moonscars",
  "Creepy Shift: House For Sale": "Creepy Shift: House For Sale",
  "NARUTO TO BORUTO シノビストライカー LITE版": "NARUTO TO BORUTO シノビストライカー LITE版",
  "Bloomtown: A Different Story": "Bloomtown: A Different Story",
  "Bloomtown: A Different Story Demo": "Bloomtown: A Different Story Demo",
  "Barista life simulator 2026": "Barista life simulator 2026",
  "Sea of Stars: Sunset Edition": "Sea of Stars: Sunset Edition",
  "Sea of Stars Demo": "Sea of Stars Demo",
  "クロノスアーク": "クロノスアーク",
  "Infection Free Zone": "Infection Free Zone",
  "魔女の泉R": "魔女の泉R",
  "PixelJunk™ モンスターズ2 デジタルデラックス": "PixelJunk モンスターズ2 デジタルデラックス",
  "PixelJunk™ モンスターズ2": "PixelJunk モンスターズ2",
  "アスディバインクロス": "アスディバインクロス",
  "英雄伝説 黎の軌跡 スーパープライス": "英雄伝説 黎の軌跡 スーパープライス",
  "英雄伝説 黎の軌跡 無料版": "英雄伝説 黎の軌跡 無料版",
  "Elite Edition Bundle": "Elite Edition Bundle",
  "Professional Edition Bundle": "Professional Edition Bundle",
  "スーパーボンバーマン R 2 PS4 & PS5": "スーパーボンバーマン R 2 PS4 & PS5",
  "K-Popアイドルストーリーズ：デビューへの道": "K-Popアイドルストーリーズ: デビューへの道",
  "God bless, or Goddess": "美女,请别影响我成仙",
  "コウヤタクハイビン": "废土快递",
  "コウヤタクハイビン(Dustland Delivery) — ワイルドMAX版": "废土快递",
  "ピープル・オブ・ノート": "ピープル・オブ・ノート",
  "Harold Halibut": "Harold Halibut",
  "OUTRIDERS COMPLETE EDITION": "OUTRIDERS COMPLETE EDITION",
  "アウトライダーズ PS4 & PS5": "アウトライダーズ PS4 & PS5",
  "アウトライダーズ体験版": "アウトライダーズ体験版",
  "アーケードアーカイブス2 ジービー": "アーケードアーカイブス2 ジービー",
  "アーケードアーカイブス ジービー": "アーケードアーカイブス ジービー",
  "シャンティと7人のセイレーン": "シャンティと7人のセイレーン",
  "Voidtrain": "Voidtrain",
  "Voidtrain - Deluxe Edition": "Voidtrain - Deluxe Edition",
  "Unrailed 2: バック・オン・トラック": "Unrailed 2: バック・オン・トラック",
  "ゾンビサバイバル コロニービルダー They Are Billions": "ゾンビサバイバル コロニービルダー They Are Billions",
  "デジモンワールド ネクストオーダー インターナショナルエディション Welcome Price!!": "デジモンワールド ネクストオーダー インターナショナルエディション Welcome Price!!",
  "バリアスデイライフ": "バリアスデイライフ",
  "Knight vs Giant: アーサー王と壊れた聖剣": "Knight vs Giant: アーサー王と壊れた聖剣",
  "NOSTALGIC TRAIN": "NOSTALGIC TRAIN",
  "アサシン クリード　ローグ　リマスター": "アサシン クリード ローグ リマスター",
  "Solarpunk ソーラーパンク：天空の島": "Solarpunk ソーラーパンク: 天空の島",
  "A Summer with the Shiba Inu": "A Summer with the Shiba Inu",
  "A Winter's Daydream": "A Winter's Daydream",
  "A YEAR OF SPRINGS PS4 & PS5": "A YEAR OF SPRINGS PS4 & PS5",
  "A.I.L.A": "A.I.L.A",
  "Aaru&#x27;s Awakening": "Aaru's Awakening",
  "阿巴索尔": "阿巴索尔",
  "绝对魔权": "绝对魔权",
  "ABYSS SEEKER　在深渊的尽头你看到了什么": "ABYSS SEEKER 在深渊的尽头你看到了什么",
  "深渊之潮": "深渊之潮",
  "深渊之潮 - Brine Edition": "深渊之潮 - Brine Edition",
  "ABZU": "ABZU",
  "ACA NEOGEO 2020 SUPER BASEBALL": "ACA NEOGEO 2020 SUPER BASEBALL",
  "ACA NEOGEO 3 COUNT BOUT": "ACA NEOGEO 3 COUNT BOUT",
  "ACA NEOGEO AERO FIGHTERS 2": "ACA NEOGEO AERO FIGHTERS 2",
  "ACA NEOGEO AERO FIGHTERS 3": "ACA NEOGEO AERO FIGHTERS 3",
  "ACA NEOGEO AGGRESSORS OF DARK KOMBAT": "ACA NEOGEO AGGRESSORS OF DARK KOMBAT",
  "ACA NEOGEO ALPHA MISSION II": "ACA NEOGEO ALPHA MISSION II",
  "ACA NEOGEO ART OF FIGHTING": "ACA NEOGEO ART OF FIGHTING",
  "ACA NEOGEO ART OF FIGHTING 2": "ACA NEOGEO ART OF FIGHTING 2",
  "ACA NEOGEO ART OF FIGHTING 3": "ACA NEOGEO ART OF FIGHTING 3",
  "ACA NEOGEO BASEBALL STARS 2": "ACA NEOGEO BASEBALL STARS 2",
  "ACA NEOGEO BASEBALL STARS PROFESSIONAL": "ACA NEOGEO BASEBALL STARS PROFESSIONAL",
  "ACA NEOGEO BIG TOURNAMENT GOLF": "ACA NEOGEO BIG TOURNAMENT GOLF",
  "ACA NEOGEO BLAZING STAR": "ACA NEOGEO BLAZING STAR",
  "ACA NEOGEO BLUE&#x27;S JOURNEY": "ACA NEOGEO BLUE'S JOURNEY",
  "ACA NEOGEO BURNING FIGHT": "ACA NEOGEO BURNING FIGHT",
  "ACA NEOGEO CROSSED SWORDS": "ACA NEOGEO CROSSED SWORDS",
  "ACA NEOGEO CYBER-LIP": "ACA NEOGEO CYBER-LIP",
  "ACA NEOGEO FATAL FURY": "ACA NEOGEO FATAL FURY",
  "ACA NEOGEO FATAL FURY 2": "ACA NEOGEO FATAL FURY 2",
  "ACA NEOGEO FATAL FURY 3": "ACA NEOGEO FATAL FURY 3",
  "ACA NEOGEO FATAL FURY SPECIAL": "ACA NEOGEO FATAL FURY SPECIAL",
  "ACA NEOGEO FOOTBALL FRENZY": "ACA NEOGEO FOOTBALL FRENZY",
  "ACA NEOGEO GALAXY FIGHT: UNIVERSAL WARRIORS": "ACA NEOGEO GALAXY FIGHT: UNIVERSAL WARRIORS",
  "ACA NEOGEO GHOST PILOTS": "ACA NEOGEO GHOST PILOTS",
  "ACA NEOGEO Gururin": "ACA NEOGEO Gururin",
  "ACA NEOGEO KARNOV&#x27;S REVENGE": "ACA NEOGEO KARNOV'S REVENGE",
  "ACA NEOGEO KING OF THE MONSTERS": "ACA NEOGEO KING OF THE MONSTERS",
  "ACA NEOGEO KING OF THE MONSTERS 2": "ACA NEOGEO KING OF THE MONSTERS 2",
  "ACA NEOGEO KIZUNA ENCOUNTER": "ACA NEOGEO KIZUNA ENCOUNTER",
  "ACA NEOGEO LAST RESORT": "ACA NEOGEO LAST RESORT",
  "ACA NEOGEO LEAGUE BOWLING": "ACA NEOGEO LEAGUE BOWLING",
  "ACA NEOGEO MAGICAL DROP II": "ACA NEOGEO MAGICAL DROP II",
  "ACA NEOGEO MAGICAL DROP III": "ACA NEOGEO MAGICAL DROP III",
  "ACA NEOGEO MAGICIAN LORD": "ACA NEOGEO MAGICIAN LORD",
  "ACA NEOGEO METAL SLUG": "ACA NEOGEO METAL SLUG",
  "ACA NEOGEO METAL SLUG 2": "ACA NEOGEO METAL SLUG 2",
  "ACA NEOGEO METAL SLUG 3": "ACA NEOGEO METAL SLUG 3",
  "ACA NEOGEO METAL SLUG 4": "ACA NEOGEO METAL SLUG 4",
  "ACA NEOGEO METAL SLUG 5": "ACA NEOGEO METAL SLUG 5",
  "ACA NEOGEO METAL SLUG X": "ACA NEOGEO METAL SLUG X",
  "ACA NEOGEO Money Puzzle Exchanger": "ACA NEOGEO Money Puzzle Exchanger",
  "ACA NEOGEO MUTATION NATION": "ACA NEOGEO MUTATION NATION",
  "ACA NEOGEO NAM-1975": "ACA NEOGEO NAM-1975",
  "ACA NEOGEO NEO GEO CUP &#x27;98: THE ROAD TO THE VICTORY": "ACA NEOGEO NEO GEO CUP '98: THE ROAD TO THE VICTORY",
  "ACA NEOGEO NINJA COMBAT": "ACA NEOGEO NINJA COMBAT",
  "ACA NEOGEO NINJA COMMANDO": "ACA NEOGEO NINJA COMMANDO",
  "ACA NEOGEO NINJA MASTER&#x27;S": "ACA NEOGEO NINJA MASTER'S",
  "ACA NEOGEO OVER TOP": "ACA NEOGEO OVER TOP",
  "ACA NEOGEO PLEASURE GOAL： 5 ON 5 MINI SOCCER": "ACA NEOGEO PLEASURE GOAL: 5 ON 5 MINI SOCCER",
  "ACA NEOGEO POWER SPIKES II": "ACA NEOGEO POWER SPIKES II",
  "Mistfall Hunter": "Mistfall Hunter",
  "Mistfall Hunter-デラックス版": "Mistfall Hunter-デラックス版",
  "不思議の幻想郷 -FORESIGHT-": "不思議の幻想郷 -FORESIGHT-",
  "アーケードアーカイブス TRACK & FIELD": "アーケードアーカイブス TRACK & FIELD",
  "アケアカNEOGEO キング・オブ・ザ・モンスターズ": "アケアカNEOGEO キング・オブ・ザ・モンスターズ",
  "ABZÛ": "ABZÛ",
  "龍が如く 極２ PS4 & PS5": "人中之龙 极2 PS4 & PS5",
  "カラスのおしごと (Just Crow Things)": "カラスのおしごと (Just Crow Things)",
  "ゲーム天国 CruisinMix Special": "ゲーム天国 CruisinMix Special",
  "ゲーム天国 CruisinMix": "ゲーム天国 CruisinMix",
  "スペースコブラ：The Awakening": "スペースコブラ: The Awakening",
  "スペースコブラ：The Awakening - ゴールドエディション": "スペースコブラ: The Awakening - ゴールドエディション",
  "Five Hearts Under One Roof": "Five Hearts Under One Roof",
  "LIVE A LIVE PS4&PS5": "LIVE A LIVE PS4&PS5",
  "LIVE A LIVE: Demo Version": "LIVE A LIVE: Demo Version",
  "ラングリッサーⅠ＆Ⅱ": "ラングリッサーI&II",
  "Tormented Souls 2 (苦悶の魂２)": "Tormented Souls 2 (苦悶の魂2)",
  "『苦悶の魂２』デジタルデラックスエディション": "苦悶の魂2デジタルデラックスエディション",
  "Bpop Double Game Bundle": "Bpop Double Game Bundle",
  "21 Avatar Bpop Game Bundle": "21 Avatar Bpop Game Bundle",
  "Bpop": "Bpop",
  "ラリー・アーケード・クラシックス": "ラリー・アーケード・クラシックス",
  "Crypt Custodian（クリプトカストディアン）": "Crypt Custodian(クリプトカストディアン)",
  "Crypt Custodian": "Crypt Custodian",
  "HYKE:Northern Light(s)": "HYKE: Northern Light(s)",
  "カプコン ベルトアクション コレクション": "カプコン ベルトアクション コレクション",
  "THE KING OF FIGHTERS 2002 UNLIMITED MATCH": "THE KING OF FIGHTERS 2002 UNLIMITED MATCH",
  "閃乱カグラ Burst Re:Newal": "閃乱カグラ Burst Re: Newal",
  "閃乱カグラ Burst Re:Newal にゅうにゅう PS Store スペシャルパック": "閃乱カグラ Burst Re: Newal にゅうにゅう PS Store スペシャルパック",
  "Avatar Island": "Avatar Island",
  "クリーンアップ！ (Cleaning Up!)": "クリーンアップ! (Cleaning Up!)",
  "カラスのおしごと (Just Crow Things) + クリーンアップ！ (Cleaning Up!)": "カラスのおしごと (Just Crow Things) + クリーンアップ! (Cleaning Up!)",
  "Star Ores Inc.": "Star Ores Inc.",
  "テラリア(製品版)": "テラリア(製品版)",
  "テラリア(体験版)": "テラリア(体験版)",
  "RoboCop: Rogue City - Collection": "RoboCop: Rogue City - Collection",
  "RoboCop: Rogue City （ロボコップ: ローグ シティ） アレックス・マーフィー エディション": "RoboCop: Rogue City (ロボコップ: ローグ シティ) アレックス・マーフィー エディション",
  "RoboCop: Rogue City  (ロボコップ: ローグ シティ)": "RoboCop: Rogue City (ロボコップ: ローグ シティ)",
  "嘘つきな王様の騙し方★リマスター版 PS4 & PS5": "嘘つきな王様の騙し方★リマスター版 PS4 & PS5",
  "バイオショック2 リマスター": "生化奇兵2 重制版",
  "フロントミッション ザ・ファースト:リメイク": "フロントミッション ザ・ファースト: リメイク",
  "Outbound（アウトバウンド）": "Outbound(アウトバウンド)",
  "恐怖の世界": "恐怖的世界",
  "魔界戦記ディスガイア４ Return": "魔界戦記ディスガイア4 Return",
  "魔界戦記ディスガイア４ Return 体験版": "魔界戦記ディスガイア4 Return 体験版",
  "アウター・ワイルズ": "Outer Wilds",
  "久我山栞の死様手帖": "久我山栞の死様手帖",
  "アサシン クリード アニバーサリーエディション メガバンドル": "アサシン クリード アニバーサリーエディション メガバンドル",
  "星之卡比 探索發現 Nintendo Switch 2 Edition + 星耀世界 升級通行證": "星之卡比 探索发现 Nintendo Switch 2 Edition + 星耀世界 升级通行证",
  "ファイナルファンタジータクティクス - イヴァリース クロニクルズ Nintendo Switch 2 Edition": "最终幻想战略版 伊瓦利斯编年史 Nintendo Switch 2 版",
  "勇者鬥惡龍 創世小玩家２　破壞神席德與空蕩島": "勇者斗恶龙 创世小玩家2 破坏神席德与空荡岛",
  "《Spiritfarer®》Farewell版": "SpiritfarerFarewell版",
  "SPAM": "SPAM",
  "WRC 9 Deluxe Edition FIA World Rally Championship PS4 & PS5": "WRC 9 Deluxe Edition FIA World Rally Championship PS4 & PS5",
  "WRC 9 FIA World Rally Championship PS4 & PS5": "WRC 9 FIA World Rally Championship PS4 & PS5",
  "《极品飞车：热力追踪》重制版": "极品飞车: 热力追踪重制版",
  "波斯王子：失落的王冠": "波斯王子: 失落的王冠",
  "《波斯王子™：失落的王冠》- 完全版": "波斯王子: 失落的王冠- 完全版",
  "Shattered Frames 3: Skies Above": "Shattered Frames 3: Skies Above",
  "SAMURAI MAIDEN -武士少女- (PS4 & PS5)": "SAMURAI MAIDEN -武士少女- (PS4 & PS5)",
  "SAMURAI MAIDEN -武士少女- 豪华版 (PS4 & PS5)": "SAMURAI MAIDEN -武士少女- 豪华版 (PS4 & PS5)",
  "Super Jump Ninja PS4® & PS5®": "Super Jump Ninja PS4 & PS5",
  "Shard Squad": "Shard Squad",
  "ペルソナ３ ダンシング・ムーンナイト": "ペルソナ3 ダンシング・ムーンナイト",
  "Brave × Junction": "Brave × Junction",
  "Little Nightmares-リトルナイトメア- Complete Edition PS4 & PS5": "Little Nightmares-リトルナイトメア- Complete Edition PS4 & PS5",
  "Little Nightmares-リトルナイトメア- PS4 & PS5": "小小梦魇 强化版",
  "【体験版】LITTLE NIGHTMARES-リトルナイトメア-": "小小梦魇 强化版",
  "バットマン:アーカム VR": "バットマン: アーカム VR",
  "メルルのアトリエ ～アーランドの錬金術士３～ DX": "メルルのアトリエ ~アーランドの錬金術士3~ DX",
  "Age of Mythology: Retold Premium Edition": "Age of Mythology: Retold Premium Edition",
  "Age of Mythology: Retold Standard Edition": "Age of Mythology: Retold Standard Edition",
  "野生的大魔王出现了！~黑翼的幸存者~": "野生的大魔王出现了!~黑翼的幸存者~",
  "V Rising": "夜族崛起: 恶魔城遗产版",
  "《夜族崛起》完整版": "夜族崛起完整版",
  "《夜族崛起：恶魔城遗产》版": "夜族崛起: 恶魔城遗产版",
  "ALIENATION™ (中英韩文版)": "ALIENATION",
  "ALIENATION™": "ALIENATION",
  "Orcs Must Die! 3 PS4 & PS5": "Orcs Must Die! 3 PS4 & PS5",
  "《兽人必须死！》3》捆绑包": "兽人必须死!3捆绑包",
  "GUNDAM 创坏者4 PS4 & PS5": "GUNDAM 创坏者4 PS4 & PS5",
  "GUNDAM 创坏者4 数字终极版 PS4 & PS5": "GUNDAM 创坏者4 数字终极版 PS4 & PS5",
  "GUNDAM 创坏者4 数字豪华版 PS4 & PS5": "GUNDAM 创坏者4 数字豪华版 PS4 & PS5",
  "Aliens: Fireteam Elite - Ultimate Edition": "Aliens: Fireteam Elite - Ultimate Edition",
  "Aliens: Fireteam Elite - Into The Hive Edition": "Aliens: Fireteam Elite - Into The Hive Edition",
  "《异形：火力精英》PS4 & PS5": "异形: 火力精英PS4 & PS5",
  "Warhammer Survivors": "Warhammer Survivors",
  "苍翼默示录 神观之梦 (中日英韩文版)": "苍翼默示录 神观之梦",
  "MX vs ATV Legends": "MX vs ATV Legends",
  "MX vs ATV Legends - 2024 Deluxe Edition": "MX vs ATV Legends - 2024 Deluxe Edition",
  "MX vs ATV Legends - 2024 Ultimate Edition": "MX vs ATV Legends - 2024 Ultimate Edition",
  "MX vs ATV Legends - 2025 Monster Energy Supercross Edition": "MX vs ATV Legends - 2025 Monster Energy Supercross Edition",
  "MX vs ATV Legends - 2026 Deluxe Edition": "MX vs ATV Legends - 2026 Deluxe Edition",
  "MX vs ATV Legends - 2026 Ultimate Edition": "MX vs ATV Legends - 2026 Ultimate Edition",
  "ACA NEOGEO THE KING OF FIGHTERS &#x27;98": "ACA NEOGEO THE KING OF FIGHTERS '98",
  "Arcade Archives CONTRA": "Arcade Archives CONTRA",
  "Warhammer 40,000: Boltgun (PS4 & PS5)": "Warhammer 40,000: Boltgun (PS4 & PS5)",
  "Warhammer 40,000: Boltgun - Forges of Corruption Edition": "Warhammer 40,000: Boltgun - Forges of Corruption Edition",
  "Two Point Campus PS4 & PS5": "Two Point Campus - 脑洞大礼包",
  "《Two Point Campus》 - 脑洞大礼包": "Two Point Campus - 脑洞大礼包",
  "40 Sports Games in 1": "40 Sports Games in 1",
  "HELLDIVERS™ Dive Harder 同捆包 (中英韩文版)": "HELLDIVERS Dive Harder 同捆包",
  "Echoes of the End: Enhanced Edition": "Echoes of the End: Enhanced Edition",
  "Pretty Girls Mahjong Solitaire - Green PS4 & PS5": "Pretty Girls Mahjong Solitaire - Green PS4 & PS5",
  "Pretty Girls Mahjong Solitaire Green + Blue Bundle (PS4 & PS5)": "Pretty Girls Mahjong Solitaire Green + Blue Bundle (PS4 & PS5)",
  "Outlast 2": "Outlast 2",
  "METAL GEAR SOLID V: THE PHANTOM PAIN": "METAL GEAR SOLID V: THE PHANTOM PAIN",
  "Hidden Cat Outlaws": "Hidden Cat Outlaws",
  "Gordian Quest": "Gordian Quest",
  "Military Merge": "Military Merge",
  "Bug-o-Buster PS4® & PS5®": "Bug-o-Buster PS4 & PS5",
  "うたわれるもの斬2": "うたわれるもの斬2",
  "うたわれるもの斬2 体験版": "うたわれるもの斬2 体験版",
  "コンソールアーカイブス リップルアイランド": "コンソールアーカイブス リップルアイランド",
  "アーケードアーカイブス スチールワーカー": "アーケードアーカイブス スチールワーカー",
  "クラッシュ・バンディクー™4:　とんでもマルチバース": "クラッシュ・バンディクー4: とんでもマルチバース",
  "うたわれるもの 散りゆく者への子守唄": "うたわれるもの 散りゆく者への子守唄",
  "零 ～月蝕の仮面～ (PS4 & PS5)": "零 ~月蝕の仮面~ (PS4 & PS5)",
  "零 ～月蝕の仮面～ Digital Deluxe Edition (PS4 & PS5)": "零 ~月蝕の仮面~ Digital Deluxe Edition (PS4 & PS5)",
  "僕のヒーローアカデミア All’s Justice": "我的英雄学院 All's Justice",
  "僕のヒーローアカデミア All's Justice アルティメットエディション": "僕のヒーローアカデミア All's Justice アルティメットエディション",
  "僕のヒーローアカデミア All's Justice デラックスエディション": "我的英雄学院 All's Justice 豪华版",
  "Call of Duty®: Black Ops": "使命召唤: 黑色行动",
  "Banker Simulator": "Banker Simulator",
  "LUNAR リマスターコレクション": "LUNAR リマスターコレクション",
  "『EA SPORTS™ College Football 27」デラックスエディション": "EA SPORTS College Football 27デラックスエディション",
  "No More Room in Hell 2": "No More Room in Hell 2",
  "No More Room in Hell 2 - Deluxe Edition": "No More Room in Hell 2 - Deluxe Edition",
  "ドラゴンクエストビルダーズ　アレフガルドを復活せよ　PS4®版": "ドラゴンクエストビルダーズ アレフガルドを復活せよ PS4版",
  "Car Dealer Simulator": "Car Dealer Simulator",
  "Under the Island ニアと不思議な歯車": "Under the Island ニアと不思議な歯車",
  "Under The Island DEMO": "Under The Island DEMO",
  "零 ～濡鴉ノ巫女～ PS4 & PS5": "零 ~濡鴉ノ巫女~ PS4 & PS5",
  "零 ～濡鴉ノ巫女～ Digital Deluxe Edition PS4 & PS5": "零 ~濡鴉ノ巫女~ Digital Deluxe Edition PS4 & PS5",
  "家へ帰れ、アニー：SCPゲーム": "家へ帰れ、アニー: SCPゲーム",
  "エスケープゴート ～吾妻衛士の冤罪～": "エスケープゴート ~吾妻衛士の冤罪~",
  "Oddsparks - An Automation Adventure": "Oddsparks - An Automation Adventure",
  "Oddsparks: An Automation Adventure - Deluxe Edition": "Oddsparks: An Automation Adventure - Deluxe Edition",
  "Oddsparks: An Automation Adventure - Ultimate Edition": "Oddsparks: An Automation Adventure - Ultimate Edition",
  "Insurgency: Sandstorm [PS4 & PS5]": "Insurgency: Sandstorm [PS4 & PS5]",
  "Insurgency: Sandstorm - 1-Year Anniversary Edition [PS4 & PS5]": "Insurgency: Sandstorm - 1-Year Anniversary Edition [PS4 & PS5]",
  "Insurgency: Sandstorm - 4-Year Anniversary Edition": "Insurgency: Sandstorm - 4-Year Anniversary Edition",
  "ANIMAL WELL": "ANIMAL WELL",
  "飛空艇クエスト島": "飛空艇クエスト島",
  "biohazard HD REMASTER": "biohazard HD REMASTER",
  "アーケードアーカイブス2 サイバーサイクルズ": "アーケードアーカイブス2 サイバーサイクルズ",
  "アーケードアーカイブス サイバーサイクルズ": "アーケードアーカイブス サイバーサイクルズ",
  "プロミス・マスコット・エージェンシー": "プロミス・マスコット・エージェンシー",
  "地球再次变四方？！ 数码方块地球防卫军2 (PS4 & PS5)": "地球再次变四方?! 数码方块地球防卫军2 (PS4 & PS5)",
  "地球再次变四方？！ 数码方块地球防卫军2 豪华版 (PS4 & PS5)": "地球再次变四方?! 数码方块地球防卫军2 豪华版 (PS4 & PS5)",
  "My Little Puppy (我的小柯基)": "My Little Puppy (我的小柯基)",
  "初音未来 Project DIVA Future Tone DX": "初音未来 Project DIVA Future Tone DX",
  "风帆纪元": "风帆纪元",
  "F1®车队经理2024 PS4 & PS5": "F1车队经理2024 PS4 & PS5",
  "《F1®车队经理2024》豪华版 PS4 & PS5": "F1车队经理2024豪华版 PS4 & PS5",
  "晴天咖啡馆 - Sunny Café PS4 & PS5": "晴天咖啡馆 - Sunny Café PS4 & PS5",
  "SD GUNDAM 激斗同盟 PS4 & PS5": "SD GUNDAM 激斗同盟 PS4 & PS5",
  "SD GUNDAM 激斗同盟 体验版": "SD GUNDAM 激斗同盟 体验版",
  "SD GUNDAM 激斗同盟 数字终极版 PS4 & PS5": "SD GUNDAM 激斗同盟 数字终极版 PS4 & PS5",
  "SD GUNDAM 激斗同盟 数字豪华版 PS4 & PS5": "SD GUNDAM 激斗同盟 数字豪华版 PS4 & PS5",
  "异世界麻将少女 PS4 & PS5": "异世界麻将少女 PS4 & PS5",
  "哥谭骑士": "哥谭骑士",
  "哥谭骑士：豪华版": "哥谭骑士: 豪华版",
  "崛起力量: 添命人": "崛起力量: 添命人",
  "Batora: Lost Haven": "Batora: Lost Haven",
  "Anime Uni": "Anime Uni",
  "スピカアドベンチャー": "スピカアドベンチャー",
  "うたわれるもの斬": "うたわれるもの斬",
  "ブルーイのハッピースナップ – デラックスエディション": "Bluey's Happy Snaps: 豪华版",
  "龍が如く４　伝説を継ぐもの": "龍が如く4 伝説を継ぐもの",
  "THE KING OF FIGHTERS XV Standard Edition PS4 & PS5": "拳皇XV 标准版 PS4 & PS5",
  "THE KING OF FIGHTERS XV Deluxe Edition PS4 & PS5": "拳皇XV 豪华版 PS4 & PS5",
  "THE KING OF FIGHTERS XV 体験版": "拳皇XV 体験版",
  "うたわれるもの 偽りの仮面 AQUAPRICE2800": "うたわれるもの 偽りの仮面 AQUAPRICE2800",
  "『ゴッド・オブ・ウォー スパルタの申し子』": "ゴッド・オブ・ウォー スパルタの申し子",
  "『ゴッド・オブ・ウォー スパルタの申し子』デジタルデラックスエディション": "ゴッド・オブ・ウォー スパルタの申し子デジタルデラックスエディション",
  "METRO QUESTER": "METRO QUESTER",
  "デラックス版『レゴ®バットマン™：レガシー・オブ・ザ・ダークナイト』": "乐高蝙蝠侠: 黑暗骑士之遗",
  "レゴ®バットマン™：レガシー・オブ・ザ・ダークナイト": "乐高蝙蝠侠: 黑暗骑士之遗",
  "バスシミュレーター：ワールドツアー ( Bus Simulator : World Tour )": "バスシミュレーター: ワールドツアー ( Bus Simulator: World Tour )",
  "Bus Simulator : World Tour & EVO": "Bus Simulator: World Tour & EVO",
  "コーエーテクモ the Best 討鬼伝・極": "コーエーテクモ the Best 討鬼伝・極",
  "Nightmare Delivery": "Nightmare Delivery",
  "スペルディスク": "スペルディスク",
  "MIO: Memories in Orbit": "MIO: Memories in Orbit",
  "龍が如く６　命の詩。": "龍が如く6 命の詩。",
  "アーケードアーカイブス 超時空要塞マクロス": "アーケードアーカイブス 超時空要塞マクロス",
  "ストリートファイター30th アニバーサリーコレクション インターナショナル": "ストリートファイター30th アニバーサリーコレクション インターナショナル",
  "王国と城": "王国と城",
  "STAR OCEAN5 –Integrity and Faithlessness–": "STAR OCEAN5 –Integrity and Faithlessness–",
  "STAR OCEAN THE DIVINE FORCE": "STAR OCEAN THE DIVINE FORCE",
  "STAR OCEAN THE DIVINE FORCE DIGITAL DELUXE EDITION": "STAR OCEAN THE DIVINE FORCE DIGITAL DELUXE EDITION",
  "《STAR OCEAN THE DIVINE FORCE》體驗版": "STAR OCEAN THE DIVINE FORCE体验版",
  "《STAR OCEAN THE DIVINE FORCE》-DIGITAL DELUXE UPGRADE-": "STAR OCEAN THE DIVINE FORCE-DIGITAL DELUXE UPGRADE-",
  "Darksiders II Deathinitive Edition": "Darksiders II Deathinitive Edition",
  "ENDER LILIES: Quietus of the Knights": "ENDER LILIES: Quietus of the Knights",
  "圣女战旗 Banner of the Maid": "圣女战旗 Banner of the Maid",
  "暖雪": "暖雪",
  "KNACK 2 (中英韩文版)": "KNACK 2",
  "KNACK 2体验版 (中英韩文版)": "KNACK 2体验版",
  "Anime Uni 6 3D": "Anime Uni 6 3D",
  "Detective - The Test": "Detective - The Test",
  "Blocky Powers": "Blocky Powers",
  "《四海兄弟: 最终版》": "四海兄弟: 最终版",
  "Contraptions 3": "Contraptions 3",
  "Starsand": "Starsand",
  "足球经理26主机版": "足球经理26主机版",
  "This War of Mine: Complete Edition": "This War of Mine: Complete Edition",
  "This War of Mine: Final Cut": "This War of Mine: Final Cut",
  "Puzzle Piecer: The Sky Above": "Puzzle Piecer: The Sky Above",
  "アーケードコレクション": "アーケードコレクション",
  "アルカノイド エターナルバトル - Arkanoid Eternal Battle": "アルカノイド エターナルバトル - Arkanoid Eternal Battle",
  "SAND LAND Special Edition PS4® & PS5®": "SAND LAND Special Edition PS4 & PS5",
  "Mr Toilet": "Mr Toilet",
  "Marathonデラックスアップグレード": "失落星船: 马拉松",
  "シーッ、美少女撮影中！": "嘘, 美女拍摄中",
  "SAMURAI MAIDEN -サムライメイデン- PS4™ & PS5™": "SAMURAI MAIDEN -武士少女-",
  "SAMURAI MAIDEN DELUXE EDITION -サムライメイデン デラックスエディション- PS4™ & PS5™": "SAMURAI MAIDEN DELUXE EDITION -サムライメイデン デラックスエディション- PS4 & PS5",
  "巨影都市 Welcome Price!!": "巨影都市 Welcome Price!!",
  "Marvel&#x27;s Guardians of the Galaxy PS4 & PS5": "漫威银河护卫队PS4和PS5",
  "Top Down Rally Racing": "Top Down Rally Racing",
  "Halls of Torment - The Bog Bundle": "Halls of Torment - The Bog Bundle",
  "Halls of Torment": "苦痛殿堂",
  "inFAMOUS Second Son™ PlayStation®Hits (中英韩文版)": "inFAMOUS Second Son PlayStationHits",
  "METAL GEAR SOLID V: THE DEFINITIVE EXPERIENCE PlayStation®Hits": "METAL GEAR SOLID V: THE DEFINITIVE EXPERIENCE PlayStationHits",
  "人中之龙 极 PS4 & PS5": "人中之龙 极 PS4 & PS5",
  "人中之龙 极＆人中之龙 极２套装包  PS4＆PS5": "人中之龙 极&人中之龙 极2套装包 PS4&PS5",
  "人中之龙 桐生一马整合套装": "人中之龙 桐生一马整合套装",
  "Penguin's ArcticDex": "Penguin's ArcticDex",
  "JIGSAW CHRONICLES: Haunting Tales": "JIGSAW CHRONICLES: Haunting Tales",
  "Hit The Clock": "Hit The Clock",
  "Colorful Colore": "Colorful Colore",
  "Police Simulator: Patrol Officers": "Police Simulator: Patrol Officers",
  "astragon Bestseller Simulation Bundle": "astragon Bestseller Simulation Bundle",
  "Police Simulator: Patrol Officers: Gold Edition": "Police Simulator: Patrol Officers: Gold Edition",
  "Police Simulator: Patrol Officers: Ultimate Duty Edition": "Police Simulator: Patrol Officers: Ultimate Duty Edition",
  "Fragments of History: Ancient Egypt": "Fragments of History: Ancient Egypt",
  "Shattered Frames 2: Under the Sea": "Shattered Frames 2: Under the Sea",
  "Contraptions 2": "Contraptions 2",
  "Fate/Samurai Remnant Digital Deluxe Edition(PS4 & PS5)": "Fate/Samurai Remnant Digital Deluxe Edition(PS4 & PS5)",
  "Fate/Samurai Remnant(PS4 & PS5)": "Fate/Samurai Remnant(PS4 & PS5)",
  "Fate/Samurai Remnant DEMO": "Fate/Samurai Remnant DEMO",
  "テイルズ オブ ヴェスペリア REMASTER": "テイルズ オブ ヴェスペリア REMASTER",
  "テイルズ オブ シンフォニア リマスター + テイルズ オブ ヴェスペリア REMASTER バンドル": "テイルズ オブ シンフォニア リマスター + テイルズ オブ ヴェスペリア REMASTER バンドル",
  "Against the Storm - コンプリート・エディション": "Against the Storm - コンプリート・エディション",
  "Against the Storm アゲインスト・ザ・ストーム": "Against the Storm アゲインスト・ザ・ストーム",
  "二ノ国Ⅱ レヴァナントキングダム": "二ノ国II レヴァナントキングダム",
  "二ノ国Ⅱ レヴァナントキングダム COMPLETE EDITION": "二ノ国II レヴァナントキングダム COMPLETE EDITION",
  "BIOHAZARD 5": "BIOHAZARD 5",
  "ＮＡＲＵＴＯ－ナルト－ 疾風伝　ナルティメットストームトリロジー": "NARUTO-ナルト- 疾風伝 ナルティメットストームトリロジー",
  "聖剣伝説 Legend of Mana": "聖剣伝説 Legend of Mana",
  "不思議の国の冒険酒場": "不思議の国の冒険酒場",
  "Life Is Strange 2": "Life Is Strange 2",
  "The Awesome Adventures of Captain Spirit": "The Awesome Adventures of Captain Spirit",
  "キャッシュクリーナー・シミュレーター": "キャッシュクリーナー・シミュレーター",
  "キャッシュクリーナー・シミュレーター：コンプリートコレクション": "キャッシュクリーナー・シミュレーター: コンプリートコレクション",
  "キャッシュクリーナー・シミュレーター：The Essentials": "キャッシュクリーナー・シミュレーター: The Essentials",
  "Kayak VR: Mirage Complete Edition": "Kayak VR: Mirage Complete Edition",
  "Kayak VR: Mirage": "Kayak VR: Mirage",
  "Kayak VR: Mirage + Soča Valley": "Kayak VR: Mirage + Soča Valley",
  "Kayak VR: Mirage + Yucatán": "Kayak VR: Mirage + Yucatán",
  "堕落之主 Lords of the Fallen Deluxe Edition": "堕落之主 Lords of the Fallen Deluxe Edition",
  "堕落之主 Lords of the Fallen": "堕落之主 Lords of the Fallen",
  "黑暗献祭 (中日英韩文版)": "黑暗献祭",
  "Hidden Dogs": "Hidden Dogs",
  "电车炫客": "电车炫客",
  "电车炫客 - 数字豪华版": "电车炫客 - 数字豪华版",
  "大人物": "大人物",
  "破碎怪谈：雾雨村": "破碎怪谈: 雾雨村",
  "Prison Alone": "Prison Alone",
  "暗喻幻想：ReFantazio～序章试玩版～": "暗喻幻想: ReFantazio~序章试玩版~",
  "暗喻幻想：ReFantazio ATLUS品牌35周年数字纪念版 PS4 & PS5": "暗喻幻想: ReFantazio ATLUS品牌35周年数字纪念版 PS4 & PS5",
  "暗喻幻想：ReFantazio PS4 & PS5": "暗喻幻想: ReFantazio PS4 & PS5",
  "A Little to the Left Cupboards & Drawers DLC Bundle": "A Little to the Left Cupboards & Drawers DLC Bundle",
  "A Little to the Left PS4 & PS5": "A Little to the Left PS4 & PS5",
  "A Little to the Left Seeing Stars DLC Bundle": "A Little to the Left Seeing Stars DLC Bundle",
  "A Little to the Left: Extra Tidy Bundle": "A Little to the Left: Extra Tidy Bundle",
  "BlackJack Waifu Tour PS4 & PS5": "BlackJack Waifu Tour PS4 & PS5",
  "JIGSAW CHRONICLES: Most Wanted": "JIGSAW CHRONICLES: Most Wanted",
  "Anime Uni 3D: Hot Vacay": "Anime Uni 3D: Hot Vacay",
  "Blade of Darkness (黑暗之刃)": "Blade of Darkness (黑暗之刃)",
  "Cozy Basket": "Cozy Basket",
  "NEIGHBORS: Suburban Warfare": "NEIGHBORS: Suburban Warfare",
  "DEEMO -Reborn-": "DEEMO -Reborn-",
  "UFC™ 5": "UFC 5",
  "UFC™ 5 デラックス エディション": "UFC 5 デラックス エディション",
  "UFC™ 5 アルティメット エディション": "UFC 5 アルティメット エディション",
  "Resonance: A Plague Tale Legacy": "共鸣: 瘟疫传说传承",
  "野生のラスボスが現れた！～黒翼のサバイバー～": "野生的大魔王出现了!~黑翼的幸存者~",
  "ソニックスーパースターズ PS4 & PS5": "索尼克 超级巨星 PS4 & PS5",
  "ソニックスーパースターズ：デジタルデラックス PS4 & PS5": "索尼克 超级巨星 PS4 & PS5",
  "Bus Simulator 21 Next Stop": "Bus Simulator 21 Next Stop",
  "Bus Simulator 21 Next Stop - Gold Edition": "Bus Simulator 21 Next Stop - Gold Edition",
  "イース・メモワール -フェルガナの誓い-": "伊苏回忆录 -菲尔迦纳的誓约-",
  "STREET FIGHTER V - チャンピオンエディション": "游戏",
  "STREET FIGHTER V - チャンピオンエディション ＋ シーズン 5 プレミアムパス バンドル": "游戏",
  "放置サキュバス(アルティメットエディション)": "挂姬恶魔",
  "放置サキュバス": "挂姬恶魔",
  "放置サキュバス(デラックス版)": "挂姬恶魔",
  "《Warhammer 40,000:混沌之门 - 恶魔猎人》 PS4 & PS5": "Warhammer 40,000: 混沌之门 - 恶魔猎人 PS4 & PS5",
  "Warhammer 同捆组 - 《混沌之门》和《Realms of Ruin》": "Warhammer 同捆组 - 混沌之门和Realms of Ruin",
  "《Warhammer 40,000:混沌之门 - 恶魔猎人》净化者版 PS4 & PS5": "Warhammer 40,000: 混沌之门 - 恶魔猎人净化者版 PS4 & PS5",
  "热血三国志": "热血三国志",
  "DEATH STRANDING 数字豪华版": "DEATH STRANDING 数字豪华版",
  "《DEATH STRANDING DIRECTOR'S CUT》（数字豪华版）": "DEATH STRANDING DIRECTOR'S CUT(数字豪华版)",
  "DEATH STRANDING 数字标准版": "DEATH STRANDING 数字标准版",
  "ENDER MAGNOLIA: Bloom in the Mist": "ENDER MAGNOLIA: Bloom in the Mist",
  "GORN 2": "GORN 2",
  "无主之地年度版": "无主之地年度版",
  "Star Wars Outlaws": "Star Wars Outlaws",
  "《星球大战：亡命之徒》免费试玩版": "星球大战: 亡命之徒免费试玩版",
  "《星際大戰：亡命之徒》豪華版": "星际大战: 亡命之徒豪华版",
  "《星球大战：亡命之徒》黄金版": "星球大战: 亡命之徒黄金版",
  "《星球大战：亡命之徒》终极版": "星球大战: 亡命之徒终极版",
  "TERA": "神游之战",
  "アーケードアーカイブス ウォリアーブレード": "アーケードアーカイブス ウォリアーブレード",
  "パラソルスター": "パラソルスター",
  "デッドライジング デラックスリマスター デジタルデラックス": "デッドライジング デラックスリマスター デジタルデラックス",
  "デッドライジング デラックスリマスター": "デッドライジング デラックスリマスター",
  "デッドライジング デラックスリマスター DEMO": "デッドライジング デラックスリマスター DEMO",
  "アイドルマネージャー": "アイドルマネージャー",
  "挂姬恶魔（终极版）": "挂姬恶魔(终极版)",
  "挂姬恶魔": "挂姬恶魔",
  "挂姬恶魔（豪华版）": "挂姬恶魔(豪华版)",
  "RoboCop: Rogue City - Unfinished Business": "RoboCop: Rogue City - Unfinished Business",
  "Rims Racing - European Manufacturers Deluxe Edition": "Rims Racing - European Manufacturers Deluxe Edition",
  "RiMS Racing": "RiMS Racing",
  "Rims Racing - Japanese Manufacturers Deluxe Edition": "Rims Racing - Japanese Manufacturers Deluxe Edition",
  "Rims Racing - Ultimate Edition PS4 & PS5": "Rims Racing - Ultimate Edition PS4 & PS5",
  "MotoGP™25": "MotoGP25",
  "クロッシーロードキャッスル": "クロッシーロードキャッスル",
  "クロッシーロードキャッスルデモ": "クロッシーロードキャッスルデモ",
  "ARC Raiders - Frozen Trail Collector Set": "ARC Raiders - Frozen Trail Collector Set",
  "《雨中冒险 2》+《虚空幸存者》+《风暴探寻者》+《合金意念》+ 《万象归衡》": "雨中冒险 2+虚空幸存者+风暴探寻者+合金意念+ 万象归衡",
  "WRC Generations - Fully Loaded Edition": "WRC Generations - Fully Loaded Edition",
  "WRC Generations – The FIA WRC Official Game": "WRC Generations – The FIA WRC Official Game",
  "《勇敢的心：典藏版》": "勇敢的心: 典藏版",
  "《勇敢的心：叶落归根》": "勇敢的心: 叶落归根",
  "《荒野的召唤：垂钓者™》": "荒野的召唤: 垂钓者",
  "《荒野的召唤：垂钓者™》 - 垂钓入门包": "荒野的召唤: 垂钓者 - 垂钓入门包",
  "《荒野的召唤：垂钓者™》 - 终极垂钓包": "荒野的召唤: 垂钓者 - 终极垂钓包",
  "Broforce": "Broforce",
  "苍翼默示录 交叉组队战 特别版 (中日英韩文版)": "苍翼默示录 交叉组队战 特别版",
  "苍翼默示录 交叉组队战 基本版 (中日英韩文版)": "苍翼默示录 交叉组队战 基本版",
  "苍翼默示录 交叉组队战 体验版 (中日英韩文版)": "苍翼默示录 交叉组队战 体验版",
  "苍翼默示录 交叉组队战 早期购买者体验版 (中日英韩文版)": "苍翼默示录 交叉组队战 早期购买者体验版",
  "Flamecraft (龍焰魔法鎮)": "Flamecraft (龙焰魔法镇)",
  "Worms Rumble PS4 & PS5": "Worms Rumble PS4 & PS5",
  "Worms Rumble - Digital Deluxe Edition PS4 & PS5": "Worms Rumble - Digital Deluxe Edition PS4 & PS5",
  "ライダーズ リパブリック PS4 & PS5": "极限国度高级版",
  "ライダーズ リパブリック デラックスエディション": "极限国度高级版",
  "ライダーズ リパブリック プレミアムエディション": "极限国度高级版",
  "Hello Neighbor 2 Deluxe Edition": "Hello Neighbor 2 Deluxe Edition",
  "Hello Neighbor 2": "Hello Neighbor 2",
  "呪術廻戦 戦華双乱  PS4® & PS5®": "呪術廻戦 戦華双乱 PS4 & PS5",
  "呪術廻戦 戦華双乱 Ultimate Edition PS4® & PS5®": "呪術廻戦 戦華双乱 Ultimate Edition PS4 & PS5",
  "呪術廻戦 戦華双乱 体験版": "呪術廻戦 戦華双乱 体験版",
  "呪術廻戦 戦華双乱 Deluxe Edition PS4® & PS5®": "呪術廻戦 戦華双乱 Deluxe Edition PS4 & PS5",
  "破晓传奇 PS4™ & PS5®": "破晓传奇 PS4 & PS5",
  "少女与战车 战车梦幻大会战 (中韩文版)": "少女与战车 战车梦幻大会战",
  "OUTRIDERS PS4 & PS5": "OUTRIDERS PS4 & PS5",
  "《Outriders》试玩版": "Outriders试玩版",
  "Devil May Cry 5 + Vergil": "Devil May Cry 5 + Vergil",
  "Devil May Cry 5 Deluxe + Vergil": "Devil May Cry 5 Deluxe + Vergil",
  "Devil May Cry 5 体验版 (中日英韩文版)": "Devil May Cry 5 体验版",
  "ARK: Ultimate Survivor Edition": "ARK: Ultimate Survivor Edition",
  "Dispatch": "Dispatch",
  "《超英派遣中心》数字豪华版": "超英派遣中心数字豪华版",
  "Greak: Memories of Azur": "Greak: Memories of Azur",
  "完蛋！我被美女包围了！": "完蛋!我被美女包围了!",
  "完蛋！我被美女包围了！体验版": "完蛋!我被美女包围了!体验版",
  "Classified: France '44 - Overlord Edition": "Classified: France '44 - Overlord Edition",
  "Classified: France '44": "Classified: France '44",
  "Classified: France '44 - Deluxe Edition": "Classified: France '44 - Deluxe Edition",
  "Hello Neighbor: Search and Rescue": "Hello Neighbor: Search and Rescue",
  "Othercide": "Othercide",
  "The Bus": "The Bus",
  "For The King Franchise Bundle": "For The King Franchise Bundle",
  "For The King II": "为了吾王II: 奥姆斯时代版",
  "为了吾王II: 奥姆斯时代版": "为了吾王II: 奥姆斯时代版",
  "Biped 2": "Biped 2",
  "Way of the Hunter - Ultimate Edition": "Way of the Hunter - Ultimate Edition",
  "Way of the Hunter": "Way of the Hunter",
  "Way of the Hunter: Elite Edition": "Way of the Hunter: Elite Edition",
  "Viewfinder": "Viewfinder",
  "Viewfinder Demo": "Viewfinder Demo",
  "Rogue Legacy 2": "Rogue Legacy 2",
  "Ultra Street Fighter IV (日英韩文版)": "Ultra Street Fighter IV",
  "THE LAST REMNANT Remastered": "THE LAST REMNANT Remastered",
  "ファイヤープロレスリングワールド デジタルデラックスエディション": "ファイヤープロレスリングワールド デジタルデラックスエディション",
  "ファイヤープロレスリングワールド": "ファイヤープロレスリングワールド",
  "義賊探偵ノスリ": "義賊探偵ノスリ",
  "超探偵事件簿 レインコード プラス": "超探偵事件簿 レインコード プラス",
  "超探偵事件簿 レインコード プラス　デジタルデラックスエディション": "超探偵事件簿 レインコード プラス デジタルデラックスエディション",
  "ガールズ＆パンツァー ドリームタンクマッチ": "少女与战车 战车梦幻大会战",
  "トレイルメーカーズ": "トレイルメーカーズ",
  "Trailmakers Ultimate Edition": "Trailmakers Ultimate Edition",
  "奇々怪界 黒マントの謎": "奇々怪界 黒マントの謎",
  "Football Manager 26 Console": "足球经理26主机版",
  "レッツプレイ！オインクゲームズ - コンプリートエディション": "レッツプレイ!オインクゲームズ - コンプリートエディション",
  "レッツプレイ！オインクゲームズ - スタンダードエディション": "レッツプレイ!オインクゲームズ - スタンダードエディション",
  "ICARUS: Console Edition": "ICARUS: Console Edition",
  "ICARUS: Ultimate Console Edition": "ICARUS: Ultimate Console Edition",
  "The Planet Crafter": "The Planet Crafter",
  "The Planet Crafter Deluxe Bundle": "The Planet Crafter Deluxe Bundle",
  "EA SPORTS FC™ 26 Standard Edition PS4 & PS5": "EA SPORTS FC 26标准版(PS4 和 PS5 版)",
  "Backrooms: Escape Together": "Backrooms: Escape Together",
  "《EA SPORTS™ College Football 27》豪华版": "EA SPORTS College Football 27豪华版",
  "恸哭幽光／CRYMELIGHT 豪华版 (中日英韩文版)": "恸哭幽光/CRYMELIGHT 豪华版",
  "恸哭幽光／CRYMELIGHT": "恸哭幽光/CRYMELIGHT",
  "从前从前有个块魂 皇家乐音版": "从前从前有个块魂 皇家乐音版",
  "从前从前有个块魂": "从前从前有个块魂",
  "从前从前有个块魂 Rolling LIVE Highlights版": "从前从前有个块魂 Rolling LIVE Highlights版",
  "Pacific Drive: Ritual Edition": "Pacific Drive: Ritual Edition",
  "燧石枪 × 超自然车旅 (Flintlock × Pacific Drive Bundle)": "燧石枪 × 超自然车旅 (Flintlock × Pacific Drive Bundle)",
  "超自然车旅 Pacific Drive": "超自然车旅 Pacific Drive",
  "Pacific Drive: Whispers Edition": "Pacific Drive: Whispers Edition",
  "艾恩葛朗特 回荡新声": "艾恩葛朗特 回荡新声",
  "艾恩葛朗特 回荡新声 数字豪华版": "艾恩葛朗特 回荡新声 数字豪华版",
  "艾恩葛朗特 回荡新声 体验版": "艾恩葛朗特 回荡新声 体验版",
  "艾恩葛朗特 回荡新声 数字终极版": "艾恩葛朗特 回荡新声 数字终极版",
  "KAGE～Shadow of The Ninja 绝影战士 PS4 & PS5": "KAGE~Shadow of The Ninja 绝影战士 PS4 & PS5",
  "KAGE～Shadow of The Ninja 绝影战士　Deluxe Pack PS4 & PS5": "KAGE~Shadow of The Ninja 绝影战士 Deluxe Pack PS4 & PS5",
  "KAGE～Shadow of The Ninja 绝影战士　DEMO": "KAGE~Shadow of The Ninja 绝影战士 DEMO",
  "RetroSpace": "RetroSpace",
  "Monster Hunter Stories 3: 命运双龙 高级豪华版": "Monster Hunter Stories 3: 命运双龙 高级豪华版",
  "Monster Hunter Stories 3: 命运双龙": "Monster Hunter Stories 3: 命运双龙",
  "Monster Hunter Stories 3: 命运双龙 体验版": "Monster Hunter Stories 3: 命运双龙 体验版",
  "Monster Hunter Stories 3: 命运双龙 豪华版": "Monster Hunter Stories 3: 命运双龙 豪华版",
  "Maneater Apex Edition": "Maneater Apex Edition",
  "Maneater PS4 & PS5": "Maneater PS4 & PS5",
  "コーエーテクモ the Best 戦国無双４": "コーエーテクモ the Best 戦国無双4",
  "戦国無双４ DX": "戦国無双4 DX",
  "ＳＤガンダム　ジージェネレーション　ジェネシス Welcome Price!!(PS4®版)": "游戏",
  "SDガンダム ジージェネレーション ジェネシス デラックスエディション": "游戏",
  "初音ミク -Project DIVA- X HD": "初音ミク -Project DIVA- X HD",
  "ダウンタウンスペシャル くにおくんの三国志だよ満員御礼！！": "ダウンタウンスペシャル くにおくんの三国志だよ満員御礼!!",
  "The Plucky Squire (勇敢小骑士)": "The Plucky Squire (勇敢小骑士)",
  "The Plucky Squire x The Swords of Ditto: Mormo's Curse Bundle": "The Plucky Squire x The Swords of Ditto: Mormo's Curse Bundle",
  "Bravery and Greed": "Bravery and Greed",
  "舞力全开 2026 - 终极版": "舞力全开 2026 - 终极版",
  "《舞力全开》2025 版": "舞力全开2025 版",
  "舞力全开2026": "舞力全开2026",
  "舞力全开 2026 版 - 豪华版": "舞力全开 2026 版 - 豪华版",
  "《舞力全开》免费试玩": "舞力全开免费试玩",
  "Vampire Crawlers: The Turbo Wildcard from Vampire Survivors": "Vampire Crawlers: The Turbo Wildcard from Vampire Survivors",
  "Scorn": "Scorn",
  "DAVE THE DIVER": "潜水员戴夫 DAVE THE DIVER",
  "《失落星船：马拉松》豪华版升级 (中日英韩文版)": "失落星船: 马拉松豪华版升级",
  "喋血复仇：终极版 PS4 & PS5": "喋血复仇: 终极版 PS4 & PS5",
  "喋血复仇：标准版 PS4 & PS5": "喋血复仇: 标准版 PS4 & PS5",
  "喋血复仇：豪华版 PS4 & PS5": "喋血复仇: 豪华版 PS4 & PS5",
  "真・三國無双８　無料共闘＆体験版": "真・三國無双8 無料共闘&体験版",
  "CUSTOM MECH WARS -カスタムメックウォーズ アルティメットエディション-": "CUSTOM MECH WARS -カスタムメックウォーズ アルティメットエディション-",
  "CUSTOM MECH WARS -カスタムメックウォーズ-": "CUSTOM MECH WARS -カスタムメックウォーズ-",
  "CUSTOM MECH WARS -カスタムメックウォーズ 地球防衛軍コラボエディション-": "CUSTOM MECH WARS -カスタムメックウォーズ 地球防衛軍コラボエディション-",
  "マフィア：オリジン ～裏切りの祖国": "四海兄弟: 故乡",
  "マフィア：沈黙の掟コレクション": "四海兄弟: 故乡",
  "『マフィア：オリジン ～裏切りの祖国 コンプリート・エディション』": "四海兄弟: 故乡",
  "Foundation: Harvest Festival": "基石: 丰收节 Foundation: Harvest Festival",
  "DEVOUR": "DEVOUR",
  "师姐别急，我抽卡就变强": "师姐别急,我抽卡就变强",
  "Indiana Jones and the Great Circle": "夺宝奇兵: 古老之圈",
  "Liar's Bar": "Liar's Bar",
  "Hollow Knight": "Hollow Knight",
  "暗黑地牢2 Darkest Dungeon II": "暗黑地牢2 Darkest Dungeon II",
  "ATRI -My Dear Moments-": "ATRI -My Dear Moments-",
  "Draw &amp; Guess - 你画我猜": "Draw & Guess - 你画我猜",
  "STAR WARS Zero Company™": "星球大战 零号连队",
  "大钻头矿业无限公司": "大钻头矿业无限公司",
  "Alan Wake": "Alan Wake",
  "方块方舟（PixARK）": "方块方舟(PixARK)",
  "《使命召唤®：现代战争® II 2022》": "使命召唤: 现代战争 II 2022",
  "FINAL FANTASY XIV Online": "FINAL FANTASY XIV Online",
  "聖剣伝説3 TRIALS of MANA": "聖剣伝説3 TRIALS of MANA",
  "聖剣伝説3 TRIALS of MANA 体験版": "聖剣伝説3 TRIALS of MANA 体験版",
  "仁王２ PS5升级专用": "仁王2 PS5升级专用",
  "索尼克 超级巨星：数字豪华版 PS4 & PS5": "索尼克 超级巨星: 数字豪华版 PS4 & PS5",
  "索尼克 超级巨星 PS4 & PS5": "索尼克 超级巨星 PS4 & PS5",
  "A列車で行こうExp.": "A列車で行こうExp.",
  "Pokémon Sword": "宝可梦 剑",
  "アルセウス": "宝可梦传说 阿尔宙斯",
  "Pokemon LEGENDS アルセウス": "宝可梦传说 阿尔宙斯",
  "Pokémon Legends: Arceus": "宝可梦传说 阿尔宙斯",
  "ペルソナ3 ポータブル": "女神异闻录3 携带版",
  "Persona 3 Portable": "女神异闻录3 携带版",
  "Wizardry外伝 五つの試練 トリプルパック": "巫术外传 五重试炼 三合一套装",
  "Wizardry: The Five Ordeals Triple Pack": "巫术外传 五重试炼 三合一套装",
  "ペルソナ4 ザ・ゴールデン": "女神异闻录4 黄金版",
  "Persona 4 Golden": "女神异闻录4 黄金版",
  "ダービースタリオン2": "德贝赛马2",
  "1-2-Switch": "1-2-Switch",
  "1-2-Switch（ワンツースイッチ）": "1-2-Switch",
  "1-2-Switch (ワンツースイッチ)": "1-2-Switch",
  "ゼルダの伝説 知恵のかりもの": "塞尔达传说 智慧的再现",
  "The Legend of Zelda: Echoes of Wisdom": "塞尔达传说 智慧的再现",
  "薩爾達傳說 智慧的再現": "塞尔达传说 智慧的再现",
  "塞尔达传说 智慧的再现": "塞尔达传说 智慧的再现"
}, {
  normalize(title) {
    return title.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
      .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
      .replace(/&amp;/g, '&').replace(/&apos;/g, "'").replace(/&quot;/g, '"')
      .replace(/[™®]/g, '').normalize('NFKC').replace(/[’‘]/g, "'")
      .replace(/\s*:\s*/g, ': ').replace(/\s+/g, ' ').trim();
  },
  set(titles, title, value) {
    titles[title] = value;
    this.index = null;
    this.resolved = null;
    return true;
  },
  get(titles, title) {
    if (typeof title !== 'string') return titles[title];
    if (titles[title]) return titles[title];
    this.resolved ||= new Map();
    if(this.resolved.has(title))return this.resolved.get(title);
    if (!this.index) {
      this.index = new Map(Object.entries(titles).map(([name, cn]) => [this.normalize(name).toLowerCase(), cn]));
    }
    const normalized = this.normalize(title).toLowerCase();
    if (this.index.has(normalized)){const value=this.index.get(normalized);this.resolved.set(title,value);return value;}
    const suffixMatch=this.normalize(title).match(/\s+(Nintendo Switch 2 Edition|Digital Deluxe Edition|Deluxe Edition|デジタルデラックスエディション|デジタルデラックス版|デラックスエディション|マスターズ版|PS4 & PS5)$/i);
    if(suffixMatch){
      const rawSuffix=suffixMatch[1],cn=this.index.get(normalized.slice(0,suffixMatch.index));
      const suffix = rawSuffix.replace(/Nintendo Switch 2 Edition/gi, 'Switch 2版')
        .replace(/デジタルデラックスエディション|Digital Deluxe Edition/gi, '数字豪华版')
        .replace(/デジタルデラックス版|デラックスエディション|Deluxe Edition/gi, '豪华版')
        .replace(/マスターズ版/g, '大师版');
      if (cn&&!/[ぁ-ヿ]/.test(suffix)){const value=cn+' '+suffix;this.resolved.set(title,value);return value;}
    }
    if(this.resolved.size>5000)this.resolved.clear();
    this.resolved.set(title,undefined);
    return undefined;
  }
});

const steamProductTitleMap = {
  "steam:578080": "绝地求生",
  "steam:1172470": "Apex英雄",
  "steam:4080220": "EA SPORTS FC 27",
  "steam:730": "反恐精英2",
  "steam:2507950": "三角洲行动",
  "steam:1973530": "边狱公司",
  "steam:4115450": "影之刃零",
  "steam:2288340": "空战奇兵8 希孚之翼 (ACE COMBAT 8: WINGS OF THEVE)",
  "steam:1057090": "奥日与精灵意志",
  "steam:4001890": "渔力全开",
  "steam:1180320": "三国杀",
  "steam:4356430": "NBA 2K27",
  "steam:3841510": "真・三国无双2 with 猛将传 Remastered",
  "steam:1912410": "Minecraft Dungeons II",
  "steam:1771300": "天国: 拯救2",
  "steam:230410": "Warframe 星际战甲",
  "steam:431960": "Wallpaper Engine: 壁纸引擎",
  "steam:4259190": "王国保卫战 6: 新启程",
  "steam:447040": "看门狗2",
  "steam:3493540": "Transport Fever 3",
  "steam:1158310": "十字军之王III",
  "steam:544810": "KARDS - 二战卡牌游戏",
  "steam:1867240": "WARDOGS",
  "steam:2161700": "女神异闻录3 Reload",
  "steam:2290180": "极限国度",
  "steam:1687950": "女神异闻录5皇家版",
  "steam:570": "Dota 2",
  "steam:1888930": "最后生还者 第一部",
  "steam:374320": "黑暗之魂III",
  "steam:270880": "美国卡车模拟",
  "steam:728880": "胡闹厨房2",
  "steam:2531310": "最后生还者 第二部 重制版",
  "steam:4435490": "使命召唤: 现代战争 4",
  "steam:4019220": "针影裁梦",
  "steam:292030": "巫师3: 狂猎 — 重制版",
  "steam:1478500": "Big Walk",
  "steam:3527290": "PEAK",
  "steam:1142710": "全面战争: 战锤3",
  "steam:1329410": "雀魂麻将",
  "steam:2638890": "鬼武者 Way of the Sword",
  "steam:2483190": "极限竞速: 地平线 6",
  "steam:1203220": "永劫无间",
  "steam:2868840": "杀戮尖塔2",
  "steam:1145360": "Hades",
  "steam:2369390": "孤岛惊魂6",
  "steam:227300": "欧洲卡车模拟2",
  "steam:3892270": "朋友,梭哈吧",
  "steam:3010850": "战争机器：E-Day",
  "steam:3722330": "午夜轮班",
  "steam:3669870": "控制: 共振",
  "steam:1462040": "FINAL FANTASY VII REMAKE INTERGRADE",
  "steam:1145350": "哈迪斯 II",
  "steam:3932890": "逃离塔科夫",
  "steam:1364780": "街头霸王6",
  "steam:2849080": "王国保卫战 5: 联盟",
  "steam:281990": "群星",
  "steam:4209920": "不问凡尘",
  "steam:4656000": "BOMBANANA!",
  "steam:2344520": "暗黑破坏神 IV",
  "steam:2139460": "七日世界",
  "steam:816340": "王国保卫战：起源",
  "steam:2273430": "苍翼: 混沌效应",
  "steam:413150": "Stardew Valley",
  "steam:1486920": "风暴崛起 Tempest Rising",
  "steam:3159330": "刺客信条: 影",
  "steam:2627260": "NINJA GAIDEN 4",
  "steam:3240220": "Grand Theft Auto V 增强版",
  "steam:774171": "喵斯快跑",
  "steam:2358720": "黑神话: 悟空",
  "steam:812140": "刺客信条：奥德赛",
  "steam:381210": "黎明杀机",
  "steam:3793200": "American Truck Simulator - Road Trip: Ford",
  "steam:4623570": "桌面破坏神: 挂机ARPG",
  "steam:1245620": "艾尔登法环",
  "steam:1943950": "逃离后室",
  "steam:570940": "DARK SOULS: REMASTERED",
  "steam:412020": "地铁: 离乡",
  "steam:393380": "Squad",
  "steam:246420": "王国保卫战",
  "steam:2593750": "Muse Dash - Muse Plus",
  "steam:2186680": "Warhammer 40,000: 行商浪人",
  "steam:2909400": "FINAL FANTASY VII REBIRTH",
  "steam:553640": "ICEY",
  "steam:236390": "战争雷霆",
  "steam:458710": "王国保卫战：前线",
  "steam:4128580": "竞拍之王",
  "steam:1086940": "博德之门3",
  "steam:4108000": "机械狂欢",
  "steam:2001120": "双影奇境",
  "steam:766570": "俄罗斯钓鱼4",
  "steam:552990": "World of Warships",
  "steam:359550": "彩虹六号: 围攻",
  "steam:892970": "Valheim: 英灵神殿",
  "steam:1449850": "游戏王 大师决斗",
  "steam:1367550": "王国保卫战：复仇",
  "steam:1466860": "帝国时代IV 周年纪念版",
  "steam:4225980": "空之轨迹 the 2nd",
  "steam:1488490": "尼瓦利斯之夜 Nivalis Nights",
  "steam:648800": "木筏求生",
  "steam:2445690": "失落城堡2",
  "steam:4164790": "生存日志",
  "steam:322330": "饥荒联机版",
  "steam:3438810": "美少女梦工厂: 预言之子",
  "steam:335300": "DARK SOULS II: Scholar of the First Sin",
  "steam:949230": "Cities: Skylines II 都市: 天际线2",
  "steam:3321460": "红色沙漠: 增强版",
  "steam:4232900": "Crusader Kings III: By God Alone",
  "steam:582160": "刺客信条: 起源",
  "steam:105600": "泰拉瑞亚",
  "steam:2406770": "Bodycam",
  "steam:704850": "Thief Simulator",
  "steam:2399830": "方舟: 生存飞升",
  "steam:553850": "HELLDIVERS 绝地潜兵2",
  "steam:3751950": "刺客信条: 黑旗 记忆重置",
  "steam:5019920": "动物厨房 Tasty Chef",
  "steam:3241660": "R.E.P.O.",
  "steam:1971650": "歧路旅人 II",
  "steam:594650": "猎杀: 对决 1896",
  "steam:872410": "三国志14",
  "steam:2246340": "怪物猎人 荒野",
  "steam:3319700": "新世界: 暗影成双",
  "steam:294100": "边缘世界 RimWorld",
  "steam:2567870": "Chained Together",
  "steam:1677280": "Company of Heroes 3",
  "steam:4126040": "伊莫",
  "steam:3028330": "战地风云 禁区冲突",
  "steam:838350": "太吾绘卷: 天幕心帷",
  "steam:3609080": "StarSavior",
  "steam:880940": "Pummel Party",
  "steam:1091500": "赛博朋克 2077",
  "steam:813780": "帝国时代II：决定版",
  "steam:1260320": "猛兽派对",
  "steam:3855540": "BLACK SOULS II",
  "steam:1289670": "EA Play",
  "steam:1361210": "战锤40K: 暗潮",
  "steam:379430": "天国：拯救",
  "steam:3755860": "BLACK SOULS",
  "steam:1623730": "幻兽帕鲁",
  "steam:1041320": "王国纪元 (Lords Mobile)",
  "steam:4231820": "恶魔城：贝尔蒙特的诅咒",
  "steam:4336170": "Age of Empires IV: Raiders of the North",
  "steam:4466620": "SiNiSistar 2",
  "steam:460920": "极限巅峰",
  "steam:1706510": "Songs of Glimmerwick",
  "steam:1547000": "Grand Theft Auto: San Andreas – The Definitive Edition",
  "steam:2807960": "战地风云 6",
  "steam:3595270": "使命召唤: 现代战争 III 2023",
  "steam:3101040": "魔法少女的魔女审判",
  "steam:243470": "Watch_Dogs",
  "steam:2221490": "全境封锁2",
  "steam:2073620": "暗区突围: 无限",
  "steam:346110": "方舟：生存进化",
  "steam:1049590": "永恒轮回",
  "steam:368500": "刺客信条: 枭雄",
  "steam:5212940": "Bunker Tidy Up",
  "steam:2679460": "暗喻幻想: ReFantazio",
  "steam:261550": "骑马与砍杀2：霸主",
  "steam:5053820": "Mimic Party",
  "steam:2054970": "龙之信条2",
  "steam:550": "求生之路2",
  "steam:1332720": "Thief Simulator 2",
  "steam:1549250": "恶月十三",
  "steam:958260": "DEAD OR ALIVE Xtreme Venus Vacation",
  "steam:2622000": "吉星派对",
  "steam:1426210": "双人成行",
  "steam:4358690": "守墓人2",
  "steam:3971950": "In Falsus",
  "steam:2183900": "Warhammer 40,000: 星际战士2",
  "steam:4704690": "MECCHA CHAMELEON",
  "steam:916440": "纪元1800",
  "steam:2239150": "Thronefall",
  "steam:2208920": "刺客信条: 英灵殿",
  "steam:2958130": "侏罗纪世界: 进化 3",
  "steam:3917700": "骰之侵略者",
  "steam:1969870": "生死狙击2",
  "steam:1962663": "使命召唤: 战争地带",
  "steam:306130": "上古卷轴OL",
  "steam:108600": "僵尸毁灭工程",
  "steam:1144200": "严阵以待",
  "steam:1222670": "模拟人生4",
  "steam:2543830": "猎人之路2",
  "steam:3020510": "英雄立志传: 三国志",
  "steam:921570": "歧路旅人",
  "steam:2074920": "第一后裔",
  "steam:4517460": "最佳球会Online",
  "steam:1962700": "Subnautica 2: 异星水域",
  "steam:2767030": "漫威争锋",
  "steam:3561220": "风暴怕死队",
  "steam:2900640": "TOEM 2 摄影冒险2",
  "steam:3804370": "黎明门前的吹笛人",
  "steam:1372110": "JOJO的奇妙冒险 群星之战 重制版",
  "steam:1551360": "极限竞速: 地平线 5",
  "steam:1407200": "World of Tanks",
  "steam:4975570": "Scroll Of Taiwu - 元鸡化影",
  "steam:3219030": "动物园之星 2",
  "steam:2475460": "SOS OPS!",
  "steam:2315040": "火炬之光: 无限",
  "steam:1113000": "女神异闻录4 黄金版",
  "steam:3907790": "氧气列车",
  "steam:637650": "FINAL FANTASY XV WINDOWS EDITION",
  "steam:440": "军团要塞2",
  "steam:2552430": "王国之心 -HD 1.5+2.5 ReMIX-",
  "steam:438100": "VRChat",
  "steam:2887580": "活性物质",
  "steam:1085660": "命运2",
  "steam:1172710": "Dune: Awakening 沙丘: 觉醒",
  "steam:1374490": "RuneScape: Dragonwilds 符文世界: 龙之荒野",
  "steam:266410": "iRacing",
  "steam:1151340": "辐射76",
  "steam:252490": "Rust",
  "steam:2707930": "Palia",
  "steam:2138720": "开球! REMATCH",
  "steam:3751260": "The Blood of Dawnwalker 黎明行者之血",
  "steam:4282500": "hololive Dreams",
  "steam:526870": "幸福工厂",
  "steam:2357570": "守望先锋",
  "steam:2436940": "赛菲莉娅",
  "steam:669330": "钢铁指挥官",
  "steam:2537590": "微软飞行模拟2024",
  "steam:1367080": "机动战士高达 激战任务2",
  "steam:3764200": "Resident Evil Requiem",
  "steam:2384580": "真・三国无双 起源",
  "steam:1295660": "席德·梅尔的文明VII",
  "steam:1174180": "Red Dead Redemption 2",
  "steam:3489700": "剑星",
  "steam:4773970": "龙王传奇",
  "steam:1285190": "无主之地4",
  "steam:899770": "最后纪元",
  "steam:1643320": "潜行者2: 切尔诺贝利之心",
  "steam:3634190": "MXGP 26 - The Official Game",
  "steam:1672970": "我的世界：地下城",
  "steam:2379740": "Wizardry Variants Daphne",
  "steam:4997640": "Warhammer 40,000: Space Marine 2 - Space Wolves Champion Pack",
  "steam:3259780": "最终幻想：共鸣",
  "steam:4354570": "最终幻想VII：启示",
  "steam:1551980": "Clive Barker's Hellraiser: Revival",
  "steam:2661300": "禁闭求生2",
  "steam:4148240": "女王的游戏: 盛世天下 女帝篇",
  "steam:1876890": "逸剑风云决",
  "steam:4260510": "王国保卫战 5: 巨龙战争",
  "steam:2052410": "魔法使之夜",
  "steam:2323150": "Underground roof fall hazard assessment VR Training",
  "steam:3174070": "德州扑克 - Pokerist",
  "steam:4917440": "MOGGED: Looksmaxx or Die",
  "steam:835570": "战意",
  "steam:1307580": "TOEM: A Photo Adventure",
  "steam:5009590": "Last Epoch - 暴怒传奇赞助包 (Enraged Legend Supporter Pack)",
  "steam:3709430": "魔女: 终末旅途",
  "steam:1875830": "真·女神转生V Vengeance",
  "steam:1669000": "奇迹时代4",
  "steam:289650": "刺客信条: 大革命",
  "steam:524220": "NieR: Automata",
  "steam:1449110": "The Outer Worlds 2",
  "steam:4078430": "星球大战: 银河赛车手",
  "steam:2067820": "复古时空",
  "steam:2138330": "赛博朋克 2077: 往日之影",
  "steam:1067360": "暗星铁律",
  "steam:1304930": "逃生：试炼",
  "steam:814380": "Sekiro: Shadows Die Twice - GOTY Edition",
  "steam:2651280": "漫威蜘蛛侠2",
  "steam:1326470": "森林之子",
  "steam:1817070": "漫威蜘蛛侠 重制版",
  "steam:489830": "上古卷轴V：天际 特别版",
  "steam:1868140": "潜水员戴夫 DAVE THE DIVER",
  "steam:990080": "霍格沃茨之遗",
  "steam:2050650": "生化危机4",
  "steam:1446780": "MONSTER HUNTER RISE",
  "steam:268910": "茶杯头",
  "steam:2215430": "Ghost of Tsushima导演剪辑版",
  "steam:457140": "缺氧",
  "steam:250900": "以撒的结合：重生",
  "steam:242760": "森林",
  "steam:518790": "猎人: 荒野的召唤",
  "steam:4090980": "Escape from Tarkov - The Unheard Steam Edition Expansion Pack",
  "steam:255710": "都市：天际线",
  "steam:1256670": "废墟图书馆",
  "steam:264710": "Subnautica - 深海迷航",
  "steam:568220": "脑叶公司",
  "steam:588650": "死亡细胞",
  "steam:477160": "人类：一败涂地",
  "steam:275850": "No Man's Sky 无人深空",
  "steam:3280350": "死亡搁浅2",
  "steam:701160": "王国: 两位君主",
  "steam:3768760": "007 初露锋芒",
  "steam:1222140": "底特律: 化身为人",
  "steam:251570": "七日杀",
  "steam:289070": "席德·梅尔的文明VI",
  "steam:223750": "DCS World Steam Edition",
  "steam:1237970": "泰坦陨落2",
  "steam:1238810": "战地风云 5",
  "steam:3059520": "F1 25",
  "steam:1659420": "UNCHARTED: 盗贼传奇合辑",
  "steam:582010": "怪物猎人：世界",
  "steam:1593500": "战神",
  "steam:1659040": "杀手：暗杀世界",
  "steam:2322010": "战神：诸神黄昏",
  "steam:753640": "星际拓荒",
  "steam:962130": "Grounded",
  "steam:3357650": "PRAGMATA",
  "steam:976310": "Mortal Kombat 11",
  "steam:529340": "维多利亚3",
  "steam:1817190": "漫威蜘蛛侠：迈尔斯·莫拉莱斯",
  "steam:739630": "Phasmophobia 恐鬼症",
  "steam:1903340": "光与影: 33号远征队",
  "steam:1627720": "匹诺曹的谎言",
  "steam:4165690": "House in a Meadow VR",
  "steam:835960": "塔罗斯的法则2",
  "steam:513710": "人渣",
  "steam:1233570": "镜之边缘: Catalyst",
  "steam:4570720": "龙之剑: 觉醒",
  "steam:2215200": "乐高蝙蝠侠: 黑暗骑士之遗",
  "steam:219990": "Grim Dawn",
  "steam:219740": "饥荒",
  "steam:1584090": "东方夜雀食堂 - Touhou Mystia's Izakaya",
  "steam:2185060": "双点博物馆",
  "steam:239140": "消逝的光芒",
  "steam:3472040": "NBA 2K26",
  "steam:1238840": "战地1",
  "steam:621830": "WRC 7 国际汽联世界拉力锦标赛",
  "steam:646570": "Slay the Spire",
  "steam:500": "Left 4 Dead",
  "steam:418370": "Resident Evil 7 Biohazard",
  "steam:391220": "古墓丽影：崛起",
  "steam:883710": "生化危机2 重制版",
  "steam:1850570": "死亡搁浅 导演剪辑版",
  "steam:699130": "僵尸世界大战",
  "steam:668580": "原子之心",
  "steam:881100": "Noita",
  "steam:3867170": "兰斯7 战国兰斯",
  "steam:4323380": "This Game Costs 200 Dollars",
  "steam:2754380": "鲁特里一家死了(The Roottrees are Dead)",
  "steam:815370": "绿色地狱",
  "steam:1144400": "千恋*万花",
  "steam:3949040": "我们到了吗?",
  "steam:3008130": "消逝的光芒：困兽",
  "steam:386940": "超级鸡马",
  "steam:3117820": "苏丹的游戏",
  "steam:1243830": "胡闹厨房 全都好吃",
  "steam:673750": "超级兔子人",
  "steam:1273400": "建筑模拟器",
  "steam:4394810": "潜水员戴夫 - 丛林 Content Pack",
  "steam:1297900": "哥特王朝1 重制版",
  "steam:1366540": "戴森球计划",
  "steam:1172620": "盗贼之海 2026版",
  "steam:3105440": "魔法门之英雄无敌: 上古纪元 Heroes of Might and Magic: Olden Era",
  "steam:3186540": "命运2: 反叛",
  "steam:894020": "死亡之门",
  "steam:435150": "神界: 原罪2 - 终极版",
  "steam:534380": "消逝的光芒2: 重装上阵版",
  "steam:632360": "雨中冒险 2",
  "steam:1718570": "神之天平(ASTLIBRA Revision)",
  "steam:2300320": "Farming Simulator 25",
  "steam:3164500": "Schedule I",
  "steam:3681010": "仁王3",
  "steam:359390": "Amnesia: Memories",
  "steam:1942280": "土豆兄弟(Brotato)",
  "steam:1227890": "夏日狂想曲: 乡间的难忘回忆",
  "steam:1118010": "Monster Hunter World: Iceborne",
  "steam:1468810": "鬼谷八荒",
  "steam:3035570": "刺客信条: 幻景",
  "steam:448510": "Overcooked",
  "steam:5245810": "ForgeTax",
  "steam:2964090": "战舰世界：传奇",
  "steam:3940610": "EA SPORTSMadden NFL 27",
  "steam:2593290": "龙之信条2：黑暗觉者 扩展包",
  "steam:779340": "全面战争: 三国",
  "steam:1473480": "战地之王-国际",
  "steam:4560660": "Eslabong",
  "steam:1599600": "速速上菜!",
  "steam:1588550": "孤山独影",
  "steam:784080": "MechWarrior 5: Mercenaries",
  "steam:4849350": "MechWarrior 5: Mercenaries - Ashes and Ascension",
  "steam:4733620": "Hunt: Showdown 1896 - Bound by Blood",
  "steam:972660": "SpiritfarerFarewell版",
  "steam:2902720": "SPAM",
  "steam:3883570": "勇敢者之试炼: Invokyr",
  "steam:2235200": "霓虹深渊2",
  "steam:4511680": "双点博物馆: 失落游乐园",
  "steam:2333000": "银松镇",
  "steam:3055670": "雨中冒险2: 万象归衡",
  "steam:499170": "沉星之序",
  "steam:690830": "基石 Foundation",
  "steam:2138710": "Sifu",
  "steam:1649080": "双点校园",
  "steam:305620": "漫漫长夜",
  "steam:4713280": "基石: 丰收节 Foundation: Harvest Festival",
  "steam:4968640": "Japanese Ramen Simulator",
  "steam:4233960": "风纪委员会梦见魅魔吗?",
  "steam:4282780": "幻想放置远征队",
  "steam:601150": "鬼泣5",
  "steam:535930": "双点医院",
  "steam:262060": "暗黑地牢 Darkest Dungeon",
  "steam:5036130": "Hunt: Showdown 1896 - Starter Pack: The Crow's Calling",
  "steam:4112840": "战鬼克莉丝汀",
  "steam:3167020": "逃离鸭科夫",
  "steam:594570": "全面战争: 战锤2",
  "steam:3031880": "Car Park Capital",
  "steam:2781620": "雨中冒险 2: 合金意念",
  "steam:2254990": "永冻纪元 - Permafrost",
  "steam:1274570": "DEVOUR",
  "steam:2677660": "夺宝奇兵: 古老之圈",
  "steam:1190970": "房产达人 2",
  "steam:4451790": "师姐别急,我抽卡就变强",
  "steam:1280930": "星界战士",
  "steam:5001840": "红色沙漠: 增强版 - 未知征途",
  "steam:612880": "德军总部II：新巨像",
  "steam:714010": "Aimlabs",
  "steam:40700": "机械迷城 (Machinarium)",
  "steam:2124120": "火湖",
  "steam:2736340": "王国 两位君主: 奥林匹斯的召唤",
  "steam:361420": "ASTRONEER",
  "steam:3474900": "Anima Engine",
  "steam:641990": "逃脱者2",
  "steam:939400": "LoveChoice 拣爱",
  "steam:3097560": "Liar's Bar",
  "steam:1040200": "Crime Scene Cleaner",
  "steam:517630": "正当防卫4 Reloaded",
  "steam:1621690": "护核纪元",
  "steam:367520": "Hollow Knight",
  "steam:1940340": "暗黑地牢2 Darkest Dungeon II",
  "steam:1230140": "ATRI -My Dear Moments-",
  "steam:1483870": "Draw & Guess - 你画我猜",
  "steam:2075800": "星球大战 零号连队",
  "steam:2016590": "越来越黑暗 Dark and Darker",
  "steam:5268900": "Dark and Darker - EAS11 Seasonal Pack",
  "steam:4149040": "大钻头矿业无限公司",
  "steam:4114070": "双点博物馆: 艺想天开",
  "steam:108710": "Alan Wake",
  "steam:2680280": "PAPERHEAD",
  "steam:767560": "战争机器人",
  "steam:2778580": "艾尔登法环 黄金树幽影",
  "steam:2963950": "女神异闻录4 Revival",
  "steam:593600": "方块方舟(PixARK)",
  "steam:3595230": "使命召唤: 现代战争 II 2022",
  "steam:2486820": "索尼克赛车 交叉世界",
  "steam:4836670": "索尼克赛车 交叉世界: 季票2",
  "steam:4032350": "EA SPORTS College Football 27",
  "steam:3219630": "Halloween: The Game",
  "steam:1336980": "信長之野望・新生",
  "steam:3123410": "优米雅的炼金工房 ~追忆之炼金术士与幻创之地~",
  "steam:3787240": "漫威斗魂",
  "steam:1245480": "奇异贤伴 爱达之歌",
  "steam:1013320": "火之石 – 放置点击英雄RPG",
  "steam:2244210": "艾恩葛朗特 回荡新声",
  "steam:1984270": "数码宝贝物语 时空异客",
  "steam:3681610": "勇者斗恶龙怪物仙境4 枯木国的碧安卡与芙萝拉",
  "steam:2352190": "Truck Preparation For Driving VR Training",
  "steam:4192650": "王于兴师",
  "steam:2988580": "人中之龙0 誓约的场所 导演剪辑版"
};
function steamDisplayTitle(game) {
  const name = game.name || game.title || '';
  const match = (game.url || '').match(/store\.steampowered\.com\/(app|bundle|sub)\/(\d+)/);
  const type = match?.[1] || game.productType || 'app';
  const id = match?.[2] || game.id;
  // 已按商品核对的译名优先；套装和套餐不能借用本体的映射。
  if (type === 'app' && steamProductTitleMap[`steam:${id}`]) return steamProductTitleMap[`steam:${id}`];
  if (game.cn && game.cn !== name) return game.cn;
  return chineseTitleMap[name] || name;
}

const datasets = {
  switch: [
    {rank:1,name:'マリオカート ワールド',cn:'马力欧卡丁车 世界',meta:'Nintendo · 竞速',platform:'Switch 2',price:8980,old:null,discount:0,trend:'same',cover:'MW',color:'#dc3d5a',hasChinese:true},
    {rank:2,name:'ドンキーコング バナンザ',cn:'咚奇刚 蕉力全开',meta:'Nintendo · 动作',platform:'Switch 2',price:7980,old:null,discount:0,trend:'up',cover:'DK',color:'#b47732',hasChinese:true},
    {rank:3,name:'Minecraft',cn:'我的世界',meta:'Mojang · 冒险',platform:'Switch',price:3960,old:null,discount:0,trend:'up',cover:'MC',color:'#538a4b',hasChinese:true},
    {rank:4,name:'スーパー マリオパーティ ジャンボリー',cn:'超级马力欧派对 空前盛会',meta:'Nintendo · 聚会',platform:'Switch',price:7100,old:null,discount:0,trend:'down',cover:'MP',color:'#de593e',hasChinese:true},
    {rank:5,name:'MONSTER HUNTER RISE',cn:'怪物猎人 崛起',meta:'CAPCOM · 动作 RPG',platform:'Switch',price:998,old:3990,discount:75,trend:'up',cover:'MH',color:'#5f6ea4',hasChinese:true},
    {rank:6,name:'ゼルダの伝説 ティアーズ オブ ザ キングダム',cn:'塞尔达传说 王国之泪',meta:'Nintendo · 冒险',platform:'Switch',price:7900,old:null,discount:0,trend:'down',cover:'ZL',color:'#6a9a8b',hasChinese:true},
    {rank:7,name:'HADES',cn:'哈迪斯',meta:'Supergiant · 动作',platform:'Switch',price:1400,old:2800,discount:50,trend:'up',cover:'HD',color:'#ad3b45',hasChinese:true},
    {rank:8,name:'Stardew Valley',cn:'星露谷物语',meta:'ConcernedApe · 模拟',platform:'Switch',price:1480,old:null,discount:0,trend:'same',cover:'SV',color:'#b78642',hasChinese:true},
    {rank:9,name:'オーバークック 王国のフルコース',cn:'胡闹厨房 全都好吃',meta:'Team17 · 聚会',platform:'Switch',price:1640,old:4100,discount:60,trend:'up',cover:'OC',color:'#df6e39',hasChinese:true},
    {rank:10,name:'ホロウナイト',cn:'空洞骑士',meta:'Team Cherry · 动作',platform:'Switch',price:740,old:1480,discount:50,trend:'same',cover:'HK',color:'#506677',hasChinese:true},
    {rank:11,name:'ペルソナ５ ザ・ロイヤル',cn:'女神异闻录5 皇家版',meta:'ATLUS · RPG',platform:'Switch',price:3839,old:7678,discount:50,trend:'down',cover:'P5',color:'#d5363f',hasChinese:false},
    {rank:12,name:'ぷよぷよ™テトリス®２',cn:'噗哟噗哟俄罗斯方块2',meta:'SEGA · 益智',platform:'Switch',price:2303,old:3840,discount:40,trend:'same',cover:'PT',color:'#4b78c5',hasChinese:true}
  ],
  ps5: [],
  ps4: [],
  ps5_jp: []
};
function normalizePsJpGame(g, i) {
  const id = g.id || '';
  const translatedTitle = chineseTitleMap[g.name];
  return {
    id,
    rawName: g.rawName || g.name || '',
    rank: g.rank || (i + 1),
    name: g.name,
    cn: translatedTitle || g.cn || g.name,
    meta: g.meta || 'PlayStation · 热门',
    platform: g.platform || 'PS5',
    price: g.priceAvailable===false?null:Number(g.price || 0),
    priceAvailable:g.priceAvailable!==false,
    conceptId:g.conceptId,
    old: g.old != null ? Number(g.old) : null,
    discount: Number(g.discount || 0),
    trend: g.trend || 'same',
    cover: g.cover || (g.name ? g.name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase() : 'PS'),
    color: g.color || '#3163b5',
    image: g.image || null,
    wiki: g.wiki || null,
     url: g.url || (id ? `https://store.playstation.com/ja-jp/product/${id}` : 'https://store.playstation.com/ja-jp/pages/browse'),
    hasChinese: Boolean(g.hasChinese || (translatedTitle && translatedTitle !== g.name))
  };
}
function normalizeSteamGame(g, i) {
  const title = g.name || g.title || '';
  return {
    id: g.id || `steam-${i + 1}`,
    rank: g.rank || (i + 1),
    name: title,
    cn: steamDisplayTitle(g),
    productType: g.productType || 'app',
    meta: g.meta || 'Steam · 中国区热销',
    platform: 'PC',
    price: g.price == null ? null : Number(g.price),
    old: g.old != null ? Number(g.old) : null,
    discount: Number(g.discount || 0),
    trend: g.trend || 'same',
    cover: g.cover || (g.title || g.name || 'ST').replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '').slice(0, 2).toUpperCase() || 'ST',
    color: g.color || '#1b5f82',
    image: g.image || '',
    url: g.url || (g.id ? `https://store.steampowered.com/app/${g.id}/?snr=1_7_7_7000_150_1` : 'https://store.steampowered.com/'),
    isFree: Boolean(g.isFree || (g.price === 0 && !g.old)),
    priceAvailable: g.priceAvailable !== false
  };
}

const officialSwitchCovers={
  'Minecraft':'https://img-eshop.cdn.nintendo.net/i/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a.jpg',
  'スーパー マリオパーティ ジャンボリー':'https://img-eshop.cdn.nintendo.net/i/2a23faa1822c06adf074c8bb2ccf5f46a23490b3fe267e176e0b5339d0e1d3b7.jpg',
  'MONSTER HUNTER RISE':'https://img-eshop.cdn.nintendo.net/i/b6ca09e9a7f6faf27641f62dabe64c6ff97b4f326aa478379e3c112aa28eb9ab.jpg',
  'ゼルダの伝説 ティアーズ オブ ザ キングダム':'https://img-eshop.cdn.nintendo.net/i/1a637778f3ea270ca6ff053d0204073e555575099e82cb018ddb1877be0a0fde.jpg',
  'HADES':'https://img-eshop.cdn.nintendo.net/i/dbc8c55a21688b446a5c57711b726956483a14ef8c5ddb861f897c0595ccb6b5.jpg',
  'Stardew Valley':'https://img-eshop.cdn.nintendo.net/i/7aa9c6cf5e7d4cecf481f18b1d7a9d79e7aab85045b22203effb2dda409bc5b7.jpg',
  'オーバークック 王国のフルコース':'https://img-eshop.cdn.nintendo.net/i/a790dbe55c388515f385ad0767219f26b7354dcb5a1545721050886c1b2832d7.jpg',
  'ホロウナイト':'https://img-eshop.cdn.nintendo.net/i/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51.jpg',
  'ペルソナ５ ザ・ロイヤル':'https://img-eshop.cdn.nintendo.net/i/206a3b6840d9f5a709db879bdf003de07b184b8065473a0447eb2ed3b350fee7.jpg',
  'ぷよぷよ™テトリス®２':'https://img-eshop.cdn.nintendo.net/i/a1611db76a1fd22abefa93e8d9edd1410d4f369858cd63db8554073c9bbed158.jpg'
};
datasets.switch2=datasets.switch.filter(g=>g.platform==='Switch 2').map((g,i)=>({...g,rank:i+1,wiki:g.name==='マリオカート ワールド'?'Mario_Kart_World':'Donkey_Kong_Bananza'}));
datasets.switch1=datasets.switch.filter(g=>g.platform==='Switch').map((g,i)=>({...g,rank:i+1,image:officialSwitchCovers[g.name]}));
delete datasets.switch;
function normalizePsGame(g, i) {
  const id = g.id || (g.url ? (g.url.match(/(?:concept|product)\/([A-Z0-9_-]+)/i) || [])[1] : '') || '';
  let url = g.url || '';
  if (id) {
    url = `https://store.playstation.com/zh-hans-hk/product/${id}`;
  } else if (url && url.includes('/concept/')) {
    url = url.replace('/concept/', '/product/').replace('/zh-hant-hk/', '/zh-hans-hk/');
  } else if (!url) {
    url = 'https://store.playstation.com/zh-hant-hk/pages/browse';
  }
  return {
    id,
    conceptId: g.conceptId,
    isDemo: g.isDemo,
    productType: g.productType,
    productCategory: g.productCategory,
    storeDisplayClassification: g.storeDisplayClassification,
    hasChinese: Boolean(g.hasChinese),
    rawName: g.rawName || g.name || '',
    rank: g.rank || (i + 1),
    name: g.name,
    cn: (typeof chineseTitleMap !== 'undefined' && chineseTitleMap[g.name]) ? chineseTitleMap[g.name] : (g.cn || g.name),
    meta: g.meta || 'PlayStation · 热门',
    platform: g.platform || 'PS5',
    price: g.priceAvailable===false?null:Number(g.price || 0),
    priceAvailable:g.priceAvailable!==false,
    old: g.old != null ? Number(g.old) : null,
    discount: Number(g.discount || 0),
    trend: g.trend || 'same',
    cover: g.cover || (g.name ? g.name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase() : 'PS'),
    color: g.color || '#3163b5',
    image: g.image || null,
    wiki: g.wiki || null,
    url
  };
}

/* ================= PS5 游戏同款多版本合并与解析 ================= */
const EDITION_KEYWORDS = [
  'Premium Plus Edition',
  'Premium Deluxe Edition',
  'Aviator Edition',
  'Trilogy Edition',
  'The Old Hunters Edition',
  'GOTY Edition',
  '普通版',
  '年度版',
  '高级版',
  '高級版',
  '精英版',
  '传奇版',
  '傳奇版',
  '超级公民版',
  '超級公民版',
  '豪华系列',
  '豪華系列',
  'PREMIUM DIGITAL DELUXE EDITION',
  'DIGITAL DELUXE EDITION',
  'プレミアムデジタルデラックスエディション',
  'デジタルアルティメットエディション',
  'サウンドアルティメットエディション',
  'デジタルデラックスエディション',
  'プレミアムデラックスエディション',
  'アルティメットエディション',
  'デラックス・エディション',
  'デラックス エディション',
  'デラックスエディション',
  'ファントムエディション',
  'ラグナロクエディション',
  'ゴールドエディション',
  'パワフルエディション',
  'デジタルデラックス版',
  'デジタル特典版',
  'オフィシャルブック＆原曲コンピレーションアルバム（デジタル版）',
  'Digital Deluxe Edition',
  'Digital Deluxe Upgrade',
  'Digital Deluxe',
  'Premium Edition',
  'Standard Edition',
  'Ultimate Edition',
  'Deluxe Edition',
  'Advanced Edition',
  'Complete Edition',
  'Heretic Edition',
  'Gold Edition',
  'Expansion Bundle',
  'Years 1-2 Fighters Edition',
  '25周年紀念數位豪華版',
  '25周年記念數位豪華版',
  '25周年記念デジタルデラックスエディション',
  '官方資料集（日文）＆音樂精選輯（數位版）',
  '官方資料集＆音樂精選輯（數位版）',
  '官方資料集',
  '數位豪華典藏版',
  '数位豪华典藏版',
  '雙重豪華組合包',
  '豪華組合包',
  '豪华组合包',
  'Double Deluxe Edition',
  '高级豪华版',
  '高級豪華版',
  '數位豪華版',
  '数位豪华版',
  '第 2 年終極版',
  '第2年终极版',
  '第 2 年黃金版',
  '第2年黄金版',
  '諸神黃昏版',
  '诸神黄昏版',
  '究極版',
  '究极版',
  '特別版',
  '特别版',
  'RL Definitive Edition',
  'Definitive Edition',
  'Deluxe',
  'Ultimate',
  '豪華版',
  '豪华版',
  '數位終極版',
  '数位终极版',
  '終極版',
  '终极版',
  '完全版',
  '黃金版',
  '黄金版',
  '標準版',
  '标准版',
  '魅影版',
  '追加內容',
  '追加内容',
  'DLC'
];

function stripLanguageParentheses(str) {
  if (!str) return '';
  return str
    .replace(/\s*[（\(][^）\)]*(?:中文|英文|日文|日语|日語|英语|英語|韩语|韓語|韓文|韩文|简中|繁中|中韓|中韩|日英|英日|中英|中日|Chinese|English|Japanese|Korean|TC|SC|KR|JP|EN)[^）\)]*[）\)]/gi, '')
    .trim();
}

const baseGameCache=new Map();
function extractBaseGame(name) {
  if(baseGameCache.has(name))return baseGameCache.get(name);
  const value=parseBaseGame(name);
  if(baseGameCache.size>5000)baseGameCache.clear();
  baseGameCache.set(name,value);return value;
}
function parseBaseGame(name) {
  let cleaned = String(name || '').trim();
  const normalizedName = cleaned.normalize('NFKC');
  if (/^原神(?:\s*[-－–—]\s*(?:6周年|六週年))?/i.test(cleaned)) {
    return { base: '原神', edition: '免费游玩', lang: '' };
  }
  if (/^《?EA SPORTS FC[™®]?\s*27》?/i.test(cleaned)) {
    return { base: 'EA SPORTS FC™ 27', edition: /Lite/i.test(cleaned) ? '免费游玩' : /终极|終極|Ultimate/i.test(cleaned) ? '终极版' : '标准版', lang: '' };
  }
  if (/^《?漫威金刚狼》?|^Marvel['’]?s Wolverine/i.test(cleaned)) {
    return { base: '《漫威金刚狼》', edition: /数字豪华|數位豪華|Digital Deluxe/i.test(cleaned) ? '数字豪华版' : '标准版', lang: '' };
  }
  if (/^eFootball™?/i.test(cleaned)) {
    let edition = '标准版';
    if (/免費|免费|free|demo/i.test(cleaned)) edition = '免费游玩';
    else if (/Leo Messi/i.test(cleaned)) edition = /Deluxe/i.test(cleaned) ? 'Leo Messi 豪华版' : 'Leo Messi 版';
    else if (/Lamine Yamal/i.test(cleaned)) edition = /Deluxe/i.test(cleaned) ? 'Lamine Yamal 豪华版' : 'Lamine Yamal 版';
    return { base: 'eFootball™', edition, lang: '' };
  }
  const demo = /(?:\bDEMO\b|体验版|體驗版|体験版|試玩版|试玩版)/i.test(cleaned);
  cleaned = cleaned.replace(/\s*(?:\bDEMO\b|体验版|體驗版|体験版|試玩版|试玩版)\s*$/i, '').trim();
  if (/真[・·]?三[國国][無无][雙双]\s*2/i.test(normalizedName)) {
    return { base: '真·三国无双2 with 猛将传 Remastered', edition: /数字|數位|Digital|豪华|豪華/i.test(normalizedName) ? '数字豪华版' : '标准版', lang: '' };
  }
  if (/使命召[唤喚]|決勝時刻|Call of Duty/i.test(normalizedName)) {
    const modern = normalizedName.match(/(?:现代战争|現代戰爭|Modern Warfare)[®™\s]*(4|IV|III|II)(?![IV\d])/i);
    const blackOps = normalizedName.match(/(?:黑色行动|黑色行動|Black Ops)[®™\s]*(7|6)(?!\d)/i);
    const base = modern?.[1]?.toUpperCase() === '4' || modern?.[1]?.toUpperCase() === 'IV'
      ? '《使命召唤：现代战争 4》'
      : modern?.[1]?.toUpperCase() === 'III' ? '《使命召唤：现代战争 III (2023)》'
      : modern?.[1]?.toUpperCase() === 'II' ? '《使命召唤：现代战争 II (2022)》'
      : blackOps ? `《使命召唤：黑色行动 ${blackOps[1]}》` : null;
    if (base) {
      const edition = /金库|金庫|宝库|寶庫|Vault/i.test(normalizedName) ? '金库版'
        : /跨越世代|跨世代|Cross.Gen/i.test(normalizedName) ? '跨世代版' : '标准版';
      return { base, edition, lang: '' };
    }
  }
  if (/空(?:の軌跡|之轨迹).*the 2nd/i.test(cleaned)) return { base: '空之轨迹 the 2nd', edition: demo ? 'Demo' : '标准版', lang: '' };
  if (/鬼武者.*Way of the Sword|鬼武者.*Way of the Sword/i.test(cleaned)) return { base: '鬼武者 Way of the Sword', edition: demo ? 'Demo' : '标准版', lang: '' };
  if (/暗黑破坏神|暗黑破壞神|Diablo.*IV/i.test(cleaned)) return { base: '《暗黑破坏神® IV》', edition: demo ? 'Demo' : (/(憎恨|時代|合集|合輯)/i.test(cleaned) ? '资料片合集' : '标准版'), lang: '' };
  if (/艾尔登法环|艾爾登法環|ELDEN RING/i.test(cleaned)) return { base: '艾尔登法环', edition: /黄金树|黃金樹/i.test(cleaned) ? (/(数字|數位|典藏|典藏包)/i.test(cleaned) ? '黄金树幽影数字典藏包' : '黄金树幽影版') : '标准版', lang: '' };
  if (/Phantom Blade Zero|影之刃零/i.test(cleaned)) return { base: 'Phantom Blade Zero', edition: demo ? 'Demo' : '标准版', lang: '' };
  if (/Resident Evil Requiem/i.test(cleaned)) return { base: 'Resident Evil Requiem', edition: demo ? 'Demo' : '标准版', lang: '' };
  if (/Resident Evil 4|Resident Evil Remake Trilogy/i.test(cleaned)) return { base: 'Resident Evil 4', edition: demo ? 'Demo' : (/Trilogy/i.test(cleaned) ? '三部曲合集' : '标准版'), lang: '' };
  if (/Gran Turismo 7|跑車浪漫旅\s*7/i.test(cleaned)) return { base: 'Gran Turismo 7', edition: demo ? 'Demo' : '标准版', lang: '' };
  if (/FINAL FANTASY VII REBIRTH|最终幻想VII 重生/i.test(cleaned)) return { base: 'FINAL FANTASY VII REBIRTH', edition: demo ? 'Demo' : '标准版', lang: '' };
  if (/Nioh\s*3|仁王\s*[3３]/i.test(cleaned)) return { base: '仁王3', edition: demo ? 'Demo' : (/(體驗版|体验版)/i.test(name) ? '体验版' : '标准版'), lang: '' };
  if (/三國志\s*14|三国志\s*14/i.test(cleaned)) return { base: '三国志14', edition: /威力加強|威力加强/i.test(cleaned) ? '威力加强版' : '标准版', lang: '' };
  if (/Forza Horizon 5|極限競速[：:]?\s*地平線\s*5|极限竞速[：:]?\s*地平线\s*5/i.test(cleaned)) return { base: 'Forza Horizon 5', edition: /Premium|頂級|顶级/i.test(cleaned) ? '高级版' : '标准版', lang: '' };
  if (/ACE COMBAT.?8|空戰奇兵\s*8|空战奇兵\s*8/i.test(cleaned)) return { base: 'ACE COMBAT 8: WINGS OF THEFT', edition: /Digital|數位|数字/i.test(cleaned) ? '数字版' : '标准版', lang: '' };
  if (/Gran Turismo\s*7|跑車浪漫旅\s*7|跑车浪漫旅\s*7/i.test(cleaned)) return { base: 'Gran Turismo 7', edition: /25周年|25周年紀念|数字豪华|數位豪華/i.test(cleaned) ? '25周年数字豪华版' : '标准版', lang: '' };
  if (/劍星|剑星|Stellar Blade/i.test(cleaned)) return { base: 'Stellar Blade', edition: /完整|Complete/i.test(cleaned) ? '完整版本' : '标准版', lang: '' };
  if (/真[・·]?三國?無雙\s*起源|真[・·]?三国?无双\s*起源/i.test(cleaned)) return { base: '真·三国无双 起源', edition: /數位|数字|Digital/i.test(cleaned) ? '数字版' : '标准版', lang: '' };
  if (/The Blood of Dawnwalker|黎明行者之血/i.test(cleaned)) return { base: 'The Blood of Dawnwalker', edition: /日蝕|日蚀/i.test(cleaned) ? '日蚀版' : '标准版', lang: '' };
  if (/Wo Long 2: Wings of Ember|臥龍2|卧龙2|鳳火連天|凤火连天/i.test(cleaned)) return { base: 'Wo Long 2: Wings of Ember', edition: '标准版', lang: '' };
  if (/赤血沙漠|紅色沙漠|红色沙漠|Crimson Desert/i.test(cleaned)) return {
    base: '红色沙漠',
    edition: /豪華|豪华|Deluxe/i.test(cleaned) ? '豪华版' : '标准版',
    lang: ''
  };
  if (/電馭叛客\s*2077|賽博朋克\s*2077|赛博朋克\s*2077|Cyberpunk\s*2077/i.test(cleaned)) return {
    base: '赛博朋克 2077',
    edition: /終極|终极|Ultimate/i.test(cleaned) ? '终极版' : '标准版',
    lang: ''
  };
  if (/潛水員戴夫|潜水员戴夫|DAVE THE DIVER/i.test(cleaned)) return {
    base: '潜水员戴夫',
    edition: /捆綁|捆绑|綑綁|Bundle|套裝|套装/i.test(cleaned) ? '捆绑包' : '标准版',
    lang: ''
  };
  if (/^Grand Theft Auto VI/i.test(cleaned)) {
    return {
      base: 'Grand Theft Auto VI',
      edition: /終極版|终极版|Ultimate/i.test(cleaned) ? '终极版' : '标准版',
      lang: ''
    };
  }
  // 1. 移除平台后缀，例如 PS4 & PS5, PS4® & PS5®, (PlayStation®5), PS5, PS4 等
  cleaned = cleaned.replace(/\s*(?:PS4\s*(?:&|＆|\/|和|與|与|and)\s*PS5|PS4[®™]?\s*(?:&|＆|\/|和|與|与|and)\s*PS5[®™]?|\(PS4\s*(?:&|＆|\/|和|與|与|and)\s*PS5\)|\(PlayStation[®™]?5\)|\(PS5\)|\(PS4\)|PlayStation[®™]?5|PS5[®™]?|PS4[®™]?)\s*$/gi, '').trim();

  // 2. 提取并移除语言后缀，支持多层括号嵌套
  let lang = '';
  const langMatches = cleaned.match(/[（\(][^）\)]*(?:中|英|日|韓|韩|語|语|文|TC|SC|KR|JP|EN|Chinese|English|Japanese|Korean)[^）\)]*[）\)]/gi);
  if (langMatches) {
    lang = langMatches.map(m => m.replace(/^[（\(]\s*/, '').replace(/\s*[）\)]$/, '').trim()).join(' ');
  }
  cleaned = stripLanguageParentheses(cleaned);
  // 移除常见的前缀修饰，如 "完整版 -"
  cleaned = cleaned.replace(/^(?:完整版|豪華版|终极版|終極版|黃金版|黄金版)\s*[-–—:\s]\s*/i, '').trim();

  // 1. FINAL FANTASY VII REMAKE (包含 PS4 标准版与 PS5 INTERGRADE 强化版)
  if (/^FINAL FANTASY VII REMAKE/i.test(cleaned)) {
    let edition = '标准版';
    if (/INTERGRADE/i.test(cleaned)) {
      edition = 'INTERGRADE';
    }
    return {
      base: 'FINAL FANTASY VII REMAKE',
      edition,
      lang
    };
  }

  // 2. 星球大战：亡命之徒 / 星際大戰：亡命之徒 (统一简繁译名合并为同款游戏)
  if (/星[球際]大[战戰][:：\s]*亡命之徒/i.test(cleaned) || /Star Wars.*Outlaws/i.test(cleaned)) {
    let edition = '标准版';
    if (/黃金|黄金|Gold/i.test(cleaned)) edition = '黄金版';
    else if (/豪華|豪华|Deluxe/i.test(cleaned)) edition = '豪华版';
    else if (/終極|终极|Ultimate/i.test(cleaned)) edition = '终极版';
    return {
      base: '《星球大战：亡命之徒》',
      edition,
      lang
    };
  }

  // 3. Monster Hunter Stories 1+2 (合并 1+2 组合包 与 1+2 豪华组合包)
  if (/Monster Hunter Stories.*1\+2/i.test(cleaned)) {
    let edition = '标准组合包';
    if (/豪華|豪华/i.test(cleaned)) edition = '豪华组合包';
    return {
      base: 'Monster Hunter Stories 1+2 組合包',
      edition,
      lang
    };
  }

  if (cleaned.includes('OCTOPATH TRAVELER 0') || cleaned.includes('歧路旅人0')) {
    return {
      base: '歧路旅人0',
      edition: '數位豪華版',
      lang
    };
  }

  if (/^Monster Hunter.*World/i.test(cleaned)) {
    let edition = '标准版';
    if (/Master Edition.*Digital Deluxe/i.test(cleaned)) edition = '大师版 數位豪華版';
    else if (/Master Edition/i.test(cleaned)) edition = '大师版 (Master Edition)';
    else if (/Iceborne.*Digital Deluxe/i.test(cleaned)) edition = 'Iceborne 數位豪華版 (追加內容)';
    else if (/Iceborne/i.test(cleaned)) edition = 'Iceborne (追加內容)';
    return { base: 'Monster Hunter: World', edition, lang };
  }

  if (/^Monster Hunter Rise/i.test(cleaned)) {
    let edition = '标准版';
    if (/Sunbreak.*雙重豪華/i.test(cleaned)) edition = '崛起 + 曙光 雙重豪華組合包';
    else if (/Sunbreak.*豪華版/i.test(cleaned)) edition = '曙光 豪華版 (追加內容)';
    else if (/Deluxe Edition/i.test(cleaned)) edition = 'Deluxe Edition 豪華版';
    return { base: 'Monster Hunter Rise', edition, lang };
  }

  if (/^ACE COMBAT.*7/i.test(cleaned)) {
    return { base: 'ACE COMBAT™ 7: SKIES UNKNOWN', edition: 'TOP GUN: Maverick 數位版', lang };
  }

  const bookMatch = cleaned.match(/^《([^》]+)》$/);
  if (bookMatch) {
    const inner = bookMatch[1];
    for (const kw of EDITION_KEYWORDS) {
      const idx = inner.toLowerCase().indexOf(kw.toLowerCase());
      if (idx !== -1) {
        const baseInner = inner.slice(0, idx).replace(/[:：\-\+–\s]+$/, '').trim();
        const edInner = inner.slice(idx).trim();
        return { base: `《${baseInner}》`, edition: edInner, lang };
      }
    }
  }

  let detectedEdition = '';
  for (const kw of EDITION_KEYWORDS) {
    const idx = cleaned.toLowerCase().indexOf(kw.toLowerCase());
    if (idx !== -1) {
      detectedEdition = cleaned.slice(idx).trim();
      cleaned = cleaned.slice(0, idx).trim();
      break;
    }
  }

  cleaned = cleaned.replace(/[:：\-\+–\s]+$/, '').trim();
  return { base: cleaned || name, edition: detectedEdition || '标准版', lang };
}

function getLanguageTag(game, lang) {
  const langStr = String(lang || '');
  const nameStr = [game?.rawName || '', game?.name || ''].join(' ');
  const parenMatches = (nameStr.match(/[（\(][^）\)]+[）\)]/g) || []).join(' ');
  const textToScan = [
    langStr,
    parenMatches,
    nameStr.match(/(?:中韓|中韩|日英|英日|中英|中日|簡體中文|繁體中文|中文|日文|英文|韓文|韩文)版?/g)?.join(' ') || ''
  ].join(' ');

  const hasZh = /中|繁體|簡體|繁中|简中|\b(tc|sc|chinese)\b/i.test(textToScan);
  const hasKr = /韓|韩|\b(kr|korean)\b/i.test(textToScan);
  const hasJp = /日|\b(jp|japanese)\b/i.test(textToScan);
  const hasEn = /英|\b(en|english)\b/i.test(textToScan);

  const id = String(game?.id || (game?.url ? (game.url.match(/(?:concept|product)\/([A-Z0-9_-]+)/i) || [])[1] : '') || '');

  // 4 语言组合
  if (hasZh && hasKr && hasJp && hasEn) {
    return { label: '中 / 韩 / 日 / 英版', type: 'zh' };
  }
  // 3 语言组合
  if (hasZh && hasKr && hasEn) {
    return { label: '中 / 韩 / 英版', type: 'zh' };
  }
  if (hasZh && hasJp && hasEn) {
    return { label: '中 / 日 / 英版', type: 'zh' };
  }
  if (hasZh && hasKr && hasJp) {
    return { label: '中 / 韩 / 日版', type: 'zh' };
  }
  if (hasJp && hasEn && hasKr) {
    return { label: '日 / 英 / 韩版', type: 'en' };
  }
  // 2 语言组合
  if ((hasZh && hasKr) || /中韓|中韩/i.test(textToScan)) {
    return { label: '中文 / 韓文版', type: 'zh' };
  }
  if (hasZh && hasEn) {
    return { label: '中文 / 英文版', type: 'zh' };
  }
  if (hasZh && hasJp) {
    return { label: '中文 / 日文版', type: 'zh' };
  }
  if ((hasJp && hasEn) || /日英|英日/i.test(textToScan)) {
    return { label: '日文 / 英文版', type: 'en' };
  }
  if (hasEn && hasKr) {
    return { label: '英文 / 韓文版', type: 'en' };
  }
  if (hasJp && hasKr) {
    return { label: '日文 / 韓文版', type: 'en' };
  }
  // 单语言
  if (hasZh) {
    return { label: '中文版', type: 'zh' };
  }
  if (hasJp) {
    return { label: '日文版', type: 'jp' };
  }
  if (hasEn) {
    return { label: '英文版', type: 'en' };
  }
  if (hasKr) {
    return { label: '韓文版', type: 'zh' };
  }

  // 根据官方商品 SKU 前缀直接标注具体包含的语言（不带港版/全球版等字样）
  if (id.startsWith('HP')) {
    return { label: '中文 / 韓文版', type: 'zh' };
  }
  if (id.startsWith('JP')) {
    return { label: '日文 / 英文版', type: 'en' };
  }
  if (id.startsWith('UP') || id.startsWith('EP')) {
    return { label: '日文 / 英文版', type: 'en' };
  }

  return null;
}

function translateEditionBadge(ed) {
  if (!ed) return '标准版';
  const clean = ed.trim();
  const map = {
    '通常版': '标准版',
    '標準版': '标准版',
    'Standard Edition': '标准版',
    'Deluxe Edition': '豪华版',
    'Digital Deluxe': '数字豪华版',
    'Digital Deluxe Edition': '数字豪华版',
    'Digital Deluxe Upgrade': '数字豪华升级包',
    'Premium Edition': '高级版',
    'Ultimate Edition': '终极版',
    'Advanced Edition': '进阶版',
    'Heretic Edition': '异教徒版',
    'Expansion Bundle': '扩展捆绑包',
    'プレミアムデジタルデラックスエディション': '高级数字豪华版',
    'デジタルアルティメットエディション': '数字终极版',
    'サウンドアルティメットエディション': '原声终极版',
    'デジタルデラックスエディション': '数字豪华版',
    'プレミアムデラックスエディション': '高级豪华版',
    'アルティメットエディション': '终极版',
    'デラックス・エディション': '豪华版',
    'デラックスエディション': '豪华版',
    'デラックス エディション': '豪华版',
    'ファントムエディション': '魅影版',
    'ラグナロクエディション': '诸神黄昏版',
    'ゴールドエディション': '黄金版',
    'パワフルエディション': '强力版',
    'デジタルデラックス版': '数字豪华版',
    'デジタル特典版': '数字特典版',
    'オフィシャルブック＆原曲コンピレーションアルバム（デジタル版）': '设定集与原声带数字版'
  };
  if (map[clean]) return map[clean];
  if (/premium.*deluxe/i.test(clean) || /プレミアム.*デラックス/i.test(clean)) return '高级数字豪华版';
  if (/digital.*deluxe/i.test(clean) || /デジタル.*デラックス/i.test(clean)) return '数字豪华版';
  if (/deluxe/i.test(clean) || /デラックス/i.test(clean)) return '豪华版';
  if (/ultimate/i.test(clean) || /アルティメット/i.test(clean)) return '终极版';
  if (/premium/i.test(clean) || /プレミアム/i.test(clean)) return '高级版';
  if (/standard/i.test(clean) || /通常版|標準版|标准版/i.test(clean)) return '标准版';
  return clean;
}

function isPsDemoGame(game) {
  if(game.isDemo === true)return true;
  const types=[game.productType,game.gameType,game.productCategory,game.category,game.storeDisplayClassification].filter(value=>typeof value==='string');
  if(types.some(value=>/^(?:demo|trial|game[_ ]demo|试玩版|試玩版|体験版)$/i.test(value)))return true;
  // 使用原始商品和版本资料；免费价格本身不能证明这是试玩版。
  return /\b(?:demo|trial(?: version)?)\b|试玩版|試玩版|体验版|體驗版|体験版|體驗版本|体验版本|デモ版/i.test(
    [game.rawName,game.name,game.editionName,game.editionBadge].filter(Boolean).join(' '));
}

function groupPs5Games(rawGames, limit = null, isJp = false) {
  const groups = new Map();

  const canonicalGroupKey = value => String(value || '')
    .replace(/[™®]/g, '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[《》「」『』【】()（）［］\[\]®™:：·,，。!！?？\-–—_\s]/g, '');

  for (let i = 0; i < rawGames.length; i++) {
    const game = rawGames[i];
    // 商品名字中的明确版本标记优先于特殊游戏名称的解析，避免捆绑包被误标为标准版。
    const productName = String(game.name || game.rawName || '').normalize('NFKC');
    const isDemo = isPsDemoGame(game);
    if (!isDemo && /\b(?:Bundle|Upgrade|DLC|Demo|Trial)\b|\b(?:Premium(?:\s+Plus|\s+Deluxe)?|Digital\s+Deluxe|Deluxe|Ultimate|Gold|Aviator|Trilogy|Complete|GOTY)\s+Edition\b|\b(?:Starter|Expansion|Texture)\s+Pack\b|High[ -]res\s+Texture|The Old Hunters Edition|捆绑包|捆綁包|組合包|组合包|同捆包|豪华|豪華|高级版|高級版|精英版|传奇版|傳奇版|年度版|超级公民版|超級公民版|升级包|升級包|追加内容|追加內容|好友通行证|好友通行證|体验版|體驗版|体験版|试玩版|試玩版/i.test(productName)) continue;
    const { base, edition, lang } = extractBaseGame(game.name || game.rawName);
    const groupKey = (game.conceptId ? `concept:${game.conceptId}` : canonicalGroupKey(base)) + (isDemo ? ":demo" : "");
    const langInfo = isJp ? null : getLanguageTag(game, lang);
    const editionBase = isDemo ? 'Demo' : (game.price === 0 || game.isFree) ? '免费游玩' : (isJp ? translateEditionBadge(edition || '标准版') : (edition || (isJp ? '通常版' : '标准版')));
    const finalEdition = langInfo ? `${editionBase} (${langInfo.label})` : editionBase;
    const baseCn = chineseTitleMap[base] || (base === game.name ? (chineseTitleMap[game.name] || game.cn) : base) || base;

    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        groupId: (isJp ? 'grp-jp-' : 'grp-') + i,
        baseName: base,
        cn: baseCn,
        rank: game.rank,
        color: game.color,
        image: game.image,
        cover: game.cover,
        platform: game.platform,
        meta: game.meta,
        hasChinese: Boolean(game.hasChinese),
        editions: []
      });
    }

    const grp = groups.get(groupKey);
    if (!grp.image && game.image) grp.image = game.image;
    if (game.hasChinese) grp.hasChinese = true;
    if (isJp && (!grp.cn || grp.cn === base) && baseCn) grp.cn = baseCn;

    // 防止同一个商品 SKU 在同一个组内重复出现
    if (!grp.editions.some(e =>
      (e.id && game.id && e.id === game.id) ||
      (e.name === game.name && Number(e.price) === Number(game.price) && e.editionName === finalEdition)
    )) {
      const editionCn = chineseTitleMap[game.name] || game.cn || game.name;
      grp.editions.push({
        ...game,
        isDemo,
        cn: editionCn,
        editionBadge: isJp ? translateEditionBadge(editionBase) : editionBase,
        editionName: finalEdition,
        langLabel: langInfo?.label || '',
        langType: langInfo?.type || '',
        hasChinese: Boolean(game.hasChinese)
      });
    }
  }

  let result = Array.from(groups.values()).map(grp => {
    // 每款游戏只选普通版；同有 PS5 和 PS4 商品时优先选 PS5。
    grp.editions.sort((a, b) => a.price - b.price);
    const freeEdition = grp.editions.find(e => e.priceAvailable!==false&&(Number(e.price) === 0 || e.isFree || /demo|体验版|體驗版|体験版|试玩版|試玩版/i.test(`${e.editionBadge || ''} ${e.editionName || ''}`)));
    const paidEditions = grp.editions.filter(e => {
      const title = `${e.name || ''} ${e.editionBadge || ''}`;
      return e.price > 0 && /^(?:标准版|普通版|通常版|標準版|Standard Edition)$/i.test(e.editionBadge || '')
        && !/\b(?:Lite|Demo|Trial|DLC)\b|体验版|體驗版|体験版|试玩版|試玩版|追加内容|追加內容|原石|创世结晶|創世結晶/i.test(title);
    }).sort((a, b) => {
      const platformPriority = e => e.platform === 'PS5' ? 0 : e.platform?.includes('PS5') ? 1 : 2;
      const languagePriority = e => e.langType === 'zh' || e.hasChinese ? 0 : 1;
      return platformPriority(a) - platformPriority(b) || languagePriority(a) - languagePriority(b) || a.price - b.price || a.rank - b.rank;
    });
    const effectiveEditions = (grp.baseName === '原神' && freeEdition ? [] : paidEditions).slice(0, 1);
    const unavailableEdition=grp.editions.find(e=>e.priceAvailable===false&&/^(?:标准版|普通版|通常版|標準版|Standard Edition)$/i.test(e.editionBadge||''));
    const primaryEdition = effectiveEditions[0] || freeEdition || unavailableEdition || grp.editions[0];
    if (!effectiveEditions.length && !freeEdition && !unavailableEdition) return null;
    const displayEditions = primaryEdition ? [primaryEdition] : [];
    const prices = (effectiveEditions.length ? effectiveEditions : displayEditions).map(e => e.price).filter(p => typeof p === 'number' && !isNaN(p));
    const minPrice = prices.length ? Math.min(...prices) : null;
    const maxPrice = prices.length ? Math.max(...prices) : 0;
    const maxDiscount = effectiveEditions.length ? Math.max(...effectiveEditions.map(e => e.discount || 0)) : 0;
    const bestDealEdition = effectiveEditions.find(e => e.discount === maxDiscount) || primaryEdition;
    const bestOld = effectiveEditions.map(e => e.old).filter(Boolean);
    const maxOld = bestOld.length ? Math.max(...bestOld) : null;
    const isDemoEdition = freeEdition && isPsDemoGame(freeEdition);
    // 免费商品独立命名，不能用同概念的付费本体名称覆盖角色编辑器、战争地带等商品。
    const freeProductName=stripLanguageParentheses(freeEdition?.name || freeEdition?.rawName || grp.baseName)
      .replace(/&#(?:x27|39);|&apos;/gi,"'").replace(/&amp;/gi,'&');
    const isCharacterCreator=/Character Creator|角色编辑|角色編輯|创建.*角色|創建.*角色/i.test(freeProductName);
    const isWarzone=/Warzone|战争地带|戰爭地帶/i.test(freeProductName);
    const freeName = freeProductName;
    const freeCn = isCharacterCreator && /Dragon['’]s Dogma 2/i.test(freeProductName)
      ? "Dragon's Dogma 2 角色编辑＆保存"
      : isWarzone ? '使命召唤®：战争地带™'
      : (freeEdition?.cn || freeProductName);
    const freeGame = freeEdition ? {
      ...freeEdition,
      id: freeEdition.id,
      groupId: grp.groupId,
      name: freeName,
      cn: freeCn,
      rank: grp.rank,
      platform: freeEdition.platform || grp.platform,
      image: freeEdition.image || grp.image,
      cover: freeEdition.cover || grp.cover,
      color: freeEdition.color || grp.color,
      isFree: true,
      editionBadge: isDemoEdition ? 'Demo' : '',
      price: 0,
      discount: 0,
      old: null,
      url: freeEdition.url
    } : null;

    return {
      id: (bestDealEdition || primaryEdition).id,
      groupId: grp.groupId,
      editions: displayEditions,
      rank: Math.min(...grp.editions.map(e => e.rank)),
      name: grp.baseName,
      cn: grp.cn || grp.baseName,
      meta: (bestDealEdition || primaryEdition).meta || grp.meta,
      platform: (bestDealEdition || primaryEdition).platform || grp.platform,
      price: minPrice,
      priceAvailable:primaryEdition.priceAvailable!==false,
      maxPrice: maxPrice > minPrice ? maxPrice : null,
      old: maxOld,
      discount: maxDiscount,
      color: grp.color,
      cover: grp.cover,
      image: (bestDealEdition || primaryEdition).image || grp.image,
      trend: (bestDealEdition || primaryEdition).trend || 'same',
      url: (bestDealEdition || primaryEdition).url,
      isGroup: false,
      primaryGame: bestDealEdition || primaryEdition,
      hasFreeEdition: Boolean(freeGame),
      freeGame,
      isFree: primaryEdition.priceAvailable!==false&&Boolean((bestDealEdition || primaryEdition).isFree || Number((bestDealEdition || primaryEdition).price) === 0),
      editionBadge: (bestDealEdition || primaryEdition).editionBadge,
      hasChinese: grp.hasChinese || grp.editions.some(e => e.hasChinese)
    };
  }).filter(Boolean);

  // 按榜单自然排名（首次出现的最佳排名）排序
  result.sort((a, b) => a.rank - b.rank);

  // 如果指定了限制数量（如严格前100款游戏），在此截断
  if (typeof limit === 'number' && limit > 0) {
    result = result.slice(0, limit);
  }

  // 港服保留官方浏览页父项的位置；同一父项下的不同游戏可共享位置。
  return result.map((g, idx) => ({
    ...g,
    rank: isJp ? idx + 1 : g.rank
  }));
}

function selectPsPaidRanking(games) {
  let paidCount = 0;
  return games.filter(game => {
    if (game.isFree || (game.priceAvailable !== false && Number(game.price) === 0)) return true;
    return game.priceAvailable !== false && Number(game.price) > 0 && ++paidCount <= 200;
  });
}

function preparePsDatasets(rawList) {
  const normalized = (rawList || []).map(normalizePsGame);
  datasets.ps5_all = normalized;
  const ps5Raw = normalized.filter(g => g.platform === 'PS5' || g.platform === 'PS4 / PS5');
  datasets.ps5 = selectPsPaidRanking(groupPs5Games(ps5Raw, null, false));
  datasets.ps5_with_ps4 = selectPsPaidRanking(groupPs5Games(normalized, null, false));
  datasets.ps4 = datasets.ps5_with_ps4.filter(g => g.platform === 'PS4');
}

function preparePsJpDatasets(rawList) {
  const normalized = (rawList || []).map(normalizePsJpGame);
  datasets.ps5_jp_all = normalized;
  const ps5Raw = normalized.filter(g => g.platform === 'PS5' || g.platform === 'PS4 / PS5' || !g.platform || g.platform.includes('PS5'));
  datasets.ps5_jp = selectPsPaidRanking(groupPs5Games(ps5Raw, null, true));
  const grouped=groupPs5Games(normalized, null, true);
  datasets.ps5_jp_with_ps4 = selectPsPaidRanking(grouped);
  datasets.ps4_jp = grouped.filter(g => g.platform === 'PS4');
}

const PS5_STORAGE_KEY = 'game-pulse-ps5-v10';
const PS5_JP_STORAGE_KEY = 'game-pulse-ps5-jp-v1';
let ps5Status = {count:0,officialLimit:200,updatedAt:null,stale:true,sourceType:'PlayStation Store 港服官方'};
let ps5JpStatus = {count:0,officialLimit:200,updatedAt:null,stale:true,sourceType:'PlayStation Store 日服官方'};
let steamStatus = {count:0,officialLimit:200,updatedAt:null,stale:true,sourceType:'Steam 官方热销榜'};
let steamGlobalStatus = {count:0,officialLimit:100,updatedAt:null,stale:true,sourceType:'Steam 官方全球热销榜'};
preparePsDatasets([]);
preparePsJpDatasets([]);
datasets.steam = [];
datasets.steam_global = [];

// 大平台的本地缓存也留到首屏绘制之后解析和整理。
function restorePlatformCache(key) {
  const storageKeys = {ps5:PS5_STORAGE_KEY,ps5_jp:PS5_JP_STORAGE_KEY,steam:'game-pulse-steam',steam_global:'game-pulse-steam-global'};
  try {
    const saved = JSON.parse(localStorage.getItem(storageKeys[key]));
    if (!saved?.games?.length) return;
    if (key === 'ps5') {
      if (saved.games.some(g => g.image?.includes('e0364b3089bbbad7e0a04f87cab6c273172515a134efdf88'))) {
        localStorage.removeItem(PS5_STORAGE_KEY);
        return;
      }
      preparePsDatasets(saved.games);
      ps5Status = {...ps5Status,...saved.status,stale:true};
    } else if (key === 'ps5_jp') {
      preparePsJpDatasets(saved.games);
      ps5JpStatus = {...ps5JpStatus,...saved.status,stale:true};
    } else {
      datasets[key] = saved.games.map(normalizeSteamGame);
      if (key === 'steam') steamStatus = {...steamStatus,...saved.status,stale:true};
      else steamGlobalStatus = {...steamGlobalStatus,...saved.status,stale:true};
    }
  } catch {}
}

function formatSourceTime(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return '';
  const now = new Date();
  const isToday = d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  const h = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  const sec = String(d.getSeconds()).padStart(2, '0');
  if (isToday) {
    return `今天 ${h}:${min}:${sec}`;
  }
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${m}-${day} ${h}:${min}`;
}

const apiBase = (
  window.GAME_PULSE_CONFIG?.apiBase ||
  (location.protocol.startsWith('http') ? location.origin : 'http://localhost:8787')
).replace(/\/$/, '');
let lastRankingRevision = '';
let collectorPlatformStatus = {};
let collectorStatusUnavailable = false;
async function syncCollectorRefreshMinutes({ write = false } = {}) {
  try {
    const response = await fetch(`${apiBase}${write ? '/api/settings' : '/health'}`, {
      method: write ? 'POST' : 'GET',
      headers: write ? { 'content-type': 'application/json' } : undefined,
      body: write ? JSON.stringify({ refreshMinutes: state.interval }) : undefined,
      cache: 'no-store',
      signal: AbortSignal.timeout(4000)
    });
    const payload = await response.json();
    if (!response.ok || ![5, 15, 30, 60].includes(Number(payload.refreshMinutes))) return;
    if (!write) {
      state.interval = Number(payload.refreshMinutes);
      const serverNow = Date.parse(payload.serverTime);
      const serverNext = Date.parse(payload.nextRefreshAt);
      serverRefreshInProgress = Boolean(payload.refreshInProgress);
      nextRefreshAt = Number.isFinite(serverNow) && Number.isFinite(serverNext)
        ? Date.now() + Math.max(0, serverNext - serverNow) : null;
      const select = $('#intervalSelect');
      if (select) select.value = String(state.interval);
      saveSettings();
      if (payload.platforms) {
        collectorPlatformStatus = payload.platforms;
        collectorStatusUnavailable = false;
        renderRefreshNotice();
        const revision = JSON.stringify(Object.entries(payload.platforms).map(([key, value]) => [key, value.updatedAt]));
        if (!lastRankingRevision) lastRankingRevision = revision;
        else if (revision !== lastRankingRevision && startupDataReady && state.auto && !refreshInProgress) {
          lastRankingRevision = revision;
          refresh({ silent: true });
        }
      }
    }
  } catch {
    collectorStatusUnavailable = true;
    renderRefreshNotice();
  }
}

function renderRefreshNotice() {
  const notice = $('#refreshNotice');
  if (!notice) return;
  const key = state.platform.startsWith('switch') ? activeNintendoKey()
    : state.platform === 'ps5' ? (state.psStore === 'jp' ? 'ps5_jp' : 'ps5')
    : state.steamRegion === 'global' ? 'steam_global' : 'steam';
  const local = key.startsWith('switch') ? nintendoStatus[key]
    : key === 'ps5' ? ps5Status : key === 'ps5_jp' ? ps5JpStatus
    : key === 'steam_global' ? steamGlobalStatus : steamStatus;
  const status = collectorPlatformStatus[key] || local || {};
  const success = status.updatedAt ? formatSourceTime(status.updatedAt) : '';
  notice.hidden = !status.updatedAt;
  notice.dataset.state = 'success';
  notice.textContent = status.updatedAt ? `上次成功获取：${success}` : '';
  notice.title = '';
}
function normalizeGame(game){
  const labelDiscount=Number(String(game.saleLabel||'').match(/(\d+)\s*%/)?.[1]||0),discount=game.discount||labelDiscount;
  const old=game.old||(discount&&game.price?Math.round(game.price/(1-discount/100)):null);
  return {
    ...game,
    image: /^https:\/\/store\.nintendo\.com\.hk\/media\/catalog\/product\//.test(game.image || '')
      ? `${apiBase}/api/nintendo/image?url=${encodeURIComponent(game.image)}` : game.image,
    discount,
    old,
    cn: chineseTitleMap[game.name]||game.cn||game.name,
    meta: '数字版',
    editionBadge: '数字版'
  };
}
const initialNintendo=window.NINTENDO_RANKINGS||{};
for(const platform of ['switch1','switch2','switch1_hk','switch2_hk']){
  if(initialNintendo[platform]?.games?.length){
    datasets[platform]=initialNintendo[platform].games.map(normalizeGame);
  }
}
const nintendoStatus=Object.fromEntries(['switch1','switch2','switch1_hk','switch2_hk'].map(platform=>[
  platform,
  initialNintendo[platform]?{count:initialNintendo[platform].count,officialLimit:initialNintendo[platform].officialLimit,updatedAt:initialNintendo[platform].updatedAt,stale:true,sourceType:initialNintendo[platform].sourceType,sourceNote:initialNintendo[platform].sourceNote}:null
]));

async function fetchNintendoRanking(platform,{force=false}={}){
  const storageKey = platform.endsWith('_hk') ? 'game-pulse-' + platform + '-hd-v1' : 'game-pulse-' + platform;
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),force?120000:30000);
  try{
    const url=`${apiBase}/api/nintendo/rankings?platform=${platform}${force?'&refresh=1':''}`;
    const response=await fetch(url,{cache:'no-store',signal:controller.signal});
    const payload=await response.json();
    if(!response.ok||!payload.ok||!Array.isArray(payload.games)||!payload.games.length)throw new Error(payload.error||'榜单接口返回异常');
    datasets[platform]=payload.games.map(normalizeGame);
    if (!payload.stale) recordAllCurrentGames(platform);
    nintendoStatus[platform]={count:payload.count||payload.games.length,officialLimit:payload.officialLimit||payload.games.length,updatedAt:payload.updatedAt,stale:Boolean(payload.stale),sourceType:payload.sourceType,sourceNote:payload.sourceNote};
    try{localStorage.setItem(storageKey,JSON.stringify({games:datasets[platform],status:nintendoStatus[platform]}))}catch{}
    return !payload.stale;
  }catch(error){
    try{
      const saved=JSON.parse(localStorage.getItem(storageKey));
      if(saved?.games?.length){datasets[platform]=saved.games.map(normalizeGame);nintendoStatus[platform]={...saved.status,stale:true}}
    }catch{}
    console.warn(`${platform} 榜单刷新失败：`,error.message);
    return false;
  }finally{clearTimeout(timer)}
}

async function fetchPs5Ranking({force=false}={}){
  await loadPlatformSnapshot('ps5');
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),force?120000:15000);
  try{
    const url=`${apiBase}/api/ps5/rankings${force?'?refresh=1':''}`;
    const response=await fetch(url,{cache:'no-store',signal:controller.signal});
    const payload=await response.json();
    if(!response.ok||!payload.ok||!Array.isArray(payload.games)||!payload.games.length)throw new Error(payload.error||'PlayStation 榜单接口返回异常');
    preparePsDatasets(payload.games);
    if (!payload.stale) {
      recordAllCurrentGames('ps5');
      recordAllCurrentGames('ps4');
    }
    ps5Status={count:datasets.ps5.length,officialLimit:200,updatedAt:payload.updatedAt||new Date().toISOString(),stale:Boolean(payload.stale),sourceType:payload.sourceType||'PlayStation Store 港服官方'};
    try{localStorage.setItem(PS5_STORAGE_KEY,JSON.stringify({games:payload.games,status:ps5Status}))}catch{}
    return !payload.stale;
  }catch(error){
    try{
      const saved=JSON.parse(localStorage.getItem(PS5_STORAGE_KEY));
      preparePsDatasets(saved?.games?.length ? saved.games : (window.PS5_HK_GAMES || window.PS5_GAMES || []));
      ps5Status={...(saved?.status || ps5Status),stale:true};
    }catch{}
    console.warn('PS5 榜单刷新失败：',error.message);
    return false;
  }finally{clearTimeout(timer)}
}

async function fetchPs5JpRanking({force=false}={}){
  await loadPlatformSnapshot('ps5_jp');
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),force?40000:15000);
  try{
    const url=`${apiBase}/api/ps5-jp/rankings${force?'?refresh=1':''}`;
    const response=await fetch(url,{cache:'no-store',signal:controller.signal});
    const payload=await response.json();
    if(!response.ok||!payload.ok||!Array.isArray(payload.games)||!payload.games.length)throw new Error(payload.error||'PlayStation 日服榜单接口返回异常');
    preparePsJpDatasets(payload.games);
    if (!payload.stale) recordAllCurrentGames('ps5_jp');
    ps5JpStatus={count:datasets.ps5_jp.length,officialLimit:200,updatedAt:payload.updatedAt||new Date().toISOString(),stale:Boolean(payload.stale),sourceType:payload.sourceType||'PlayStation Store 日服官方'};
    try{localStorage.setItem(PS5_JP_STORAGE_KEY,JSON.stringify({games:payload.games,status:ps5JpStatus}))}catch{}
    return !payload.stale;
  }catch(error){
    try{
      const saved=JSON.parse(localStorage.getItem(PS5_JP_STORAGE_KEY));
      preparePsJpDatasets(saved?.games?.length ? saved.games : (window.PS5_JP_GAMES || []));
      ps5JpStatus={...(saved?.status||ps5JpStatus),stale:true};
    }catch{}
    console.warn('PS5 日服榜单刷新失败：',error.message);
    return false;
  }finally{clearTimeout(timer)}
}

async function fetchSteamRanking({force=false,region='cn'}={}){
  const global=region==='global';
  const key=global?'steam_global':'steam';
  await loadPlatformSnapshot(key);
  const storageKey=global?'game-pulse-steam-global':'game-pulse-steam';
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),force?40000:15000);
  try{
    const url=`${apiBase}${global?'/api/steam-global/rankings':'/api/steam/rankings'}${force?'?refresh=1':''}`;
    const response=await fetch(url,{cache:'no-store',signal:controller.signal});
    const payload=await response.json();
    if(!response.ok||!payload.ok||!Array.isArray(payload.games)||!payload.games.length)throw new Error(payload.error||'Steam 榜单接口返回异常');
    datasets[key]=payload.games.map(normalizeSteamGame);
    if (!payload.stale) recordAllCurrentGames(key);
    const status={count:payload.count||payload.games.length,officialLimit:payload.officialLimit||(global?100:200),updatedAt:payload.updatedAt||new Date().toISOString(),stale:Boolean(payload.stale),sourceType:payload.sourceType||(global?'Steam 官方全球热销榜':'Steam Store 中国区官方榜单')};
    if(global) steamGlobalStatus=status;
    else steamStatus=status;
    try{localStorage.setItem(storageKey,JSON.stringify({games:datasets[key],status}))}catch{}
    return !payload.stale;
  }catch(error){
    try{
      const saved=JSON.parse(localStorage.getItem(storageKey));
      if(saved?.games?.length) datasets[key]=saved.games.map(normalizeSteamGame);
      if(global) steamGlobalStatus={...(saved?.status||steamGlobalStatus),stale:true};
      else steamStatus={...(saved?.status||steamStatus),stale:true};
    }catch{}
    console.warn(`Steam ${global?'全球':'中国区'}榜单刷新失败：`,error.message);
    return false;
  }finally{clearTimeout(timer)}
}

const SETTINGS_STORAGE_KEY = 'game-pulse-settings-v1';
const savedSettings = (() => {
  try { return JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY)); } catch { return null; }
})();
const initialAuto = true;
const initialInterval = 60;

const savedRates=(()=>{try{return JSON.parse(localStorage.getItem('game-pulse-rates'))}catch{return null}})();
const state={platform:'switch1',view:'ranking',nintendoStore:'jp',psStore:'hk',steamRegion:'cn',includePs4:true,includeFreeInDeals:false,page:1,filteredCount:0,pageTotal:1,query:'',sort:'rank',auto:initialAuto,interval:initialInterval,remaining:initialInterval*60,rates:{JPY:0.042728,HKD:0.856469,CNY:1,...savedRates?.rates},rateUpdated:savedRates?.updated||null,rateSource:savedRates?.source||'备用汇率',rateStale:!savedRates};
let nextRefreshAt = null;
let serverRefreshInProgress = false;
let refreshInProgress = false;
const toastQueue = [];
let toastShowing = false;
function showNextRefreshToast() {
  if (toastShowing || !toastQueue.length) return;
  const toast = $('#toast');
  if (!toast) return;
  toastShowing = true;
  const { title, detail } = toastQueue.shift();
  toast.querySelector('b').textContent = title;
  toast.querySelector('small').textContent = detail;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toastShowing = false;
      showNextRefreshToast();
    }, 350);
  }, 2600);
}
function queueRefreshToast(group, results) {
  const updated = results.filter(result => result.ok).length;
  const title = updated === results.length ? `${group} 已更新` : updated ? `${group} 部分更新` : `${group} 更新失败`;
  const detail = results.map(result => `${result.label}：${result.ok ? '已更新' : '缓存/失败'}`).join(' · ');
  toastQueue.push({ title, detail });
  showNextRefreshToast();
}
async function scheduleNextRefresh() {
  await syncCollectorRefreshMinutes();
}
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
const isPsPlatform = p => p === 'ps5' || p === 'ps4';
const isPsHk = () => (state.platform === 'ps5' && state.psStore === 'hk') || state.platform === 'ps4';
const isPsJp = () => state.platform === 'ps5' && state.psStore === 'jp';
const activeSteamKey = () => state.steamRegion === 'global' ? 'steam_global' : 'steam';
const activeNintendoKey = () => state.nintendoStore === 'hk' ? `${state.platform}_hk` : state.platform;
const isNintendoHk = () => state.platform.startsWith('switch') && state.nintendoStore === 'hk';
const activeHistoryKey = () => state.platform.startsWith('switch') ? activeNintendoKey() : state.platform === 'steam' ? activeSteamKey() : state.platform === 'ps5' ? `ps5_${state.psStore}` : state.platform==='ps4'?'ps5_hk':state.platform;
const currency=()=>isPsHk()||isNintendoHk()?'HKD':state.platform==='steam'?'CNY':'JPY';
const money=n=>isPsHk()||isNintendoHk()?`HK$ ${Number(n).toFixed(n%1?2:0)}`:state.platform==='steam'?(n===0?'免费':`¥ ${Number(n).toLocaleString('zh-CN',{minimumFractionDigits:n%1?2:0,maximumFractionDigits:2})}`):`¥ ${Math.round(n).toLocaleString('ja-JP')}`;
const cny=n=>`CN¥ ${(n*state.rates[currency()]).toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2})}`;

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify({
      auto: state.auto,
      interval: state.interval
    }));
  } catch (e) {
    console.warn('保存刷新设置失败：', e);
  }
}

/* ================= 历史价格存储与阶梯走势图逻辑 ================= */
/* ================= 真实价格追踪与变动记录逻辑 ================= */

function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

function coverImageAttributes(url) {
  return `class="cover-image" onload="this.classList.add('cover-ready')" ${window.GameCoverCache ? 'data-cover-url' : 'src'}="${escapeHtml(url)}"`;
}

function gameRecordMoney(game,value) {
  if(value==null)return '暂无价格记录';
  const code=game.historyCurrency;
  if(!code)return money(value);
  return `${code==='HKD'?'HK$':'¥'} ${Number(value).toLocaleString(code==='JPY'?'ja-JP':'zh-CN',{
    minimumFractionDigits:code==='JPY'?0:Number(value)%1?2:0,maximumFractionDigits:code==='JPY'?0:2})}`;
}
function getGameKey(game, platform) {
  const plat = platform || (state.platform === 'ps5' ? `ps5_${state.psStore}` : state.platform) || 'unknown';
  const idOrName = game.id || game.name;
  return `${plat}:${idOrName}`;
}

let serverPriceHistories = (()=>{try{return JSON.parse(localStorage.getItem('game-pulse-price-history')) || {}}catch{return {}}})();
const historyRequests = new Map();
const historyFetchedAt=new Map();
const fullHistoryFetchedAt=new Map();
let visibleHistoryTimer=null;
async function fetchPriceHistories(key) {
  const keys=key?[key]:[...new Set($$('.spark-cell').map(cell=>`${activeHistoryKey()}:${cell.dataset.id||cell.dataset.game}`))]
    .filter(item=>Date.now()-(historyFetchedAt.get(item)||0)>30000).slice(0,100);
  if(!keys.length)return;
  const requestKey = keys.join('|')+(key?'full':'6');
  if (historyRequests.has(requestKey)) return historyRequests.get(requestKey);
  keys.forEach(item=>historyFetchedAt.set(item,Date.now()));
  const task = loadPriceHistories(keys,Boolean(key)).catch(error=>{keys.forEach(item=>historyFetchedAt.delete(item));throw error;}).finally(()=>historyRequests.delete(requestKey));
  historyRequests.set(requestKey, task);
  return task;
}
async function loadPriceHistories(keys,full) {
  const params=new URLSearchParams();keys.forEach(key=>params.append('key',key));
  if(!full){const since=new Date();since.setMonth(since.getMonth()-6);params.set('since',since.toISOString());}
  const response = await fetch(`${apiBase}/api/prices/history?${params}`, { cache: 'no-store', signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error('历史价格读取失败');
  const payload = await response.json();
  if (!payload.ok) throw new Error('历史价格读取失败');
  for(const [key,cursor] of Object.entries(payload.continuations||{})){
    let after=cursor;
    while(after){
      const next=await fetch(`${apiBase}/api/prices/history?key=${encodeURIComponent(key)}&after=${encodeURIComponent(after)}`,{cache:'no-store',signal:AbortSignal.timeout(8000)});
      if(!next.ok)throw new Error('历史价格读取失败');
      const page=await next.json();
      payload.histories[key].push(...page.histories[key]);after=page.continuations?.[key];
    }
  }
  for(const [key,records] of Object.entries(payload.histories)){
    if(!full&&fullHistoryFetchedAt.has(key)){
      const merged=new Map((serverPriceHistories[key]||[]).map(record=>[record.date,record]));
      records.forEach(record=>merged.set(record.date,record));
      serverPriceHistories[key]=[...merged.values()].sort((a,b)=>Date.parse(a.date)-Date.parse(b.date));
    }else if(JSON.stringify(serverPriceHistories[key])!==JSON.stringify(records)) serverPriceHistories[key]=records;
    const gaps=payload.rankingGaps?.[key]||[];
    if(JSON.stringify(serverPriceHistories[key].rankingGaps||[])!==JSON.stringify(gaps))serverPriceHistories[key]=[...serverPriceHistories[key]];
    serverPriceHistories[key].rankingGaps=gaps;
    if(full)fullHistoryFetchedAt.set(key,Date.now());
  }
  const cachedKeys=Object.keys(serverPriceHistories);
  for(const key of cachedKeys.slice(0,Math.max(0,cachedKeys.length-200))){delete serverPriceHistories[key];fullHistoryFetchedAt.delete(key);historyFetchedAt.delete(key);}
  const persist = ()=>{try{const recent=Object.fromEntries(Object.entries(serverPriceHistories).slice(-100).map(([key,records])=>[key,records.slice(-120)]));localStorage.setItem('game-pulse-price-history',JSON.stringify(recent))}catch{}};
  if (window.requestIdleCallback) window.requestIdleCallback(persist, {timeout:2000});
  else setTimeout(persist,0);
  return true;
}
function getGamePriceHistory(game, platform) {
  return serverPriceHistories[getGameKey(game, platform)] || [];
}
function recordAllCurrentGames() {}

const dailyHistoryCache = new WeakMap();
const chartModelCache = new WeakMap();
const priceChartDateFormat = new Intl.DateTimeFormat('zh-CN', {timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'});
let chartRange = 6;
function buildPriceChartModel(history, now = Date.now(), months = 6) {
  const dayTime = value => Math.floor((Number(new Date(value)) + 28800000) / 86400000) * 86400000 - 28800000;
  const today = dayTime(now);
  const cacheKey = `${today}:${months}`;
  const cachedModels = chartModelCache.get(history);
  if (cachedModels?.has(cacheKey)) return cachedModels.get(cacheKey);
  let daily = dailyHistoryCache.get(history);
  if (!daily) {
  const days = new Map();
  for (const record of [...history].sort((a, b) => Date.parse(a.date) - Date.parse(b.date))) {
    const time = dayTime(record.date);
    if (Number.isFinite(time) && Number.isFinite(record.price)) days.set(time, { ...record, time });
  }
    daily = [...days.values()];
    dailyHistoryCache.set(history,daily);
  }
  if (!daily.length) return null;
  const end = Math.max(today, daily.at(-1).time);
  const startDate = new Date(today + 28800000);
  if (months) {
    const day = startDate.getUTCDate();
    startDate.setUTCDate(1);
    startDate.setUTCMonth(startDate.getUTCMonth()-months);
    const lastDay = new Date(Date.UTC(startDate.getUTCFullYear(),startDate.getUTCMonth()+1,0)).getUTCDate();
    startDate.setUTCDate(Math.min(day,lastDay));
  }
  const first = months ? Math.max(startDate.getTime()-28800000,daily[0].time) : daily[0].time;
  const baseline = daily.findLast(record=>record.time < first);
  const records = daily.filter(record=>record.time >= first && record.time <= end);
  if (baseline) records.unshift({...baseline,time:first});
  if (!records.length) return null;
  const low = Math.min(...records.map(record => record.price));
  const high = Math.max(...records.map(record => record.price));
  const margin = Math.max((high - low) * 0.2, high * 0.1, 1);
  const gaps=(history.rankingGaps||[]).map(gap=>({from:dayTime(gap.from),to:gap.to?dayTime(gap.to):Infinity})).filter(gap=>gap.to>first&&gap.from<=end);
  const model = { records, gaps, first, end, low, minimum: Math.max(0, low - margin), maximum: high + margin };
  const models = cachedModels || new Map();
  if (models.size>6) models.clear();
  models.set(cacheKey,model);
  chartModelCache.set(history,models);
  return model;
}

function priceChartPath(model, left, right, top, bottom) {
  const x = time => left + (time - model.first) / Math.max(86400000,model.end - model.first) * (right - left);
  const y = price => bottom - (price - model.minimum) / (model.maximum - model.minimum) * (bottom - top);
  let line = `M ${x(model.records[0].time)} ${y(model.records[0].price)}`;
  for (const record of model.records.slice(1)) line += ` H ${x(record.time)} V ${y(record.price)}`;
  const boundaries=[...new Set([model.first,model.end,...model.records.map(record=>record.time),...(model.gaps||[]).flatMap(gap=>[gap.from,gap.to])])]
    .filter(time=>time>=model.first&&time<=model.end).sort((a,b)=>a-b);
  let solid='',dashed='',index=0;
  const missing=time=>(model.gaps||[]).some(gap=>time>=gap.from&&time<gap.to);
  for(let i=0;i<boundaries.length-1;i++){
    const start=boundaries[i],end=boundaries[i+1];
    while(index+1<model.records.length&&model.records[index+1].time<=start)index++;
    const price=model.records[index].price,segment=`M ${x(start)} ${y(price)} H ${x(end)}`;
    if(missing((start+end)/2))dashed+=segment;else solid+=segment;
    const next=model.records[index+1];
    if(next?.time===end&&next.price!==price){const jump=`M ${x(end)} ${y(price)} V ${y(next.price)}`;if(missing(end))dashed+=jump;else solid+=jump;}
  }
  if(!boundaries.length||boundaries.length===1){const segment=`M ${left} ${y(model.records[0].price)} H ${right}`;if(missing(model.first))dashed=segment;else solid=segment;}
  return { line: line + ` H ${right}`, solid, dashed, x, y };
}

function snapPriceChartPoint(model, fraction) {
  const dayCount = Math.round((model.end-model.first)/86400000);
  const index = Math.round(Math.max(0,Math.min(1,fraction))*dayCount);
  const time = model.first + index*86400000;
  let lo=0,hi=model.records.length;
  while(lo<hi){const mid=(lo+hi)>>>1;if(model.records[mid].time<=time)lo=mid+1;else hi=mid;}
  return {index,time,price:model.records[Math.max(0,lo-1)].price,inGap:(model.gaps||[]).some(gap=>time>=gap.from&&time<gap.to)};
}

function renderMiniSparklineSvg(history) {
  const model = buildPriceChartModel(history || []);
  if (!model) {
    return `<svg class="mini-sparkline" viewBox="0 0 72 16" preserveAspectRatio="none"><line x1="2" y1="8" x2="70" y2="8" stroke="#31524b" stroke-width="1.8" stroke-dasharray="3 3"/></svg>`;
  }
  const { solid,dashed } = priceChartPath(model, 2, 70, 1, 15);
  return `<svg class="mini-sparkline" viewBox="0 0 72 16" preserveAspectRatio="none"><path d="${solid}" fill="none" stroke="var(--mint)" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/><path d="${dashed}" fill="none" stroke="var(--mint)" stroke-width="1.8" stroke-dasharray="3 3"/></svg>`;

}

function trendCell(g) {
  const history = getGamePriceHistory(g, activeHistoryKey());
  if (g.priceAvailable === false && !history.length) return `<span class="game-meta">${isPsPlatform(state.platform)?'暂无售价记录':'暂无国区价格记录'}</span>`;
  const sparkSvg = renderMiniSparklineSvg(history);
  const trendPill = g.discount
    ? `<span class="discount-pill">-${g.discount}%</span>`
    : isPsPlatform(state.platform) ? '<span class="trend-pill same">价格记录</span>'
    : `<span class="trend-pill ${g.trend}">${g.trend === 'up' ? '↑ 上升' : g.trend === 'down' ? '↓ 下降' : '— 持平'}</span>`;
  return `
    <div class="spark-cell" data-id="${escapeHtml(g.id || '')}" data-game="${escapeHtml(g.name)}" title="最近6个月走势 · 点击查看历史价格与记录">
      <div class="spark-meta">
        ${trendPill}
        <span class="spark-hint">走势</span>
      </div>
      ${sparkSvg}
    </div>
  `;
}

function renderStepChart(history, game, container) {
  if (!container) return;
  container.chartCleanup?.();
  container.onpointermove = null;
  container.onpointerleave = null;
  const model = buildPriceChartModel(history, Date.now(), chartRange);
  if (!model) {
    container.innerHTML = '<p class="history-empty">暂无已采集的价格记录</p>';
    return;
  }
  const width = Math.max(260, Math.round(container.clientWidth));
  const height = 240, left = 12, right = width - 66, top = 18, bottom = 202;
  const { first, end, low, minimum, maximum } = model;
  const values = model.records.map(record => record.price);
  const { line, solid, dashed, x, y } = priceChartPath(model, left, right, top, bottom);
  let ticks = '';
  const priceTicks=[...new Set(values)].sort((a,b)=>a-b);
  const priceStride=Math.max(1,Math.ceil(priceTicks.length/6));
  let previousPriceY=-Infinity;
  for (let i=0;i<priceTicks.length;i++) {
    const price=priceTicks[i];
    if(Math.abs(y(price)-previousPriceY)<4&&i!==priceTicks.length-1)continue;
    previousPriceY=y(price);
    const label=i%priceStride===0||i===priceTicks.length-1;
    ticks += `<line x1="${left}" x2="${right}" y1="${y(price)}" y2="${y(price)}" stroke="#23353c"/>${label?`<text x="${right + 7}" y="${y(price) + 4}" fill="#9baeb2" font-size="11">${escapeHtml(gameRecordMoney(game,price))}</text>`:''}`;
  }
  const dateLabel = timestamp => priceChartDateFormat.format(timestamp);
  const dayCount=Math.round((end-first)/86400000);
  const labelStride=Math.max(1,Math.ceil((dayCount+1)/Math.max(2,Math.floor((right-left)/105))));
  for (let i=0;i<=dayCount;i++) {
    const time=first+i*86400000;
    if(i%Math.max(1,Math.ceil(dayCount/Math.max(1,(right-left)/3)))===0||i===dayCount)
      ticks+=`<line x1="${x(time)}" x2="${x(time)}" y1="${bottom}" y2="${bottom+4}" stroke="#536970"/>`;
    if(i%labelStride===0||i===dayCount){
      if(i!==dayCount&&dayCount-i<labelStride&&i!==0)continue;
      ticks += `<text x="${x(time)}" y="226" text-anchor="${i===0?'start':i===dayCount?'end':'middle'}" fill="#9baeb2" font-size="12">${dateLabel(time)}</text>`;
    }
  }
  const startX=x(model.records[0].time);
  container.innerHTML = `<svg class="chart-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${chartRange ? `最近${chartRange}个月` : '全部'}已记录的价格走势">${ticks}<path d="${line} L ${right} ${bottom} L ${startX} ${bottom} Z" fill="var(--mint)" opacity=".08"/><line x1="${startX}" x2="${right}" y1="${y(low)}" y2="${y(low)}" stroke="#3898ec" stroke-dasharray="4 4"/><path d="${solid}" fill="none" stroke="var(--mint)" stroke-width="2" stroke-linejoin="round"/><path d="${dashed}" fill="none" stroke="var(--mint)" stroke-width="2" stroke-dasharray="5 4"/><circle cx="${startX}" cy="${y(values[0])}" r="3" fill="var(--mint)"/><g id="chartCursor" hidden><line y1="${top}" y2="${bottom}" stroke="var(--mint)" stroke-dasharray="2 3"/><circle r="4" fill="var(--mint)"/></g></svg><div class="price-chart-tooltip" hidden></div>`;
  const cursor = container.querySelector('#chartCursor');
  const cursorLine = cursor.querySelector('line');
  const dot = cursor.querySelector('circle');
  const tip = container.querySelector('.price-chart-tooltip');
  let bounds = null, frame = 0, pointerX = 0, lastDayIndex = -1, tipWidth = 190;
  const hideCursor = () => {
    cursor.setAttribute('hidden','');
    tip.hidden = true;
  };
  const drawPointer = () => {
    frame = 0;
    bounds ||= container.getBoundingClientRect();
    const point=snapPriceChartPoint(model,(pointerX-bounds.left-left)/(right-left));
    if(point.index===lastDayIndex)return;
    lastDayIndex=point.index;
    const coordinate=x(point.time);
    cursor.removeAttribute('hidden');
    cursorLine.setAttribute('x1', coordinate); cursorLine.setAttribute('x2', coordinate);
    dot.setAttribute('cx', coordinate); dot.setAttribute('cy', y(point.price));
    tip.hidden = false;
    tip.textContent = dateLabel(point.time) + ' · ' + gameRecordMoney(game,point.price) + (point.inGap?' · 退榜期间，沿用最后记录':'');
    tip.style.transform = `translate3d(${Math.max(0,Math.min(coordinate-tipWidth/2,width-tipWidth))}px,0,0)`;
  };
  container.onpointerenter = () => {bounds=container.getBoundingClientRect();};
  container.onpointermove = event => {
    pointerX=event.clientX;
    if(!frame)frame=requestAnimationFrame(drawPointer);
  };
  container.onpointerleave = () => {
    cancelAnimationFrame(frame);frame=0;bounds=null;lastDayIndex=-1;hideCursor();
  };
  container.chartCleanup = ()=>{cancelAnimationFrame(frame);container.onpointerenter=null;};
}

let activePriceChart = null;
let priceModalRequest = 0;
$('#chartRanges')?.addEventListener('click',event=>{
  const button=event.target.closest('[data-months]');
  if(!button||!activePriceChart)return;
  chartRange=Number(button.dataset.months);
  $$('#chartRanges button').forEach(item=>{const selected=item===button;item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected));});
  renderStepChart(getGamePriceHistory(activePriceChart.game,activePriceChart.platform),activePriceChart.game,$('#chartContainer'));
});
let chartObservedWidth=0;
new ResizeObserver(entries => {
  const width=Math.round(entries[0].contentRect.width);
  if(width===chartObservedWidth)return;
  chartObservedWidth=width;
  if (!activePriceChart) return;
  renderStepChart(getGamePriceHistory(activePriceChart.game, activePriceChart.platform), activePriceChart.game, $('#chartContainer'));
}).observe($('#chartContainer'));
async function openPriceModal(game, {updated=false}={}) {
  const modal = $('#priceHistoryModal');
  if (!modal) return;
  const request = ++priceModalRequest;
  const platform = game.historyPlatform || activeHistoryKey();
  const historyKey=getGameKey(game,platform);
  if(!updated){
    chartRange=6;
    $$('#chartRanges button').forEach(button=>{const selected=button.dataset.months==='6';button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});
  }
  if(!updated && Date.now()-(fullHistoryFetchedAt.get(historyKey)||0)>30000){
    fetchPriceHistories(historyKey).then(()=>{
      if(request===priceModalRequest && !modal.hidden)openPriceModal(game,{updated:true});
    }).catch(error=>console.warn(error.message));
  }
  if (request !== priceModalRequest) return;
  modal.hidden = false;
  activePriceChart = { game, platform };
  const history = getGamePriceHistory(game, platform);
  if(updated){
    $$('.spark-cell').filter(cell=>cell.dataset.id===String(game.id||'')&&cell.dataset.game===game.name)
      .forEach(cell=>{const svg=cell.querySelector('svg');if(svg)svg.outerHTML=renderMiniSparklineSvg(history);});
  }
  const prices = history.map(h => h.price);
  const lowestPrice = prices.length ? Math.min(...prices) : null;
  const originalPrice = game.old || (game.discount ? Math.round(game.price / (1 - game.discount / 100)) : game.price);

  const modalPlat = $('#modalPlatform');
  if (modalPlat) modalPlat.textContent = game.platform || (isPsPlatform(state.platform) ? (state.platform === 'ps4' ? 'PS4' : 'PS5') : state.platform === 'steam' ? 'Steam' : 'Switch');
  const modalTitle = $('#modalGameTitle');
  if (modalTitle) modalTitle.textContent = game.cn || game.name;
  const modalOrig = $('#modalGameOriginal');
  if (modalOrig) modalOrig.textContent = game.name !== game.cn ? game.name : (game.meta || '');

  const coverEl = $('#modalCover');
  const isSteam = game.historyPlatform ? game.historyPlatform.startsWith('steam') : state.platform === 'steam' || game.platform === 'PC';
  const isPs = game.historyPlatform ? game.historyPlatform.startsWith('ps5') : isPsPlatform(state.platform) || game.platform?.includes('PS');
  if (coverEl) {
    coverEl.className = `modal-cover ${isSteam ? 'steam-cover' : isPs ? 'ps-cover' : ''}`;
    coverEl.innerHTML = game.image
      ? `<img ${coverImageAttributes(game.image)} alt="${escapeHtml(game.cn)}">`
      : `<span style="background:${game.color || '#3163b5'}">${escapeHtml(game.cover || 'PS')}</span>`;
  }

  const curPriceEl = $('#modalCurrentPrice');
  if (curPriceEl) {
    curPriceEl.textContent = gameRecordMoney(game,game.price);
    curPriceEl.closest('.modal-metric').querySelector('.m-label').textContent=game.archived?'最近记录售价':'当前售价';
  }
  const curCnyEl = $('#modalCurrentCny');
  if (curCnyEl) curCnyEl.textContent = game.archived ? `记录于 ${formatSourceTime(game.priceUpdatedAt)}` : game.priceAvailable===false?'官方暂未提供独立购买报价':state.platform === 'steam' ? (state.steamRegion === 'global' ? '中国区参考价' : '人民币结算') : `≈ ${cny(game.price)}`;

  const lowPriceEl = $('#modalLowestPrice');
  if (lowPriceEl) lowPriceEl.textContent = lowestPrice == null ? '暂无记录' : gameRecordMoney(game,lowestPrice);
  const lowTagEl = $('#modalLowestTag');
  if (lowTagEl) lowTagEl.textContent = lowestPrice == null ? '' : game.price <= lowestPrice ? (game.archived?'最近记录为建档以来最低价':'当前为建档以来最低价') : `较记录最低高 ${gameRecordMoney(game,game.price - lowestPrice)}`;

  const origPriceEl = $('#modalOriginalPrice');
  if (origPriceEl) {
    origPriceEl.textContent = gameRecordMoney(game,originalPrice);
    origPriceEl.closest('.modal-metric').querySelector('.m-label').textContent=game.archived?'记录原价':'官方原价';
  }
  const discRateEl = $('#modalDiscountRate');
  if (discRateEl) discRateEl.textContent = game.discount ? `${game.archived?'记录时优惠':'已优惠'} ${game.discount}%` : game.archived?'最近记录的定价':'当前官方定价';

  const recCountEl = $('#modalRecordCount');
  if (recCountEl) recCountEl.textContent = `${history.length} 条记录`;

  renderStepChart(history, game, $('#chartContainer'));

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closePriceModal() {
  $('#chartContainer')?.chartCleanup?.();
  ++priceModalRequest;
  activePriceChart = null;
  const modal = $('#priceHistoryModal');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = $('#gameArchiveModal')?.hidden===false?'hidden':'';
}

async function fetchExchangeRates(){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8000);
  try{
    const [jpy,hkd]=await Promise.all(['JPY','HKD'].map(code=>fetch(`https://open.er-api.com/v6/latest/${code}`,{cache:'no-store',signal:controller.signal}).then(r=>{if(!r.ok)throw new Error('rate request failed');return r.json()})));
    if(!jpy.rates?.CNY||!hkd.rates?.CNY)throw new Error('invalid rate response');
    state.rates={JPY:jpy.rates.CNY,HKD:hkd.rates.CNY,CNY:1};state.rateUpdated=jpy.time_last_update_utc||new Date().toISOString();state.rateSource='实时汇率';state.rateStale=false;
  }catch(primaryError){
    try{
      const [jpy,hkd]=await Promise.all(['JPY','HKD'].map(code=>fetch(`https://api.frankfurter.app/latest?from=${code}&to=CNY`,{cache:'no-store',signal:controller.signal}).then(r=>r.json())));
      if(!jpy.rates?.CNY||!hkd.rates?.CNY)throw new Error('invalid fallback response');
      state.rates={JPY:jpy.rates.CNY,HKD:hkd.rates.CNY,CNY:1};state.rateUpdated=jpy.date;state.rateSource='参考汇率';state.rateStale=false;
    }catch{state.rateStale=true}
  }finally{
    clearTimeout(timer);localStorage.setItem('game-pulse-rates',JSON.stringify({rates:state.rates,updated:state.rateUpdated,source:state.rateSource}));
  }
}
async function hydrateCovers(){
  preloadGameCovers();
  const platform=state.platform;
  let targets = [];
  if (platform === 'ps5') {
    const list = state.psStore === 'jp' ? (datasets.ps5_jp || []) : (datasets.ps5 || []);
    targets = list.filter(g => !g.image && !g.imageFailed && g.wiki);
  } else {
    targets = (datasets[platform] || []).filter(g => !g.image && !g.imageFailed && g.wiki);
  }
  if(!targets.length)return;
  await Promise.all(targets.map(async g=>{
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),6000);
    try{
      const r=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(g.wiki)}`,{signal:controller.signal});
      if(!r.ok)throw new Error('cover not found');
      const data=await r.json();
      g.image=data.thumbnail?.source||data.originalimage?.source||null;
      g.imageFailed=!g.image;
    }catch{
      g.imageFailed=true;
    }finally{
      clearTimeout(timer);
    }
  }));
  if(state.platform===platform)render();
  preloadGameCovers();
}
function preloadGameCovers(){
  if(!window.GameCoverCache)return;
  const keys=['steam','ps5_with_ps4','steam_global','ps5_jp_with_ps4','switch1','switch1_hk','switch2','switch2_hk'];
  const lists=keys.map(key=>datasets[key]||[]),urls=[];
  // Round robin across regions so every platform's first covers start warming early.
  for(let offset=0;offset<Math.max(0,...lists.map(list=>list.length));offset++)
    for(const list of lists)if(list[offset]?.image)urls.push(list[offset].image);
  window.GameCoverCache.preload(urls);
}
function normalizeSearchText(value) {
  return String(value ?? '').replace(/[™®©]/g, '').normalize('NFKC').toLowerCase()
    .replace(/[\p{P}\p{Z}\p{Cf}\s™®©]/gu, '');
}
function matchesGameSearch(game, query) {
  const needle = normalizeSearchText(query);
  if (!needle) return true;
  const entries = [game, game.primaryGame, ...(game.editions || [])].filter(Boolean);
  if (!matchesGameSearch.aliases) {
    const aliases = new Map();
    for (const [name, cn] of Object.entries(chineseTitleMap)) {
      const key = normalizeSearchText(cn);
      if (!key) continue;
      if (!aliases.has(key)) aliases.set(key, []);
      aliases.get(key).push(name);
    }
    matchesGameSearch.aliases = aliases;
  }
  return entries.some(entry => [
    entry.name, entry.cn, chineseTitleMap[entry.name], entry.rawName,
    entry.originalName, entry.title, entry.editionName, entry.langLabel,
    entry.meta, entry.platform, entry.hasChinese ? '支持中文' : '',
    ...(matchesGameSearch.aliases.get(normalizeSearchText(chineseTitleMap[entry.name] || entry.cn || entry.name)) || [])
  ].some(value => value && normalizeSearchText(value).includes(needle)));
}
function currentData(){
  let data;
  if (state.platform === 'ps5') {
    if (state.psStore === 'jp') {
      data = state.includePs4
        ? [...(datasets.ps5_jp_with_ps4 || datasets.ps5_jp || [])]
        : [...(datasets.ps5_jp || [])];
    } else {
      data = state.view === 'ps4'
        ? [...(datasets.ps4 || [])]
        : (state.includePs4 ? [...(datasets.ps5_with_ps4 || datasets.ps5 || [])] : [...(datasets.ps5 || [])]);
    }
  } else if (state.platform === 'ps4') {
    data = [...(datasets.ps4 || [])];
  } else if (state.platform === 'steam') {
    data = [...(datasets[activeSteamKey()] || [])];
  } else {
    data = [...(datasets[state.platform.startsWith('switch') ? activeNintendoKey() : state.platform] || [])];
  }

  // PS和Steam付费榜与免费榜分别编号，搜索、折扣及排序沿用所属榜单序号。
  if (isPsPlatform(state.platform) || state.platform === 'steam') {
    data = state.view === 'free'
      ? data.filter(x => x.hasFreeEdition || x.price === 0 || x.isFree)
      : data.filter(x => (Number(x.price) > 0 || (state.platform === 'steam' && state.steamRegion === 'global' && x.priceAvailable === false)) && !x.isFree);
  }
  data.sort((a,b) => a.rank - b.rank);
  data = data.map((game, index) => ({...game, displayRank:index + 1}));
  if (state.view === 'free') {
    data = data
      .filter(x => x.hasFreeEdition || x.price === 0 || x.isFree)
      .map(x => x.freeGame ? {...x.freeGame, displayRank:x.displayRank} : x)
      .filter(x => x.price === 0 || x.isFree);
  } else if (state.view === 'deals') {
    data = data.filter(x => x.price > 0 && !x.isFree && x.discount > 0);
  } else if (state.view === 'ps4') {
    // PS4 视图展示 PS4 游戏
  } else {
    // 默认游戏榜只显示付费游戏，免费/Demo 只在免费视图中显示。
    data = data.filter(x => (x.price > 0 || (isPsPlatform(state.platform) && x.priceAvailable===false) || (state.platform === 'steam' && state.steamRegion === 'global' && x.priceAvailable === false)) && !x.isFree);
  }

  if (state.sort === 'priceAsc') data.sort((a,b) => a.price - b.price);
  else if (state.sort === 'discount') data.sort((a,b) => b.discount - a.discount || a.rank - b.rank);
  else data.sort((a,b) => a.rank - b.rank);
  if (state.query) data = data.filter(x => matchesGameSearch(x, state.query));
  state.filteredCount = data.length;
  state.pageTotal = Math.max(1, Math.ceil(data.length / 50));
  state.page = Math.min(state.page, state.pageTotal);
  const start = (state.page - 1) * 50;
  return data.slice(start, start + 50);
}

const priceCell=(g,{inlinePlatform=false}={})=>{
  const platformPrefix = inlinePlatform ? '<span class="mobile-price-platform">PC</span> · ' : '';
  if (g.priceAvailable === false) {
    return isPsPlatform(state.platform)?'<div class="price-stack"><span class="price-main">暂未提供售价</span></div>':`<div class="price-stack"><span class="price-main">国区未定价</span><span class="price-cny">${platformPrefix}全球排名仍有效</span></div>`;
  }
  if (g.price === 0) {
    return `<div class="price-stack"><span class="price-main" style="color:var(--steam-mint, #66c0f4);font-weight:700">免费游玩</span><span class="price-cny">${platformPrefix}Free to Play</span></div>`;
  }
  return `<div class="price-stack">${g.discount?`<span class="deal-chip">-${g.discount}%</span>`:''}<span class="price-main">${money(g.price)}</span>${g.old?`<span class="price-old">${money(g.old)}</span>`:''}<span class="price-cny">${platformPrefix}${state.platform==='steam'?(state.steamRegion==='global'?'中国区参考价':'人民币定价'):`≈ ${cny(g.price)}`}</span></div>`;
};

function groupPriceCell(g) {
  if (g.price === 0 && (!g.maxPrice || g.maxPrice === 0)) {
    return `<div class="price-stack"><span class="price-main" style="color:var(--steam-mint, #66c0f4);font-weight:700">免费游玩</span><span class="price-cny">Free to Play</span></div>`;
  }
  const hasDiscount = g.discount > 0;
  const hasRange = g.maxPrice != null && g.maxPrice > g.price;
  return `
    <div class="price-stack">
      ${hasDiscount ? `<span class="deal-chip">最高 -${g.discount}%</span>` : ''}
      <span class="price-main">${money(g.price)} <small style="font-size:11px;color:#789098;font-weight:normal">起</small></span>
      ${hasRange ? `<span class="price-old" style="text-decoration:none;color:#7e959d;font-size:11px">${money(g.price)} ~ ${money(g.maxPrice)}</span>` : (g.old ? `<span class="price-old">${money(g.old)}</span>` : '')}
      <span class="price-cny">≈ ${cny(g.price)} 起</span>
    </div>
  `;
}

function mobileGameActions(g,{hidePlatform=false,platformLabels='',leadingDiscount=false}={}) {
  const url = g.url || (isPsJp() ? 'https://store.playstation.com/ja-jp/pages/browse' : isPsHk() ? 'https://store.playstation.com/zh-hant-hk/pages/browse' : 'https://store-jp.nintendo.com/software/ranking/');
  return `<span class="mobile-game-actions">${leadingDiscount && g.discount ? `<span class="deal-chip">-${g.discount}%</span>` : ''}${hidePlatform ? '' : `<span class="mobile-platform-line"><span class="mobile-platform">${escapeHtml(g.platform || '')}</span>${platformLabels}</span>`}<a href="${escapeHtml(url)}" target="_blank" rel="noopener" aria-label="前往官方商店">商店 <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7M14 11a5 5 0 0 0-7.1 0l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7"/></svg></a>${state.view === 'free' ? '' : trendCell(g.primaryGame || g)}</span>`;
}

function mobileWideSide(g) {
  const originalName = stripLanguageParentheses(g.name);
  const hasTranslation = stripLanguageParentheses(g.cn) !== originalName;
  const isSwitch = g.platform?.startsWith('Switch');
  const isSteam = g.platform === 'PC';
  const badges = `${isSwitch ? '<span class="edition-badge">数字版</span>' : ''}${g.hasChinese ? '<span class="lang-chip lang-zh">支持中文</span>' : ''}`;
  return `<div class="mobile-wide-side">${isSwitch || isSteam ? `<span class="mobile-wide-title" title="${escapeHtml(g.cn)}">${escapeHtml(stripLanguageParentheses(g.cn))}</span>` : ''}${hasTranslation ? `<span class="mobile-wide-name" title="${escapeHtml(originalName)}">${escapeHtml(originalName)}</span>` : ''}<div class="mobile-game-price">${priceCell(g,{inlinePlatform:isSteam})}</div>${!isSwitch && badges ? `<div class="mobile-wide-badges">${badges}</div>` : ''}${mobileGameActions(g,{platformLabels:isSwitch ? badges : '',leadingDiscount:isSwitch})}</div>`;
}

function renderRow(g) {
  const isFreeView = state.view === 'free';
  const hasOriginalName = stripLanguageParentheses(g.name) !== stripLanguageParentheses(g.cn);
  if (g.isGroup) {
    return `
      <tr class="game-group-row">
        <td><span class="rank ${!isPsPlatform(state.platform)&&(g.displayRank ?? g.rank)<=3?'top':''}">${String(g.displayRank ?? g.rank).padStart(2,'0')}</span></td>
        <td>
          <div class="game-cell ${hasOriginalName ? '' : 'no-original-name'}">
            <span class="cover ps-cover" style="background:linear-gradient(135deg,${g.color},#172128)">
              ${g.image ? `<img ${coverImageAttributes(g.image)} alt="${escapeHtml(g.cn)} 封面" loading="lazy" onerror="this.remove()">` : `<span>${g.cover}</span>`}
            </span>
            <div class="game-copy">
              <span class="game-name">${escapeHtml(stripLanguageParentheses(g.cn))}</span>
              ${hasOriginalName ? `<span class="game-original">${escapeHtml(stripLanguageParentheses(g.name))}</span>` : ''}
              <div class="mobile-game-price">${groupPriceCell(g)}</div>
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:4px">
                ${isPsJp() ? '' : (g.meta ? `<span class="game-meta">${g.meta}</span>` : '')}
                <button type="button" class="editions-toggle-btn" data-target="drawer-${g.groupId}" aria-expanded="false" title="点击展开/收起该游戏的所有具体版本">
                  <span>包含 ${g.editions.length} 个版本</span>
                  <span class="toggle-arrow">▼</span>
                </button>
                ${g.hasChinese ? `<span class="lang-chip lang-zh">支持中文</span>` : ''}
                ${mobileGameActions(g)}
              </div>
            </div>
          </div>
        </td>
        <td><span class="platform-chip">${g.platform}</span></td>
        <td>${groupPriceCell(g)}</td>
        ${!isFreeView ? `<td>${trendCell(g.primaryGame || g)}</td>` : ''}
        <td><a class="store-link" href="${g.url}" target="_blank" rel="noopener" aria-label="前往官方商店"><svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7M14 11a5 5 0 0 0-7.1 0l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7"/></svg></a></td>
      </tr>
      <tr id="drawer-${g.groupId}" class="edition-drawer-row" hidden>
        <td colspan="${isFreeView ? 5 : 6}" class="edition-drawer-cell">
          <div class="editions-card">
            <div class="editions-card-header">
              <span><b>${escapeHtml(stripLanguageParentheses(g.cn))}</b> · 全部收录版本 (${g.editions.length} 款)</span>
              ${!isFreeView ? '<span style="font-size:11px;color:#78939c">点击「历史价格」可查看专属历史走势</span>' : ''}
            </div>
            <table class="editions-subtable">
              <thead>
                <tr>
                  <th>版本名称</th>
                  <th>适用平台</th>
                  <th>实时售价</th>
                  ${!isFreeView ? '<th class="col-history">历史价格</th>' : ''}
                  <th>商店</th>
                </tr>
              </thead>
              <tbody>
    ${g.editions.map(e => `
                  <tr>
                    <td>
                      <div class="edition-tag">
                        <span class="edition-badge">${escapeHtml(e.editionBadge || e.editionName)}</span>
                        ${e.langLabel ? `<span class="lang-chip lang-${e.langType}">${escapeHtml(e.langLabel)}</span>` : ''}
                        ${(isPsJp() && e.hasChinese) ? `<span class="lang-chip lang-zh">支持中文</span>` : ''}
                      </div>
                      <div class="edition-raw-title">${escapeHtml(stripLanguageParentheses(e.cn || e.rawName || e.name))}</div>
                    </td>
                    <td><span class="platform-chip">${e.platform}</span></td>
                    <td>${priceCell(e)}</td>
                    ${!isFreeView ? `<td>${trendCell(e)}</td>` : ''}
                    <td><a class="store-link" href="${e.url}" target="_blank" rel="noopener" aria-label="前往官方商店"><svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7M14 11a5 5 0 0 0-7.1 0l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7"/></svg></a></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    `;
  }

  const isSteam = state.platform === 'steam' || g.platform === 'PC';
  const isPs = isPsPlatform(state.platform) || g.platform?.includes('PS');
  const coverClass = `cover ${isSteam ? 'steam-cover' : isPs ? 'ps-cover' : isNintendoHk() ? 'hk-cover' : ''}`;
  const isWideCover = isSteam || (!isPs && isNintendoHk());
  return `
    <tr class="${isWideCover ? `wide-cover-row${isSteam ? ' steam-wide-row' : isNintendoHk() && !isPs ? ' hk-wide-row' : ''}` : ''}">
      <td><span class="rank ${!isPsPlatform(state.platform)&&(g.displayRank ?? g.rank)<=3?'top':''}">${String(g.displayRank ?? g.rank).padStart(2,'0')}</span></td>
      <td>
        <div class="game-cell ${hasOriginalName ? '' : 'no-original-name'}">
          ${isWideCover ? '<div class="wide-cover-left">' : ''}
          <span class="${coverClass}" data-fallback="${escapeHtml(g.cover || 'NS')}" style="background:linear-gradient(135deg,${g.color},#172128)">
            ${g.image ? `<img ${coverImageAttributes(g.image)} alt="${escapeHtml(g.cn)} 封面" loading="lazy" onerror="this.remove()">` : `<span>${escapeHtml(g.cover || 'NS')}</span>`}
          </span>
          <div class="game-copy">
            <span class="game-name">${escapeHtml(stripLanguageParentheses(g.cn))}</span>
            ${hasOriginalName ? `<span class="game-original">${escapeHtml(stripLanguageParentheses(g.name))}</span>` : ''}
            <div class="mobile-game-price">${priceCell(g)}</div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:4px">
              ${(state.platform.startsWith('switch') || g.platform?.startsWith('Switch') || g.meta === '数字版' || (g.meta && g.meta.includes('下载版')))
                ? `<span class="edition-badge">数字版</span>`
                : (isPs && isFreeView
                  ? (isPsDemoGame(g) ? '<span class="edition-badge">Demo</span>' : '')
                  : (g.editionBadge ? `<span class="edition-badge">${escapeHtml(g.editionBadge)}</span>` : (isPsJp() ? '' : (g.meta ? `<span class="game-meta">${g.meta}</span>` : ''))))}
              ${g.hasChinese ? `<span class="lang-chip lang-zh">支持中文</span>` : ''}
              ${mobileGameActions(g)}
            </div>
          </div>
          ${isWideCover ? '</div>' : ''}
          ${isWideCover ? mobileWideSide(g) : ''}
        </div>
      </td>
      <td><span class="platform-chip ${g.platform === 'PS4' ? 'ps4-chip' : ''}">${g.platform}</span></td>
      <td>${priceCell(g)}</td>
      ${!isFreeView ? `<td>${trendCell(g)}</td>` : ''}
      <td><a class="store-link" href="${g.url||(isPsJp()?'https://store.playstation.com/ja-jp/pages/browse':isPsHk()?'https://store.playstation.com/zh-hant-hk/pages/browse':'https://store-jp.nintendo.com/software/ranking/')}" target="_blank" rel="noopener" aria-label="前往官方商店"><svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1 0l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7M14 11a5 5 0 0 0-7.1 0l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7"/></svg></a></td>
    </tr>
  `;
}

function render(){
  const isNintendo=state.platform.startsWith('switch');
  const isPs=state.platform==='ps5' || state.platform==='ps4';
  const isHk=isPsHk();
  const isJp=isPsJp();
  const isPs4View=isHk && state.view==='ps4';

  const psTabs = $('#psStoreTabs');
  const nintendoTabs = $('#nintendoStoreTabs');
  const steamTabs = $('#steamRegionTabs');
  const singleRegionTab = $('#singleRegionTab');
  if (nintendoTabs) {
    nintendoTabs.style.display = isNintendo ? 'flex' : 'none';
    $$('#nintendoStoreTabs .subtab').forEach(tab => {
      const active = tab.dataset.nintendoStore === state.nintendoStore;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
  }
  if (state.platform === 'ps5') {
    if (singleRegionTab) singleRegionTab.style.display = 'none';
    if (steamTabs) steamTabs.style.display = 'none';
    if (psTabs) {
      psTabs.style.display = 'flex';
      $$('#psStoreTabs .subtab').forEach(t => {
        const store = t.dataset?.psStore || t.getAttribute?.('data-ps-store');
        const isActive = store === state.psStore;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', String(isActive));
      });
    }
  } else if (state.platform === 'steam') {
    if (psTabs) psTabs.style.display = 'none';
    if (singleRegionTab) singleRegionTab.style.display = 'none';
    if (steamTabs) {
      steamTabs.style.display = 'flex';
      $$('#steamRegionTabs .subtab').forEach(tab => {
        const active = tab.dataset.steamRegion === state.steamRegion;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
      });
    }
  } else {
    if (psTabs) psTabs.style.display = 'none';
    if (steamTabs) steamTabs.style.display = 'none';
    if (singleRegionTab) singleRegionTab.style.display = 'none';
  }

  const includePs4Btn = $('#includePs4Btn');
  if (includePs4Btn) {
    // PS4/PS5 版本默认全部纳入，具体平台在展开版本明细中查看。
    includePs4Btn.style.display = 'none';
  }

  const all = state.platform === 'steam' ? (datasets[activeSteamKey()] || []) : isJp
    ? (state.includePs4 ? (datasets.ps5_jp_with_ps4 || datasets.ps5_jp || []) : (datasets.ps5_jp || []))
    : (isPs4View ? (datasets.ps4 || []) : isPs ? (state.includePs4 ? (datasets.ps5_with_ps4 || datasets.ps5 || []) : (datasets.ps5 || [])) : (datasets[isNintendo ? activeNintendoKey() : state.platform] || []));
  const platformGames = all;
  const paidGames = platformGames.filter(x => Number(x.price) > 0 && !x.isFree);
  const freeGames = platformGames.filter(x => x.hasFreeEdition || x.isFree || (x.price != null && Number(x.price) === 0));
  const deals = paidGames.filter(x => x.discount > 0).sort((a,b) => b.discount - a.discount);
  if (!freeGames.length && state.view === 'free') { state.view = 'ranking'; state.page = 1; }
  $('.toolbar-inner')?.classList.toggle('no-free-games', freeGames.length === 0);
  const lowest = paidGames.length ? Math.min(...paidGames.map(x => x.price)) : 0;

  // 更新「仅看折扣」按钮状态与徽章
  const dealToggleBtn = $('#dealToggleBtn');
  if (dealToggleBtn) {
    const isDeals = state.view === 'deals';
    dealToggleBtn.classList.toggle('active', isDeals);
    dealToggleBtn.setAttribute('aria-pressed', String(isDeals));
  }
  const includeFreeDealsBtn = $('#includeFreeDealsBtn');
  if (includeFreeDealsBtn) {
    includeFreeDealsBtn.hidden = freeGames.length === 0;
    const isFree = state.view === 'free';
    includeFreeDealsBtn.classList.toggle('active', isFree);
    includeFreeDealsBtn.setAttribute('aria-pressed', String(isFree));
  }
  const dealBadge = $('#dealBadge');
  if (dealBadge) {
    dealBadge.textContent = String(deals.length);
  }

  const isFreeView = state.view === 'free';
  $$('th.col-history').forEach(th => { th.hidden = isFreeView; });

  const data = currentData();
  const pageStart = state.filteredCount ? (state.page - 1) * 50 + 1 : 0;
  const pageEnd = Math.min(state.page * 50, state.filteredCount);
  const pageInfo = $('#pageInfo');
  const pagePrev = $('#pagePrev');
  const pageNext = $('#pageNext');
  if (pageInfo) pageInfo.textContent = `${state.page} / ${state.pageTotal}`;
  if (pagePrev) pagePrev.disabled = state.page <= 1;
  if (pageNext) pageNext.disabled = state.page >= state.pageTotal;
  const ranking = nintendoStatus[activeNintendoKey()];
  const steamActiveStatus = state.steamRegion === 'global' ? steamGlobalStatus : steamStatus;
  const capacity = isPs ? paidGames.length : state.platform === 'steam' ? platformGames.filter(x=>!x.isFree).length : isNintendo ? (ranking?.officialLimit || all.length || 50) : (steamActiveStatus?.officialLimit || all.length || 200);
  const rowsHtml=data.map(renderRow).join('');
  const gameRows=$('#gameRows');
  if(gameRows.renderedHtml!==rowsHtml){gameRows.innerHTML=rowsHtml;gameRows.renderedHtml=rowsHtml;}
  $('.rank-col').textContent = '序号';

  $('#emptyState').hidden = data.length > 0;
  $('.table-scroll').hidden = data.length === 0;

  if (data.length === 0) {
    const emptyH3 = $('#emptyState h3');
    const emptyP = $('#emptyState p');
    if (emptyH3 && emptyP) {
      if (state.query) {
        emptyH3.textContent = '没有找到匹配的游戏';
        emptyP.textContent = '换个关键词试试看。';
      } else if (!startupDataReady && !all.length && !isNintendo) {
        emptyH3.textContent = '正在加载游戏榜单';
        emptyP.textContent = '当前平台的数据加载完成后会自动显示。';
      } else if (state.view === 'free') {
        emptyH3.textContent = '当前平台暂无免费榜单游戏';
        emptyP.textContent = '可切换至「付费排行」或「仅看折扣」查看热门特惠。';
      } else if (state.view === 'deals') {
        emptyH3.textContent = '暂无正在打折的游戏';
        emptyP.textContent = '请稍后刷新或查看热销榜。';
      } else if (state.view === 'ps4') {
        emptyH3.textContent = '暂无仅支持 PS4 的游戏';
        emptyP.textContent = '可切换至「港服」查看支持 PS5 的热门游戏。';
      } else {
        emptyH3.textContent = '没有找到游戏';
        emptyP.textContent = '换个关键词试试看。';
      }
    }
  }

  $('#dealBadge').textContent = deals.length;
  if ($('#freeDealsBadge')) $('#freeDealsBadge').textContent = freeGames.length;
  if ($('#freeBadge')) $('#freeBadge').textContent = freeGames.length;

  if (state.view === 'free') {
    $('#gameCount').textContent = String(isPs || state.platform === 'steam' ? capacity : freeGames.length);
    $('#resultSummary').textContent = `显示 ${pageStart}-${pageEnd} / ${state.filteredCount} 款免费游戏`;
  } else if (state.view === 'deals') {
    $('#gameCount').textContent = String(isPs || state.platform === 'steam' ? capacity : deals.length);
    $('#resultSummary').textContent = isJp ? `显示 ${pageStart}-${pageEnd} / ${state.filteredCount} 款日服特惠游戏` : isHk || isNintendoHk() ? `显示 ${pageStart}-${pageEnd} / ${state.filteredCount} 款港服特惠游戏` : `显示 ${pageStart}-${pageEnd} / ${state.filteredCount} 款折扣游戏`;
  } else if (state.view === 'ps4') {
    $('#gameCount').textContent = String(isPs || state.platform === 'steam' ? capacity : data.length);
    $('#resultSummary').textContent = `显示 ${pageStart}-${pageEnd} / ${state.filteredCount} 款仅支持 PS4 游戏`;
  } else {
    $('#gameCount').textContent = String(capacity);
    $('#resultSummary').textContent = isJp ? `显示 ${pageStart}-${pageEnd} / ${state.filteredCount} 款日服热门游戏` : isHk ? `显示 ${pageStart}-${pageEnd} / ${state.filteredCount} 款热门游戏（已自动合并各语言与版本）` : isNintendo ? `显示 ${pageStart}-${pageEnd} / ${state.filteredCount} 款${state.nintendoStore === 'hk' ? '港服' : '日服'}榜单游戏` : `显示 ${pageStart}-${pageEnd} / ${state.filteredCount} 款付费游戏`;
  }

  // 剔除免费游戏后的付费游戏总列表，未打折的按 0% 计入平均
  const paidRankingList = all.filter(g => Number(g.price) > 0 && !g.isFree);
  const totalDiscountSum = paidRankingList.reduce((s, x) => s + (Number(x.discount) || 0), 0);
  const avgDiscountRate = paidRankingList.length ? Math.round(totalDiscountSum / paidRankingList.length) : 0;
  const discountRateEl = $('#discountRate');
  if (discountRateEl) discountRateEl.textContent = `-${avgDiscountRate}%`;
  const discountRateSubEl = $('#discountRateSub');
  if (discountRateSubEl) {
    discountRateSubEl.textContent = `共 ${paidRankingList.length} 款游戏`;
    discountRateSubEl.style.display = '';
  }

  const best = deals[0];
  $('#bestDiscount').textContent = best ? `-${best.discount}%` : '—';
  $('#bestDealName').textContent = best?.cn || '暂无折扣';
  $('#bestDealPrice').innerHTML = best ? `<del>${money(best.old)}</del> ${money(best.price)}<span class="cny-inline">≈ ${cny(best.price)}</span>` : '等待更新';
  $('#discountedCount').innerHTML = `${deals.length} <small>款</small>`;

  const steam = state.platform === 'steam', code = currency(), rate = state.rates[code] || 1;
  $('#tableKicker').textContent = isNintendo
    ? (state.platform === 'switch2' ? 'NINTENDO eSHOP' : 'NINTENDO eSHOP')
    : isPs
    ? 'PLAYSTATION STORE'
    : steam
    ? 'STEAM STORE'
    : 'GAME STORE';

  if (state.view === 'ps4') {
    $('#tableTitle').textContent = 'PS4 精选 · 仅支持 PS4 世代版本';
  } else if (state.view === 'free') {
    $('#tableTitle').textContent = isJp ? 'PS5 免费下载专区' : isHk ? 'PS5 免费下载专区' : steam ? 'Steam 热门免费游戏专区' : `Switch ${state.nintendoStore === 'hk' ? '港服' : '日服'}免费游戏专区`;
  } else if (state.view === 'deals') {
    $('#tableTitle').textContent = isJp ? (state.includePs4 ? 'PS5 & PS4 特惠折扣' : 'PS5 特惠折扣') : isHk ? (state.includePs4 ? 'PS5 & PS4 特惠折扣' : 'PS5 特惠折扣') : steam ? 'Steam 特惠折扣榜' : `Switch ${state.nintendoStore === 'hk' ? '港服' : '日服'}特惠折扣榜`;
  } else {
    $('#tableTitle').textContent = isJp ? (state.includePs4 ? 'PS5 & PS4 日服商店浏览列表' : 'PS5 日服商店浏览列表') : isHk ? (state.includePs4 ? 'PS5 & PS4 港服商店浏览列表' : 'PS5 港服商店浏览列表') : steam ? (state.steamRegion==='global'?'Steam 全球热销榜 · 付费前 200':'Steam 中国区热销榜 · 付费前 200') : `Switch ${state.platform === 'switch2' ? '2' : '1'} ${state.nintendoStore === 'hk' ? '港服' : '日服'}网页排行榜 · ${all.length} 条`;
  }

  $('#regionPill').textContent = isHk || isNintendoHk() ? 'HK · HKD → CNY' : (isJp || isNintendo) ? 'JP · JPY → CNY' : steam && state.steamRegion==='global' ? 'GLOBAL · 中国区参考价' : 'CN · CNY';
  $('#rateValue').textContent = steam ? (state.steamRegion==='global'?'全球排名 · 中国区参考价':'Steam 国区使用人民币定价') : `1 ${code} = ${rate.toFixed(code==='JPY'?5:4)} CNY`;
  $('#rateUpdated').textContent = steam ? (state.steamRegion==='global'?'全球热销名次与中国区售价分别采集':'无需换汇 · 结算以 Steam 为准') : state.rateUpdated ? `${state.rateSource} · ${new Date(state.rateUpdated).toLocaleString('zh-CN',{month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'})}` : '正在获取最新汇率…';
  $('#rateBadge').textContent = steam ? '人民币' : state.rateStale ? '缓存汇率' : '已更新';
  $('#rateBadge').classList.toggle('stale', !steam && state.rateStale);
  $('#rateCardTitle').textContent = steam ? '价格口径' : '实时汇率';
  $('#rateCardNote').textContent = steam
    ? (state.steamRegion === 'global' ? '排名来自 Steam 全球榜，售价是中国区参考价；部分游戏可能未在中国区定价。' : '售价按 Steam 中国区展示，结算请以商店页面为准。')
    : isNintendo ? (ranking?.sourceNote || (isNintendoHk() ? '网页商店排行榜，含游戏与追加内容；与主机 eShop 前100名不同。' : `日服网页排行榜当前提供 ${all.length} 条；与主机 eShop 前100名不同。`)) : '人民币为实时估算价，支付金额可能受发卡行汇率及手续费影响。';
  const sStatus = $('#sourceStatus');
  const lUpdated = $('#lastUpdated');
  const sourceTag = $('#sourceTag');

  let sourceTime = '';
  let sourceLabel = '';
  let isStale = false;

  if (isNintendo) {
    sourceLabel = `Nintendo 网页榜 ${state.nintendoStore === 'hk' ? '港服' : '日服'} (${state.platform === 'switch2' ? 'Switch 2' : 'Switch 1'})`;
    if (ranking?.updatedAt) {
      sourceTime = formatSourceTime(ranking.updatedAt);
      isStale = Boolean(ranking.stale);
    }
  } else if (isJp) {
    sourceLabel = 'PlayStation 5 日服';
    if (ps5JpStatus?.updatedAt) {
      sourceTime = formatSourceTime(ps5JpStatus.updatedAt);
      isStale = Boolean(ps5JpStatus.stale);
    }
  } else if (isHk) {
    sourceLabel = isPs4View ? 'PlayStation 4 港服' : 'PlayStation 5 港服';
    if (ps5Status?.updatedAt) {
      sourceTime = formatSourceTime(ps5Status.updatedAt);
      isStale = Boolean(ps5Status.stale);
    }
  } else {
    sourceLabel = state.steamRegion === 'global' ? 'Steam 全球榜' : 'Steam 中国区';
    if (steamActiveStatus?.updatedAt) {
      sourceTime = formatSourceTime(steamActiveStatus.updatedAt);
      isStale = Boolean(steamActiveStatus.stale);
    }
  }

  if (lUpdated) {
    lUpdated.textContent = sourceTime ? `来源时间：${sourceTime} (${sourceLabel})` : `数据来源：${sourceLabel}`;
    lUpdated.title = `数据来源：${sourceLabel}\n上次采集时间：${sourceTime || '刚刚'}\n状态：${isStale ? '已使用缓存数据' : '官方同步最新'}`;
  }
  if (sourceTag) {
    sourceTag.textContent = isStale ? '缓存数据' : '官方直采';
    sourceTag.style.color = isStale ? '#ffb347' : 'var(--mint)';
    sourceTag.style.background = isStale ? 'rgba(255,179,71,.12)' : 'rgba(var(--accent-rgb),.08)';
  }
  if (sStatus) {
    sStatus.textContent = isStale ? `${sourceLabel} 缓存` : `${sourceLabel} 官方数据`;
  }
  renderRefreshNotice();
  if (!visibleHistoryTimer) visibleHistoryTimer=setTimeout(()=>{
    visibleHistoryTimer=null;
    fetchPriceHistories().then(changed=>{if(changed)render();}).catch(error=>console.warn(error.message));
  },100);
}

async function refresh({notify=false,silent=false}={}){
  if(refreshInProgress)return;
  refreshInProgress=true;
  fetchExchangeRates().then(()=>render()).catch(error=>console.warn('汇率刷新失败：',error));
  const btn=$('#refreshButton');
  if(btn && !silent){btn.disabled=true;btn.classList.add('loading');}
  const sStatus=$('#sourceStatus');
  const lUpdated=$('#lastUpdated');
  if(sStatus && !silent) sStatus.textContent='正在读取最新缓存…';
  if(lUpdated && !silent) lUpdated.textContent='正在同步已发布的榜单…';
  const groups=[
    ['NS1',[
      ['日服',()=>fetchNintendoRanking('switch1')],
      ['港服',()=>fetchNintendoRanking('switch1_hk')]
    ]],
    ['NS2',[
      ['日服',()=>fetchNintendoRanking('switch2')],
      ['港服',()=>fetchNintendoRanking('switch2_hk')]
    ]],
    ['PS5',[
      ['港服',()=>fetchPs5Ranking()],
      ['日服',()=>fetchPs5JpRanking()]
    ]],
    ['Steam',[
      ['中国区',()=>fetchSteamRanking()],
      ['全球',()=>fetchSteamRanking({region:'global'})]
    ]]
  ];
  try{
    await Promise.all([
      ...groups.map(async ([group,platforms]) => {
        const results = await Promise.all(platforms.map(async ([label,fetchRanking]) => ({
          label,
          ok: await fetchRanking().catch(() => false)
        })));
        render();
        hydrateCovers();
        if (notify) queueRefreshToast(group, results);
        return results;
      }),
      fetchPriceHistories().catch(error=>console.warn('历史价格刷新失败：',error))
    ]);
    render();
    hydrateCovers();
  }finally{
    refreshInProgress=false;
    await scheduleNextRefresh();
    if(btn){btn.disabled=false;btn.classList.remove('loading');}
  }
}

$$('.platform-tab').forEach(b=>b.addEventListener('click',async()=>{
  $$('.platform-tab').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-selected',String(x===b))});
  state.platform=b.dataset.platform;
  state.page=1;
  render();
  if(state.platform.startsWith('switch')){
    await fetchNintendoRanking(activeNintendoKey());
    render();
  }else if(state.platform==='ps5'){
    if(state.psStore==='jp'){
      await fetchPs5JpRanking();
    }else{
      await fetchPs5Ranking();
    }
    render();
    hydrateCovers();
  }else if(state.platform==='steam'){
    await fetchSteamRanking({region:state.steamRegion});
    render();
    hydrateCovers();
  }else {
    hydrateCovers();
  }
}));

$$('#nintendoStoreTabs .subtab').forEach(btn => btn.addEventListener('click', async () => {
  const store = btn.dataset.nintendoStore;
  if (!store || state.nintendoStore === store) return;
  state.nintendoStore = store;
  state.page = 1;
  render();
  await fetchNintendoRanking(activeNintendoKey());
  render();
  hydrateCovers();
}));

$$('#steamRegionTabs .subtab').forEach(btn => btn.addEventListener('click', async () => {
  const region = btn.dataset.steamRegion;
  if (!region || state.steamRegion === region) return;
  state.steamRegion = region;
  state.page = 1;
  render();
  await fetchSteamRanking({region});
  render();
}));

$$('#psStoreTabs .subtab').forEach(btn => btn.addEventListener('click', async () => {
  const store = btn.dataset?.psStore || btn.getAttribute?.('data-ps-store');
  if (!store || state.psStore === store) return;
  state.psStore = store;
  state.page = 1;
  $$('#psStoreTabs .subtab').forEach(b => {
    const isActive = b === btn;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-selected', String(isActive));
  });
  render();
  if (state.psStore === 'jp') {
    if (!datasets.ps5_jp || !datasets.ps5_jp.length) {
      await fetchPs5JpRanking();
    }
  } else {
    if (!datasets.ps5 || !datasets.ps5.length) {
      await fetchPs5Ranking();
    }
  }
  render();
  hydrateCovers();
}));

$('#includePs4Btn')?.addEventListener('click', () => {
  state.includePs4 = !state.includePs4;
  render();
});

$('#includeFreeDealsBtn')?.addEventListener('click', () => {
  state.view = state.view === 'free' ? 'ranking' : 'free';
  state.includeFreeInDeals = false;
  state.page = 1;
  render();
});

$('#dealToggleBtn')?.addEventListener('click', () => {
  state.view = state.view === 'deals' ? 'ranking' : 'deals';
  state.includeFreeInDeals = false;
  state.page = 1;
  render();
});
$('#pagePrev')?.addEventListener('click', () => {
  if (state.page > 1) { state.page--; render(); }
});
$('#pageNext')?.addEventListener('click', () => {
  if (state.page < state.pageTotal) { state.page++; render(); }
});
$('#searchInput')?.addEventListener('input',e=>{state.query=e.target.value.trim().toLowerCase();state.page=1;render()});
$('#sortSelect')?.addEventListener('change',e=>{state.sort=e.target.value;state.page=1;render()});

// Modal close triggers
$('#modalCloseBtn')?.addEventListener('click', closePriceModal);
$('#modalBackdrop')?.addEventListener('click', closePriceModal);
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!$('#priceHistoryModal').hidden) closePriceModal();
    else window.GameArchive?.close();
  }
});


// Delegated click for opening modal on spark-cell and toggling editions
$('#gameRows')?.addEventListener('click', e => {
  const toggleBtn = e.target.closest('.editions-toggle-btn');
  if (toggleBtn) {
    e.preventDefault();
    e.stopPropagation();
    const targetId = toggleBtn.dataset.target;
    const drawer = document.getElementById(targetId);
    if (drawer) {
      const isExpanded = !drawer.hidden;
      drawer.hidden = isExpanded;
      toggleBtn.classList.toggle('expanded', !isExpanded);
      toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
      const arrow = toggleBtn.querySelector('.toggle-arrow');
      if (arrow) arrow.textContent = isExpanded ? '▼' : '▲';
    }
    return;
  }

  const cell = e.target.closest('.spark-cell');
  if (!cell) return;
  const gameId = cell.dataset.id;
  const gameName = cell.dataset.game;
  const platList = state.platform === 'ps5'
    ? (state.psStore === 'jp'
        ? (state.includePs4 ? (datasets.ps5_jp_with_ps4 || datasets.ps5_jp || []) : (datasets.ps5_jp || []))
        : (state.view === 'ps4' ? (datasets.ps4 || []) : (state.includePs4 ? (datasets.ps5_with_ps4 || datasets.ps5 || []) : (datasets.ps5 || []))))
    : (datasets[state.platform.startsWith('switch') ? activeNintendoKey() : state.platform === 'steam' ? activeSteamKey() : state.platform] || []);
  let game = null;
  if (gameId) game = platList.find(g => g.id === gameId);
  if (!game && gameName) game = platList.find(g => g.name === gameName);
  if (!game) {
    for (const g of platList) {
      if (g.editions) {
        const found = g.editions.find(ed => (gameId && ed.id === gameId) || (gameName && ed.name === gameName));
        if (found) {
          game = found;
          break;
        }
      }
    }
  }
  if (!game && state.platform === 'ps5') {
    const rawAll = state.psStore === 'jp' ? (datasets.ps5_jp_all || []) : (datasets.ps5_all || []);
    if (gameId) game = rawAll.find(g => g.id === gameId);
    if (!game && gameName) game = rawAll.find(g => g.name === gameName);
  }
  if (game) openPriceModal(game);
});

let startupDataReady = false;
setInterval(()=>syncCollectorRefreshMinutes(),15000);
document.addEventListener('visibilitychange',()=>{
  if(!document.hidden)syncCollectorRefreshMinutes();
});

// Initialize UI controls based on restored settings
const initialAutoBtn = $('#autoToggle');
if (initialAutoBtn) {
  initialAutoBtn.classList.toggle('active', state.auto);
  initialAutoBtn.setAttribute('aria-checked', String(state.auto));
}
const initialIntervalSel = $('#intervalSelect');
if (initialIntervalSel) {
  initialIntervalSel.value = String(state.interval);
}
syncCollectorRefreshMinutes();

let syncingGameTitles = false;
async function syncGameTitles(){
  if(syncingGameTitles || document.hidden)return;
  syncingGameTitles=true;
  try{
    const response=await fetch(`${apiBase}/api/translations`,{cache:'no-store',signal:AbortSignal.timeout(8000)});
    if(!response.ok)return;
    const payload=await response.json();
    let changed=false;
    for(const [name,cn] of Object.entries(payload.titles||{})){
      if(typeof cn==='string' && chineseTitleMap[name]!==cn){chineseTitleMap[name]=cn;matchesGameSearch.aliases=null;changed=true;}
    }
    if(changed){
      const apply=game=>{if(game.platform==='PC'||game.historyPlatform?.startsWith('steam'))game.cn=steamDisplayTitle(game);else if(chineseTitleMap[game.name])game.cn=chineseTitleMap[game.name];for(const edition of game.editions||[])apply(edition);};
      Object.values(datasets).forEach(games=>games.forEach(apply));
      render();
    }
  }catch{}finally{syncingGameTitles=false;}
}
setInterval(syncGameTitles,30000);

// 首屏只依赖 Nintendo 快照。其他平台在首帧之后加载，各自完成后立即显示。
const platformSnapshotLoads = new Map();
function loadPlatformSnapshot(key) {
  if (platformSnapshotLoads.has(key)) return platformSnapshotLoads.get(key);
  restorePlatformCache(key);
  if (datasets[key]?.length) {
    const task = Promise.resolve();
    platformSnapshotLoads.set(key, task);
    render();
    return task;
  }
  const files = {ps5:'ps5-data.js',ps5_jp:'ps5-jp-data.js',steam:'steam-data.js',steam_global:'steam-global-data.js'};
  const task = new Promise(resolve => {
    const script = document.createElement('script');
    const timer = setTimeout(() => { script.remove(); resolve(); }, 10000);
    const version = document.querySelector('meta[name="game-pulse-version"]')?.content;
    script.src = files[key] + (version ? `?v=${encodeURIComponent(version)}` : '');
    script.onload = () => {
      clearTimeout(timer);
      // 已有缓存或联网新数据时，不用随站点发布的旧快照覆盖。
      if (!(datasets[key]?.length)) {
        if (key === 'ps5') preparePsDatasets(window.PS5_HK_GAMES || window.PS5_GAMES || []);
        else if (key === 'ps5_jp') preparePsJpDatasets(window.PS5_JP_GAMES || []);
        else datasets[key] = (key === 'steam' ? window.STEAM_CN_GAMES || [] : window.STEAM_GLOBAL_GAMES || []).map(normalizeSteamGame);
      }
      render();
      resolve();
    };
    script.onerror = () => { clearTimeout(timer); resolve(); };
    document.head.append(script);
  });
  platformSnapshotLoads.set(key, task);
  return task;
}

async function loadOtherPlatform(key) {
  await loadPlatformSnapshot(key);
  if (key === 'ps5') await fetchPs5Ranking();
  else if (key === 'ps5_jp') await fetchPs5JpRanking();
  else await fetchSteamRanking({region:key === 'steam_global' ? 'global' : 'cn'});
  render();
}

render();
// 双帧让浏览器先绘制 Switch 游戏，再开始其他平台和辅助请求。
requestAnimationFrame(() => requestAnimationFrame(() => {
  hydrateCovers();
  syncGameTitles();
  fetchExchangeRates().then(()=>render()).catch(error=>console.warn('汇率刷新失败：',error));
  const rankings = ['switch1','switch2','switch1_hk','switch2_hk'].map(platform =>
    fetchNintendoRanking(platform).then(() => render()));
  const others = ['ps5','ps5_jp','steam','steam_global'].map(loadOtherPlatform);
  Promise.allSettled([...rankings,...others]).then(async () => {
    startupDataReady = true;
    preloadGameCovers();
    await scheduleNextRefresh();
    render();
  });
}));
