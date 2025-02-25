class TypeWriter {
  constructor(params) {
    params = {
      dom: "",
      text: "",
      speed: 60,
      isPlay: true,
      isLoop: false,
      ...params,
    };
    this.params = params;
    this.content = params.text;
    this.dom = params.dom;
    this._flag = 0;
    this._index = 0;

    if (params.isPlay) {
      this.play();
    }
  }

  play() {
    let t = this.content.charAt(this._index);
    if (t === ";") t = "<br>";
    this.dom.innerHTML += t;
    this._index++;

    this._flag = setTimeout(() => {
      if (this._index > this.content.length - 1) {
        if (this.params.isLoop) {
          this._index = 0;
          this.dom.innerHTML = "";
        } else {
          clearTimeout(this._flag);
        }
      } else {
        this.play();
      }
    }, this.params.speed);
  }
}

export { TypeWriter };
