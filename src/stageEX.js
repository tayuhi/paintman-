var sizestageEX;
//var stageflag = 0;

var levelstageEX;
var overresetstageEX;


var levelstageEX = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 9, 11, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

overresetstageEX = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


//kokoko = level[];
var playerPositionstageEX; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var enemyPositionstageEX;
var enemyPosition2stageEX;
var enemyPosition3stageEX;
var enemyPosition4stageEX;
var enemyPosition5stageEX;
var playerSpritestageEX; //プレイヤーのスプライト
var spritetekistageEX;
var spriteteki2stageEX;
var spriteteki3stageEX;
var spriteteki4stageEX;
var spriteteki5stageEX;
var spritetekibossstageEX;
var cratesArraystageEX = []; //配置した木箱のスプライトを配列に保持する
var dotArraystageEX = [];
var tekiArraystageEX = [];
var tekiArray2stageEX = [];
var tekiArray3stageEX = [];
var tekiArray4stageEX = [];
var tekiArray5stageEX = [];
var tekiArraybossstageEX = [];
var spritedotstageEX;

var startTouchstageEX;
var endTouchstageEX;
var swipeTolerancestageEX = 10; //スワイプかを判断する閾値
var audioEnginestageEX;
var flagstageEX = 0;
var pickedTilesstageEX = [];
var dotstageEX = [];
var stagetextstageEX;
var tekikabeflagstageEX = 0;
var tekikabeflag2stageEX = 0;
var tekikabeflag3stageEX = 0;
var tekikabeflag4stageEX = 0;
var tekikabeflag5stageEX = 0;
var layer0stageEX;
var aotaositaflagstageEX = false;
var akataositaflagstageEX = false;
var kitaositaflagstageEX = false;
var midoritaositaflagstageEX = false;
var murasakitaositaflagstageEX = false;
var bosstamazahyo = 0;

