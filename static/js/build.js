function get(x) { return document.getElementById(`clock-letter-${x}`) }
    
function getGroup(min,max) {
    var lst=[]
    for (var i = min; i <= max; i++) lst.push(get(i))
    return lst
}

function turnGroupOn(min,max) { getGroup(min,max).forEach((e)=>{e.classList.add("active")}) }

class Wordclock {
    constructor() {
        this.prefix = "clock-letter-"
        this.clockLetters = [...document.getElementsByClassName(".clock-letter")];
        this.localDate = new Date();
        this.mins = this.localDate.getMinutes();
        this.hrs = this.localDate.getHours();
        this.on();

        //update every 10s
        this.update();
        setInterval(() => { this.update() }, 500);
    }

    update() {
        this.localDate = new Date()
        if (this.mins == this.localDate.getMinutes() && this.hrs == this.localDate.getHours()) return 
        this.mins = this.localDate.getMinutes();
        this.hrs = this.localDate.getHours();
        this.on();
    }
    
    turnGroupOn(min,max) { this.getGroup(min,max).forEach((e)=>{e.classList.add("active")}) }

    on() {        
        document.querySelectorAll(".clock-letter").forEach((e) => { e.classList.remove("active") });
        this.alwaysOn();
        
        if (this.mins <= 30 && this.mins > 0) { this.past() }
        if (this.mins > 30 && this.mins < 60) { this.to() }
        
        var minutes = [
            this.oclock,
            this.oneM,
            this.twoM,
            this.threeM,
            this.fourM,
            this.fiveM,
            this.sixM,
            this.sevenM,
            this.eightM,
            this.nineM,
            this.tenM,
            this.elevenM,
            this.twelveM,
            this.thirteen,
            this.fourteen,
            this.quarter,
            this.sixteen,
            this.seventeen,
            this.eighteen,
            this.nineteen,
            this.twenty,
            this.m21,
            this.m22,
            this.m23,
            this.m24,
            this.m25,
            this.m26,
            this.m27,
            this.m28,
            this.m29,
            this.half,
            this.m29,
            this.m28,
            this.m27,
            this.m26,
            this.m25,
            this.m24,
            this.m23,
            this.m22,
            this.m21,
            this.twenty,
            this.nineteen,
            this.eighteen,
            this.seventeen,
            this.sixteen,
            this.quarter,
            this.fourteen,
            this.thirteen,
            this.twelveM,
            this.elevenM,
            this.tenM,
            this.nineM,
            this.eightM,
            this.sevenM,
            this.sixM,
            this.fiveM,
            this.fourM,
            this.threeM,
            this.twoM,
            this.oneM
        ];
        
        minutes[this.mins]();
        
        var hours = [
            null,
            this.oneH,
            this.twoH,
            this.threeH,
            this.fourH,
            this.fiveH,
            this.sixH,
            this.sevenH,
            this.eightH,
            this.nineH,
            this.tenH,
            this.elevenH,
            this.twelveH,
        ];
        
        if (this.mins > 30) {
            if (this.hrs+1 > 12) hours[this.hrs-11]()
            else hours[this.hrs+1]()
        } else {
            if (this.hrs > 12) hours[this.hrs-12]()
            else hours[this.hrs]()
        }
    }
    
    m21() {turnGroupOn(17,22);turnGroupOn(48,50)}
    m22() {turnGroupOn(17,22);turnGroupOn(65,67)}
    m23() {turnGroupOn(17,22);turnGroupOn(102,106)}
    m24() {turnGroupOn(17,22);turnGroupOn(40,43)}
    m25() {turnGroupOn(17,22);turnGroupOn(85,88)}
    m26() {turnGroupOn(17,22);turnGroupOn(51,53)}
    m27() {turnGroupOn(17,22);turnGroupOn(68,72)}
    m28() {turnGroupOn(17,22);turnGroupOn(88,92)}
    m29() {turnGroupOn(17,22);turnGroupOn(76,79)}
    
    tenH() {turnGroupOn(130,132)}
    oclock() {turnGroupOn(163,168)}
    fiveH() {turnGroupOn(158,161)}
    oneH() {turnGroupOn(133,135)}
    twoH() {turnGroupOn(150,152)}
    sixH() {turnGroupOn(147,149)}
    elevenH() {turnGroupOn(141,146)}
    twelveH() {turnGroupOn(136,141)}
    threeH() {turnGroupOn(153,157)}
    eightH() {turnGroupOn(126,130)}
    nineH() {turnGroupOn(123,126)}
    sevenH() {turnGroupOn(119,123)}
    fourH() {turnGroupOn(115,118)}
    to() {turnGroupOn(112,113)}
    past() {turnGroupOn(108,111)}
    threeM() {turnGroupOn(102,106)}
    twelveM() {turnGroupOn(96,101)}
    eighteen() {turnGroupOn(88,95)}
    eightM() {turnGroupOn(88,92)}
    fiveM() {turnGroupOn(85,88)}
    nineteen() {turnGroupOn(76,83)}
    nineM() {turnGroupOn(76,79)}
    seventeen() {turnGroupOn(68,76)}
    sevenM() {turnGroupOn(68,72)}
    twoM() {turnGroupOn(65,67)}
    fifteen() {turnGroupOn(58,64)}
    sixteen() {turnGroupOn(51,57)}
    sixM() {turnGroupOn(51,53)}
    oneM() {turnGroupOn(48,50)}
    fourteen() {turnGroupOn(40,47)}
    fourM() {turnGroupOn(40,43)}
    elevenM() {turnGroupOn(34,39)}
    thirteen() {turnGroupOn(26,33)}
    tenM() {turnGroupOn(23,25)}
    twenty() {turnGroupOn(17,22)}
    half() {turnGroupOn(13,16)}
    quarter() {turnGroupOn(6,12)}
    
    alwaysOn() { [this.get(0),this.get(1),this.get(3),this.get(4),this.get(169)].forEach((e)=>{e.classList.add("active")}) }
    
    get(x) { return document.getElementById(this.prefix+x.toString()) }
    
    getGroup(min,max) {
        var lst=[]
        for (var i = min; i <= max; i++) { lst.push(this.get(i)) }
        return lst
    }
}

new Wordclock()
