var context = require.context('./ts-src1', true, /\/(?!.*spec).*\.ts$/)
context.keys().forEach(context);
//import "./ts-src1/include1";
//import "./ts-src1/index1app";