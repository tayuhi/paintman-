var stagesusumu = 0;
var ResultLayer = cc.Layer.extend({
    sprite: null,
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();
        }
        stagesusumu++;
        var sprite = cc.Sprite.create(res.clear);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(2.4);
        this.addChild(sprite, 0);

        missText = cc.LabelTTF.create("SCORE " + miss, "PixelMplus10", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(missText);
        missText.setPosition(250, 1250);
        missText.setScale(3.5);



        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            //  audioEngine.playMusic(res.bgm_title, true);
        }

        audioEngine.playEffect(res.clearpaintman);
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
        //stage_num++;
        audioEngine.playEffect(res.powerup02);
        var pause = setTimeout(function() {

            if (stagesusumu == 1) {
                cc.director.runScene(new gameScene2());
            }
            if (stagesusumu == 2) {
                cc.director.runScene(new gameScene3());
            }
            if (stagesusumu == 3) {
                //cc.director.runScene(new gameSceneEX());
                cc.director.runScene(new FirstScene());
                stagesusumu = 0;
            }
            //bgmの再生をとめる
            if (audioEngine.isMusicPlaying()) {
                audioEngine.stopMusic();

            }
        }, 900);
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
