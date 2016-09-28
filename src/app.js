var size;
//var stageflag = 0;

var level;

var map;

var level = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 2, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 2, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];




//kokoko = level[];
var playerPosition; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var playerSprite; //プレイヤーのスプライト
var cratesArray = []; //配置した木箱のスプライトを配列に保持する

var startTouch;
var endTouch;
var swipeTolerance = 10; //スワイプかを判断する閾値
var audioEngine;
var flag = 0;


var gameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        var layer0 = new gameLayer();
        layer0.init();
        this.addChild(layer0);

        //音楽再生エンジン
        audioEngine = cc.audioEngine;
        //bgm再生
        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            audioEngine.playMusic(res.bgm_main, true);
        }
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




        var levelSprite3 = cc.Sprite.create(res.kinoback);
        levelSprite3.setPosition(240, 875);
        levelSprite3.setScale(4, 2.85);
        this.addChild(levelSprite3);
        var levelSprite2 = cc.Sprite.create(res.backsiro);
        levelSprite2.setPosition(80, 730);
        levelSprite2.setScale(4.4, 2.2);
        this.addChild(levelSprite2);
        var sprite3 = cc.Sprite.create(res.ue);
        sprite3.setPosition(480, 200);
        sprite3.setScale(0.3);
        this.addChild(sprite3, 0);

        var sprite4 = cc.Sprite.create(res.sita);
        sprite4.setPosition(480, 75);
        sprite4.setScale(0.3);
        this.addChild(sprite4, 0);

        var sprite5 = cc.Sprite.create(res.hidari);
        sprite5.setPosition(350, 125);
        sprite5.setScale(0.3);
        this.addChild(sprite5, 0);

        var sprite6 = cc.Sprite.create(res.migi);
        sprite6.setPosition(610, 125);
        sprite6.setScale(0.3);
        this.addChild(sprite6, 0);

        for (i = 0; i < 12; i++) {　　　　　　
            cratesArray[i] = [];　 //配列オブジェクトの生成

            for (j = 0; j < 15; j++) {
                switch (level[i][j]) {
                    case 0:
                        var spriteyuka = cc.Sprite.create(res.yuka);
                        spriteyuka.setPosition(40 + 75 * j, 1140 - 75 * i);
                        spriteyuka.setScale(0.21);
                        this.addChild(spriteyuka, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する

                        break;
                    case 1:
                        var spritekabe = cc.Sprite.create(res.kabeblock);
                        spritekabe.setPosition(40 + 75 * j, 1140 - 75 * i);
                        spritekabe.setScale(0.19);
                        this.addChild(spritekabe, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する

                        break;
                    case 2:
                        var spritedot = cc.Sprite.create(res.dot);
                        spritedot.setPosition(40 + 75 * j, 1140 - 75 * i);
                        spritedot.setScale(0.15);
                        this.addChild(spritedot, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する

                        break;
                    case 4:
                    case 6:
                        playerSprite = cc.Sprite.create(res.paintmansiro1);
                        playerSprite.setPosition(40 + 75 * j, 1140 - 75 * i);
                        playerSprite.setScale(0.3);
                        this.addChild(playerSprite);
                        playerPosition = {
                            x: j,
                            y: i
                        };　　　　　　　　　　　　
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する

                        break;
                    case 3:
                    case 5:
                        var crateSprite = cc.Sprite.create(cache.getSpriteFrame("crate.png"));
                        crateSprite.setPosition(115 + 25 * j, 285 - 25 * i);
                        crateSprite.setScale(5);
                        this.addChild(crateSprite);
                        cratesArray[i][j] = crateSprite; //(i,j)の位置にcrateSpriteを入れる

                        break;
                    default:
                        cratesArray[i][j] = null; //木箱のコード以外の場合は、その場所に木箱がない値としてnullを代入する

                        break;
                }
            }
        }


        cc.eventManager.addListener(listener, this);
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
    },
});

var listener = cc.EventListener.create({
    event: cc.EventListener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch, event) {
        startTouch = touch.getLocation();

        return true;
    },
    onTouchEnded: function(touch, event) {
        endTouch = touch.getLocation();
        swipeDirection();
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
        case 0:
        case 2:
            level[playerPosition.y][playerPosition.x] -= 4;
            playerPosition.x += deltaX;
            playerPosition.y += deltaY;
            level[playerPosition.y][playerPosition.x] += 4;
            playerSprite.setPosition(40 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);
            break;
        case 3:
        case 5:

            if (level[playerPosition.y + deltaY * 2][playerPosition.x + deltaX * 2] == 0 ||
                level[playerPosition.y + deltaY * 2][playerPosition.x + deltaX * 2] == 2) {
                level[playerPosition.y][playerPosition.x] -= 4;
                playerPosition.x += deltaX;
                playerPosition.y += deltaY;
                level[playerPosition.y][playerPosition.x] += 1;
                playerSprite.setPosition(40 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);
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
            break;
    }
  
}







function clear() {
    cc.director.runScene(new ResultScene());
}

function over() {
    cc.director.runScene(new overScene());
}

function hidariniiku() {
    move(-1, 0);
}

function ueniiku() {
  move(0, -1);
}

function miginiiku() {
  move(1, 0);
}
function sitaniiku() {
  move(0,1)
}
