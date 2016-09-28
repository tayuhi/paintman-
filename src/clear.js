var stage_num = 0;

var ResultLayer = cc.Layer.extend({
  sprite: null,
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();
        }

        var sprite = cc.Sprite.create(res.clear);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(2.4);
        this.addChild(sprite, 0);





                if (!audioEngine.isMusicPlaying()) {
                    //audioEngine.playMusic("res/bgm_main.mp3", true);
                    audioEngine.playMusic(res.bgm_title, true);
                }

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
      stage_num++;
        cc.director.runScene(new gameScene());

        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();
        }

    },
});


var ResultScene = cc.Scene.extend({
    onEnter: function() {
        this._super();


        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(0, 0, 0, 250));
        this.addChild(backgroundLayer);

        //ラベルとタップイベント取得
        var layer3 = new ResultLayer();
        this.addChild(layer3);

    }
});