var gameSceneEX = cc.Scene.extend({
    onEnter: function() {
        this._super();

        layer0stageEX = new gameLayerstageEX();
        layer0stageEX.init();
        this.addChild(layer0stageEX);

        //var enemys = new enemyLayer();
        //this.addChild(enemys);

        //音楽再生エンジン
        audioEnginestageEX = cc.audioEngine;
        //bgm再生
        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            //  audioEngine.playMusic(res.bgm_main, true);
            audioEngine.playMusic(res.BOSSBGM, true);
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
        stagetextstageEX = cc.LabelTTF.create("STAGE 2", "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(stagetextstageEX);
        stagetextstageEX.setPosition(600, 1350);
        stagetextstageEX.setScale(3.5);
    }

});

var gameLayerstageEX = cc.Layer.extend({
    init: function() {
        this._super();
        //スプライトフレームのキャッシュオブジェクトを作成する
        cache = cc.spriteFrameCache;
        //スプライトフレームのデータを読み込む
        cache.addSpriteFrames(res.spritesheet_plist);
        //小惑星の生成で追加
        this.schedule(this.addAsteroid, 0.1);


        //アンチエイリアス処理を止める
        //        backgroundSprite.getTexture().setAliasTexParameters();



        var levelSprite2stageEX = cc.Sprite.create(res.backsiro);
        levelSprite2stageEX.setPosition(80, 730);
        levelSprite2stageEX.setScale(4.4, 2.2);
        this.addChild(levelSprite2stageEX);



        var sprite7stageEX = cc.Sprite.create(res.kakeru);
        sprite7stageEX.setPosition(175, 1350);
        sprite7stageEX.setScale(1);
        this.addChild(sprite7stageEX, 0);

        var sprite8stageEX = cc.Sprite.create(res.paintmansiro1);
        sprite8stageEX.setPosition(100, 1350);
        sprite8stageEX.setScale(0.3);
        this.addChild(sprite8stageEX, 0);

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
            var tilestageEX = new MemoryTileuestageEX();
            this.addChild(tilestageEX, 0);
            //タイルを格子状に配置する計算式
            tilestageEX.setPosition(480 + i % 6 * 74, 220 - Math.floor(i / 6) * 74);
            tilestageEX.setScale(0.25, 0.25);

        }

        for (i = 0; i < 1; i++) {
            var tilestageEX = new MemoryTilemigistageEX();
            this.addChild(tilestageEX, 0);
            //タイルを格子状に配置する計算式
            tilestageEX.setPosition(615 + i % 6 * 74, 125 - Math.floor(i / 6) * 74);
            tilestageEX.setScale(0.25, 0.25);

        }
        for (i = 0; i < 1; i++) {
            var tilestageEX = new MemoryTilesitastageEX();
            this.addChild(tilestageEX, 0);
            //タイルを格子状に配置する計算式
            tilestageEX.setPosition(480 + i % 6 * 74, 70 - Math.floor(i / 6) * 74);
            tilestageEX.setScale(0.25, 0.25);

        }
        for (i = 0; i < 1; i++) {
            var tilestageEX = new MemoryTilehidaristageEX();
            this.addChild(tilestageEX, 0);
            //タイルを格子状に配置する計算式
            tilestageEX.setPosition(345 + i % 6 * 74, 125 - Math.floor(i / 6) * 74);
            tilestageEX.setScale(0.25, 0.25);

        }

        for (i = 0; i < 12; i++) {　　　　　　
            cratesArraystageEX[i] = [];　 //配列オブジェクトの生成
            dotArraystageEX[i] = [];
            tekiArraystageEX[i] = [];
            tekiArray2stageEX[i] = [];
            tekiArray3stageEX[i] = [];
            tekiArray4stageEX[i] = [];
            tekiArray5stageEX[i] = [];
            tekiArraybossstageEX[i] = [];
            for (j = 0; j < 15; j++) {
                var resetstageEX = overresetstageEX[i][j];
                levelstageEX[i][j] = resetstageEX;
                switch (levelstageEX[i][j]) {
                    case 0:
                        var spriteyukastageEX = cc.Sprite.create(res.yuka);
                        spriteyukastageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukastageEX.setScale(0.21);
                        this.addChild(spriteyukastageEX, 0);
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystageEX[i][j] = null;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        tekiArray3stageEX[i][j] = null;
                        tekiArray4stageEX[i][j] = null;
                        tekiArray5stageEX[i][j] = null;
                        break;
                    case 1:
                        var spritekabestageEX = cc.Sprite.create(res.kabeblock);
                        spritekabestageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritekabestageEX.setScale(0.19);
                        this.addChild(spritekabestageEX, 0);
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystageEX[i][j] = null;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        tekiArray3stageEX[i][j] = null;
                        tekiArray4stageEX[i][j] = null;
                        tekiArray5stageEX[i][j] = null;
                        break;

                    case 2:
                        spritedotstageEX = cc.Sprite.create(res.dot);
                        spritedotstageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritedotstageEX.setScale(0.15);
                        this.addChild(spritedotstageEX, 0);
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystageEX[i][j] = spritedotstageEX;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        tekiArray3stageEX[i][j] = null;
                        tekiArray4stageEX[i][j] = null;
                        tekiArray5stageEX[i][j] = null;
                        break;
                    case 4:

                    case 6:
                        playerSpritestageEX = cc.Sprite.create(res.paintmansiro1);
                        playerSpritestageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        playerSpritestageEX.setScale(0.3);
                        this.addChild(playerSpritestageEX, 1);
                        //  playerSprite.invulnerability = 0;
                        playerSpritestageEX.tekisyoutotustageEX = 0;
                        playerSpritestageEX.workingFlagstageEX = false;
                        playerSpritestageEX.workingFlag2stageEX = false;
                        playerSpritestageEX.workingFlag3stageEX = false;
                        playerSpritestageEX.workingFlag4stageEX = false;
                        playerSpritestageEX.workingFlag5stageEX = false;
                        playerSpritestageEX.workingFlag6stageEX = false;
                        playerSpritestageEX.iroflagstageEX = false;
                        playerSpritestageEX.iroflagakastageEX = false;
                        playerSpritestageEX.iroflagaostageEX = false;
                        playerSpritestageEX.iroflagkistageEX = false;
                        playerSpritestageEX.iroflagmidoristageEX = false;
                        playerSpritestageEX.iroflagmurasakistageEX = false;
                        playerSpritestageEX.schedule(this.workingstageEX, 0.5);
                        playerSpritestageEX.schedule(this.working2stageEX, 0.5);
                        playerSpritestageEX.schedule(this.working3stageEX, 0.5);
                        playerSpritestageEX.schedule(this.working4stageEX, 0.5);
                        playerSpritestageEX.schedule(this.working5stageEX, 0.5);
                        playerSpritestageEX.schedule(this.working6stageEX, 0.5);
                        playerSpritestageEX.invulnerabilitystageEX = 0; //無敵モード時間　初期値0
                        this.scheduleUpdate();

                        playerPositionstageEX = {
                            x: j,
                            y: i
                        };　　　　　　　　　　　　
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystageEX[i][j] = null;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        tekiArray3stageEX[i][j] = null;
                        tekiArray4stageEX[i][j] = null;
                        tekiArray5stageEX[i][j] = null;
                        break;

                    case 3:
                    case 5:
                        var crateSpritestageEX = cc.Sprite.create(cache.getSpriteFrame("crate.png"));
                        crateSpritestageEX.setPosition(115 + 25 * j, 285 - 25 * i);
                        crateSpritestageEX.setScale(5);
                        this.addChild(crateSpritestageEX);
                        cratesArraystageEX[i][j] = crateSpritestageEX; //(i,j)の位置にcrateSpriteを入れる
                        dotArraystageEX[i][j] = null;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        tekiArray3stageEX[i][j] = null;
                        break;
                    case 7:
                        spritetekistageEX = cc.Sprite.create(res.tekimannakako);
                        spritetekistageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritetekistageEX.setScale(0.3);
                        this.addChild(spritetekistageEX, 1);
                        spritetekistageEX.workingFlagtekistageEX = false;
                        spritetekistageEX.schedule(this.workingtekistageEX, 0.5);

                        /*var moveAction = cc.MoveTo.create(10.5, new cc.Point(550, 0));
                        spriteteki.runAction(moveAction);*/
                        enemyPositionstageEX = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArraystageEX[i][j] = spritetekistageEX;
                        dotArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        tekiArray3stageEX[i][j] = null;
                        tekiArray4stageEX[i][j] = null;
                        tekiArray5stageEX[i][j] = null;
                        break;
                    case 8:
                        var spriteiroyukaaostageEX = cc.Sprite.create(res.iroyukaao);
                        spriteiroyukaaostageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteiroyukaaostageEX.setScale(0.19, 0.18);
                        this.addChild(spriteiroyukaaostageEX, 0);
                        cratesArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;

                        break;
                    case 9:
                        var spriteyukaakastageEX = cc.Sprite.create(res.iroyukaaka);
                        spriteyukaakastageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukaakastageEX.setScale(0.19, 0.18);
                        this.addChild(spriteyukaakastageEX, 0);
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystageEX[i][j] = null;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        break;
                    case 10:
                        var spriteyukakistageEX = cc.Sprite.create(res.iroyukaki);
                        spriteyukakistageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukakistageEX.setScale(0.19, 0.18);
                        this.addChild(spriteyukakistageEX, 0);
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystageEX[i][j] = null;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        break;
                    case 11:
                        var spriteyukamidoristageEX = cc.Sprite.create(res.iroyukamidori);
                        spriteyukamidoristageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamidoristageEX.setScale(0.19, 0.18);
                        this.addChild(spriteyukamidoristageEX, 0);
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystageEX[i][j] = null;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        break;
                    case 12:
                        var spriteyukamurasakistageEX = cc.Sprite.create(res.iroyukamurasaki);
                        spriteyukamurasakistageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamurasakistageEX.setScale(0.19, 0.18);
                        this.addChild(spriteyukamurasakistageEX, 0);
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArraystageEX[i][j] = null;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        break;
                    case 13:
                        spriteteki2stageEX = cc.Sprite.create(res.tekimannakaaka);
                        spriteteki2stageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki2stageEX.setScale(0.3);
                        this.addChild(spriteteki2stageEX, 1);
                        spriteteki2stageEX.workingFlagteki2stageEX = false;
                        spriteteki2stageEX.schedule(this.workingteki2stageEX, 0.5);

                        enemyPosition2stageEX = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray2stageEX[i][j] = spriteteki2stageEX;
                        dotArraystageEX[i][j] = null;
                        break;
                    case 14:
                        spriteteki3stageEX = cc.Sprite.create(res.tekimannakaki);
                        spriteteki3stageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki3stageEX.setScale(0.3);
                        this.addChild(spriteteki3stageEX, 1);
                        spriteteki3stageEX.workingFlagteki3stageEX = false;
                        spriteteki3stageEX.schedule(this.workingteki3stageEX, 0.5);

                        enemyPosition3stageEX = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray3stageEX[i][j] = spriteteki3stageEX;
                        dotArraystageEX[i][j] = null;
                        break;
                    case 15:
                        spriteteki4stageEX = cc.Sprite.create(res.tekimannakamidori);
                        spriteteki4stageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki4stageEX.setScale(0.3);
                        this.addChild(spriteteki4stageEX, 1);
                        spriteteki4stageEX.workingFlagteki4stageEX = false;
                        spriteteki4stageEX.schedule(this.workingteki4stageEX, 0.5);

                        enemyPosition4stageEX = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray4stageEX[i][j] = spriteteki4stageEX;
                        dotArraystageEX[i][j] = null;
                        break;
                    case 16:
                        spriteteki5stageEX = cc.Sprite.create(res.tekimannakamurasaki);
                        spriteteki5stageEX.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki5stageEX.setScale(0.3);
                        this.addChild(spriteteki5stageEX, 1);
                        spriteteki5stageEX.workingFlagteki5stageEX = false;
                        spriteteki5stageEX.schedule(this.workingteki5stageEX, 0.5);

                        enemyPosition5stageEX = {
                            x: j,
                            y: i
                        };　　
                        cratesArraystageEX[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        tekiArray5stageEX[i][j] = spriteteki5stageEX;
                        dotArraystageEX[i][j] = null;
                    case 100:
                        spritetekibossstageEX = cc.Sprite.create(res.bossmigi);
                        spritetekibossstageEX.setPosition(30 + 75 * j, 1140 - 75 * i);

                        spritetekibossstageEX.setScale(0.1);
                        this.addChild(spritetekibossstageEX, 1);
                        spritetekibossstageEX.workingFlagtekibossstageEX = false;
                        spritetekibossstageEX.schedule(this.workingtekibossstageEX, 0.3);
                        tekiArraybossstageEX[i][j] = spritetekibossstageEX;
                    default:
                        cratesArraystageEX[i][j] = null; //木箱のコード以外の場合は、その場所に木箱がない値としてnullを代入する
                        dotArraystageEX[i][j] = null;
                        tekiArraystageEX[i][j] = null;
                        tekiArray2stageEX[i][j] = null;
                        tekiArray3stageEX[i][j] = null;
                        tekiArray4stageEX[i][j] = null;
                        tekiArray5stageEX[i][j] = null;
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

                if (keyCode == 37) hidariniikustageEX(); // 左に行くよ

            }
        }, this);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 38) ueniikustageEX(); // 上に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 39) miginiikustageEX(); // 右に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 40) sitaniikustageEX(); // 下に行くよ
            }
        }, this);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {

                if (keyCode == 16) gokesi(); // shiftでgo消し
            }
        }, this);

    },

    //小惑星の生成で追加
    addAsteroid: function(event) {
        var asteroid = new Asteroid();
        this.addChild(asteroid);
    },
    removeAsteroid: function(asteroid) {
        this.removeChild(asteroid);
    },
    update: function() {
        if (playerSpritestageEX.invulnerabilitystageEX > 0) {
            playerSpritestageEX.invulnerabilitystageEX--;
            playerSpritestageEX.setOpacity(255 - playerSpritestageEX.getOpacity());
        }
    },

    workingstageEX: function() {
        if (playerSpritestageEX.iroflagstageEX == false) {
            playerSpritestageEX.workingFlagstageEX = (playerSpritestageEX.workingFlagstageEX == true) ? false : true;
            if (playerSpritestageEX.workingFlagstageEX) playerSpritestageEX.initWithFile(res.paintmansiro1);
            else playerSpritestageEX.initWithFile(res.paintmansiro2);


        }

    },
    working2stageEX: function() {
        if (playerSpritestageEX.iroflagakastageEX == true) {

            playerSpritestageEX.workingFlag2stageEX = (playerSpritestageEX.workingFlag2stageEX == true) ? false : true;
            if (playerSpritestageEX.workingFlag2stageEX) playerSpritestageEX.initWithFile(res.paintmanaka1);
            else playerSpritestageEX.initWithFile(res.paintmanaka2);
            playerSpritestageEX.setScale(2.3);



        }
    },
    working3stageEX: function() {
        if (playerSpritestageEX.iroflagaostageEX == true) {

            playerSpritestageEX.workingFlag3stageEX = (playerSpritestageEX.workingFlag3stageEX == true) ? false : true;
            if (playerSpritestageEX.workingFlag3stageEX) playerSpritestageEX.initWithFile(res.paintmanao1);
            else playerSpritestageEX.initWithFile(res.paintmanao2);
            playerSpritestageEX.setScale(2.3);



        }
    },
    working4stageEX: function() {
        if (playerSpritestageEX.iroflagkistageEX == true) {

            playerSpritestageEX.workingFlag4stageEX = (playerSpritestageEX.workingFlag4stageEX == true) ? false : true;
            if (playerSpritestageEX.workingFlag4stageEX) playerSpritestageEX.initWithFile(res.paintmanki1);
            else playerSpritestageEX.initWithFile(res.paintmanki2);
            playerSpritestageEX.setScale(2.3);



        }
    },
    working5stageEX: function() {
        if (playerSpritestageEX.iroflagmidoristageEX == true) {

            playerSpritestageEX.workingFlag5stageEX = (playerSpritestageEX.workingFlag5stageEX == true) ? false : true;
            if (playerSpritestageEX.workingFlag5stageEX) playerSpritestageEX.initWithFile(res.paintmanmidori1);
            else playerSpritestageEX.initWithFile(res.paintmanmidori2);
            playerSpritestageEX.setScale(2.3);



        }
    },
    working6stageEX: function() {
        if (playerSpritestageEX.iroflagmurasakistageEX == true) {

            playerSpritestageEX.workingFlag6stageEX = (playerSpritestageEX.workingFlag6stageEX == true) ? false : true;
            if (playerSpritestageEX.workingFlag6stageEX) playerSpritestageEX.initWithFile(res.paintmanmurasaki1);
            else playerSpritestageEX.initWithFile(res.paintmanmurasaki2);
            playerSpritestageEX.setScale(2.3);
        }
    },
    workingtekistageEX: function() {
        //距離で上下左右回り込むscriptを
        spritetekistageEX.workingFlagtekistageEX = (spritetekistageEX.workingFlagtekistageEX == true) ? false : true;
        if (spritetekistageEX.workingFlagtekistageEX) spritetekistageEX.initWithFile(res.tekiaomigi);
        else spritetekistageEX.initWithFile(res.tekiaohidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstageEX.x > enemyPositionstageEX.x && tekikabeflagstageEX == 0) {
            if (levelstageEX[enemyPositionstageEX.y][enemyPositionstageEX.x + 1] == 1 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 7 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 13 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 14 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 15 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstageEX.y >= enemyPositionstageEX.y) {
                    tekimovestageEX(0, -1);
                } else if (playerPositionstageEX.y < enemyPositionstageEX.y) {
                    tekimovestageEX(0, 1);
                }

            } else {
                tekimovestageEX(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstageEX.y > enemyPositionstageEX.y && tekikabeflagstageEX == 0) {
            if (levelstageEX[enemyPositionstageEX.y + 1][enemyPositionstageEX.x] == 1 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 7 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 13 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 14 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 15 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 16) {
                if (playerPositionstageEX.x > enemyPositionstageEX.x) {
                    tekimovestageEX(-1, 0);
                } else if (playerPositionstageEX.x <= enemyPositionstageEX.x) {
                    tekimovestageEX(1, 0);
                }
            } else {
                tekimovestageEX(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstageEX.x < enemyPositionstageEX.x && tekikabeflagstageEX == 0) {
            if (levelstageEX[enemyPositionstageEX.y][enemyPositionstageEX.x - 1] == 1 || levelstageEX[enemyPositionstageEX
                    .y - 1][enemyPositionstageEX.x] == 7 || levelstageEX[enemyPositionstageEX
                    .y - 1][enemyPositionstageEX
                    .x
                ] == 13 || levelstageEX[enemyPositionstageEX
                    .y - 1][enemyPositionstageEX
                    .x
                ] == 14 || levelstageEX[enemyPositionstageEX
                    .y - 1][enemyPositionstageEX
                    .x
                ] == 15 || levelstageEX[enemyPositionstageEX
                    .y - 1][enemyPositionstageEX
                    .x
                ] == 16) {
                if (playerPositionstageEX.y > enemyPositionstageEX.y) {
                    tekimovestageEX(0, -1);
                } else if (playerPositionstageEX.y <= enemyPositionstageEX.y) {
                    tekimovestageEX(0, 1);
                }
            } else {
                tekimovestageEX(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstageEX.y < enemyPositionstageEX.y || tekikabeflagstageEX == 1) {

            if (levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 1 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 7 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 13 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 14 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 15 || levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 16) {

                tekikabeflagstageEX = 1;
                tekimovestageEX(1, 0);
                if (levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 1 && levelstageEX[enemyPositionstageEX.y][enemyPositionstageEX.x + 1] == 1) {
                    tekimovestageEX(0, -1);
                    tekikabeflagstageEX = 0;
                }
            } else if (levelstageEX[enemyPositionstageEX.y - 1][enemyPositionstageEX.x] == 0 && tekikabeflagstageEX == 1) {
                //tekikabeflag = 0;
                tekimovestageEX(0, -1);
                console.log("上空白　上移動")
                if (levelstageEX[enemyPositionstageEX.y][enemyPositionstageEX.x - 1] == 0 && tekikabeflagstageEX == 1) {
                    tekikabeflagstageEX = 0;
                }
            } else {
                tekimovestageEX(0, -1);
            }
        }
    },
    //敵を消すため
    addSpritetekistageEX: function() {
        var spritetekistageEX = new SpritetekistageEX();
        this.addChild(spritetekistageEX);
    },
    removetekistageEX: function() {
        aotaositaflagstageEX = true;
        audioEngine.playEffect(res.jump03);
        spritetekistageEX.unschedule(this.workingtekistageEX);
        this.removeChild(spritetekistageEX);
    },
    //2体目
    workingteki2stageEX: function() {
        //距離で上下左右回り込むscriptを
        spriteteki2stageEX.workingFlagteki2stageEX = (spriteteki2stageEX.workingFlagteki2stageEX == true) ? false : true;
        if (spriteteki2stageEX.workingFlagteki2stageEX) spriteteki2stageEX.initWithFile(res.tekiakamigi);

        else spriteteki2stageEX.initWithFile(res.tekiakahidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstageEX.x > enemyPosition2stageEX.x && tekikabeflag2stageEX == 0) {
            if (levelstageEX[enemyPosition2stageEX.y][enemyPosition2stageEX.x + 1] == 1 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 7 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 13 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 14 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 15 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstageEX.y >= enemyPosition2stageEX.y) {
                    tekimove2stageEX(0, -1);
                } else if (playerPositionstageEX.y < enemyPosition2stageEX.y) {
                    tekimove2stageEX(0, 1);
                }

            } else {
                tekimove2stageEX(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstageEX.y > enemyPosition2stageEX.y && tekikabeflag2stageEX == 0) {
            if (levelstageEX[enemyPosition2stageEX.y + 1][enemyPosition2stageEX.x] == 1 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 7 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 13 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 14 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 15 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 16) {
                if (playerPositionstageEX.x > enemyPosition2stageEX.x) {
                    tekimove2stageEX(-1, 0);
                } else if (playerPositionstageEX.x <= enemyPosition2stageEX.x) {
                    tekimove2stageEX(1, 0);
                }
            } else {
                tekimove2stageEX(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstageEX.x < enemyPosition2stageEX.x && tekikabeflag2stageEX == 0) {
            if (levelstageEX[enemyPosition2stageEX.y][enemyPosition2stageEX.x - 1] == 1 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 7 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 13 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 14 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 15 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 16) {
                if (playerPositionstageEX.y > enemyPosition2stageEX.y) {
                    tekimove2stageEX(0, -1);
                } else if (playerPositionstageEX.y <= enemyPosition2stageEX.y) {
                    tekimove2stageEX(0, 1);
                }
            } else {
                tekimove2stageEX(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstageEX.y < enemyPosition2stageEX.y || tekikabeflag2stageEX == 1) {

            if (levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 1 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 7 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 13 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 14 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 15 || levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 16) {


                tekikabeflag2stageEX = 1;
                tekimove2stageEX(1, 0);
                if (levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 1 && levelstageEX[enemyPosition2stageEX.y][enemyPosition2stageEX.x + 1] == 1) {
                    tekimove2stageEX(0, -1);
                    tekikabeflag2stageEX = 0;
                }
            } else if (levelstageEX[enemyPosition2stageEX.y - 1][enemyPosition2stageEX.x] == 0 && tekikabeflag2stageEX == 1) {
                //tekikabeflag = 0;
                tekimove2stageEX(0, -1);
                console.log("上空白　上移動")
                if (levelstageEX[enemyPosition2stageEX.y][enemyPosition2stageEX.x - 1] == 0 && tekikabeflag2stageEX == 1) {
                    tekikabeflag2stageEX = 0;
                }
            } else {
                tekimove2stageEX(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki2stageEX: function() {
        var spriteteki2stageEX = new Spriteteki2stageEX();
        this.addChild(spriteteki2stageEX);
    },
    removeteki2stageEX: function() {
        audioEngine.playEffect(res.jump03);
        akataositaflagstageEX = true;
        spriteteki2stageEX.unschedule(this.workingteki2stageEX);
        this.removeChild(spriteteki2stageEX);
    },
    //3体目
    workingteki3stageEX: function() {
        //距離で上下左右回り込むscriptを
        spriteteki3stageEX.workingFlagteki3stageEX = (spriteteki3stageEX.workingFlagteki3stageEX == true) ? false : true;
        if (spriteteki3stageEX.workingFlagteki3stageEX) spriteteki3stageEX.initWithFile(res.tekikimigi);
        else spriteteki3stageEX.initWithFile(res.tekikihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstageEX.x > enemyPosition3stageEX.x && tekikabeflag3stageEX == 0) {
            if (levelstageEX[enemyPosition3stageEX.y][enemyPosition3stageEX.x + 1] == 1 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 7 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 13 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 14 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 15 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstageEX.y >= enemyPosition3stageEX.y) {
                    tekimove3stageEX(0, -1);
                } else if (playerPositionstageEX.y < enemyPosition3stageEX.y) {
                    tekimove3stageEX(0, 1);
                }

            } else {
                tekimove3stageEX(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstageEX.y > enemyPosition3stageEX.y && tekikabeflag3stageEX == 0) {
            if (levelstageEX[enemyPosition3stageEX.y + 1][enemyPosition3stageEX.x] == 1 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 7 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 13 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 14 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 15 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 16) {
                if (playerPositionstageEX.x > enemyPosition3stageEX.x) {
                    tekimove3stageEX(-1, 0);
                } else if (playerPositionstageEX.x <= enemyPosition3stageEX.x) {
                    tekimove3stageEX(1, 0);
                }
            } else {
                tekimove3stageEX(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstageEX.x < enemyPosition3stageEX.x && tekikabeflag3stageEX == 0) {
            if (levelstageEX[enemyPosition3stageEX.y][enemyPosition3stageEX.x - 1] == 1 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 7 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 13 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 14 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 15 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 16) {
                if (playerPositionstageEX.y > enemyPosition3stageEX.y) {
                    tekimove3stageEX(0, -1);
                } else if (playerPositionstageEX.y <= enemyPosition3stageEX.y) {
                    tekimove3stageEX(0, 1);
                }
            } else {
                tekimove3stageEX(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstageEX.y < enemyPosition3stageEX.y || tekikabeflag3stageEX == 1) {

            if (levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 1 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 7 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 13 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 14 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 15 || levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 16) {

                tekikabeflag3stageEX = 1;
                tekimove3stageEX(1, 0);
                if (levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 1 && levelstageEX[enemyPosition3stageEX.y][enemyPosition3stageEX.x + 1] == 1) {
                    tekimove3stageEX(0, -1);
                    tekikabeflag3stageEX = 0;
                }
            } else if (levelstageEX[enemyPosition3stageEX.y - 1][enemyPosition3stageEX.x] == 0 && tekikabeflag3stageEX == 1) {
                //tekikabeflag = 0;
                tekimove3stageEX(0, -1);
                console.log("上空白　上移動")
                if (levelstageEX[enemyPosition3stageEX.y][enemyPosition3stageEX.x - 1] == 0 && tekikabeflag3stageEX == 1) {
                    tekikabeflag3stageEX = 0;
                }
            } else {
                tekimove3stageEX(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki3stageEX: function() {
        var spriteteki3stageEX = new Spriteteki3stageEX();
        this.addChild(spriteteki3stageEX);
    },
    removeteki3stageEX: function() {
        audioEngine.playEffect(res.jump03);
        kitaositaflagstageEX = true;
        spriteteki3stageEX.unschedule(this.workingteki3stageEX);
        this.removeChild(spriteteki3stageEX);
    },
    //4体目
    workingteki4stageEX: function() {
        //距離で上下左右回り込むscriptを
        spriteteki4stageEX.workingFlagteki4stageEX = (spriteteki4stageEX.workingFlagteki4stageEX == true) ? false : true;
        if (spriteteki4stageEX.workingFlagteki4stageEX) spriteteki4stageEX.initWithFile(res.tekimidorimigi);

        else spriteteki4stageEX.initWithFile(res.tekimidorihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstageEX
            .x > enemyPosition4stageEX
            .x && tekikabeflag4 == 0) {
            if (levelstageEX[enemyPosition4stageEX
                    .y][enemyPosition4stageEX
                    .x + 1
                ] == 1 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 7 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 13 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 14 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 15 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstageEX
                    .y >= enemyPosition4stageEX
                    .y) {
                    tekimove4stageEX(0, -1);
                } else if (playerPositionstageEX
                    .y < enemyPosition4stageEX
                    .y) {
                    tekimove4stageEX(0, 1);
                }

            } else {
                tekimove4stageEX(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstageEX
            .y > enemyPosition4stageEX
            .y && tekikabeflag4stageEX == 0) {
            if (levelstageEX[enemyPosition4stageEX
                    .y + 1][enemyPosition4stageEX
                    .x
                ] == 1 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 7 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 13 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 14 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 15 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 16) {
                if (playerPositionstageEX
                    .x > enemyPosition4stageEX
                    .x) {
                    tekimove4stageEX(-1, 0);
                } else if (playerPositionstageEX
                    .x <= enemyPosition4stageEX
                    .x) {
                    tekimove4stageEX(1, 0);
                }
            } else {
                tekimove4stageEX(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstageEX
            .x < enemyPosition4stageEX
            .x && tekikabeflag4stageEX == 0) {
            if (levelstageEX[enemyPosition4stageEX
                    .y][enemyPosition4stageEX
                    .x - 1
                ] == 1 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 7 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 13 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 14 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPosition4stageEX.x] == 15 || levelstageEX[enemyPosition4stageEX.y - 1][enemyPositionstageEX.x] == 16) {
                if (playerPositionstageEX
                    .y > enemyPosition4stageEX
                    .y) {
                    tekimove4stageEX(0, -1);
                } else if (playerPositionstageEX
                    .y <= enemyPosition4stageEX
                    .y) {
                    tekimove4stageEX(0, 1);
                }
            } else {
                tekimove4stageEX(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstageEX
            .y < enemyPosition4stageEX
            .y || tekikabeflag4stageEX == 1) {

            if (levelstageEX[enemyPosition4stageEX
                    .y - 1][enemyPosition4stageEX
                    .x
                ] == 1 || levelstageEX[enemyPosition4stageEX
                    .y - 1][enemyPosition4stageEX
                    .x
                ] == 7 || levelstageEX[enemyPosition4stageEX
                    .y - 1][enemyPosition4stageEX
                    .x
                ] == 13 || levelstageEX[enemyPosition4stageEX
                    .y - 1][enemyPosition4stageEX
                    .x
                ] == 14 || levelstageEX[enemyPosition4stageEX
                    .y - 1][enemyPosition4stageEX
                    .x
                ] == 15 || levelstageEX[enemyPosition4stageEX
                    .y - 1][enemyPosition4stageEX
                    .x
                ] == 16) {

                tekikabeflag4stageEX = 1;
                tekimove4stageEX(1, 0);
                if (levelstageEX[enemyPosition4stageEX
                        .y - 1][enemyPosition4stageEX
                        .x
                    ] == 1 && levelstageEX[enemyPosition4stageEX
                        .y][enemyPosition4stageEX
                        .x + 1
                    ] == 1) {
                    tekimove4stageEX(0, -1);
                    tekikabeflag4stageEX = 0;
                }
            } else if (levelstageEX[enemyPosition4stageEX
                    .y - 1][enemyPosition4stageEX
                    .x
                ] == 0 && tekikabeflag4stageEX == 1) {
                //tekikabeflag = 0;
                tekimove4stageEX(0, -1);
                console.log("上空白　上移動")
                if (levelstageEX[enemyPosition4stageEX
                        .y][enemyPosition4stageEX
                        .x - 1
                    ] == 0 && tekikabeflag4stageEX == 1) {
                    tekikabeflag4stageEX = 0;
                }
            } else {
                tekimove4stageEX(0, -1);
            }
        }
    },
    //敵を消すため
    addspriteteki4stageEX: function() {
        var spriteteki4stageEX = new spriteteki4stageEX();
        this.addChild(spriteteki4stageEX);
    },
    removeteki4stageEX: function() {
        audioEngine.playEffect(res.jump03);
        midoritaositaflagstageEX = true;
        spriteteki4stageEX.unschedule(this.workingteki4);
        this.removeChild(spriteteki4stageEX);
    },
    //5体目
    workingteki5stageEX: function() {
        //距離で上下左右回り込むscriptを
        spriteteki5stageEX.workingFlagteki5stageEX = (spriteteki5stageEX.workingFlagteki5stageEX == true) ? false : true;
        if (spriteteki5stageEX.workingFlagteki5stageEX) spriteteki5stageEX.initWithFile(res.tekimurasakimigi);
        else spriteteki5stageEX.initWithFile(res.tekimurasakihidari);
        //spriteteki.setScale(2.3);
        //プレイヤーが右敵が左
        if (playerPositionstageEX
            .x > enemyPosition5stageEX.x && tekikabeflag5stageEX == 0) {
            if (levelstageEX[enemyPosition5stageEX.y][enemyPosition5stageEX.x + 1] == 1 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 7 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 13 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 14 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 15 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 16) {
                //プレイヤーの上か下かで回り込む方向決める
                if (playerPositionstageEX
                    .y >= enemyPosition5stageEX.y) {
                    tekimove5stageEX(0, -1);
                } else if (playerPositionstageEX
                    .y < enemyPosition5stageEX.y) {
                    tekimove5stageEX(0, 1);
                }

            } else {
                tekimove5stageEX(1, 0);
            }
            //プレイヤーが下敵が上
        } else if (playerPositionstageEX
            .y > enemyPosition5stageEX.y && tekikabeflag5stageEX == 0) {
            if (levelstageEX[enemyPosition5stageEX.y + 1][enemyPosition5stageEX.x] == 1 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 7 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 13 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 14 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 15 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 16) {
                if (playerPositionstageEX
                    .x > enemyPosition5stageEX.x) {
                    tekimove5stageEX(-1, 0);
                } else if (playerPositionstageEX
                    .x <= enemyPosition5stageEX.x) {
                    tekimove5stageEX(1, 0);
                }
            } else {
                tekimove5stageEX(0, 1);
            }
            //プレイヤーが左敵が右
        } else if (playerPositionstageEX
            .x < enemyPosition5stageEX.x && tekikabeflag5stageEX == 0) {
            if (levelstageEX[enemyPosition5stageEX.y][enemyPosition5stageEX.x - 1] == 1 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 7 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 13 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 14 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 15 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 16) {
                if (playerPositionstageEX
                    .y > enemyPosition5stageEX.y) {
                    tekimove5stageEX(0, -1);
                } else if (playerPositionstageEX
                    .y <= enemyPosition5stageEX.y) {
                    tekimove5stageEX(0, 1);
                }
            } else {
                tekimove5stageEX(-1, 0);
            }
            //プレイヤーが上で敵が下の場合 フラグで敵を右から回り込ませる
        } else if (playerPositionstageEX
            .y < enemyPosition5stageEX.y || tekikabeflag5 == 1) {

            if (levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 1 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 7 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 13 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 14 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 15 || levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 16) {

                tekikabeflag5stageEX = 1;
                tekimove5stageEX(1, 0);
                if (levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 1 && levelstageEX[enemyPosition5stageEX.y][enemyPosition5stageEX.x + 1] == 1) {
                    tekimove5stageEX(0, -1);
                    tekikabeflag5stageEX = 0;
                }
            } else if (levelstageEX[enemyPosition5stageEX.y - 1][enemyPosition5stageEX.x] == 0 && tekikabeflag5stageEX == 1) {
                //tekikabeflag = 0;
                tekimove5stageEX(0, -1);
                console.log("上空白　上移動")
                if (levelstageEX[enemyPosition5stageEX.y][enemyPosition5stageEX.x - 1] == 0 && tekikabeflag5stageEX == 1) {
                    tekikabeflag5stageEX = 0;
                }
            } else {
                tekimove5stageEX(0, -1);
            }
        }
    },
    //敵を消すため
    addSpriteteki5stageEX: function() {
        var spriteteki5stageEX = new Spriteteki5stageEX();
        this.addChild(spriteteki5stageEX);
    },
    removeteki5stageEX: function() {
        audioEngine.playEffect(res.jump03);
        murasakitaositaflagstageEX = true;
        spriteteki5stageEX.unschedule(this.workingteki5stageEX);
        this.removeChild(spriteteki5stageEX);
    },
    removedotstageEX: function(dotspritestageEX) {

        this.removeChild(dotspritestageEX);
    },
    workingtekibossstageEX: function() {

        spritetekibossstageEX.workingFlagtekibossstageEX = (spritetekibossstageEX.workingFlagtekibossstageEX == true) ? false : true;
        if (spritetekibossstageEX.workingFlagtekibossstageEX) spritetekibossstageEX.initWithFile(res.bossmigi);
        else spritetekibossstageEX.initWithFile(res.bosshidari);
        spritetekibossstageEX.setScale(0.8);

    },
});



var MemoryTileuestageEX = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.ue);
        cc.eventManager.addListener(listener2stageEX.clone(), this);

    }

});
var MemoryTilemigistageEX = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.migi);
        cc.eventManager.addListener(listener3stageEX.clone(), this);
    }
});
var MemoryTilesitastageEX = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.sita);
        cc.eventManager.addListener(listener4stageEX.clone(), this);
    }
});
var MemoryTilehidaristageEX = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile(res.hidari);
        cc.eventManager.addListener(listener5stageEX.clone(), this);
    }
});
var listener2stageEX = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印前.png");
            pickedTilesstageEX.push(target);

            ueniikustageEX();


        }
    }
});

var listener3stageEX = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印右.png");
            pickedTilesstageEX.push(target);

            miginiikustageEX();


        }
    }
});

var listener4stageEX = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();
        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印後.png");
            pickedTilesstageEX.push(target);

            sitaniikustageEX();


        }
    }
});

