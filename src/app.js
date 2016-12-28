var size;
//var stageflag = 0;

var level;
var overreset;


 level = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 7, 1,500, 1, 14, 1,500, 1,500, 1, 13, 1],
    [1,500,500,500,500,500,500,500,500,500,500,500, 1],
    [1,500,500, 1,500, 1,500, 1,500, 1,500,500, 1],
    [1,500,500,500,500,500,500,500,500,500,500,500, 1],
    [1,500, 1,500, 1,500, 1,500, 1,500, 1,500, 1],
    [1,500,500,500,500,500, 10,500,500,500,500,500, 1],
    [1,500,500, 1,500, 1,500, 1,500, 1,500,500, 1],
    [1,500,500, 9,500,500,500,500,500, 8,500,500, 1],
    [1,500, 1,500, 1,500, 1,500, 1,500, 1,500, 1],
    [1, 4,500,500,500,500,500,500,500,500,500,500, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

overreset = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 7, 1, 500, 1, 14, 1,500, 1,500, 1, 13, 1],
    [1,500,500, 500,500,500,500,500,500,500,500,500, 1],
    [1,500,500, 1,500, 1,500, 1,500, 1,500,500, 1],
    [1,500,500,500,500,500,500,500,500,500,500,500, 1],
    [1,500, 1,500, 1,500, 1,500, 1,500, 1,500, 1],
    [1,500,500,500,500,500, 10,500,500,500,500,500, 1],
    [1,500,500, 1,500, 1,500, 1,500, 1,500,500, 1],
    [1,500,500, 9,500,500,500,500,500, 8,500,500, 1],
    [1,500, 1,500, 1,500, 1,500, 1,500, 1,500, 1],
    [1, 4,500,500,500,500,500,500,500,500,500,500, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];



var miss = 0;
var missText;

var miss2 = 3;
var missText2;

//kokoko = level[];
var playerPosition; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var enemyPosition;
var enemyPosition2;
var enemyPosition3;
var enemyPosition4;
var enemyPosition5;
var playerSprite; //プレイヤーのスプライト
var spriteteki;
var spriteteki2;
var spriteteki3;
var spriteteki4;
var spriteteki5;
var cratesArray = []; //配置した木箱のスプライトを配列に保持する
var dotArray = [];
var tekiArray = [];
var tekiArray2 = [];
var tekiArray3 = [];
var tekiArray4 = [];
var tekiArray5 = [];
var spritedot;


var startTouch;
var endTouch;
var swipeTolerance = 10; //スワイプかを判断する閾値
var audioEngine;
var flag = 0;
var pickedTiles = [];
var dot = [];
var stagetext;
var tekikabeflag = 0;
var tekikabeflag2 = 0;
var tekikabeflag3 = 0;
var tekikabeflag4 = 0;
var tekikabeflag5 = 0;
var layer0;
var dottota = 0;
var aotaositaflag = false;
var akataositaflag = false;
var kitaositaflag = false;
var midoritaositaflag = false;
var murasakitaositaflag = false;


