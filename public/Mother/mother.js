class MothersDayFromCoderMonkeyEye {
    constructor(){
        this.sayToMother="";
        //为什么是80岁，真希望是永远＋∞
        this.liveMaxAge=80;
        //刚刚出生的时候
        this.age = 0;
        //开始你的一生
        this.fromBornToOld();
    }
    fromBornToOld() {
        // 呱呱坠地，我们用哭的方式，面对这个世界，以及心疼母亲生我们的痛苦
        this.sayToMother = "呜呜大哭，crying......";
        while (this.isPeopleStillLive()) {
            switch (this.age) {
                case 0:
                    this.sayToMother = "呜呜大哭，crying......";
                    break;
                case 1:
                    this.sayToMother = "想对经常被我弄醒的妈妈说：谢谢你对我的照顾，给我洗尿布，给我的爱";
                    break;
                case 3:
                    this.sayToMother = "虽然我整天翻箱倒柜，把家里弄的一团糟，但是天真的我，真的很爱我妈妈";
                    break;
                case 7:
                    this.sayToMother = "之前是不懂事，没长大，到了七岁八岁万人嫌的时候，整天惹妈妈生气，调皮捣蛋";
                    break;
                case 10:
                    this.sayToMother = "按照妈妈的教诲，开始读书学习";
                    break;
                case 16:
                    this.sayToMother = "妈妈你真的很烦人，天天就知道唠叨";
                    break;
                case 18:
                    this.sayToMother = "成人了，真想快点离开这个整天烦人，唠叨的家?";
                    break;
                case 25:
                    this.sayToMother = "妈妈,您当时是对的，感谢您的教诲和唠叨";
                    break;
                case 30:
                    this.sayToMother = "带上孩子和媳妇，说：走，去看看咱妈";
                    break;
                case 40:
                    this.sayToMother = "妈妈，我来照顾你，别再为我操劳了";
                    break;
                case 50:
                    this.sayToMother="时光时光慢些吧 不要再让你再变老了";
                    break;
                case 60:
                    this.sayToMother = "希望能和您永远在一起，妈，你别离开我好吗？";
                    break;
                case this.liveMaxAge:
                    this.sayToMother = "我愿用我一切 换你岁月长留";
                    break;
                default:
                    this.sayToMother = this.age+"岁的我说:…………（期待全是陪伴，父母要求的不多，陪伴才是最好的爱❤️）";
                    break;
            }
            console.log(this.sayToMother);
            this.age++;
        }
    }
    //活着
    isPeopleStillLive() {
        return  this.age>this.liveMaxAge ? false : true;
    }
}
new MothersDayFromCoderMonkeyEye();