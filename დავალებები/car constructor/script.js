function Car() {
    this.setName = function (setName) {
        this.setName = setName;
        return this;
    };
    this.setColor = function (last) {
        this.setColor = last;
        return this;
    };
    this.setBrand = function (age) {
        this.setBrand = age
        return this;
    };
    this.save = function (eyeColor) {
        this.save = eyeColor
        return this;
    };;
}

let ford = new Car().setName("Ford").setColor("red").setBrand("Focus").save()


console.log(ford);