var gameScene1 = cc.Scene.extend({
    onEnter: function() {
        this._super();

        layer0 = new gameLayer();
        layer0.init();
        this.addChild(layer0);

        //var enemys = new enemyLayer();
        //this.addChild(enemys);

        //音楽再生エンジン
        audioEngine = cc.audioEngine;
        //bgm再生
        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            //  audioEngine.playMusic(res.bgm_main, true);
            audioEngine.playMusic(res.gamebgm, true);
        }
        //dotした回数
        missText = cc.LabelTTF.create("SCORE "+ miss, "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(missText);
        missText.setPosition(250, 1250);
        missText.setScale(3.5);
        //残機した回数
        missText2 = cc.LabelTTF.create(" 3", "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(missText2);
        missText2.setPosition(230, 1350);
        missText2.setScale(3.5);
        //ステージした回数
        stagetext = cc.LabelTTF.create("STAGE 1", "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(stagetext);
        stagetext.setPosition(600, 1350);
        stagetext.setScale(3.5);
    }
});

var gameLayer = cc.Layer.extend({
    init: function() {
        this._super();
        //スプライトフレームのキャッシュオブジェクトを作成する
        cache = cc.spriteFrameCache;
        //スプライトフレームのデータを読み込む
        cache.addSpriteFrames(res.spritesheet_plist);


        //アンチエイリアス処理を止める
        //        backgroundSprite.getTexture().setAliasTexParameters();




        /*var levelSprite3 = cc.Sprite.create(res.kinoback);
        levelSprite3.setPosition(240, 875);
        levelSprite3.setScale(4, 2.85);
        this.addChild(levelSprite3);*/
        var levelSprite2 = cc.Sprite.create(res.backsiro);
        levelSprite2.setPosition(80, 730);
        levelSprite2.setScale(4.4, 2.2);
        this.addChild(levelSprite2);



        var sprite7 = cc.Sprite.create(res.kakeru);
        sprite7.setPosition(175, 1350);
        sprite7.setScale(1);
        this.addChild(sprite7, 0);

        var sprite8 = cc.Sprite.create(res.paintmansiro1);
        sprite8.setPosition(100, 1350);
        sprite8.setScale(0.3);
        this.addChild(sprite8, 0);

        /*var test = cc.Sprite.create(res.paintmansiro1);
        test.setPosition(200, 1000);
        test.setScale(1.3);
        this.addChild(test, 1);
*/






        /*var sprite9 = cc.Sprite.create(res.suuji3);
        sprite9.setPosition(245, 1350);
        sprite9.setScale(1);
        this.addChild(sprite9, 0);
*/
        /*  var sprite10 = cc.Sprite.create(res.STAGE1);
        sprite10.setPosition(700, 1350);
        sprite10.setScale(1);
        this.addChild(sprite10, 0);
*/
        /*  var sprite11 = cc.Sprite.create(res.SCORE);
        sprite11.setPosition(200, 1250);
        sprite11.setScale(1);
        this.addChild(sprite11, 0);

        var sprite12 = cc.Sprite.create(res.suuji0);
        sprite12.setPosition(445, 1250);
        sprite12.setScale(1);
        this.addChild(sprite12, 0);
*/


        for (i = 0; i < 1; i++) {
            var tile = new MemoryTileue();
            this.addChild(tile, 0);
            //タイルを格子状に配置する計算式
            tile.setPosition(480 + i % 6 * 74, 220 - Math.floor(i / 6) * 74);
            tile.setScale(0.25, 0.25);

        }

        for (i = 0; i < 1; i++) {
            var tile = new MemoryTilemigi();
            this.addChild(tile, 0);
            //タイルを格子状に配置する計算式
            tile.setPosition(615 + i % 6 * 74, 125 - Math.floor(i / 6) * 74);
            tile.setScale(0.25, 0.25);

        }
        for (i = 0; i < 1; i++) {
            var tile = new MemoryTilesita();
            this.addChild(tile, 0);
            //タイルを格子状に配置する計算式
            tile.setPosition(480 + i % 6 * 74, 70 - Math.floor(i / 6) * 74);
            tile.setScale(0.25, 0.25);

        }
        for (i = 0; i < 1; i++) {
            var tile = new MemoryTilehidari();
            this.addChild(tile, 0);
            //タイルを格子状に配置する計算式
            tile.setPosition(345 + i % 6 * 74, 125 - Math.floor(i / 6) * 74);
            tile.setScale(0.25, 0.25);

        }

        for (i = 0; i < 12; i++) {　　　　　　
            cratesArray[i] = [];　 //配列オブジェクトの生成
            dotArray[i] = [];
            tekiArray[i] = [];
            tekiArray2[i] = [];
            tekiArray3[i] = [];
            tekiArray4[i] = [];
            tekiArray5[i] = [];

            for (j = 0; j < 15; j++) {
              //↓この二行でステージ初期化
              var reset = overreset[i][j];
              level[i][j] = reset;
                switch (level[i][j]) {
                    case 0:
                        var spriteyuka = cc.Sprite.create(res.yuka);
                        spriteyuka.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyuka.setScale(0.21);
                        this.addChild(spriteyuka, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;
                    case 1:
                        var spritekabe = cc.Sprite.create(res.kabeblock);
                        spritekabe.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritekabe.setScale(0.19);
                        this.addChild(spritekabe, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;

                    case 500:
                        spritedot = cc.Sprite.create(res.dot);
                        spritedot.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritedot.setScale(0.15);
                        this.addChild(spritedot, 0);

                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = spritedot;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;
                    case 4:

                    case 6:
                        playerSprite = cc.Sprite.create(res.paintmansiro1);
                        playerSprite.setPosition(30 + 75 * j, 1140 - 75 * i);
                        playerSprite.setScale(0.3);
                        this.addChild(playerSprite, 1);
                        //  playerSprite.invulnerability = 0;
                        playerSprite.tekisyoutotu = 0;
                        playerSprite.workingFlag = false;
                        playerSprite.workingFlag2 = false;
                        playerSprite.workingFlag3 = false;
                        playerSprite.workingFlag4 = false;
                        playerSprite.workingFlag5 = false;
                        playerSprite.workingFlag6 = false;
                        playerSprite.iroflag = false;
                        playerSprite.iroflagaka = false;
                        playerSprite.iroflagao = false;
                        playerSprite.iroflagki = false;
                        playerSprite.iroflagmidori = false;
                        playerSprite.iroflagmurasaki = false;
                        playerSprite.schedule(this.working, 0.5);
                        playerSprite.schedule(this.working2, 0.5);
                        playerSprite.schedule(this.working3, 0.5);
                        playerSprite.schedule(this.working4, 0.5);
                        playerSprite.schedule(this.working5, 0.5);
                        playerSprite.schedule(this.working6, 0.5);
                        playerSprite.invulnerability = 0; //無敵モード時間　初期値0
                        this.scheduleUpdate();

                        playerPosition = {
                            x: j,
                            y: i
                        };　　　　　　　　　　　　
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;

                    case 3:
                    case 5:
                        var crateSprite = cc.Sprite.create(cache.getSpriteFrame("crate.png"));
                        crateSprite.setPosition(115 + 25 * j, 285 - 25 * i);
                        crateSprite.setScale(5);
                        this.addChild(crateSprite);
                        cratesArray[i][j] = crateSprite; //(i,j)の位置にcrateSpriteを入れる
                        dotArray[i][j] = null;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;
                    case 7:
                        spriteteki = cc.Sprite.create(res.tekimannakaao);
                        spriteteki.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki.setScale(0.3);
                        this.addChild(spriteteki, 1);
                        spriteteki.workingFlagteki = false;
                        spriteteki.schedule(this.workingteki, 0.5);

                        /*var moveAction = cc.MoveTo.create(10.5, new cc.Point(550, 0));
                        spriteteki.runAction(moveAction);*/
                        enemyPosition = {
                            x: j,
                            y: i
                        };　　
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray[i][j] = spriteteki;
                        dotArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;
                    case 8:
                        var spriteiroyukaao = cc.Sprite.create(res.iroyukaao);
                        spriteiroyukaao.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteiroyukaao.setScale(0.19, 0.18);
                        this.addChild(spriteiroyukaao, 0);
                        cratesArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;

                        break;
                    case 9:
                        var spriteyukaaka = cc.Sprite.create(res.iroyukaaka);
                        spriteyukaaka.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukaaka.setScale(0.19, 0.18);
                        this.addChild(spriteyukaaka, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;
                    case 10:
                        var spriteyukaki = cc.Sprite.create(res.iroyukaki);
                        spriteyukaki.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukaki.setScale(0.19, 0.18);
                        this.addChild(spriteyukaki, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;
                    case 11:
                        var spriteyukamidori = cc.Sprite.create(res.iroyukamidori);
                        spriteyukamidori.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamidori.setScale(0.19, 0.18);
                        this.addChild(spriteyukamidori, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;
                    case 12:
                        var spriteyukamurasaki = cc.Sprite.create(res.iroyukamurasaki);
                        spriteyukamurasaki.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamurasaki.setScale(0.19, 0.18);
                        this.addChild(spriteyukamurasaki, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;
                    case 13:
                        spriteteki2 = cc.Sprite.create(res.tekimannakaaka);
                        spriteteki2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki2.setScale(0.3);
                        this.addChild(spriteteki2, 1);
                        spriteteki2.workingFlagteki2 = false;
                        spriteteki2.schedule(this.workingteki2, 0.5);

                        enemyPosition2 = {
                            x: j,
                            y: i
                        };　　
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = spriteteki2;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        dotArray[i][j] = null;
                        break;
                    case 14:
                        spriteteki3 = cc.Sprite.create(res.tekimannakaki);
                        spriteteki3.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki3.setScale(0.3);
                        this.addChild(spriteteki3, 1);
                        spriteteki3.workingFlagteki3 = false;
                        spriteteki3.schedule(this.workingteki3, 0.5);

                        enemyPosition3 = {
                            x: j,
                            y: i
                        };　　
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = spriteteki3;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        dotArray[i][j] = null;
                        break;
                    case 15:
                        spriteteki4 = cc.Sprite.create(res.tekimannakamidori);
                        spriteteki4.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki4.setScale(0.3);
                        this.addChild(spriteteki4, 1);
                        spriteteki4.workingFlagteki4 = false;
                        spriteteki4.schedule(this.workingteki4, 0.5);

                        enemyPosition4 = {
                            x: j,
                            y: i
                        };　　
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray4[i][j] = spriteteki4;
                        tekiArray3[i][j] = null;
                        tekiArray5[i][j] = null;
                        dotArray[i][j] = null;
                        break;
                    case 16:
                        spriteteki5 = cc.Sprite.create(res.tekimannakamurasaki);
                        spriteteki5.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki5.setScale(0.3);
                        this.addChild(spriteteki5, 1);
                        spriteteki5.workingFlagteki5 = false;
                        spriteteki5.schedule(this.workingteki5, 0.5);

                        enemyPosition5 = {
                            x: j,
                            y: i
                        };　　
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = spriteteki5;
                        dotArray[i][j] = null;
                    default:
                        cratesArray[i][j] = null; //木箱のコード以外の場合は、その場所に木箱がない値としてnullを代入する
                        dotArray[i][j] = null;
                        tekiArray[i][j] = null;
                        tekiArray2[i][j] = null;
                        tekiArray3[i][j] = null;
                        tekiArray4[i][j] = null;
                        tekiArray5[i][j] = null;
                        break;



                }
            }

        }


        /*  var spriteGO = cc.Sprite.create(res.GO);
        //auto spriteGO = Sprite::create(res.GO);
        spriteGO.setPosition(500, 700);
        spriteGO.setScale(2);
        this.addChild(spriteGO, 0);
        //spriteGO->setVisible(false);
*/



        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 8) clear(); // バックスペース ｃｌｅａｒに飛ばす
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 13) over(); // エンター ゲームオーバーに飛ばす
            }
        }, this);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 37) hidariniiku(); // 左に行くよ

            }
        }, this);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 38) ueniiku(); // 上に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 39) miginiiku(); // 右に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 40) sitaniiku(); // 下に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 16) gokesi(); // shiftでgo消し
            }
        }, this);

    },


    update: function(event) {
        if (playerSprite.invulnerability > 0) {
            playerSprite.invulnerability--;
            playerSprite.setOpacity(255 - playerSprite.getOpacity());
        }
    },

    working: function(event) {
        if (playerSprite.iroflag == false) {
            playerSprite.workingFlag = (playerSprite.workingFlag == true) ? false : true;
            if (playerSprite.workingFlag) playerSprite.initWithFile(res.paintmansiro1);
            else playerSprite.initWithFile(res.paintmansiro2);


        }

    },
    working2: function(event) {
        if (playerSprite.iroflagaka == true) {

            playerSprite.workingFlag2 = (playerSprite.workingFlag2 == true) ? false : true;
            if (playerSprite.workingFlag2) playerSprite.initWithFile(res.paintmanaka1);
            else playerSprite.initWithFile(res.paintmanaka2);
            playerSprite.setScale(2.3);



        }
    },
    working3: function(event) {
        if (playerSprite.iroflagao == true) {

            playerSprite.workingFlag3 = (playerSprite.workingFlag3 == true) ? false : true;
            if (playerSprite.workingFlag3) playerSprite.initWithFile(res.paintmanao1);
            else playerSprite.initWithFile(res.paintmanao2);
            playerSprite.setScale(2.3);



        }
    },
    working4: function(event) {
        if (playerSprite.iroflagki == true) {

            playerSprite.workingFlag4 = (playerSprite.workingFlag4 == true) ? false : true;
            if (playerSprite.workingFlag4) playerSprite.initWithFile(res.paintmanki1);
            else playerSprite.initWithFile(res.paintmanki2);
            playerSprite.setScale(2.3);



        }
    },
    working5: function(event) {
        if (playerSprite.iroflagmidori == true) {

            playerSprite.workingFlag5 = (playerSprite.workingFlag5 == true) ? false : true;
            if (playerSprite.workingFlag5) playerSprite.initWithFile(res.paintmanmidori1);
            else playerSprite.initWithFile(res.paintmanmidori2);
            playerSprite.setScale(2.3);



        }
    },
    working6: function(event) {
        if (playerSprite.iroflagmurasaki == true) {

            playerSprite.workingFlag6 = (playerSprite.workingFlag6 == true) ? false : true;
            if (playerSprite.workingFlag6) playerSprite.initWithFile(res.paintmanmurasaki1);
            else playerSprite.initWithFile(res.paintmanmurasaki2);
            playerSprite.setScale(2.3);
        }
    },
    workingteki: function(event) {
        //距離で上下左右回り込むscriptを
        spriteteki.workingFlagteki = (spriteteki.workingFlagteki == true) ? false : true;
        if (spriteteki.workingFlagteki) spriteteki.initWithFile(res.tekiaomigi);
        else spriteteki.initWithFile(res.tekiaohidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPosition.x > enemyPosition.x && tekikabeflag == 0) {
            if (level[enemyPosition.y][enemyPosition.x + 1] == 1 || level[enemyPosition.y - 1][enemyPosition.x] == 7 || level[enemyPosition.y - 1][enemyPosition.x] == 13 || level[enemyPosition.y - 1][enemyPosition.x] == 14 || level[enemyPosition.y - 1][enemyPosition.x] == 15 || level[enemyPosition.y - 1][enemyPosition.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPosition.y >= enemyPosition.y) {
                    tekimove(0, -1);
                } else if (playerPosition.y < enemyPosition.y) {
                    tekimove(0, 1);
                }

            } else {
                tekimove(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPosition.y > enemyPosition.y && tekikabeflag == 0) {
            if (level[enemyPosition.y + 1][enemyPosition.x] == 1 || level[enemyPosition.y - 1][enemyPosition.x] == 7 || level[enemyPosition.y - 1][enemyPosition.x] == 13 || level[enemyPosition.y - 1][enemyPosition.x] == 14 || level[enemyPosition.y - 1][enemyPosition.x] == 15 || level[enemyPosition.y - 1][enemyPosition.x] == 16) {
                if (playerPosition.x > enemyPosition.x) {
                    tekimove(-1, 0);
                } else if (playerPosition.x <= enemyPosition.x) {
                    tekimove(1, 0);
                }
            } else {
                tekimove(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPosition.x < enemyPosition.x && tekikabeflag == 0) {
            if (level[enemyPosition.y][enemyPosition.x - 1] == 1 || level[enemyPosition.y - 1][enemyPosition.x] == 7 || level[enemyPosition.y - 1][enemyPosition.x] == 13 || level[enemyPosition.y - 1][enemyPosition.x] == 14 || level[enemyPosition.y - 1][enemyPosition.x] == 15 || level[enemyPosition.y - 1][enemyPosition.x] == 16) {
                if (playerPosition.y > enemyPosition.y) {
                    tekimove(0, -1);
                } else if (playerPosition.y <= enemyPosition.y) {
                    tekimove(0, 1);
                }
            } else {
                tekimove(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPosition.y < enemyPosition.y || tekikabeflag == 1) {

            if (level[enemyPosition.y - 1][enemyPosition.x] == 1 || level[enemyPosition.y - 1][enemyPosition.x] == 7 || level[enemyPosition.y - 1][enemyPosition.x] == 13 || level[enemyPosition.y - 1][enemyPosition.x] == 14 || level[enemyPosition.y - 1][enemyPosition.x] == 15 || level[enemyPosition.y - 1][enemyPosition.x] == 16) {
                /*  while(level[enemyPosition.y - 1][enemyPosition.x] == 1){
                    tekimove(1, 0);//右
                    console.log("上岩　→移動")
                  }
                  while(level[enemyPosition.y - 1][enemyPosition.x] == 0){
                    tekimove(0, -1);//上
                    console.log("上空白　上移動")

                  }*/
                tekikabeflag = 1;
                tekimove(1, 0);
                if (level[enemyPosition.y - 1][enemyPosition.x] == 1 && level[enemyPosition.y][enemyPosition.x + 1] == 1) {
                    tekimove(0, -1);
                    tekikabeflag = 0;
                }
            } else if (level[enemyPosition.y - 1][enemyPosition.x] == 0 && tekikabeflag == 1) {
                //tekikabeflag = 0;
                tekimove(0, -1);
                console.log("上空白　上移動")
                if (level[enemyPosition.y][enemyPosition.x - 1] == 0 && tekikabeflag == 1) {
                    tekikabeflag = 0;
                }
            } else {
                tekimove(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki: function(event) {
        var spriteteki = new Spriteteki();
        this.addChild(spriteteki);
    },
    removeteki: function(event) {
        aotaositaflag = true;
        audioEngine.playEffect(res.jump03);
        spriteteki.unschedule(this.workingteki);
        this.removeChild(spriteteki);
    },
    //2体目
    workingteki2: function(event) {
        //距離で上下左右回り込むscriptを
        spriteteki2.workingFlagteki2 = (spriteteki2.workingFlagteki2 == true) ? false : true;
        if (spriteteki2.workingFlagteki2) spriteteki2.initWithFile(res.tekiakamigi);

        else spriteteki2.initWithFile(res.tekiakahidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPosition.x > enemyPosition2.x && tekikabeflag2 == 0) {
            if (level[enemyPosition2.y][enemyPosition2.x + 1] == 1 || level[enemyPosition2.y - 1][enemyPosition2.x] == 7 || level[enemyPosition2.y - 1][enemyPosition2.x] == 13 || level[enemyPosition2.y - 1][enemyPosition2.x] == 14 || level[enemyPosition2.y - 1][enemyPosition2.x] == 15 || level[enemyPosition2.y - 1][enemyPosition2.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPosition.y >= enemyPosition2.y) {
                    tekimove2(0, -1);
                } else if (playerPosition.y < enemyPosition2.y) {
                    tekimove2(0, 1);
                }

            } else {
                tekimove2(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPosition.y > enemyPosition2.y && tekikabeflag2 == 0) {
            if (level[enemyPosition2.y + 1][enemyPosition2.x] == 1 || level[enemyPosition2.y - 1][enemyPosition2.x] == 7 || level[enemyPosition2.y - 1][enemyPosition2.x] == 13 || level[enemyPosition2.y - 1][enemyPosition2.x] == 14 || level[enemyPosition2.y - 1][enemyPosition2.x] == 15 || level[enemyPosition2.y - 1][enemyPosition2.x] == 16) {
                if (playerPosition.x > enemyPosition2.x) {
                    tekimove2(-1, 0);
                } else if (playerPosition.x <= enemyPosition2.x) {
                    tekimove2(1, 0);
                }
            } else {
                tekimove2(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPosition.x < enemyPosition2.x && tekikabeflag2 == 0) {
            if (level[enemyPosition2.y][enemyPosition2.x - 1] == 1 || level[enemyPosition2.y - 1][enemyPosition2.x] == 7 || level[enemyPosition2.y - 1][enemyPosition2.x] == 13 || level[enemyPosition2.y - 1][enemyPosition2.x] == 14 || level[enemyPosition2.y - 1][enemyPosition2.x] == 15 || level[enemyPosition2.y - 1][enemyPosition2.x] == 16) {
                if (playerPosition.y > enemyPosition2.y) {
                    tekimove2(0, -1);
                } else if (playerPosition.y <= enemyPosition2.y) {
                    tekimove2(0, 1);
                }
            } else {
                tekimove2(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPosition.y < enemyPosition2.y || tekikabeflag2 == 1) {

            if (level[enemyPosition2.y - 1][enemyPosition2.x] == 1 || level[enemyPosition2.y - 1][enemyPosition2.x] == 7 || level[enemyPosition2.y - 1][enemyPosition2.x] == 13 || level[enemyPosition2.y - 1][enemyPosition2.x] == 14 || level[enemyPosition2.y - 1][enemyPosition2.x] == 15 || level[enemyPosition2.y - 1][enemyPosition2.x] == 16) {
                /*  while(level[enemyPosition.y - 1][enemyPosition.x] == 1){
                    tekimove(1, 0);//右
                    console.log("上岩　→移動")
                  }
                  while(level[enemyPosition.y - 1][enemyPosition.x] == 0){
                    tekimove(0, -1);//上
                    console.log("上空白　上移動")

                  }*/
                tekikabeflag2 = 1;
                tekimove2(1, 0);
                if (level[enemyPosition2.y - 1][enemyPosition2.x] == 1 && level[enemyPosition2.y][enemyPosition2.x + 1] == 1) {
                    tekimove2(0, -1);
                    tekikabeflag2 = 0;
                }
            } else if (level[enemyPosition2.y - 1][enemyPosition2.x] == 0 && tekikabeflag2 == 1) {
                //tekikabeflag = 0;
                tekimove2(0, -1);
                console.log("上空白　上移動")
                if (level[enemyPosition2.y][enemyPosition2.x - 1] == 0 && tekikabeflag2 == 1) {
                    tekikabeflag2 = 0;
                }
            } else {
                tekimove2(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki2: function(event) {
        var spriteteki2 = new Spriteteki2();
        this.addChild(spriteteki2);
    },
    removeteki2: function(event) {
        akataositaflag = true;
        audioEngine.playEffect(res.jump03);
        spriteteki2.unschedule(this.workingteki2);
        this.removeChild(spriteteki2);
    },
    //3体目
    workingteki3: function(event) {
        //距離で上下左右回り込むscriptを
        spriteteki3.workingFlagteki3 = (spriteteki3.workingFlagteki3 == true) ? false : true;
        if (spriteteki3.workingFlagteki3) spriteteki3.initWithFile(res.tekikimigi);
        else spriteteki3.initWithFile(res.tekikihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPosition.x > enemyPosition3.x && tekikabeflag3 == 0) {
            if (level[enemyPosition3.y][enemyPosition3.x + 1] == 1 || level[enemyPosition3.y - 1][enemyPosition3.x] == 7 || level[enemyPosition3.y - 1][enemyPosition3.x] == 13 || level[enemyPosition3.y - 1][enemyPosition3.x] == 14 || level[enemyPosition3.y - 1][enemyPosition3.x] == 15 || level[enemyPosition3.y - 1][enemyPosition3.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPosition.y >= enemyPosition3.y) {
                    tekimove3(0, -1);
                } else if (playerPosition.y < enemyPosition3.y) {
                    tekimove3(0, 1);
                }

            } else {
                tekimove3(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPosition.y > enemyPosition3.y && tekikabeflag3 == 0) {
            if (level[enemyPosition3.y + 1][enemyPosition3.x] == 1 || level[enemyPosition3.y - 1][enemyPosition3.x] == 7 || level[enemyPosition3.y - 1][enemyPosition3.x] == 13 || level[enemyPosition3.y - 1][enemyPosition3.x] == 14 || level[enemyPosition3.y - 1][enemyPosition3.x] == 15 || level[enemyPosition3.y - 1][enemyPosition3.x] == 16) {
                if (playerPosition.x > enemyPosition3.x) {
                    tekimove3(-1, 0);
                } else if (playerPosition.x <= enemyPosition3.x) {
                    tekimove3(1, 0);
                }
            } else {
                tekimove3(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPosition.x < enemyPosition3.x && tekikabeflag3 == 0) {
            if (level[enemyPosition3.y][enemyPosition3.x - 1] == 1 || level[enemyPosition3.y - 1][enemyPosition3.x] == 7 || level[enemyPosition3.y - 1][enemyPosition3.x] == 13 || level[enemyPosition3.y - 1][enemyPosition3.x] == 14 || level[enemyPosition3.y - 1][enemyPosition3.x] == 15 || level[enemyPosition3.y - 1][enemyPosition3.x] == 16) {
                if (playerPosition.y > enemyPosition3.y) {
                    tekimove3(0, -1);
                } else if (playerPosition.y <= enemyPosition3.y) {
                    tekimove3(0, 1);
                }
            } else {
                tekimove3(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPosition.y < enemyPosition3.y || tekikabeflag3 == 1) {

            if (level[enemyPosition3.y - 1][enemyPosition3.x] == 1 || level[enemyPosition3.y - 1][enemyPosition3.x] == 7 || level[enemyPosition3.y - 1][enemyPosition3.x] == 13 || level[enemyPosition3.y - 1][enemyPosition3.x] == 14 || level[enemyPosition3.y - 1][enemyPosition3.x] == 15 || level[enemyPosition3.y - 1][enemyPosition3.x] == 16) {

                tekikabeflag3 = 1;
                tekimove3(1, 0);
                if (level[enemyPosition3.y - 1][enemyPosition3.x] == 1 && level[enemyPosition3.y][enemyPosition3.x + 1] == 1) {
                    tekimove3(0, -1);
                    tekikabeflag3 = 0;
                }
            } else if (level[enemyPosition3.y - 1][enemyPosition3.x] == 0 && tekikabeflag3 == 1) {
                //tekikabeflag = 0;
                tekimove3(0, -1);
                console.log("上空白　上移動")
                if (level[enemyPosition3.y][enemyPosition3.x - 1] == 0 && tekikabeflag3 == 1) {
                    tekikabeflag3 = 0;
                }
            } else {
                tekimove3(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki3: function(event) {
        var spriteteki3 = new Spriteteki3();
        this.addChild(spriteteki3);
    },
    removeteki3: function(event) {
        kitaositaflag = true;
        audioEngine.playEffect(res.jump03);
        spriteteki3.unschedule(this.workingteki3);
        this.removeChild(spriteteki3);
    },
    //4体目
    workingteki4: function(event) {
        //距離で上下左右回り込むscriptを
        spriteteki4.workingFlagteki4 = (spriteteki4.workingFlagteki4 == true) ? false : true;
        if (spriteteki4.workingFlagteki4) spriteteki4.initWithFile(res.tekimidorimigi);

        else spriteteki4.initWithFile(res.tekimidorihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPosition.x > enemyPosition4.x && tekikabeflag4 == 0) {
            if (level[enemyPosition4.y][enemyPosition4.x + 1] == 1 || level[enemyPosition4.y - 1][enemyPosition4.x] == 7 || level[enemyPosition4.y - 1][enemyPosition4.x] == 13 || level[enemyPosition4.y - 1][enemyPosition4.x] == 14 || level[enemyPosition4.y - 1][enemyPosition4.x] == 15 || level[enemyPosition4.y - 1][enemyPosition4.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPosition.y >= enemyPosition4.y) {
                    tekimove4(0, -1);
                } else if (playerPosition.y < enemyPosition4.y) {
                    tekimove4(0, 1);
                }

            } else {
                tekimove4(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPosition.y > enemyPosition4.y && tekikabeflag4 == 0) {
            if (level[enemyPosition4.y + 1][enemyPosition4.x] == 1 || level[enemyPosition4.y - 1][enemyPosition4.x] == 7 || level[enemyPosition4.y - 1][enemyPosition4.x] == 13 || level[enemyPosition4.y - 1][enemyPosition4.x] == 14 || level[enemyPosition4.y - 1][enemyPosition4.x] == 15 || level[enemyPosition4.y - 1][enemyPosition4.x] == 16) {
                if (playerPosition.x > enemyPosition4.x) {
                    tekimove4(-1, 0);
                } else if (playerPosition.x <= enemyPosition4.x) {
                    tekimove4(1, 0);
                }
            } else {
                tekimove4(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPosition.x < enemyPosition4.x && tekikabeflag4 == 0) {
            if (level[enemyPosition4.y][enemyPosition4.x - 1] == 1 || level[enemyPosition4.y - 1][enemyPosition4.x] == 7 || level[enemyPosition4.y - 1][enemyPosition4.x] == 13 || level[enemyPosition4.y - 1][enemyPosition4.x] == 14 || level[enemyPosition4.y - 1][enemyPosition4.x] == 15 || level[enemyPosition4.y - 1][enemyPosition4.x] == 16) {
                if (playerPosition.y > enemyPosition4.y) {
                    tekimove4(0, -1);
                } else if (playerPosition.y <= enemyPosition4.y) {
                    tekimove4(0, 1);
                }
            } else {
                tekimove4(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPosition.y < enemyPosition4.y || tekikabeflag4 == 1) {

            if (level[enemyPosition4.y - 1][enemyPosition4.x] == 1 || level[enemyPosition4.y - 1][enemyPosition4.x] == 7 || level[enemyPosition4.y - 1][enemyPosition4.x] == 13 || level[enemyPosition4.y - 1][enemyPosition4.x] == 14 || level[enemyPosition4.y - 1][enemyPosition4.x] == 15 || level[enemyPosition4.y - 1][enemyPosition4.x] == 16) {

                tekikabeflag4 = 1;
                tekimove4(1, 0);
                if (level[enemyPosition4.y - 1][enemyPosition4.x] == 1 && level[enemyPosition4.y][enemyPosition4.x + 1] == 1) {
                    tekimove4(0, -1);
                    tekikabeflag4 = 0;
                }
            } else if (level[enemyPosition4.y - 1][enemyPosition4.x] == 0 && tekikabeflag4 == 1) {
                //tekikabeflag = 0;
                tekimove4(0, -1);
                console.log("上空白　上移動")
                if (level[enemyPosition4.y][enemyPosition4.x - 1] == 0 && tekikabeflag4 == 1) {
                    tekikabeflag4 = 0;
                }
            } else {
                tekimove4(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki4: function(event) {
        var spriteteki4 = new Spriteteki4();
        this.addChild(spriteteki4);
    },
    removeteki4: function(event) {
        midoritaositaflag = true;
        audioEngine.playEffect(res.jump03);
        spriteteki4.unschedule(this.workingteki4);
        this.removeChild(spriteteki4);
    },
    //5体目
    workingteki5: function(event) {
        //距離で上下左右回り込むscriptを
        spriteteki5.workingFlagteki5 = (spriteteki5.workingFlagteki5 == true) ? false : true;
        if (spriteteki5.workingFlagteki5) spriteteki5.initWithFile(res.tekimurasakimigi);
        else spriteteki5.initWithFile(res.tekimurasakihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPosition.x > enemyPosition5.x && tekikabeflag5 == 0) {
            if (level[enemyPosition5.y][enemyPosition5.x + 1] == 1 || level[enemyPosition5.y - 1][enemyPosition5.x] == 7 || level[enemyPosition5.y - 1][enemyPosition5.x] == 13 || level[enemyPosition5.y - 1][enemyPosition5.x] == 14 || level[enemyPosition5.y - 1][enemyPosition5.x] == 15 || level[enemyPosition5.y - 1][enemyPosition5.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPosition.y >= enemyPosition5.y) {
                    tekimove5(0, -1);
                } else if (playerPosition.y < enemyPosition5.y) {
                    tekimove5(0, 1);
                }

            } else {
                tekimove5(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPosition.y > enemyPosition5.y && tekikabeflag5 == 0) {
            if (level[enemyPosition5.y + 1][enemyPosition5.x] == 1 || level[enemyPosition5.y - 1][enemyPosition5.x] == 7 || level[enemyPosition5.y - 1][enemyPosition5.x] == 13 || level[enemyPosition5.y - 1][enemyPosition5.x] == 14 || level[enemyPosition5.y - 1][enemyPosition5.x] == 15 || level[enemyPosition5.y - 1][enemyPosition5.x] == 16) {
                if (playerPosition.x > enemyPosition5.x) {
                    tekimove5(-1, 0);
                } else if (playerPosition.x <= enemyPosition5.x) {
                    tekimove5(1, 0);
                }
            } else {
                tekimove5(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPosition.x < enemyPosition5.x && tekikabeflag5 == 0) {
            if (level[enemyPosition5.y][enemyPosition5.x - 1] == 1 || level[enemyPosition5.y - 1][enemyPosition5.x] == 7 || level[enemyPosition5.y - 1][enemyPosition5.x] == 13 || level[enemyPosition5.y - 1][enemyPosition5.x] == 14 || level[enemyPosition5.y - 1][enemyPosition5.x] == 15 || level[enemyPosition5.y - 1][enemyPosition5.x] == 16) {
                if (playerPosition.y > enemyPosition5.y) {
                    tekimove5(0, -1);
                } else if (playerPosition.y <= enemyPosition5.y) {
                    tekimove5(0, 1);
                }
            } else {
                tekimove5(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPosition.y < enemyPosition5.y || tekikabeflag5 == 1) {

            if (level[enemyPosition5.y - 1][enemyPosition5.x] == 1 || level[enemyPosition5.y - 1][enemyPosition5.x] == 7 || level[enemyPosition5.y - 1][enemyPosition5.x] == 13 || level[enemyPosition5.y - 1][enemyPosition5.x] == 14 || level[enemyPosition5.y - 1][enemyPosition5.x] == 15 || level[enemyPosition5.y - 1][enemyPosition5.x] == 16) {

                tekikabeflag5 = 1;
                tekimove5(1, 0);
                if (level[enemyPosition5.y - 1][enemyPosition5.x] == 1 && level[enemyPosition5.y][enemyPosition5.x + 1] == 1) {
                    tekimove5(0, -1);
                    tekikabeflag5 = 0;
                }
            } else if (level[enemyPosition5.y - 1][enemyPosition5.x] == 0 && tekikabeflag5 == 1) {
                //tekikabeflag = 0;
                tekimove5(0, -1);
                console.log("上空白　上移動")
                if (level[enemyPosition5.y][enemyPosition5.x - 1] == 0 && tekikabeflag5 == 1) {
                    tekikabeflag5 = 0;
                }
            } else {
                tekimove5(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki5: function(event) {
        var spriteteki5 = new Spriteteki5();
        this.addChild(spriteteki5);
    },
    removeteki5: function(event) {
        murasakitaositaflag = true;
        audioEngine.playEffect(res.jump03);
        spriteteki5.unschedule(this.workingteki5);
        this.removeChild(spriteteki5);
    },
    removedot: function(dotsprite) {

        this.removeChild(dotsprite);

    },
});



var MemoryTileue = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.ue);
        cc.eventManager.addListener(listener2.clone(), this);

    }

});
var MemoryTilemigi = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.migi);
        cc.eventManager.addListener(listener3.clone(), this);
    }
});
var MemoryTilesita = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.sita);
        cc.eventManager.addListener(listener4.clone(), this);
    }
});
var MemoryTilehidari = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.hidari);
        cc.eventManager.addListener(listener5.clone(), this);
    }
});
var listener2 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印前.png");
            pickedTiles.push(target);

            ueniiku();


        }
    }
});

var listener3 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印右.png");
            pickedTiles.push(target);

            miginiiku();


        }
    }
});

var listener4 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印後.png");
            pickedTiles.push(target);

            sitaniiku();


        }
    }
});

var listener5 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();

        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印左.png");
            pickedTiles.push(target);

            hidariniiku();


        }
    }
});

//スワイプ方向を検出する処理
function swipeDirection() {
    var distX = endTouch.x - startTouch.x;
    var distY = endTouch.y - startTouch.y;
    if (Math.abs(distX) + Math.abs(distY) > swipeTolerance) {
        if (Math.abs(distX) > Math.abs(distY)) {
            if (distX > 0) { //右方向移動
                move(1, 0);
            } else { //左方向移動
                move(-1, 0);
            }
        } else {
            if (distY > 0) { //上方向移動
                //console.log("上 move(0,-1) distY "+ distY );
                move(0, -1);
            } else { //下方向移動
                //console.log("下 move(0,1) distY "+ distY );
                move(0, 1);
            }
        }
    }
}

function move(deltaX, deltaY) {


    switch (level[playerPosition.y + deltaY][playerPosition.x + deltaX]) {
        case 7:
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 7) {
                level[playerPosition.y][playerPosition.x] -= 4;
                playerPosition.x += deltaX;
                playerPosition.y += deltaY;

                level[playerPosition.y][playerPosition.x] += 4;
                playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);
                if (playerSprite.tekisyoutotu == 1 && aotaositaflag == false) {

                    layer0.removeteki(spriteteki);
                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSprite.invulnerability == 0 && aotaositaflag == false) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);

                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }
            break;

        case 16:
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 16) {
                level[playerPosition.y][playerPosition.x] -= 4;
                playerPosition.x += deltaX;
                playerPosition.y += deltaY;

                level[playerPosition.y][playerPosition.x] += 4;
                playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);
                if (playerSprite.tekisyoutotu == 5 && murasakitaositaflag == false) {

                    layer0.removeteki5(spriteteki5);
                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSprite.invulnerability == 0 && murasakitaositaflag == false) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);

                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }
            break;
        case 15:
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 15) {
                level[playerPosition.y][playerPosition.x] -= 4;
                playerPosition.x += deltaX;
                playerPosition.y += deltaY;

                level[playerPosition.y][playerPosition.x] += 4;
                playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);
                if (playerSprite.tekisyoutotu == 4 && midoritaositaflag == false) {

                    layer0.removeteki4(spriteteki4);
                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSprite.invulnerability == 0 && midoritaositaflag == false) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);

                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }
            break;
        case 14:
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 14) {
                level[playerPosition.y][playerPosition.x] -= 4;
                playerPosition.x += deltaX;
                playerPosition.y += deltaY;

                level[playerPosition.y][playerPosition.x] += 4;
                playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);
                if (playerSprite.tekisyoutotu == 3 && kitaositaflag == false) {

                    layer0.removeteki3(spriteteki3);
                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSprite.invulnerability == 0 && kitaositaflag == false) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);

                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }
            break;
        case 13:
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 13) {
                level[playerPosition.y][playerPosition.x] -= 4;
                playerPosition.x += deltaX;
                playerPosition.y += deltaY;

                level[playerPosition.y][playerPosition.x] += 4;
                playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);
                if (playerSprite.tekisyoutotu == 2 && akataositaflag == false) {

                    layer0.removeteki2(spriteteki2);
                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSprite.invulnerability == 0 && akataositaflag == false) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);

                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }
            break;
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 0:

            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 12) {
                playerSprite.iroflag = true;
                playerSprite.iroflagaka = false;
                playerSprite.iroflagao = false;
                playerSprite.iroflagki = false;
                playerSprite.iroflagmidori = false;
                playerSprite.iroflagmurasaki = true;
                playerSprite.tekisyoutotu = 5;
                audioEngine.playEffect(res.powerup08);

            }
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 11) {
                playerSprite.iroflag = true;
                playerSprite.iroflagaka = false;
                playerSprite.iroflagao = false;
                playerSprite.iroflagki = false;
                playerSprite.iroflagmidori = true;
                playerSprite.iroflagmurasaki = false;
                playerSprite.tekisyoutotu = 4;
                audioEngine.playEffect(res.powerup08);
            }
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 10) {
                playerSprite.iroflag = true;
                playerSprite.iroflagaka = false;
                playerSprite.iroflagao = false;
                playerSprite.iroflagki = true;
                playerSprite.iroflagmidori = false;
                playerSprite.iroflagmurasaki = false;
                playerSprite.tekisyoutotu = 3;
                audioEngine.playEffect(res.powerup08);
            }
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 9) {
                playerSprite.iroflag = true;
                playerSprite.iroflagaka = true;
                playerSprite.iroflagao = false;
                playerSprite.iroflagki = false;
                playerSprite.iroflagmidori = false;
                playerSprite.iroflagmurasaki = false;
                playerSprite.tekisyoutotu = 2;
                audioEngine.playEffect(res.powerup08);
            }
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 8) {
                playerSprite.iroflag = true;
                playerSprite.iroflagaka = false;
                playerSprite.iroflagao = true;
                playerSprite.iroflagki = false;
                playerSprite.iroflagmidori = false;
                playerSprite.iroflagmurasaki = false;
                playerSprite.tekisyoutotu = 1;

                audioEngine.playEffect(res.powerup08);

            }



            level[playerPosition.y][playerPosition.x] -= 4;
            playerPosition.x += deltaX;
            playerPosition.y += deltaY;

            level[playerPosition.y][playerPosition.x] += 4;


            playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);

            break;
        case 3:
        case 5:
            /*
                        if (level[playerPosition.y + deltaY * 2][playerPosition.x + deltaX * 2] == 0 ||
                            level[playerPosition.y + deltaY * 2][playerPosition.x + deltaX * 2] == 2) {
                            level[playerPosition.y][playerPosition.x] -= 4;
                            playerPosition.x += deltaX;
                            playerPosition.y += deltaY;
                            level[playerPosition.y][playerPosition.x] += 1;
                            playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);
                            level[playerPosition.y + deltaY][playerPosition.x + deltaX] += 3;
                            //落ちた木箱
                            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 5) {
                                flag++;

                                level[playerPosition.y + deltaY][playerPosition.x + deltaX] -= 5;
                                if (flag == 2) {

                                    //level[playerPosition.y+deltaY][playerPosition.x+deltaX]+=1;
                                    audioEngine.playEffect(res.sakebi);

                                    cc.director.runScene(new ResultScene());
                                    //audioEngine.stopEffect();
                                }
                                if (flag == 1) {
                                    audioEngine.playEffect(res.nanmanda);
                                }

                            }

                            var movingCrate = cratesArray[playerPosition.y][playerPosition.x];
                            movingCrate.setPosition(movingCrate.getPosition().x + 25 * deltaX, movingCrate.getPosition().y - 25 * deltaY);
                            cratesArray[playerPosition.y + deltaY][playerPosition.x + deltaX] = movingCrate;
                            cratesArray[playerPosition.y][playerPosition.x] = null;
                        }
                        */
            break;
        case 500:
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 500) {
                level[playerPosition.y][playerPosition.x] -= 4;
                playerPosition.x += deltaX;
                playerPosition.y += deltaY;

                level[playerPosition.y][playerPosition.x] += 4;
                playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);


                /*var movingdot = dotArray[playerPosition.y][playerPosition.x];
                movingdot.setPosition(movingdot.getPosition().x + 1825 * deltaX, movingdot.getPosition().y - 1825 * deltaY);
                dotArray[playerPosition.y + deltaY][playerPosition.x + deltaX] = movingdot;
                dotArray[playerPosition.y][playerPosition.x] = null;*/

                //                level[playerPosition.y - deltaY][playerPosition.x - deltaX] = 0;
                //layer0.removedot(spritedot);

                layer0.removedot(dotArray[playerPosition.y][playerPosition.x]);
                //↓これで一度取ったドットを二度ととれんようにする
                level[playerPosition.y][playerPosition.x] = 4;
                miss++;
                missText.setString("SCORE " + miss);
                dottota++;
                audioEngine.playEffect(res.dotnooto);

                if (dottota == 80) {
                    //miss = 0;
                    cc.director.runScene(new ResultScene());
                    //deltaY -= 1;
                    dottota = 0;
                    if (audioEngine.isMusicPlaying()) {
                        audioEngine.stopMusic();
                    }

                }
                //deltaX += 5;


                //if (miss == 10) {


                break;
            }

            /*case 7:
                if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 7) {
                    level[playerPosition.y][playerPosition.x] -= 4;
                    playerPosition.x += deltaX;
                    playerPosition.y += deltaY;
                    level[playerPosition.y][playerPosition.x] += 4;
                    playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);
                    if (playerSprite.tekisyoutotu == 1) {


                        break;


                    } else {
                        deltaX += 1;
                        miss2--;
                        missText2.setString(" " + miss2);
                        if (miss2 == 0) {
                            miss2 = 3;
                            cc.director.runScene(new overScene());
                        }
                    }
                }*/
    }

}

