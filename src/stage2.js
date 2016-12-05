var sizestage2;
//var stageflag = 0;

var levelstage2;
var overresetstage2;
var mapstage2;

var levelstage2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 10, 1, 7, 13, 14, 15, 2, 2, 2, 2, 2, 1],
    [1, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 9, 11, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

overresetstage2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 10, 1, 7, 13, 14, 15, 2, 2, 2, 2, 2, 1],
  [1, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 9, 11, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


//kokoko = level[];
var playerPositionstage2; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var enemyPositionstage2;
var enemyPosition2stage2;
var enemyPosition3stage2;
var enemyPosition4stage2;
var enemyPosition5stage2;
var playerSpritestage2; //プレイヤーのスプライト
var spritetekistage2;
var spriteteki2stage2;
var spriteteki3stage2;
var spriteteki4stage2;
var spriteteki5stage2;
var cratesArraystage2 = []; //配置した木箱のスプライトを配列に保持する
var dotArraystage2 = [];
var tekiArraystage2 = [];
var tekiArray2stage2 = [];
var tekiArray3stage2 = [];
var tekiArray4stage2 = [];
var tekiArray5stage2 = [];
var spritedotstage2;

var startTouchstage2;
var endTouchstage2;
var swipeTolerancestage2 = 10; //スワイプかを判断する閾値
var audioEnginestage2;
var flagstage2 = 0;
var pickedTilesstage2 = [];
var dotstage2 = [];
var stagetextstage2;
var tekikabeflagstage2 = 0;
var tekikabeflag2stage2 = 0;
var tekikabeflag3stage2 = 0;
var tekikabeflag4stage2 = 0;
var tekikabeflag5stage2 = 0;
var layer0stage2;
var dottotastage2 = 0;
var aotaositaflagstage2 = false;
var akataositaflagstage2 = false;
var kitaositaflagstage2 = false;
var midoritaositaflagstage2 = false;
var murasakitaositaflagstage2 = false;

var gameScene2 = cc.Scene.extend({
    onEnter: function() {
        this._super();

        layer0stage2 = new gameLayerstage2();
        layer0stage2.init();
        this.addChild(layer0stage2);

        //var enemys = new enemyLayer();
        //this.addChild(enemys);

        //音楽再生エンジン
        audioEnginestage2 = cc.audioEngine;
        //bgm再生
        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            //  audioEngine.playMusic(res.bgm_main, true);
            audioEngine.playMusic(res.gamebgm, true);
        }
        //dotした回数
        missText = cc.LabelTTF.create("SCORE " + miss, "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(missText);
        missText.setPosition(250, 1250);
        missText.setScale(3.5);
        //残機した回数
        missText2 = cc.LabelTTF.create(" " + miss2, "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(missText2);
        missText2.setPosition(230, 1350);
        missText2.setScale(3.5);
        //ステージした回数
        stagetextstage2 = cc.LabelTTF.create("STAGE 2", "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(stagetextstage2);
        stagetextstage2.setPosition(600, 1350);
        stagetextstage2.setScale(3.5);
    }
});

var gameLayerstage2 = cc.Layer.extend({
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
        var levelSprite2stage2 = cc.Sprite.create(res.backsiro);
        levelSprite2stage2.setPosition(80, 730);
        levelSprite2stage2.setScale(4.4, 2.2);
        this.addChild(levelSprite2stage2);



        var sprite7stage2 = cc.Sprite.create(res.kakeru);
        sprite7stage2.setPosition(175, 1350);
        sprite7stage2.setScale(1);
        this.addChild(sprite7stage2, 0);

        var sprite8stage2 = cc.Sprite.create(res.paintmansiro1);
        sprite8stage2.setPosition(100, 1350);
        sprite8stage2.setScale(0.3);
        this.addChild(sprite8stage2, 0);

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
            var tilestage2 = new MemoryTileuestage2();
            this.addChild(tilestage2, 0);
            //タイルを格子状に配置する計算式
            tilestage2.setPosition(480 + i % 6 * 74, 220 - Math.floor(i / 6) * 74);
            tilestage2.setScale(0.25, 0.25);

        }

        for (i = 0; i < 1; i++) {
            var tilestage2 = new MemoryTilemigistage2();
            this.addChild(tilestage2, 0);
            //タイルを格子状に配置する計算式
            tilestage2.setPosition(615 + i % 6 * 74, 125 - Math.floor(i / 6) * 74);
            tilestage2.setScale(0.25, 0.25);

        }
        for (i = 0; i < 1; i++) {
            var tilestage2 = new MemoryTilesitastage2();
            this.addChild(tilestage2, 0);
            //タイルを格子状に配置する計算式
            tilestage2.setPosition(480 + i % 6 * 74, 70 - Math.floor(i / 6) * 74);
            tilestage2.setScale(0.25, 0.25);

        }
        for (i = 0; i < 1; i++) {
            var tilestage2 = new MemoryTilehidaristage2();
            this.addChild(tilestage2, 0);
            //タイルを格子状に配置する計算式
            tilestage2.setPosition(345 + i % 6 * 74, 125 - Math.floor(i / 6) * 74);
            tilestage2.setScale(0.25, 0.25);

        }

        for (i = 0; i < 12; i++) {　　　　　　
            cratesArraystage2[i] = [];　 //配列オブジェクトの生成
            dotArraystage2[i] = [];
            tekiArraystage2[i] = [];
            tekiArray2stage2[i] = [];
            tekiArray3stage2[i] = [];
            tekiArray4stage2[i] = [];
            tekiArray5stage2[i] = [];

            for (j = 0; j < 15; j++) {
              var resetstage2 = overresetstage2[i][j];
              levelstage2[i][j] = resetstage2;
                switch (levelstage2[i][j]) {
                    case 0:
                        var spriteyukastage2 = cc.Sprite.create(res.yuka);
                        spriteyukastage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukastage2.setScale(0.21);
                        this.addChild(spriteyukastage2, 0);
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage2[i][j] = null;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        tekiArray3stage2[i][j] = null;
                        tekiArray4stage2[i][j] = null;
                        tekiArray5stage2[i][j] = null;
                        break;
                    case 1:
                        var spritekabestage2 = cc.Sprite.create(res.kabeblock);
                        spritekabestage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritekabestage2.setScale(0.19);
                        this.addChild(spritekabestage2, 0);
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage2[i][j] = null;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        tekiArray3stage2[i][j] = null;
                        tekiArray4stage2[i][j] = null;
                        tekiArray5stage2[i][j] = null;
                        break;

                    case 2:
                        spritedotstage2 = cc.Sprite.create(res.dot);
                        spritedotstage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritedotstage2.setScale(0.15);
                        this.addChild(spritedotstage2, 0);
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage2[i][j] = spritedotstage2;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        tekiArray3stage2[i][j] = null;
                        tekiArray4stage2[i][j] = null;
                        tekiArray5stage2[i][j] = null;
                        break;
                    case 4:

                    case 6:
                        playerSpritestage2 = cc.Sprite.create(res.paintmansiro1);
                        playerSpritestage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        playerSpritestage2.setScale(0.3);
                        this.addChild(playerSpritestage2, 1);
                        //  playerSprite.invulnerability = 0;
                        playerSpritestage2.tekisyoutotustage2 = 0;
                        playerSpritestage2.workingFlagstage2 = false;
                        playerSpritestage2.workingFlag2stage2 = false;
                        playerSpritestage2.workingFlag3stage2 = false;
                        playerSpritestage2.workingFlag4stage2 = false;
                        playerSpritestage2.workingFlag5stage2 = false;
                        playerSpritestage2.workingFlag6stage2 = false;
                        playerSpritestage2.iroflagstage2 = false;
                        playerSpritestage2.iroflagakastage2 = false;
                        playerSpritestage2.iroflagaostage2 = false;
                        playerSpritestage2.iroflagkistage2 = false;
                        playerSpritestage2.iroflagmidoristage2 = false;
                        playerSpritestage2.iroflagmurasakistage2 = false;
                        playerSpritestage2.schedule(this.workingstage2, 0.5);
                        playerSpritestage2.schedule(this.working2stage2, 0.5);
                        playerSpritestage2.schedule(this.working3stage2, 0.5);
                        playerSpritestage2.schedule(this.working4stage2, 0.5);
                        playerSpritestage2.schedule(this.working5stage2, 0.5);
                        playerSpritestage2.schedule(this.working6stage2, 0.5);
                        playerSpritestage2.invulnerabilitystage2 = 0; //無敵モード時間　初期値0
                        this.scheduleUpdate();






                        playerPositionstage2 = {
                            x: j,
                            y: i
                        };　　　　　　　　　　　　
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage2[i][j] = null;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        tekiArray3stage2[i][j] = null;
                        tekiArray4stage2[i][j] = null;
                        tekiArray5stage2[i][j] = null;
                        break;

                    case 3:
                    case 5:
                        var crateSpritestage2 = cc.Sprite.create(cache.getSpriteFrame("crate.png"));
                        crateSpritestage2.setPosition(115 + 25 * j, 285 - 25 * i);
                        crateSpritestage2.setScale(5);
                        this.addChild(crateSpritestage2);
                        cratesArraystage2[i][j] = crateSpritestage2; //(i,j)の位置にcrateSpriteを入れる
                        dotArraystage2[i][j] = null;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        tekiArray3stage2[i][j] = null;
                        break;
                    case 7:
                        spritetekistage2 = cc.Sprite.create(res.tekimannakako);
                        spritetekistage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritetekistage2.setScale(0.3);
                        this.addChild(spritetekistage2, 1);
                        spritetekistage2.workingFlagtekistage2 = false;
                        spritetekistage2.schedule(this.workingtekistage2, 0.5);

                        /*var moveAction = cc.MoveTo.create(10.5, new cc.Point(550, 0));
                        spriteteki.runAction(moveAction);*/
                        enemyPositionstage2 = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArraystage2[i][j] = spritetekistage2;
                        dotArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        tekiArray3stage2[i][j] = null;
                        tekiArray4stage2[i][j] = null;
                        tekiArray5stage2[i][j] = null;
                        break;
                    case 8:
                        var spriteiroyukaaostage2 = cc.Sprite.create(res.iroyukaao);
                        spriteiroyukaaostage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteiroyukaaostage2.setScale(0.19, 0.18);
                        this.addChild(spriteiroyukaaostage2, 0);
                        cratesArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;

                        break;
                    case 9:
                        var spriteyukaakastage2 = cc.Sprite.create(res.iroyukaaka);
                        spriteyukaakastage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukaakastage2.setScale(0.19, 0.18);
                        this.addChild(spriteyukaakastage2, 0);
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage2[i][j] = null;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        break;
                    case 10:
                        var spriteyukakistage2 = cc.Sprite.create(res.iroyukaki);
                        spriteyukakistage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukakistage2.setScale(0.19, 0.18);
                        this.addChild(spriteyukakistage2, 0);
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage2[i][j] = null;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        break;
                    case 11:
                        var spriteyukamidoristage2 = cc.Sprite.create(res.iroyukamidori);
                        spriteyukamidoristage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamidoristage2.setScale(0.19, 0.18);
                        this.addChild(spriteyukamidoristage2, 0);
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage2[i][j] = null;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        break;
                    case 12:
                        var spriteyukamurasakistage2 = cc.Sprite.create(res.iroyukamurasaki);
                        spriteyukamurasakistage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamurasakistage2.setScale(0.19, 0.18);
                        this.addChild(spriteyukamurasakistage2, 0);
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage2[i][j] = null;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        break;
                    case 13:
                        spriteteki2stage2 = cc.Sprite.create(res.tekimannakaaka);
                        spriteteki2stage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki2stage2.setScale(0.3);
                        this.addChild(spriteteki2stage2, 1);
                        spriteteki2stage2.workingFlagteki2stage2 = false;
                        spriteteki2stage2.schedule(this.workingteki2stage2, 0.5);

                        enemyPosition2stage2 = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray2stage2[i][j] = spriteteki2stage2;
                        dotArraystage2[i][j] = null;
                        break;
                    case 14:
                        spriteteki3stage2 = cc.Sprite.create(res.tekimannakaki);
                        spriteteki3stage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki3stage2.setScale(0.3);
                        this.addChild(spriteteki3stage2, 1);
                        spriteteki3stage2.workingFlagteki3stage2 = false;
                        spriteteki3stage2.schedule(this.workingteki3stage2, 0.5);

                        enemyPosition3stage2 = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray3stage2[i][j] = spriteteki3stage2;
                        dotArraystage2[i][j] = null;
                        break;
                    case 15:
                        spriteteki4stage2 = cc.Sprite.create(res.tekimannakamidori);
                        spriteteki4stage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki4stage2.setScale(0.3);
                        this.addChild(spriteteki4stage2, 1);
                        spriteteki4stage2.workingFlagteki4stage2 = false;
                        spriteteki4stage2.schedule(this.workingteki4stage2, 0.5);

                        enemyPosition4stage2 = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray4stage2[i][j] = spriteteki4stage2;
                        dotArraystage2[i][j] = null;
                        break;
                    case 16:
                        spriteteki5stage2 = cc.Sprite.create(res.tekimannakamurasaki);
                        spriteteki5stage2.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki5stage2.setScale(0.3);
                        this.addChild(spriteteki5stage2, 1);
                        spriteteki5stage2.workingFlagteki5stage2 = false;
                        spriteteki5stage2.schedule(this.workingteki5stage2, 0.5);

                        enemyPosition5stage2 = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystage2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray5stage2[i][j] = spriteteki5stage2;
                        dotArraystage2[i][j] = null;
                    default:
                        cratesArraystage2[i][j] = null; //木箱のコード以外の場合は、その場所に木箱がない値としてnullを代入する
                        dotArraystage2[i][j] = null;
                        tekiArraystage2[i][j] = null;
                        tekiArray2stage2[i][j] = null;
                        tekiArray3stage2[i][j] = null;
                        tekiArray4stage2[i][j] = null;
                        tekiArray5stage2[i][j] = null;
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

                if (keyCode == 37) hidariniikustage2(); // 左に行くよ

            }
        }, this);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 38) ueniikustage2(); // 上に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 39) miginiikustage2(); // 右に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 40) sitaniikustage2(); // 下に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 16) gokesi(); // shiftでgo消し
            }
        }, this);

    },


    update: function() {
        if (playerSpritestage2.invulnerabilitystage2 > 0) {
            playerSpritestage2.invulnerabilitystage2--;
            playerSpritestage2.setOpacity(255 - playerSpritestage2.getOpacity());
        }
    },

    workingstage2: function() {
        if (playerSpritestage2.iroflagstage2 == false) {
            playerSpritestage2.workingFlagstage2 = (playerSpritestage2.workingFlagstage2 == true) ? false : true;
            if (playerSpritestage2.workingFlagstage2) playerSpritestage2.initWithFile(res.paintmansiro1);
            else playerSpritestage2.initWithFile(res.paintmansiro2);


        }

    },
    working2stage2: function() {
        if (playerSpritestage2.iroflagakastage2 == true) {

            playerSpritestage2.workingFlag2stage2 = (playerSpritestage2.workingFlag2stage2 == true) ? false : true;
            if (playerSpritestage2.workingFlag2stage2) playerSpritestage2.initWithFile(res.paintmanaka1);
            else playerSpritestage2.initWithFile(res.paintmanaka2);
            playerSpritestage2.setScale(2.3);



        }
    },
    working3stage2: function() {
        if (playerSpritestage2.iroflagaostage2 == true) {

            playerSpritestage2.workingFlag3stage2 = (playerSpritestage2.workingFlag3stage2 == true) ? false : true;
            if (playerSpritestage2.workingFlag3stage2) playerSpritestage2.initWithFile(res.paintmanao1);
            else playerSpritestage2.initWithFile(res.paintmanao2);
            playerSpritestage2.setScale(2.3);



        }
    },
    working4stage2: function() {
        if (playerSpritestage2.iroflagkistage2 == true) {

            playerSpritestage2.workingFlag4stage2 = (playerSpritestage2.workingFlag4stage2 == true) ? false : true;
            if (playerSpritestage2.workingFlag4stage2) playerSpritestage2.initWithFile(res.paintmanki1);
            else playerSpritestage2.initWithFile(res.paintmanki2);
            playerSpritestage2.setScale(2.3);



        }
    },
    working5stage2: function() {
        if (playerSpritestage2.iroflagmidoristage2 == true) {

            playerSpritestage2.workingFlag5stage2 = (playerSpritestage2.workingFlag5stage2 == true) ? false : true;
            if (playerSpritestage2.workingFlag5stage2) playerSpritestage2.initWithFile(res.paintmanmidori1);
            else playerSpritestage2.initWithFile(res.paintmanmidori2);
            playerSpritestage2.setScale(2.3);



        }
    },
    working6stage2: function() {
        if (playerSpritestage2.iroflagmurasakistage2 == true) {

            playerSpritestage2.workingFlag6stage2 = (playerSpritestage2.workingFlag6stage2 == true) ? false : true;
            if (playerSpritestage2.workingFlag6stage2) playerSpritestage2.initWithFile(res.paintmanmurasaki1);
            else playerSpritestage2.initWithFile(res.paintmanmurasaki2);
            playerSpritestage2.setScale(2.3);
        }
    },
    workingtekistage2: function() {
        //距離で上下左右回り込むscriptを
        spritetekistage2.workingFlagtekistage2 = (spritetekistage2.workingFlagtekistage2 == true) ? false : true;
        if (spritetekistage2.workingFlagtekistage2) spritetekistage2.initWithFile(res.tekiaomigi);
        else spritetekistage2.initWithFile(res.tekiaohidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage2.x > enemyPositionstage2.x && tekikabeflagstage2 == 0) {
            if (levelstage2[enemyPositionstage2.y][enemyPositionstage2.x + 1] == 1 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 7 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 13 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 14 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 15 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage2.y >= enemyPositionstage2.y) {
                    tekimovestage2(0, -1);
                } else if (playerPositionstage2.y < enemyPositionstage2.y) {
                    tekimovestage2(0, 1);
                }

            } else {
                tekimovestage2(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage2.y > enemyPositionstage2.y && tekikabeflagstage2 == 0) {
            if (levelstage2[enemyPositionstage2.y + 1][enemyPositionstage2.x] == 1 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 7 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 13 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 14 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 15 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 16) {
                if (playerPositionstage2.x > enemyPositionstage2.x) {
                    tekimovestage2(-1, 0);
                } else if (playerPositionstage2.x <= enemyPositionstage2.x) {
                    tekimovestage2(1, 0);
                }
            } else {
                tekimovestage2(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage2.x < enemyPositionstage2
            .x && tekikabeflagstage2 == 0) {
            if (levelstage2[enemyPositionstage2
                    .y][enemyPositionstage2
                    .x - 1
                ] == 1 || levelstage2[enemyPositionstage2
                    .y - 1][enemyPosition.x] == 7 || levelstage2[enemyPositionstage2
                    .y - 1][enemyPositionstage2
                    .x
                ] == 13 || levelstage2[enemyPositionstage2
                    .y - 1][enemyPositionstage2
                    .x
                ] == 14 || levelstage2[enemyPositionstage2
                    .y - 1][enemyPositionstage2
                    .x
                ] == 15 || levelstage2[enemyPositionstage2
                    .y - 1][enemyPositionstage2
                    .x
                ] == 16) {
                if (playerPosition.y > enemyPositionstage2.y) {
                    tekimovestage2(0, -1);
                } else if (playerPositionstage2.y <= enemyPositionstage2.y) {
                    tekimovestage2(0, 1);
                }
            } else {
                tekimovestage2(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage2.y < enemyPositionstage2.y || tekikabeflagstage2 == 1) {

            if (levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 1 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 7 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 13 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 14 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 15 || levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 16) {

                tekikabeflagstage2 = 1;
                tekimovestage2(1, 0);
                if (levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 1 && levelstage2[enemyPositionstage2.y][enemyPositionstage2.x + 1] == 1) {
                    tekimovestage2(0, -1);
                    tekikabeflagstage2 = 0;
                }
            } else if (levelstage2[enemyPositionstage2.y - 1][enemyPositionstage2.x] == 0 && tekikabeflagstage2 == 1) {
                //tekikabeflag = 0;
                tekimovestage2(0, -1);
                console.log("上空白　上移動")
                if (levelstage2[enemyPositionstage2.y][enemyPositionstage2.x - 1] == 0 && tekikabeflagstage2 == 1) {
                    tekikabeflagstage2 = 0;
                }
            } else {
                tekimovestage2(0, -1);
            }
        }
    },
    //敵を消すため
    addSpritetekistage2: function() {
        var spritetekistage2 = new Spritetekistage2();
        this.addChild(spritetekistage2);
    },
    removetekistage2: function() {
        aotaositaflagstage2 = true;
        audioEngine.playEffect(res.jump03);
        spritetekistage2.unschedule(this.workingtekistage2);
        this.removeChild(spritetekistage2);
    },
    //2体目
    workingteki2stage2: function() {
        //距離で上下左右回り込むscriptを
        spriteteki2stage2.workingFlagteki2stage2 = (spriteteki2stage2.workingFlagteki2stage2 == true) ? false : true;
        if (spriteteki2stage2.workingFlagteki2stage2) spriteteki2stage2.initWithFile(res.tekiakamigi);

        else spriteteki2stage2.initWithFile(res.tekiakahidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage2.x > enemyPosition2stage2.x && tekikabeflag2stage2 == 0) {
            if (levelstage2[enemyPosition2stage2.y][enemyPosition2stage2.x + 1] == 1 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 7 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 13 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 14 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 15 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage2.y >= enemyPosition2stage2.y) {
                    tekimove2stage2(0, -1);
                } else if (playerPositionstage2.y < enemyPosition2stage2.y) {
                    tekimove2stage2(0, 1);
                }

            } else {
                tekimove2stage2(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage2.y > enemyPosition2stage2.y && tekikabeflag2stage2 == 0) {
            if (levelstage2[enemyPosition2stage2.y + 1][enemyPosition2stage2.x] == 1 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 7 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 13 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 14 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 15 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 16) {
                if (playerPositionstage2.x > enemyPosition2stage2.x) {
                    tekimove2stage2(-1, 0);
                } else if (playerPositionstage2.x <= enemyPosition2stage2.x) {
                    tekimove2stage2(1, 0);
                }
            } else {
                tekimove2stage2(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage2.x < enemyPosition2stage2.x && tekikabeflag2stage2 == 0) {
            if (levelstage2[enemyPosition2stage2.y][enemyPosition2stage2.x - 1] == 1 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 7 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 13 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 14 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 15 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 16) {
                if (playerPositionstage2.y > enemyPosition2stage2.y) {
                    tekimove2stage2(0, -1);
                } else if (playerPositionstage2.y <= enemyPosition2stage2.y) {
                    tekimove2stage2(0, 1);
                }
            } else {
                tekimove2stage2(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage2.y < enemyPosition2stage2.y || tekikabeflag2stage2 == 1) {

            if (levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 1 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 7 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 13 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 14 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 15 || levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 16) {


                tekikabeflag2stage2 = 1;
                tekimove2stage2(1, 0);
                if (levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 1 && levelstage2[enemyPosition2stage2.y][enemyPosition2stage2.x + 1] == 1) {
                    tekimove2stage2(0, -1);
                    tekikabeflag2stage2 = 0;
                }
            } else if (levelstage2[enemyPosition2stage2.y - 1][enemyPosition2stage2.x] == 0 && tekikabeflag2stage2 == 1) {
                //tekikabeflag = 0;
                tekimove2stage2(0, -1);
                console.log("上空白　上移動")
                if (levelstage2[enemyPosition2stage2.y][enemyPosition2stage2.x - 1] == 0 && tekikabeflag2stage2 == 1) {
                    tekikabeflag2stage2 = 0;
                }
            } else {
                tekimove2stage2(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki2stage2: function() {
        var spriteteki2stage2 = new Spriteteki2stage2();
        this.addChild(spriteteki2stage2);
    },
    removeteki2stage2: function() {
        audioEngine.playEffect(res.jump03);
        akataositaflagstage2 = true;
        spriteteki2stage2.unschedule(this.workingteki2stage2);
        this.removeChild(spriteteki2stage2);
    },
    //3体目
    workingteki3stage2: function() {
        //距離で上下左右回り込むscriptを
        spriteteki3stage2.workingFlagteki3stage2 = (spriteteki3stage2.workingFlagteki3stage2 == true) ? false : true;
        if (spriteteki3stage2.workingFlagteki3stage2) spriteteki3stage2.initWithFile(res.tekikimigi);
        else spriteteki3stage2.initWithFile(res.tekikihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage2.x > enemyPosition3stage2.x && tekikabeflag3stage2 == 0) {
            if (levelstage2[enemyPosition3stage2.y][enemyPosition3stage2.x + 1] == 1 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 7 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 13 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 14 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 15 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage2.y >= enemyPosition3stage2.y) {
                    tekimove3stage2(0, -1);
                } else if (playerPositionstage2.y < enemyPosition3stage2.y) {
                    tekimove3stage2(0, 1);
                }

            } else {
                tekimove3stage2(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage2.y > enemyPosition3stage2.y && tekikabeflag3stage2 == 0) {
            if (levelstage2[enemyPosition3stage2.y + 1][enemyPosition3stage2.x] == 1 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 7 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 13 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 14 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 15 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 16) {
                if (playerPositionstage2.x > enemyPosition3stage2.x) {
                    tekimove3stage2(-1, 0);
                } else if (playerPositionstage2.x <= enemyPosition3stage2.x) {
                    tekimove3stage2(1, 0);
                }
            } else {
                tekimove3stage2(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage2.x < enemyPosition3stage2.x && tekikabeflag3stage2 == 0) {
            if (levelstage2[enemyPosition3stage2.y][enemyPosition3stage2.x - 1] == 1 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 7 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 13 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 14 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 15 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 16) {
                if (playerPositionstage2.y > enemyPosition3stage2.y) {
                    tekimove3stage2(0, -1);
                } else if (playerPositionstage2.y <= enemyPosition3stage2.y) {
                    tekimove3stage2(0, 1);
                }
            } else {
                tekimove3stage2(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage2.y < enemyPosition3stage2.y || tekikabeflag3stage2 == 1) {

            if (levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 1 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 7 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 13 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 14 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 15 || levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 16) {

                tekikabeflag3stage2 = 1;
                tekimove3stage2(1, 0);
                if (levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 1 && levelstage2[enemyPosition3stage2.y][enemyPosition3stage2.x + 1] == 1) {
                    tekimove3stage2(0, -1);
                    tekikabeflag3stage2 = 0;
                }
            } else if (levelstage2[enemyPosition3stage2.y - 1][enemyPosition3stage2.x] == 0 && tekikabeflag3stage2 == 1) {
                //tekikabeflag = 0;
                tekimove3stage2(0, -1);
                console.log("上空白　上移動")
                if (levelstage2[enemyPosition3stage2.y][enemyPosition3stage2.x - 1] == 0 && tekikabeflag3stage2 == 1) {
                    tekikabeflag3stage2 = 0;
                }
            } else {
                tekimove3stage2(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki3stage2: function() {
        var spriteteki3stage2 = new Spriteteki3stage2();
        this.addChild(spriteteki3stage2);
    },
    removeteki3stage2: function() {
        audioEngine.playEffect(res.jump03);
        kitaositaflagstage2 = true;
        spriteteki3stage2.unschedule(this.workingteki3stage2);
        this.removeChild(spriteteki3stage2);
    },
    //4体目
    workingteki4stage2: function() {
        //距離で上下左右回り込むscriptを
        spriteteki4stage2.workingFlagteki4stage2 = (spriteteki4stage2.workingFlagteki4stage2 == true) ? false : true;
        if (spriteteki4stage2.workingFlagteki4stage2) spriteteki4stage2.initWithFile(res.tekimidorimigi);

        else spriteteki4stage2.initWithFile(res.tekimidorihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage2
            .x > enemyPosition4stage2
            .x && tekikabeflag4 == 0) {
            if (levelstage2[enemyPosition4stage2
                    .y][enemyPosition4stage2
                    .x + 1
                ] == 1 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 7 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 13 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 14 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 15 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage2
                    .y >= enemyPosition4stage2
                    .y) {
                    tekimove4stage2(0, -1);
                } else if (playerPositionstage2
                    .y < enemyPosition4stage2
                    .y) {
                    tekimove4stage2(0, 1);
                }

            } else {
                tekimove4stage2(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage2
            .y > enemyPosition4stage2
            .y && tekikabeflag4stage2 == 0) {
            if (levelstage2[enemyPosition4stage2
                    .y + 1][enemyPosition4stage2
                    .x
                ] == 1 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 7 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 13 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 14 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 15 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 16) {
                if (playerPositionstage2
                    .x > enemyPosition4stage2
                    .x) {
                    tekimove4stage2(-1, 0);
                } else if (playerPositionstage2
                    .x <= enemyPosition4stage2
                    .x) {
                    tekimove4stage2(1, 0);
                }
            } else {
                tekimove4stage2(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage2
            .x < enemyPosition4stage2
            .x && tekikabeflag4stage2 == 0) {
            if (levelstage2[enemyPosition4stage2
                    .y][enemyPosition4stage2
                    .x - 1
                ] == 1 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 7 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 13 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 14 || levelstage2[enemyPosition4stage2.y - 1][enemyPosition4stage2.x] == 15 || levelstage2[enemyPosition4stage2.y - 1][enemyPositionstage2.x] == 16) {
                if (playerPositionstage2
                    .y > enemyPosition4stage2
                    .y) {
                    tekimove4stage2(0, -1);
                } else if (playerPositionstage2
                    .y <= enemyPosition4stage2
                    .y) {
                    tekimove4stage2(0, 1);
                }
            } else {
                tekimove4stage2(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage2
            .y < enemyPosition4stage2
            .y || tekikabeflag4stage2 == 1) {

            if (levelstage2[enemyPosition4stage2
                    .y - 1][enemyPosition4stage2
                    .x
                ] == 1 || levelstage2[enemyPosition4stage2
                    .y - 1][enemyPosition4stage2
                    .x
                ] == 7 || levelstage2[enemyPosition4stage2
                    .y - 1][enemyPosition4stage2
                    .x
                ] == 13 || levelstage2[enemyPosition4stage2
                    .y - 1][enemyPosition4stage2
                    .x
                ] == 14 || levelstage2[enemyPosition4stage2
                    .y - 1][enemyPosition4stage2
                    .x
                ] == 15 || levelstage2[enemyPosition4stage2
                    .y - 1][enemyPosition4stage2
                    .x
                ] == 16) {

                tekikabeflag4stage2 = 1;
                tekimove4stage2(1, 0);
                if (levelstage2[enemyPosition4stage2
                        .y - 1][enemyPosition4stage2
                        .x
                    ] == 1 && levelstage2[enemyPosition4stage2
                        .y][enemyPosition4stage2
                        .x + 1
                    ] == 1) {
                    tekimove4stage2(0, -1);
                    tekikabeflag4stage2 = 0;
                }
            } else if (levelstage2[enemyPosition4stage2
                    .y - 1][enemyPosition4stage2
                    .x
                ] == 0 && tekikabeflag4stage2 == 1) {
                //tekikabeflag = 0;
                tekimove4stage2(0, -1);
                console.log("上空白　上移動")
                if (levelstage2[enemyPosition4stage2
                        .y][enemyPosition4stage2
                        .x - 1
                    ] == 0 && tekikabeflag4stage2 == 1) {
                    tekikabeflag4stage2 = 0;
                }
            } else {
                tekimove4stage2(0, -1);
            }
        }
    },
    //敵を消すため
    addspriteteki4stage2: function() {
        var spriteteki4stage2 = new spriteteki4stage2();
        this.addChild(spriteteki4stage2);
    },
    removeteki4stage2: function() {
        audioEngine.playEffect(res.jump03);
        midoritaositaflagstage2 = true;
        spriteteki4stage2.unschedule(this.workingteki4);
        this.removeChild(spriteteki4stage2);
    },
    //5体目
    workingteki5stage2: function() {
        //距離で上下左右回り込むscriptを
        spriteteki5stage2.workingFlagteki5stage2 = (spriteteki5stage2.workingFlagteki5stage2 == true) ? false : true;
        if (spriteteki5stage2.workingFlagteki5stage2) spriteteki5stage2.initWithFile(res.tekimurasakimigi);
        else spriteteki5stage2.initWithFile(res.tekimurasakihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage2
            .x > enemyPosition5stage2.x && tekikabeflag5stage2 == 0) {
            if (levelstage2[enemyPosition5stage2.y][enemyPosition5stage2.x + 1] == 1 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 7 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 13 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 14 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 15 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage2
                    .y >= enemyPosition5stage2.y) {
                    tekimove5stage2(0, -1);
                } else if (playerPositionstage2
                    .y < enemyPosition5stage2.y) {
                    tekimove5stage2(0, 1);
                }

            } else {
                tekimove5stage2(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage2
            .y > enemyPosition5stage2.y && tekikabeflag5stage2 == 0) {
            if (levelstage2[enemyPosition5stage2.y + 1][enemyPosition5stage2.x] == 1 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 7 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 13 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 14 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 15 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 16) {
                if (playerPositionstage2
                    .x > enemyPosition5stage2.x) {
                    tekimove5stage2(-1, 0);
                } else if (playerPositionstage2
                    .x <= enemyPosition5stage2.x) {
                    tekimove5stage2(1, 0);
                }
            } else {
                tekimove5stage2(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage2
            .x < enemyPosition5stage2.x && tekikabeflag5stage2 == 0) {
            if (levelstage2[enemyPosition5stage2.y][enemyPosition5stage2.x - 1] == 1 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 7 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 13 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 14 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 15 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 16) {
                if (playerPositionstage2
                    .y > enemyPosition5stage2.y) {
                    tekimove5stage2(0, -1);
                } else if (playerPositionstage2
                    .y <= enemyPosition5stage2.y) {
                    tekimove5stage2(0, 1);
                }
            } else {
                tekimove5stage2(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage2
            .y < enemyPosition5stage2.y || tekikabeflag5 == 1) {

            if (levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 1 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 7 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 13 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 14 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 15 || levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 16) {

                tekikabeflag5stage2 = 1;
                tekimove5stage2(1, 0);
                if (levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 1 && levelstage2[enemyPosition5stage2.y][enemyPosition5stage2.x + 1] == 1) {
                    tekimove5stage2(0, -1);
                    tekikabeflag5stage2 = 0;
                }
            } else if (levelstage2[enemyPosition5stage2.y - 1][enemyPosition5stage2.x] == 0 && tekikabeflag5stage2 == 1) {
                //tekikabeflag = 0;
                tekimove5stage2(0, -1);
                console.log("上空白　上移動")
                if (levelstage2[enemyPosition5stage2.y][enemyPosition5stage2.x - 1] == 0 && tekikabeflag5stage2 == 1) {
                    tekikabeflag5stage2 = 0;
                }
            } else {
                tekimove5stage2(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki5stage2: function() {
        var spriteteki5stage2 = new Spriteteki5stage2();
        this.addChild(spriteteki5stage2);
    },
    removeteki5stage2: function() {
        audioEngine.playEffect(res.jump03);
        murasakitaositaflagstage2 = true;
        spriteteki5stage2.unschedule(this.workingteki5stage2);
        this.removeChild(spriteteki5stage2);
    },
    removedotstage2: function(dotspritestage2) {

        this.removeChild(dotspritestage2);
    },
});



var MemoryTileuestage2 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.ue);
        cc.eventManager.addListener(listener2stage2.clone(), this);

    }

});
var MemoryTilemigistage2 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.migi);
        cc.eventManager.addListener(listener3stage2.clone(), this);
    }
});
var MemoryTilesitastage2 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.sita);
        cc.eventManager.addListener(listener4stage2.clone(), this);
    }
});
var MemoryTilehidaristage2 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.hidari);
        cc.eventManager.addListener(listener5stage2.clone(), this);
    }
});
var listener2stage2 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印前.png");
            pickedTilesstage2.push(target);

            ueniikustage2();


        }
    }
});

var listener3stage2 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印右.png");
            pickedTilesstage2.push(target);

            miginiikustage2();


        }
    }
});

var listener4stage2 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印後.png");
            pickedTilesstage2.push(target);

            sitaniikustage2();


        }
    }
});

var listener5stage2 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();

        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印左.png");
            pickedTilesstage2.push(target);

            hidariniikustage2();


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
                movestage2(1, 0);
            } else { //左方向移動
                movestage2(-1, 0);
            }
        } else {
            if (distY > 0) { //上方向移動
                //console.log("上 move(0,-1) distY "+ distY );
                movestage2(0, -1);
            } else { //下方向移動
                //console.log("下 move(0,1) distY "+ distY );
                movestage2(0, 1);
            }
        }
    }
}

function movestage2(deltaXstage2, deltaYstage2) {


    switch (levelstage2[playerPositionstage2
        .y + deltaYstage2][playerPositionstage2
        .x + deltaXstage2
    ]) {
        case 7:
            if (levelstage2[playerPositionstage2.y + deltaYstage2][playerPositionstage2.x + deltaXstage2] == 7) {
                levelstage2[playerPositionstage2.y][playerPositionstage2.x] -= 4;
                playerPositionstage2.x += deltaXstage2;
                playerPositionstage2.y += deltaYstage2;

                levelstage2[playerPositionstage2.y][playerPositionstage2.x] += 4;
                playerSpritestage2.setPosition(30 + 75 * playerPositionstage2.x, 1140 - 75 * playerPositionstage2.y);
                if (playerSpritestage2.tekisyoutotustage2 == 1 && aotaositaflagstage2 == false) {
                    layer0stage2.removetekistage2(spritetekistage2);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage2.invulnerabilitystage2 == 0 && aotaositaflagstage2 == false) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
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
            if (levelstage2[playerPositionstage2.y + deltaYstage2][playerPositionstage2.x + deltaXstage2] == 16) {
                levelstage2[playerPositionstage2.y][playerPositionstage2.x] -= 4;
                playerPositionstage2.x += deltaXstage2;
                playerPositionstage2.y += deltaYstage2;

                levelstage2[playerPositionstage2.y][playerPositionstage2.x] += 4;
                playerSpritestage2.setPosition(30 + 75 * playerPositionstage2.x, 1140 - 75 * playerPositionstage2.y);
                if (playerSpritestage2.tekisyoutotustage2 == 5 && murasakitaositaflagstage2 == false) {
                    layer0stage2.removeteki5stage2(spriteteki5stage2);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage2.invulnerabilitystage2 == 0 && murasakitaositaflagstage2 == false) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
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
            if (levelstage2[playerPositionstage2.y + deltaYstage2][playerPositionstage2.x + deltaXstage2] == 15) {
                levelstage2[playerPositionstage2.y][playerPositionstage2.x] -= 4;
                playerPositionstage2.x += deltaXstage2;
                playerPositionstage2.y += deltaYstage2;

                levelstage2[playerPositionstage2.y][playerPositionstage2.x] += 4;
                playerSpritestage2.setPosition(30 + 75 * playerPositionstage2.x, 1140 - 75 * playerPositionstage2.y);
                if (playerSpritestage2.tekisyoutotustage2 == 4 && midoritaositaflagstage2 == false) {
                    layer0stage2.removeteki4stage2(spriteteki4stage2);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage2.invulnerabilitystage2 == 0 && midoritaositaflagstage2 == false) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
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
            if (levelstage2[playerPositionstage2.y + deltaYstage2][playerPositionstage2.x + deltaXstage2] == 14) {
                levelstage2[playerPositionstage2.y][playerPositionstage2.x] -= 4;
                playerPositionstage2.x += deltaXstage2;
                playerPositionstage2.y += deltaYstage2;

                levelstage2[playerPositionstage2.y][playerPositionstage2.x] += 4;
                playerSpritestage2.setPosition(30 + 75 * playerPositionstage2.x, 1140 - 75 * playerPositionstage2.y);
                if (playerSpritestage2.tekisyoutotustage2 == 3 && kitaositaflagstage2 == false) {
                    layer0stage2.removeteki3stage2(spriteteki3stage2);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage2.invulnerabilitystage2 == 0 && kitaositaflagstage2 == false) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
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
            if (levelstage2[playerPositionstage2.y + deltaYstage2][playerPositionstage2.x + deltaXstage2] == 13) {
                levelstage2[playerPositionstage2.y][playerPositionstage2.x] -= 4;
                playerPositionstage2.x += deltaXstage2;
                playerPositionstage2.y += deltaYstage2;

                levelstage2[playerPositionstage2.y][playerPositionstage2.x] += 4;
                playerSpritestage2.setPosition(30 + 75 * playerPositionstage2.x, 1140 - 75 * playerPositionstage2.y);
                if (playerSpritestage2.tekisyoutotustage2 == 2 && akataositaflagstage2 == false) {
                    layer0stage2.removeteki2stage2(spriteteki2stage2);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage2.invulnerabilitystage2 == 0 && akataositaflagstage2 == false) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
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

            if (levelstage2[playerPositionstage2
                    .y + deltaYstage2][playerPositionstage2
                    .x + deltaXstage2
                ] == 12) {
                playerSpritestage2.iroflagstage2 = true;
                playerSpritestage2.iroflagakastage2 = false;
                playerSpritestage2.iroflagaostage2 = false;
                playerSpritestage2.iroflagkistage2 = false;
                playerSpritestage2.iroflagmidoristage2 = false;
                playerSpritestage2.iroflagmurasakistage2 = true;
                playerSpritestage2.tekisyoutotustage2 = 5;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstage2[playerPositionstage2
                    .y + deltaYstage2][playerPositionstage2
                    .x + deltaXstage2
                ] == 11) {
                playerSpritestage2.iroflagstage2 = true;
                playerSpritestage2.iroflagakastage2 = false;
                playerSpritestage2.iroflagaostage2 = false;
                playerSpritestage2.iroflagkistage2 = false;
                playerSpritestage2.iroflagmidoristage2 = true;
                playerSpritestage2.iroflagmurasakistage2 = false;
                playerSpritestage2.tekisyoutotustage2 = 4;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstage2[playerPositionstage2
                    .y + deltaYstage2][playerPositionstage2
                    .x + deltaXstage2
                ] == 10) {
                playerSpritestage2.iroflagstage2 = true;
                playerSpritestage2.iroflagakastage2 = false;
                playerSpritestage2.iroflagaostage2 = false;
                playerSpritestage2.iroflagkistage2 = true;
                playerSpritestage2.iroflagmidoristage2 = false;
                playerSpritestage2.iroflagmurasakistage2 = false;
                playerSpritestage2.tekisyoutotustage2 = 3;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstage2[playerPositionstage2
                    .y + deltaYstage2][playerPositionstage2
                    .x + deltaXstage2
                ] == 9) {
                playerSpritestage2.iroflagstage2 = true;
                playerSpritestage2.iroflagakastage2 = true;
                playerSpritestage2.iroflagaostage2 = false;
                playerSpritestage2.iroflagkistage2 = false;
                playerSpritestage2.iroflagmidoristage2 = false;
                playerSpritestage2.iroflagmurasakistage2 = false;
                playerSpritestage2.tekisyoutotustage2 = 2;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstage2[playerPositionstage2
                    .y + deltaYstage2][playerPositionstage2
                    .x + deltaXstage2
                ] == 8) {
                playerSpritestage2.iroflagstage2 = true;
                playerSpritestage2.iroflagakastage2 = false;
                playerSpritestage2.iroflagaostage2 = true;
                playerSpritestage2.iroflagkistage2 = false;
                playerSpritestage2.iroflagmidoristage2 = false;
                playerSpritestage2.iroflagmurasakistage2 = false;
                playerSpritestage2.tekisyoutotustage2 = 1;
                audioEngine.playEffect(res.powerup08);
            }



            levelstage2
                [playerPositionstage2
                    .y][playerPositionstage2
                    .x
                ] -= 4;
            playerPositionstage2
                .x += deltaXstage2;
            playerPositionstage2
                .y += deltaYstage2;

            levelstage2
                [playerPositionstage2
                    .y][playerPositionstage2
                    .x
                ] += 4;


            playerSpritestage2.setPosition(30 + 75 * playerPositionstage2
                .x, 1140 - 75 * playerPositionstage2
                .y);

            break;
        case 3:
        case 5:

            break;
        case 2:
            if (levelstage2[playerPositionstage2
                    .y + deltaYstage2][playerPositionstage2
                    .x + deltaXstage2
                ] == 2) {
                levelstage2
                    [playerPositionstage2
                        .y][playerPositionstage2
                        .x
                    ] -= 4;
                playerPositionstage2
                    .x += deltaXstage2;
                playerPositionstage2
                    .y += deltaYstage2;

                levelstage2
                    [playerPositionstage2
                        .y][playerPositionstage2
                        .x
                    ] += 4;
                playerSpritestage2.setPosition(30 + 75 * playerPositionstage2
                    .x, 1140 - 75 * playerPositionstage2
                    .y);



                //layer0stage2.removedotstage2(spritedotstage2);
                layer0stage2.removedotstage2(dotArraystage2[playerPositionstage2.y][playerPositionstage2.x]);
                levelstage2[playerPositionstage2.y][playerPositionstage2.x] = 4;
                miss++;
                missText.setString("SCORE " + miss);

                //deltaX += 5;
                dottota++;
                audioEngine.playEffect(res.dotnooto);
                if (dottota == 69) {
                    //miss = 0;
                    cc.director.runScene(new ResultScene());
                    //deltaY -= 1;
                    dottota = 0;

                }
                break;
            }


    }

}

function tekimovestage2(deltaX2stage2, deltaY2stage2) {


    switch (levelstage2[enemyPositionstage2.y + deltaY2stage2][enemyPositionstage2.x + deltaX2stage2]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 2:
        case 0:
        case 7:
        case 13:


            levelstage2
                [enemyPositionstage2.y][enemyPositionstage2.x] -= 7;
            enemyPositionstage2.x += deltaX2stage2;
            enemyPositionstage2.y += deltaY2stage2;

            levelstage2
                [enemyPositionstage2.y][enemyPositionstage2.x] += 7;
            //ここ
            var nowPosXstage2 = spritetekistage2.getPosition().x;
            var nowPosYstage2 = spritetekistage2.getPosition().y;

            var newPosXstage2 = 30 + 75 * enemyPositionstage2.x;
            var newPosYstage2 = 1140 - 75 * enemyPositionstage2.y;

            spritetekistage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosXstage2, newPosYstage2)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage2[enemyPositionstage2.y + deltaY2stage2][enemyPositionstage2.x + deltaX2stage2] == 4) {
                levelstage2
                    [enemyPositionstage2.y][enemyPositionstage2.x] -= 7;
                enemyPositionstage2.x += deltaX2stage2;
                enemyPositionstage2.y += deltaY2stage2;
                levelstage2
                    [enemyPositionstage2.y][enemyPositionstage2.x] += 7;

                var nowPosXstage2 = spritetekistage2.getPosition().x;
                var nowPosYstage2 = spritetekistage2.getPosition().y;

                var newPosXstage2 = 30 + 75 * enemyPositionstage2.x;
                var newPosYstage2 = 1140 - 75 * enemyPositionstage2.y;
                spritetekistage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosXstage2, newPosYstage2)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage2.tekisyoutotustage2 == 1) {
                    layer0stage2.removetekistage2(spritetekistage2);

                } else if (playerSpritestage2.invulnerabilitystage2 == 0) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
                    audioEngine.playEffect(res.damage7);
                    deltaX2stage2 += 1;
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

function tekimove2stage2(deltaX3stage2, deltaY3stage2) {


    switch (levelstage2[enemyPosition2stage2.y + deltaY3stage2][enemyPosition2stage2.x + deltaX3stage2]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 2:
        case 0:
        case 7:
        case 13:


            levelstage2
                [enemyPosition2stage2.y][enemyPosition2stage2.x] -= 13;
            enemyPosition2stage2.x += deltaX3stage2;
            enemyPosition2stage2.y += deltaY3stage2;

            levelstage2
                [enemyPosition2stage2.y][enemyPosition2stage2.x] += 13;
            //ここ
            var nowPosX2stage2 = spriteteki2stage2.getPosition().x;
            var nowPosY2stage2 = spriteteki2stage2.getPosition().y;

            var newPosX2stage2 = 30 + 75 * enemyPosition2stage2.x;
            var newPosY2stage2 = 1140 - 75 * enemyPosition2stage2.y;

            spriteteki2stage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX2stage2, newPosY2stage2)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage2[enemyPosition2stage2.y + deltaY3stage2][enemyPosition2stage2.x + deltaX3stage2] == 4) {
                levelstage2
                    [enemyPosition2stage2.y][enemyPosition2stage2.x] -= 13;
                enemyPosition2stage2.x += deltaX3stage2;
                enemyPosition2stage2.y += deltaY3stage2;
                levelstage2
                    [enemyPosition2stage2.y][enemyPosition2stage2.x] += 13;

                var nowPosX2stage2 = spriteteki2stage2.getPosition().x;
                var nowPosY2stage2 = spriteteki2stage2.getPosition().y;

                var newPosX2stage2 = 30 + 75 * enemyPosition2stage2.x;
                var newPosY2stage2 = 1140 - 75 * enemyPosition2stage2.y;
                spriteteki2stage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX2stage2, newPosY2stage2)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage2.tekisyoutotustage2 == 2) {
                    layer0stage2.removeteki2stage2(spriteteki2stage2);



                } else if (playerSpritestage2.invulnerabilitystage2 == 0) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
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

function tekimove3stage2(deltaX4stage2, deltaY4stage2) {


    switch (levelstage2[enemyPosition3stage2.y + deltaY4stage2][enemyPosition3stage2.x + deltaX4stage2]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 2:
        case 0:
        case 7:
        case 13:


            levelstage2
                [enemyPosition3stage2.y][enemyPosition3stage2.x] -= 14;
            enemyPosition3stage2.x += deltaX4stage2;
            enemyPosition3stage2.y += deltaY4stage2;

            levelstage2
                [enemyPosition3stage2.y][enemyPosition3stage2.x] += 14;
            //ここ
            var nowPosX3stage2 = spriteteki3stage2.getPosition().x;
            var nowPosY3stage2 = spriteteki3stage2.getPosition().y;

            var newPosX3stage2 = 30 + 75 * enemyPosition3stage2.x;
            var newPosY3stage2 = 1140 - 75 * enemyPosition3stage2.y;

            spriteteki3stage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX3stage2, newPosY3stage2)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage2[enemyPosition3stage2.y + deltaY4stage2][enemyPosition3stage2.x + deltaX4stage2] == 4) {
                levelstage2
                    [enemyPosition3stage2.y][enemyPosition3stage2.x] -= 14;
                enemyPosition3stage2.x += deltaX4stage2;
                enemyPosition3stage2.y += deltaY4stage2;
                levelstage2
                    [enemyPosition3stage2.y][enemyPosition3stage2.x] += 14;

                var nowPosX3stage2 = spriteteki3stage2.getPosition().x;
                var nowPosY3stage2 = spriteteki3stage2.getPosition().y;

                var newPosX3stage2 = 30 + 75 * enemyPosition3stage2.x;
                var newPosY3stage2 = 1140 - 75 * enemyPosition3stage2.y;
                spriteteki3stage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX3stage2, newPosY3stage2)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage2.tekisyoutotustage2 == 3) {
                    layer0stage2.removeteki3stage2(spriteteki3stage2);


                } else if (playerSpritestage2.invulnerabilitystage2 == 0) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
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

function tekimove4stage2(deltaX5stage2, deltaY5stage2) {


    switch (levelstage2[enemyPosition4stage2
        .y + deltaY5stage2][enemyPosition4stage2
        .x + deltaX5stage2
    ]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 2:
        case 0:
        case 7:
        case 13:


            levelstage2
                [enemyPosition4stage2
                    .y][enemyPosition4stage2
                    .x
                ] -= 15;
            enemyPosition4stage2
                .x += deltaX5stage2;
            enemyPosition4stage2
                .y += deltaY5stage2;

            levelstage2
                [enemyPosition4stage2
                    .y][enemyPosition4stage2
                    .x
                ] += 15;
            //ここ
            var nowPosX4stage2 = spriteteki4stage2.getPosition().x;
            var nowPosY4stage2 = spriteteki4stage2.getPosition().y;

            var newPosX4stage2 = 30 + 75 * enemyPosition4stage2
                .x;
            var newPosY4stage2 = 1140 - 75 * enemyPosition4stage2
                .y;

            spriteteki4stage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX4stage2, newPosY4stage2)));
            //spriteteki.setPosition(newPosX,newPosY);
            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage2[enemyPosition4stage2
                    .y + deltaY5stage2][enemyPosition4stage2
                    .x + deltaX5stage2
                ] == 4) {
                levelstage2
                    [enemyPosition4stage2
                        .y][enemyPosition4stage2
                        .x
                    ] -= 15;
                enemyPosition4stage2
                    .x += deltaX5stage2;
                enemyPosition4stage2
                    .y += deltaY5stage2;
                levelstage2
                    [enemyPosition4stage2
                        .y][enemyPosition4stage2
                        .x
                    ] += 15;

                var nowPosX4stage2 = spriteteki4stage2.getPosition().x;
                var nowPosY4stage2 = spriteteki4stage2.getPosition().y;

                var newPosX4stage2 = 30 + 75 * enemyPosition4stage2
                    .x;
                var newPosY4stage2 = 1140 - 75 * enemyPosition4stage2
                    .y;
                spriteteki4stage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX4stage2, newPosY4stage2)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage2.tekisyoutotustage2 == 4) {
                    layer0stage2.removeteki4stage2(spriteteki4stage2);


                } else if (playerSpritestage2.invulnerabilitystage2 == 0) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
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

function tekimove5stage2(deltaX6stage2, deltaY6stage2) {


    switch (levelstage2[enemyPosition5stage2.y + deltaY6stage2][enemyPosition5stage2.x + deltaX6stage2]) {
        case 16:
        case 15:
        case 14:
        case 12:
        case 11:
        case 8:
        case 9:
        case 10:
        case 2:
        case 0:
        case 7:
        case 13:


            levelstage2
                [enemyPosition5stage2.y][enemyPosition5stage2.x] -= 16;
            enemyPosition5stage2.x += deltaX6stage2;
            enemyPosition5stage2.y += deltaY6stage2;

            levelstage2
                [enemyPosition5stage2.y][enemyPosition5stage2.x] += 16;
            //ここ
            var nowPosX5stage2 = spriteteki5stage2.getPosition().x;
            var nowPosY5stage2 = spriteteki5stage2.getPosition().y;

            var newPosX5stage2 = 30 + 75 * enemyPosition5stage2.x;
            var newPosY5stage2 = 1140 - 75 * enemyPosition5stage2.y;

            spriteteki5stage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX5stage2, newPosY5stage2)));
            //spriteteki.setPosition(newPosX,newPosY);
            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage2[enemyPosition5stage2.y + deltaY6stage2][enemyPosition5stage2.x + deltaX6stage2] == 4) {
                levelstage2
                    [enemyPosition5stage2.y][enemyPosition5stage2.x] -= 16;
                enemyPosition5stage2.x += deltaX6stage2;
                enemyPosition5stage2.y += deltaY6stage2;
                levelstage2
                    [enemyPosition5stage2.y][enemyPosition5stage2.x] += 16;

                var nowPosX5stage2 = spriteteki5stage2.getPosition().x;
                var nowPosY5stage2 = spriteteki5stage2.getPosition().y;

                var newPosX5stage2 = 30 + 75 * enemyPosition5stage2.x;
                var newPosY5stage2 = 1140 - 75 * enemyPosition5stage2.y;
                spriteteki5stage2.runAction(cc.MoveTo.create(0.5, cc.p(newPosX5stage2, newPosY5stage2)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage2.tekisyoutotustage2 == 5) {
                    layer0stage2.removeteki5stage2(spriteteki5stage2);


                } else if (playerSpritestage2.invulnerabilitystage2 == 0) {
                    playerSpritestage2.invulnerabilitystage2 = 100;
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
function hidariniikustage2() {
    movestage2(-1, 0);
    //  tekimove(-1, 0);
}
//上
function ueniikustage2() {
    //playerSprite.initWithFile(res.paintmansiro2);

    movestage2(0, -1);
    //tekimove(0, -1);
    /*var pause = setTimeout(function() {

    }, 500);
    */
}
//右
function miginiikustage2() {
    movestage2(1, 0);
    //tekimove(1, 0);
}
//下
function sitaniikustage2() {
    movestage2(0, 1);
    //tekimove(0, 1);
    //spritedot.initWithFile(res.paintmansiro2);
}
//goを消すための
function gokesi() {

}