var listener5stageEX = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {

        var target = event.getCurrentTarget();
        var location = target.convertToNodeSpace(touch.getLocation());
        var targetSize = target.getContentSize();

        var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
        if (cc.rectContainsPoint(targetRectangle, location)) {
            target.initWithFile("res/矢印左.png");
            pickedTilesstageEX.push(target);

            hidariniikustageEX();


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
                movestageEX(1, 0);
            } else { //左方向移動
                movestageEX(-1, 0);
            }
        } else {
            if (distY > 0) { //上方向移動
                //console.log("上 move(0,-1) distY "+ distY );
                movestageEX(0, -1);
            } else { //下方向移動
                //console.log("下 move(0,1) distY "+ distY );
                movestageEX(0, 1);
            }
        }
    }

}



function movestageEX(deltaXstageEX, deltaYstageEX) {


    switch (levelstageEX[playerPositionstageEX
        .y + deltaYstageEX][playerPositionstageEX
        .x + deltaXstageEX
    ]) {
        case 7:
            if (levelstageEX[playerPositionstageEX.y + deltaYstageEX][playerPositionstageEX.x + deltaXstageEX] == 7) {
                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] -= 4;
                playerPositionstageEX.x += deltaXstageEX;
                playerPositionstageEX.y += deltaYstageEX;

                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] += 4;
                playerSpritestageEX.setPosition(30 + 75 * playerPositionstageEX.x, 1140 - 75 * playerPositionstageEX.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 1 && aotaositaflagstageEX == false) {
                    layer0stageEX.removetekistageEX(spritetekistageEX);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestageEX.invulnerabilitystageEX == 0 && aotaositaflagstageEX == false) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
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
            if (levelstageEX[playerPositionstageEX.y + deltaYstageEX][playerPositionstageEX.x + deltaXstageEX] == 16) {
                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] -= 4;
                playerPositionstageEX.x += deltaXstageEX;
                playerPositionstageEX.y += deltaYstageEX;

                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] += 4;
                playerSpritestageEX.setPosition(30 + 75 * playerPositionstageEX.x, 1140 - 75 * playerPositionstageEX.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 5 && murasakitaositaflagstageEX == false) {
                    layer0stageEX.removeteki5stageEX(spriteteki5stageEX);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestageEX.invulnerabilitystageEX == 0 && murasakitaositaflagstageEX == false) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
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
            if (levelstageEX[playerPositionstageEX.y + deltaYstageEX][playerPositionstageEX.x + deltaXstageEX] == 15) {
                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] -= 4;
                playerPositionstageEX.x += deltaXstageEX;
                playerPositionstageEX.y += deltaYstageEX;

                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] += 4;
                playerSpritestageEX.setPosition(30 + 75 * playerPositionstageEX.x, 1140 - 75 * playerPositionstageEX.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 4 && midoritaositaflagstageEX == false) {
                    layer0stageEX.removeteki4stageEX(spriteteki4stageEX);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestageEX.invulnerabilitystageEX == 0 && midoritaositaflagstageEX == false) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
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
            if (levelstageEX[playerPositionstageEX.y + deltaYstageEX][playerPositionstageEX.x + deltaXstageEX] == 14) {
                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] -= 4;
                playerPositionstageEX.x += deltaXstageEX;
                playerPositionstageEX.y += deltaYstageEX;

                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] += 4;
                playerSpritestageEX.setPosition(30 + 75 * playerPositionstageEX.x, 1140 - 75 * playerPositionstageEX.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 3 && kitaositaflagstageEX == false) {
                    layer0stageEX.removeteki3stageEX(spriteteki3stageEX);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestageEX.invulnerabilitystageEX == 0 && kitaositaflagstageEX == false) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
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
            if (levelstageEX[playerPositionstageEX.y + deltaYstageEX][playerPositionstageEX.x + deltaXstageEX] == 13) {
                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] -= 4;
                playerPositionstageEX.x += deltaXstageEX;
                playerPositionstageEX.y += deltaYstageEX;

                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] += 4;
                playerSpritestageEX.setPosition(30 + 75 * playerPositionstageEX.x, 1140 - 75 * playerPositionstageEX.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 2 && akataositaflagstageEX == false) {
                    layer0stageEX.removeteki2stageEX(spriteteki2stageEX);

                    //level[enemyPosition.y][enemyPosition.x] = 0;

                } else if (playerSpritestageEX.invulnerabilitystageEX == 0 && akataositaflagstageEX == false) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
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

            if (levelstageEX[playerPositionstageEX
                    .y + deltaYstageEX][playerPositionstageEX
                    .x + deltaXstageEX
                ] == 12) {
                playerSpritestageEX.iroflagstageEX = true;
                playerSpritestageEX.iroflagakastageEX = false;
                playerSpritestageEX.iroflagaostageEX = false;
                playerSpritestageEX.iroflagkistageEX = false;
                playerSpritestageEX.iroflagmidoristageEX = false;
                playerSpritestageEX.iroflagmurasakistageEX = true;
                playerSpritestageEX.tekisyoutotustageEX = 5;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstageEX[playerPositionstageEX
                    .y + deltaYstageEX][playerPositionstageEX
                    .x + deltaXstageEX
                ] == 11) {
                playerSpritestageEX.iroflagstageEX = true;
                playerSpritestageEX.iroflagakastageEX = false;
                playerSpritestageEX.iroflagaostageEX = false;
                playerSpritestageEX.iroflagkistageEX = false;
                playerSpritestageEX.iroflagmidoristageEX = true;
                playerSpritestageEX.iroflagmurasakistageEX = false;
                playerSpritestageEX.tekisyoutotustageEX = 4;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstageEX[playerPositionstageEX
                    .y + deltaYstageEX][playerPositionstageEX
                    .x + deltaXstageEX
                ] == 10) {
                playerSpritestageEX.iroflagstageEX = true;
                playerSpritestageEX.iroflagakastageEX = false;
                playerSpritestageEX.iroflagaostageEX = false;
                playerSpritestageEX.iroflagkistageEX = true;
                playerSpritestageEX.iroflagmidoristageEX = false;
                playerSpritestageEX.iroflagmurasakistageEX = false;
                playerSpritestageEX.tekisyoutotustageEX = 3;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstageEX[playerPositionstageEX
                    .y + deltaYstageEX][playerPositionstageEX
                    .x + deltaXstageEX
                ] == 9) {
                playerSpritestageEX.iroflagstageEX = true;
                playerSpritestageEX.iroflagakastageEX = true;
                playerSpritestageEX.iroflagaostageEX = false;
                playerSpritestageEX.iroflagkistageEX = false;
                playerSpritestageEX.iroflagmidoristageEX = false;
                playerSpritestageEX.iroflagmurasakistageEX = false;
                playerSpritestageEX.tekisyoutotustageEX = 2;
                audioEngine.playEffect(res.powerup08);
            }
            if (levelstageEX[playerPositionstageEX
                    .y + deltaYstageEX][playerPositionstageEX
                    .x + deltaXstageEX
                ] == 8) {
                playerSpritestageEX.iroflagstageEX = true;
                playerSpritestageEX.iroflagakastageEX = false;
                playerSpritestageEX.iroflagaostageEX = true;
                playerSpritestageEX.iroflagkistageEX = false;
                playerSpritestageEX.iroflagmidoristageEX = false;
                playerSpritestageEX.iroflagmurasakistageEX = false;
                playerSpritestageEX.tekisyoutotustageEX = 1;
                audioEngine.playEffect(res.powerup08);
            }



            levelstageEX
                [playerPositionstageEX
                    .y][playerPositionstageEX
                    .x
                ] -= 4;
            playerPositionstageEX
                .x += deltaXstageEX;
            playerPositionstageEX
                .y += deltaYstageEX;

            levelstageEX
                [playerPositionstageEX
                    .y][playerPositionstageEX
                    .x
                ] += 4;


            playerSpritestageEX.setPosition(30 + 75 * playerPositionstageEX
                .x, 1140 - 75 * playerPositionstageEX
                .y);

            break;
        case 3:
        case 5:

            break;
        case 2:
            if (levelstageEX[playerPositionstageEX
                    .y + deltaYstageEX][playerPositionstageEX
                    .x + deltaXstageEX
                ] == 2) {
                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] -= 4;
                playerPositionstageEX
                    .x += deltaXstageEX;
                playerPositionstageEX
                    .y += deltaYstageEX;

                levelstageEX
                    [playerPositionstageEX
                        .y][playerPositionstageEX
                        .x
                    ] += 4;
                playerSpritestageEX.setPosition(30 + 75 * playerPositionstageEX
                    .x, 1140 - 75 * playerPositionstageEX
                    .y);



                //layer0stageEX.removedotstageEX(spritedotstageEX);
                layer0stageEX.removedotstageEX(dotArraystageEX[playerPositionstageEX.y][playerPositionstageEX.x]);
                levelstageEX[playerPositionstageEX.y][playerPositionstageEX.x] = 4;
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

