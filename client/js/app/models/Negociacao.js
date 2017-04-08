class Negociacao {

    constructor(date, quantidade, valor) {
        this._data = new Date(date.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //congela o objeto para não ser mutavel pelo lado de fora
    }

    get data() {
        return new Date(this._data.getTime()); // programação defensiva
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._valor * this._quantidade;
    }



}