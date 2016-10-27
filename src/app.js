var size;
//var stageflag = 0;

var level;

var map;

var level = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 4, 1],
    [1, 0, 1, 0, 0, 0, 1, 7, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 2, 0, 2, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 2, 0, 2, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 10, 0, 9, 0, 8, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


var miss = 0;
var missText;

var miss2 = 3;
var missText2;

//kokoko = level[];
var playerPosition; //マップ内のプレイやの位置(ｘ、ｙ)を保持する
var enemyPosition;
var playerSprite; //プレイヤーのスプライト
var cratesArray = []; //配置した木箱のスプライトを配列に保持する
var dotArray = [];
var spritedot;

var startTouch;
var endTouch;
var swipeTolerance = 10; //スワイプかを判断する閾値
var audioEngine;
var flag = 0;
var pickedTiles = [];
var dot = [];

var gameScene1 = cc.Scene.extend({
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
            //  audioEngine.playMusic(res.bgm_main, true);
        }
        //dotした回数
        missText = cc.LabelTTF.create("SCORE: 0", "Arial", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(missText);
        missText.setPosition(300, 50);
        //dotした回数
        missText2 = cc.LabelTTF.create("残機: 3", "Arial", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(missText2);
        missText2.setPosition(100, 50);
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






        var sprite9 = cc.Sprite.create(res.suuji3);
        sprite9.setPosition(245, 1350);
        sprite9.setScale(1);
        this.addChild(sprite9, 0);

        var sprite10 = cc.Sprite.create(res.STAGE1);
        sprite10.setPosition(700, 1350);
        sprite10.setScale(1);
        this.addChild(sprite10, 0);

        var sprite11 = cc.Sprite.create(res.SCORE);
        sprite11.setPosition(200, 1250);
        sprite11.setScale(1);
        this.addChild(sprite11, 0);

        var sprite12 = cc.Sprite.create(res.suuji0);
        sprite12.setPosition(445, 1250);
        sprite12.setScale(1);
        this.addChild(sprite12, 0);



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
            for (j = 0; j < 15; j++) {
                switch (level[i][j]) {
                    case 0:
                        var spriteyuka = cc.Sprite.create(res.yuka);
                        spriteyuka.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyuka.setScale(0.21);
                        this.addChild(spriteyuka, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        break;
                    case 1:
                        var spritekabe = cc.Sprite.create(res.kabeblock);
                        spritekabe.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritekabe.setScale(0.19);
                        this.addChild(spritekabe, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        break;

                    case 2:
                        spritedot = cc.Sprite.create(res.dot);
                        spritedot.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spritedot.setScale(0.15);
                        this.addChild(spritedot, 0);
                        cratesArray[i][j] = spritedot;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = spritedot;
                        break;
                    case 4:

                    case 6:
                        playerSprite = cc.Sprite.create(res.paintmansiro1);
                        playerSprite.setPosition(30 + 75 * j, 1140 - 75 * i);
                        playerSprite.setScale(0.3);
                        this.addChild(playerSprite, 1);
                        playerSprite.workingFlag = false;
                        playerSprite.workingFlag2 = false;
                        playerSprite.iroflag = false;
                        playerSprite.iroflagaka = false;
                        playerSprite.schedule(this.working, 0.5);
                        playerSprite.schedule(this.working2, 0.5);


                        playerPosition = {
                            x: j,
                            y: i
                        };　　　　　　　　　　　　
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        break;

                    case 3:
                    case 5:
                        var crateSprite = cc.Sprite.create(cache.getSpriteFrame("crate.png"));
                        crateSprite.setPosition(115 + 25 * j, 285 - 25 * i);
                        crateSprite.setScale(5);
                        this.addChild(crateSprite);
                        cratesArray[i][j] = crateSprite; //(i,j)の位置にcrateSpriteを入れる
                        dotArray[i][j] = null;
                        break;
                    case 7:
                        var spriteteki = cc.Sprite.create(res.tekimannakaao);
                        spriteteki.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteteki.setScale(0.3);
                        this.addChild(spriteteki, 1);
                        /*var moveAction = cc.MoveTo.create(10.5, new cc.Point(550, 0));
                        spriteteki.runAction(moveAction);*/
                        enemyPosition = {
                            x: j,
                            y: i
                        };　　
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する

                        break;
                    case 8:
                        var spriteiroyukaao = cc.Sprite.create(res.iroyukaao);
                        spriteiroyukaao.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteiroyukaao.setScale(0.19, 0.18);
                        this.addChild(spriteiroyukaao, 0);
                        cratesArray[i][j] = null;

                        break;
                    case 9:
                        var spriteyukaaka = cc.Sprite.create(res.iroyukaaka);
                        spriteyukaaka.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukaaka.setScale(0.19, 0.18);
                        this.addChild(spriteyukaaka, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        break;
                    case 10:
                        var spriteyukaki = cc.Sprite.create(res.iroyukaki);
                        spriteyukaki.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukaki.setScale(0.19, 0.18);
                        this.addChild(spriteyukaki, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        break;
                    case 11:
                        var spriteyukamidori = cc.Sprite.create(res.iroyukamidori);
                        spriteyukamidori.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamidori.setScale(0.19, 0.18);
                        this.addChild(spriteyukamidori, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        break;
                    case 12:
                        var spriteyukamurasaki = cc.Sprite.create(res.iroyukamurasaki);
                        spriteyukamurasaki.setPosition(30 + 75 * j, 1140 - 75 * i);
                        spriteyukamurasaki.setScale(0.19, 0.18);
                        this.addChild(spriteyukamurasaki, 0);
                        cratesArray[i][j] = null;　 //playerがいるので、その場所には木箱はないのでnullを代入する
                        dotArray[i][j] = null;
                        break;
                    default:
                        cratesArray[i][j] = null; //木箱のコード以外の場合は、その場所に木箱がない値としてnullを代入する
                        dotArray[i][j] = null;
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

    /*  update: function(dt) {
        var shipBoundingBox = playerSprite.getBoundingBox();
              var asteroidBoundingBox = test.getBoundingBox();
              if (cc.rectIntersectsRect(shipBoundingBox, asteroidBoundingBox)){
                miss++
            missText.setString("Miss: " + miss);
              }

              if (test.getPosition().y < 155 && Math.abs(test.getPosition().x - playerSprite.getPosition().x) < 25){

                miss++
            missText.setString("Miss: " + miss);

              }

      },*/

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
    }

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
        case 8:
        case 9:
        case 10:
        case 0:

            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 9) {
              playerSprite.iroflag = true;
                playerSprite.iroflagaka = true;
            }
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 7) {
                deltaX += 1;
                miss2--;
                missText2.setString("残機: " + miss2);
                if(miss2 == 0){
                  miss2 = 3;
                cc.director.runScene(new overScene());
              }
            }


            level[playerPosition.y][playerPosition.x] -= 4;
            playerPosition.x += deltaX;
            playerPosition.y += deltaY;

            level[playerPosition.y][playerPosition.x] += 4;
            playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);

            break;
        case 3:
        case 5:

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
            break;
        case 2:
            if (level[playerPosition.y + deltaY][playerPosition.x + deltaX] == 2) {
                level[playerPosition.y][playerPosition.x] -= 4;
                playerPosition.x += deltaX;
                playerPosition.y += deltaY;
                level[playerPosition.y][playerPosition.x] += 4;
                playerSprite.setPosition(30 + 75 * playerPosition.x, 1140 - 75 * playerPosition.y);


                var movingdot = dotArray[playerPosition.y][playerPosition.x];
                movingdot.setPosition(movingdot.getPosition().x + 1125 * deltaX, movingdot.getPosition().y - 1125 * deltaY);
                dotArray[playerPosition.y + deltaY][playerPosition.x + deltaX] = movingdot;
                dotArray[playerPosition.y][playerPosition.x] = null;
                miss++
                missText.setString("SCORE: " + miss);
                deltaY = -1;
                //deltaX += 5;


                if (miss == 5) {

                  miss = 0;
                    cc.director.runScene(new ResultScene());
                }
                break;
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
}
//上
function ueniiku() {
    //playerSprite.initWithFile(res.paintmansiro2);

    move(0, -1);
    var pause = setTimeout(function() {

    }, 500);
}
//右
function miginiiku() {
    move(1, 0);
}
//下
function sitaniiku() {
    move(0, 1)
        //spritedot.initWithFile(res.paintmansiro2);
}
//goを消すための
function gokesi() {

}
