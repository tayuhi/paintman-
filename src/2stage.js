/*
var size2;
var stageflag = 0;


var level2 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 3, 0, 2, 0, 1],
    [1, 0, 0, 4, 0, 0, 1],
    [1, 0, 0, 1, 2, 0, 1],
    [1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1]
];


var playerPosition2; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var playerSprite2; //プレイヤーのスプライト
var cratesArray2 = []; //配置した木箱のスプライトを配列に保持する

var startTouch2;
var endTouch2;
var swipeTolerance2 = 10; //スワイプかを判断する閾値
var audioEngine2;
var flag2 = 0;


var secondgameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        var layer02 = new gameLayer2();
        layer02.init();
        this.addChild(layer02);

        //音楽再生エンジン
        audioEngine2 = cc.audioEngine;
        //bgm再生
        if (!audioEngine2.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            audioEngine2.playMusic(res.bgm_main, true);
        }
    }
});

var gameLayer2 = cc.Layer.extend({
    init: function() {
        this._super();
        //スプライトフレームのキャッシュオブジェクトを作成する
        cache2 = cc.spriteFrameCache;
        //スプライトフレームのデータを読み込む
        cache2.addSpriteFrames(res.spritesheet_plist);
        var backgroundSprite2 = cc.Sprite.create(cache2.getSpriteFrame("background.png"));
        //アンチエイリアス処理を止める
        backgroundSprite2.getTexture().setAliasTexParameters();

        backgroundSprite2.setPosition(240, 160);
        //スプライトがとても小さいので拡大する
        backgroundSprite2.setScale(5);
        this.addChild(backgroundSprite2);

        var level2Sprite = cc.Sprite.create(cache2.getSpriteFrame("level.png"));
        level2Sprite.setPosition(240, 110);
        level2Sprite.setScale(5);
        this.addChild(level2Sprite);

        for (i = 0; i < 7; i++) {　　　　　　
            cratesArray2[i] = [];　 //配列オブジェクトの生成
            for (j = 0; j < 7; j++) {
                switch (level2[i][j]) {
                    case 4:
                    case 6:
                        playerSprite2 = cc.Sprite.create(cache2.getSpriteFrame("player.png"));
                        playerSprite2.setPosition(165 + 25 * j, 185 - 25 * i);
                        playerSprite2.setScale(5);
                        this.addChild(playerSprite2);
                        playerPosition2 = {
                            x: j,
                            y: i
                        };　　　　　　　　　　　　
                        cratesArray2[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        break;
                    case 3:
                    case 5:
                        var crateSprite2 = cc.Sprite.create(cache2.getSpriteFrame("crate.png"));
                        crateSprite2.setPosition(165 + 25 * j, 185 - 25 * i);
                        crateSprite2.setScale(5);
                        this.addChild(crateSprite2);
                        cratesArray2[i][j] = crateSprite2; //(i,j)の位置にcrateSpriteを入れる
                        break;
                    default:
                        cratesArray2[i][j] = null; //木箱のコード以外の場合は、その場所に木箱がない値としてnullを代入する
                        break;
                }
            }
        }
        //return true;
        cc.eventManager.addListener(listener, this);
    },
});

var listener = cc.Eventlistener.create({
    event2: cc.Eventlistener.TOUCH_ONE_BY_ONE,
    swallowTouches: true,
    onTouchBegan: function(touch2, event2) {
        startTouch2 = touch2.getLocation();
        return true;
    },
    onTouchEnded: function(touch2, event2) {
        endTouch2 = touch2.getLocation();
        swipeDirection2();
    }
});
//スワイプ方向を検出する処理
function swipeDirection2() {


    var distX2 = endTouch2.x - startTouch2.x;
    var distY2 = endTouch2.y - startTouch2.y;
    if (Math.abs(distX2) + Math.abs(distY) > swipeTolerance2) {
        if (Math.abs(distX2) > Math.abs(distY)) {
            if (distX2 > 0) { //右方向移動
                //playerSprite.setPosition(playerSprite.getPosition().x+25,playerSprite.getPosition().y);
                move2(1, 0);
            } else { //左方向移動
                //playerSprite.setPosition(playerSprite.getPosition().x-25,playerSprite.getPosition().y);
                move2(-1, 0);
            }
        } else {
            //  console.log("endTouch.y "+endTouch.y );
            //  console.log("startTouch.y "+startTouch.y );
            //  console.log("distY2"+ distY2);
            if (distY2> 0) { //上方向移動
                //  playerSprite.setPosition(playerSprite.getPosition().x,playerSprite.getPosition().y+25);
                console.log("上 move2(0,-1) distY2" + distY);
                move2(0, -1);

            } else { //下方向移動
                //playerSprite.setPosition(playerSprite.getPosition().x,playerSprite.getPosition().y-25);
                console.log("下 move2(0,1) distY2" + distY);
                move2(0, 1);
            }
        }
    }
}

function move2(deltaX2, deltaY2) {
    switch (level2[playerPosition2.y + deltaY2][playerPosition2.x + deltaX2]) {
        case 0:
        case 2:
            level2[playerPosition2.y][playerPosition2.x] -= 4;
            playerPosition2.x += deltaX2;
            playerPosition2.y += deltaY2;
            level2[playerPosition2.y][playerPosition2.x] += 4;
            playerSprite2.setPosition(165 + 25 * playerPosition2.x, 185 - 25 * playerPosition2.y);
            break;
        case 3:
        case 5:
            if (level2[playerPosition2.y + deltaY2 * 2][playerPosition2.x + deltaX2 * 2] == 0 ||
                level2[playerPosition2.y + deltaY2 * 2][playerPosition2.x + deltaX2 * 2] == 2) {
                level2[playerPosition2.y][playerPosition2.x] -= 4;
                playerPosition2.x += deltaX2;
                playerPosition2.y += deltaY2;
                level2[playerPosition2.y][playerPosition2.x] += 1;
                playerSprite2.setPosition(165 + 25 * playerPosition2.x, 185 - 25 * playerPosition2.y);
                level2[playerPosition2.y + deltaY2][playerPosition2.x + deltaX2] += 3;
                //落ちた木箱
                if (level2[playerPosition2.y + deltaY2][playerPosition2.x + deltaX2] == 5) {
                    flag2++;
                    level2[playerPosition2.y + deltaY2][playerPosition2.x + deltaX2] -= 5;
                    if (flag2 == 1) {
                        cc.director.runScene(new ResultScene());
                        //level[playerPosition2.y+deltaY2][playerPosition2.x+deltaX2]+=1;
                    }
                }
                var movingCrate2 = cratesArray2[playerPosition2.y][playerPosition2.x];
                movingCrate2.setPosition(movingCrate2.getPosition().x + 25 * deltaX2, movingCrate2.getPosition().y - 25 * deltaY2);
                cratesArray2[playerPosition2.y + deltaY2][playerPosition2.x + deltaX2] = movingCrate2;
                cratesArray2[playerPosition2.y][playerPosition2.x] = null;
            }
            break;
    }
}
*/