function tekimovestageEX(deltaX2stageEX, deltaY2stageEX) {


    switch (levelstageEX[enemyPositionstageEX.y + deltaY2stageEX][enemyPositionstageEX.x + deltaX2stageEX]) {
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


            levelstageEX[enemyPositionstageEX.y][enemyPositionstageEX.x] -= 7;
            enemyPositionstageEX.x += deltaX2stageEX;
            enemyPositionstageEX.y += deltaY2stageEX;
            levelstageEX[enemyPositionstageEX.y][enemyPositionstageEX.x] += 7;
            //ここ
            var nowPosXstageEX = spritetekistageEX.getPosition().x;
            var nowPosYstageEX = spritetekistageEX.getPosition().y;

            var newPosXstageEX = 30 + 75 * enemyPositionstageEX.x;
            var newPosYstageEX = 1140 - 75 * enemyPositionstageEX.y;

            spritetekistageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosXstageEX, newPosYstageEX)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstageEX[enemyPositionstageEX.y + deltaY2stageEX][enemyPositionstageEX.x + deltaX2stageEX] == 4) {
                levelstageEX[enemyPositionstageEX.y][enemyPositionstageEX.x] -= 7;
                enemyPositionstageEX.x += deltaX2stageEX;
                enemyPositionstageEX.y += deltaY2stageEX;
                levelstageEX[enemyPositionstageEX.y][enemyPositionstageEX.x] += 7;

                var nowPosXstageEX = spritetekistageEX.getPosition().x;
                var nowPosYstageEX = spritetekistageEX.getPosition().y;

                var newPosXstageEX = 30 + 75 * enemyPositionstageEX.x;
                var newPosYstageEX = 1140 - 75 * enemyPositionstageEX.y;
                spritetekistageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosXstageEX, newPosYstageEX)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 1) {
                    layer0stageEX.removetekistageEX(spritetekistageEX);

                } else if (playerSpritestageEX.invulnerabilitystageEX == 0) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
                    audioEngine.playEffect(res.damage7);
                    deltaX2stageEX += 1;
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