function tekimove(deltaX2, deltaY2) {


    switch (level[enemyPosition.y + deltaY2][enemyPosition.x + deltaX2]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 500:
        case 0:
        case 7:
        case 13:


            level[enemyPosition.y][enemyPosition.x] -= 7;
            enemyPosition.x += deltaX2;
            enemyPosition.y += deltaY2;

            level[enemyPosition.y][enemyPosition.x] += 7;
            //ここ
            var nowPosX = spriteteki.getPosition().x;
            var nowPosY = spriteteki.getPosition().y;

            var newPosX = 30 + 75 * enemyPosition.x;
            var newPosY = 1140 - 75 * enemyPosition.y;

            spriteteki.runAction(cc.MoveTo.create(0.5, cc.p(newPosX, newPosY)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (level[enemyPosition.y + deltaY2][enemyPosition.x + deltaX2] == 4) {
                level[enemyPosition.y][enemyPosition.x] -= 7;
                enemyPosition.x += deltaX2;
                enemyPosition.y += deltaY2;
                level[enemyPosition.y][enemyPosition.x] += 7;

                var nowPosX = spriteteki.getPosition().x;
                var nowPosY = spriteteki.getPosition().y;

                var newPosX = 30 + 75 * enemyPosition.x;
                var newPosY = 1140 - 75 * enemyPosition.y;
                spriteteki.runAction(cc.MoveTo.create(0.5, cc.p(newPosX, newPosY)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSprite.tekisyoutotu == 1) {
                    layer0.removeteki(spriteteki);
                    //level[enemyPosition.y][enemyPosition.x] = 0;
                    /*  var movingteki = tekiArray[playerPosition.y][playerPosition.x];
                    movingteki.setPosition(movingteki.getPosition().x + 1125 * deltaX2, movingteki.getPosition().y - 1125 * deltaY2);
                    tekiArray[playerPosition.y + deltaY2][playerPosition.x + deltaX2] = movingteki;
                    tekiArray[playerPosition.y][playerPosition.x] = null;
*/
                } else if (playerSprite.invulnerability == 0) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);
                    deltaX2 += 1;
                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }

    }

}

function tekimove2(deltaX3, deltaY3) {


    switch (level[enemyPosition2.y + deltaY3][enemyPosition2.x + deltaX3]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 500:
        case 0:
        case 7:
        case 13:


            level[enemyPosition2.y][enemyPosition2.x] -= 13;
            enemyPosition2.x += deltaX3;
            enemyPosition2.y += deltaY3;

            level[enemyPosition2.y][enemyPosition2.x] += 13;
            //ここ
            var nowPosX2 = spriteteki2.getPosition().x;
            var nowPosY2 = spriteteki2.getPosition().y;

            var newPosX2 = 30 + 75 * enemyPosition2.x;
            var newPosY2 = 1140 - 75 * enemyPosition2.y;

            spriteteki2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX2, newPosY2)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (level[enemyPosition2.y + deltaY3][enemyPosition2.x + deltaX3] == 4) {
                level[enemyPosition2.y][enemyPosition2.x] -= 13;
                enemyPosition2.x += deltaX3;
                enemyPosition2.y += deltaY3;
                level[enemyPosition2.y][enemyPosition2.x] += 13;

                var nowPosX2 = spriteteki2.getPosition().x;
                var nowPosY2 = spriteteki2.getPosition().y;

                var newPosX2 = 30 + 75 * enemyPosition2.x;
                var newPosY2 = 1140 - 75 * enemyPosition2.y;
                spriteteki2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX2, newPosY2)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSprite.tekisyoutotu == 2) {
                    layer0.removeteki2(spriteteki2);

                    /*  var movingteki = tekiArray[playerPosition.y][playerPosition.x];
                    movingteki.setPosition(movingteki.getPosition().x + 1125 * deltaX2, movingteki.getPosition().y - 1125 * deltaY2);
                    tekiArray[playerPosition.y + deltaY2][playerPosition.x + deltaX2] = movingteki;
                    tekiArray[playerPosition.y][playerPosition.x] = null;
*/
                } else if (playerSprite.invulnerability == 0) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);
                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }

    }

}

