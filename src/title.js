//thirdScene.js
//nextScene.js

var ThirdLayer = cc.Layer.extend({

    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        //音楽再生エンジン
        audioEngine = cc.audioEngine;
        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            audioEngine.playMusic(res.paintmantitle, true);
        }

        //画像
        var sprite = cc.Sprite.create(res.title);
        /*sprite.setPosition(size.width / 1.5, size.height / 2);
        sprite.setScale(10, 5);*/
        sprite.setPosition(size.width / 2, 1600);
        sprite.setScale(3,2.1);
        this.addChild(sprite, 0);
        var moveAction = cc.MoveTo.create(5, new cc.Point(size.width / 2, size.height / 1.4));
        sprite.runAction(moveAction);

        var sprite2 = cc.Sprite.create(res.titleplay);
        sprite2.setPosition(size.width / 1.7, size.height / 10);
        sprite2.setScale(1.5);
        this.addChild(sprite2, 0);



        var playtenmetu = cc.Blink.create(3000,2000);

         sprite2.runAction(cc.Sequence.create(playtenmetu));



        /*//画像
        var sprite = cc.Sprite.create(res.kage);
        sprite.setPosition(size.width / 1.3, size.height / 7);
        sprite.setScale(0.8);
        this.addChild(sprite, 0);
*/
    /*    var label = cc.LabelTTF.create("倉庫番", "Arial", 76);

        label.setPosition(size.width / 2, size.height * 1 / 6);
        this.addChild(label, 1);
*/


        // タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        return true;
    },



    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
      audioEngine.playEffect(res.powerup02);
var pause = setTimeout(function() {
        cc.director.runScene(new gameScene1());
dottota = 0;

        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();
//audioEngine.playEffect(res.warai);
        }
      }, 900);

    },
});


var FirstScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(0, 0, 0, 250));
        this.addChild(backgroundLayer);

        //ラベルとタップイベント取得
        var layer3 = new ThirdLayer();
        this.addChild(layer3);

    }
});
