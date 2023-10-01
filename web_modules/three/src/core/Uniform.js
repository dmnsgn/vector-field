class Uniform {
    clone() {
        return new Uniform(this.value.clone === undefined ? this.value : this.value.clone());
    }
    constructor(value){
        this.value = value;
    }
}

export { Uniform };