function tekimove3(deltaX4, deltaY4) {


    switch (level[enemyPosition3.y + deltaY4][enemyPosition3.x + deltaX4]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 500:
        case 0:
        case 7:
        case 13:


            level[enemyPosition3.y][enemyPosition3.x] -= 14;
            enemyPosition3.x += deltaX4;
            enemyPosition3.y += deltaY4;

            level[enemyPosition3.y][enemyPosition3.x] += 14;
            //ここ
            var nowPosX3 = spriteteki3.getPosition().x;
            var nowPosY3 = spriteteki3.getPosition().y;

            var newPosX3 = 30 + 75 * enemyPosition3.x;
            var newPosY3 = 1140 - 75 * enemyPosition3.y;

            spriteteki3.runAction(cc.MoveTo.create(0.5, cc.p(newPosX3, newPosY3)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (level[enemyPosition3.y + deltaY4][enemyPosition3.x + deltaX4] == 4) {
                level[enemyPosition3.y][enemyPosition3.x] -= 14;
                enemyPosition3.x += deltaX4;
                enemyPosition3.y += deltaY4;
                level[enemyPosition3.y][enemyPosition3.x] += 14;

                var nowPosX3 = spriteteki3.getPosition().x;
                var nowPosY3 = spriteteki3.getPosition().y;

                var newPosX3 = 30 + 75 * enemyPosition3.x;
                var newPosY3 = 1140 - 75 * enemyPosition3.y;
                spriteteki3.runAction(cc.MoveTo.create(0.5, cc.p(newPosX3, newPosY3)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSprite.tekisyoutotu == 3) {
                    layer0.removeteki3(spriteteki3);


                } else if (playerSprite.invulnerability == 0) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);
                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }

    }

}

function tekimove4(deltaX5, deltaY5) {


    switch (level[enemyPosition4.y + deltaY5][enemyPosition4.x + deltaX5]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 500:
        case 0:
        case 7:
        case 13:


            level[enemyPosition4.y][enemyPosition4.x] -= 15;
            enemyPosition4.x += deltaX5;
            enemyPosition4.y += deltaY5;

            level[enemyPosition4.y][enemyPosition4.x] += 15;
            //ここ
            var nowPosX4 = spriteteki4.getPosition().x;
            var nowPosY4 = spriteteki4.getPosition().y;

            var newPosX4 = 30 + 75 * enemyPosition4.x;
            var newPosY4 = 1140 - 75 * enemyPosition4.y;

            spriteteki4.runAction(cc.MoveTo.create(0.5, cc.p(newPosX4, newPosY4)));
            //spriteteki.setPosition(newPosX,newPosY);
            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (level[enemyPosition4.y + deltaY5][enemyPosition4.x + deltaX5] == 4) {
                level[enemyPosition4.y][enemyPosition4.x] -= 15;
                enemyPosition4.x += deltaX5;
                enemyPosition4.y += deltaY5;
                level[enemyPosition4.y][enemyPosition4.x] += 15;

                var nowPosX4 = spriteteki4.getPosition().x;
                var nowPosY4 = spriteteki4.getPosition().y;

                var newPosX4 = 30 + 75 * enemyPosition4.x;
                var newPosY4 = 1140 - 75 * enemyPosition4.y;
                spriteteki4.runAction(cc.MoveTo.create(0.5, cc.p(newPosX4, newPosY4)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSprite.tekisyoutotu == 4) {
                    layer0.removeteki4(spriteteki4);


                } else if (playerSprite.invulnerability == 0) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);
                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }

    }

}

function tekimove5(deltaX6, deltaY6) {


    switch (level[enemyPosition5.y + deltaY6][enemyPosition5.x + deltaX6]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 500:
        case 0:
        case 7:
        case 13:


            level[enemyPosition5.y][enemyPosition5.x] -= 16;
            enemyPosition5.x += deltaX6;
            enemyPosition5.y += deltaY6;

            level[enemyPosition5.y][enemyPosition5.x] += 16;
            //ここ
            var nowPosX5 = spriteteki5.getPosition().x;
            var nowPosY5 = spriteteki5.getPosition().y;

            var newPosX5 = 30 + 75 * enemyPosition5.x;
            var newPosY5 = 1140 - 75 * enemyPosition5.y;

            spriteteki5.runAction(cc.MoveTo.create(0.5, cc.p(newPosX5, newPosY5)));
            //spriteteki.setPosition(newPosX,newPosY);
            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (level[enemyPosition5.y + deltaY6][enemyPosition5.x + deltaX6] == 4) {
                level[enemyPosition5.y][enemyPosition5.x] -= 16;
                enemyPosition5.x += deltaX6;
                enemyPosition5.y += deltaY6;
                level[enemyPosition5.y][enemyPosition5.x] += 16;

                var nowPosX5 = spriteteki5.getPosition().x;
                var nowPosY5 = spriteteki5.getPosition().y;

                var newPosX5 = 30 + 75 * enemyPosition5.x;
                var newPosY5 = 1140 - 75 * enemyPosition5.y;
                spriteteki5.runAction(cc.MoveTo.create(0.5, cc.p(newPosX5, newPosY5)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSprite.tekisyoutotu == 5) {
                    layer0.removeteki5(spriteteki5);


                } else if (playerSprite.invulnerability == 0) {
                    playerSprite.invulnerability = 100;
                    audioEngine.playEffect(res.damage7);
                    miss2--;
                    missText2.setString(" " + miss2);
                    if (miss2 == 0) {
                        miss2 = 3;
                        cc.director.runScene(new overScene());
                    }
                }
            }

    }

}

function clear() {
    cc.director.runScene(new ResultScene());
}

function over() {
    cc.director.runScene(new overScene());
}
//左に行く
function hidariniiku() {
    move(-1, 0);
    //  tekimove(-1, 0);
}
//上
function ueniiku() {
    //playerSprite.initWithFile(res.paintmansiro2);

    move(0, -1);
    //tekimove(0, -1);
    /*var pause = setTimeout(function() {

    }, 500);
    */
}
//右
function miginiiku() {
    move(1, 0);

    //tekimove(1, 0);
}
//下
function sitaniiku() {
    move(0, 1);
    //tekimove(0, 1);
    //spritedot.initWithFile(res.paintmansiro2);
}
//goを消すための
function gokesi() {

}
