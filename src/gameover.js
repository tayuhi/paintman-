//thirdScene.js
//nextScene.js

var yonLayer = cc.Layer.extend({

    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();

        }
        //音楽再生エンジン
        audioEngine = cc.audioEngine;
        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            audioEngine.playMusic(res.gameover, true);

        }
        stagesusumu = 0;
        missText = cc.LabelTTF.create("SCORE " + miss, "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(missText);
        missText.setPosition(250, 1250);
        missText.setScale(3.5);
        //画像
        var sprite2nd = cc.Sprite.create(res.GAMEOVER);
        /*sprite.setPosition(size.width / 1.5, size.height / 2);
        sprite.setScale(10, 5);*/
        sprite2nd.setPosition(size.width / 2, size.height / 2);
        sprite2nd.setScale(2.5);
        this.addChild(sprite2nd, 0);



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
      miss = 0;
    //  var reset = overreset;
    //  level = reset;

        cc.director.runScene(new FirstScene());
dottota = 0;

        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();

        }

    },
});


var overScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer2 = new cc.LayerColor(new cc.Color(0, 0, 0, 250));
        this.addChild(backgroundLayer2);

        //ラベルとタップイベント取得
        var layer4 = new yonLayer();
        this.addChild(layer4);

    }
});
