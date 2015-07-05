Create an async pipeline of js functions.
e.g. if there are 4 functions with async nature, make sure that they get triggered & executed in the following order-
asyncF1() followed by
asyncF2() followed by
asyncF3() followed by
asyncF4()

The program can be run as -

Pun-agarwala-m:assign2-asynPipeline agarwala$ node
> var program = require('./program');
undefined
> program
{ run: [Function], asyncRun: [Function] }
> program.asyncRun()
f1 triggered
undefined
> f1 completed
f2 triggered
f2 completed
f3 triggered
f3 completed
f4 triggered
f4 completed