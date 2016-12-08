var sizestage3;
//var stageflag = 0;

var levelstage3;

var overresetstage3;
var levelstage3 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 8, 2, 7, 13, 2, 2, 2, 2, 2, 2, 16, 1],
    [1, 2, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 15, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 11, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 10, 1],
    [1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1],
    [1, 2, 9, 14, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 10, 12, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 11, 9, 1, 1, 2, 1],
    [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

overresetstage3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 8, 2, 7, 13, 2, 2, 2, 2, 2, 2, 16, 1],
  [1, 2, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 15, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 11, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 10, 1],
  [1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 2, 9, 14, 2, 2, 2, 2, 2, 2, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 2, 10, 12, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 1, 1, 11, 9, 1, 1, 2, 1],
  [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 8, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


//kokoko = level[];
var playerPositionstage3; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var enemyPositionstage3;
var enemyPosition2stage3;
var enemyPosition3stage3;
var enemyPosition4stage3;
var enemyPosition5stage3;
var playerSpritestage3; //プレイヤーのスプライト
var spritetekistage3;
var spriteteki2stage3;
var spriteteki3stage3;
var spriteteki4stage3;
var spriteteki5stage3;
var cratesArraystage3 = []; //配置した木箱のスプライトを配列に保持する
var dotArraystage3 = [];
var tekiArraystage3 = [];
var tekiArray2stage3 = [];
var tekiArray3stage3 = [];
var tekiArray4stage3 = [];
var tekiArray5stage3 = [];
var spritedotstage3;


var startTouchstage3;
var endTouchstage3;
var swipeTolerancestage3 = 10; //スワイプかを判断する閾値
var audioEnginestage3;
var flagstage3 = 0;
var pickedTilesstage3 = [];
var dotstage3 = [];
var stagetextstage3;
var tekikabeflagstage3 = 0;
var tekikabeflag2stage3 = 0;
var tekikabeflag3stage3 = 0;
var tekikabeflag4stage3 = 0;
var tekikabeflag5stage3 = 0;
var layer0stage3;

var aotaositaflagstage3 = false;
var akataositaflagstage3 = false;
var kitaositaflagstage3 = false;
var midoritaositaflagstage3 = false;
var murasakitaositaflagstage3 = false;

var gameScene3 = cc.Scene.extend({
    onEnter: function() {
        this._super();

        layer0stage3
            = new gameLayerstage3();
        layer0stage3
            .init();
        this.addChild(layer0stage3);

        //var enemys = new enemyLayer();
        //this.addChild(enemys);

        //音楽再生エンジン
        audioEnginestage3
            = cc.audioEngine;
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
        stagetextstage3
            = cc.LabelTTF.create("STAGE 3", "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(stagetextstage3);
        stagetextstage3
            .setPosition(600, 1350);
        stagetextstage3
            .setScale(3.5);
    }
});

var gameLayerstage3 = cc.Layer.extend({
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
        var levelSprite2stage3 = cc.Sprite.create(res.backsiro);
        levelSprite2stage3
            .setPosition(80, 730);
        levelSprite2stage3
            .setScale(4.4, 2.2);
        this.addChild(levelSprite2stage3);



        var sprite7stage3 = cc.Sprite.create(res.kakeru);
        sprite7stage3
            .setPosition(175, 1350);
        sprite7stage3
            .setScale(1);
        this.addChild(sprite7stage3, 0);

        var sprite8stage3 = cc.Sprite.create(res.paintmansiro1);
        sprite8stage3
            .setPosition(100, 1350);
        sprite8stage3
            .setScale(0.3);
        this.addChild(sprite8stage3, 0);

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
            var tilestage3 = new MemoryTileuestage3();
            this.addChild(tilestage3, 0);
            //タイルを格子状に配置する計算式
            tilestage3
                .setPosition(480 + i % 6 * 74, 220 - Math.floor(i / 6) * 74);
            tilestage3
                .setScale(0.25, 0.25);

        }

        for (i = 0; i < 1; i++) {
            var tilestage3 = new MemoryTilemigistage3();
            this.addChild(tilestage3, 0);
            //タイルを格子状に配置する計算式
            tilestage3
                .setPosition(615 + i % 6 * 74, 125 - Math.floor(i / 6) * 74);
            tilestage3
                .setScale(0.25, 0.25);

        }
        for (i = 0; i < 1; i++) {
            var tilestage3 = new MemoryTilesitastage3();
            this.addChild(tilestage3, 0);
            //タイルを格子状に配置する計算式
            tilestage3
                .setPosition(480 + i % 6 * 74, 70 - Math.floor(i / 6) * 74);
            tilestage3
                .setScale(0.25, 0.25);

        }
        for (i = 0; i < 1; i++) {
            var tilestage3 = new MemoryTilehidaristage3();
            this.addChild(tilestage3, 0);
            //タイルを格子状に配置する計算式
            tilestage3
                .setPosition(345 + i % 6 * 74, 125 - Math.floor(i / 6) * 74);
            tilestage3
                .setScale(0.25, 0.25);

        }

        for (i = 0; i < 12; i++) {　　　　　　
            cratesArraystage3
                [i] = [];　 //配列オブジェクトの生成
            dotArraystage3
                [i] = [];
            tekiArraystage3
                [i] = [];
            tekiArray2stage3
                [i] = [];
            tekiArray3stage3
                [i] = [];
            tekiArray4stage3
                [i] = [];
            tekiArray5stage3
                [i] = [];

            for (j = 0; j < 15; j++) {
                var resetstage3 = overresetstage3[i][j];
                levelstage3[i][j] = resetstage3;
                switch (levelstage3[i][j]) {
                    case 0:
                        var spriteyukastage3 = cc.Sprite.create(res.yuka);
                        spriteyukastage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukastage3
                            .setScale(0.21);
                        this.addChild(spriteyukastage3, 0);
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage3
                            [i][j] = null;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;
                    case 1:
                        var spritekabestage3 = cc.Sprite.create(res.kabeblock);
                        spritekabestage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritekabestage3
                            .setScale(0.19);
                        this.addChild(spritekabestage3, 0);
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage3
                            [i][j] = null;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;

                    case 2:
                        spritedotstage3
                            = cc.Sprite.create(res.dot);
                        spritedotstage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritedotstage3
                            .setScale(0.15);
                        this.addChild(spritedotstage3, 0);
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage3
                            [i][j] = spritedotstage3;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;
                    case 4:

                    case 6:
                        playerSpritestage3
                            = cc.Sprite.create(res.paintmansiro1);
                        playerSpritestage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        playerSpritestage3
                            .setScale(0.3);
                        this.addChild(playerSpritestage3, 1);
                        //  playerSprite.invulnerability = 0;
                        playerSpritestage3
                            .tekisyoutotustage3 = 0;
                        playerSpritestage3
                            .workingFlagstage3 = false;
                        playerSpritestage3
                            .workingFlag2stage3 = false;
                        playerSpritestage3
                            .workingFlag3stage3 = false;
                        playerSpritestage3
                            .workingFlag4stage3 = false;
                        playerSpritestage3
                            .workingFlag5stage3 = false;
                        playerSpritestage3
                            .workingFlag6stage3 = false;
                        playerSpritestage3
                            .iroflagstage3 = false;
                        playerSpritestage3
                            .iroflagakastage3 = false;
                        playerSpritestage3
                            .iroflagaostage3 = false;
                        playerSpritestage3
                            .iroflagkistage3 = false;
                        playerSpritestage3
                            .iroflagmidoristage3 = false;
                        playerSpritestage3
                            .iroflagmurasakistage3 = false;
                        playerSpritestage3
                            .schedule(this.workingstage3, 0.5);
                        playerSpritestage3
                            .schedule(this.working2stage3, 0.5);
                        playerSpritestage3
                            .schedule(this.working3stage3, 0.5);
                        playerSpritestage3
                            .schedule(this.working4stage3, 0.5);
                        playerSpritestage3
                            .schedule(this.working5stage3, 0.5);
                        playerSpritestage3
                            .schedule(this.working6stage3, 0.5);
                        playerSpritestage3
                            .invulnerabilitystage3 = 0; //無敵モード時間　初期値0
                        this.scheduleUpdate();






                        playerPositionstage3
                            = {
                                x: j,
                                y: i
                            };　　　　　　　　　　　　
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage3
                            [i][j] = null;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;

                    case 3:
                    case 5:
                        var crateSpritestage3 = cc.Sprite.create(cache.getSpriteFrame("crate.png"));
                        crateSpritestage3
                            .setPosition(115 + 25 * j, 285 - 25 * i);
                        crateSpritestage3
                            .setScale(5);
                        this.addChild(crateSpritestage3);
                        cratesArraystage3
                            [i][j] = crateSpritestage3; //(i,j)の位置にcrateSpriteを入れる
                        dotArraystage3
                            [i][j] = null;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;
                    case 7:
                        spritetekistage3
                            = cc.Sprite.create(res.tekimannakako);
                        spritetekistage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritetekistage3
                            .setScale(0.3);
                        this.addChild(spritetekistage3, 1);
                        spritetekistage3
                            .workingFlagtekistage3 = false;
                        spritetekistage3
                            .schedule(this.workingtekistage3, 0.5);

                        /*var moveAction = cc.MoveTo.create(10.5, new cc.Point(550, 0));
                        spriteteki.runAction(moveAction);*/
                        enemyPositionstage3
                            = {
                                x: j,
                                y: i
                            };　　
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArraystage3
                            [i][j] = spritetekistage3;
                        dotArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;
                    case 8:
                        var spriteiroyukaaostage3 = cc.Sprite.create(res.iroyukaao);
                        spriteiroyukaaostage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteiroyukaaostage3
                            .setScale(0.19, 0.18);
                        this.addChild(spriteiroyukaaostage3, 0);
                        cratesArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;

                        break;
                    case 9:
                        var spriteyukaakastage3 = cc.Sprite.create(res.iroyukaaka);
                        spriteyukaakastage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukaakastage3
                            .setScale(0.19, 0.18);
                        this.addChild(spriteyukaakastage3, 0);
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage3
                            [i][j] = null;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;
                    case 10:
                        var spriteyukakistage3 = cc.Sprite.create(res.iroyukaki);
                        spriteyukakistage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukakistage3
                            .setScale(0.19, 0.18);
                        this.addChild(spriteyukakistage3, 0);
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage3
                            [i][j] = null;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;
                    case 11:
                        var spriteyukamidoristage3 = cc.Sprite.create(res.iroyukamidori);
                        spriteyukamidoristage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamidoristage3
                            .setScale(0.19, 0.18);
                        this.addChild(spriteyukamidoristage3, 0);
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage3
                            [i][j] = null;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;
                    case 12:
                        var spriteyukamurasakistage3 = cc.Sprite.create(res.iroyukamurasaki);
                        spriteyukamurasakistage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamurasakistage3
                            .setScale(0.19, 0.18);
                        this.addChild(spriteyukamurasakistage3, 0);
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystage3
                            [i][j] = null;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        break;
                    case 13:
                        spriteteki2stage3
                            = cc.Sprite.create(res.tekimannakaaka);
                        spriteteki2stage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki2stage3
                            .setScale(0.3);
                        this.addChild(spriteteki2stage3, 1);
                        spriteteki2stage3
                            .workingFlagteki2stage3 = false;
                        spriteteki2stage3
                            .schedule(this.workingteki2stage3, 0.5);

                        enemyPosition2stage3
                            = {
                                x: j,
                                y: i
                            };　　
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray2stage3
                            [i][j] = spriteteki2stage3;
                        dotArraystage3
                            [i][j] = null;
                        break;
                    case 14:
                        spriteteki3stage3
                            = cc.Sprite.create(res.tekimannakaki);
                        spriteteki3stage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki3stage3
                            .setScale(0.3);
                        this.addChild(spriteteki3stage3, 1);
                        spriteteki3stage3
                            .workingFlagteki3stage3 = false;
                        spriteteki3stage3
                            .schedule(this.workingteki3stage3, 0.5);

                        enemyPosition3stage3
                            = {
                                x: j,
                                y: i
                            };　　
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray3stage3
                            [i][j] = spriteteki3stage3;
                        dotArraystage3
                            [i][j] = null;
                        break;
                    case 15:
                        spriteteki4stage3
                            = cc.Sprite.create(res.tekimannakamidori);
                        spriteteki4stage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki4stage3
                            .setScale(0.3);
                        this.addChild(spriteteki4stage3, 1);
                        spriteteki4stage3
                            .workingFlagteki4stage3 = false;
                        spriteteki4stage3
                            .schedule(this.workingteki4stage3, 0.5);

                        enemyPosition4stage3
                            = {
                                x: j,
                                y: i
                            };　　
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray4stage3
                            [i][j] = spriteteki4stage3;
                        dotArraystage3
                            [i][j] = null;
                        break;
                    case 16:
                        spriteteki5stage3
                            = cc.Sprite.create(res.tekimannakamurasaki);
                        spriteteki5stage3
                            .setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki5stage3
                            .setScale(0.3);
                        this.addChild(spriteteki5stage3, 1);
                        spriteteki5stage3
                            .workingFlagteki5stage3 = false;
                        spriteteki5stage3
                            .schedule(this.workingteki5stage3, 0.5);

                        enemyPosition5stage3
                            = {
                                x: j,
                                y: i
                            };　　
                        cratesArraystage3
                            [i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray5stage3
                            [i][j] = spriteteki5stage3;
                        dotArraystage3
                            [i][j] = null;
                    default:
                        cratesArraystage3
                            [i][j] = null; //木箱のコード以外の場合は、その場所に木箱がない値としてnullを代入する
                        dotArraystage3
                            [i][j] = null;
                        tekiArraystage3
                            [i][j] = null;
                        tekiArray2stage3
                            [i][j] = null;
                        tekiArray3stage3
                            [i][j] = null;
                        tekiArray4stage3
                            [i][j] = null;
                        tekiArray5stage3
                            [i][j] = null;
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

                if (keyCode == 37) hidariniikustage3(); // 左に行くよ

            }
        }, this);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 38) ueniikustage3(); // 上に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 39) miginiikustage3(); // 右に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 40) sitaniikustage3(); // 下に行くよ
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
        if (playerSpritestage3
            .invulnerabilitystage3 >
            0) {
            playerSpritestage3
                .invulnerabilitystage3--;
            playerSpritestage3
                .setOpacity(255 - playerSpritestage3
                    .getOpacity());
        }
    },

    workingstage3: function() {
        if (playerSpritestage3
            .iroflagstage3 ==
            false) {
            playerSpritestage3
                .workingFlagstage3 = (playerSpritestage3
                    .workingFlagstage3 ==
                    true) ? false : true;
            if (playerSpritestage3
                .workingFlagstage3
            ) playerSpritestage3
                .initWithFile(res.paintmansiro1);
            else playerSpritestage3
                .initWithFile(res.paintmansiro2);


        }

    },
    working2stage3: function() {
        if (playerSpritestage3
            .iroflagakastage3 ==
            true) {

            playerSpritestage3
                .workingFlag2stage3 = (playerSpritestage3
                    .workingFlag2stage3 ==
                    true) ? false : true;
            if (playerSpritestage3
                .workingFlag2stage3
            ) playerSpritestage3
                .initWithFile(res.paintmanaka1);
            else playerSpritestage3
                .initWithFile(res.paintmanaka2);
            playerSpritestage3
                .setScale(2.3);



        }
    },
    working3stage3: function() {
        if (playerSpritestage3
            .iroflagaostage3 ==
            true) {

            playerSpritestage3
                .workingFlag3stage3 = (playerSpritestage3
                    .workingFlag3stage3 ==
                    true) ? false : true;
            if (playerSpritestage3
                .workingFlag3stage3
            ) playerSpritestage3
                .initWithFile(res.paintmanao1);
            else playerSpritestage3
                .initWithFile(res.paintmanao2);
            playerSpritestage3
                .setScale(2.3);



        }
    },
    working4stage3: function() {
        if (playerSpritestage3
            .iroflagkistage3 ==
            true) {

            playerSpritestage3
                .workingFlag4stage3 = (playerSpritestage3
                    .workingFlag4stage3 ==
                    true) ? false : true;
            if (playerSpritestage3
                .workingFlag4stage3
            ) playerSpritestage3
                .initWithFile(res.paintmanki1);
            else playerSpritestage3
                .initWithFile(res.paintmanki2);
            playerSpritestage3
                .setScale(2.3);



        }
    },
    working5stage3: function() {
        if (playerSpritestage3
            .iroflagmidoristage3 ==
            true) {

            playerSpritestage3
                .workingFlag5stage3 = (playerSpritestage3
                    .workingFlag5stage3 ==
                    true) ? false : true;
            if (playerSpritestage3
                .workingFlag5stage3
            ) playerSpritestage3
                .initWithFile(res.paintmanmidori1);
            else playerSpritestage3
                .initWithFile(res.paintmanmidori2);
            playerSpritestage3
                .setScale(2.3);



        }
    },
    working6stage3: function() {
        if (playerSpritestage3
            .iroflagmurasakistage3 ==
            true) {

            playerSpritestage3
                .workingFlag6stage3 = (playerSpritestage3
                    .workingFlag6stage3 ==
                    true) ? false : true;
            if (playerSpritestage3
                .workingFlag6stage3
            ) playerSpritestage3
                .initWithFile(res.paintmanmurasaki1);
            else playerSpritestage3
                .initWithFile(res.paintmanmurasaki2);
            playerSpritestage3
                .setScale(2.3);
        }
    },
    workingtekistage3: function() {
        //距離で上下左右回り込むscriptを
        spritetekistage3
            .workingFlagtekistage3 = (spritetekistage3
                .workingFlagtekistage3 ==
                true) ? false : true;
        if (spritetekistage3
            .workingFlagtekistage3
        ) spritetekistage3
            .initWithFile(res.tekiaomigi);
        else spritetekistage3
            .initWithFile(res.tekiaohidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage3
            .x > enemyPositionstage3
            .x && tekikabeflagstage3 ==
            0) {
            if (levelstage3[enemyPositionstage3
                    .y][enemyPositionstage3
                    .x + 1
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage3
                    .y >= enemyPositionstage3
                    .y) {
                    tekimovestage3
                        (0, -1);
                } else if (playerPositionstage3
                    .y < enemyPositionstage3
                    .y) {
                    tekimovestage3
                        (0, 1);
                }

            } else {
                tekimovestage3
                    (1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage3
            .y > enemyPositionstage3
            .y && tekikabeflagstage3 ==
            0) {
            if (levelstage3[enemyPositionstage3
                    .y + 1][enemyPositionstage3
                    .x
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                if (playerPositionstage3
                    .x > enemyPositionstage3
                    .x) {
                    tekimovestage3
                        (-1, 0);
                } else if (playerPositionstage3
                    .x <= enemyPositionstage3
                    .x) {
                    tekimovestage3
                        (1, 0);
                }
            } else {
                tekimovestage3
                    (0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage3
            .x < enemyPositionstage3

            .x && tekikabeflagstage3 ==
            0) {
            if (levelstage3[enemyPositionstage3

                    .y][enemyPositionstage3

                    .x - 1
                ] == 1 || levelstage3[enemyPositionstage3

                    .y - 1][enemyPositionstage3.x] == 7 || levelstage3[enemyPositionstage3

                    .y - 1][enemyPositionstage3

                    .x
                ] == 13 || levelstage3[enemyPositionstage3

                    .y - 1][enemyPositionstage3

                    .x
                ] == 14 || levelstage3[enemyPositionstage3

                    .y - 1][enemyPositionstage3

                    .x
                ] == 15 || levelstage3[enemyPositionstage3

                    .y - 1][enemyPositionstage3

                    .x
                ] == 16) {
                if (playerPositionstage3.y > enemyPositionstage3
                    .y) {
                    tekimovestage3
                        (0, -1);
                } else if (playerPositionstage3
                    .y <= enemyPositionstage3
                    .y) {
                    tekimovestage3
                        (0, 1);
                }
            } else {
                tekimovestage3
                    (-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage3
            .y < enemyPositionstage3
            .y || tekikabeflagstage3 ==
            1) {

            if (levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {

                tekikabeflagstage3
                    = 1;
                tekimovestage3
                    (1, 0);
                if (levelstage3[enemyPositionstage3
                        .y - 1][enemyPositionstage3
                        .x
                    ] == 1 && levelstage3[enemyPositionstage3
                        .y][enemyPositionstage3
                        .x + 1
                    ] == 1) {
                    tekimovestage3
                        (0, -1);
                    tekikabeflagstage3
                        = 0;
                }
            } else if (levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 0 && tekikabeflagstage3 ==
                1) {
                //tekikabeflag = 0;
                tekimovestage3
                    (0, -1);
                console.log("上空白　上移動")
                if (levelstage3[enemyPositionstage3
                        .y][enemyPositionstage3
                        .x - 1
                    ] == 0 && tekikabeflagstage3 ==
                    1) {
                    tekikabeflagstage3
                        = 0;
                }
            } else {
                tekimovestage3
                    (0, -1);
            }
        }
    },
    //敵を消すため
    addSpritetekistage3: function() {
        var spritetekistage3 = new Spritetekistage3();
        this.addChild(spritetekistage3);
    },
    removetekistage3: function() {
        audioEngine.playEffect(res.jump03);
        aotaositaflagstage3
            = true;
        spritetekistage3
            .unschedule(this.workingtekistage3);
        this.removeChild(spritetekistage3);
    },
    //2体目
    workingteki2stage3: function() {
        //距離で上下左右回り込むscriptを
        spriteteki2stage3
            .workingFlagteki2stage3 = (spriteteki2stage3
                .workingFlagteki2stage3 ==
                true) ? false : true;
        if (spriteteki2stage3
            .workingFlagteki2stage3
        ) spriteteki2stage3
            .initWithFile(res.tekiakamigi);

        else spriteteki2stage3
            .initWithFile(res.tekiakahidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage3
            .x > enemyPosition2stage3
            .x && tekikabeflag2stage3 ==
            0) {
            if (levelstage3[enemyPosition2stage3
                    .y][enemyPosition2stage3
                    .x + 1
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage3
                    .y >= enemyPosition2stage3
                    .y) {
                    tekimove2stage3
                        (0, -1);
                } else if (playerPositionstage3
                    .y < enemyPosition2stage3
                    .y) {
                    tekimove2stage3
                        (0, 1);
                }

            } else {
                tekimove2stage3
                    (1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage3
            .y > enemyPosition2stage3
            .y && tekikabeflag2stage3 ==
            0) {
            if (levelstage3[enemyPosition2stage3
                    .y + 1][enemyPosition2stage3
                    .x
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                if (playerPositionstage3
                    .x > enemyPosition2stage3
                    .x) {
                    tekimove2stage3
                        (-1, 0);
                } else if (playerPositionstage3
                    .x <= enemyPosition2stage3
                    .x) {
                    tekimove2stage3
                        (1, 0);
                }
            } else {
                tekimove2stage3
                    (0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage3
            .x < enemyPosition2stage3
            .x && tekikabeflag2stage3 ==
            0) {
            if (levelstage3[enemyPosition2stage3
                    .y][enemyPosition2stage3
                    .x - 1
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                if (playerPositionstage3
                    .y > enemyPosition2stage3
                    .y) {
                    tekimove2stage3
                        (0, -1);
                } else if (playerPositionstage3
                    .y <= enemyPosition2stage3
                    .y) {
                    tekimove2stage3
                        (0, 1);
                }
            } else {
                tekimove2stage3
                    (-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage3
            .y < enemyPosition2stage3
            .y || tekikabeflag2stage3 ==
            1) {

            if (levelstage3[enemyPosition2stage3
                    .y - 1][enemyPosition2stage3
                    .x
                ] == 1 || levelstage3[enemyPosition2stage3
                    .y - 1][enemyPosition2stage3
                    .x
                ] == 7 || levelstage3[enemyPosition2stage3
                    .y - 1][enemyPosition2stage3
                    .x
                ] == 13 || levelstage3[enemyPosition2stage3
                    .y - 1][enemyPosition2stage3
                    .x
                ] == 14 || levelstage3[enemyPosition2stage3
                    .y - 1][enemyPosition2stage3
                    .x
                ] == 15 || levelstage3[enemyPosition2stage3
                    .y - 1][enemyPosition2stage3
                    .x
                ] == 16) {


                tekikabeflag2stage3
                    = 1;
                tekimove2stage3
                    (1, 0);
                if (levelstage3[enemyPosition2stage3
                        .y - 1][enemyPosition2stage3
                        .x
                    ] == 1 && levelstage3[enemyPosition2stage3
                        .y][enemyPosition2stage3
                        .x + 1
                    ] == 1) {
                    tekimove2stage3
                        (0, -1);
                    tekikabeflag2stage3
                        = 0;
                }
            } else if (levelstage3[enemyPosition2stage3
                    .y - 1][enemyPosition2stage3
                    .x
                ] == 0 && tekikabeflag2stage3 ==
                1) {
                //tekikabeflag = 0;
                tekimove2stage3
                    (0, -1);
                console.log("上空白　上移動")
                if (levelstage3[enemyPosition2stage3
                        .y][enemyPosition2stage3
                        .x - 1
                    ] == 0 && tekikabeflag2stage3 ==
                    1) {
                    tekikabeflag2stage3
                        = 0;
                }
            } else {
                tekimove2stage3
                    (0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki2stage3: function() {
        var spriteteki2stage3 = new Spriteteki2stage3();
        this.addChild(spriteteki2stage3);
    },
    removeteki2stage3: function() {
        akataositaflagstage3
            = true;
        audioEngine.playEffect(res.jump03);
        spriteteki2stage3
            .unschedule(this.workingteki2stage3);
        this.removeChild(spriteteki2stage3);
    },
    //3体目
    workingteki3stage3: function() {
        //距離で上下左右回り込むscriptを
        spriteteki3stage3
            .workingFlagteki3stage3 = (spriteteki3stage3
                .workingFlagteki3stage3 ==
                true) ? false : true;
        if (spriteteki3stage3
            .workingFlagteki3stage3
        ) spriteteki3stage3
            .initWithFile(res.tekikimigi);
        else spriteteki3stage3
            .initWithFile(res.tekikihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage3
            .x > enemyPosition3stage3
            .x && tekikabeflag3stage3 ==
            0) {
            if (levelstage3[enemyPosition3stage3
                    .y][enemyPosition3stage3
                    .x + 1
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage3
                    .y >= enemyPosition3stage3
                    .y) {
                    tekimove3stage3
                        (0, -1);
                } else if (playerPositionstage3
                    .y < enemyPosition3stage3
                    .y) {
                    tekimove3stage3
                        (0, 1);
                }

            } else {
                tekimove3stage3
                    (1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage3
            .y > enemyPosition3stage3
            .y && tekikabeflag3stage3 ==
            0) {
            if (levelstage3[enemyPosition3stage3
                    .y + 1][enemyPosition3stage3
                    .x
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                if (playerPositionstage3
                    .x > enemyPosition3stage3
                    .x) {
                    tekimove3stage3
                        (-1, 0);
                } else if (playerPositionstage3
                    .x <= enemyPosition3stage3
                    .x) {
                    tekimove3stage3
                        (1, 0);
                }
            } else {
                tekimove3stage3
                    (0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage3
            .x < enemyPosition3stage3
            .x && tekikabeflag3stage3 ==
            0) {
            if (levelstage3[enemyPosition3stage3
                    .y][enemyPosition3stage3
                    .x - 1
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                if (playerPositionstage3
                    .y > enemyPosition3stage3
                    .y) {
                    tekimove3stage3
                        (0, -1);
                } else if (playerPositionstage3
                    .y <= enemyPosition3stage3
                    .y) {
                    tekimove3stage3
                        (0, 1);
                }
            } else {
                tekimove3stage3
                    (-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage3
            .y < enemyPosition3stage3
            .y || tekikabeflag3stage3 ==
            1) {

            if (levelstage3[enemyPosition3stage3
                    .y - 1][enemyPosition3stage3
                    .x
                ] == 1 || levelstage3[enemyPosition3stage3
                    .y - 1][enemyPosition3stage3
                    .x
                ] == 7 || levelstage3[enemyPosition3stage3
                    .y - 1][enemyPosition3stage3
                    .x
                ] == 13 || levelstage3[enemyPosition3stage3
                    .y - 1][enemyPosition3stage3
                    .x
                ] == 14 || levelstage3[enemyPosition3stage3
                    .y - 1][enemyPosition3stage3
                    .x
                ] == 15 || levelstage3[enemyPosition3stage3
                    .y - 1][enemyPosition3stage3
                    .x
                ] == 16) {

                tekikabeflag3stage3
                    = 1;
                tekimove3stage3
                    (1, 0);
                if (levelstage3[enemyPosition3stage3
                        .y - 1][enemyPosition3stage3
                        .x
                    ] == 1 && levelstage3[enemyPosition3stage3
                        .y][enemyPosition3stage3
                        .x + 1
                    ] == 1) {
                    tekimove3stage3
                        (0, -1);
                    tekikabeflag3stage3
                        = 0;
                }
            } else if (levelstage3[enemyPosition3stage3
                    .y - 1][enemyPosition3stage3
                    .x
                ] == 0 && tekikabeflag3stage3 ==
                1) {
                //tekikabeflag = 0;
                tekimove3stage3
                    (0, -1);
                console.log("上空白　上移動")
                if (levelstage3[enemyPosition3stage3
                        .y][enemyPosition3stage3
                        .x - 1
                    ] == 0 && tekikabeflag3stage3 ==
                    1) {
                    tekikabeflag3stage3
                        = 0;
                }
            } else {
                tekimove3stage3
                    (0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki3stage3: function() {
        var spriteteki3stage3 = new Spriteteki3stage3();
        this.addChild(spriteteki3stage3);
    },
    removeteki3stage3: function() {
        kitaositaflagstage3
            = true;
        audioEngine.playEffect(res.jump03);
        spriteteki3stage3
            .unschedule(this.workingteki3stage3);
        this.removeChild(spriteteki3stage3);
    },
    //4体目
    workingteki4stage3: function() {
        //距離で上下左右回り込むscriptを
        spriteteki4stage3
            .workingFlagteki4stage3 = (spriteteki4stage3
                .workingFlagteki4stage3 ==
                true) ? false : true;
        if (spriteteki4stage3
            .workingFlagteki4stage3
        ) spriteteki4stage3
            .initWithFile(res.tekimidorimigi);

        else spriteteki4stage3
            .initWithFile(res.tekimidorihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage3

            .x > enemyPosition4stage3

            .x && tekikabeflag4 == 0) {
            if (levelstage3[enemyPosition4stage3

                    .y][enemyPosition4stage3

                    .x + 1
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage3

                    .y >= enemyPosition4stage3

                    .y) {
                    tekimove4stage3
                        (0, -1);
                } else if (playerPositionstage3

                    .y < enemyPosition4stage3

                    .y) {
                    tekimove4stage3
                        (0, 1);
                }

            } else {
                tekimove4stage3
                    (1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage3

            .y > enemyPosition4stage3

            .y && tekikabeflag4stage3 ==
            0) {
            if (levelstage3[enemyPosition4stage3

                    .y + 1][enemyPosition4stage3

                    .x
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                if (playerPositionstage3

                    .x > enemyPosition4stage3

                    .x) {
                    tekimove4stage3
                        (-1, 0);
                } else if (playerPositionstage3

                    .x <= enemyPosition4stage3

                    .x) {
                    tekimove4stage3
                        (1, 0);
                }
            } else {
                tekimove4stage3
                    (0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage3

            .x < enemyPosition4stage3

            .x && tekikabeflag4stage3 ==
            0) {
            if (levelstage3[enemyPosition4stage3

                    .y][enemyPosition4stage3

                    .x - 1
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                if (playerPositionstage3

                    .y > enemyPosition4stage3

                    .y) {
                    tekimove4stage3
                        (0, -1);
                } else if (playerPositionstage3

                    .y <= enemyPosition4stage3

                    .y) {
                    tekimove4stage3
                        (0, 1);
                }
            } else {
                tekimove4stage3
                    (-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage3

            .y < enemyPosition4stage3

            .y || tekikabeflag4stage3 ==
            1) {

            if (levelstage3[enemyPosition4stage3

                    .y - 1][enemyPosition4stage3

                    .x
                ] == 1 || levelstage3[enemyPosition4stage3

                    .y - 1][enemyPosition4stage3

                    .x
                ] == 7 || levelstage3[enemyPosition4stage3

                    .y - 1][enemyPosition4stage3

                    .x
                ] == 13 || levelstage3[enemyPosition4stage3

                    .y - 1][enemyPosition4stage3

                    .x
                ] == 14 || levelstage3[enemyPosition4stage3

                    .y - 1][enemyPosition4stage3

                    .x
                ] == 15 || levelstage3[enemyPosition4stage3

                    .y - 1][enemyPosition4stage3

                    .x
                ] == 16) {

                tekikabeflag4stage3
                    = 1;
                tekimove4stage3
                    (1, 0);
                if (levelstage3[enemyPosition4stage3

                        .y - 1][enemyPosition4stage3

                        .x
                    ] == 1 && levelstage3[enemyPosition4stage3

                        .y][enemyPosition4stage3

                        .x + 1
                    ] == 1) {
                    tekimove4stage3
                        (0, -1);
                    tekikabeflag4stage3
                        = 0;
                }
            } else if (levelstage3[enemyPosition4stage3

                    .y - 1][enemyPosition4stage3

                    .x
                ] == 0 && tekikabeflag4stage3 ==
                1) {
                //tekikabeflag = 0;
                tekimove4stage3
                    (0, -1);
                console.log("上空白　上移動")
                if (levelstage3[enemyPosition4stage3

                        .y][enemyPosition4stage3

                        .x - 1
                    ] == 0 && tekikabeflag4stage3 ==
                    1) {
                    tekikabeflag4stage3
                        = 0;
                }
            } else {
                tekimove4stage3
                    (0, -1);
            }
        }
    },
    //敵を消すため
    addspriteteki4stage3: function() {
        var spriteteki4stage3 = new spriteteki4stage3();
        this.addChild(spriteteki4stage3);
    },
    removeteki4stage3: function() {
        midoritaositaflagstage3
            = true;
        audioEngine.playEffect(res.jump03);
        spriteteki4stage3
            .unschedule(this.workingteki4);
        this.removeChild(spriteteki4stage3);
    },
    //5体目
    workingteki5stage3: function() {
        //距離で上下左右回り込むscriptを
        spriteteki5stage3
            .workingFlagteki5stage3 = (spriteteki5stage3
                .workingFlagteki5stage3 ==
                true) ? false : true;
        if (spriteteki5stage3
            .workingFlagteki5stage3
        ) spriteteki5stage3
            .initWithFile(res.tekimurasakimigi);
        else spriteteki5stage3
            .initWithFile(res.tekimurasakihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstage3

            .x > enemyPosition5stage3
            .x && tekikabeflag5stage3 ==
            0) {
            if (levelstage3[enemyPosition5stage3
                    .y][enemyPosition5stage3
                    .x + 1
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstage3

                    .y >= enemyPosition5stage3
                    .y) {
                    tekimove5stage3
                        (0, -1);
                } else if (playerPositionstage3

                    .y < enemyPosition5stage3
                    .y) {
                    tekimove5stage3
                        (0, 1);
                }

            } else {
                tekimove5stage3
                    (1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstage3

            .y > enemyPosition5stage3
            .y && tekikabeflag5stage3 ==
            0) {
            if (levelstage3[enemyPosition5stage3
                    .y + 1][enemyPosition5stage3
                    .x
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                if (playerPositionstage3

                    .x > enemyPosition5stage3
                    .x) {
                    tekimove5stage3
                        (-1, 0);
                } else if (playerPositionstage3

                    .x <= enemyPosition5stage3
                    .x) {
                    tekimove5stage3
                        (1, 0);
                }
            } else {
                tekimove5stage3
                    (0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstage3

            .x < enemyPosition5stage3
            .x && tekikabeflag5stage3 ==
            0) {
            if (levelstage3[enemyPosition5stage3
                    .y][enemyPosition5stage3
                    .x - 1
                ] == 1 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 7 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 13 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 14 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 15 || levelstage3[enemyPositionstage3
                    .y - 1][enemyPositionstage3
                    .x
                ] == 16) {
                if (playerPositionstage3

                    .y > enemyPosition5stage3
                    .y) {
                    tekimove5stage3
                        (0, -1);
                } else if (playerPositionstage3

                    .y <= enemyPosition5stage3
                    .y) {
                    tekimove5stage3
                        (0, 1);
                }
            } else {
                tekimove5stage3
                    (-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstage3

            .y < enemyPosition5stage3
            .y || tekikabeflag5 == 1) {

            if (levelstage3[enemyPosition5stage3
                    .y - 1][enemyPosition5stage3
                    .x
                ] == 1 || levelstage3[enemyPosition5stage3
                    .y - 1][enemyPosition5stage3
                    .x
                ] == 7 || levelstage3[enemyPosition5stage3
                    .y - 1][enemyPosition5stage3
                    .x
                ] == 13 || levelstage3[enemyPosition5stage3
                    .y - 1][enemyPosition5stage3
                    .x
                ] == 14 || levelstage3[enemyPosition5stage3
                    .y - 1][enemyPosition5stage3
                    .x
                ] == 15 || levelstage3[enemyPosition5stage3
                    .y - 1][enemyPosition5stage3
                    .x
                ] == 16) {

                tekikabeflag5stage3
                    = 1;
                tekimove5stage3
                    (1, 0);
                if (levelstage3[enemyPosition5stage3
                        .y - 1][enemyPosition5stage3
                        .x
                    ] == 1 && levelstage3[enemyPosition5stage3
                        .y][enemyPosition5stage3
                        .x + 1
                    ] == 1) {
                    tekimove5stage3
                        (0, -1);
                    tekikabeflag5stage3
                        = 0;
                }
            } else if (levelstage3[enemyPosition5stage3
                    .y - 1][enemyPosition5stage3
                    .x
                ] == 0 && tekikabeflag5stage3 ==
                1) {
                //tekikabeflag = 0;
                tekimove5stage3
                    (0, -1);
                console.log("上空白　上移動")
                if (levelstage3[enemyPosition5stage3
                        .y][enemyPosition5stage3
                        .x - 1
                    ] == 0 && tekikabeflag5stage3 ==
                    1) {
                    tekikabeflag5stage3
                        = 0;
                }
            } else {
                tekimove5stage3
                    (0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki5stage3: function() {
        var spriteteki5stage3 = new Spriteteki5stage3();
        this.addChild(spriteteki5stage3);
    },
    removeteki5stage3: function() {
        murasakitaositaflagstage3
            = true;
        audioEngine.playEffect(res.jump03);
        spriteteki5stage3
            .unschedule(this.workingteki5stage3);
        this.removeChild(spriteteki5stage3);
    },
    removedotstage3: function(dotspritestage3) {

        this.removeChild(dotspritestage3);
    },
});



var MemoryTileuestage3 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.ue);
        cc.eventManager.addListener(listener2stage3
            .clone(), this);

    }

});
var MemoryTilemigistage3 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.migi);
        cc.eventManager.addListener(listener3stage3
            .clone(), this);
    }
});
var MemoryTilesitastage3 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.sita);
        cc.eventManager.addListener(listener4stage3
            .clone(), this);
    }
});
var MemoryTilehidaristage3 = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.hidari);
        cc.eventManager.addListener(listener5stage3
            .clone(), this);
    }
});
var listener2stage3 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印前.png");
            pickedTilesstage3
                .push(target);

            ueniikustage3
                ();


        }
    }
});

var listener3stage3 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印右.png");
            pickedTilesstage3
                .push(target);

            miginiikustage3
                ();


        }
    }
});

var listener4stage3 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印後.png");
            pickedTilesstage3
                .push(target);

            sitaniikustage3
                ();


        }
    }
});

var listener5stage3 = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();

        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印左.png");
            pickedTilesstage3
                .push(target);

            hidariniikustage3
                ();


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
                movestage3
                    (1, 0);
            } else { //左方向移動
                movestage3
                    (-1, 0);
            }
        } else {
            if (distY > 0) { //上方向移動
                //console.log("上 move(0,-1) distY "+ distY );
                movestage3
                    (0, -1);
            } else { //下方向移動
                //console.log("下 move(0,1) distY "+ distY );
                movestage3
                    (0, 1);
            }
        }
    }
}

function movestage3(deltaXstage3, deltaYstage3) {


    switch (levelstage3[playerPositionstage3

        .y + deltaYstage3
    ][playerPositionstage3

        .x + deltaXstage3

    ]) {
        case 7:
            if (levelstage3[playerPositionstage3
                    .y + deltaYstage3
                ][playerPositionstage3
                    .x + deltaXstage3
                ] == 7) {
                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] -= 4;
                playerPositionstage3
                    .x += deltaXstage3;
                playerPositionstage3
                    .y += deltaYstage3;

                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] += 4;
                playerSpritestage3
                    .setPosition(30 + 75 * playerPositionstage3
                        .x, 1140 - 75 * playerPositionstage3
                        .y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    1 && aotaositaflagstage3 ==
                    false) {
                    layer0stage3
                        .removetekistage3(spritetekistage3);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0 && aotaositaflagstage3 ==
                    false) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
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
            if (levelstage3[playerPositionstage3
                    .y + deltaYstage3
                ][playerPositionstage3
                    .x + deltaXstage3
                ] == 16) {
                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] -= 4;
                playerPositionstage3
                    .x += deltaXstage3;
                playerPositionstage3
                    .y += deltaYstage3;

                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] += 4;
                playerSpritestage3
                    .setPosition(30 + 75 * playerPositionstage3
                        .x, 1140 - 75 * playerPositionstage3
                        .y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    5 && murasakitaositaflagstage3 ==
                    false) {
                    layer0stage3
                        .removeteki5stage3(spriteteki5stage3);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0 && murasakitaositaflagstage3 ==
                    false) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
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
            if (levelstage3[playerPositionstage3
                    .y + deltaYstage3
                ][playerPositionstage3
                    .x + deltaXstage3
                ] == 15) {
                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] -= 4;
                playerPositionstage3
                    .x += deltaXstage3;
                playerPositionstage3
                    .y += deltaYstage3;

                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] += 4;
                playerSpritestage3
                    .setPosition(30 + 75 * playerPositionstage3
                        .x, 1140 - 75 * playerPositionstage3
                        .y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    4 && midoritaositaflagstage3 ==
                    false) {
                    layer0stage3
                        .removeteki4stage3(spriteteki4stage3);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0 && midoritaositaflagstage3 ==
                    false) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
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
            if (levelstage3[playerPositionstage3
                    .y + deltaYstage3
                ][playerPositionstage3
                    .x + deltaXstage3
                ] == 14) {
                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] -= 4;
                playerPositionstage3
                    .x += deltaXstage3;
                playerPositionstage3
                    .y += deltaYstage3;

                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] += 4;
                playerSpritestage3
                    .setPosition(30 + 75 * playerPositionstage3
                        .x, 1140 - 75 * playerPositionstage3
                        .y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    3 && kitaositaflagstage3 ==
                    false) {
                    layer0stage3
                        .removeteki3stage3(spriteteki3stage3);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0 && kitaositaflagstage3 ==
                    false) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
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
            if (levelstage3[playerPositionstage3
                    .y + deltaYstage3
                ][playerPositionstage3
                    .x + deltaXstage3
                ] == 13) {
                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] -= 4;
                playerPositionstage3
                    .x += deltaXstage3;
                playerPositionstage3
                    .y += deltaYstage3;

                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] += 4;
                playerSpritestage3
                    .setPosition(30 + 75 * playerPositionstage3
                        .x, 1140 - 75 * playerPositionstage3
                        .y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    2 && akataositaflagstage3 ==
                    false) {
                    layer0stage3
                        .removeteki2stage3(spriteteki2stage3);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0 && akataositaflagstage3 ==
                    false) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
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

            if (levelstage3[playerPositionstage3

                    .y + deltaYstage3
                ][playerPositionstage3

                    .x + deltaXstage3

                ] == 12) {
                playerSpritestage3
                    .iroflagstage3 = true;
                playerSpritestage3
                    .iroflagakastage3 = false;
                playerSpritestage3
                    .iroflagaostage3 = false;
                playerSpritestage3
                    .iroflagkistage3 = false;
                playerSpritestage3
                    .iroflagmidoristage3 = false;
                playerSpritestage3
                    .iroflagmurasakistage3 = true;
                playerSpritestage3
                    .tekisyoutotustage3 = 5;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstage3[playerPositionstage3

                    .y + deltaYstage3
                ][playerPositionstage3

                    .x + deltaXstage3

                ] == 11) {
                playerSpritestage3
                    .iroflagstage3 = true;
                playerSpritestage3
                    .iroflagakastage3 = false;
                playerSpritestage3
                    .iroflagaostage3 = false;
                playerSpritestage3
                    .iroflagkistage3 = false;
                playerSpritestage3
                    .iroflagmidoristage3 = true;
                playerSpritestage3
                    .iroflagmurasakistage3 = false;
                playerSpritestage3
                    .tekisyoutotustage3 = 4;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstage3[playerPositionstage3

                    .y + deltaYstage3
                ][playerPositionstage3

                    .x + deltaXstage3

                ] == 10) {
                playerSpritestage3
                    .iroflagstage3 = true;
                playerSpritestage3
                    .iroflagakastage3 = false;
                playerSpritestage3
                    .iroflagaostage3 = false;
                playerSpritestage3
                    .iroflagkistage3 = true;
                playerSpritestage3
                    .iroflagmidoristage3 = false;
                playerSpritestage3
                    .iroflagmurasakistage3 = false;
                playerSpritestage3
                    .tekisyoutotustage3 = 3;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstage3[playerPositionstage3

                    .y + deltaYstage3
                ][playerPositionstage3

                    .x + deltaXstage3

                ] == 9) {
                playerSpritestage3
                    .iroflagstage3 = true;
                playerSpritestage3
                    .iroflagakastage3 = true;
                playerSpritestage3
                    .iroflagaostage3 = false;
                playerSpritestage3
                    .iroflagkistage3 = false;
                playerSpritestage3
                    .iroflagmidoristage3 = false;
                playerSpritestage3
                    .iroflagmurasakistage3 = false;
                playerSpritestage3
                    .tekisyoutotustage3 = 2;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstage3[playerPositionstage3

                    .y + deltaYstage3
                ][playerPositionstage3

                    .x + deltaXstage3

                ] == 8) {
                playerSpritestage3
                    .iroflagstage3 = true;
                playerSpritestage3
                    .iroflagakastage3 = false;
                playerSpritestage3
                    .iroflagaostage3 = true;
                playerSpritestage3
                    .iroflagkistage3 = false;
                playerSpritestage3
                    .iroflagmidoristage3 = false;
                playerSpritestage3
                    .iroflagmurasakistage3 = false;
                playerSpritestage3
                    .tekisyoutotustage3 = 1;
                audioEngine.playEffect(res.powerup08);
            }



            levelstage3

                [playerPositionstage3

                .y][playerPositionstage3

                .x
            ] -= 4;
            playerPositionstage3

                .x += deltaXstage3;
            playerPositionstage3

                .y += deltaYstage3;

            levelstage3

                [playerPositionstage3

                .y][playerPositionstage3

                .x
            ] += 4;


            playerSpritestage3
                .setPosition(30 + 75 * playerPositionstage3

                    .x, 1140 - 75 * playerPositionstage3

                    .y);

            break;
        case 3:
        case 5:

            break;
        case 2:
            if (levelstage3[playerPositionstage3

                    .y + deltaYstage3
                ][playerPositionstage3

                    .x + deltaXstage3

                ] == 2) {
                levelstage3

                    [playerPositionstage3

                    .y][playerPositionstage3

                    .x
                ] -= 4;
                playerPositionstage3

                    .x += deltaXstage3;
                playerPositionstage3

                    .y += deltaYstage3;

                levelstage3

                    [playerPositionstage3

                    .y][playerPositionstage3

                    .x
                ] += 4;
                playerSpritestage3
                    .setPosition(30 + 75 * playerPositionstage3

                        .x, 1140 - 75 * playerPositionstage3

                        .y);



                //layer0stage3.removedotstage3
                (spritedotstage3);
                layer0stage3
                    .removedotstage3(dotArraystage3[playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ]);
                levelstage3
                    [playerPositionstage3
                        .y][playerPositionstage3
                        .x
                    ] = 4;
                miss++;
                missText.setString("SCORE " + miss);

                //deltaX += 5;
                dottota++;
                audioEngine.playEffect(res.dotnooto);
                if (dottota == 73) {
                    //miss = 0;
                    cc.director.runScene(new ResultScene());
                    //deltaY -= 1;
                    dottota = 0;

                }
                break;
            }


    }

}

function tekimovestage3(deltaX2stage3, deltaY2stage3) {


    switch (levelstage3[enemyPositionstage3
        .y + deltaY2stage3
    ][enemyPositionstage3
        .x + deltaX2stage3
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


            levelstage3

                [enemyPositionstage3
                .y][enemyPositionstage3
                .x
            ] -= 7;
            enemyPositionstage3
                .x += deltaX2stage3;
            enemyPositionstage3
                .y += deltaY2stage3;

            levelstage3

                [enemyPositionstage3
                .y][enemyPositionstage3
                .x
            ] += 7;
            //ここ
            var nowPosXstage3 = spritetekistage3
                .getPosition().x;
            var nowPosYstage3 = spritetekistage3
                .getPosition().y;

            var newPosXstage3 = 30 + 75 * enemyPositionstage3
                .x;
            var newPosYstage3 = 1140 - 75 * enemyPositionstage3
                .y;

            spritetekistage3
                .runAction(cc.MoveTo.create(0.5, cc.p(newPosXstage3, newPosYstage3)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage3[enemyPositionstage3
                    .y + deltaY2stage3
                ][enemyPositionstage3
                    .x + deltaX2stage3
                ] == 4) {
                levelstage3

                    [enemyPositionstage3
                    .y][enemyPositionstage3
                    .x
                ] -= 7;
                enemyPositionstage3
                    .x += deltaX2stage3;
                enemyPositionstage3
                    .y += deltaY2stage3;
                levelstage3

                    [enemyPositionstage3
                    .y][enemyPositionstage3
                    .x
                ] += 7;

                var nowPosXstage3 = spritetekistage3
                    .getPosition().x;
                var nowPosYstage3 = spritetekistage3
                    .getPosition().y;

                var newPosXstage3 = 30 + 75 * enemyPositionstage3
                    .x;
                var newPosYstage3 = 1140 - 75 * enemyPositionstage3
                    .y;
                spritetekistage3
                    .runAction(cc.MoveTo.create(0.5, cc.p(newPosXstage3, newPosYstage3)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    1) {
                    layer0stage3
                        .removetekistage3(spritetekistage3);

                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
                    audioEngine.playEffect(res.damage7);
                    deltaX2stage3
                        += 1;
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

function tekimove2stage3(deltaX3stage3, deltaY3stage3) {


    switch (levelstage3[enemyPosition2stage3
        .y + deltaY3stage3
    ][enemyPosition2stage3
        .x + deltaX3stage3
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


            levelstage3

                [enemyPosition2stage3
                .y][enemyPosition2stage3
                .x
            ] -= 13;
            enemyPosition2stage3
                .x += deltaX3stage3;
            enemyPosition2stage3
                .y += deltaY3stage3;

            levelstage3

                [enemyPosition2stage3
                .y][enemyPosition2stage3
                .x
            ] += 13;
            //ここ
            var nowPosX2stage3 = spriteteki2stage3
                .getPosition().x;
            var nowPosY2stage3 = spriteteki2stage3
                .getPosition().y;

            var newPosX2stage3 = 30 + 75 * enemyPosition2stage3
                .x;
            var newPosY2stage3 = 1140 - 75 * enemyPosition2stage3
                .y;

            spriteteki2stage3
                .runAction(cc.MoveTo.create(0.5, cc.p(newPosX2stage3, newPosY2stage3)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage3[enemyPosition2stage3
                    .y + deltaY3stage3
                ][enemyPosition2stage3
                    .x + deltaX3stage3
                ] == 4) {
                levelstage3

                    [enemyPosition2stage3
                    .y][enemyPosition2stage3
                    .x
                ] -= 13;
                enemyPosition2stage3
                    .x += deltaX3stage3;
                enemyPosition2stage3
                    .y += deltaY3stage3;
                levelstage3

                    [enemyPosition2stage3
                    .y][enemyPosition2stage3
                    .x
                ] += 13;

                var nowPosX2stage3 = spriteteki2stage3
                    .getPosition().x;
                var nowPosY2stage3 = spriteteki2stage3
                    .getPosition().y;

                var newPosX2stage3 = 30 + 75 * enemyPosition2stage3
                    .x;
                var newPosY2stage3 = 1140 - 75 * enemyPosition2stage3
                    .y;
                spriteteki2stage3
                    .runAction(cc.MoveTo.create(0.5, cc.p(newPosX2stage3, newPosY2stage3)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    2) {
                    layer0stage3
                        .removeteki2stage3(spriteteki2stage3);



                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
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

function tekimove3stage3(deltaX4stage3, deltaY4stage3) {


    switch (levelstage3[enemyPosition3stage3
        .y + deltaY4stage3
    ][enemyPosition3stage3
        .x + deltaX4stage3
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


            levelstage3

                [enemyPosition3stage3
                .y][enemyPosition3stage3
                .x
            ] -= 14;
            enemyPosition3stage3
                .x += deltaX4stage3;
            enemyPosition3stage3
                .y += deltaY4stage3;

            levelstage3

                [enemyPosition3stage3
                .y][enemyPosition3stage3
                .x
            ] += 14;
            //ここ
            var nowPosX3stage3 = spriteteki3stage3
                .getPosition().x;
            var nowPosY3stage3 = spriteteki3stage3
                .getPosition().y;

            var newPosX3stage3 = 30 + 75 * enemyPosition3stage3
                .x;
            var newPosY3stage3 = 1140 - 75 * enemyPosition3stage3
                .y;

            spriteteki3stage3
                .runAction(cc.MoveTo.create(0.5, cc.p(newPosX3stage3, newPosY3stage3)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage3[enemyPosition3stage3
                    .y + deltaY4stage3
                ][enemyPosition3stage3
                    .x + deltaX4stage3
                ] == 4) {
                levelstage3

                    [enemyPosition3stage3
                    .y][enemyPosition3stage3
                    .x
                ] -= 14;
                enemyPosition3stage3
                    .x += deltaX4stage3;
                enemyPosition3stage3
                    .y += deltaY4stage3;
                levelstage3

                    [enemyPosition3stage3
                    .y][enemyPosition3stage3
                    .x
                ] += 14;

                var nowPosX3stage3 = spriteteki3stage3
                    .getPosition().x;
                var nowPosY3stage3 = spriteteki3stage3
                    .getPosition().y;

                var newPosX3stage3 = 30 + 75 * enemyPosition3stage3
                    .x;
                var newPosY3stage3 = 1140 - 75 * enemyPosition3stage3
                    .y;
                spriteteki3stage3
                    .runAction(cc.MoveTo.create(0.5, cc.p(newPosX3stage3, newPosY3stage3)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    3) {
                    layer0stage3
                        .removeteki3stage3(spriteteki3stage3);


                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
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

function tekimove4stage3(deltaX5stage3, deltaY5stage3) {


    switch (levelstage3[enemyPosition4stage3

        .y + deltaY5stage3
    ][enemyPosition4stage3

        .x + deltaX5stage3

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


            levelstage3

                [enemyPosition4stage3

                .y][enemyPosition4stage3

                .x
            ] -= 15;
            enemyPosition4stage3

                .x += deltaX5stage3;
            enemyPosition4stage3

                .y += deltaY5stage3;

            levelstage3

                [enemyPosition4stage3

                .y][enemyPosition4stage3

                .x
            ] += 15;
            //ここ
            var nowPosX4stage3 = spriteteki4stage3
                .getPosition().x;
            var nowPosY4stage3 = spriteteki4stage3
                .getPosition().y;

            var newPosX4stage3 = 30 + 75 * enemyPosition4stage3

                .x;
            var newPosY4stage3 = 1140 - 75 * enemyPosition4stage3

                .y;

            spriteteki4stage3
                .runAction(cc.MoveTo.create(0.5, cc.p(newPosX4stage3, newPosY4stage3)));
            //spriteteki.setPosition(newPosX,newPosY);
            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage3[enemyPosition4stage3

                    .y + deltaY5stage3
                ][enemyPosition4stage3

                    .x + deltaX5stage3

                ] == 4) {
                levelstage3

                    [enemyPosition4stage3

                    .y][enemyPosition4stage3

                    .x
                ] -= 15;
                enemyPosition4stage3

                    .x += deltaX5stage3;
                enemyPosition4stage3

                    .y += deltaY5stage3;
                levelstage3

                    [enemyPosition4stage3

                    .y][enemyPosition4stage3

                    .x
                ] += 15;

                var nowPosX4stage3 = spriteteki4stage3
                    .getPosition().x;
                var nowPosY4stage3 = spriteteki4stage3
                    .getPosition().y;

                var newPosX4stage3 = 30 + 75 * enemyPosition4stage3

                    .x;
                var newPosY4stage3 = 1140 - 75 * enemyPosition4stage3

                    .y;
                spriteteki4stage3
                    .runAction(cc.MoveTo.create(0.5, cc.p(newPosX4stage3, newPosY4stage3)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    4) {
                    layer0stage3
                        .removeteki4stage3(spriteteki4stage3);


                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
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

function tekimove5stage3(deltaX6stage3, deltaY6stage3) {


    switch (levelstage3[enemyPosition5stage3
        .y + deltaY6stage3
    ][enemyPosition5stage3
        .x + deltaX6stage3
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


            levelstage3

                [enemyPosition5stage3
                .y][enemyPosition5stage3
                .x
            ] -= 16;
            enemyPosition5stage3
                .x += deltaX6stage3;
            enemyPosition5stage3
                .y += deltaY6stage3;

            levelstage3

                [enemyPosition5stage3
                .y][enemyPosition5stage3
                .x
            ] += 16;
            //ここ
            var nowPosX5stage3 = spriteteki5stage3
                .getPosition().x;
            var nowPosY5stage3 = spriteteki5stage3
                .getPosition().y;

            var newPosX5stage3 = 30 + 75 * enemyPosition5stage3
                .x;
            var newPosY5stage3 = 1140 - 75 * enemyPosition5stage3
                .y;

            spriteteki5stage3
                .runAction(cc.MoveTo.create(0.5, cc.p(newPosX5stage3, newPosY5stage3)));
            //spriteteki.setPosition(newPosX,newPosY);
            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstage3[enemyPosition5stage3
                    .y + deltaY6stage3
                ][enemyPosition5stage3
                    .x + deltaX6stage3
                ] == 4) {
                levelstage3

                    [enemyPosition5stage3
                    .y][enemyPosition5stage3
                    .x
                ] -= 16;
                enemyPosition5stage3
                    .x += deltaX6stage3;
                enemyPosition5stage3
                    .y += deltaY6stage3;
                levelstage3

                    [enemyPosition5stage3
                    .y][enemyPosition5stage3
                    .x
                ] += 16;

                var nowPosX5stage3 = spriteteki5stage3
                    .getPosition().x;
                var nowPosY5stage3 = spriteteki5stage3
                    .getPosition().y;

                var newPosX5stage3 = 30 + 75 * enemyPosition5stage3
                    .x;
                var newPosY5stage3 = 1140 - 75 * enemyPosition5stage3
                    .y;
                spriteteki5stage3
                    .runAction(cc.MoveTo.create(0.5, cc.p(newPosX5stage3, newPosY5stage3)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestage3
                    .tekisyoutotustage3 ==
                    5) {
                    layer0stage3
                        .removeteki5stage3(spriteteki5stage3);


                } else if (playerSpritestage3
                    .invulnerabilitystage3 ==
                    0) {
                    playerSpritestage3
                        .invulnerabilitystage3 = 100;
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
function hidariniikustage3() {
    movestage3
        (-1, 0);
    //  tekimove(-1, 0);
}
//上
function ueniikustage3() {
    //playerSprite.initWithFile(res.paintmansiro2);

    movestage3
        (0, -1);
    //tekimove(0, -1);
    /*var pause = setTimeout(function() {

    }, 500);
    */
}
//右
function miginiikustage3() {
    movestage3
        (1, 0);
    //tekimove(1, 0);
}
//下
function sitaniikustage3() {
    movestage3
        (0, 1);
    //tekimove(0, 1);
    //spritedot.initWithFile(res.paintmansiro2);
}
//goを消すための
function gokesi() {

}
