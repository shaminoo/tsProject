//import {Message} from "./Message";
import * as $ from "jquery";
import {test} from "./testNamespace";

window.onload = () => {
    //let mess = new Message();
    //mess.show();
    let testClass = new test.testClass();
    testClass.show();
}