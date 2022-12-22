import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'calculator';

  symbolArr: number[] = [42, 43, 45, 47];

  ans!: string;

  finalValue: string = '';

  constructor() {}
  display(data: any): void {
    var textValue: string = data.target.value;
    // console.log('textValue :>> ', textValue);
    (document.getElementById('writedata') as HTMLInputElement).value +=
      textValue;
  }

  getAnswer(): void {
    let ansData = (document.getElementById('writedata') as HTMLInputElement)
      .value;
    let getAnsdata = eval(ansData).toFixed(2);
    let doAnsdata = Math.abs(eval(ansData));

    let valAns = getAnsdata.substring(getAnsdata.indexOf('.') + 1);
    if (valAns == 0o0) {
      (document.getElementById('writedata') as HTMLInputElement as any).value =
        doAnsdata;
      // console.log('doAnsdata :>> ', doAnsdata);
    } else {
      (document.getElementById('writedata') as HTMLInputElement as any).value =
        getAnsdata;
      // console.log('getAnsdata :>> ', getAnsdata);
    }

    // (document.getElementById("writedata") as HTMLInputElement).value = getAnsdata;
    // console.log(ansData);
  }

  oneClear(): void {
    let finalData: string = (
      document.getElementById('writedata') as HTMLInputElement
    ).value;
    var charOne = finalData.slice(0, finalData.length - 1);
    console.log('charOne :>> ', charOne);
    (document.getElementById('writedata') as HTMLInputElement).value = charOne;
  }

  allClear(): void {
    (document.getElementById('writedata') as HTMLInputElement).value =
      this.finalValue;
  }

  blockChar(data: any): void {
    let a = data.keyCode;
    if (a >= 97 && a <= 122) {
      data.preventDefault();
    } else if (a >= 65 && a <= 96) {
      data.preventDefault();
    } else if (data.keyCode) {
      const dd = (document.getElementById('writedata') as HTMLInputElement)
        .value;
      let valData: string = data.target.value;
      let getValdata = valData.slice(-1);
      // console.log('getValdata :>> ', getValdata);

      if (getValdata === '+') {
        if (data.keyCode === 43) {
          data.preventDefault();
        } else if (this.symbolArr.includes(data.keyCode)) {
          (document.getElementById('writedata') as HTMLInputElement).value =
            valData.slice(0, valData.length - 1);
        }
      } else if (getValdata === '-') {
        if (data.keyCode === 45) {
          data.preventDefault();
        } else if (this.symbolArr.includes(data.keyCode)) {
          (document.getElementById('writedata') as HTMLInputElement).value =
            valData.slice(0, valData.length - 1);
        }
      } else if (getValdata === '*') {
        if (data.keyCode === 43) {
          data.preventDefault();
        } else if (this.symbolArr.includes(data.keyCode)) {
          (document.getElementById('writedata') as HTMLInputElement).value =
            valData.slice(0, valData.length - 1);
        }
      } else if (getValdata === '/') {
        if (data.keyCode === 47) {
          data.preventDefault();
        } else if (this.symbolArr.includes(data.keyCode)) {
          (document.getElementById('writedata') as HTMLInputElement).value =
            valData.slice(0, valData.length - 1);
        }
      }
    }
  }

  check(data: any): void {
    // console.log(data.target.value);
    var textValue: string = data.target.value;
    // console.log('textValue :>> ', data);
    if (data.keyCode == 13) {
      let outData: string = eval(textValue).toFixed(2);
      // console.log('outData :>> ', outData);
      (document.getElementById('writedata') as HTMLInputElement).value =
        outData;
    }
  }
}