function tekimove2stageEX(deltaX3stageEX, deltaY3stageEX) {


    switch (levelstageEX[enemyPosition2stageEX.y + deltaY3stageEX][enemyPosition2stageEX.x + deltaX3stageEX]) {
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


            levelstageEX
                [enemyPosition2stageEX.y][enemyPosition2stageEX.x] -= 13;
            enemyPosition2stageEX.x += deltaX3stageEX;
            enemyPosition2stageEX.y += deltaY3stageEX;

            levelstageEX
                [enemyPosition2stageEX.y][enemyPosition2stageEX.x] += 13;
            //ここ
            var nowPosX2stageEX = spriteteki2stageEX.getPosition().x;
            var nowPosY2stageEX = spriteteki2stageEX.getPosition().y;

            var newPosX2stageEX = 30 + 75 * enemyPosition2stageEX.x;
            var newPosY2stageEX = 1140 - 75 * enemyPosition2stageEX.y;

            spriteteki2stageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosX2stageEX, newPosY2stageEX)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstageEX[enemyPosition2stageEX.y + deltaY3stageEX][enemyPosition2stageEX.x + deltaX3stageEX] == 4) {
                levelstageEX
                    [enemyPosition2stageEX.y][enemyPosition2stageEX.x] -= 13;
                enemyPosition2stageEX.x += deltaX3stageEX;
                enemyPosition2stageEX.y += deltaY3stageEX;
                levelstageEX
                    [enemyPosition2stageEX.y][enemyPosition2stageEX.x] += 13;

                var nowPosX2stageEX = spriteteki2stageEX.getPosition().x;
                var nowPosY2stageEX = spriteteki2stageEX.getPosition().y;

                var newPosX2stageEX = 30 + 75 * enemyPosition2stageEX.x;
                var newPosY2stageEX = 1140 - 75 * enemyPosition2stageEX.y;
                spriteteki2stageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosX2stageEX, newPosY2stageEX)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 2) {
                    layer0stageEX.removeteki2stageEX(spriteteki2stageEX);



                } else if (playerSpritestageEX.invulnerabilitystageEX == 0) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
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

function tekimove3stageEX(deltaX4stageEX, deltaY4stageEX) {


    switch (levelstageEX[enemyPosition3stageEX.y + deltaY4stageEX][enemyPosition3stageEX.x + deltaX4stageEX]) {
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


            levelstageEX
                [enemyPosition3stageEX.y][enemyPosition3stageEX.x] -= 14;
            enemyPosition3stageEX.x += deltaX4stageEX;
            enemyPosition3stageEX.y += deltaY4stageEX;

            levelstageEX
                [enemyPosition3stageEX.y][enemyPosition3stageEX.x] += 14;
            //ここ
            var nowPosX3stageEX = spriteteki3stageEX.getPosition().x;
            var nowPosY3stageEX = spriteteki3stageEX.getPosition().y;

            var newPosX3stageEX = 30 + 75 * enemyPosition3stageEX.x;
            var newPosY3stageEX = 1140 - 75 * enemyPosition3stageEX.y;

            spriteteki3stageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosX3stageEX, newPosY3stageEX)));
            //spriteteki.setPosition(newPosX,newPosY);

            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstageEX[enemyPosition3stageEX.y + deltaY4stageEX][enemyPosition3stageEX.x + deltaX4stageEX] == 4) {
                levelstageEX
                    [enemyPosition3stageEX.y][enemyPosition3stageEX.x] -= 14;
                enemyPosition3stageEX.x += deltaX4stageEX;
                enemyPosition3stageEX.y += deltaY4stageEX;
                levelstageEX
                    [enemyPosition3stageEX.y][enemyPosition3stageEX.x] += 14;

                var nowPosX3stageEX = spriteteki3stageEX.getPosition().x;
                var nowPosY3stageEX = spriteteki3stageEX.getPosition().y;

                var newPosX3stageEX = 30 + 75 * enemyPosition3stageEX.x;
                var newPosY3stageEX = 1140 - 75 * enemyPosition3stageEX.y;
                spriteteki3stageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosX3stageEX, newPosY3stageEX)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 3) {
                    layer0stageEX.removeteki3stageEX(spriteteki3stageEX);


                } else if (playerSpritestageEX.invulnerabilitystageEX == 0) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
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

function tekimove4stageEX(deltaX5stageEX, deltaY5stageEX) {


    switch (levelstageEX[enemyPosition4stageEX
        .y + deltaY5stageEX][enemyPosition4stageEX
        .x + deltaX5stageEX
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


            levelstageEX
                [enemyPosition4stageEX
                    .y][enemyPosition4stageEX
                    .x
                ] -= 15;
            enemyPosition4stageEX
                .x += deltaX5stageEX;
            enemyPosition4stageEX
                .y += deltaY5stageEX;

            levelstageEX
                [enemyPosition4stageEX
                    .y][enemyPosition4stageEX
                    .x
                ] += 15;
            //ここ
            var nowPosX4stageEX = spriteteki4stageEX.getPosition().x;
            var nowPosY4stageEX = spriteteki4stageEX.getPosition().y;

            var newPosX4stageEX = 30 + 75 * enemyPosition4stageEX
                .x;
            var newPosY4stageEX = 1140 - 75 * enemyPosition4stageEX
                .y;

            spriteteki4stageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosX4stageEX, newPosY4stageEX)));
            //spriteteki.setPosition(newPosX,newPosY);
            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstageEX[enemyPosition4stageEX
                    .y + deltaY5stageEX][enemyPosition4stageEX
                    .x + deltaX5stageEX
                ] == 4) {
                levelstageEX
                    [enemyPosition4stageEX
                        .y][enemyPosition4stageEX
                        .x
                    ] -= 15;
                enemyPosition4stageEX
                    .x += deltaX5stageEX;
                enemyPosition4stageEX
                    .y += deltaY5stageEX;
                levelstageEX
                    [enemyPosition4stageEX
                        .y][enemyPosition4stageEX
                        .x
                    ] += 15;

                var nowPosX4stageEX = spriteteki4stageEX.getPosition().x;
                var nowPosY4stageEX = spriteteki4stageEX.getPosition().y;

                var newPosX4stageEX = 30 + 75 * enemyPosition4stageEX
                    .x;
                var newPosY4stageEX = 1140 - 75 * enemyPosition4stageEX
                    .y;
                spriteteki4stageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosX4stageEX, newPosY4stageEX)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 4) {
                    layer0stageEX.removeteki4stageEX(spriteteki4stageEX);


                } else if (playerSpritestageEX.invulnerabilitystageEX == 0) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
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

function tekimove5stageEX(deltaX6stageEX, deltaY6stageEX) {


    switch (levelstageEX[enemyPosition5stageEX.y + deltaY6stageEX][enemyPosition5stageEX.x + deltaX6stageEX]) {
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


            levelstageEX
                [enemyPosition5stageEX.y][enemyPosition5stageEX.x] -= 16;
            enemyPosition5stageEX.x += deltaX6stageEX;
            enemyPosition5stageEX.y += deltaY6stageEX;

            levelstageEX
                [enemyPosition5stageEX.y][enemyPosition5stageEX.x] += 16;
            //ここ
            var nowPosX5stageEX = spriteteki5stageEX.getPosition().x;
            var nowPosY5stageEX = spriteteki5stageEX.getPosition().y;

            var newPosX5stageEX = 30 + 75 * enemyPosition5stageEX.x;
            var newPosY5stageEX = 1140 - 75 * enemyPosition5stageEX.y;

            spriteteki5stageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosX5stageEX, newPosY5stageEX)));
            //spriteteki.setPosition(newPosX,newPosY);
            //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);

            break;
        case 4:
        case 6:
            if (levelstageEX[enemyPosition5stageEX.y + deltaY6stageEX][enemyPosition5stageEX.x + deltaX6stageEX] == 4) {
                levelstageEX
                    [enemyPosition5stageEX.y][enemyPosition5stageEX.x] -= 16;
                enemyPosition5stageEX.x += deltaX6stageEX;
                enemyPosition5stageEX.y += deltaY6stageEX;
                levelstageEX
                    [enemyPosition5stageEX.y][enemyPosition5stageEX.x] += 16;

                var nowPosX5stageEX = spriteteki5stageEX.getPosition().x;
                var nowPosY5stageEX = spriteteki5stageEX.getPosition().y;

                var newPosX5stageEX = 30 + 75 * enemyPosition5stageEX.x;
                var newPosY5stageEX = 1140 - 75 * enemyPosition5stageEX.y;
                spriteteki5stageEX.runAction(cc.MoveTo.create(0.5, cc.p(newPosX5stageEX, newPosY5stageEX)));
                //ここ
                //spriteteki.setPosition(30 + 75 * enemyPosition.x, 1140 - 75 * enemyPosition.y);
                if (playerSpritestageEX.tekisyoutotustageEX == 5) {
                    layer0stageEX.removeteki5stageEX(spriteteki5stageEX);


                } else if (playerSpritestageEX.invulnerabilitystageEX == 0) {
                    playerSpritestageEX.invulnerabilitystageEX = 100;
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

//小惑星クラス
var Asteroid = cc.Sprite.extend({
    sprite: null,
    // ブロックを保持しておく配列
    dropSpriteArray: null,
    // 配列の宣言　ブロックの名前を指定
    dropArray: [res.tekiaomigi, res.tekiaohidari, res.tekiakamigi, res.tekiakahidari, res.tekikimigi, res.tekikihidari, res.tekimidorimigi],
    ctor: function() {
        this._super();
        //this.initWithFile(res.nagoya0_png);
        var size = cc.director.getWinSize();

        this.dropSpriteArray = new Array();
        var i = 1;
        for (i = 0; i < 1; i++) {
            var rnd = Math.floor(Math.random() * 7);

            this.sprite = new cc.Sprite(this.dropArray[rnd]);
            cc.log(i);
            cc.log(this.dropArray[i]);

            this.dropSpriteArray.push(this.sprite);
            // this.addChild(this.sprite);
            this.addChild(this.dropSpriteArray[i], 0);
        }
    },


    onEnter: function() {
        this._super();
        this.setPosition(550, 800);
        var moveAction = cc.MoveTo.create(5.5, new cc.Point(-100, Math.random() * 320));
        this.runAction(moveAction);
        this.scheduleUpdate();
    },
    update: function(dt) {

            //小惑星との衝突を判定する処理
            var shipBoundingBox = playerSpritestageEX.getBoundingBox();
        var asteroidBoundingBox = this.getBoundingBox();

        //rectIntersectsRectは２つの矩形が交わっているかチェックする
        if (cc.rectIntersectsRect(shipBoundingBox, asteroidBoundingBox) && playerSprite.invulnerability == 0) {
          miss2--;
          missText2.setString(" " + miss2);
          if (miss2 == 0) {
              miss2 = 3;
              cc.director.runScene(new overScene());
          }
            layer0stageEX.removeAsteroid(this); //小惑星を削除する
            //ボリュームを上げる
            audioEngine.setEffectsVolume(audioEngine.getEffectsVolume() + 0.3);
            //効果音を再生する
            //  audioEngine.playEffect("res/se_bang.mp3");
            audioEngine.playEffect(res.jump03);
            //        score++;
            //      scoreText.setString("Score: " + score * 10);


        }
        //画面の外にでた小惑星を消去する処理
        if (this.getPosition().x < -50) {
            layer0stageEX.removeAsteroid(this)
        }

    }
});

function clear() {
    cc.director.runScene(new ResultScene());
}

function over() {
    cc.director.runScene(new overScene());
}
//左に行く
function hidariniikustageEX() {
    movestageEX(-1, 0);
    //  tekimove(-1, 0);
}
//上
function ueniikustageEX() {
    //playerSprite.initWithFile(res.paintmansiro2);

    movestageEX(0, -1);
    //tekimove(0, -1);
    /*var pause = setTimeout(function() {

    }, 500);
    */
}
//右
function miginiikustageEX() {
    movestageEX(1, 0);
    //tekimove(1, 0);
}
//下
function sitaniikustageEX() {
    movestageEX(0, 1);
    //tekimove(0, 1);
    //spritedot.initWithFile(res.paintmansiro2);
}
//goを消すための
function gokesi() {

}
